// src/lang/id.ts
// Indonesian translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Otomatis (Sesuai Obsidian)',
    LANG_AUTO: 'Otomatis (Sesuai Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Pengaturan Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Pencocokan Path Tepat',
    SETTINGS_SECTION_REGEX_BETA: 'Pencocokan Path Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Perilaku',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Umpan Balik & Debugging',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'File Baca Saja Default (Path Tepat)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'File yang terdaftar di sini akan terbuka dalam mode baca saja secara default. Menggunakan pencocokan path tepat.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Masukkan path file (mis: Notes/FileSaya.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Folder Baca-Saja Default (Path Tepat)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Semua catatan di dalam folder ini (dan subfolder) akan terbuka dalam mode baca-saja default. Menggunakan pencocokan path yang tepat.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Masukkan path folder (misalnya, Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'File Baca Saja Ketat (Path Tepat)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'File yang terdaftar di sini akan dipaksa ke mode baca saja. Menggunakan pencocokan path tepat.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Masukkan path file (mis: Templates/Dilindungi.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Folder Baca Saja Ketat (Path Tepat)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Semua catatan dalam folder ini (dan subfolder) akan dipaksa ke mode baca saja ketat. Menggunakan pencocokan path tepat.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Masukkan path folder (mis: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Aktifkan Pencocokan Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Aktifkan pencocokan path file terhadap ekspresi reguler. Ini adalah fitur BETA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Gunakan dengan hati-hati: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'pola regex yang tidak valid dapat menyebabkan kesalahan atau perilaku tak terduga. Pencocokan regex diperiksa SETELAH pencocokan folder/file tepat.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Baca Saja Default (Pola Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Path file yang cocok dengan pola regex di sini akan terbuka dalam mode baca saja default. Satu pola regex JavaScript per baris (tanpa garis miring).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Masukkan pola regex (mis: ^Jurnal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Baca Saja Ketat (Pola Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Path file yang cocok dengan pola regex di sini akan dipaksa ke mode baca saja ketat. Satu pola regex JavaScript per baris (tanpa garis miring).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Masukkan pola regex (mis: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Tambah Path',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Tambah Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Hapus',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Belum ada file yang ditambahkan.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Belum ada folder yang ditambahkan.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Belum ada pola regex yang ditambahkan.',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "Path '{path}' sudah ada di daftar ini.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "Pola Regex '{path}' sudah ada di daftar ini.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "{itemType} tidak valid: '{path}'. Harap periksa format atau keberadaannya.",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Paksa Mode Edit pada Catatan Tidak Terkelola',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Pilih bagaimana plugin menangani catatan yang TIDAK terdaftar dalam pengaturan di atas.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Masalah:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Saat bernavigasi dari catatan yang dikontrol plugin (baca saja) ke catatan normal ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'di tab yang sama',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian mungkin membiarkan catatan normal terjebak dalam mode baca saja secara tidak benar.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Opsi 1: DINONAKTIFKAN (Default)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Aksi:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Plugin TIDAK PERNAH memaksa mode edit pada catatan normal.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Keuntungan:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Sepenuhnya menghormati perubahan manual. Jika Anda mengatur catatan normal ke mode baca saja, itu akan tetap seperti itu.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Kekurangan:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Bug "terjebak dalam mode baca saja" di tab yang sama tetap ada. Anda harus secara manual beralih kembali ke mode edit dalam kasus spesifik tersebut.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Opsi 2: DIAKTIFKAN',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Aksi:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Plugin memaksa SETIAP catatan normal yang ditemukan dalam mode baca saja kembali ke mode edit saat dibuka.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Keuntungan:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Memperbaiki bug "terjebak dalam mode baca saja" untuk navigasi di tab yang sama.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Kekurangan:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Mengesampingkan pilihan manual. Jika Anda mengatur catatan normal ke mode baca saja, plugin ini AKAN memaksanya kembali ke mode edit saat Anda membukanya kembali.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Notifikasi saat Mode Berubah (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Tampilkan notifikasi singkat saat plugin secara aktif mengubah mode tampilan catatan saat dibuka. Ini adalah fitur BETA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Aktifkan Logging Debug',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Tampilkan log detail di konsol pengembang. Memerlukan restart Obsidian atau muat ulang plugin untuk efek penuh.',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Aktifkan Deteksi Konflik",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "Analisis pengaturan untuk aturan yang bertentangan (misalnya, path yang sama di daftar default dan ketat). Konflik akan disorot di daftar di bawah.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Beri Tahu tentang Konflik Konfigurasi",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "Tampilkan pemberitahuan jika konflik konfigurasi terdeteksi saat pengaturan dibuka atau diubah.",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' diatur ke ",
    NOTICE_MODE_DEFAULT: "Baca Saja Default.",
    NOTICE_MODE_STRICT: "Baca Saja Ketat.",
    NOTICE_MODE_EDIT: "Mode Edit.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Pola regex ketat tidak valid: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Pola regex default tidak valid: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Notifikasi perubahan mode diaktifkan.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "{count} konflik konfigurasi terdeteksi.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "Periksa pengaturan plugin untuk detail.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "Periksa daftar di bawah untuk detail.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Alihkan baca saja default untuk catatan saat ini",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Alihkan baca saja ketat untuk catatan saat ini",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Dihapus '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' dari daftar baca saja default.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Ditambahkan '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' ke daftar baca saja default.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Dihapus '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' dari daftar baca saja ketat.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Ditambahkan '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' ke daftar baca saja ketat.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Dihapus dari daftar ketat)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Dihapus dari daftar default)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Bahasa Plugin",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Pilih bahasa tampilan untuk antarmuka plugin ini. Memerlukan restart Obsidian atau muat ulang plugin untuk menerapkan perubahan.",
	SETTINGS_DIAGNOSTICS_TITLE: "Diagnostik Konfigurasi",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "Konflik: File ini ('{path}') juga ada di daftar File Baca-Saja Ketat. Ini akan menjadi KETAT.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "Konflik: File ini ('{path}') juga ada di daftar File Baca-Saja Default. Ini akan menjadi KETAT sesuai prioritas.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "Konflik: Folder ini ('{path}') juga ada di daftar Folder Baca-Saja Ketat. Semua catatan di dalamnya akan menjadi KETAT.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "Konflik: Folder ini ('{path}') juga ada di daftar Folder Baca-Saja Default. Semua catatan di dalamnya akan menjadi KETAT sesuai prioritas.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "Timpa: File ini ('{path}') ada di daftar Default, tetapi berada di dalam folder Ketat '{conflictingPath}'. Ini akan menjadi KETAT.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "Info: File ini ('{path}') ada di daftar Ketat dan di dalam folder Default '{conflictingPath}'. Aturan Ketat khusus file lebih diutamakan.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "Redundan: File ini ('{path}') sudah dicakup oleh aturan Folder Baca-Saja Default untuk '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "Redundan: File ini ('{path}') sudah dicakup oleh aturan Folder Baca-Saja Ketat untuk '{conflictingPath}'.",

};
