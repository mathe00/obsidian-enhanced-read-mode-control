// src/lang/ms.ts
// Malay translations - Bahasa Melayu

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Automatik (Mengikut Obsidian)',
    LANG_AUTO: 'Automatik (Mengikut Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Tetapan Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Padanan Laluan Tepat',
    SETTINGS_SECTION_REGEX_BETA: 'Padanan Laluan Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Kelakuan',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Maklum Balas & Penyahpepijatan',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Fail Baca Sahaja Lalai (Laluan Tepat)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Fail yang disenaraikan di sini akan dibuka dalam mod baca sahaja secara lalai. Menggunakan padanan laluan tepat.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Masukkan laluan fail (cth: Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Folder Baca Sahaja Lalai (Laluan Tepat)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Semua nota dalam folder ini (dan subfolder) akan dibuka dalam mod baca sahaja lalai. Menggunakan padanan laluan yang tepat.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Masukkan laluan folder (cth., Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Fail Baca Sahaja Ketat (Laluan Tepat)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Fail yang disenaraikan di sini akan dipaksa ke mod baca sahaja. Menggunakan padanan laluan tepat.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Masukkan laluan fail (cth: Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Folder Baca Sahaja Ketat (Laluan Tepat)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Semua nota dalam folder ini (dan subfolder) akan dipaksa ke mod baca sahaja yang ketat. Menggunakan padanan laluan tepat.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Masukkan laluan folder (cth: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Dayakan Padanan Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Dayakan padanan laluan fail terhadap ungkapan nalar. Ini adalah ciri BETA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Gunakan dengan berhati-hati: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'corak regex yang tidak sah boleh menyebabkan ralat atau kelakuan yang tidak dijangka. Padanan regex diperiksa SELEPAS padanan folder/fail yang tepat.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Baca Sahaja Lalai (Corak Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Laluan fail yang sepadan dengan mana-mana corak regex di sini akan dibuka dalam mod baca sahaja lalai. Satu corak regex JavaScript setiap baris (tanpa garis miring).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Masukkan corak regex (cth: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Baca Sahaja Ketat (Corak Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Laluan fail yang sepadan dengan mana-mana corak regex di sini akan dipaksa ke mod baca sahaja yang ketat. Satu corak regex JavaScript setiap baris (tanpa garis miring).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Masukkan corak regex (cth: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Tambah Laluan',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Tambah Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Alih Keluar',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Belum ada fail ditambah.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Belum ada folder ditambah.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Belum ada corak regex ditambah.',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "Laluan '{path}' sudah wujud dalam senarai ini.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "Corak Regex '{path}' sudah wujud dalam senarai ini.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "{itemType} tidak sah: '{path}'. Sila semak format atau kewujudan.",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Paksa Mod Edit pada Nota Tidak Terurus',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Pilih cara plugin mengendalikan nota yang TIDAK disenaraikan dalam tetapan di atas.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Masalah:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Apabila menavigasi dari nota yang dikawal plugin (baca sahaja) ke nota biasa ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'dalam tab yang sama',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian mungkin membiarkan nota biasa tersekat dalam mod baca sahaja secara tidak betul.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Pilihan 1: DILUMPUHKAN (Lalai)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Tindakan:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Plugin TIDAK PERNAH memaksa mod edit pada nota biasa.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Faedah:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Menghormati sepenuhnya perubahan manual. Jika anda menetapkan nota biasa kepada mod baca sahaja, ia akan kekal begitu.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Kelemahan:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Pepijat "tersekat dalam mod baca sahaja" dalam tab yang sama kekal. Anda mesti menukar kembali ke mod edit secara manual dalam kes khusus itu.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Pilihan 2: DIDAYAKAN',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Tindakan:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Plugin memaksa MANA-MANA nota biasa yang ditemui dalam mod baca sahaja kembali ke mod edit semasa dibuka.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Faedah:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Memperbaiki pepijat "tersekat dalam mod baca sahaja" untuk navigasi dalam tab yang sama.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Kelemahan:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Mengatasi pilihan manual. Jika anda menetapkan nota biasa kepada mod baca sahaja, plugin ini AKAN memaksanya kembali ke mod edit apabila anda membukanya semula.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Maklumkan tentang Perubahan Mod (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Tunjukkan pemberitahuan ringkas apabila plugin secara aktif menukar mod paparan nota semasa dibuka. Ini adalah ciri BETA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Dayakan Pengelogan Nyahpepijat',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Tunjukkan log terperinci dalam konsol pembangun. Memerlukan Obsidian dimulakan semula atau plugin dimuat semula untuk kesan penuh.',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Dayakan Pengesanan Konflik",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "Analisis tetapan untuk peraturan yang bercanggah (cth., laluan yang sama dalam senarai lalai dan ketat). Konflik akan diserlahkan dalam senarai di bawah.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Maklumkan mengenai Konflik Konfigurasi",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "Tunjukkan pemberitahuan jika konflik konfigurasi dikesan semasa tetapan dibuka atau diubah.",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' ditetapkan kepada ",
    NOTICE_MODE_DEFAULT: "Baca Sahaja Lalai.",
    NOTICE_MODE_STRICT: "Baca Sahaja Ketat.",
    NOTICE_MODE_EDIT: "Mod Edit.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Corak regex ketat tidak sah: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Corak regex lalai tidak sah: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Pemberitahuan perubahan mod didayakan.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "{count} konflik konfigurasi dikesan.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "Semak tetapan pemalam untuk butiran.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "Semak senarai di bawah untuk butiran.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Togol baca sahaja lalai untuk nota semasa",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Togol baca sahaja ketat untuk nota semasa",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Dialih keluar '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' daripada senarai baca sahaja lalai.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Ditambah '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' ke senarai baca sahaja lalai.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Dialih keluar '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' daripada senarai baca sahaja ketat.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Ditambah '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' ke senarai baca sahaja ketat.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Dialih keluar daripada senarai ketat)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Dialih keluar daripada senarai lalai)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Bahasa Plugin",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Pilih bahasa paparan untuk antara muka plugin ini. Memerlukan Obsidian dimulakan semula atau plugin dimuat semula untuk melaksanakan perubahan.",
	SETTINGS_DIAGNOSTICS_TITLE: "Diagnostik Konfigurasi",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "Konflik: Fail ini ('{path}') juga terdapat dalam senarai Fail Baca Sahaja Ketat. Ia akan menjadi KETAT.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "Konflik: Fail ini ('{path}') juga terdapat dalam senarai Fail Baca Sahaja Lalai. Ia akan menjadi KETAT mengikut keutamaan.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "Konflik: Folder ini ('{path}') juga terdapat dalam senarai Folder Baca Sahaja Ketat. Semua nota di dalamnya akan menjadi KETAT.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "Konflik: Folder ini ('{path}') juga terdapat dalam senarai Folder Baca Sahaja Lalai. Semua nota di dalamnya akan menjadi KETAT mengikut keutamaan.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "Atasi: Fail ini ('{path}') berada dalam senarai Lalai, tetapi ia berada di dalam folder Ketat '{conflictingPath}'. Ia akan menjadi KETAT.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "Info: Fail ini ('{path}') berada dalam senarai Ketat dan di dalam folder Lalai '{conflictingPath}'. Peraturan Ketat khusus fail diutamakan.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "Lebihan: Fail ini ('{path}') sudah dilindungi oleh peraturan Folder Baca Sahaja Lalai untuk '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "Lebihan: Fail ini ('{path}') sudah dilindungi oleh peraturan Folder Baca Sahaja Ketat untuk '{conflictingPath}'.",

};
