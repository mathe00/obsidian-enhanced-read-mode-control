// src/lang/sw.ts
// Swahili translations - Kiswahili

export default {
	// General
	LANG_AUTO_DETECT_OBSIDIAN: "Otomatiki (Kulingana na Obsidian)",
	LANG_AUTO: "Otomatiki (Kulingana na Obsidian)",

	// Settings Tab Titles
	SETTINGS_TAB_MAIN_TITLE: "Mipangilio ya Enhanced Read Mode Control",
	SETTINGS_SECTION_EXACT_PATHS: "Ulinganishaji Sahihi wa Njia",
	SETTINGS_SECTION_REGEX_BETA: "Ulinganishaji wa Njia kwa Regex (BETA)",
	SETTINGS_SECTION_BEHAVIOR: "Mwenendo",
	SETTINGS_SECTION_FEEDBACK_DEBUG: "Maoni na Utatuzi",

	// Exact Path List Management
	SETTINGS_DEFAULT_FILES_EXACT_TITLE:
		"Faili Chaguomsingi za Kusoma Pekee (Njia Sahihi)",
	SETTINGS_DEFAULT_FILES_EXACT_DESC:
		"Faili zilizoorodheshwa hapa zitafunguliwa katika hali ya kusoma pekee kwa chaguo-msingi. Hutumia ulinganishaji sahihi wa njia.",
	SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER:
		"Weka njia ya faili (k.m., Notes/FailiYangu.md)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE:
		"Folda Chaguomsingi za Kusoma Pekee (Njia Kamili)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC:
		"Madokezo yote ndani ya folda hizi (na folda ndogo) yatafunguliwa katika hali chaguomsingi ya kusoma pekee. Hutumia ulinganishaji kamili wa njia.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER:
		"Weka njia ya folda (k.m., Projects/Active)",

	SETTINGS_STRICT_FILES_EXACT_TITLE:
		"Faili Kali za Kusoma Pekee (Njia Sahihi)",
	SETTINGS_STRICT_FILES_EXACT_DESC:
		"Faili zilizoorodheshwa hapa zitalazimishwa kuwa katika hali ya kusoma pekee. Hutumia ulinganishaji sahihi wa njia.",
	SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER:
		"Weka njia ya faili (k.m., Templates/Iliyolindwa.md)",

	SETTINGS_STRICT_FOLDERS_EXACT_TITLE:
		"Folda Kali za Kusoma Pekee (Njia Sahihi)",
	SETTINGS_STRICT_FOLDERS_EXACT_DESC:
		"Madokezo yote ndani ya folda hizi (na folda ndogo) yatalazimishwa kuwa katika hali kali ya kusoma pekee. Hutumia ulinganishaji sahihi wa njia.",
	SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER:
		"Weka njia ya folda (k.m., Archive/2023)",

	// Regex Path List Management
	SETTINGS_ENABLE_REGEX_TITLE: "Washa Ulinganishaji wa Regex (BETA)",
	SETTINGS_ENABLE_REGEX_DESC_PART1:
		"Washa ulinganishaji wa njia za faili dhidi ya misemo ya kawaida. Hiki ni kipengele cha BETA. ",
	SETTINGS_ENABLE_REGEX_DESC_PART2: "Tumia kwa tahadhari: ",
	SETTINGS_ENABLE_REGEX_DESC_PART3:
		"mifumo batili ya regex inaweza kusababisha hitilafu au mwenendo usiotarajiwa. Ulinganishaji wa Regex huangaliwa BAADA ya ulinganishaji sahihi wa folda/faili.",

	SETTINGS_DEFAULT_REGEX_TITLE: "Kusoma Pekee Chaguomsingi (Mifumo ya Regex)",
	SETTINGS_DEFAULT_REGEX_DESC:
		"Njia za faili zinazolingana na mfumo wowote wa regex hapa zitafunguliwa katika hali chaguo-msingi ya kusoma pekee. Mfumo mmoja wa regex wa JavaScript kwa kila mstari (bila slaishi).",
	SETTINGS_DEFAULT_REGEX_PLACEHOLDER:
		"Weka mfumo wa regex (k.m., ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)",

	SETTINGS_STRICT_REGEX_TITLE: "Kusoma Pekee Kali (Mifumo ya Regex)",
	SETTINGS_STRICT_REGEX_DESC:
		"Njia za faili zinazolingana na mfumo wowote wa regex hapa zitalazimishwa kuwa katika hali kali ya kusoma pekee. Mfumo mmoja wa regex wa JavaScript kwa kila mstari (bila slaishi).",
	SETTINGS_STRICT_REGEX_PLACEHOLDER:
		"Weka mfumo wa regex (k.m., ^Templates/.*)",

	// List Management UI Shared
	SETTINGS_LIST_UI_ADD_PATH_BUTTON: "Ongeza Njia",
	SETTINGS_LIST_UI_ADD_REGEX_BUTTON: "Ongeza Regex",
	SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: "Ondoa",
	SETTINGS_LIST_UI_EMPTY_FILES: "Hakuna faili zilizoongezwa bado.",
	SETTINGS_LIST_UI_EMPTY_FOLDERS: "Hakuna folda zilizoongezwa bado.",
	SETTINGS_LIST_UI_EMPTY_REGEX: "Hakuna mifumo ya regex iliyoongezwa bado.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH:
		"Njia '{path}' tayari ipo kwenye orodha hii.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX:
		"Muundo wa Regex '{path}' tayari upo kwenye orodha hii.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX:
		"{itemType} batili: '{path}'. Tafadhali angalia muundo au uwepo.",

	// Behavior Setting
	SETTINGS_FORCE_EDIT_UNMANAGED_TITLE:
		"Lazimisha Hali ya Kuhariri kwenye Madokezo Yasiyodhibitiwa",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO:
		"Chagua jinsi programu-jalizi inavyoshughulikia madokezo ambayo HAYAKOorodheshwa katika mipangilio hapo juu.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: "Tatizo:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT:
		" Unapopitia kutoka kwa dokezo linalodhibitiwa na programu-jalizi (kusoma pekee) hadi dokezo la kawaida ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB:
		"katika kichupo kile kile",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END:
		", Obsidian inaweza kuacha dokezo la kawaida likiwa limekwama kimakosa katika hali ya kusoma pekee.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL:
		"Chaguo 1: IMEZIMWA (Chaguomsingi)",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: "Kitendo:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT:
		" Programu-jalizi KAMWE hailazimishi hali ya kuhariri kwenye madokezo ya kawaida.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: "Faida:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT:
		" Inaheshimu kikamilifu mabadiliko ya mikono. Ukiweka dokezo la kawaida kuwa la kusoma pekee, litabaki hivyo.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: "Hasara:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT:
		' Hitilafu ya "kukwama katika hali ya kusoma pekee" katika kichupo kile kile hubaki. Lazima urudishe mwenyewe kwa hali ya kuhariri katika kesi hiyo maalum.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: "Chaguo 2: IMEWASHWA",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: "Kitendo:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT:
		" Programu-jalizi inalazimisha DOKEZO LOLOTE la kawaida linalopatikana katika hali ya kusoma pekee kurudi kwenye hali ya kuhariri linapofunguliwa.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: "Faida:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT:
		' Hurekebisha hitilafu ya "kukwama katika hali ya kusoma pekee" kwa urambazaji katika kichupo kile kile.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: "Hasara:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT:
		" Hubatilisha chaguo za mikono. Ukiweka dokezo la kawaida kuwa la kusoma pekee, programu-jalizi hii ITALILAZIMISHA kurudi kwenye hali ya kuhariri unapofungua tena.",

	// Feedback & Debugging Section
	SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE:
		"Arifu kuhusu Mabadiliko ya Hali (BETA)",
	SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC:
		"Onyesha arifa fupi wakati programu-jalizi inabadilisha kikamilifu hali ya mtazamo wa dokezo linapofunguliwa. Hiki ni kipengele cha BETA.",
	SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: "Washa Uwekaji Kumbukumbu za Utatuzi",
	SETTINGS_ENABLE_DEBUG_LOGGING_DESC:
		"Onyesha kumbukumbu za kina katika dashibodi ya msanidi. Inahitaji Obsidian kuanzishwa upya au programu-jalizi kupakiwa upya ili iwe na athari kamili.",
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Washa Ugunduzi wa Mgongano",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC:
		"Changanua mipangilio ya sheria zinazogongana (k.m. njia sawa katika orodha chaguomsingi na za mkazo). Migongano itaangaziwa katika orodha zilizo hapa chini.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Arifu kuhusu Migongano ya Usanidi",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC:
		"Onyesha arifa ikiwa migongano ya usanidi itagunduliwa wakati mipangilio inapofunguliwa au kubadilishwa.",

	// Notifications (from main.ts)
	NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' imewekwa kuwa ",
	NOTICE_MODE_DEFAULT: "Kusoma Pekee Chaguomsingi.",
	NOTICE_MODE_STRICT: "Kusoma Pekee Kali.",
	NOTICE_MODE_EDIT: "Hali ya Kuhariri.",
	NOTICE_INVALID_STRICT_REGEX_PREFIX:
		"Enhanced Read Mode: Mfumo batili wa regex kali: ",
	NOTICE_INVALID_DEFAULT_REGEX_PREFIX:
		"Enhanced Read Mode: Mfumo batili wa regex chaguo-msingi: ",
	NOTICE_NOTIFICATIONS_ENABLED: "Arifa za mabadiliko ya hali zimewashwa.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY:
		"Migongano {count} ya usanidi imegunduliwa.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS:
		"Angalia mipangilio ya programu-jalizi kwa maelezo.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE:
		"Angalia orodha zilizo hapa chini kwa maelezo.",

	// Command Palette Command Names (from main.ts)
	COMMAND_TOGGLE_DEFAULT:
		"Enhanced Read Mode Control: Geuza kusoma pekee chaguo-msingi kwa dokezo la sasa",
	COMMAND_TOGGLE_STRICT:
		"Enhanced Read Mode Control: Geuza kusoma pekee kali kwa dokezo la sasa",

	// Toggle Command Notices (from main.ts)
	NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Imeondolewa '",
	NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX:
		"' kutoka kwa orodha chaguo-msingi ya kusoma pekee.",
	NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Imeongezwa '",
	NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX:
		"' kwenye orodha chaguo-msingi ya kusoma pekee.",
	NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Imeondolewa '",
	NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX:
		"' kutoka kwa orodha kali ya kusoma pekee.",
	NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Imeongezwa '",
	NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' kwenye orodha kali ya kusoma pekee.",
	NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX:
		" (Imeondolewa kutoka kwa orodha kali)",
	NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX:
		" (Imeondolewa kutoka kwa orodha chaguo-msingi)",

	// Language Setting
	SETTINGS_PLUGIN_LANGUAGE_TITLE: "Lugha ya Programu-jalizi",
	SETTINGS_PLUGIN_LANGUAGE_DESC:
		"Chagua lugha ya kuonyesha kwa kiolesura cha programu-jalizi hii. Inahitaji Obsidian kuanzishwa upya au programu-jalizi kupakiwa upya ili kutumia mabadiliko.",
	SETTINGS_DIAGNOSTICS_TITLE: "Utambuzi wa Usanidi",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT:
		"Mgongano: Faili hii ('{path}') pia iko kwenye orodha ya Faili za Kusoma Pekee za Mkazo. Itakuwa ya MKAZO.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT:
		"Mgongano: Faili hii ('{path}') pia iko kwenye orodha ya Faili za Kusoma Pekee Chaguomsingi. Itakuwa ya MKAZO kulingana na kipaumbele.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT:
		"Mgongano: Folda hii ('{path}') pia iko kwenye orodha ya Folda za Kusoma Pekee za Mkazo. Madokezo yote ndani yatakuwa ya MKAZO.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT:
		"Mgongano: Folda hii ('{path}') pia iko kwenye orodha ya Folda za Kusoma Pekee Chaguomsingi. Madokezo yote ndani yatakuwa ya MKAZO kulingana na kipaumbele.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER:
		"Batilisha: Faili hii ('{path}') iko kwenye orodha Chaguomsingi, lakini iko ndani ya folda ya Mkazo '{conflictingPath}'. Itakuwa ya MKAZO.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER:
		"Taarifa: Faili hii ('{path}') iko kwenye orodha ya Mkazo na ndani ya folda Chaguomsingi '{conflictingPath}'. Sheria ya Mkazo mahususi ya faili ndiyo inayotangulia.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT:
		"Ziada: Faili hii ('{path}') tayari imeshughulikiwa na sheria ya Folda ya Kusoma Pekee Chaguomsingi ya '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT:
		"Ziada: Faili hii ('{path}') tayari imeshughulikiwa na sheria ya Folda ya Kusoma Pekee ya Mkazo ya '{conflictingPath}'.",
};
