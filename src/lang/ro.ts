// src/lang/ro.ts
// Romanian translations - Română

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Automat (Conform Obsidian)',
    LANG_AUTO: 'Automat (Conform Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Setări Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Potrivire Exactă Cale',
    SETTINGS_SECTION_REGEX_BETA: 'Potrivire Cale Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Comportament',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Feedback & Depanare',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Fișiere Implicite Doar Citire (Căi Exacte)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Fișierele listate aici se vor deschide în mod implicit în modul doar citire. Utilizează potrivirea exactă a căii.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Introduceți calea fișierului (ex: Note/FișierulMeu.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Foldere Implicit Doar Citire (Căi Exacte)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Toate notele din aceste foldere (și subfoldere) se vor deschide în modul implicit doar citire. Utilizează potrivirea exactă a căii.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Introduceți calea folderului (ex: Proiecte/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Fișiere Stricte Doar Citire (Căi Exacte)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Fișierele listate aici vor fi forțate în modul doar citire. Utilizează potrivirea exactă a căii.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Introduceți calea fișierului (ex: Șabloane/Protejat.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Foldere Stricte Doar Citire (Căi Exacte)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Toate notele din aceste foldere (și subfoldere) vor fi forțate în modul strict doar citire. Utilizează potrivirea exactă a căii.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Introduceți calea folderului (ex: Arhivă/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Activare Potrivire Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Activare potrivire căi fișiere cu expresii regulate. Aceasta este o funcție BETA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Utilizați cu prudență: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'modelele regex invalide pot cauza erori sau comportament neașteptat. Potrivirea Regex este verificată DUPĂ potrivirile exacte de foldere/fișiere.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Implicite Doar Citire (Modele Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Căile fișierelor care se potrivesc cu orice model regex aici se vor deschide în modul implicit doar citire. Un model regex JavaScript pe linie (fără bare oblice).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Introduceți model regex (ex: ^Jurnal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Strict Doar Citire (Modele Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Căile fișierelor care se potrivesc cu orice model regex aici vor fi forțate în modul strict doar citire. Un model regex JavaScript pe linie (fără bare oblice).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Introduceți model regex (ex: ^Șabloane/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Adaugă Cale',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Adaugă Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Elimină',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Niciun fișier adăugat încă.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Niciun folder adăugat încă.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Niciun model regex adăugat încă.',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Forțează Modul Editare pe Notele Negestionate',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Alegeți cum gestionează pluginul notele care NU sunt listate în setările de mai sus.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Problemă:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' La navigarea de la o notă controlată de plugin (doar citire) la o notă normală ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'în aceeași filă',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian ar putea lăsa incorect nota normală blocată în modul doar citire.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Opțiunea 1: DEZACTIVAT (Implicit)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Acțiune:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Pluginul NU forțează NICIODATĂ modul editare pe notele normale.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Beneficiu:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Respectă pe deplin modificările manuale. Dacă setați o notă normală pe doar citire, așa va rămâne.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Dezavantaj:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Eroarea "blocat în modul doar citire" în aceeași filă persistă. Trebuie să comutați manual înapoi la modul editare în acel caz specific.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Opțiunea 2: ACTIVAT',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Acțiune:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Pluginul forțează ORICE notă normală găsită în modul doar citire înapoi în modul editare la deschidere.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Beneficiu:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Remediază eroarea "blocat în modul doar citire" pentru navigarea în aceeași filă.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Dezavantaj:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Suprascrie alegerile manuale. Dacă setați o notă normală pe doar citire, acest plugin o VA FORȚA înapoi în modul editare când o redeschideți.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Notificare la Schimbarea Modului (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Afișează o notificare scurtă când pluginul schimbă activ modul de vizualizare al unei note la deschidere. Aceasta este o funcție BETA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Activare Jurnal Depanare',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Afișează jurnale detaliate în consola dezvoltatorului. Necesită repornirea Obsidian sau reîncărcarea pluginului pentru efect complet.',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' setat la ",
    NOTICE_MODE_DEFAULT: "Doar Citire Implicit.",
    NOTICE_MODE_STRICT: "Strict Doar Citire.",
    NOTICE_MODE_EDIT: "Mod Editare.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Model regex strict invalid: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Model regex implicit invalid: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Notificările de schimbare a modului sunt activate.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Comută doar citire implicit pentru nota curentă",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Comută strict doar citire pentru nota curentă",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Eliminat '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' din lista implicită doar citire.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Adăugat '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' la lista implicită doar citire.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Eliminat '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' din lista strictă doar citire.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Adăugat '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' la lista strictă doar citire.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Eliminat din lista strictă)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Eliminat din lista implicită)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Limba Pluginului",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Alegeți limba de afișare pentru interfața acestui plugin. Necesită repornirea Obsidian sau reîncărcarea pluginului pentru a aplica modificările.",
};
