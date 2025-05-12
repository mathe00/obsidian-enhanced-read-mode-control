// src/types.ts

/**
 * Defines the possible forced read-only modes for a note.
 * - 'default': The note opens in read-only mode, but can be switched to edit mode.
 * - 'strict': The note is forced into read-only mode and cannot be switched to edit mode.
 * - null: No forced mode is applied by this plugin.
 */
export type ReadOnlyMode = 'default' | 'strict' | null;

/**
 * Defines the structure for the plugin's settings.
 */
export interface ReadModeControlSettings {
	/** List of file paths to open in 'default' read-only mode. */
	defaultReadOnlyFiles: string[];
	/** List of file paths to open in 'strict' read-only mode. */
	strictReadOnlyFiles: string[];
	/** List of folder paths where all notes within should open in 'strict' read-only mode. */
	strictReadOnlyFolders: string[];
}

/**
 * Default values for the plugin settings.
 */
export const DEFAULT_SETTINGS: ReadModeControlSettings = {
	defaultReadOnlyFiles: [],
	strictReadOnlyFiles: [],
	strictReadOnlyFolders: [],
};
