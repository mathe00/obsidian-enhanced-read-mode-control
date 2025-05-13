// src/lang/de.ts
// Deutsche Übersetzungen

export default {
    // Allgemein
    LANG_AUTO_DETECT_OBSIDIAN: 'Automatisch (Obsidian-Sprache)',
    LANG_AUTO: 'Automatisch (Obsidian-Sprache)',

    // Einstellungen Tab Titel
    SETTINGS_TAB_MAIN_TITLE: 'Enhanced Read Mode Control Einstellungen',
    SETTINGS_SECTION_EXACT_PATHS: 'Exakte Pfadübereinstimmung',
    SETTINGS_SECTION_REGEX_BETA: 'Regex-Pfadübereinstimmung (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Verhalten',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Feedback & Debugging',

    // Exakte Pfadlistenverwaltung
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Standard-Schreibgeschützte Dateien (Exakte Pfade)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Hier aufgelistete Dateien werden standardmäßig im schreibgeschützten Modus geöffnet. Verwendet exakte Pfadübereinstimmung.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Dateipfad eingeben (z.B. Notizen/MeineDatei.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Streng Schreibgeschützte Dateien (Exakte Pfade)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Hier aufgelistete Dateien werden in den streng schreibgeschützten Modus gezwungen. Verwendet exakte Pfadübereinstimmung.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Dateipfad eingeben (z.B. Vorlagen/Geschützt.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Streng Schreibgeschützte Ordner (Exakte Pfade)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Alle Notizen in diesen Ordnern (und Unterordnern) werden in den streng schreibgeschützten Modus gezwungen. Verwendet exakte Pfadübereinstimmung.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Ordnerpfad eingeben (z.B. Archiv/2023)',

    // Regex Pfadlistenverwaltung
    SETTINGS_ENABLE_REGEX_TITLE: 'Regex-Übereinstimmung aktivieren (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Aktiviere die Übereinstimmung von Dateipfaden mit regulären Ausdrücken. Dies ist eine BETA-Funktion. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Mit Vorsicht verwenden: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'Ungültige Regex-Muster können Fehler oder unerwartetes Verhalten verursachen. Regex-Übereinstimmung wird NACH exakten Ordner-/Dateiübereinstimmungen geprüft.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Standard-Schreibgeschützt (Regex-Muster)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Dateipfade, die mit einem Regex-Muster hier übereinstimmen, werden standardmäßig im schreibgeschützten Modus geöffnet. Ein JavaScript-Regex-Muster pro Zeile (ohne Schrägstriche).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Regex-Muster eingeben (z.B. ^Tagebuch/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Streng Schreibgeschützt (Regex-Muster)',
    SETTINGS_STRICT_REGEX_DESC: 'Dateipfade, die mit einem Regex-Muster hier übereinstimmen, werden in den streng schreibgeschützten Modus gezwungen. Ein JavaScript-Regex-Muster pro Zeile (ohne Schrägstriche).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Regex-Muster eingeben (z.B. ^Vorlagen/.*)',

    // Listenverwaltung UI Gemeinsam
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Pfad hinzufügen',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Regex hinzufügen',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Entfernen',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Noch keine Dateien hinzugefügt.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Noch keine Ordner hinzugefügt.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Noch keine Regex-Muster hinzugefügt.',

    // Verhaltenseinstellung
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Bearbeitungsmodus für nicht verwaltete Notizen erzwingen',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Wählen Sie, wie das Plugin Notizen behandelt, die NICHT in den obigen Einstellungen aufgeführt sind.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Problem:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Beim Navigieren von einer vom Plugin kontrollierten Notiz (schreibgeschützt) zu einer normalen Notiz ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'im selben Tab',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', könnte Obsidian die normale Notiz fälschlicherweise im schreibgeschützten Modus belassen.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Option 1: DEAKTIVIERT (Standard)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Aktion:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Das Plugin erzwingt NIEMALS den Bearbeitungsmodus für normale Notizen.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Vorteil:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Respektiert manuelle Änderungen vollständig. Wenn Sie eine normale Notiz auf schreibgeschützt setzen, bleibt sie so.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Nachteil:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Der Fehler "im schreibgeschützten Modus stecken geblieben" im selben Tab bleibt bestehen. Sie müssen in diesem speziellen Fall manuell in den Bearbeitungsmodus zurückwechseln.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Option 2: AKTIVIERT',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Aktion:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Das Plugin zwingt JEDE normale Notiz, die im schreibgeschützten Modus gefunden wird, beim Öffnen zurück in den Bearbeitungsmodus.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Vorteil:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Behebt den Fehler "im schreibgeschützten Modus stecken geblieben" bei der Navigation im selben Tab.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Nachteil:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Überschreibt manuelle Entscheidungen. Wenn Sie eine normale Notiz auf schreibgeschützt setzen, WIRD dieses Plugin sie beim erneuten Öffnen in den Bearbeitungsmodus zurückzwingen.',

    // Feedback & Debugging Sektion
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Bei Modusänderung benachrichtigen (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Zeigt eine kurze Benachrichtigung an, wenn das Plugin beim Öffnen aktiv den Ansichtsmodus einer Notiz ändert. Dies ist eine BETA-Funktion.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Debugging-Protokoll aktivieren',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Detaillierte Protokolle in der Entwicklerkonsole anzeigen. Erfordert einen Neustart von Obsidian oder ein Neuladen des Plugins, um vollständig wirksam zu werden.',

    // Benachrichtigungen (aus main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' gesetzt auf ",
    NOTICE_MODE_DEFAULT: "Standard-Schreibgeschützt.",
    NOTICE_MODE_STRICT: "Streng Schreibgeschützt.",
    NOTICE_MODE_EDIT: "Bearbeitungsmodus.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Ungültiges strenges Regex-Muster: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Ungültiges Standard-Regex-Muster: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Benachrichtigungen bei Modusänderung aktiviert.",

    // Befehlspaletten-Befehlsnamen (aus main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Standard-Schreibschutz für aktuelle Notiz umschalten",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Strengen Schreibschutz für aktuelle Notiz umschalten",

    // Umschaltbefehl-Benachrichtigungen (aus main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' von Standard-Schreibschutzliste entfernt.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' zu Standard-Schreibschutzliste hinzugefügt.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' von strenger Schreibschutzliste entfernt.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' zu strenger Schreibschutzliste hinzugefügt.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Von strenger Liste entfernt)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Von Standardliste entfernt)",

    // Spracheinstellung
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Plugin-Sprache",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Wählen Sie die Anzeigesprache für die Benutzeroberfläche dieses Plugins. Erfordert einen Neustart von Obsidian oder ein Neuladen des Plugins, um Änderungen anzuwenden.",
};
