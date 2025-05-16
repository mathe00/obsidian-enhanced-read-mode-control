// src/settings.ts

import { App, PluginSettingTab, Setting, ToggleComponent, ButtonComponent, TextComponent, TFolder, TFile, normalizePath, Notice,setIcon } from 'obsidian';
import EnhancedReadModeControlPlugin from './main';
import { FileSuggest, FolderSuggest } from './suggesters';
import { t, getAvailableLanguages, loadTranslations } from './lang/translations';
import { ReadModeControlSettings, ConflictInfo } from './types';


/**
 * Detects configuration conflicts between different read-only lists.
 * Only considers exact path matches for now.
 * @param settings The current plugin settings.
 * @returns An array of ConflictInfo objects.
 */
export function detectPathConflicts(settings: ReadModeControlSettings): ConflictInfo[] {
    const conflicts: ConflictInfo[] = [];
    const {
        defaultReadOnlyFiles,
        strictReadOnlyFiles,
        defaultReadOnlyFolders,
        strictReadOnlyFolders
    } = settings;

    // Normalize helper for paths within this function
    const norm = (p: string) => normalizePath(p.replace(/^\/|\/$/g, ''));

    // Conflict 1: File in both defaultFiles and strictFiles
    defaultReadOnlyFiles.forEach(df => {
        if (strictReadOnlyFiles.includes(df)) {
            conflicts.push({
                path: df,
                listType: 'defaultFile',
                conflictType: 'directSamePathFile',
                messageKey: 'CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT',
                conflictingPath: df,
                conflictingListType: 'strictFile'
            });
            conflicts.push({
                path: df,
                listType: 'strictFile',
                conflictType: 'directSamePathFile',
                messageKey: 'CONFLICT_DIRECT_SAME_PATH_FILE_STRICT',
                conflictingPath: df,
                conflictingListType: 'defaultFile'
            });
        }
    });

    // Conflict 2: Folder in both defaultFolders and strictFolders
    defaultReadOnlyFolders.forEach(dfo => {
        const normalizedDfo = norm(dfo);
        if (strictReadOnlyFolders.map(norm).includes(normalizedDfo)) {
            conflicts.push({
                path: dfo, // Use original path for display
                listType: 'defaultFolder',
                conflictType: 'directSamePathFolder',
                messageKey: 'CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT',
                conflictingPath: dfo,
                conflictingListType: 'strictFolder'
            });
            conflicts.push({
                path: dfo, // Use original path for display
                listType: 'strictFolder',
                conflictType: 'directSamePathFolder',
                messageKey: 'CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT',
                conflictingPath: dfo,
                conflictingListType: 'defaultFolder'
            });
        }
    });

    // Conflict 3: Default file is inside a strict folder
    defaultReadOnlyFiles.forEach(df => {
        const normalizedDf = norm(df);
        strictReadOnlyFolders.forEach(sfo => {
            const normalizedSfo = norm(sfo);
            if (normalizedDf.startsWith(normalizedSfo + '/') || normalizedDf === normalizedSfo) { // Check if df is sfo or in sfo
                 if (normalizedDf !== normalizedSfo) { // Only if it's a file *within* the folder
                    conflicts.push({
                        path: df,
                        listType: 'defaultFile',
                        conflictType: 'defaultFileInStrictFolder',
                        messageKey: 'CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER',
                        conflictingPath: sfo,
                        conflictingListType: 'strictFolder'
                    });
                }
            }
        });
    });

    // Conflict 4: Strict file is inside a default folder (Info)
    strictReadOnlyFiles.forEach(sf => {
        const normalizedSf = norm(sf);
        defaultReadOnlyFolders.forEach(dfo => {
            const normalizedDfo = norm(dfo);
            if (normalizedSf.startsWith(normalizedDfo + '/') || normalizedSf === normalizedDfo) {
                 if (normalizedSf !== normalizedDfo) { // Only if it's a file *within* the folder
                    conflicts.push({
                        path: sf,
                        listType: 'strictFile',
                        conflictType: 'strictFileInDefaultFolder',
                        messageKey: 'CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER',
                        conflictingPath: dfo,
                        conflictingListType: 'defaultFolder'
                    });
                }
            }
        });
    });

    // Conflict 5: Default file is inside a default folder (Redundant)
    defaultReadOnlyFiles.forEach(df => {
        const normalizedDf = norm(df);
        defaultReadOnlyFolders.forEach(dfo => {
            const normalizedDfo = norm(dfo);
            if (normalizedDf.startsWith(normalizedDfo + '/') || normalizedDf === normalizedDfo) {
                 if (normalizedDf !== normalizedDfo) { // Only if it's a file *within* the folder
                    conflicts.push({
                        path: df,
                        listType: 'defaultFile',
                        conflictType: 'defaultFileInDefaultFolder',
                        messageKey: 'CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT',
                        conflictingPath: dfo,
                        conflictingListType: 'defaultFolder'
                    });
                }
            }
        });
    });

    // Conflict 6: Strict file is inside a strict folder (Redundant)
    strictReadOnlyFiles.forEach(sf => {
        const normalizedSf = norm(sf);
        strictReadOnlyFolders.forEach(sfo => {
            const normalizedSfo = norm(sfo);
            if (normalizedSf.startsWith(normalizedSfo + '/') || normalizedSf === normalizedSfo) {
                 if (normalizedSf !== normalizedSfo) { // Only if it's a file *within* the folder
                    conflicts.push({
                        path: sf,
                        listType: 'strictFile',
                        conflictType: 'strictFileInStrictFolder',
                        messageKey: 'CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT',
                        conflictingPath: sfo,
                        conflictingListType: 'strictFolder'
                    });
                }
            }
        });
    });

    return conflicts;
}


/**
 * Creates the settings tab for the Enhanced Read Mode Control plugin.
 */
export class ReadModeControlSettingTab extends PluginSettingTab {
	plugin: EnhancedReadModeControlPlugin;
    private lastConflictCheckResult: ConflictInfo[] = [];

	constructor(app: App, plugin: EnhancedReadModeControlPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

    private refreshConflictDisplay(): void {
        if (this.plugin.settings.conflictDetectionEnabled) {
            this.lastConflictCheckResult = detectPathConflicts(this.plugin.settings);
            if (this.plugin.settings.notifyOnConflict && this.lastConflictCheckResult.length > 0) {
                // Convert count to string for the translation function
                const summaryNotice = t('NOTICE_CONFLICTS_DETECTED_SUMMARY', { count: this.lastConflictCheckResult.length.toString() });
                new Notice(summaryNotice + "\n" + t('NOTICE_CHECK_SETTINGS_FOR_DETAILS'), 10000); // Longer notice
            }
        } else {
            this.lastConflictCheckResult = [];
        }
        // This will trigger a re-render of the lists by calling display()
        this.display();
    }

    /**
     * Helper function to create a UI for managing a list of paths or regex patterns.
     * @param containerEl The HTML element to append the settings to.
     * @param title The title for this settings section.
     * @param description A description for this settings section.
     * @param placeholder Placeholder text for the input field.
     * @param currentItems The current array of items (paths or regex strings) from plugin settings.
     * @param saveCallback A function to call when the list of items needs to be saved.
     * @param itemType 'file', 'folder', or 'regex' for validation/display purposes.
     * @param listIdentifier A unique identifier for the list (e.g., 'defaultFile', 'strictFolder')
     * @param SuggestClass Optional: The suggester class to use (FileSuggest or FolderSuggest).
     */
    private createListManagementUI(
        containerEl: HTMLElement,
        title: string,
        description: string,
        placeholder: string,
        currentItems: string[],
        saveCallback: (newItems: string[]) => Promise<void>,
        itemType: 'file' | 'folder' | 'regex',
        listIdentifier: 'defaultFile' | 'strictFile' | 'defaultFolder' | 'strictFolder',
        SuggestClass?: typeof FileSuggest | typeof FolderSuggest,
    ): void {
        new Setting(containerEl).setName(title).setDesc(description);

        const inputSetting = new Setting(containerEl).setClass('ermc-path-input-setting');
        let textInput: TextComponent;

        inputSetting.addText((text: TextComponent) => {
            textInput = text;
            text.setPlaceholder(placeholder);
            if (SuggestClass) {
                new SuggestClass(this.app, text.inputEl);
            }

            text.inputEl.addEventListener('blur', () => {
                const value = text.inputEl.value.trim();
                if (value) {
                    let isValid = true;
                    if (itemType === 'file' || itemType === 'folder') {
                        const abstractFile = this.app.vault.getAbstractFileByPath(normalizePath(value));
                        isValid = itemType === 'file' ? (abstractFile instanceof TFile) : (abstractFile instanceof TFolder);
                    } else if (itemType === 'regex') {
                        try {
                            new RegExp(value);
                        } catch (e) {
                            isValid = false;
                        }
                    }
                    if (!isValid) {
                        text.inputEl.classList.add('is-invalid');
                    } else {
                        text.inputEl.classList.remove('is-invalid');
                    }
                } else {
                    text.inputEl.classList.remove('is-invalid');
                }
            });
        });

        inputSetting.addButton((button: ButtonComponent) => {
            button.setButtonText(itemType === 'regex' ? t('SETTINGS_LIST_UI_ADD_REGEX_BUTTON') : t('SETTINGS_LIST_UI_ADD_PATH_BUTTON')).setIcon('plus').onClick(async () => {
                const newItem = textInput.inputEl.value.trim();
                if (!newItem) return;

                let isValid = true;
                let processedNewItem = newItem; // Store potentially normalized item

                if (itemType === 'file' || itemType === 'folder') {
                    processedNewItem = normalizePath(newItem);
                     if (itemType === 'folder') { // Normalize folder paths by removing trailing slashes
                        processedNewItem = processedNewItem.replace(/\/$/, '');
                    }
                    const abstractFile = this.app.vault.getAbstractFileByPath(processedNewItem);
                    isValid = itemType === 'file' ? (abstractFile instanceof TFile) : (abstractFile instanceof TFolder);

                    if (isValid && !currentItems.includes(processedNewItem)) {
                        currentItems.push(processedNewItem);
                    } else if (!isValid) {
                         this.plugin.logDebug(`Attempted to add invalid ${itemType} path: ${newItem} (normalized: ${processedNewItem})`);
                    } else { // Item already exists
                        this.plugin.logDebug(`Path already exists: ${processedNewItem}`);
                        isValid = false; // To prevent adding duplicates and to keep invalid class if needed
                    }
                } else if (itemType === 'regex') {
                    try {
                        new RegExp(newItem); // processedNewItem is newItem for regex
                        if (!currentItems.includes(newItem)) {
                            currentItems.push(newItem);
                        } else {
                             this.plugin.logDebug(`Regex already exists: ${newItem}`);
                             isValid = false;
                        }
                    } catch (e) {
                        isValid = false;
                        this.plugin.logDebug(`Attempted to add invalid regex: ${newItem}`);
                    }
                }


                if (!isValid) {
                    textInput.inputEl.classList.add('is-invalid');
                    if (currentItems.includes(processedNewItem) || (itemType === 'regex' && currentItems.includes(newItem))) {
                        new Notice(t(itemType === 'regex' ? 'SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX' : 'SETTINGS_LIST_UI_ALREADY_EXISTS_PATH', { path: processedNewItem }));
                    } else {
                        new Notice(t('SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX', { path: newItem, itemType: itemType }));
                    }
                    return;
                }
                textInput.inputEl.classList.remove('is-invalid');

                await saveCallback(currentItems);
                this.plugin.logDebug(`Added ${itemType}: ${processedNewItem}`);
                this.refreshConflictDisplay(); // Refresh conflicts and redisplay
                textInput.setValue(''); // Clear input after successful add
            });
        });

        const pathListContainer = containerEl.createDiv('ermc-path-list-container');
        // Pass conflicts to redisplayList
        this.redisplayList(pathListContainer, currentItems, saveCallback, itemType, listIdentifier, this.lastConflictCheckResult);
    }

    /**
     * Helper to render the list of added items with delete buttons and conflict indicators.
     */
    private redisplayList(
        containerEl: HTMLElement,
        items: string[],
        saveCallback: (newItems: string[]) => Promise<void>,
        itemType: 'file' | 'folder' | 'regex',
        listIdentifier: 'defaultFile' | 'strictFile' | 'defaultFolder' | 'strictFolder',
        conflicts: ConflictInfo[]
    ): void {
        containerEl.empty();
        if (items.length === 0) {
            let emptyMessage = '';
            switch(itemType) {
                case 'file': emptyMessage = t('SETTINGS_LIST_UI_EMPTY_FILES'); break;
                case 'folder': emptyMessage = t('SETTINGS_LIST_UI_EMPTY_FOLDERS'); break;
                case 'regex': emptyMessage = t('SETTINGS_LIST_UI_EMPTY_REGEX'); break;
            }
            containerEl.createEl('p', { text: emptyMessage, cls: 'setting-item-description ermc-empty-list-message' });
        }
        items.forEach((item, index) => {
            const itemConflicts = conflicts.filter(c => c.path === item && c.listType === listIdentifier);
            const isConflict = itemConflicts.length > 0;

            const settingItem = new Setting(containerEl)
                .setName(item)
                .setClass('ermc-path-list-item');

            if (isConflict && this.plugin.settings.conflictDetectionEnabled) {
                settingItem.settingEl.classList.add('ermc-conflict-item');
                const conflictIcon = createSpan({ cls: 'ermc-conflict-icon' });
                setIcon(conflictIcon, 'alert-triangle'); // Use Obsidian's built-in icon function
                settingItem.nameEl.prepend(conflictIcon);

                const tooltipMessages = itemConflicts.map(c => t(c.messageKey, { path: c.path, conflictingPath: c.conflictingPath || c.path })).join('\n');
                settingItem.nameEl.setAttribute('aria-label', tooltipMessages); // For accessibility and tooltips
            }


            settingItem.addButton((button) =>
                button.setIcon('trash').setTooltip(`${t('SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX')} ${item}`).onClick(async () => {
                    items.splice(index, 1);
                    await saveCallback(items);
                    this.plugin.logDebug(`Removed ${itemType}: ${item}`);
                    this.refreshConflictDisplay(); // Refresh conflicts and redisplay
                }),
            );
        });
    }


display(): void {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl('h2', {
			text: t('SETTINGS_TAB_MAIN_TITLE'),
		});

        if (this.plugin.settings.conflictDetectionEnabled) {
            // Ensure lastConflictCheckResult is populated before using its length
            if (!this.lastConflictCheckResult || this.lastConflictCheckResult.length === 0) {
                 this.lastConflictCheckResult = detectPathConflicts(this.plugin.settings);
            }
            if (this.lastConflictCheckResult.length > 0) {
                const diagnosticSection = containerEl.createDiv('ermc-diagnostics-section');
                diagnosticSection.createEl('h4', { text: t('SETTINGS_DIAGNOSTICS_TITLE')});
                // Convert count to string for the translation function
                const summary = t('NOTICE_CONFLICTS_DETECTED_SUMMARY', { count: this.lastConflictCheckResult.length.toString() });
                diagnosticSection.createEl('p', { text: summary + " " + t('NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE')});
            }
        } else {
            this.lastConflictCheckResult = [];
        }


        // Language Setting
        new Setting(containerEl)
            .setName(t('SETTINGS_PLUGIN_LANGUAGE_TITLE'))
            .setDesc(t('SETTINGS_PLUGIN_LANGUAGE_DESC'))
            .addDropdown(dropdown => {
                const languages = getAvailableLanguages();
                dropdown.addOption('auto', languages['auto'] || 'Automatic (Match Obsidian)');
                Object.keys(languages)
                    .filter(code => code !== 'auto')
                    .sort((a, b) => languages[a].localeCompare(languages[b]))
                    .forEach(code => {
                        dropdown.addOption(code, languages[code]);
                    });

                dropdown
                    .setValue(this.plugin.settings.pluginLanguage)
                    .onChange(async (value) => {
                        this.plugin.settings.pluginLanguage = value;
                        await this.plugin.saveSettings();
                        this.refreshConflictDisplay(); // Will call display()
                    });
            });


        // --- Exact Path Matching ---
        containerEl.createEl('h3', { text: t('SETTINGS_SECTION_EXACT_PATHS') });
        this.createListManagementUI(
            containerEl,
            t('SETTINGS_DEFAULT_FILES_EXACT_TITLE'),
            t('SETTINGS_DEFAULT_FILES_EXACT_DESC'),
            t('SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER'),
            this.plugin.settings.defaultReadOnlyFiles,
            async (newPaths) => {
                this.plugin.settings.defaultReadOnlyFiles = newPaths;
                await this.plugin.saveSettings();
            },
            'file',
            'defaultFile',
            FileSuggest
        );

        this.createListManagementUI(
            containerEl,
            t('SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE'),
            t('SETTINGS_DEFAULT_FOLDERS_EXACT_DESC'),
            t('SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER'),
            this.plugin.settings.defaultReadOnlyFolders,
            async (newPaths) => {
                this.plugin.settings.defaultReadOnlyFolders = newPaths.map(p => normalizePath(p.replace(/^\/|\/$/g, '')));
                await this.plugin.saveSettings();
            },
            'folder',
            'defaultFolder',
            FolderSuggest
        );

        this.createListManagementUI(
            containerEl,
            t('SETTINGS_STRICT_FILES_EXACT_TITLE'),
            t('SETTINGS_STRICT_FILES_EXACT_DESC'),
            t('SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER'),
            this.plugin.settings.strictReadOnlyFiles,
            async (newPaths) => {
                this.plugin.settings.strictReadOnlyFiles = newPaths;
                await this.plugin.saveSettings();
            },
            'file',
            'strictFile',
            FileSuggest
        );

        this.createListManagementUI(
            containerEl,
            t('SETTINGS_STRICT_FOLDERS_EXACT_TITLE'),
            t('SETTINGS_STRICT_FOLDERS_EXACT_DESC'),
            t('SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER'),
            this.plugin.settings.strictReadOnlyFolders,
            async (newPaths) => {
                this.plugin.settings.strictReadOnlyFolders = newPaths.map(p => normalizePath(p.replace(/^\/|\/$/g, '')));
                await this.plugin.saveSettings();
            },
            'folder',
            'strictFolder',
            FolderSuggest
        );

        // --- Regex Path Matching (BETA) ---
        containerEl.createEl('h3', { text: t('SETTINGS_SECTION_REGEX_BETA') });
        new Setting(containerEl)
            .setName(t('SETTINGS_ENABLE_REGEX_TITLE'))
            .setDesc(createFragment((frag) => {
                frag.appendText(t('SETTINGS_ENABLE_REGEX_DESC_PART1'));
                frag.createEl('strong', {text: t('SETTINGS_ENABLE_REGEX_DESC_PART2')});
                frag.appendText(t('SETTINGS_ENABLE_REGEX_DESC_PART3'));
            }))
            .addToggle((toggle) => toggle
                .setValue(this.plugin.settings.enableRegexMatching)
                .onChange(async (value) => {
                    this.plugin.settings.enableRegexMatching = value;
                    await this.plugin.saveSettings();
                    this.refreshConflictDisplay();
                })
            );

        if (this.plugin.settings.enableRegexMatching) {
            this.createListManagementUI(
                containerEl,
                t('SETTINGS_DEFAULT_REGEX_TITLE'),
                t('SETTINGS_DEFAULT_REGEX_DESC'),
                t('SETTINGS_DEFAULT_REGEX_PLACEHOLDER'),
                this.plugin.settings.defaultReadOnlyRegex,
                async (newRegexes) => {
                    this.plugin.settings.defaultReadOnlyRegex = newRegexes;
                    await this.plugin.saveSettings();
                    this.refreshConflictDisplay(); 
                },
                'regex',
                'defaultFile' 
            );

            this.createListManagementUI(
                containerEl,
                t('SETTINGS_STRICT_REGEX_TITLE'),
                t('SETTINGS_STRICT_REGEX_DESC'),
                t('SETTINGS_STRICT_REGEX_PLACEHOLDER'),
                this.plugin.settings.strictReadOnlyRegex,
                async (newRegexes) => {
                    this.plugin.settings.strictReadOnlyRegex = newRegexes;
                    await this.plugin.saveSettings();
                    this.refreshConflictDisplay(); 
                },
                'regex',
                'strictFile' 
            );
        }


        // --- Behavior Settings ---
        containerEl.createEl('h3', { text: t('SETTINGS_SECTION_BEHAVIOR') });
        new Setting(containerEl)
            .setName(t('SETTINGS_FORCE_EDIT_UNMANAGED_TITLE'))
            .setDesc(
                createFragment((frag) => {
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO'));
                    frag.createEl('br');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL')});
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT'));
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB')});
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END'));
                    frag.createEl('br');
                    frag.createEl('br');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL')});
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL')});
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT'));
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL')});
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT'));
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL')});
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT'));
                    frag.createEl('br');
                    frag.createEl('br');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL')});
                    frag.appendText(' (');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL')});
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT'));
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL')});
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT'));
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL')});
                    frag.appendText(t('SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT'));
                })
            )
            .addToggle((toggle: ToggleComponent) => {
                toggle
                    .setValue(this.plugin.settings.forceSourceOnUnmanaged)
                    .onChange(async (value) => {
                        this.plugin.settings.forceSourceOnUnmanaged = value;
                        await this.plugin.saveSettings();
                        this.plugin.logDebug(
                            `Force source on unmanaged setting: ${value ? 'enabled' : 'disabled'}.`,
                        );
                    });
            });


		// --- Feedback & Debugging ---
		containerEl.createEl('h3', { text: t('SETTINGS_SECTION_FEEDBACK_DEBUG') });
        new Setting(containerEl)
            .setName(t('SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE'))
            .setDesc(t('SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC'))
            .addToggle((toggle) => toggle
                .setValue(this.plugin.settings.notifyOnModeChange)
                .onChange(async (value) => {
                    this.plugin.settings.notifyOnModeChange = value;
                    await this.plugin.saveSettings();
                    if (value) {
                        this.plugin.logDebug('Mode change notifications enabled.');
                        new Notice(t('NOTICE_NOTIFICATIONS_ENABLED'));
                    } else {
                        this.plugin.logDebug('Mode change notifications disabled.');
                    }
                })
            );

        new Setting(containerEl)
            .setName(t('SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE'))
            .setDesc(t('SETTINGS_ENABLE_CONFLICT_DETECTION_DESC'))
            .addToggle((toggle) => toggle
                .setValue(this.plugin.settings.conflictDetectionEnabled)
                .onChange(async (value) => {
                    this.plugin.settings.conflictDetectionEnabled = value;
                    await this.plugin.saveSettings();
                    this.refreshConflictDisplay();
                })
            );
        
        new Setting(containerEl)
            .setName(t('SETTINGS_NOTIFY_ON_CONFLICT_TITLE'))
            .setDesc(t('SETTINGS_NOTIFY_ON_CONFLICT_DESC'))
            .addToggle((toggle) => toggle
                .setValue(this.plugin.settings.notifyOnConflict)
                .onChange(async (value) => {
                    this.plugin.settings.notifyOnConflict = value;
                    await this.plugin.saveSettings();
                })
            );

		new Setting(containerEl)
			.setName(t('SETTINGS_ENABLE_DEBUG_LOGGING_TITLE'))
			.setDesc(t('SETTINGS_ENABLE_DEBUG_LOGGING_DESC'))
			.addToggle((toggle: ToggleComponent) => {
				toggle
					.setValue(this.plugin.settings.debugLoggingEnabled)
					.onChange(async (value) => {
						this.plugin.settings.debugLoggingEnabled = value;
						await this.plugin.saveSettings();
						if (value) {
                            this.plugin.logDebug(
                                `Debug logging enabled.`,
                            );
                        }
					});
			});
	}
}
