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
    /** List of folder paths where all notes within should open in 'default' read-only mode. */
    defaultReadOnlyFolders: string[];
	/** Whether to enable detailed debug logging in the console. */
	debugLoggingEnabled: boolean;
	/** Whether to force 'source' mode on unmanaged notes found in 'preview' mode (fixes same-tab issue but overrides manual state). */
	forceSourceOnUnmanaged: boolean;
    /** Whether to enable regex matching for read-only rules. BETA feature. */
    enableRegexMatching: boolean;
    /** List of regex patterns for 'default' read-only mode. */
    defaultReadOnlyRegex: string[];
    /** List of regex patterns for 'strict' read-only mode. */
    strictReadOnlyRegex: string[];
    /** Whether to show a notification when the plugin changes a note's view mode. BETA feature. */
    notifyOnModeChange: boolean;
    /** Selected language for the plugin interface. 'auto' means follow Obsidian's language. */
    pluginLanguage: string;
    /** Whether to enable conflict detection in settings UI. */
    conflictDetectionEnabled: boolean;
    /** Whether to show a notification if configuration conflicts are detected. */
    notifyOnConflict: boolean;
}

/**
 * Default values for the plugin settings.
 */
export const DEFAULT_SETTINGS: ReadModeControlSettings = {
	defaultReadOnlyFiles: [],
	strictReadOnlyFiles: [],
	strictReadOnlyFolders: [],
    defaultReadOnlyFolders: [],
	debugLoggingEnabled: false,
	forceSourceOnUnmanaged: false,
    enableRegexMatching: false,
    defaultReadOnlyRegex: [],
    strictReadOnlyRegex: [],
    notifyOnModeChange: false,
    pluginLanguage: 'auto', // Default to automatic language detection
    conflictDetectionEnabled: true, // Enabled by default
    notifyOnConflict: true, // Enabled by default
};

/**
 * Describes a detected configuration conflict.
 */
export interface ConflictInfo {
    /** The path of the item causing or involved in the conflict. */
    path: string;
    /** The type of list this path belongs to. */
    listType: 'defaultFile' | 'strictFile' | 'defaultFolder' | 'strictFolder';
    /** The nature of the conflict. */
    conflictType:
        | 'directSamePathFile'         // File in both defaultFiles and strictFiles
        | 'directSamePathFolder'       // Folder in both defaultFolders and strictFolders
        | 'defaultFileInStrictFolder'  // Default file is inside a strict folder (will be strict)
        | 'strictFileInDefaultFolder'  // Strict file is inside a default folder (info: file rule wins)
        | 'defaultFileInDefaultFolder' // Default file is inside a default folder (redundant)
        | 'strictFileInStrictFolder';  // Strict file is inside a strict folder (redundant)
    /** Translation key for the conflict message. */
    messageKey: string;
    /** For 'fileInFolder' type conflicts, this is the path of the folder. For 'directSamePath' it's the conflicting item's path. */
    conflictingPath?: string;
    /** The type of list the conflictingPath belongs to. */
    conflictingListType?: 'defaultFile' | 'strictFile' | 'defaultFolder' | 'strictFolder';
}
