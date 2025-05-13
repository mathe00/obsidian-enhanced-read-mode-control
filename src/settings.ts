// src/settings.ts

import { App, PluginSettingTab, Setting, ToggleComponent, ButtonComponent, TextComponent, TFolder, TFile, normalizePath, Notice } from 'obsidian';
import EnhancedReadModeControlPlugin from './main';
import { FileSuggest, FolderSuggest } from './suggesters';
import { t, getAvailableLanguages, loadTranslations } from './lang/translations';

/**
 * Creates the settings tab for the Enhanced Read Mode Control plugin.
 */
export class ReadModeControlSettingTab extends PluginSettingTab {
	plugin: EnhancedReadModeControlPlugin;

	constructor(app: App, plugin: EnhancedReadModeControlPlugin) {
		super(app, plugin);
		this.plugin = plugin;
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
            button.setButtonText(itemType === 'regex' ? 'Add Regex' : 'Add Path').setIcon('plus').onClick(async () => {
                const newItem = textInput.inputEl.value.trim();
                if (!newItem) return;

                let isValid = true;
                if (itemType === 'file' || itemType === 'folder') {
                    const normalizedNewItem = normalizePath(newItem);
                    const abstractFile = this.app.vault.getAbstractFileByPath(normalizedNewItem);
                    isValid = itemType === 'file' ? (abstractFile instanceof TFile) : (abstractFile instanceof TFolder);
                    if (isValid && !currentItems.includes(normalizedNewItem)) {
                        currentItems.push(normalizedNewItem);
                    } else if (!isValid) {
                         this.plugin.logDebug(`Attempted to add invalid ${itemType} path: ${newItem}`);
                    } else {
                        this.plugin.logDebug(`Path already exists: ${normalizedNewItem}`);
                        isValid = false;
                    }
                } else if (itemType === 'regex') {
                    try {
                        new RegExp(newItem);
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
                    return;
                }
                textInput.inputEl.classList.remove('is-invalid');

                await saveCallback(currentItems);
                this.plugin.logDebug(`Added ${itemType}: ${newItem}`);
                this.redisplayList(pathListContainer, currentItems, saveCallback, itemType);
                textInput.setValue('');
            });
        });

        const pathListContainer = containerEl.createDiv('ermc-path-list-container');
        this.redisplayList(pathListContainer, currentItems, saveCallback, itemType);
    }

    /**
     * Helper to render the list of added items with delete buttons.
     */
    private redisplayList(
        containerEl: HTMLElement,
        items: string[],
        saveCallback: (newItems: string[]) => Promise<void>,
        itemType: 'file' | 'folder' | 'regex'
    ): void {
        containerEl.empty();
        if (items.length === 0) {
            containerEl.createEl('p', { text: `No ${itemType === 'regex' ? 'regex patterns' : itemType + 's'} added yet.`, cls: 'setting-item-description ermc-empty-list-message' });
        }
        items.forEach((item, index) => {
            new Setting(containerEl)
                .setName(item)
                .setClass('ermc-path-list-item')
                .addButton((button) =>
                    button.setIcon('trash').setTooltip(`Remove ${item}`).onClick(async () => {
                        items.splice(index, 1);
                        await saveCallback(items);
                        this.plugin.logDebug(`Removed ${itemType}: ${item}`);
                        this.redisplayList(containerEl, items, saveCallback, itemType);
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

        // Language Setting (Add this near the top)
        new Setting(containerEl)
            .setName(t('SETTINGS_PLUGIN_LANGUAGE_TITLE'))
            .setDesc(t('SETTINGS_PLUGIN_LANGUAGE_DESC'))
            .addDropdown(dropdown => {
                const languages = getAvailableLanguages();
                // Add 'auto' first, then sorted specific languages
                dropdown.addOption('auto', languages['auto'] || 'Automatic (Match Obsidian)');
                Object.keys(languages)
                    .filter(code => code !== 'auto')
                    .sort((a, b) => languages[a].localeCompare(languages[b])) // Sort by display name
                    .forEach(code => {
                        dropdown.addOption(code, languages[code]);
                    });

                dropdown
                    .setValue(this.plugin.settings.pluginLanguage)
                    .onChange(async (value) => {
                        this.plugin.settings.pluginLanguage = value;
                        // We need to save settings, then reload translations, then redraw the UI
                        await this.plugin.saveSettings(); // This calls loadTranslations in main.ts
                        // To ensure the settings tab itself redraws with the new language immediately:
                        this.display();
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
            FileSuggest
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
                    this.display();
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
                },
                'regex'
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
                },
                'regex'
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
                    frag.appendText(' • ');
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
