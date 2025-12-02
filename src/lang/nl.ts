// src/lang/nl.ts
// Dutch translations - Nederlands

export default {
	// General
	LANG_AUTO_DETECT_OBSIDIAN: "Automatisch (Volgens Obsidian)",
	LANG_AUTO: "Automatisch (Volgens Obsidian)",

	// Settings Tab Titles
	SETTINGS_TAB_MAIN_TITLE: "Instellingen Enhanced Read Mode Control",
	SETTINGS_SECTION_EXACT_PATHS: "Exacte Padmatching",
	SETTINGS_SECTION_REGEX_BETA: "Regex Padmatching (BETA)",
	SETTINGS_SECTION_BEHAVIOR: "Gedrag",
	SETTINGS_SECTION_FEEDBACK_DEBUG: "Feedback & Foutopsporing",

	// Exact Path List Management
	SETTINGS_DEFAULT_FILES_EXACT_TITLE:
		"Standaard Alleen-lezen Bestanden (Exacte Paden)",
	SETTINGS_DEFAULT_FILES_EXACT_DESC:
		"Bestanden die hier worden vermeld, worden standaard in alleen-lezen modus geopend. Gebruikt exacte padmatching.",
	SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER:
		"Voer bestandspad in (bijv. Notities/MijnBestand.md)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE:
		"Standaard Alleen-lezen Mappen (Exacte Paden)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC:
		"Alle notities in deze mappen (en submappen) worden geopend in de standaard alleen-lezen modus. Gebruikt exacte padmatching.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER:
		"Voer mappad in (bijv. Projecten/Actief)",

	SETTINGS_STRICT_FILES_EXACT_TITLE:
		"Strikte Alleen-lezen Bestanden (Exacte Paden)",
	SETTINGS_STRICT_FILES_EXACT_DESC:
		"Bestanden die hier worden vermeld, worden geforceerd in alleen-lezen modus. Gebruikt exacte padmatching.",
	SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER:
		"Voer bestandspad in (bijv. Sjablonen/Beschermd.md)",

	SETTINGS_STRICT_FOLDERS_EXACT_TITLE:
		"Strikte Alleen-lezen Mappen (Exacte Paden)",
	SETTINGS_STRICT_FOLDERS_EXACT_DESC:
		"Alle notities in deze mappen (en submappen) worden geforceerd in strikte alleen-lezen modus. Gebruikt exacte padmatching.",
	SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER:
		"Voer mappad in (bijv. Archief/2023)",

	// Regex Path List Management
	SETTINGS_ENABLE_REGEX_TITLE: "Regex Matching Inschakelen (BETA)",
	SETTINGS_ENABLE_REGEX_DESC_PART1:
		"Schakel matching van bestandspaden met reguliere expressies in. Dit is een BETA-functie. ",
	SETTINGS_ENABLE_REGEX_DESC_PART2: "Gebruik met voorzichtigheid: ",
	SETTINGS_ENABLE_REGEX_DESC_PART3:
		"ongeldige regex-patronen kunnen fouten of onverwacht gedrag veroorzaken. Regex matching wordt gecontroleerd NA exacte map/bestand matches.",

	SETTINGS_DEFAULT_REGEX_TITLE: "Standaard Alleen-lezen (Regex Patronen)",
	SETTINGS_DEFAULT_REGEX_DESC:
		"Bestandspaden die overeenkomen met een regex-patroon hier, worden geopend in standaard alleen-lezen modus. Eén JavaScript regex-patroon per regel (zonder schuine strepen).",
	SETTINGS_DEFAULT_REGEX_PLACEHOLDER:
		"Voer regex-patroon in (bijv. ^Dagboek/\\d{4}-\\d{2}-\\d{2}\\.md$)",

	SETTINGS_STRICT_REGEX_TITLE: "Strikte Alleen-lezen (Regex Patronen)",
	SETTINGS_STRICT_REGEX_DESC:
		"Bestandspaden die overeenkomen met een regex-patroon hier, worden geforceerd in strikte alleen-lezen modus. Eén JavaScript regex-patroon per regel (zonder schuine strepen).",
	SETTINGS_STRICT_REGEX_PLACEHOLDER:
		"Voer regex-patroon in (bijv. ^Sjablonen/.*)",

	// List Management UI Shared
	SETTINGS_LIST_UI_ADD_PATH_BUTTON: "Pad Toevoegen",
	SETTINGS_LIST_UI_ADD_REGEX_BUTTON: "Regex Toevoegen",
	SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: "Verwijder",
	SETTINGS_LIST_UI_EMPTY_FILES: "Nog geen bestanden toegevoegd.",
	SETTINGS_LIST_UI_EMPTY_FOLDERS: "Nog geen mappen toegevoegd.",
	SETTINGS_LIST_UI_EMPTY_REGEX: "Nog geen regex-patronen toegevoegd.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH:
		"Pad '{path}' bestaat al in deze lijst.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX:
		"Regex-patroon '{path}' bestaat al in deze lijst.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX:
		"Ongeldige {itemType}: '{path}'. Controleer het formaat of het bestaan.",

	// Behavior Setting
	SETTINGS_FORCE_EDIT_UNMANAGED_TITLE:
		"Forceer Bewerkmodus op Onbeheerde Notities",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO:
		"Kies hoe de plugin omgaat met notities die NIET in de bovenstaande instellingen worden vermeld.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: "Probleem:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT:
		" Bij het navigeren van een door de plugin beheerde notitie (alleen-lezen) naar een normale notitie ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB:
		"in hetzelfde tabblad",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END:
		", kan Obsidian de normale notitie onjuist vastzetten in alleen-lezen modus.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL:
		"Optie 1: UITGESCHAKELD (Standaard)",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: "Actie:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT:
		" Plugin forceert NOOIT bewerkmodus op normale notities.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: "Voordeel:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT:
		" Respecteert handmatige wijzigingen volledig. Als u een normale notitie instelt op alleen-lezen, blijft deze zo.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: "Nadeel:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT:
		' De bug "vastzitten in alleen-lezen modus" in hetzelfde tabblad blijft bestaan. U moet in dat specifieke geval handmatig terugschakelen naar bewerkmodus.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: "Optie 2: INGESCHAKELD",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: "Actie:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT:
		" Plugin forceert ELKE normale notitie die in alleen-lezen modus wordt gevonden terug naar bewerkmodus bij het openen.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: "Voordeel:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT:
		' Repareert de bug "vastzitten in alleen-lezen modus" voor navigatie in hetzelfde tabblad.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: "Nadeel:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT:
		" Overschrijft handmatige keuzes. Als u een normale notitie instelt op alleen-lezen, zal deze plugin deze TERUGFORCEREN naar bewerkmodus wanneer u deze opnieuw opent.",

	// Feedback & Debugging Section
	SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: "Melding bij Moduswijziging (BETA)",
	SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC:
		"Toon een korte melding wanneer de plugin actief de weergavemodus van een notitie wijzigt bij het openen. Dit is een BETA-functie.",
	SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: "Foutopsporingslogboek Inschakelen",
	SETTINGS_ENABLE_DEBUG_LOGGING_DESC:
		"Toon gedetailleerde logboeken in de ontwikkelaarsconsole. Vereist herstart van Obsidian of herladen van de plugin voor volledig effect.",
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Conflictdetectie inschakelen",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC:
		"Analyseer instellingen op conflicterende regels (bijv. hetzelfde pad in standaard en strikte lijsten). Conflicten worden gemarkeerd in de onderstaande lijsten.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Melden bij configuratieconflicten",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC:
		"Melding weergeven als configuratieconflicten worden gedetecteerd bij het openen of wijzigen van instellingen.",

	// Notifications (from main.ts)
	NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' ingesteld op ",
	NOTICE_MODE_DEFAULT: "Standaard Alleen-lezen.",
	NOTICE_MODE_STRICT: "Strikte Alleen-lezen.",
	NOTICE_MODE_EDIT: "Bewerkmodus.",
	NOTICE_INVALID_STRICT_REGEX_PREFIX:
		"Enhanced Read Mode: Ongeldig strikt regex-patroon: ",
	NOTICE_INVALID_DEFAULT_REGEX_PREFIX:
		"Enhanced Read Mode: Ongeldig standaard regex-patroon: ",
	NOTICE_NOTIFICATIONS_ENABLED: "Meldingen voor moduswijziging ingeschakeld.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY:
		"{count} configuratieconflict(en) gedetecteerd.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS:
		"Controleer de plugin-instellingen voor details.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE:
		"Controleer de onderstaande lijsten voor details.",

	// Command Palette Command Names (from main.ts)
	COMMAND_TOGGLE_DEFAULT:
		"Enhanced Read Mode Control: Schakel standaard alleen-lezen voor huidige notitie",
	COMMAND_TOGGLE_STRICT:
		"Enhanced Read Mode Control: Schakel strikte alleen-lezen voor huidige notitie",

	// Toggle Command Notices (from main.ts)
	NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Verwijderd '",
	NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' uit standaard alleen-lezen lijst.",
	NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Toegevoegd '",
	NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' aan standaard alleen-lezen lijst.",
	NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Verwijderd '",
	NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' uit strikte alleen-lezen lijst.",
	NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Toegevoegd '",
	NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' aan strikte alleen-lezen lijst.",
	NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Verwijderd uit strikte lijst)",
	NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX:
		" (Verwijderd uit standaard lijst)",

	// Language Setting
	SETTINGS_PLUGIN_LANGUAGE_TITLE: "Taal van Plugin",
	SETTINGS_PLUGIN_LANGUAGE_DESC:
		"Kies de weergavetaal voor de interface van deze plugin. Vereist herstart van Obsidian of herladen van de plugin om wijzigingen toe te passen.",
	SETTINGS_DIAGNOSTICS_TITLE: "Configuratiediagnostiek",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT:
		"Conflict: Dit bestand ('{path}') staat ook in de lijst Strikt Alleen-lezen Bestanden. Het wordt STRIKT.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT:
		"Conflict: Dit bestand ('{path}') staat ook in de lijst Standaard Alleen-lezen Bestanden. Het wordt STRIKT volgens prioriteit.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT:
		"Conflict: Deze map ('{path}') staat ook in de lijst Strikt Alleen-lezen Mappen. Alle notities erin worden STRIKT.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT:
		"Conflict: Deze map ('{path}') staat ook in de lijst Standaard Alleen-lezen Mappen. Alle notities erin worden STRIKT volgens prioriteit.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER:
		"Overschrijven: Dit bestand ('{path}') staat in een Standaard lijst, maar bevindt zich in de Strikte map '{conflictingPath}'. Het wordt STRIKT.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER:
		"Info: Dit bestand ('{path}') staat in een Strikte lijst en in de Standaard map '{conflictingPath}'. De bestandsspecifieke Strikte regel heeft voorrang.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT:
		"Redundant: Dit bestand ('{path}') wordt al gedekt door de regel Standaard Alleen-lezen Map voor '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT:
		"Redundant: Dit bestand ('{path}') wordt al gedekt door de regel Strikt Alleen-lezen Map voor '{conflictingPath}'.",
};
