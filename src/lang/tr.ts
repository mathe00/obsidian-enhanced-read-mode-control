// src/lang/tr.ts
// Turkish translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Otomatik (Obsidian Diliyle Eşleştir)',
    LANG_AUTO: 'Otomatik (Obsidian Diliyle Eşleştir)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Enhanced Read Mode Control Ayarları',
    SETTINGS_SECTION_EXACT_PATHS: 'Tam Yol Eşleşmesi',
    SETTINGS_SECTION_REGEX_BETA: 'Regex Yol Eşleşmesi (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Davranış',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Geri Bildirim ve Hata Ayıklama',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Varsayılan Salt Okunur Dosyalar (Tam Yollar)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Burada listelenen dosyalar varsayılan olarak salt okunur modda açılır. Tam yol eşleşmesini kullanır.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Dosya yolunu girin (örn: Notlar/Dosyam.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Katı Salt Okunur Dosyalar (Tam Yollar)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Burada listelenen dosyalar salt okunur moda zorlanır. Tam yol eşleşmesini kullanır.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Dosya yolunu girin (örn: Şablonlar/Korumalı.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Katı Salt Okunur Klasörler (Tam Yollar)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Bu klasörlerdeki (ve alt klasörlerindeki) tüm notlar katı salt okunur moda zorlanır. Tam yol eşleşmesini kullanır.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Klasör yolunu girin (örn: Arşiv/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Regex Eşleşmesini Etkinleştir (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Dosya yollarının düzenli ifadelerle eşleşmesini etkinleştirin. Bu bir BETA özelliğidir. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Dikkatli kullanın: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'geçersiz regex desenleri hatalara veya beklenmedik davranışlara neden olabilir. Regex eşleşmesi, tam klasör/dosya eşleşmelerinden SONRA kontrol edilir.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Varsayılan Salt Okunur (Regex Desenleri)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Buradaki herhangi bir regex deseniyle eşleşen dosya yolları varsayılan olarak salt okunur modda açılır. Satır başına bir JavaScript regex deseni (eğik çizgi olmadan).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Regex desenini girin (örn: ^Günlük/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Katı Salt Okunur (Regex Desenleri)',
    SETTINGS_STRICT_REGEX_DESC: 'Buradaki herhangi bir regex deseniyle eşleşen dosya yolları katı salt okunur moda zorlanır. Satır başına bir JavaScript regex deseni (eğik çizgi olmadan).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Regex desenini girin (örn: ^Şablonlar/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Yol Ekle',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Regex Ekle',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Kaldır',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Henüz dosya eklenmedi.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Henüz klasör eklenmedi.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Henüz regex deseni eklenmedi.',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Yönetilmeyen Notlarda Düzenleme Modunu Zorla',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Eklentinin yukarıdaki ayarlarda listelenmeyen notları nasıl işleyeceğini seçin.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Sorun:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Eklenti kontrollü bir nottan (salt okunur) normal bir nota ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'aynı sekmede',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ' giderken, Obsidian normal notu yanlışlıkla salt okunur modda bırakabilir.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Seçenek 1: DEVRE DIŞI (Varsayılan)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Eylem:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Eklenti ASLA normal notlarda düzenleme modunu zorlamaz.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Fayda:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Manuel değişikliklere tamamen saygı duyar. Normal bir notu salt okunur olarak ayarlarsanız, öyle kalır.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Dezavantaj:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Aynı sekmedeki "salt okunur modda takılı kalma" hatası devam eder. Bu özel durumda manuel olarak düzenleme moduna geri dönmeniz gerekir.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Seçenek 2: ETKİN',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Eylem:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Eklenti, salt okunur modda bulunan HERHANGİ bir normal notu açarken düzenleme moduna geri zorlar.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Fayda:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Aynı sekme gezinmesi için "salt okunur modda takılı kalma" hatasını düzeltir.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Dezavantaj:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Manuel seçimleri geçersiz kılar. Normal bir notu salt okunur olarak ayarlarsanız, bu eklenti yeniden açtığınızda onu düzenleme moduna geri ZORLAR.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Mod Değişikliğinde Bildir (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Eklenti bir notun görünüm modunu açarken aktif olarak değiştirdiğinde kısa bir bildirim gösterin. Bu bir BETA özelliğidir.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Hata Ayıklama Günlüğünü Etkinleştir',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Geliştirici konsolunda ayrıntılı günlükleri gösterin. Tamamen etkili olması için Obsidian\'ı yeniden başlatmak veya eklentiyi yeniden yüklemek gerekir.',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' şu şekilde ayarlandı: ",
    NOTICE_MODE_DEFAULT: "Varsayılan Salt Okunur.",
    NOTICE_MODE_STRICT: "Katı Salt Okunur.",
    NOTICE_MODE_EDIT: "Düzenleme Modu.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Geçersiz katı regex deseni: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Geçersiz varsayılan regex deseni: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Mod değişikliği bildirimleri etkinleştirildi.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Geçerli not için varsayılan salt okunurluğu değiştir",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Geçerli not için katı salt okunurluğu değiştir",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' varsayılan salt okunur listesinden kaldırıldı.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' varsayılan salt okunur listesine eklendi.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' katı salt okunur listesinden kaldırıldı.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' katı salt okunur listesine eklendi.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (katı listeden kaldırıldı)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (varsayılan listeden kaldırıldı)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Eklenti Dili",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Bu eklenti arayüzü için görüntüleme dilini seçin. Değişikliklerin uygulanması için Obsidian'ı yeniden başlatmak veya eklentiyi yeniden yüklemek gerekir.",
};
