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
     * Helper function to create a UI for managing a list of paths (files or folders).
     * @param containerEl The HTML element to append the settings to.
     * @param title The title for this settings section.
     * @param description A description for this settings section.
     * @param placeholder Placeholder text for the input field.
     * @param currentPaths The current array of paths from plugin settings.
     * @param suggestClass The suggester class to use (FileSuggest or FolderSuggest).
     * @param saveCallback A function to call when the list of paths needs to be saved.
     * @param itemType 'file' or 'folder' for validation messages.
     */
    private createPathListManagementUI(
        containerEl: HTMLElement,
        title: string,
        description: string,
        placeholder: string,
        currentPaths: string[],
        SuggestClass: typeof FileSuggest | typeof FolderSuggest,
        saveCallback: (newPaths: string[]) => Promise<void>,
        itemType: 'file' | 'folder'
    ): void {
        new Setting(containerEl).setName(title).setDesc(description);

        const inputSetting = new Setting(containerEl).setClass('ermc-path-input-setting');
        let textInput: TextComponent;

        inputSetting.addText((text: TextComponent) => {
            textInput = text;
            text.setPlaceholder(placeholder);
            new SuggestClass(this.app, text.inputEl);

            text.inputEl.addEventListener('blur', () => {
                const pathValue = text.inputEl.value.trim();
                if (pathValue) {
                    const abstractFile = this.app.vault.getAbstractFileByPath(normalizePath(pathValue));
                    const isValid = itemType === 'file' ? (abstractFile instanceof TFile) : (abstractFile instanceof TFolder);
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
            button.setButtonText('Add Path').setIcon('plus').onClick(async () => {
                const newPath = normalizePath(textInput.inputEl.value.trim());
                if (!newPath) return;

                const abstractFile = this.app.vault.getAbstractFileByPath(newPath);
                const isValid = itemType === 'file' ? (abstractFile instanceof TFile) : (abstractFile instanceof TFolder);

                if (!isValid) {
                    textInput.inputEl.classList.add('is-invalid');
                    this.plugin.logDebug(`Attempted to add invalid ${itemType} path: ${newPath}`);
                    return;
                }
                textInput.inputEl.classList.remove('is-invalid');

                if (!currentPaths.includes(newPath)) {
                    currentPaths.push(newPath);
                    await saveCallback(currentPaths);
                    this.plugin.logDebug(`Added ${itemType} path: ${newPath}`);
                    this.redisplayPaths(pathListContainer, currentPaths, saveCallback, itemType);
                    textInput.setValue('');
                } else {
                    this.plugin.logDebug(`Path already exists: ${newPath}`);
                }
            });
        });

        const pathListContainer = containerEl.createDiv('ermc-path-list-container');
        this.redisplayPaths(pathListContainer, currentPaths, saveCallback, itemType);
    }

    /**
     * Helper to render the list of added paths with delete buttons.
     */
    private redisplayPaths(
        containerEl: HTMLElement,
        paths: string[],
        saveCallback: (newPaths: string[]) => Promise<void>,
        itemType: 'file' | 'folder'
    ): void {
        containerEl.empty();
        if (paths.length === 0) {
            containerEl.createEl('p', { text: `No ${itemType}s added yet.`, cls: 'setting-item-description ermc-empty-list-message' });
        }
        paths.forEach((path, index) => {
            new Setting(containerEl)
                .setName(path) // Display the path directly
                .setClass('ermc-path-list-item')
                .addButton((button) =>
                    button.setIcon('trash').setTooltip(`Remove ${path}`).onClick(async () => {
                        paths.splice(index, 1);
                        await saveCallback(paths);
                        this.plugin.logDebug(`Removed ${itemType} path: ${path}`);
                        this.redisplayPaths(containerEl, paths, saveCallback, itemType);
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

        // --- Default Read-Only Files ---
        this.createPathListManagementUI(
            containerEl,
            'Default Read-Only Files',
            'Files listed here will open in read-only mode by default, but can be switched to edit mode.',
            'Enter file path (e.g., Notes/MyFile.md)',
            this.plugin.settings.defaultReadOnlyFiles,
            FileSuggest,
            async (newPaths) => {
                this.plugin.settings.defaultReadOnlyFiles = newPaths;
                await this.plugin.saveSettings();
            },
            'file'
        );

        // --- Strict Read-Only Files ---
        this.createPathListManagementUI(
            containerEl,
            'Strict Read-Only Files',
            'Files listed here will be forced into read-only mode and cannot be switched to edit mode.',
            'Enter file path (e.g., Templates/Protected.md)',
            this.plugin.settings.strictReadOnlyFiles,
            FileSuggest,
            async (newPaths) => {
                this.plugin.settings.strictReadOnlyFiles = newPaths;
                await this.plugin.saveSettings();
            },
            'file'
        );

        // --- Strict Read-Only Folders ---
        this.createPathListManagementUI(
            containerEl,
            'Strict Read-Only Folders',
            'All notes within these folders (and their subfolders) will be forced into strict read-only mode.',
            'Enter folder path (e.g., Archive/2023)',
            this.plugin.settings.strictReadOnlyFolders,
            FolderSuggest,
            async (newPaths) => {
                this.plugin.settings.strictReadOnlyFolders = newPaths.map(p => normalizePath(p.replace(/^\/|\/$/g, '')));
                await this.plugin.saveSettings();
            },
            'folder'
        );


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
