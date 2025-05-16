// src/lang/fa.ts
// Persian (Farsi) translations - فارسی

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'خودکار (مطابق با آبسیدین)',
    LANG_AUTO: 'خودکار (مطابق با آبسیدین)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'تنظیمات Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'تطابق دقیق مسیر',
    SETTINGS_SECTION_REGEX_BETA: 'تطابق مسیر با Regex (بتا)',
    SETTINGS_SECTION_BEHAVIOR: 'رفتار',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'بازخورد و اشکال زدایی',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'فایل‌های فقط خواندنی پیش‌فرض (مسیرهای دقیق)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'فایل‌های لیست شده در اینجا به طور پیش‌فرض در حالت فقط خواندنی باز می‌شوند. از تطابق دقیق مسیر استفاده می‌کند.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'مسیر فایل را وارد کنید (مثال: Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "پوشه های فقط خواندنی پیش فرض (مسیرهای دقیق)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "تمام یادداشت های داخل این پوشه ها (و زیرپوشه ها) در حالت فقط خواندنی پیش فرض باز می شوند. از تطبیق دقیق مسیر استفاده می کند.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "مسیر پوشه را وارد کنید (مثلاً Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'فایل‌های فقط خواندنی سختگیرانه (مسیرهای دقیق)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'فایل‌های لیست شده در اینجا مجبور به حالت فقط خواندنی می‌شوند. از تطابق دقیق مسیر استفاده می‌کند.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'مسیر فایل را وارد کنید (مثال: Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'پوشه‌های فقط خواندنی سختگیرانه (مسیرهای دقیق)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'تمام یادداشت‌های داخل این پوشه‌ها (و زیرپوشه‌ها) مجبور به حالت فقط خواندنی سختگیرانه می‌شوند. از تطابق دقیق مسیر استفاده می‌کند.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'مسیر پوشه را وارد کنید (مثال: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'فعال کردن تطابق Regex (بتا)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'فعال کردن تطابق مسیرهای فایل با عبارات منظم. این یک ویژگی بتا است. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'با احتیاط استفاده کنید: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'الگوهای regex نامعتبر می‌توانند باعث خطا یا رفتار غیرمنتظره شوند. تطابق Regex پس از تطابق دقیق پوشه/فایل بررسی می‌شود.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'فقط خواندنی پیش‌فرض (الگوهای Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'مسیرهای فایلی که با هر الگوی regex در اینجا مطابقت دارند، در حالت فقط خواندنی پیش‌فرض باز می‌شوند. یک الگوی regex جاوا اسکریپت در هر خط (بدون اسلش).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'الگوی regex را وارد کنید (مثال: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'فقط خواندنی سختگیرانه (الگوهای Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'مسیرهای فایلی که با هر الگوی regex در اینجا مطابقت دارند، مجبور به حالت فقط خواندنی سختگیرانه می‌شوند. یک الگوی regex جاوا اسکریپت در هر خط (بدون اسلش).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'الگوی regex را وارد کنید (مثال: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'افزودن مسیر',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'افزودن Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'حذف',
    SETTINGS_LIST_UI_EMPTY_FILES: 'هنوز هیچ فایلی اضافه نشده است.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'هنوز هیچ پوشه‌ای اضافه نشده است.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'هنوز هیچ الگوی regex اضافه نشده است.',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "مسیر '{path}' از قبل در این لیست وجود دارد.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "الگوی Regex '{path}' از قبل در این لیست وجود دارد.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "{itemType} نامعتبر: '{path}'. لطفاً قالب یا وجود را بررسی کنید.",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'اجبار حالت ویرایش بر روی یادداشت‌های مدیریت نشده',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'انتخاب کنید که افزونه چگونه با یادداشت‌هایی که در تنظیمات بالا لیست نشده‌اند رفتار کند.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'مشکل:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' هنگام پیمایش از یک یادداشت تحت کنترل افزونه (فقط خواندنی) به یک یادداشت معمولی ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'در همان تب',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: '، آبسیدین ممکن است یادداشت معمولی را به اشتباه در حالت فقط خواندنی گیر بیندازد.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'گزینه ۱: غیرفعال (پیش‌فرض)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'عملکرد:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' افزونه هرگز حالت ویرایش را بر روی یادداشت‌های معمولی اجبار نمی‌کند.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'مزیت:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' به طور کامل به تغییرات دستی احترام می‌گذارد. اگر یک یادداشت معمولی را به حالت فقط خواندنی تنظیم کنید، به همان شکل باقی می‌ماند.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'عیب:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' باگ "گیر افتادن در حالت فقط خواندنی" در همان تب باقی می‌ماند. شما باید در آن مورد خاص به صورت دستی به حالت ویرایش برگردید.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'گزینه ۲: فعال',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'عملکرد:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' افزونه هر یادداشت معمولی را که در حالت فقط خواندنی یافت شود، هنگام باز شدن به حالت ویرایش برمی‌گرداند.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'مزیت:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' باگ "گیر افتادن در حالت فقط خواندنی" را برای پیمایش در همان تب برطرف می‌کند.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'عیب:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' انتخاب‌های دستی را لغو می‌کند. اگر یک یادداشت معمولی را به حالت فقط خواندنی تنظیم کنید، این افزونه هنگام باز کردن مجدد آن را به حالت ویرایش برمی‌گرداند.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'اطلاع‌رسانی هنگام تغییر حالت (بتا)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'هنگامی که افزونه به طور فعال حالت نمایش یک یادداشت را هنگام باز شدن تغییر می‌دهد، یک اعلان کوتاه نشان دهید. این یک ویژگی بتا است.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'فعال کردن ثبت اشکال‌زدایی',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'نمایش گزارش‌های دقیق در کنسول توسعه‌دهنده. برای اعمال کامل تغییرات نیاز به راه‌اندازی مجدد آبسیدین یا بارگذاری مجدد افزونه است.',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "فعال کردن تشخیص تضاد",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "تنظیمات را برای قوانین متضاد تجزیه و تحلیل کنید (مثلاً مسیر یکسان در لیست های پیش فرض و سختگیر). تضادها در لیست های زیر برجسته می شوند.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "اطلاع رسانی در مورد تضادهای پیکربندی",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "در صورت شناسایی تضادهای پیکربندی هنگام باز کردن یا تغییر تنظیمات، یک اعلان نشان داده شود.",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' به حالت ",
    NOTICE_MODE_DEFAULT: "فقط خواندنی پیش‌فرض تنظیم شد.",
    NOTICE_MODE_STRICT: "فقط خواندنی سختگیرانه تنظیم شد.",
    NOTICE_MODE_EDIT: "حالت ویرایش تنظیم شد.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: الگوی regex سختگیرانه نامعتبر: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: الگوی regex پیش‌فرض نامعتبر: ",
    NOTICE_NOTIFICATIONS_ENABLED: "اطلاع‌رسانی‌های تغییر حالت فعال شدند.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "{count} تضاد پیکربندی شناسایی شد.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "برای جزئیات، تنظیمات افزونه را بررسی کنید.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "برای جزئیات، لیست های زیر را بررسی کنید.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: تغییر حالت فقط خواندنی پیش‌فرض برای یادداشت فعلی",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: تغییر حالت فقط خواندنی سختگیرانه برای یادداشت فعلی",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "حذف شد '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' از لیست فقط خواندنی پیش‌فرض.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "اضافه شد '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' به لیست فقط خواندنی پیش‌فرض.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "حذف شد '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' از لیست فقط خواندنی سختگیرانه.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "اضافه شد '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' به لیست فقط خواندنی سختگیرانه.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (از لیست سختگیرانه حذف شد)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (از لیست پیش‌فرض حذف شد)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "زبان افزونه",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "زبان نمایش رابط کاربری این افزونه را انتخاب کنید. برای اعمال تغییرات نیاز به راه‌اندازی مجدد آبسیدین یا بارگذاری مجدد افزونه است.",
	SETTINGS_DIAGNOSTICS_TITLE: "تشخیص پیکربندی",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "تضاد: این فایل ('{path}') در لیست فایل های فقط خواندنی سختگیر نیز وجود دارد. سختگیر خواهد بود.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "تضاد: این فایل ('{path}') در لیست فایل های فقط خواندنی پیش فرض نیز وجود دارد. طبق اولویت سختگیر خواهد بود.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "تضاد: این پوشه ('{path}') در لیست پوشه های فقط خواندنی سختگیر نیز وجود دارد. تمام یادداشت های داخل آن سختگیر خواهند بود.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "تضاد: این پوشه ('{path}') در لیست پوشه های فقط خواندنی پیش فرض نیز وجود دارد. طبق اولویت تمام یادداشت های داخل آن سختگیر خواهند بود.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "نادیده گرفتن: این فایل ('{path}') در یک لیست پیش فرض قرار دارد، اما داخل پوشه سختگیر '{conflictingPath}' است. سختگیر خواهد بود.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "اطلاعات: این فایل ('{path}') در یک لیست سختگیر و داخل پوشه پیش فرض '{conflictingPath}' قرار دارد. قانون سختگیر مخصوص فایل اولویت دارد.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "اضافی: این فایل ('{path}') قبلاً توسط قانون پوشه فقط خواندنی پیش فرض برای '{conflictingPath}' پوشش داده شده است.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "اضافی: این فایل ('{path}') قبلاً توسط قانون پوشه فقط خواندنی سختگیر برای '{conflictingPath}' پوشش داده شده است.",

};
