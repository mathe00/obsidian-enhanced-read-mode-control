// src/lang/hu.ts
// Hungarian translations - Magyar

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Automatikus (Obsidian szerint)',
    LANG_AUTO: 'Automatikus (Obsidian szerint)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Enhanced Read Mode Control Beállítások',
    SETTINGS_SECTION_EXACT_PATHS: 'Pontos Útvonalegyezés',
    SETTINGS_SECTION_REGEX_BETA: 'Regex Útvonalegyezés (BÉTA)',
    SETTINGS_SECTION_BEHAVIOR: 'Viselkedés',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Visszajelzés & Hibakeresés',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Alapértelmezett Csak Olvasható Fájlok (Pontos Útvonalak)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Az itt felsorolt fájlok alapértelmezés szerint csak olvasható módban nyílnak meg. Pontos útvonalegyezést használ.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Adja meg a fájl útvonalát (pl. Jegyzetek/SajatFajl.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Alapértelmezett Csak olvasható mappák (Pontos útvonalak)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Az ezekben a mappákban (és almappákban) lévő összes jegyzet alapértelmezett csak olvasható módban nyílik meg. Pontos útvonal-egyezést használ.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Adja meg a mappa útvonalát (pl. Projektek/Aktív)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Szigorú Csak Olvasható Fájlok (Pontos Útvonalak)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Az itt felsorolt fájlok kényszerítve lesznek csak olvasható módba. Pontos útvonalegyezést használ.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Adja meg a fájl útvonalát (pl. Sablonok/Vedett.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Szigorú Csak Olvasható Mappák (Pontos Útvonalak)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Ezekben a mappákban (és almappákban) lévő összes jegyzet szigorú csak olvasható módba lesz kényszerítve. Pontos útvonalegyezést használ.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Adja meg a mappa útvonalát (pl. Archivum/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Regex Egyezés Engedélyezése (BÉTA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Fájlútvonalak reguláris kifejezésekkel való egyeztetésének engedélyezése. Ez egy BÉTA funkció. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Óvatosan használja: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'az érvénytelen regex minták hibákat vagy váratlan viselkedést okozhatnak. A regex egyezés a pontos mappa/fájl egyezések UTÁN kerül ellenőrzésre.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Alapértelmezett Csak Olvasható (Regex Minták)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Az itt bármely regex mintának megfelelő fájlútvonalak alapértelmezett csak olvasható módban nyílnak meg. Soronként egy JavaScript regex minta (perjelek nélkül).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Adjon meg regex mintát (pl. ^Naplo/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Szigorú Csak Olvasható (Regex Minták)',
    SETTINGS_STRICT_REGEX_DESC: 'Az itt bármely regex mintának megfelelő fájlútvonalak szigorú csak olvasható módba lesznek kényszerítve. Soronként egy JavaScript regex minta (perjelek nélkül).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Adjon meg regex mintát (pl. ^Sablonok/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Útvonal Hozzáadása',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Regex Hozzáadása',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Eltávolítás',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Még nincsenek fájlok hozzáadva.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Még nincsenek mappák hozzáadva.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Még nincsenek regex minták hozzáadva.',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "A(z) '{path}' útvonal már létezik ebben a listában.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "A(z) '{path}' Regex minta már létezik ebben a listában.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "Érvénytelen {itemType}: '{path}'. Kérjük, ellenőrizze a formátumot vagy a létezést.",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Szerkesztési Mód Kényszerítése Nem Kezelt Jegyzetekre',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Válassza ki, hogyan kezelje a bővítmény azokat a jegyzeteket, amelyek NEM szerepelnek a fenti beállításokban.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Probléma:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Amikor egy bővítmény által vezérelt jegyzetből (csak olvasható) egy normál jegyzetre navigál ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'ugyanabban a lapban',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', az Obsidian hibásan hagyhatja a normál jegyzetet csak olvasható módban.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: '1. Opció: KIKAPCSOLVA (Alapértelmezett)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Művelet:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' A bővítmény SOHA nem kényszerít szerkesztési módot normál jegyzetekre.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Előny:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Teljes mértékben tiszteletben tartja a manuális változtatásokat. Ha egy normál jegyzetet csak olvashatóra állít, az úgy marad.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Hátrány:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' A "csak olvasható módban ragadt" hiba ugyanabban a lapban megmarad. Ebben a konkrét esetben manuálisan kell visszaváltania szerkesztési módba.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: '2. Opció: BEKAPCSOLVA',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Művelet:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' A bővítmény MINDEN csak olvasható módban talált normál jegyzetet visszakényszerít szerkesztési módba megnyitáskor.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Előny:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Kijavítja a "csak olvasható módban ragadt" hibát az ugyanabban a lapban történő navigációhoz.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Hátrány:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Felülírja a manuális választásokat. Ha egy normál jegyzetet csak olvashatóra állít, ez a bővítmény VISSZAKÉNYSZERÍTI szerkesztési módba, amikor újra megnyitja.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Értesítés Módváltáskor (BÉTA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Rövid értesítés megjelenítése, amikor a bővítmény aktívan megváltoztatja egy jegyzet nézeti módját megnyitáskor. Ez egy BÉTA funkció.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Hibakeresési Naplózás Engedélyezése',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Részletes naplók megjelenítése a fejlesztői konzolon. Teljes hatáshoz az Obsidian újraindítása vagy a bővítmény újratöltése szükséges.',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Ütközésészlelés engedélyezése",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "Az ütköző szabályok beállításainak elemzése (pl. ugyanaz az útvonal az alapértelmezett és a szigorú listákban). Az ütközések az alábbi listákban lesznek kiemelve.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Értesítés konfigurációs ütközésekről",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "Értesítés megjelenítése, ha konfigurációs ütközéseket észlel a beállítások megnyitásakor vagy módosításakor.",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' beállítva: ",
    NOTICE_MODE_DEFAULT: "Alapértelmezett Csak Olvasható.",
    NOTICE_MODE_STRICT: "Szigorú Csak Olvasható.",
    NOTICE_MODE_EDIT: "Szerkesztési Mód.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Érvénytelen szigorú regex minta: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Érvénytelen alapértelmezett regex minta: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Módváltási értesítések engedélyezve.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "{count} konfigurációs ütközés észlelve.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "A részletekért ellenőrizze a bővítmény beállításait.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "A részletekért ellenőrizze az alábbi listákat.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Alapértelmezett csak olvasható váltása az aktuális jegyzethez",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Szigorú csak olvasható váltása az aktuális jegyzethez",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Eltávolítva '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' az alapértelmezett csak olvasható listáról.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Hozzáadva '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' az alapértelmezett csak olvasható listához.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Eltávolítva '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' a szigorú csak olvasható listáról.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Hozzáadva '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' a szigorú csak olvasható listához.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Eltávolítva a szigorú listáról)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Eltávolítva az alapértelmezett listáról)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Bővítmény Nyelve",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Válassza ki ennek a bővítménynek a megjelenítési nyelvét. A változtatások alkalmazásához az Obsidian újraindítása vagy a bővítmény újratöltése szükséges.",
	SETTINGS_DIAGNOSTICS_TITLE: "Konfigurációs diagnosztika",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "Konfliktus: Ez a fájl ('{path}') a Szigorúan csak olvasható fájlok listájában is szerepel. SZIGORÚ lesz.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "Konfliktus: Ez a fájl ('{path}') az Alapértelmezett csak olvasható fájlok listájában is szerepel. Prioritás szerint SZIGORÚ lesz.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "Konfliktus: Ez a mappa ('{path}') a Szigorúan csak olvasható mappák listájában is szerepel. Minden benne lévő jegyzet SZIGORÚ lesz.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "Konfliktus: Ez a mappa ('{path}') az Alapértelmezett csak olvasható mappák listájában is szerepel. Minden benne lévő jegyzet prioritás szerint SZIGORÚ lesz.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "Felülbírálás: Ez a fájl ('{path}') egy Alapértelmezett listában van, de a Szigorú '{conflictingPath}' mappán belül található. SZIGORÚ lesz.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "Információ: Ez a fájl ('{path}') egy Szigorú listában van, és az Alapértelmezett '{conflictingPath}' mappán belül található. A fájlspecifikus Szigorú szabály élvez elsőbbséget.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "Redundáns: Ezt a fájlt ('{path}') már lefedi az Alapértelmezett csak olvasható mappa szabálya a '{conflictingPath}' számára.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "Redundáns: Ezt a fájlt ('{path}') már lefedi a Szigorúan csak olvasható mappa szabálya a '{conflictingPath}' számára.",

};
