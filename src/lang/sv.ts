// src/lang/sv.ts
// Swedish translations - Svenska

export default {
	// General
	LANG_AUTO_DETECT_OBSIDIAN: "Automatisk (Enligt Obsidian)",
	LANG_AUTO: "Automatisk (Enligt Obsidian)",

	// Settings Tab Titles
	SETTINGS_TAB_MAIN_TITLE: "Inställningar för Enhanced Read Mode Control",
	SETTINGS_SECTION_EXACT_PATHS: "Exakt Sökvägsmatchning",
	SETTINGS_SECTION_REGEX_BETA: "Regex Sökvägsmatchning (BETA)",
	SETTINGS_SECTION_BEHAVIOR: "Beteende",
	SETTINGS_SECTION_FEEDBACK_DEBUG: "Feedback & Felsökning",

	// Exact Path List Management
	SETTINGS_DEFAULT_FILES_EXACT_TITLE:
		"Standard Filer Endast för Läsning (Exakta Sökvägar)",
	SETTINGS_DEFAULT_FILES_EXACT_DESC:
		"Filer listade här öppnas som standard i läsläge. Använder exakt sökvägsmatchning.",
	SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER:
		"Ange filsökväg (t.ex. Anteckningar/MinFil.md)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE:
		"Standard Skrivskyddade Mappar (Exakta Sökvägar)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC:
		"Alla anteckningar i dessa mappar (och undermappar) öppnas i standard skrivskyddat läge. Använder exakt sökvägsmatchning.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER:
		"Ange mappsökväg (t.ex. Projekt/Aktiva)",

	SETTINGS_STRICT_FILES_EXACT_TITLE:
		"Strikta Filer Endast för Läsning (Exakta Sökvägar)",
	SETTINGS_STRICT_FILES_EXACT_DESC:
		"Filer listade här tvingas till läsläge. Använder exakt sökvägsmatchning.",
	SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER:
		"Ange filsökväg (t.ex. Mallar/Skyddad.md)",

	SETTINGS_STRICT_FOLDERS_EXACT_TITLE:
		"Strikta Mappar Endast för Läsning (Exakta Sökvägar)",
	SETTINGS_STRICT_FOLDERS_EXACT_DESC:
		"Alla anteckningar i dessa mappar (och undermappar) tvingas till strikt läsläge. Använder exakt sökvägsmatchning.",
	SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER:
		"Ange mappsökväg (t.ex. Arkiv/2023)",

	// Regex Path List Management
	SETTINGS_ENABLE_REGEX_TITLE: "Aktivera Regex-matchning (BETA)",
	SETTINGS_ENABLE_REGEX_DESC_PART1:
		"Aktivera matchning av filsökvägar mot reguljära uttryck. Detta är en BETA-funktion. ",
	SETTINGS_ENABLE_REGEX_DESC_PART2: "Använd med försiktighet: ",
	SETTINGS_ENABLE_REGEX_DESC_PART3:
		"ogiltiga regex-mönster kan orsaka fel eller oväntat beteende. Regex-matchning kontrolleras EFTER exakta mapp-/filmatchningar.",

	SETTINGS_DEFAULT_REGEX_TITLE: "Standard Endast för Läsning (Regex-mönster)",
	SETTINGS_DEFAULT_REGEX_DESC:
		"Filsökvägar som matchar något regex-mönster här öppnas i standardläsläge. Ett JavaScript regex-mönster per rad (utan snedstreck).",
	SETTINGS_DEFAULT_REGEX_PLACEHOLDER:
		"Ange regex-mönster (t.ex. ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)",

	SETTINGS_STRICT_REGEX_TITLE: "Strikt Endast för Läsning (Regex-mönster)",
	SETTINGS_STRICT_REGEX_DESC:
		"Filsökvägar som matchar något regex-mönster här tvingas till strikt läsläge. Ett JavaScript regex-mönster per rad (utan snedstreck).",
	SETTINGS_STRICT_REGEX_PLACEHOLDER: "Ange regex-mönster (t.ex. ^Mallar/.*)",

	// List Management UI Shared
	SETTINGS_LIST_UI_ADD_PATH_BUTTON: "Lägg till Sökväg",
	SETTINGS_LIST_UI_ADD_REGEX_BUTTON: "Lägg till Regex",
	SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: "Ta bort",
	SETTINGS_LIST_UI_EMPTY_FILES: "Inga filer tillagda ännu.",
	SETTINGS_LIST_UI_EMPTY_FOLDERS: "Inga mappar tillagda ännu.",
	SETTINGS_LIST_UI_EMPTY_REGEX: "Inga regex-mönster tillagda ännu.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH:
		"Sökvägen '{path}' finns redan i den här listan.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX:
		"Regex-mönstret '{path}' finns redan i den här listan.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX:
		"Ogiltig {itemType}: '{path}'. Kontrollera formatet eller förekomsten.",

	// Behavior Setting
	SETTINGS_FORCE_EDIT_UNMANAGED_TITLE:
		"Tvinga Redigeringsläge på Ohanterade Anteckningar",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO:
		"Välj hur insticksprogrammet hanterar anteckningar som INTE listas i inställningarna ovan.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: "Problem:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT:
		" När du navigerar från en insticksprogramstyrd anteckning (endast läsning) till en vanlig anteckning ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: "i samma flik",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END:
		", kan Obsidian felaktigt lämna den vanliga anteckningen fast i läsläge.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL:
		"Alternativ 1: INAKTIVERAD (Standard)",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: "Åtgärd:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT:
		" Insticksprogrammet tvingar ALDRIG redigeringsläge på vanliga anteckningar.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: "Fördel:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT:
		" Respekterar manuella ändringar fullt ut. Om du ställer in en vanlig anteckning på endast läsning, förblir den så.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: "Nackdel:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT:
		' Buggen "fast i läsläge" i samma flik kvarstår. Du måste manuellt växla tillbaka till redigeringsläge i det specifika fallet.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: "Alternativ 2: AKTIVERAD",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: "Åtgärd:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT:
		" Insticksprogrammet tvingar ALLA vanliga anteckningar som hittas i läsläge tillbaka till redigeringsläge vid öppning.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: "Fördel:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT:
		' Åtgärdar buggen "fast i läsläge" för navigering i samma flik.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: "Nackdel:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT:
		" Åsidosätter manuella val. Om du ställer in en vanlig anteckning på endast läsning, kommer detta insticksprogram att TVINGA tillbaka den till redigeringsläge när du öppnar den igen.",

	// Feedback & Debugging Section
	SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: "Meddela vid Lägesändring (BETA)",
	SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC:
		"Visa ett kort meddelande när insticksprogrammet aktivt ändrar en antecknings visningsläge vid öppning. Detta är en BETA-funktion.",
	SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: "Aktivera Felsökningsloggning",
	SETTINGS_ENABLE_DEBUG_LOGGING_DESC:
		"Visa detaljerade loggar i utvecklarkonsolen. Kräver omstart av Obsidian eller omladdning av insticksprogrammet för full effekt.",
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Aktivera Konfliktdetektering",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC:
		"Analysera inställningar för motstridiga regler (t.ex. samma sökväg i standard- och strikta listor). Konflikter kommer att markeras i listorna nedan.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Meddela vid Konfigurationskonflikter",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC:
		"Visa ett meddelande om konfigurationskonflikter upptäcks när inställningarna öppnas eller ändras.",

	// Notifications (from main.ts)
	NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' satt till ",
	NOTICE_MODE_DEFAULT: "Standard Endast för Läsning.",
	NOTICE_MODE_STRICT: "Strikt Endast för Läsning.",
	NOTICE_MODE_EDIT: "Redigeringsläge.",
	NOTICE_INVALID_STRICT_REGEX_PREFIX:
		"Enhanced Read Mode: Ogiltigt strikt regex-mönster: ",
	NOTICE_INVALID_DEFAULT_REGEX_PREFIX:
		"Enhanced Read Mode: Ogiltigt standard regex-mönster: ",
	NOTICE_NOTIFICATIONS_ENABLED: "Meddelanden om lägesändring aktiverade.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY:
		"{count} konfigurationskonflikt(er) upptäcktes.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS:
		"Kontrollera plugin-inställningarna för detaljer.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE:
		"Kontrollera listorna nedan för detaljer.",

	// Command Palette Command Names (from main.ts)
	COMMAND_TOGGLE_DEFAULT:
		"Enhanced Read Mode Control: Växla standard endast läsning för aktuell anteckning",
	COMMAND_TOGGLE_STRICT:
		"Enhanced Read Mode Control: Växla strikt endast läsning för aktuell anteckning",

	// Toggle Command Notices (from main.ts)
	NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Tog bort '",
	NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX:
		"' från standardlistan för endast läsning.",
	NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Lade till '",
	NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX:
		"' i standardlistan för endast läsning.",
	NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Tog bort '",
	NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX:
		"' från strikta listan för endast läsning.",
	NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Lade till '",
	NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' i strikta listan för endast läsning.",
	NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Togs bort från strikta listan)",
	NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Togs bort från standardlistan)",

	// Language Setting
	SETTINGS_PLUGIN_LANGUAGE_TITLE: "Insticksprogrammets Språk",
	SETTINGS_PLUGIN_LANGUAGE_DESC:
		"Välj visningsspråk för detta insticksprograms gränssnitt. Kräver omstart av Obsidian eller omladdning av insticksprogrammet för att tillämpa ändringar.",
	SETTINGS_DIAGNOSTICS_TITLE: "Konfigurationsdiagnostik",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT:
		"Konflikt: Denna fil ('{path}') finns också i listan Strikt Skrivskyddade Filer. Den kommer att vara STRIKT.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT:
		"Konflikt: Denna fil ('{path}') finns också i listan Standard Skrivskyddade Filer. Den kommer att vara STRIKT enligt prioritet.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT:
		"Konflikt: Denna mapp ('{path}') finns också i listan Strikt Skrivskyddade Mappar. Alla anteckningar i den kommer att vara STRIKTA.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT:
		"Konflikt: Denna mapp ('{path}') finns också i listan Standard Skrivskyddade Mappar. Alla anteckningar i den kommer att vara STRIKTA enligt prioritet.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER:
		"Åsidosättning: Denna fil ('{path}') finns i en Standardlista, men den är inuti den Strikta mappen '{conflictingPath}'. Den kommer att vara STRIKT.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER:
		"Info: Denna fil ('{path}') finns i en Strikt lista och inuti Standardmappen '{conflictingPath}'. Den filspecifika Strikta regeln har företräde.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT:
		"Redundant: Denna fil ('{path}') täcks redan av regeln Standard Skrivskyddad Mapp för '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT:
		"Redundant: Denna fil ('{path}') täcks redan av regeln Strikt Skrivskyddad Mapp för '{conflictingPath}'.",
};
