// src/main.ts

import {
	App,
	Editor,
	MarkdownView,
	Notice,
	Plugin,
	TFile,
	WorkspaceLeaf,
} from 'obsidian';
import {
	ReadModeControlSettings,
	DEFAULT_SETTINGS,
	ReadOnlyMode,
} from './types';
import { ReadModeControlSettingTab } from './settings';

export default class EnhancedReadModeControlPlugin extends Plugin {
	settings: ReadModeControlSettings;
	// Flag to prevent recursive calls when forcing strict mode
	private isForcingStrictMode = false;

	async onload() {
		await this.loadSettings();

		// Add the settings tab
		this.addSettingTab(new ReadModeControlSettingTab(this.app, this));

		// Add Commands
		this.addToggleCommand(
			'toggle-default-read-only',
			'Toggle default read-only for current note',
			'default',
		);
		this.addToggleCommand(
			'toggle-strict-read-only',
			'Toggle strict read-only for current note',
			'strict',
		);

		// Register event listeners
		this.registerEvent(
			this.app.workspace.on('file-open', this.handleFileOpen),
		);
		this.registerEvent(
			this.app.workspace.on('active-leaf-change', this.handleActiveLeafChange),
		);

		console.log('Enhanced Read Mode Control plugin loaded.');
	}

	onunload() {
		console.log('Enhanced Read Mode Control plugin unloaded.');
	}

	/**
	 * Loads plugin settings from Obsidian storage.
	 */
	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData(),
		);
	}

	/**
	 * Saves plugin settings to Obsidian storage.
	 */
	async saveSettings() {
		await this.saveData(this.settings);
		// Re-evaluate the current file in case settings changed its status
		this.applyModeToActiveLeaf();
	}

	/**
	 * Determines the required read-only mode for a given file path based on settings.
	 * Priority: Strict Folder > Strict File > Default File.
	 * @param filePath The path of the file to check.
	 * @returns The ReadOnlyMode ('strict', 'default', or null).
	 */
	getForcedModeForPath(filePath: string | undefined): ReadOnlyMode {
		if (!filePath) {
			return null;
		}

		// Check Strict Folders first
		for (const folderPath of this.settings.strictReadOnlyFolders) {
			// Ensure comparison works even if folderPath doesn't have trailing slash
			if (filePath.startsWith(folderPath + '/')) {
				return 'strict';
			}
			// Handle case where the folder path itself might be opened (though less common for notes)
			if (filePath === folderPath) {
				return 'strict';
			}
		}

		// Check Strict Files
		if (this.settings.strictReadOnlyFiles.includes(filePath)) {
			return 'strict';
		}

		// Check Default Files
		if (this.settings.defaultReadOnlyFiles.includes(filePath)) {
			return 'default';
		}

		return null;
	}

	/**
	 * Applies the specified read-only mode to the active Markdown view.
	 * @param view The MarkdownView to potentially modify.
	 * @param mode The mode to apply ('strict', 'default', or null).
	 */
	private applyReadOnlyMode(view: MarkdownView, mode: ReadOnlyMode): void {
		if (!view || this.isForcingStrictMode) {
			return;
		}

		const state = view.getState();
		const currentModeIsSource = state.mode === 'source'; // 'source' is edit mode

		if (mode === 'strict') {
			if (currentModeIsSource) {
				this.isForcingStrictMode = true;
				// console.log(`Forcing strict read mode for: ${view.file?.path}`);
				view.setState({ ...state, mode: 'preview' }, { history: false });
				// Use requestAnimationFrame to reset the flag after the UI updates
				requestAnimationFrame(() => {
					this.isForcingStrictMode = false;
				});
			}
		} else if (mode === 'default') {
			if (currentModeIsSource) {
				// Only switch to preview if currently in source mode
				// console.log(`Applying default read mode for: ${view.file?.path}`);
				view.setState({ ...state, mode: 'preview' }, { history: false });
			}
		}
		// If mode is null, do nothing, allow user control.
	}

	/**
	 * Handles the 'file-open' event to apply the correct mode when a file is opened.
	 * @param file The file that was opened (can be null).
	 */
	private handleFileOpen = (file: TFile | null): void => {
		if (!file) return;

		const activeLeaf = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (activeLeaf && activeLeaf.file === file) {
			const requiredMode = this.getForcedModeForPath(file.path);
			// console.log(`File opened: ${file.path}, Required mode: ${requiredMode}`);
			this.applyReadOnlyMode(activeLeaf, requiredMode);
		}
	};

	/**
	 * Handles the 'active-leaf-change' event to enforce strict mode if necessary.
	 * @param leaf The leaf that became active (can be null).
	 */
	private handleActiveLeafChange = (leaf: WorkspaceLeaf | null): void => {
		this.applyModeToActiveLeaf(leaf);
	};

	/**
	 * Helper function to apply the correct mode to the currently active leaf,
	 * or a specific leaf if provided.
	 * @param leaf The specific leaf to check, or null to check the active leaf.
	 */
	private applyModeToActiveLeaf(leaf: WorkspaceLeaf | null = null): void {
		const targetLeaf = leaf ?? this.app.workspace.activeLeaf;
		if (targetLeaf?.view instanceof MarkdownView) {
			const view = targetLeaf.view;
			const requiredMode = this.getForcedModeForPath(view.file?.path);
			// console.log(`Leaf changed: ${view.file?.path}, Required mode: ${requiredMode}`);
			// We only need to re-apply forcefully for 'strict' mode here,
			// as 'default' is handled on file-open.
			if (requiredMode === 'strict') {
				this.applyReadOnlyMode(view, 'strict');
			}
		}
	}

	/**
	 * Adds a command to toggle a file's inclusion in either the default or strict list.
	 * @param id The command ID.
	 * @param name The command name displayed to the user.
	 * @param targetMode The mode ('default' or 'strict') this command targets.
	 */
	private addToggleCommand(
		id: string,
		name: string,
		targetMode: 'default' | 'strict',
	): void {
		this.addCommand({
			id: id,
			name: name,
			checkCallback: (checking: boolean) => {
				const currentFile =
					this.app.workspace.getActiveFile();
				if (!currentFile) {
					return false; // No active file
				}

				if (!checking) {
					this.toggleFileInList(currentFile.path, targetMode);
				}
				return true; // Command is always available if there's a file
			},
		});
	}

	/**
	 * Toggles a file's presence in the specified read-only list (default or strict).
	 * Handles moving the file between lists if necessary.
	 * @param filePath The path of the file to toggle.
	 * @param targetMode The list ('default' or 'strict') to toggle the file in/out of.
	 */
	private async toggleFileInList(
		filePath: string,
		targetMode: 'default' | 'strict',
	): Promise<void> {
		const defaultList = this.settings.defaultReadOnlyFiles;
		const strictList = this.settings.strictReadOnlyFiles;
		const isInDefault = defaultList.includes(filePath);
		const isInStrict = strictList.includes(filePath);

		let message = '';

		if (targetMode === 'default') {
			if (isInDefault) {
				// Remove from default
				this.settings.defaultReadOnlyFiles = defaultList.filter(
					(p) => p !== filePath,
				);
				message = `Removed '${filePath}' from default read-only list.`;
			} else {
				// Add to default, remove from strict if present
				if (isInStrict) {
					this.settings.strictReadOnlyFiles = strictList.filter(
						(p) => p !== filePath,
					);
				}
				this.settings.defaultReadOnlyFiles.push(filePath);
				message = `Added '${filePath}' to default read-only list.`;
				if (isInStrict) {
					message += ` (Removed from strict list)`;
				}
			}
		} else {
			// targetMode === 'strict'
			if (isInStrict) {
				// Remove from strict
				this.settings.strictReadOnlyFiles = strictList.filter(
					(p) => p !== filePath,
				);
				message = `Removed '${filePath}' from strict read-only list.`;
			} else {
				// Add to strict, remove from default if present
				if (isInDefault) {
					this.settings.defaultReadOnlyFiles = defaultList.filter(
						(p) => p !== filePath,
					);
				}
				this.settings.strictReadOnlyFiles.push(filePath);
				message = `Added '${filePath}' to strict read-only list.`;
				if (isInDefault) {
					message += ` (Removed from default list)`;
				}
			}
		}

		await this.saveSettings();
		new Notice(message);
	}
}
