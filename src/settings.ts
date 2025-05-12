// src/settings.ts

import { App, PluginSettingTab, Setting, ToggleComponent } from 'obsidian';
import EnhancedReadModeControlPlugin from './main';

/**
 * Creates the settings tab for the Enhanced Read Mode Control plugin.
 */
export class ReadModeControlSettingTab extends PluginSettingTab {
	plugin: EnhancedReadModeControlPlugin;

	constructor(app: App, plugin: EnhancedReadModeControlPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl('h2', {
			text: 'Enhanced Read Mode Control Settings',
		});

		// --- Default Read-Only Files ---
		new Setting(containerEl)
			.setName('Default Read-Only Files')
			.setDesc(
				'Files listed here will open in read-only mode by default, but can be switched to edit mode. Add one file path per line.',
			)
			.addTextArea((text) =>
				text
					.setPlaceholder('path/to/your/note1.md\npath/to/another/note.md')
					.setValue(
						this.plugin.settings.defaultReadOnlyFiles.join('\n'),
					)
					.onChange(async (value) => {
						this.plugin.settings.defaultReadOnlyFiles = value
							.split('\n')
							.map((p) => p.trim())
							.filter((p) => p.length > 0);
						await this.plugin.saveSettings();
					}),
			);

		// --- Strict Read-Only Files ---
		new Setting(containerEl)
			.setName('Strict Read-Only Files')
			.setDesc(
				'Files listed here will be forced into read-only mode and cannot be switched to edit mode. Add one file path per line.',
			)
			.addTextArea((text) =>
				text
					.setPlaceholder('path/to/strict/note.md')
					.setValue(this.plugin.settings.strictReadOnlyFiles.join('\n'))
					.onChange(async (value) => {
						this.plugin.settings.strictReadOnlyFiles = value
							.split('\n')
							.map((p) => p.trim())
							.filter((p) => p.length > 0);
						await this.plugin.saveSettings();
					}),
			);

		// --- Strict Read-Only Folders ---
		new Setting(containerEl)
			.setName('Strict Read-Only Folders')
			.setDesc(
				'All notes within these folders (and their subfolders) will be forced into strict read-only mode. Add one folder path per line.',
			)
			.addTextArea((text) =>
				text
					.setPlaceholder('path/to/folder1\npath/to/another/folder')
					.setValue(
						this.plugin.settings.strictReadOnlyFolders.join('\n'),
					)
					.onChange(async (value) => {
						this.plugin.settings.strictReadOnlyFolders = value
							.split('\n')
							.map((p) => p.trim().replace(/^\/|\/$/g, ''))
							.filter((p) => p.length > 0);
						await this.plugin.saveSettings();
					}),
			);

        // --- Behavior Settings ---
        containerEl.createEl('h3', { text: 'Behavior' });
        new Setting(containerEl)
            // Renamed for clarity
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
