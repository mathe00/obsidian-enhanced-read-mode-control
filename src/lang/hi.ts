// src/lang/hi.ts
// Hindi translations

export default {
	// General
	LANG_AUTO_DETECT_OBSIDIAN: "स्वतः (ऑब्सिडियन भाषा से मिलाएं)",
	LANG_AUTO: "स्वतः (ऑब्सिडियन भाषा से मिलाएं)",

	// Settings Tab Titles
	SETTINGS_TAB_MAIN_TITLE: "एन्हांस्ड रीड मोड कंट्रोल सेटिंग्स",
	SETTINGS_SECTION_EXACT_PATHS: "सटीक पथ मिलान",
	SETTINGS_SECTION_REGEX_BETA: "Regex पथ मिलान (बीटा)",
	SETTINGS_SECTION_BEHAVIOR: "व्यवहार",
	SETTINGS_SECTION_FEEDBACK_DEBUG: "प्रतिक्रिया और डिबगिंग",

	// Exact Path List Management
	SETTINGS_DEFAULT_FILES_EXACT_TITLE:
		"डिफ़ॉल्ट केवल-पढ़ने योग्य फ़ाइलें (सटीक पथ)",
	SETTINGS_DEFAULT_FILES_EXACT_DESC:
		"यहां सूचीबद्ध फ़ाइलें डिफ़ॉल्ट रूप से केवल-पढ़ने योग्य मोड में खुलेंगी। सटीक पथ मिलान का उपयोग करता है।",
	SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER:
		"फ़ाइल पथ दर्ज करें (उदा. Notes/MyFile.md)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "डिफ़ॉल्ट रीड-ओनली फ़ोल्डर (सटीक पथ)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC:
		"इन फ़ोल्डरों (और सबफ़ोल्डरों) के भीतर सभी नोट्स डिफ़ॉल्ट रीड-ओनली मोड में खुलेंगे। सटीक पथ मिलान का उपयोग करता है।",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER:
		"फ़ोल्डर पथ दर्ज करें (उदा., Projects/Active)",

	SETTINGS_STRICT_FILES_EXACT_TITLE:
		"सख्त केवल-पढ़ने योग्य फ़ाइलें (सटीक पथ)",
	SETTINGS_STRICT_FILES_EXACT_DESC:
		"यहां सूचीबद्ध फ़ाइलें केवल-पढ़ने योग्य मोड में बाध्य होंगी। सटीक पथ मिलान का उपयोग करता है।",
	SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER:
		"फ़ाइल पथ दर्ज करें (उदा. Templates/Protected.md)",

	SETTINGS_STRICT_FOLDERS_EXACT_TITLE:
		"सख्त केवल-पढ़ने योग्य फ़ोल्डर (सटीक पथ)",
	SETTINGS_STRICT_FOLDERS_EXACT_DESC:
		"इन फ़ोल्डरों (और उप-फ़ोल्डरों) के भीतर सभी नोट्स सख्त केवल-पढ़ने योग्य मोड में बाध्य होंगे। सटीक पथ मिलान का उपयोग करता है।",
	SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER:
		"फ़ोल्डर पथ दर्ज करें (उदा. Archive/2023)",

	// Regex Path List Management
	SETTINGS_ENABLE_REGEX_TITLE: "Regex मिलान सक्षम करें (बीटा)",
	SETTINGS_ENABLE_REGEX_DESC_PART1:
		"फ़ाइल पथों को रेगुलर एक्सप्रेशन के विरुद्ध मिलान सक्षम करें। यह एक बीटा सुविधा है। ",
	SETTINGS_ENABLE_REGEX_DESC_PART2: "सावधानी से प्रयोग करें: ",
	SETTINGS_ENABLE_REGEX_DESC_PART3:
		"अमान्य Regex पैटर्न त्रुटियों या अप्रत्याशित व्यवहार का कारण बन सकते हैं। Regex मिलान सटीक फ़ोल्डर/फ़ाइल मिलान के बाद जांचा जाता है।",

	SETTINGS_DEFAULT_REGEX_TITLE: "डिफ़ॉल्ट केवल-पढ़ने योग्य (Regex पैटर्न)",
	SETTINGS_DEFAULT_REGEX_DESC:
		"यहां किसी भी Regex पैटर्न से मेल खाने वाले फ़ाइल पथ डिफ़ॉल्ट रूप से केवल-पढ़ने योग्य मोड में खुलेंगे। प्रति पंक्ति एक जावास्क्रिप्ट Regex पैटर्न (स्लैश के बिना)।",
	SETTINGS_DEFAULT_REGEX_PLACEHOLDER:
		"Regex पैटर्न दर्ज करें (उदा. ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)",

	SETTINGS_STRICT_REGEX_TITLE: "सख्त केवल-पढ़ने योग्य (Regex पैटर्न)",
	SETTINGS_STRICT_REGEX_DESC:
		"यहां किसी भी Regex पैटर्न से मेल खाने वाले फ़ाइल पथ सख्त केवल-पढ़ने योग्य मोड में बाध्य होंगे। प्रति पंक्ति एक जावास्क्रिप्ट Regex पैटर्न (स्लैश के बिना)।",
	SETTINGS_STRICT_REGEX_PLACEHOLDER:
		"Regex पैटर्न दर्ज करें (उदा. ^Templates/.*)",

	// List Management UI Shared
	SETTINGS_LIST_UI_ADD_PATH_BUTTON: "पथ जोड़ें",
	SETTINGS_LIST_UI_ADD_REGEX_BUTTON: "Regex जोड़ें",
	SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: "हटाएं",
	SETTINGS_LIST_UI_EMPTY_FILES: "अभी तक कोई फ़ाइल नहीं जोड़ी गई है।",
	SETTINGS_LIST_UI_EMPTY_FOLDERS: "अभी तक कोई फ़ोल्डर नहीं जोड़ा गया है।",
	SETTINGS_LIST_UI_EMPTY_REGEX: "अभी तक कोई Regex पैटर्न नहीं जोड़ा गया है।",
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH:
		"पथ '{path}' इस सूची में पहले से मौजूद है।",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX:
		"Regex पैटर्न '{path}' इस सूची में पहले से मौजूद है।",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX:
		"अमान्य {itemType}: '{path}'। कृपया प्रारूप या अस्तित्व की जांच करें।",

	// Behavior Setting
	SETTINGS_FORCE_EDIT_UNMANAGED_TITLE:
		"अप्रबंधित नोट्स पर संपादन मोड बाध्य करें",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO:
		"चुनें कि प्लगइन उपरोक्त सेटिंग्स में सूचीबद्ध नहीं किए गए नोट्स को कैसे संभालता है।",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: "समस्या:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT:
		" जब प्लगइन-नियंत्रित नोट (केवल-पढ़ने योग्य) से सामान्य नोट पर ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: "एक ही टैब में",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END:
		" नेविगेट करते हैं, तो ऑब्सिडियन सामान्य नोट को गलत तरीके से केवल-पढ़ने योग्य मोड में छोड़ सकता है।",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL:
		"विकल्प 1: अक्षम (डिफ़ॉल्ट)",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: "कार्रवाई:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT:
		" प्लगइन कभी भी सामान्य नोट्स पर संपादन मोड बाध्य नहीं करता है।",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: "लाभ:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT:
		" मैन्युअल परिवर्तनों का पूरी तरह से सम्मान करता है। यदि आप किसी सामान्य नोट को केवल-पढ़ने योग्य पर सेट करते हैं, तो वह वैसा ही रहता है।",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: "नुकसान:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT:
		' एक ही टैब में "केवल-पढ़ने योग्य मोड में अटक गया" बग बना रहता है। आपको उस विशिष्ट मामले में मैन्युअल रूप से संपादन मोड पर वापस स्विच करना होगा।',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: "विकल्प 2: सक्षम",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: "कार्रवाई:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT:
		" प्लगइन किसी भी सामान्य नोट को, जो केवल-पढ़ने योग्य मोड में पाया जाता है, खोलने पर संपादन मोड में वापस बाध्य करता है।",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: "लाभ:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT:
		' एक ही टैब नेविगेशन के लिए "केवल-पढ़ने योग्य मोड में अटक गया" बग को ठीक करता है।',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: "नुकसान:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT:
		" मैन्युअल विकल्पों को ओवरराइड करता है। यदि आप किसी सामान्य नोट को केवल-पढ़ने योग्य पर सेट करते हैं, तो यह प्लगइन इसे फिर से खोलने पर संपादन मोड में वापस बाध्य करेगा।",

	// Feedback & Debugging Section
	SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: "मोड बदलने पर सूचित करें (बीटा)",
	SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC:
		"जब प्लगइन किसी नोट के दृश्य मोड को खोलने पर सक्रिय रूप से बदलता है तो एक संक्षिप्त सूचना दिखाएं। यह एक बीटा सुविधा है।",
	SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: "डिबगिंग लॉग सक्षम करें",
	SETTINGS_ENABLE_DEBUG_LOGGING_DESC:
		"डेवलपर कंसोल में विस्तृत लॉग दिखाएं। पूरी तरह से प्रभावी होने के लिए ऑब्सिडियन को पुनरारंभ करने या प्लगइन को पुनः लोड करने की आवश्यकता है।",
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "विरोध पहचान सक्षम करें",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC:
		"विरोधी नियमों के लिए सेटिंग्स का विश्लेषण करें (जैसे डिफ़ॉल्ट और स्ट्रिक्ट सूचियों में समान पथ)। विरोधों को नीचे दी गई सूचियों में हाइलाइट किया जाएगा।",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "कॉन्फ़िगरेशन विरोधों पर सूचित करें",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC:
		"सेटिंग्स खोलने या बदलने पर कॉन्फ़िगरेशन विरोधों का पता चलने पर एक सूचना दिखाएं।",

	// Notifications (from main.ts)
	NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' को ",
	NOTICE_MODE_DEFAULT: "डिफ़ॉल्ट केवल-पढ़ने योग्य पर सेट किया गया।",
	NOTICE_MODE_STRICT: "सख्त केवल-पढ़ने योग्य पर सेट किया गया।",
	NOTICE_MODE_EDIT: "संपादन मोड पर सेट किया गया।",
	NOTICE_INVALID_STRICT_REGEX_PREFIX:
		"एन्हांस्ड रीड मोड: अमान्य सख्त Regex पैटर्न: ",
	NOTICE_INVALID_DEFAULT_REGEX_PREFIX:
		"एन्हांस्ड रीड मोड: अमान्य डिफ़ॉल्ट Regex पैटर्न: ",
	NOTICE_NOTIFICATIONS_ENABLED: "मोड परिवर्तन सूचनाएं सक्षम की गईं।",
	NOTICE_CONFLICTS_DETECTED_SUMMARY:
		"{count} कॉन्फ़िगरेशन विरोधों का पता चला।",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "विवरण के लिए प्लगइन सेटिंग्स जांचें।",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE:
		"विवरण के लिए नीचे दी गई सूचियाँ देखें।",

	// Command Palette Command Names (from main.ts)
	COMMAND_TOGGLE_DEFAULT:
		"एन्हांस्ड रीड मोड कंट्रोल: वर्तमान नोट के लिए डिफ़ॉल्ट केवल-पढ़ने योग्य टॉगल करें",
	COMMAND_TOGGLE_STRICT:
		"एन्हांस्ड रीड मोड कंट्रोल: वर्तमान नोट के लिए सख्त केवल-पढ़ने योग्य टॉगल करें",

	// Toggle Command Notices (from main.ts)
	NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "'",
	NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX:
		"' को डिफ़ॉल्ट केवल-पढ़ने योग्य सूची से हटा दिया गया।",
	NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "'",
	NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX:
		"' को डिफ़ॉल्ट केवल-पढ़ने योग्य सूची में जोड़ा गया।",
	NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "'",
	NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX:
		"' को सख्त केवल-पढ़ने योग्य सूची से हटा दिया गया।",
	NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "'",
	NOTICE_TOGGLE_ADDED_STRICT_SUFFIX:
		"' को सख्त केवल-पढ़ने योग्य सूची में जोड़ा गया।",
	NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (सख्त सूची से हटाया गया)",
	NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (डिफ़ॉल्ट सूची से हटाया गया)",

	// Language Setting
	SETTINGS_PLUGIN_LANGUAGE_TITLE: "प्लगइन भाषा",
	SETTINGS_PLUGIN_LANGUAGE_DESC:
		"इस प्लगइन इंटरफ़ेस के लिए प्रदर्शन भाषा चुनें। परिवर्तनों को लागू करने के लिए ऑब्सिडियन को पुनरारंभ करने या प्लगइन को पुनः लोड करने की आवश्यकता है।",
	SETTINGS_DIAGNOSTICS_TITLE: "कॉन्फ़िगरेशन निदान",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT:
		"विरोधाभास: यह फ़ाइल ('{path}') स्ट्रिक्ट रीड-ओनली फ़ाइल सूची में भी है। यह स्ट्रिक्ट होगी।",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT:
		"विरोधाभास: यह फ़ाइल ('{path}') डिफ़ॉल्ट रीड-ओनली फ़ाइल सूची में भी है। प्राथमिकता के अनुसार यह स्ट्रिक्ट होगी।",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT:
		"विरोधाभास: यह फ़ोल्डर ('{path}') स्ट्रिक्ट रीड-ओनली फ़ोल्डर सूची में भी है। इसके भीतर सभी नोट्स स्ट्रिक्ट होंगे।",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT:
		"विरोधाभास: यह फ़ोल्डर ('{path}') डिफ़ॉल्ट रीड-ओनली फ़ोल्डर सूची में भी है। प्राथमिकता के अनुसार इसके भीतर सभी नोट्स स्ट्रिक्ट होंगे।",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER:
		"ओवरराइड: यह फ़ाइल ('{path}') डिफ़ॉल्ट सूची में है, लेकिन यह स्ट्रिक्ट फ़ोल्डर '{conflictingPath}' के अंदर है। यह स्ट्रिक्ट होगी।",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER:
		"जानकारी: यह फ़ाइल ('{path}') स्ट्रिक्ट सूची में है और डिफ़ॉल्ट फ़ोल्डर '{conflictingPath}' के अंदर है। फ़ाइल-विशिष्ट स्ट्रिक्ट नियम को प्राथमिकता दी जाएगी।",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT:
		"अनावश्यक: यह फ़ाइल ('{path}') पहले से ही '{conflictingPath}' के लिए डिफ़ॉल्ट रीड-ओनली फ़ोल्डर नियम द्वारा कवर की गई है।",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT:
		"अनावश्यक: यह फ़ाइल ('{path}') पहले से ही '{conflictingPath}' के लिए स्ट्रिक्ट रीड-ओनली फ़ोल्डर नियम द्वारा कवर की गई है।",
};
