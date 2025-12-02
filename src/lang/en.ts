// src/lang/en.ts
// English translations (default)

export default {
	// General
	LANG_AUTO_DETECT_OBSIDIAN: "Automatic (Match Obsidian)",

	// Settings Tab Titles
	SETTINGS_TAB_MAIN_TITLE: "Enhanced Read Mode Control Settings",
	SETTINGS_SECTION_EXACT_PATHS: "Exact Path Matching",
	SETTINGS_SECTION_REGEX_BETA: "Regex Path Matching (BETA)",
	SETTINGS_SECTION_BEHAVIOR: "Behavior",
	SETTINGS_SECTION_FEEDBACK_DEBUG: "Feedback, Debugging & Diagnostics",

	// Exact Path List Management
	SETTINGS_DEFAULT_FILES_EXACT_TITLE: "Default Read-Only Files (Exact Paths)",
	SETTINGS_DEFAULT_FILES_EXACT_DESC:
		"Files listed here will open in read-only mode by default. Uses exact path matching.",
	SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER:
		"Enter file path (e.g., Notes/MyFile.md)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE:
		"Default Read-Only Folders (Exact Paths)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC:
		"All notes within these folders (and subfolders) will open in default read-only mode. Uses exact path matching.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER:
		"Enter folder path (e.g., Projects/Active)",

	SETTINGS_STRICT_FILES_EXACT_TITLE: "Strict Read-Only Files (Exact Paths)",
	SETTINGS_STRICT_FILES_EXACT_DESC:
		"Files listed here will be forced into read-only mode. Uses exact path matching.",
	SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER:
		"Enter file path (e.g., Templates/Protected.md)",

	SETTINGS_STRICT_FOLDERS_EXACT_TITLE:
		"Strict Read-Only Folders (Exact Paths)",
	SETTINGS_STRICT_FOLDERS_EXACT_DESC:
		"All notes within these folders (and subfolders) will be forced into strict read-only mode. Uses exact path matching.",
	SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER:
		"Enter folder path (e.g., Archive/2023)",

	// Regex Path List Management
	SETTINGS_ENABLE_REGEX_TITLE: "Enable Regex Matching (BETA)",
	SETTINGS_ENABLE_REGEX_DESC_PART1:
		"Enable matching file paths against regular expressions. This is a BETA feature. ",
	SETTINGS_ENABLE_REGEX_DESC_PART2: "Use with caution: ",
	SETTINGS_ENABLE_REGEX_DESC_PART3:
		"invalid regex patterns can cause errors or unexpected behavior. Regex matching is checked AFTER exact folder/file matches.",

	SETTINGS_DEFAULT_REGEX_TITLE: "Default Read-Only (Regex Patterns)",
	SETTINGS_DEFAULT_REGEX_DESC:
		"File paths matching any regex pattern here will open in default read-only mode. One JavaScript regex pattern per line (without slashes).",
	SETTINGS_DEFAULT_REGEX_PLACEHOLDER:
		"Enter regex pattern (e.g., ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)",

	SETTINGS_STRICT_REGEX_TITLE: "Strict Read-Only (Regex Patterns)",
	SETTINGS_STRICT_REGEX_DESC:
		"File paths matching any regex pattern here will be forced into strict read-only mode. One JavaScript regex pattern per line (without slashes).",
	SETTINGS_STRICT_REGEX_PLACEHOLDER:
		"Enter regex pattern (e.g., ^Templates/.*)",

	// List Management UI Shared
	SETTINGS_LIST_UI_ADD_PATH_BUTTON: "Add Path",
	SETTINGS_LIST_UI_ADD_REGEX_BUTTON: "Add Regex",
	SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: "Remove", // e.g., "Remove /path/to/file"
	SETTINGS_LIST_UI_EMPTY_FILES: "No files added yet.",
	SETTINGS_LIST_UI_EMPTY_FOLDERS: "No folders added yet.",
	SETTINGS_LIST_UI_EMPTY_REGEX: "No regex patterns added yet.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH:
		"Path '{path}' already exists in this list.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX:
		"Regex pattern '{path}' already exists in this list.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX:
		"Invalid {itemType}: '{path}'. Please check the format or existence.",

	// Behavior Setting
	SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: "Force Edit Mode on Unmanaged Notes",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO:
		"Choose how the plugin handles notes NOT listed in the settings above.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: "Problem:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT:
		" When navigating from a plugin-controlled note (read-only) to a normal note ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: "in the same tab",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END:
		", Obsidian might leave the normal note incorrectly stuck in read-only mode.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL:
		"Option 1: DISABLED (Default)",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: "Action:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT:
		" Plugin NEVER forces edit mode on normal notes.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: "Benefit:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT:
		" Fully respects manual changes. If you set a normal note to read-only, it stays that way.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: "Drawback:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT:
		' The "stuck in read-only" bug in the same tab remains. You must manually switch back to edit mode in that specific case.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: "Option 2: ENABLED",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: "Action:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT:
		" Plugin forces ANY normal note found in read-only mode back into edit mode upon opening.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: "Benefit:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT:
		' Fixes the "stuck in read-only" bug for same-tab navigation.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: "Drawback:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT:
		" Overrides manual choices. If you set a normal note to read-only, this plugin WILL force it back to edit mode when you reopen it.",

	// Feedback & Debugging Section
	SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: "Notify on Mode Change (BETA)",
	SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC:
		"Show a brief notification when the plugin actively changes a note's view mode upon opening. This is a BETA feature.",
	SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: "Enable Debug Logging",
	SETTINGS_ENABLE_DEBUG_LOGGING_DESC:
		"Show detailed logs in the developer console. Requires Obsidian restart or plugin reload to take full effect.",
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Enable Conflict Detection",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC:
		"Analyze settings for conflicting rules (e.g., same path in default and strict lists). Conflicts will be highlighted in the lists below.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Notify on Configuration Conflicts",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC:
		"Show a notification if configuration conflicts are detected when settings are opened or changed.",

	// Notifications (from main.ts and settings.ts)
	NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' set to ", // e.g., "'MyNote.md' set to "
	NOTICE_MODE_DEFAULT: "Default Read-Only.",
	NOTICE_MODE_STRICT: "Strict Read-Only.",
	NOTICE_MODE_EDIT: "Edit Mode.",
	NOTICE_INVALID_STRICT_REGEX_PREFIX:
		"Enhanced Read Mode: Invalid strict regex pattern: ",
	NOTICE_INVALID_DEFAULT_REGEX_PREFIX:
		"Enhanced Read Mode: Invalid default regex pattern: ",
	NOTICE_NOTIFICATIONS_ENABLED: "Mode change notifications enabled.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY:
		"{count} configuration conflict(s) detected.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "Check plugin settings for details.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "Check lists below for details.",

	// Command Palette Command Names (from main.ts)
	COMMAND_TOGGLE_DEFAULT:
		"Enhanced Read Mode Control: Toggle default read-only for current note",
	COMMAND_TOGGLE_STRICT:
		"Enhanced Read Mode Control: Toggle strict read-only for current note",

	// Toggle Command Notices (from main.ts)
	NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Removed '",
	NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' from default read-only list.",
	NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Added '",
	NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' to default read-only list.",
	NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Removed '",
	NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' from strict read-only list.",
	NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Added '",
	NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' to strict read-only list.",
	NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Removed from strict list)",
	NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Removed from default list)",

	// Language Setting
	SETTINGS_PLUGIN_LANGUAGE_TITLE: "Plugin Language",
	SETTINGS_PLUGIN_LANGUAGE_DESC:
		"Choose the display language for this plugin. Requires Obsidian restart or plugin reload to apply changes.",

	// Conflict Messages (for tooltips)
	SETTINGS_DIAGNOSTICS_TITLE: "Configuration Diagnostics",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT:
		"Conflict: This file ('{path}') is also in the Strict Read-Only Files list. It will be STRICT.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT:
		"Conflict: This file ('{path}') is also in the Default Read-Only Files list. It will be STRICT as per priority.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT:
		"Conflict: This folder ('{path}') is also in the Strict Read-Only Folders list. All notes within will be STRICT.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT:
		"Conflict: This folder ('{path}') is also in the Default Read-Only Folders list. All notes within will be STRICT as per priority.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER:
		"Override: This file ('{path}') is in a Default list, but it's inside the Strict folder '{conflictingPath}'. It will be STRICT.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER:
		"Info: This file ('{path}') is in a Strict list and inside the Default folder '{conflictingPath}'. The file-specific Strict rule takes precedence.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT:
		"Redundant: This file ('{path}') is already covered by the Default Read-Only Folder rule for '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT:
		"Redundant: This file ('{path}') is already covered by the Strict Read-Only Folder rule for '{conflictingPath}'.",
};
