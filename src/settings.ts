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

		// --- Debug Logging --- //
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
						this.plugin.logDebug(
							`Debug logging ${value ? 'enabled' : 'disabled'}.`,
						);
					});
			});
	}
}
