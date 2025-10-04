// src/lang/cs.ts
// Czech translations - Čeština

export default {
	// General
	LANG_AUTO_DETECT_OBSIDIAN: "Automaticky (Podle Obsidianu)",
	LANG_AUTO: "Automaticky (Podle Obsidianu)",

	// Settings Tab Titles
	SETTINGS_TAB_MAIN_TITLE: "Nastavení Enhanced Read Mode Control",
	SETTINGS_SECTION_EXACT_PATHS: "Přesná Shoda Cesty",
	SETTINGS_SECTION_REGEX_BETA: "Shoda Cesty Regex (BETA)",
	SETTINGS_SECTION_BEHAVIOR: "Chování",
	SETTINGS_SECTION_FEEDBACK_DEBUG: "Zpětná Vazba & Ladění",

	// Exact Path List Management
	SETTINGS_DEFAULT_FILES_EXACT_TITLE:
		"Výchozí Soubory Pouze pro Čtení (Přesné Cesty)",
	SETTINGS_DEFAULT_FILES_EXACT_DESC:
		"Soubory uvedené zde se ve výchozím nastavení otevřou v režimu pouze pro čtení. Používá přesnou shodu cesty.",
	SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER:
		"Zadejte cestu k souboru (např. Poznamky/MujSoubor.md)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE:
		"Výchozí složky pouze pro čtení (přesné cesty)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC:
		"Všechny poznámky v těchto složkách (a podsložkách) se otevřou ve výchozím režimu pouze pro čtení. Používá přesné porovnávání cest.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER:
		"Zadejte cestu ke složce (např. Projekty/Aktivni)",

	SETTINGS_STRICT_FILES_EXACT_TITLE:
		"Přísné Soubory Pouze pro Čtení (Přesné Cesty)",
	SETTINGS_STRICT_FILES_EXACT_DESC:
		"Soubory uvedené zde budou nuceně v režimu pouze pro čtení. Používá přesnou shodu cesty.",
	SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER:
		"Zadejte cestu k souboru (např. Sablony/Chraneny.md)",

	SETTINGS_STRICT_FOLDERS_EXACT_TITLE:
		"Přísné Složky Pouze pro Čtení (Přesné Cesty)",
	SETTINGS_STRICT_FOLDERS_EXACT_DESC:
		"Všechny poznámky v těchto složkách (a podsložkách) budou nuceně v přísném režimu pouze pro čtení. Používá přesnou shodu cesty.",
	SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER:
		"Zadejte cestu ke složce (např. Archiv/2023)",

	// Regex Path List Management
	SETTINGS_ENABLE_REGEX_TITLE: "Povolit Shodu Regex (BETA)",
	SETTINGS_ENABLE_REGEX_DESC_PART1:
		"Povolit shodu cest k souborům s regulárními výrazy. Toto je BETA funkce. ",
	SETTINGS_ENABLE_REGEX_DESC_PART2: "Používejte opatrně: ",
	SETTINGS_ENABLE_REGEX_DESC_PART3:
		"neplatné regex vzory mohou způsobit chyby nebo neočekávané chování. Shoda Regex se kontroluje PO přesných shodách složek/souborů.",

	SETTINGS_DEFAULT_REGEX_TITLE: "Výchozí Pouze pro Čtení (Regex Vzory)",
	SETTINGS_DEFAULT_REGEX_DESC:
		"Cesty k souborům odpovídající jakémukoli regex vzoru zde se otevřou ve výchozím režimu pouze pro čtení. Jeden JavaScript regex vzor na řádek (bez lomítek).",
	SETTINGS_DEFAULT_REGEX_PLACEHOLDER:
		"Zadejte regex vzor (např. ^Deník/\\d{4}-\\d{2}-\\d{2}\\.md$)",

	SETTINGS_STRICT_REGEX_TITLE: "Přísné Pouze pro Čtení (Regex Vzory)",
	SETTINGS_STRICT_REGEX_DESC:
		"Cesty k souborům odpovídající jakémukoli regex vzoru zde budou nuceně v přísném režimu pouze pro čtení. Jeden JavaScript regex vzor na řádek (bez lomítek).",
	SETTINGS_STRICT_REGEX_PLACEHOLDER: "Zadejte regex vzor (např. ^Sablony/.*)",

	// List Management UI Shared
	SETTINGS_LIST_UI_ADD_PATH_BUTTON: "Přidat Cestu",
	SETTINGS_LIST_UI_ADD_REGEX_BUTTON: "Přidat Regex",
	SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: "Odstranit",
	SETTINGS_LIST_UI_EMPTY_FILES: "Zatím nebyly přidány žádné soubory.",
	SETTINGS_LIST_UI_EMPTY_FOLDERS: "Zatím nebyly přidány žádné složky.",
	SETTINGS_LIST_UI_EMPTY_REGEX: "Zatím nebyly přidány žádné regex vzory.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH:
		"Cesta '{path}' již v tomto seznamu existuje.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX:
		"Vzor Regex '{path}' již v tomto seznamu existuje.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX:
		"Neplatný {itemType}: '{path}'. Zkontrolujte prosím formát nebo existenci.",

	// Behavior Setting
	SETTINGS_FORCE_EDIT_UNMANAGED_TITLE:
		"Vynutit Režim Úprav u Nespravovaných Poznámek",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO:
		"Zvolte, jak plugin zachází s poznámkami, které NEJSOU uvedeny ve výše uvedených nastaveních.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: "Problém:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT:
		" Při navigaci z poznámky řízené pluginem (pouze pro čtení) na normální poznámku ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: "ve stejné kartě",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END:
		", Obsidian může nesprávně nechat normální poznámku zaseknutou v režimu pouze pro čtení.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL:
		"Možnost 1: ZAKÁZÁNO (Výchozí)",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: "Akce:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT:
		" Plugin NIKDY nevynucuje režim úprav u normálních poznámek.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: "Výhoda:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT:
		" Plně respektuje manuální změny. Pokud nastavíte normální poznámku na pouze pro čtení, zůstane tak.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: "Nevýhoda:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT:
		' Chyba "zaseknutí v režimu pouze pro čtení" ve stejné kartě přetrvává. V takovém případě musíte manuálně přepnout zpět do režimu úprav.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: "Možnost 2: POVOLENO",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: "Akce:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT:
		" Plugin vynutí JAKOUKOLI normální poznámku nalezenou v režimu pouze pro čtení zpět do režimu úprav při otevření.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: "Výhoda:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT:
		' Opravuje chybu "zaseknutí v režimu pouze pro čtení" pro navigaci ve stejné kartě.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: "Nevýhoda:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT:
		" Přepisuje manuální volby. Pokud nastavíte normální poznámku na pouze pro čtení, tento plugin ji VYNUTÍ zpět do režimu úprav při jejím opětovném otevření.",

	// Feedback & Debugging Section
	SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: "Upozornit na Změnu Režimu (BETA)",
	SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC:
		"Zobrazit krátké upozornění, když plugin aktivně změní režim zobrazení poznámky při otevření. Toto je BETA funkce.",
	SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: "Povolit Ladicí Protokolování",
	SETTINGS_ENABLE_DEBUG_LOGGING_DESC:
		"Zobrazit podrobné protokoly v konzoli pro vývojáře. Pro plný účinek vyžaduje restart Obsidianu nebo znovunačtení pluginu.",
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Povolit detekci konfliktů",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC:
		"Analyzovat nastavení pro konfliktní pravidla (např. stejná cesta ve výchozím a striktním seznamu). Konflikty budou zvýrazněny v níže uvedených seznamech.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Upozornit na konflikty konfigurace",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC:
		"Zobrazit upozornění, pokud jsou při otevření nebo změně nastavení zjištěny konflikty konfigurace.",

	// Notifications (from main.ts)
	NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' nastaveno na ",
	NOTICE_MODE_DEFAULT: "Výchozí Pouze pro Čtení.",
	NOTICE_MODE_STRICT: "Přísné Pouze pro Čtení.",
	NOTICE_MODE_EDIT: "Režim Úprav.",
	NOTICE_INVALID_STRICT_REGEX_PREFIX:
		"Enhanced Read Mode: Neplatný přísný regex vzor: ",
	NOTICE_INVALID_DEFAULT_REGEX_PREFIX:
		"Enhanced Read Mode: Neplatný výchozí regex vzor: ",
	NOTICE_NOTIFICATIONS_ENABLED: "Upozornění na změnu režimu povolena.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY:
		"Bylo zjištěno {count} konflikt(ů) konfigurace.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS:
		"Podrobnosti naleznete v nastavení pluginu.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE:
		"Podrobnosti naleznete v níže uvedených seznamech.",

	// Command Palette Command Names (from main.ts)
	COMMAND_TOGGLE_DEFAULT:
		"Enhanced Read Mode Control: Přepnout výchozí pouze pro čtení pro aktuální poznámku",
	COMMAND_TOGGLE_STRICT:
		"Enhanced Read Mode Control: Přepnout přísné pouze pro čtení pro aktuální poznámku",

	// Toggle Command Notices (from main.ts)
	NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Odstraněno '",
	NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX:
		"' z výchozího seznamu pouze pro čtení.",
	NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Přidáno '",
	NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX:
		"' do výchozího seznamu pouze pro čtení.",
	NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Odstraněno '",
	NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX:
		"' z přísného seznamu pouze pro čtení.",
	NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Přidáno '",
	NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' do přísného seznamu pouze pro čtení.",
	NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Odstraněno z přísného seznamu)",
	NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX:
		" (Odstraněno z výchozího seznamu)",

	// Language Setting
	SETTINGS_PLUGIN_LANGUAGE_TITLE: "Jazyk Pluginu",
	SETTINGS_PLUGIN_LANGUAGE_DESC:
		"Zvolte jazyk zobrazení pro rozhraní tohoto pluginu. Pro uplatnění změn vyžaduje restart Obsidianu nebo znovunačtení pluginu.",
	SETTINGS_DIAGNOSTICS_TITLE: "Diagnostika konfigurace",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT:
		"Konflikt: Tento soubor ('{path}') je také v seznamu Soubory pouze pro čtení (striktní). Bude STRIKTNÍ.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT:
		"Konflikt: Tento soubor ('{path}') je také v seznamu Soubory pouze pro čtení (výchozí). Bude STRIKTNÍ podle priority.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT:
		"Konflikt: Tato složka ('{path}') je také v seznamu Složky pouze pro čtení (striktní). Všechny poznámky v ní budou STRIKTNÍ.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT:
		"Konflikt: Tato složka ('{path}') je také v seznamu Složky pouze pro čtení (výchozí). Všechny poznámky v ní budou STRIKTNÍ podle priority.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER:
		"Přepsání: Tento soubor ('{path}') je ve výchozím seznamu, ale je uvnitř striktní složky '{conflictingPath}'. Bude STRIKTNÍ.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER:
		"Info: Tento soubor ('{path}') je ve striktním seznamu a uvnitř výchozí složky '{conflictingPath}'. Pravidlo pro striktní soubor má přednost.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT:
		"Redundantní: Tento soubor ('{path}') je již pokryt pravidlem pro výchozí složku pouze pro čtení pro '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT:
		"Redundantní: Tento soubor ('{path}') je již pokryt pravidlem pro striktní složku pouze pro čtení pro '{conflictingPath}'.",
};
