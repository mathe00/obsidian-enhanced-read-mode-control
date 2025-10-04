// src/main.ts

import { MarkdownView, Notice, Plugin, TFile } from "obsidian";
import {
	ReadModeControlSettings,
	DEFAULT_SETTINGS,
	ReadOnlyMode,
} from "./types";
import { ReadModeControlSettingTab } from "./settings";
import { loadTranslations, t } from "./lang/translations"; // Import translation functions

const LOG_PREFIX = "[ERMC]";

export default class EnhancedReadModeControlPlugin extends Plugin {
	settings: ReadModeControlSettings;
	private compiledStrictRegexes: RegExp[] = [];
	private compiledDefaultRegexes: RegExp[] = [];

	/**
	 * Logs messages to the console only if debugLoggingEnabled is true.
	 */
	logDebug(message: string, ...optionalParams: unknown[]): void {
		if (this.settings?.debugLoggingEnabled) {
			console.log(`${LOG_PREFIX} ${message}`, ...optionalParams);
		}
	}

	/**
	 * Shows a notification if the setting is enabled.
	 */
	private showModeChangeNotice(
		fileName: string | undefined,
		appliedModeKey:
			| "NOTICE_MODE_DEFAULT"
			| "NOTICE_MODE_STRICT"
			| "NOTICE_MODE_EDIT",
	): void {
		if (this.settings.notifyOnModeChange && fileName) {
			const shortName = fileName.split("/").pop();
			new Notice(
				t("NOTICE_MODE_CHANGE_PREFIX", {
					fileName: shortName || "Unknown File",
				}) + t(appliedModeKey),
				2000,
			);
		}
	}

	private compileRegexes(): void {
		this.compiledStrictRegexes = [];
		this.compiledDefaultRegexes = [];

		if (this.settings.enableRegexMatching) {
			this.settings.strictReadOnlyRegex.forEach((pattern) => {
				try {
					this.compiledStrictRegexes.push(new RegExp(pattern));
				} catch (e) {
					this.logDebug(
						`Error compiling strict regex pattern "${pattern}":`,
						e,
					);
					new Notice(
						t("NOTICE_INVALID_STRICT_REGEX_PREFIX") + pattern,
					);
				}
			});

			this.settings.defaultReadOnlyRegex.forEach((pattern) => {
				try {
					this.compiledDefaultRegexes.push(new RegExp(pattern));
				} catch (e) {
					this.logDebug(
						`Error compiling default regex pattern "${pattern}":`,
						e,
					);
					new Notice(
						t("NOTICE_INVALID_DEFAULT_REGEX_PREFIX") + pattern,
					);
				}
			});
		}
		this.logDebug("Regexes compiled:", {
			strict: this.compiledStrictRegexes.length,
			default: this.compiledDefaultRegexes.length,
		});
	}

	async onload() {
		await this.loadSettings();
		await loadTranslations(this); // Load translations based on settings
		this.compileRegexes();
		this.logDebug("--- EnhancedReadModeControlPlugin onload START ---");

		this.addSettingTab(new ReadModeControlSettingTab(this.app, this));

		this.addToggleCommand(
			"toggle-default-read-only",
			t("COMMAND_TOGGLE_DEFAULT"), // Use translation key
			"default",
		);
		this.addToggleCommand(
			"toggle-strict-read-only",
			t("COMMAND_TOGGLE_STRICT"), // Use translation key
			"strict",
		);

		this.registerEvent(
			this.app.workspace.on("file-open", this.handleFileOpen),
		);
		this.registerEvent(
			this.app.workspace.on("layout-change", this.handleLayoutChange),
		);

		this.app.workspace.onLayoutReady(() => {
			this.logDebug("Initial layout ready. Applying modes.");
			this.handleLayoutChange();
		});

		this.logDebug("--- EnhancedReadModeControlPlugin onload END ---");
	}

	onunload() {
		this.logDebug("Unloading plugin.");
		console.log("[ERMC] Unloaded Enhanced Read Mode Control plugin.");
	}

	async loadSettings() {
		const loadedData = await this.loadData();
		// Ensure all DEFAULT_SETTINGS keys are present, especially new ones
		this.settings = Object.assign({}, DEFAULT_SETTINGS, loadedData);
		this.logDebug("Settings loaded:", JSON.stringify(this.settings));
		// Translations will be loaded in onload after settings are available
	}

	async saveSettings() {
		await this.saveData(this.settings);
		await loadTranslations(this); // Reload translations if language setting changed
		this.compileRegexes();
		this.logDebug("Settings saved:", JSON.stringify(this.settings));
		this.handleLayoutChange(); // Re-apply modes if settings changed
	}

	getForcedModeForPath(filePath: string | undefined): ReadOnlyMode {
		if (!filePath) return null;
		const normalizedFilePath = filePath.replace(/^\/|\/$/g, "");

		// Priority 1: Strict Read-Only Folders
		for (const folderPath of this.settings.strictReadOnlyFolders) {
			if (
				normalizedFilePath.startsWith(folderPath + "/") ||
				normalizedFilePath === folderPath
			) {
				this.logDebug(
					`Path '${filePath}' matched strict folder '${folderPath}'. Returning 'strict'.`,
				);
				return "strict";
			}
		}

		// Priority 2: Strict Read-Only Files
		if (this.settings.strictReadOnlyFiles.includes(filePath)) {
			this.logDebug(
				`Path '${filePath}' matched strict file. Returning 'strict'.`,
			);
			return "strict";
		}

		// Priority 3: Strict Read-Only Regex
		if (this.settings.enableRegexMatching) {
			for (const regex of this.compiledStrictRegexes) {
				if (regex.test(filePath)) {
					this.logDebug(
						`Path '${filePath}' matched strict regex '${regex.source}'. Returning 'strict'.`,
					);
					return "strict";
				}
			}
		}

		// Priority 4: Default Read-Only Folders
		for (const folderPath of this.settings.defaultReadOnlyFolders) {
			if (
				normalizedFilePath.startsWith(folderPath + "/") ||
				normalizedFilePath === folderPath
			) {
				this.logDebug(
					`Path '${filePath}' matched default folder '${folderPath}'. Returning 'default'.`,
				);
				return "default";
			}
		}

		// Priority 5: Default Read-Only Files
		if (this.settings.defaultReadOnlyFiles.includes(filePath)) {
			this.logDebug(
				`Path '${filePath}' matched default file. Returning 'default'.`,
			);
			return "default";
		}

		// Priority 6: Default Read-Only Regex
		if (this.settings.enableRegexMatching) {
			for (const regex of this.compiledDefaultRegexes) {
				if (regex.test(filePath)) {
					this.logDebug(
						`Path '${filePath}' matched default regex '${regex.source}'. Returning 'default'.`,
					);
					return "default";
				}
			}
		}

		return null;
	}

	private handleFileOpen = (file: TFile | null): void => {
		this.logDebug(
			`handleFileOpen: Event triggered for file: '${file?.path}'`,
		);
		if (!file) return;

		let viewProcessedCount = 0;

		this.app.workspace.iterateRootLeaves((leaf) => {
			if (leaf.view instanceof MarkdownView && leaf.view.file === file) {
				const currentView = leaf.view;
				this.logDebug(
					`handleFileOpen: Found matching view for '${file.path}'. Processing.`,
				);

				const requiredMode = this.getForcedModeForPath(file.path);
				this.logDebug(
					`handleFileOpen: Required mode for '${file.path}' is '${requiredMode}'.`,
				);

				const state = currentView.getState();
				const currentModeIsPreview = state.mode === "preview";
				this.logDebug(
					`handleFileOpen: Current view mode for '${file.path}' is '${state.mode}'.`,
				);

				if (requiredMode === "strict" || requiredMode === "default") {
					if (!currentModeIsPreview) {
						this.logDebug(
							`handleFileOpen: Setting state to PREVIEW for '${file.path}' (Required: ${requiredMode}).`,
						);
						currentView.setState(
							{ ...state, mode: "preview" },
							{ history: false },
						);
						this.showModeChangeNotice(
							file.path,
							requiredMode === "strict"
								? "NOTICE_MODE_STRICT"
								: "NOTICE_MODE_DEFAULT",
						);
					} else {
						this.logDebug(
							`handleFileOpen: Already in PREVIEW for '${file.path}'. No state change needed.`,
						);
					}
				} else {
					this.logDebug(
						`handleFileOpen: Mode is NULL for '${file.path}'. Checking behavior setting.`,
					);
					if (
						this.settings.forceSourceOnUnmanaged &&
						currentModeIsPreview
					) {
						this.logDebug(
							`handleFileOpen: Forcing state to SOURCE for '${file.path}' because required mode is NULL, current is PREVIEW, and setting is enabled.`,
						);
						currentView.setState(
							{ ...state, mode: "source" },
							{ history: false },
						);
						this.showModeChangeNotice(
							file.path,
							"NOTICE_MODE_EDIT",
						);
					} else {
						this.logDebug(
							`handleFileOpen: Mode is NULL for '${file.path}'. No interference needed (Setting disabled or already source).`,
						);
					}
				}
				viewProcessedCount++;
			}
			return true; // Continue iterating
		});

		if (viewProcessedCount === 0) {
			this.logDebug(
				`handleFileOpen: Could not find any matching MarkdownView for '${file.path}' immediately. Using fallback.`,
			);
			this.app.workspace.onLayoutReady(() => {
				const activeLeaf =
					this.app.workspace.getActiveViewOfType(MarkdownView);
				if (activeLeaf && activeLeaf.file === file) {
					this.logDebug(
						`handleFileOpen (onLayoutReady fallback): Active leaf matches file '${file.path}'. Re-evaluating.`,
					);
					const fallbackView = activeLeaf;
					const requiredMode = this.getForcedModeForPath(file.path);
					const state = fallbackView.getState();
					const currentModeIsPreview = state.mode === "preview";

					if (
						requiredMode === "strict" ||
						requiredMode === "default"
					) {
						if (!currentModeIsPreview) {
							this.logDebug(
								`handleFileOpen (fallback): Setting state to PREVIEW for '${file.path}' (Required: ${requiredMode}).`,
							);
							fallbackView.setState(
								{ ...state, mode: "preview" },
								{ history: false },
							);
							this.showModeChangeNotice(
								file.path,
								requiredMode === "strict"
									? "NOTICE_MODE_STRICT"
									: "NOTICE_MODE_DEFAULT",
							);
						}
					} else {
						if (
							this.settings.forceSourceOnUnmanaged &&
							currentModeIsPreview
						) {
							this.logDebug(
								`handleFileOpen (fallback): Forcing state to SOURCE for '${file.path}' because required mode is NULL, current is PREVIEW, and setting is enabled.`,
							);
							fallbackView.setState(
								{ ...state, mode: "source" },
								{ history: false },
							);
							this.showModeChangeNotice(
								file.path,
								"NOTICE_MODE_EDIT",
							);
						} else {
							this.logDebug(
								`handleFileOpen (fallback): Mode is NULL for '${file.path}'. No interference needed.`,
							);
						}
					}
				} else {
					this.logDebug(
						`handleFileOpen (onLayoutReady fallback): Active leaf still doesn't match '${file?.path}'.`,
					);
				}
			});
		} else {
			this.logDebug(
				`handleFileOpen: Processed ${viewProcessedCount} view(s) for '${file.path}' immediately.`,
			);
		}
	};

	private handleLayoutChange = (): void => {
		const leaves = this.app.workspace.getLeavesOfType("markdown");
		leaves.forEach((leaf) => {
			if (leaf.view instanceof MarkdownView) {
				const view = leaf.view;
				const filePath = view.file?.path;
				if (!filePath) return;

				const requiredMode = this.getForcedModeForPath(filePath);
				const state = view.getState();

				if (requiredMode === "strict") {
					if (state.mode === "source") {
						this.logDebug(
							`handleLayoutChange: Enforcing STRICT mode (preview) for '${filePath}'.`,
						);
						view.setState(
							{ ...state, mode: "preview" },
							{ history: false },
						);
						this.showModeChangeNotice(
							filePath,
							"NOTICE_MODE_STRICT",
						);
					}
				} else if (requiredMode === "default") {
					// For 'default' mode, 'handleLayoutChange' should generally NOT intervene
					// if the user has manually switched to 'source'.
					// The 'default' behavior is primarily for the initial 'file-open' state.
					// We only ensure it's in preview if it's a 'default' file AND it's currently
					// in 'source' AND it was likely just opened (less aggressive check).
					// However, to fix the regression, the safest is to remove the aggressive
					// switch back to preview for 'default' items in layout-change.
					// The file-open event already handles setting it to preview initially.
					this.logDebug(
						`handleLayoutChange: Path '${filePath}' is 'default'. No forced change from source to preview here.`,
					);
				}
				// No action for 'null' mode or if already in the correct mode.
				// The 'forceSourceOnUnmanaged' logic is primarily handled by 'file-open'.
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
			this.logDebug(
				`applyModeToActiveLeafAfterToggle: Applying mode '${requiredMode}' to active leaf '${filePath}'.`,
			);

			const state = view.getState();
			const currentModeIsPreview = state.mode === "preview";

			if (requiredMode === "strict" || requiredMode === "default") {
				if (!currentModeIsPreview) {
					this.logDebug(
						`applyModeToActiveLeafAfterToggle: Setting state to PREVIEW for '${filePath}'.`,
					);
					view.setState(
						{ ...state, mode: "preview" },
						{ history: false },
					);
					this.showModeChangeNotice(
						filePath,
						requiredMode === "strict"
							? "NOTICE_MODE_STRICT"
							: "NOTICE_MODE_DEFAULT",
					);
				}
			} else {
				if (currentModeIsPreview) {
					this.logDebug(
						`applyModeToActiveLeafAfterToggle: Setting state to SOURCE for '${filePath}' as mode is now NULL (toggled off).`,
					);
					view.setState(
						{ ...state, mode: "source" },
						{ history: false },
					);
					this.showModeChangeNotice(filePath, "NOTICE_MODE_EDIT");
				}
			}
		}
	}

	private addToggleCommand(
		id: string,
		name: string,
		targetMode: "default" | "strict",
	): void {
		this.addCommand({
			id: id,
			name: name,
			checkCallback: (checking: boolean) => {
				const currentFile = this.app.workspace.getActiveFile();
				if (!currentFile) return false;
				if (!checking) {
					this.logDebug(
						`Command triggered: '${name}' for file '${currentFile.path}' targeting mode '${targetMode}'.`,
					);
					this.toggleFileInList(currentFile.path, targetMode);
				}
				return true;
			},
		});
	}

	private async toggleFileInList(
		filePath: string,
		targetMode: "default" | "strict",
	): Promise<void> {
		const fileName = filePath.split("/").pop() || "file";
		this.logDebug(
			`toggleFileInList: Toggling path '${filePath}' for target mode '${targetMode}'.`,
		);

		let messageKey = "";
		const messageVars: Record<string, string> = { fileName };

		const updatedSettings: ReadModeControlSettings = {
			...this.settings,
			defaultReadOnlyFiles: [...this.settings.defaultReadOnlyFiles],
			strictReadOnlyFiles: [...this.settings.strictReadOnlyFiles],
			strictReadOnlyFolders: [...this.settings.strictReadOnlyFolders],
			defaultReadOnlyFolders: [...this.settings.defaultReadOnlyFolders],
			defaultReadOnlyRegex: [...this.settings.defaultReadOnlyRegex],
			strictReadOnlyRegex: [...this.settings.strictReadOnlyRegex],
		};

		const defaultIndex =
			updatedSettings.defaultReadOnlyFiles.indexOf(filePath);
		const strictIndex =
			updatedSettings.strictReadOnlyFiles.indexOf(filePath);
		let movedFromOtherListKey: string | null = null;

		if (targetMode === "default") {
			if (defaultIndex > -1) {
				updatedSettings.defaultReadOnlyFiles.splice(defaultIndex, 1);
				messageKey = "NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX";
			} else {
				if (strictIndex > -1) {
					updatedSettings.strictReadOnlyFiles.splice(strictIndex, 1);
					movedFromOtherListKey =
						"NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX";
				}
				if (!updatedSettings.defaultReadOnlyFiles.includes(filePath)) {
					updatedSettings.defaultReadOnlyFiles.push(filePath);
				}
				messageKey = "NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX";
			}
		} else {
			if (strictIndex > -1) {
				updatedSettings.strictReadOnlyFiles.splice(strictIndex, 1);
				messageKey = "NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX";
			} else {
				if (defaultIndex > -1) {
					updatedSettings.defaultReadOnlyFiles.splice(
						defaultIndex,
						1,
					);
					movedFromOtherListKey =
						"NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX";
				}
				if (!updatedSettings.strictReadOnlyFiles.includes(filePath)) {
					updatedSettings.strictReadOnlyFiles.push(filePath);
				}
				messageKey = "NOTICE_TOGGLE_ADDED_STRICT_SUFFIX";
			}
		}

		this.settings = updatedSettings;
		await this.saveSettings();
		this.applyModeToActiveLeafAfterToggle();

		let noticeMessage = "";
		if (messageKey.includes("ADDED_DEFAULT")) {
			noticeMessage =
				t("NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX", messageVars) +
				t("NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX", messageVars);
		} else if (messageKey.includes("REMOVED_DEFAULT")) {
			noticeMessage =
				t("NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX", messageVars) +
				t("NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX", messageVars);
		} else if (messageKey.includes("ADDED_STRICT")) {
			noticeMessage =
				t("NOTICE_TOGGLE_ADDED_STRICT_PREFIX", messageVars) +
				t("NOTICE_TOGGLE_ADDED_STRICT_SUFFIX", messageVars);
		} else if (messageKey.includes("REMOVED_STRICT")) {
			noticeMessage =
				t("NOTICE_TOGGLE_REMOVED_STRICT_PREFIX", messageVars) +
				t("NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX", messageVars);
		}

		if (movedFromOtherListKey) {
			noticeMessage += " " + t(movedFromOtherListKey);
		}
		new Notice(noticeMessage, 3000);
	}
}
