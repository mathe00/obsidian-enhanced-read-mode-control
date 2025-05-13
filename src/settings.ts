// src/settings.ts

import { App, PluginSettingTab, Setting, ToggleComponent, ButtonComponent, TextComponent, TFolder, TFile, normalizePath } from 'obsidian';
import EnhancedReadModeControlPlugin from './main';
import { FileSuggest, FolderSuggest } from './suggesters';

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
                new SuggestClass(this.app, text.inputEl); // Attach suggester if provided
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
                            new RegExp(value); // Try to compile regex
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
                        isValid = false; // Prevent adding duplicates as "invalid" for UI feedback
                    }
                } else if (itemType === 'regex') {
                    try {
                        new RegExp(newItem); // Validate regex
                        if (!currentItems.includes(newItem)) {
                            currentItems.push(newItem);
                        } else {
                             this.plugin.logDebug(`Regex already exists: ${newItem}`);
                             isValid = false; // Prevent adding duplicates
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
			text: 'Enhanced Read Mode Control Settings',
		});

        // --- Exact Path Matching ---
        containerEl.createEl('h3', { text: 'Exact Path Matching' });
        this.createListManagementUI(
            containerEl,
            'Default Read-Only Files (Exact Paths)',
            'Files listed here will open in read-only mode by default. Uses exact path matching.',
            'Enter file path (e.g., Notes/MyFile.md)',
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
            'Strict Read-Only Files (Exact Paths)',
            'Files listed here will be forced into read-only mode. Uses exact path matching.',
            'Enter file path (e.g., Templates/Protected.md)',
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
            'Strict Read-Only Folders (Exact Paths)',
            'All notes within these folders (and subfolders) will be forced into strict read-only mode. Uses exact path matching.',
            'Enter folder path (e.g., Archive/2023)',
            this.plugin.settings.strictReadOnlyFolders,
            async (newPaths) => {
                this.plugin.settings.strictReadOnlyFolders = newPaths.map(p => normalizePath(p.replace(/^\/|\/$/g, '')));
                await this.plugin.saveSettings();
            },
            'folder',
            FolderSuggest
        );

        // --- Regex Path Matching (BETA) ---
        containerEl.createEl('h3', { text: 'Regex Path Matching (BETA)' });
        new Setting(containerEl)
            .setName('Enable Regex Matching (BETA)')
            .setDesc(createFragment((frag) => {
                frag.appendText('Enable matching file paths against regular expressions. This is a BETA feature. ');
                frag.createEl('strong', {text: 'Use with caution: '});
                frag.appendText('invalid regex patterns can cause errors or unexpected behavior. Regex matching is checked AFTER exact folder/file matches.');
            }))
            .addToggle((toggle) => toggle
                .setValue(this.plugin.settings.enableRegexMatching)
                .onChange(async (value) => {
                    this.plugin.settings.enableRegexMatching = value;
                    await this.plugin.saveSettings();
                    this.display(); // Re-render to show/hide regex sections
                })
            );

        if (this.plugin.settings.enableRegexMatching) {
            this.createListManagementUI(
                containerEl,
                'Default Read-Only (Regex Patterns)',
                'File paths matching any regex pattern here will open in default read-only mode. One JavaScript regex pattern per line (without slashes).',
                'Enter regex pattern (e.g., ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',
                this.plugin.settings.defaultReadOnlyRegex,
                async (newRegexes) => {
                    this.plugin.settings.defaultReadOnlyRegex = newRegexes;
                    await this.plugin.saveSettings();
                },
                'regex' // No suggester for regex
            );

            this.createListManagementUI(
                containerEl,
                'Strict Read-Only (Regex Patterns)',
                'File paths matching any regex pattern here will be forced into strict read-only mode. One JavaScript regex pattern per line (without slashes).',
                'Enter regex pattern (e.g., ^Templates/.*)',
                this.plugin.settings.strictReadOnlyRegex,
                async (newRegexes) => {
                    this.plugin.settings.strictReadOnlyRegex = newRegexes;
                    await this.plugin.saveSettings();
                },
                'regex' // No suggester for regex
            );
        }


        // --- Behavior Settings ---
        containerEl.createEl('h3', { text: 'Behavior' });
        new Setting(containerEl)
            .setName('Force Edit Mode on Unmanaged Notes')
            .setDesc(
                createFragment((frag) => {
                    frag.appendText('Choose how the plugin handles notes NOT listed in the settings above.');
                    frag.createEl('br');
                    frag.createEl('strong', { text: 'Problem:' });
                    frag.appendText(' When navigating from a plugin-controlled note (read-only) to a normal note ');
                    frag.createEl('strong', { text: 'in the same tab'});
                    frag.appendText(', Obsidian might leave the normal note incorrectly stuck in read-only mode.');
                    frag.createEl('br');
                    frag.createEl('br');
                    frag.createEl('strong', { text: 'Option 1: DISABLED (Default)'});
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: 'Action:'});
                    frag.appendText(' Plugin NEVER forces edit mode on normal notes.');
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: 'Benefit:'});
                    frag.appendText(' Fully respects manual changes. If you set a normal note to read-only, it stays that way.');
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: 'Drawback:'});
                    frag.appendText(' The "stuck in read-only" bug in the same tab remains. You must manually switch back to edit mode in that specific case.');
                    frag.createEl('br');
                    frag.createEl('br');
                    frag.createEl('strong', { text: 'Option 2: ENABLED'});
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: 'Action:'});
                    frag.appendText(' Plugin forces ANY normal note found in read-only mode back into edit mode upon opening.');
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: 'Benefit:'});
                    frag.appendText(' Fixes the "stuck in read-only" bug for same-tab navigation.');
                    frag.createEl('br');
                    frag.appendText(' • ');
                    frag.createEl('strong', { text: 'Drawback:'});
                    frag.appendText(' Overrides manual choices. If you set a normal note to read-only, this plugin WILL force it back to edit mode when you reopen it.');
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


		// --- Debug Logging ---
		containerEl.createEl('h3', { text: 'Debugging' });
		new Setting(containerEl)
			.setName('Enable Debug Logging')
			.setDesc(
				'Show detailed logs in the developer console. Requires Obsidian restart or plugin reload to take full effect.',
			)
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
