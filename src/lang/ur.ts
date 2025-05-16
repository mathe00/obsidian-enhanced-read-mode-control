// src/lang/ur.ts
// Urdu translations - اردو

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'خودکار (آبسیڈین کے مطابق)',
    LANG_AUTO: 'خودکار (آبسیڈین کے مطابق)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Enhanced Read Mode Control کی ترتیبات',
    SETTINGS_SECTION_EXACT_PATHS: 'عین مطابق پاتھ میچنگ',
    SETTINGS_SECTION_REGEX_BETA: 'ریجیکس پاتھ میچنگ (بیٹا)',
    SETTINGS_SECTION_BEHAVIOR: 'رویہ',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'فیڈ بیک اور ڈیبگنگ',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'ڈیفالٹ صرف پڑھنے والی فائلیں (عین مطابق پاتھ)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'یہاں درج فائلیں بطور ڈیفالٹ صرف پڑھنے کے موڈ میں کھلیں گی۔ عین مطابق پاتھ میچنگ استعمال ہوتی ہے۔',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'فائل کا پاتھ درج کریں (مثال کے طور پر: Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "ڈیفالٹ صرف پڑھنے کے لیے فولڈرز (عین راستے)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "ان فولڈرز (اور ذیلی فولڈرز) کے اندر تمام نوٹس ڈیفالٹ صرف پڑھنے کے موڈ میں کھلیں گے۔ عین مطابق راستے کی مماثلت کا استعمال کرتا ہے۔",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "فولڈر کا راستہ درج کریں (مثلاً، Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'سخت صرف پڑھنے والی فائلیں (عین مطابق پاتھ)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'یہاں درج فائلیں صرف پڑھنے کے موڈ پر مجبور کی جائیں گی۔ عین مطابق پاتھ میچنگ استعمال ہوتی ہے۔',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'فائل کا پاتھ درج کریں (مثال کے طور پر: Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'سخت صرف پڑھنے والے فولڈرز (عین مطابق پاتھ)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'ان فولڈرز (اور ذیلی فولڈرز) میں موجود تمام نوٹس سخت صرف پڑھنے کے موڈ پر مجبور کیے جائیں گے۔ عین مطابق پاتھ میچنگ استعمال ہوتی ہے۔',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'فولڈر کا پاتھ درج کریں (مثال کے طور پر: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'ریجیکس میچنگ فعال کریں (بیٹا)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'فائل پاتھ کو ریگولر ایکسپریشنز کے خلاف میچنگ فعال کریں۔ یہ ایک بیٹا فیچر ہے۔ ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'احتیاط سے استعمال کریں: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'غلط ریجیکس پیٹرن غلطیاں یا غیر متوقع رویے کا سبب بن سکتے ہیں۔ ریجیکس میچنگ عین مطابق فولڈر/فائل میچز کے بعد چیک کی جاتی ہے۔',

    SETTINGS_DEFAULT_REGEX_TITLE: 'ڈیفالٹ صرف پڑھنے والے (ریجیکس پیٹرنز)',
    SETTINGS_DEFAULT_REGEX_DESC: 'یہاں کسی بھی ریجیکس پیٹرن سے مماثل فائل پاتھ ڈیفالٹ صرف پڑھنے کے موڈ میں کھلیں گے۔ فی لائن ایک جاوا اسکرپٹ ریجیکس پیٹرن (سلیش کے بغیر)۔',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'ریجیکس پیٹرن درج کریں (مثال کے طور پر: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'سخت صرف پڑھنے والے (ریجیکس پیٹرنز)',
    SETTINGS_STRICT_REGEX_DESC: 'یہاں کسی بھی ریجیکس پیٹرن سے مماثل فائل پاتھ سخت صرف پڑھنے کے موڈ پر مجبور کیے جائیں گے۔ فی لائن ایک جاوا اسکرپٹ ریجیکس پیٹرن (سلیش کے بغیر)۔',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'ریجیکس پیٹرن درج کریں (مثال کے طور پر: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'پاتھ شامل کریں',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'ریجیکس شامل کریں',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'حذف کریں',
    SETTINGS_LIST_UI_EMPTY_FILES: 'ابھی تک کوئی فائل شامل نہیں کی گئی۔',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'ابھی تک کوئی فولڈر شامل نہیں کیا گیا۔',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'ابھی تک کوئی ریجیکس پیٹرن شامل نہیں کیا گیا۔',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'غیر منظم نوٹس پر ایڈیٹ موڈ مجبور کریں',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'منتخب کریں کہ پلگ ان اوپر دی گئی ترتیبات میں درج نہ ہونے والے نوٹس کو کیسے سنبھالتا ہے۔',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'مسئلہ:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' جب پلگ ان کے زیر کنٹرول نوٹ (صرف پڑھنے کے لیے) سے ایک عام نوٹ پر نیویگیٹ کرتے ہیں ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'اسی ٹیب میں',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: '، آبسیڈین عام نوٹ کو غلطی سے صرف پڑھنے کے موڈ میں پھنسا سکتا ہے۔',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'آپشن 1: غیر فعال (ڈیفالٹ)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'عمل:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' پلگ ان کبھی بھی عام نوٹس پر ایڈیٹ موڈ مجبور نہیں کرتا۔',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'فائدہ:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' دستی تبدیلیوں کا مکمل احترام کرتا ہے۔ اگر آپ کسی عام نوٹ کو صرف پڑھنے کے لیے سیٹ کرتے ہیں، تو وہ ویسا ہی رہتا ہے۔',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'نقصان:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' اسی ٹیب میں "صرف پڑھنے کے موڈ میں پھنس جانے" کا بگ باقی رہتا ہے۔ اس مخصوص صورت میں آپ کو دستی طور پر ایڈیٹ موڈ پر واپس جانا ہوگا۔',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'آپشن 2: فعال',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'عمل:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' پلگ ان کسی بھی عام نوٹ کو جو صرف پڑھنے کے موڈ میں پایا جاتا ہے، کھولنے پر ایڈیٹ موڈ پر واپس مجبور کرتا ہے۔',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'فائدہ:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' اسی ٹیب میں نیویگیشن کے لیے "صرف پڑھنے کے موڈ میں پھنس جانے" کا بگ ٹھیک کرتا ہے۔',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'نقصان:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' دستی انتخاب کو اوور رائڈ کرتا ہے۔ اگر آپ کسی عام نوٹ کو صرف پڑھنے کے لیے سیٹ کرتے ہیں، تو یہ پلگ ان اسے دوبارہ کھولنے پر ایڈیٹ موڈ پر واپس مجبور کرے گا۔',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'موڈ کی تبدیلی پر مطلع کریں (بیٹا)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'جب پلگ ان کسی نوٹ کا ویو موڈ کھولنے پر فعال طور پر تبدیل کرتا ہے تو ایک مختصر اطلاع دکھائیں۔ یہ ایک بیٹا فیچر ہے۔',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'ڈیبگ لاگنگ فعال کریں',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'ڈیولپر کنسول میں تفصیلی لاگز دکھائیں۔ مکمل اثر کے لیے آبسیڈین کو دوبارہ شروع کرنے یا پلگ ان کو دوبارہ لوڈ کرنے کی ضرورت ہے۔',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' پر سیٹ کیا گیا ",
    NOTICE_MODE_DEFAULT: "ڈیفالٹ صرف پڑھنے والا۔",
    NOTICE_MODE_STRICT: "سخت صرف پڑھنے والا۔",
    NOTICE_MODE_EDIT: "ایڈیٹ موڈ۔",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: غلط سخت ریجیکس پیٹرن: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: غلط ڈیفالٹ ریجیکس پیٹرن: ",
    NOTICE_NOTIFICATIONS_ENABLED: "موڈ کی تبدیلی کی اطلاعات فعال ہیں۔",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: موجودہ نوٹ کے لیے ڈیفالٹ صرف پڑھنے والا ٹوگل کریں",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: موجودہ نوٹ کے لیے سخت صرف پڑھنے والا ٹوگل کریں",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "حذف کیا گیا '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' ڈیفالٹ صرف پڑھنے والی فہرست سے۔",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "شامل کیا گیا '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' ڈیفالٹ صرف پڑھنے والی فہرست میں۔",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "حذف کیا گیا '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' سخت صرف پڑھنے والی فہرست سے۔",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "شامل کیا گیا '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' سخت صرف پڑھنے والی فہرست میں۔",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (سخت فہرست سے حذف کیا گیا)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (ڈیفالٹ فہرست سے حذف کیا گیا)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "پلگ ان کی زبان",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "اس پلگ ان کے انٹرفیس کے لیے ڈسپلے زبان منتخب کریں۔ تبدیلیوں کو لاگو کرنے کے لیے آبسیڈین کو دوبارہ شروع کرنے یا پلگ ان کو دوبارہ لوڈ کرنے کی ضرورت ہے۔",
};
