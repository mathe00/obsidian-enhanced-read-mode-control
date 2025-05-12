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
		// Check settings directly in case it's called before full load
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
		// Log after settings are loaded
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
                // Minimal logging unless debugging getForcedModeForPath itself
                // this.logDebug(`getForcedModeForPath: Path '${filePath}' matched strict folder '${folderPath}'. Returning 'strict'.`);
				return 'strict';
			}
		}
		if (this.settings.strictReadOnlyFiles.includes(filePath)) {
            // this.logDebug(`getForcedModeForPath: Path '${filePath}' matched strict file list. Returning 'strict'.`);
			return 'strict';
		}
		if (this.settings.defaultReadOnlyFiles.includes(filePath)) {
            // this.logDebug(`getForcedModeForPath: Path '${filePath}' matched default file list. Returning 'default'.`);
			return 'default';
		}
		return null;
	}

	/**
	 * Handles the 'file-open' event. Applies initial state based on rules
	 * and optionally forces source mode for unmanaged notes based on settings.
	 */
	private handleFileOpen = (file: TFile | null): void => {
		this.logDebug(`handleFileOpen: Event triggered for file: '${file?.path}'`);
		if (!file) return;

		let viewProcessedCount = 0;

		this.app.workspace.iterateRootLeaves((leaf) => {
			// Continue processing even if one view was found, to handle multiple instances
			if (leaf.view instanceof MarkdownView && leaf.view.file === file) {
				const currentView = leaf.view;
				this.logDebug(`handleFileOpen: Found matching view for '${file.path}'. Processing.`);

				const requiredMode = this.getForcedModeForPath(file.path);
				this.logDebug(`handleFileOpen: Required mode for '${file.path}' is '${requiredMode}'.`);

				const state = currentView.getState();
				const currentModeIsPreview = state.mode === 'preview';
				this.logDebug(`handleFileOpen: Current view mode for '${file.path}' is '${state.mode}'.`);

				if (requiredMode === 'strict' || requiredMode === 'default') {
					// Apply plugin rules: force preview if needed
					if (!currentModeIsPreview) { // Only change if currently source
						this.logDebug(`handleFileOpen: Setting state to PREVIEW for '${file.path}' (Required: ${requiredMode}).`);
						currentView.setState({ ...state, mode: 'preview' }, { history: false });
					} else {
						this.logDebug(`handleFileOpen: Already in PREVIEW for '${file.path}'. No state change needed.`);
					}
				} else { // requiredMode is null
					this.logDebug(`handleFileOpen: Mode is NULL for '${file.path}'. Checking behavior setting.`);
					// --- CONDITIONAL SAME-TAB FIX ---
					// Check the setting before forcing source mode
					if (this.settings.forceSourceOnUnmanaged && currentModeIsPreview) {
						this.logDebug(`handleFileOpen: Forcing state to SOURCE for '${file.path}' because required mode is NULL, current is PREVIEW, and setting is enabled.`);
						currentView.setState({ ...state, mode: 'source' }, { history: false });
					} else {
						// If setting is disabled OR view is already source, do nothing.
						this.logDebug(`handleFileOpen: Mode is NULL for '${file.path}'. No interference needed (Setting disabled or already source).`);
					}
					// --- END CONDITIONAL SAME-TAB FIX ---
				}
				viewProcessedCount++;
			}
			return true; // Continue iteration
		});

		// Fallback logic
		if (viewProcessedCount === 0) {
			this.logDebug(`handleFileOpen: Could not find any matching MarkdownView for '${file.path}' immediately. Using fallback.`);
			this.app.workspace.onLayoutReady(() => {
				const activeLeaf = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (activeLeaf && activeLeaf.file === file) {
					this.logDebug(`handleFileOpen (onLayoutReady fallback): Active leaf matches file '${file.path}'. Re-evaluating.`);
					const fallbackView = activeLeaf;
					const requiredMode = this.getForcedModeForPath(file.path);
					const state = fallbackView.getState();
					const currentModeIsPreview = state.mode === 'preview';

					if (requiredMode === 'strict' || requiredMode === 'default') {
						if (!currentModeIsPreview) {
                            this.logDebug(`handleFileOpen (fallback): Setting state to PREVIEW for '${file.path}' (Required: ${requiredMode}).`);
                            fallbackView.setState({ ...state, mode: 'preview' }, { history: false });
                        }
					} else { // requiredMode is null
                        if (this.settings.forceSourceOnUnmanaged && currentModeIsPreview) {
                            this.logDebug(`handleFileOpen (fallback): Forcing state to SOURCE for '${file.path}' because required mode is NULL, current is PREVIEW, and setting is enabled.`);
                            fallbackView.setState({ ...state, mode: 'source' }, { history: false });
                        } else {
                             this.logDebug(`handleFileOpen (fallback): Mode is NULL for '${file.path}'. No interference needed.`);
                        }
					}
				} else {
                    this.logDebug(`handleFileOpen (onLayoutReady fallback): Active leaf still doesn't match '${file?.path}'.`);
                }
			});
		} else {
            this.logDebug(`handleFileOpen: Processed ${viewProcessedCount} view(s) for '${file.path}' immediately.`);
        }
	};

	/**
	 * Handles the 'layout-change' event. Enforces 'strict' and 'default' modes.
	 * Note: Enforcing 'default' here makes it hard to manually switch to source.
	 */
	private handleLayoutChange = (): void => {
		// this.logDebug("handleLayoutChange triggered");
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
				} else if (requiredMode === 'default') {
					const state = view.getState();
					if (state.mode === 'source') {
						this.logDebug(`handleLayoutChange: Enforcing DEFAULT mode (preview) for '${filePath}'.`);
						view.setState({ ...state, mode: 'preview' }, { history: false });
					}
				}
				// If requiredMode is null, do nothing.
			}
		});
	};

	/**
	 * Applies the correct mode to the currently active markdown view,
	 * typically called after a toggle command.
	 */
	private applyModeToActiveLeafAfterToggle(): void {
		const activeLeaf = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (activeLeaf) {
			const view = activeLeaf;
			const filePath = view.file?.path;
			if (!filePath) return;

			const requiredMode = this.getForcedModeForPath(filePath);
			this.logDebug(`applyModeToActiveLeafAfterToggle: Applying mode '${requiredMode}' to active leaf '${filePath}'.`);

			const state = view.getState();
			const currentModeIsPreview = state.mode === 'preview';

			if (requiredMode === 'strict' || requiredMode === 'default') {
				if (!currentModeIsPreview) { // If source, switch to preview
					this.logDebug(`applyModeToActiveLeafAfterToggle: Setting state to PREVIEW for '${filePath}'.`);
					view.setState({ ...state, mode: 'preview' }, { history: false });
				}
			} else { // requiredMode is null (toggled OFF)
				// If toggled OFF, ensure it goes back to source IF it's currently preview
				if (currentModeIsPreview) {
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
		// Create a deep copy to avoid modifying the original settings object directly
        // before loadData confirms the current state. This helps prevent race conditions.
		const currentSettings = await this.loadData() || DEFAULT_SETTINGS;
        const updatedSettings = {
            defaultReadOnlyFiles: [...currentSettings.defaultReadOnlyFiles],
            strictReadOnlyFiles: [...currentSettings.strictReadOnlyFiles],
            strictReadOnlyFolders: [...currentSettings.strictReadOnlyFolders],
            debugLoggingEnabled: currentSettings.debugLoggingEnabled,
            forceSourceOnUnmanaged: currentSettings.forceSourceOnUnmanaged, // Include the new setting
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
				// Ensure no duplicates before pushing
				if (!updatedSettings.defaultReadOnlyFiles.includes(filePath)) {
					updatedSettings.defaultReadOnlyFiles.push(filePath);
				}
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
				// Ensure no duplicates before pushing
				if (!updatedSettings.strictReadOnlyFiles.includes(filePath)) {
					updatedSettings.strictReadOnlyFiles.push(filePath);
				}
				message = `Added '${fileName}' to strict read-only list.`;
				if (defaultIndex > -1) message += ` (Removed from default list)`;
			}
		}

        // Assign the calculated settings back to the plugin instance
        this.settings = updatedSettings;
		await this.saveSettings(); // saveSettings calls handleLayoutChange
		this.applyModeToActiveLeafAfterToggle(); // Apply mode immediately
		new Notice(message, 3000);
	}
}
