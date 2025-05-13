// src/lang/pl.ts
// Polish translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Automatyczny (Zgodnie z Obsidian)',
    LANG_AUTO: 'Automatyczny (Zgodnie z Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Ustawienia Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Dokładne Dopasowanie Ścieżki',
    SETTINGS_SECTION_REGEX_BETA: 'Dopasowanie Ścieżki Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Zachowanie',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Informacje Zwrotne i Debugowanie',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Domyślne Pliki Tylko do Odczytu (Dokładne Ścieżki)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Pliki wymienione tutaj będą domyślnie otwierane w trybie tylko do odczytu. Używa dokładnego dopasowania ścieżki.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Wprowadź ścieżkę pliku (np. Notatki/MójPlik.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Ścisłe Pliki Tylko do Odczytu (Dokładne Ścieżki)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Pliki wymienione tutaj będą wymuszane w tryb tylko do odczytu. Używa dokładnego dopasowania ścieżki.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Wprowadź ścieżkę pliku (np. Szablony/Chroniony.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Ścisłe Foldery Tylko do Odczytu (Dokładne Ścieżki)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Wszystkie notatki w tych folderach (i podfolderach) będą wymuszane w ścisły tryb tylko do odczytu. Używa dokładnego dopasowania ścieżki.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Wprowadź ścieżkę folderu (np. Archiwum/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Włącz Dopasowanie Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Włącz dopasowywanie ścieżek plików do wyrażeń regularnych. To jest funkcja BETA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Używaj ostrożnie: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'nieprawidłowe wzorce regex mogą powodować błędy lub nieoczekiwane zachowanie. Dopasowanie regex jest sprawdzane PO dokładnych dopasowaniach folderów/plików.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Domyślne Tylko do Odczytu (Wzorce Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Ścieżki plików pasujące do dowolnego wzorca regex tutaj będą otwierane w domyślnym trybie tylko do odczytu. Jeden wzorzec regex JavaScript na linię (bez ukośników).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Wprowadź wzorzec regex (np. ^Dziennik/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Ścisłe Tylko do Odczytu (Wzorce Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Ścieżki plików pasujące do dowolnego wzorca regex tutaj będą wymuszane w ścisły tryb tylko do odczytu. Jeden wzorzec regex JavaScript na linię (bez ukośników).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Wprowadź wzorzec regex (np. ^Szablony/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Dodaj Ścieżkę',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Dodaj Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Usuń',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Nie dodano jeszcze żadnych plików.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Nie dodano jeszcze żadnych folderów.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Nie dodano jeszcze żadnych wzorców regex.',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Wymuś Tryb Edycji na Niezarządzanych Notatkach',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Wybierz, jak wtyczka ma obsługiwać notatki NIE wymienione w powyższych ustawieniach.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Problem:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Podczas nawigacji z notatki kontrolowanej przez wtyczkę (tylko do odczytu) do normalnej notatki ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'w tej samej karcie',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian może niepoprawnie pozostawić normalną notatkę w trybie tylko do odczytu.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Opcja 1: WYŁĄCZONE (Domyślnie)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Działanie:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Wtyczka NIGDY nie wymusza trybu edycji na normalnych notatkach.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Korzyść:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' W pełni respektuje ręczne zmiany. Jeśli ustawisz normalną notatkę jako tylko do odczytu, tak pozostanie.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Wada:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Błąd "zablokowania w trybie tylko do odczytu" w tej samej karcie pozostaje. Musisz ręcznie przełączyć z powrotem do trybu edycji w tym konkretnym przypadku.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Opcja 2: WŁĄCZONE',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Działanie:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Wtyczka wymusza na KAŻDEJ normalnej notatce znalezionej w trybie tylko do odczytu powrót do trybu edycji przy otwarciu.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Korzyść:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Naprawia błąd "zablokowania w trybie tylko do odczytu" dla nawigacji w tej samej karcie.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Wada:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Zastępuje ręczne wybory. Jeśli ustawisz normalną notatkę jako tylko do odczytu, ta wtyczka WYMUSI jej powrót do trybu edycji przy ponownym otwarciu.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Powiadamiaj o Zmianie Trybu (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Pokaż krótkie powiadomienie, gdy wtyczka aktywnie zmienia tryb widoku notatki przy otwarciu. To jest funkcja BETA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Włącz Logowanie Debugowe',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Pokaż szczegółowe logi w konsoli deweloperskiej. Wymaga ponownego uruchomienia Obsidian lub przeładowania wtyczki, aby w pełni zadziałało.',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' ustawiono na ",
    NOTICE_MODE_DEFAULT: "Domyślne Tylko do Odczytu.",
    NOTICE_MODE_STRICT: "Ścisłe Tylko do Odczytu.",
    NOTICE_MODE_EDIT: "Tryb Edycji.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Nieprawidłowy ścisły wzorzec regex: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Nieprawidłowy domyślny wzorzec regex: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Powiadomienia o zmianie trybu włączone.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Przełącz domyślne tylko do odczytu dla bieżącej notatki",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Przełącz ścisłe tylko do odczytu dla bieżącej notatki",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Usunięto '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' z listy domyślnych tylko do odczytu.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Dodano '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' do listy domyślnych tylko do odczytu.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Usunięto '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' z listy ścisłych tylko do odczytu.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Dodano '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' do listy ścisłych tylko do odczytu.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Usunięto z listy ścisłych)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Usunięto z listy domyślnych)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Język Wtyczki",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Wybierz język wyświetlania interfejsu tej wtyczki. Wymaga ponownego uruchomienia Obsidian lub przeładowania wtyczki, aby zastosować zmiany.",
};
