// src/lang/fil.ts
// Filipino translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Awtomatiko (Ayon sa Obsidian)',
    LANG_AUTO: 'Awtomatiko (Ayon sa Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Mga Setting ng Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Eksaktong Pagtutugma ng Path',
    SETTINGS_SECTION_REGEX_BETA: 'Pagtutugma ng Path gamit ang Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Pag-uugali',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Feedback at Pag-debug',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Mga Default na Read-Only File (Eksaktong Path)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Ang mga file na nakalista dito ay magbubukas sa read-only mode bilang default. Gumagamit ng eksaktong pagtutugma ng path.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Ilagay ang path ng file (hal: Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Mga Default na Read-Only na Folder (Eksaktong mga Path)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Lahat ng mga tala sa loob ng mga folder na ito (at mga subfolder) ay magbubukas sa default na read-only mode. Gumagamit ng eksaktong pagtutugma ng path.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Ilagay ang path ng folder (hal., Mga Proyekto/Aktibo)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Mga Mahigpit na Read-Only File (Eksaktong Path)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Ang mga file na nakalista dito ay pipiliting nasa read-only mode. Gumagamit ng eksaktong pagtutugma ng path.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Ilagay ang path ng file (hal: Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Mga Mahigpit na Read-Only Folder (Eksaktong Path)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Lahat ng tala sa loob ng mga folder na ito (at mga subfolder) ay pipiliting nasa mahigpit na read-only mode. Gumagamit ng eksaktong pagtutugma ng path.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Ilagay ang path ng folder (hal: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Paganahin ang Pagtutugma ng Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Paganahin ang pagtutugma ng mga path ng file laban sa mga regular expression. Ito ay isang BETA feature. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Gamitin nang may pag-iingat: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'ang mga hindi wastong pattern ng regex ay maaaring magdulot ng mga error o hindi inaasahang pag-uugali. Sinusuri ang pagtutugma ng regex PAGKATAPOS ng eksaktong pagtutugma ng folder/file.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Default na Read-Only (Mga Pattern ng Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Ang mga path ng file na tumutugma sa anumang pattern ng regex dito ay magbubukas sa default na read-only mode. Isang JavaScript regex pattern bawat linya (walang mga slash).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Ilagay ang pattern ng regex (hal: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Mahigpit na Read-Only (Mga Pattern ng Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Ang mga path ng file na tumutugma sa anumang pattern ng regex dito ay pipiliting nasa mahigpit na read-only mode. Isang JavaScript regex pattern bawat linya (walang mga slash).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Ilagay ang pattern ng regex (hal: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Magdagdag ng Path',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Magdagdag ng Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Alisin',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Wala pang naidagdag na file.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Wala pang naidagdag na folder.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Wala pang naidagdag na pattern ng regex.',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "Ang path na '{path}' ay umiiral na sa listahang ito.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "Ang Regex pattern na '{path}' ay umiiral na sa listahang ito.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "Di-wastong {itemType}: '{path}'. Pakisuri ang format o pag-iral.",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Pilitin ang Edit Mode sa mga Hindi Pinamamahalaang Tala',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Piliin kung paano hahawakan ng plugin ang mga tala na HINDI nakalista sa mga setting sa itaas.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Problema:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Kapag nagna-navigate mula sa isang tala na kontrolado ng plugin (read-only) patungo sa isang normal na tala ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'sa parehong tab',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', maaaring iwanan ng Obsidian ang normal na tala na hindi tama na naka-stuck sa read-only mode.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Opsyon 1: NAKA-DISABLE (Default)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Aksyon:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' HINDI kailanman pipilitin ng plugin ang edit mode sa mga normal na tala.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Benepisyo:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Ganap na nirerespeto ang mga manu-manong pagbabago. Kung itatakda mo ang isang normal na tala sa read-only, mananatili itong ganoon.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Dehado:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Ang bug na "naka-stuck sa read-only mode" sa parehong tab ay mananatili. Kailangan mong manu-manong bumalik sa edit mode sa partikular na kasong iyon.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Opsyon 2: NAKA-ENABLE',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Aksyon:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Pipilitin ng plugin ang ANUMANG normal na tala na natagpuan sa read-only mode na bumalik sa edit mode kapag binuksan.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Benepisyo:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Inaayos ang bug na "naka-stuck sa read-only mode" para sa pag-navigate sa parehong tab.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Dehado:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Ina-override ang mga manu-manong pagpili. Kung itatakda mo ang isang normal na tala sa read-only, pipilitin ito ng plugin na bumalik sa edit mode kapag binuksan mo itong muli.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Ipagbigay-alam sa Pagbabago ng Mode (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Magpakita ng maikling abiso kapag aktibong binabago ng plugin ang view mode ng isang tala kapag binuksan. Ito ay isang BETA feature.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Paganahin ang Pag-log ng Debug',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Magpakita ng mga detalyadong log sa developer console. Nangangailangan ng pag-restart ng Obsidian o pag-reload ng plugin para sa buong epekto.',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Paganahin ang Pagtuklas ng Salungatan",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "Suriin ang mga setting para sa magkasalungat na panuntunan (hal., parehong path sa default at mahigpit na mga listahan). Ang mga salungatan ay iha-highlight sa mga listahan sa ibaba.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Ipagbigay-alam sa mga Salungatan sa Configuration",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "Magpakita ng abiso kung may nakitang mga salungatan sa configuration kapag binuksan o binago ang mga setting.",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' itinakda sa ",
    NOTICE_MODE_DEFAULT: "Default na Read-Only.",
    NOTICE_MODE_STRICT: "Mahigpit na Read-Only.",
    NOTICE_MODE_EDIT: "Edit Mode.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Hindi wastong mahigpit na pattern ng regex: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Hindi wastong default na pattern ng regex: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Pinagana ang mga abiso sa pagbabago ng mode.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "Nakakita ng {count} salungatan sa configuration.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "Suriin ang mga setting ng plugin para sa mga detalye.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "Suriin ang mga listahan sa ibaba para sa mga detalye.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: I-toggle ang default na read-only para sa kasalukuyang tala",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: I-toggle ang mahigpit na read-only para sa kasalukuyang tala",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Inalis ang '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' mula sa listahan ng default na read-only.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Idinagdag ang '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' sa listahan ng default na read-only.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Inalis ang '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' mula sa listahan ng mahigpit na read-only.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Idinagdag ang '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' sa listahan ng mahigpit na read-only.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Inalis mula sa mahigpit na listahan)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Inalis mula sa default na listahan)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Wika ng Plugin",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Piliin ang wika ng display para sa interface ng plugin na ito. Nangangailangan ng pag-restart ng Obsidian o pag-reload ng plugin para mailapat ang mga pagbabago.",
	SETTINGS_DIAGNOSTICS_TITLE: "Mga Diagnostic ng Configuration",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "Salungatan: Ang file na ito ('{path}') ay nasa listahan din ng Mahigpit na Read-Only na mga File. Ito ay magiging MAHIGPIT.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "Salungatan: Ang file na ito ('{path}') ay nasa listahan din ng Default na Read-Only na mga File. Ito ay magiging MAHIGPIT ayon sa priyoridad.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "Salungatan: Ang folder na ito ('{path}') ay nasa listahan din ng Mahigpit na Read-Only na mga Folder. Lahat ng mga tala sa loob ay magiging MAHIGPIT.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "Salungatan: Ang folder na ito ('{path}') ay nasa listahan din ng Default na Read-Only na mga Folder. Lahat ng mga tala sa loob ay magiging MAHIGPIT ayon sa priyoridad.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "Override: Ang file na ito ('{path}') ay nasa isang Default na listahan, ngunit ito ay nasa loob ng Mahigpit na folder '{conflictingPath}'. Ito ay magiging MAHIGPIT.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "Impormasyon: Ang file na ito ('{path}') ay nasa isang Mahigpit na listahan at nasa loob ng Default na folder '{conflictingPath}'. Ang Mahigpit na panuntunan na partikular sa file ang mangingibabaw.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "Kalabisan: Ang file na ito ('{path}') ay sakop na ng panuntunan ng Default na Read-Only Folder para sa '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "Kalabisan: Ang file na ito ('{path}') ay sakop na ng panuntunan ng Mahigpit na Read-Only Folder para sa '{conflictingPath}'.",

};
