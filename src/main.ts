// src/main.ts

import {
	App,
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

const LOG_PREFIX = '[ERMC]';

export default class EnhancedReadModeControlPlugin extends Plugin {
	settings: ReadModeControlSettings;

	/**
	 * Logs messages to the console only if debugLoggingEnabled is true.
	 */
	logDebug(message: string, ...optionalParams: unknown[]): void {
		if (this.settings?.debugLoggingEnabled) {
			console.log(`${LOG_PREFIX} ${message}`, ...optionalParams);
		}
	}

	async onload() {
		await this.loadSettings();
		this.logDebug('--- EnhancedReadModeControlPlugin onload START ---');

		this.addSettingTab(new ReadModeControlSettingTab(this.app, this));

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

		this.registerEvent(
			this.app.workspace.on('file-open', this.handleFileOpen),
		);
		this.registerEvent(
			this.app.workspace.on('layout-change', this.handleLayoutChange),
		);

		this.app.workspace.onLayoutReady(() => {
			this.logDebug('Initial layout ready. Applying modes.');
			this.handleLayoutChange();
		});

		this.logDebug('--- EnhancedReadModeControlPlugin onload END ---');
	}

	onunload() {
		this.logDebug('Unloading plugin.');
		console.log('[ERMC] Unloaded Enhanced Read Mode Control plugin.');
	}

	async loadSettings() {
		const loadedData = await this.loadData();
		this.settings = Object.assign({}, DEFAULT_SETTINGS, loadedData);
		this.logDebug('Settings loaded:', JSON.stringify(this.settings));
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.logDebug('Settings saved:', JSON.stringify(this.settings));
		this.handleLayoutChange();
	}

	getForcedModeForPath(filePath: string | undefined): ReadOnlyMode {
		if (!filePath) return null;
		const normalizedFilePath = filePath.replace(/^\/|\/$/g, '');
		for (const folderPath of this.settings.strictReadOnlyFolders) {
			if (
				normalizedFilePath.startsWith(folderPath + '/') ||
				normalizedFilePath === folderPath
			) {
				return 'strict';
			}
		}
		if (this.settings.strictReadOnlyFiles.includes(filePath)) {
			return 'strict';
		}
		if (this.settings.defaultReadOnlyFiles.includes(filePath)) {
			return 'default';
		}
		return null;
	}

	/**
	 * Handles the 'file-open' event to set the correct *initial* mode.
	 */
	private handleFileOpen = (file: TFile | null): void => {
		this.logDebug(`handleFileOpen: Event triggered for file: '${file?.path}'`);
		if (!file) return;

		let viewProcessed = false; // Flag to track if we found and processed the view

		this.app.workspace.iterateRootLeaves((leaf) => {
			// If we already processed the view, stop iterating
			if (viewProcessed) return false;

			if (leaf.view instanceof MarkdownView && leaf.view.file === file) {
				const currentView = leaf.view; // Use the view directly from the leaf
				this.logDebug(`handleFileOpen: Found matching view for '${file.path}'. Processing directly.`);

				const requiredMode = this.getForcedModeForPath(file.path);
				this.logDebug(`handleFileOpen: Required mode for '${file.path}' is '${requiredMode}'.`);

				const state = currentView.getState(); // Should work now on MarkdownView
				const currentModeIsSource = state.mode === 'source';
				this.logDebug(`handleFileOpen: Current view mode for '${file.path}' is '${state.mode}'.`);

				if (requiredMode === 'strict' || requiredMode === 'default') {
					if (currentModeIsSource) {
						this.logDebug(`handleFileOpen: Setting state to PREVIEW for '${file.path}' (Required: ${requiredMode}).`);
						currentView.setState({ ...state, mode: 'preview' }, { history: false }); // Should work now
					} else {
						this.logDebug(`handleFileOpen: Already in PREVIEW for '${file.path}'. No state change needed.`);
					}
				} else { // requiredMode is null
					this.logDebug(`handleFileOpen: Mode is NULL for '${file.path}'.`);
					if (!currentModeIsSource) {
						this.logDebug(`handleFileOpen: Forcing state to SOURCE for '${file.path}' because required mode is NULL and current is PREVIEW.`);
						currentView.setState({ ...state, mode: 'source' }, { history: false }); // Should work now
					} else {
						this.logDebug(`handleFileOpen: Mode is NULL and view is already in SOURCE for '${file.path}'. No change needed.`);
					}
				}

				viewProcessed = true; // Mark as processed
				return false; // Stop iteration
			}
			return true; // Continue iteration
		});

		// Fallback logic if no view was found immediately
		if (!viewProcessed) {
			this.logDebug(`handleFileOpen: Could not find a matching MarkdownView for '${file.path}' immediately. Using fallback.`);
			this.app.workspace.onLayoutReady(() => {
				const activeLeaf = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (activeLeaf && activeLeaf.file === file) {
					this.logDebug(`handleFileOpen (onLayoutReady fallback): Active leaf now matches file '${file.path}'. Re-evaluating.`);
					const fallbackView = activeLeaf;
					const requiredMode = this.getForcedModeForPath(file.path);
					const state = fallbackView.getState();
					const currentModeIsSource = state.mode === 'source';
					if (requiredMode === 'strict' || requiredMode === 'default') {
						if (currentModeIsSource) fallbackView.setState({ ...state, mode: 'preview' }, { history: false });
					} else {
						if (!currentModeIsSource) fallbackView.setState({ ...state, mode: 'source' }, { history: false });
					}
				} else {
                    this.logDebug(`handleFileOpen (onLayoutReady fallback): Active leaf still doesn't match '${file?.path}'.`);
                }
			});
		}
	};

	// handleLayoutChange, applyModeToActiveLeafAfterToggle, addToggleCommand, toggleFileInList remain the same as the previous version

	private handleLayoutChange = (): void => {
		const leaves = this.app.workspace.getLeavesOfType('markdown');
		leaves.forEach((leaf) => {
			if (leaf.view instanceof MarkdownView) {
				const view = leaf.view;
				const filePath = view.file?.path;
				if (!filePath) return;

				const requiredMode = this.getForcedModeForPath(filePath);
				if (requiredMode === 'strict') {
					const state = view.getState();
					if (state.mode === 'source') {
						this.logDebug(`handleLayoutChange: Enforcing STRICT mode (preview) for '${filePath}'.`);
						view.setState({ ...state, mode: 'preview' }, { history: false });
					}
				}
			}
		});
	};

	private applyModeToActiveLeafAfterToggle(): void {
		const activeLeaf = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (activeLeaf) {
			const view = activeLeaf;
			const filePath = view.file?.path;
			if (!filePath) return;

			const requiredMode = this.getForcedModeForPath(filePath);
			this.logDebug(`applyModeToActiveLeafAfterToggle: Applying mode '${requiredMode}' to active leaf '${filePath}'.`);

			const state = view.getState();
			const currentModeIsSource = state.mode === 'source';

			if (requiredMode === 'strict' || requiredMode === 'default') {
				if (currentModeIsSource) {
					this.logDebug(`applyModeToActiveLeafAfterToggle: Setting state to PREVIEW for '${filePath}'.`);
					view.setState({ ...state, mode: 'preview' }, { history: false });
				}
			} else {
				if (!currentModeIsSource) {
					this.logDebug(`applyModeToActiveLeafAfterToggle: Setting state to SOURCE for '${filePath}' as mode is now NULL.`);
					view.setState({ ...state, mode: 'source' }, { history: false });
				}
			}
		}
	}

	private addToggleCommand(
		id: string,
		name: string,
		targetMode: 'default' | 'strict',
	): void {
		this.addCommand({
			id: id,
			name: name,
			checkCallback: (checking: boolean) => {
				const currentFile = this.app.workspace.getActiveFile();
				if (!currentFile) return false;
				if (!checking) {
					this.logDebug(`Command triggered: '${name}' for file '${currentFile.path}' targeting mode '${targetMode}'.`);
					this.toggleFileInList(currentFile.path, targetMode);
				}
				return true;
			},
		});
	}

	private async toggleFileInList(
		filePath: string,
		targetMode: 'default' | 'strict',
	): Promise<void> {
		const fileName = filePath.split('/').pop();
		this.logDebug(`toggleFileInList: Toggling path '${filePath}' for target mode '${targetMode}'.`);

		let message = '';
		const updatedSettings = {
            defaultReadOnlyFiles: [...this.settings.defaultReadOnlyFiles],
            strictReadOnlyFiles: [...this.settings.strictReadOnlyFiles],
            strictReadOnlyFolders: [...this.settings.strictReadOnlyFolders],
            debugLoggingEnabled: this.settings.debugLoggingEnabled,
        };

		const defaultIndex = updatedSettings.defaultReadOnlyFiles.indexOf(filePath);
		const strictIndex = updatedSettings.strictReadOnlyFiles.indexOf(filePath);

		if (targetMode === 'default') {
			if (defaultIndex > -1) {
				updatedSettings.defaultReadOnlyFiles.splice(defaultIndex, 1);
				message = `Removed '${fileName}' from default read-only list.`;
			} else {
				if (strictIndex > -1) {
					updatedSettings.strictReadOnlyFiles.splice(strictIndex, 1);
				}
				updatedSettings.defaultReadOnlyFiles.push(filePath);
				message = `Added '${fileName}' to default read-only list.`;
				if (strictIndex > -1) message += ` (Removed from strict list)`;
			}
		} else { // targetMode === 'strict'
			if (strictIndex > -1) {
				updatedSettings.strictReadOnlyFiles.splice(strictIndex, 1);
				message = `Removed '${fileName}' from strict read-only list.`;
			} else {
				if (defaultIndex > -1) {
					updatedSettings.defaultReadOnlyFiles.splice(defaultIndex, 1);
				}
				updatedSettings.strictReadOnlyFiles.push(filePath);
				message = `Added '${fileName}' to strict read-only list.`;
				if (defaultIndex > -1) message += ` (Removed from default list)`;
			}
		}

        this.settings = updatedSettings;
		await this.saveSettings();
		this.applyModeToActiveLeafAfterToggle();
		new Notice(message, 3000);
	}
}
