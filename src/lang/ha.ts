// src/lang/ha.ts
// Hausa translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Kai tsaye (Kamar yadda Obsidian yake)',
    LANG_AUTO: 'Kai tsaye (Kamar yadda Obsidian yake)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Saitunan Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Daidaitaccen Matsayin Hanyar',
    SETTINGS_SECTION_REGEX_BETA: 'Matsayin Hanyar Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Hali',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Ra\'ayi & Gyaran Kura-kurai',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Fayilolin Karatu Kadai na Asali (Daidaitattun Hanyoyi)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Fayilolin da aka jera a nan za su buɗe a yanayin karatu kaɗai ta asali. Yana amfani da daidaitaccen matsayin hanyar.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Shigar da hanyar fayil (misali: Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Manyan fayiloli na Karatu-Kadai na Asali (Tabbatattun Hanyoyi)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Duk rubutattun bayanai a cikin waɗannan manyan fayiloli (da ƙananan fayiloli) za su buɗe a yanayin karatu-kadai na asali. Yana amfani da daidaitaccen hanyar daidaitawa.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Shigar da hanyar babban fayil (misali, Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Fayilolin Karatu Kadai Masu Tsauri (Daidaitattun Hanyoyi)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Fayilolin da aka jera a nan za a tilasta su zuwa yanayin karatu kaɗai. Yana amfani da daidaitaccen matsayin hanyar.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Shigar da hanyar fayil (misali: Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Manyan Fayiloli na Karatu Kadai Masu Tsauri (Daidaitattun Hanyoyi)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Duk rubuce-rubuce a cikin waɗannan manyan fayiloli (da ƙananan fayiloli) za a tilasta su zuwa yanayin karatu kaɗai mai tsauri. Yana amfani da daidaitaccen matsayin hanyar.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Shigar da hanyar babban fayil (misali: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Kunna Matsayin Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Kunna matsayin hanyoyin fayil daidai da regular expressions. Wannan fasalin BETA ne. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Yi amfani da hankali: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'samfuran regex marasa inganci na iya haifar da kurakurai ko halayen da ba a zata ba. Ana duba matsayin Regex BAYAN daidaitattun matsayin manyan fayiloli/fayiloli.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Karatu Kadai na Asali (Samfuran Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Hanyoyin fayil da suka dace da kowane samfurin regex a nan za su buɗe a yanayin karatu kaɗai na asali. Samfurin regex na JavaScript ɗaya a kowane layi (ba tare da slash ba).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Shigar da samfurin regex (misali: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Karatu Kadai Mai Tsauri (Samfuran Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Hanyoyin fayil da suka dace da kowane samfurin regex a nan za a tilasta su zuwa yanayin karatu kaɗai mai tsauri. Samfurin regex na JavaScript ɗaya a kowane layi (ba tare da slash ba).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Shigar da samfurin regex (misali: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Ƙara Hanyar',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Ƙara Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Cire',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Ba a ƙara fayiloli ba tukuna.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Ba a ƙara manyan fayiloli ba tukuna.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Ba a ƙara samfuran regex ba tukuna.',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Tilasta Yanayin Gyara akan Rubuce-rubucen da Ba a Sarrafa Ba',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Zaɓi yadda plugin ke sarrafa rubuce-rubucen da BA a jera su a cikin saitunan da ke sama ba.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Matsala:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Lokacin da ake kewayawa daga rubutun da plugin ke sarrafawa (karatu kaɗai) zuwa rubutu na yau da kullun ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'a cikin shafin guda',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian na iya barin rubutun na yau da kullun ya makale a yanayin karatu kaɗai ba daidai ba.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Zaɓi na 1: KASHE (Asali)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Aiki:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Plugin BA YA taɓa tilasta yanayin gyara akan rubuce-rubuce na yau da kullun.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Amfani:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Yana mutunta canje-canjen hannu sosai. Idan ka saita rubutu na yau da kullun zuwa karatu kaɗai, zai kasance haka.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Rashin Amfani:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Kuskuren "makale a yanayin karatu kaɗai" a cikin shafin guda ya rage. Dole ne ka koma yanayin gyara da hannu a wannan takamaiman yanayin.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Zaɓi na 2: KUNNA',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Aiki:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Plugin yana tilasta KOWANE rubutu na yau da kullun da aka samu a yanayin karatu kaɗai ya koma yanayin gyara lokacin buɗewa.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Amfani:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Yana gyara kuskuren "makale a yanayin karatu kaɗai" don kewayawa a cikin shafin guda.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Rashin Amfani:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Yana soke zaɓuɓɓukan hannu. Idan ka saita rubutu na yau da kullun zuwa karatu kaɗai, wannan plugin zai TILASTA shi ya koma yanayin gyara lokacin da ka sake buɗe shi.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Sanarwa akan Canjin Yanayi (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Nuna ɗan gajeren sanarwa lokacin da plugin ke canza yanayin kallon rubutu lokacin buɗewa. Wannan fasalin BETA ne.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Kunna Rubutun Gyaran Kura-kurai',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Nuna cikakkun bayanai a cikin na\'urar wasan bidiyo ta masu haɓakawa. Yana buƙatar sake kunna Obsidian ko sake loda plugin don cikakken tasiri.',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "An saita '{fileName}' zuwa ",
    NOTICE_MODE_DEFAULT: "Karatu Kadai na Asali.",
    NOTICE_MODE_STRICT: "Karatu Kadai Mai Tsauri.",
    NOTICE_MODE_EDIT: "Yanayin Gyara.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Samfurin regex mai tsauri mara inganci: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Samfurin regex na asali mara inganci: ",
    NOTICE_NOTIFICATIONS_ENABLED: "An kunna sanarwar canjin yanayi.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Canja karatu kaɗai na asali don rubutun yanzu",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Canja karatu kaɗai mai tsauri don rubutun yanzu",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "An cire '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' daga jerin karatu kaɗai na asali.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "An ƙara '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' zuwa jerin karatu kaɗai na asali.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "An cire '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' daga jerin karatu kaɗai mai tsauri.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "An ƙara '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' zuwa jerin karatu kaɗai mai tsauri.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (An cire daga jerin masu tsauri)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (An cire daga jerin asali)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Harshen Plugin",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Zaɓi harshen nuni don wannan keɓaɓɓen plugin. Yana buƙatar sake kunna Obsidian ko sake loda plugin don amfani da canje-canje.",
};
