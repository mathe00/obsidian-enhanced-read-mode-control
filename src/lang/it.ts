// src/lang/it.ts
// Italian translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Automatico (Corrisponde alla lingua di Obsidian)',
    LANG_AUTO: 'Automatico (Corrisponde alla lingua di Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Impostazioni Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Corrispondenza Esatta Percorso',
    SETTINGS_SECTION_REGEX_BETA: 'Corrispondenza Percorso Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Comportamento',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Feedback e Debug',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'File Sola Lettura Predefiniti (Percorsi Esatti)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'I file elencati qui si apriranno in modalità sola lettura per impostazione predefinita. Utilizza la corrispondenza esatta del percorso.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Inserisci percorso file (es. Note/MioFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Cartelle di Sola Lettura Predefinite (Percorsi Esatti)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Tutte le note all'interno di queste cartelle (e sottocartelle) si apriranno in modalità di sola lettura predefinita. Utilizza la corrispondenza esatta del percorso.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Inserisci il percorso della cartella (es. Progetti/Attivi)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'File Sola Lettura Rigorosi (Percorsi Esatti)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'I file elencati qui saranno forzati in modalità sola lettura. Utilizza la corrispondenza esatta del percorso.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Inserisci percorso file (es. Modelli/Protetto.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Cartelle Sola Lettura Rigorose (Percorsi Esatti)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Tutte le note all\'interno di queste cartelle (e sottocartelle) saranno forzate in modalità sola lettura rigorosa. Utilizza la corrispondenza esatta del percorso.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Inserisci percorso cartella (es. Archivio/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Abilita Corrispondenza Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Abilita la corrispondenza dei percorsi file con espressioni regolari. Questa è una funzionalità BETA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Usare con cautela: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'pattern regex invalidi possono causare errori o comportamenti imprevisti. La corrispondenza Regex viene verificata DOPO le corrispondenze esatte di cartelle/file.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Sola Lettura Predefinita (Pattern Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'I percorsi file che corrispondono a qualsiasi pattern regex qui si apriranno in modalità sola lettura predefinita. Un pattern regex JavaScript per riga (senza barre).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Inserisci pattern regex (es. ^Diario/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Sola Lettura Rigorosa (Pattern Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'I percorsi file che corrispondono a qualsiasi pattern regex qui saranno forzati in modalità sola lettura rigorosa. Un pattern regex JavaScript per riga (senza barre).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Inserisci pattern regex (es. ^Modelli/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Aggiungi Percorso',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Aggiungi Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Rimuovi',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Nessun file aggiunto ancora.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Nessuna cartella aggiunta ancora.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Nessun pattern regex aggiunto ancora.',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "Il percorso '{path}' esiste già in questo elenco.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "Il pattern Regex '{path}' esiste già in questo elenco.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "{itemType} non valido: '{path}'. Controllare il formato o l'esistenza.",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Forza Modalità Modifica su Note Non Gestite',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Scegli come il plugin gestisce le note NON elencate nelle impostazioni sopra.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Problema:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Quando si naviga da una nota controllata dal plugin (sola lettura) a una nota normale ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'nella stessa scheda',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian potrebbe lasciare la nota normale erroneamente bloccata in modalità sola lettura.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Opzione 1: DISABILITATO (Predefinito)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Azione:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Il plugin NON forza MAI la modalità modifica sulle note normali.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Vantaggio:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Rispetta pienamente le modifiche manuali. Se imposti una nota normale in sola lettura, rimane tale.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Svantaggio:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Il bug "bloccato in sola lettura" nella stessa scheda persiste. Devi tornare manualmente alla modalità modifica in quel caso specifico.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Opzione 2: ABILITATO',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Azione:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Il plugin forza QUALSIASI nota normale trovata in modalità sola lettura a tornare in modalità modifica all\'apertura.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Vantaggio:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Risolve il bug "bloccato in sola lettura" per la navigazione nella stessa scheda.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Svantaggio:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Sovrascrive le scelte manuali. Se imposti una nota normale in sola lettura, questo plugin LA FORZERÀ a tornare in modalità modifica quando la riapri.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Notifica su Cambio Modalità (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Mostra una breve notifica quando il plugin cambia attivamente la modalità di visualizzazione di una nota all\'apertura. Questa è una funzionalità BETA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Abilita Log di Debug',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Mostra log dettagliati nella console sviluppatore. Richiede il riavvio di Obsidian o il ricaricamento del plugin per avere pieno effetto.',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Abilita Rilevamento Conflitti",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "Analizza le impostazioni per regole in conflitto (ad es. stesso percorso negli elenchi predefinito e rigoroso). I conflitti verranno evidenziati negli elenchi sottostanti.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Notifica Conflitti di Configurazione",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "Mostra una notifica se vengono rilevati conflitti di configurazione all'apertura o alla modifica delle impostazioni.",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' impostato su ",
    NOTICE_MODE_DEFAULT: "Sola Lettura Predefinita.",
    NOTICE_MODE_STRICT: "Sola Lettura Rigorosa.",
    NOTICE_MODE_EDIT: "Modalità Modifica.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Pattern regex rigoroso non valido: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Pattern regex predefinito non valido: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Notifiche cambio modalità abilitate.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "Rilevati {count} conflitti di configurazione.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "Controlla le impostazioni del plugin per i dettagli.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "Controlla gli elenchi sottostanti per i dettagli.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Alterna sola lettura predefinita per nota corrente",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Alterna sola lettura rigorosa per nota corrente",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Rimosso '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' dalla lista sola lettura predefinita.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Aggiunto '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' alla lista sola lettura predefinita.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Rimosso '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' dalla lista sola lettura rigorosa.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Aggiunto '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' alla lista sola lettura rigorosa.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Rimosso dalla lista rigorosa)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Rimosso dalla lista predefinita)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Lingua Plugin",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Scegli la lingua di visualizzazione per l'interfaccia di questo plugin. Richiede il riavvio di Obsidian o il ricaricamento del plugin per applicare le modifiche.",
	SETTINGS_DIAGNOSTICS_TITLE: "Diagnostica Configurazione",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "Conflitto: Questo file ('{path}') è anche nell'elenco File di Sola Lettura Rigorosa. Sarà RIGOROSO.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "Conflitto: Questo file ('{path}') è anche nell'elenco File di Sola Lettura Predefiniti. Sarà RIGOROSO come da priorità.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "Conflitto: Questa cartella ('{path}') è anche nell'elenco Cartelle di Sola Lettura Rigorosa. Tutte le note all'interno saranno RIGOROSE.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "Conflitto: Questa cartella ('{path}') è anche nell'elenco Cartelle di Sola Lettura Predefinite. Tutte le note all'interno saranno RIGOROSE come da priorità.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "Sovrascrittura: Questo file ('{path}') è in un elenco Predefinito, ma si trova all'interno della cartella Rigorosa '{conflictingPath}'. Sarà RIGOROSO.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "Info: Questo file ('{path}') è in un elenco Rigoroso e all'interno della cartella Predefinita '{conflictingPath}'. La regola Rigorosa specifica del file ha la precedenza.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "Ridondante: Questo file ('{path}') è già coperto dalla regola Cartella di Sola Lettura Predefinita per '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "Ridondante: Questo file ('{path}') è già coperto dalla regola Cartella di Sola Lettura Rigorosa per '{conflictingPath}'.",

};
