// src/lang/ar.ts
// الترجمة العربية

export default {
    // عام
    LANG_AUTO_DETECT_OBSIDIAN: 'تلقائي (لغة أوبسيديان)',
    LANG_AUTO: 'تلقائي (لغة أوبسيديان)',

    // عناوين تبويب الإعدادات
    SETTINGS_TAB_MAIN_TITLE: 'إعدادات Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'مطابقة المسار الدقيق',
    SETTINGS_SECTION_REGEX_BETA: 'مطابقة المسار بالتعبير النمطي (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'السلوك',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'الملاحظات وتصحيح الأخطاء',

    // إدارة قائمة المسارات الدقيقة
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'ملفات للقراءة فقط افتراضيًا (مسارات دقيقة)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'الملفات المدرجة هنا ستُفتح في وضع القراءة فقط افتراضيًا. يستخدم مطابقة المسار الدقيق.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'أدخل مسار الملف (مثال: ملاحظات/ملفي.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'ملفات للقراءة فقط بشكل صارم (مسارات دقيقة)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'الملفات المدرجة هنا سيتم فرض وضع القراءة فقط عليها. يستخدم مطابقة المسار الدقيق.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'أدخل مسار الملف (مثال: قوالب/محمي.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'مجلدات للقراءة فقط بشكل صارم (مسارات دقيقة)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'جميع الملاحظات داخل هذه المجلدات (والمجلدات الفرعية) سيتم فرض وضع القراءة فقط الصارم عليها. يستخدم مطابقة المسار الدقيق.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'أدخل مسار المجلد (مثال: أرشيف/2023)',

    // إدارة قائمة المسارات بالتعبير النمطي
    SETTINGS_ENABLE_REGEX_TITLE: 'تمكين مطابقة التعبير النمطي (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'تمكين مطابقة مسارات الملفات بالتعبيرات النمطية. هذه ميزة تجريبية (BETA). ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'استخدم بحذر: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'قد تتسبب أنماط التعبير النمطي غير الصالحة في حدوث أخطاء أو سلوك غير متوقع. يتم التحقق من مطابقة التعبير النمطي بعد مطابقة المجلدات/الملفات الدقيقة.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'للقراءة فقط افتراضيًا (أنماط Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'مسارات الملفات التي تطابق أي نمط تعبير نمطي هنا ستُفتح في وضع القراءة فقط افتراضيًا. نمط تعبير نمطي JavaScript واحد لكل سطر (بدون شرطات مائلة).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'أدخل نمط Regex (مثال: ^يوميات/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'للقراءة فقط بشكل صارم (أنماط Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'مسارات الملفات التي تطابق أي نمط تعبير نمطي هنا سيتم فرض وضع القراءة فقط الصارم عليها. نمط تعبير نمطي JavaScript واحد لكل سطر (بدون شرطات مائلة).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'أدخل نمط Regex (مثال: ^قوالب/.*)',

    // واجهة مستخدم إدارة القائمة المشتركة
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'إضافة مسار',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'إضافة Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'إزالة',
    SETTINGS_LIST_UI_EMPTY_FILES: 'لم تتم إضافة ملفات بعد.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'لم تتم إضافة مجلدات بعد.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'لم تتم إضافة أنماط Regex بعد.',

    // إعداد السلوك
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'فرض وضع التحرير على الملاحظات غير المُدارة',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'اختر كيف يتعامل الملحق مع الملاحظات غير المدرجة في الإعدادات أعلاه.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'المشكلة:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' عند الانتقال من ملاحظة يتحكم بها الملحق (للقراءة فقط) إلى ملاحظة عادية ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'في نفس علامة التبويب',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: '، قد يترك أوبسيديان الملاحظة العادية عالقة بشكل غير صحيح في وضع القراءة فقط.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'الخيار 1: معطل (افتراضي)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'الإجراء:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' الملحق لا يفرض أبدًا وضع التحرير على الملاحظات العادية.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'الفائدة:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' يحترم التغييرات اليدوية بالكامل. إذا قمت بتعيين ملاحظة عادية للقراءة فقط، فإنها تبقى كذلك.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'العيب:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' يستمر خطأ "عالق في وضع القراءة فقط" في نفس علامة التبويب. يجب عليك العودة يدويًا إلى وضع التحرير في هذه الحالة المحددة.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'الخيار 2: ممكّن',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'الإجراء:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' الملحق يفرض على أي ملاحظة عادية موجودة في وضع القراءة فقط العودة إلى وضع التحرير عند فتحها.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'الفائدة:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' يصلح خطأ "عالق في وضع القراءة فقط" للتنقل في نفس علامة التبويب.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'العيب:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' يتجاوز الاختيارات اليدوية. إذا قمت بتعيين ملاحظة عادية للقراءة فقط، فإن هذا الملحق سيفرض عليها العودة إلى وضع التحرير عند إعادة فتحها.',

    // قسم الملاحظات وتصحيح الأخطاء
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'إشعار عند تغيير الوضع (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'إظهار إشعار موجز عندما يغير الملحق وضع عرض الملاحظة بشكل فعال عند الفتح. هذه ميزة تجريبية (BETA).',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'تمكين تسجيل تصحيح الأخطاء',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'إظهار سجلات مفصلة في وحدة تحكم المطور. يتطلب إعادة تشغيل أوبسيديان أو إعادة تحميل الملحق لتطبيق التأثير بالكامل.',

    // الإشعارات (من main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "تم تعيين '{fileName}' إلى ",
    NOTICE_MODE_DEFAULT: "للقراءة فقط افتراضيًا.",
    NOTICE_MODE_STRICT: "للقراءة فقط بشكل صارم.",
    NOTICE_MODE_EDIT: "وضع التحرير.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: نمط Regex صارم غير صالح: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: نمط Regex افتراضي غير صالح: ",
    NOTICE_NOTIFICATIONS_ENABLED: "تم تمكين إشعارات تغيير الوضع.",

    // أسماء أوامر لوحة الأوامر (من main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: تبديل القراءة فقط الافتراضية للملاحظة الحالية",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: تبديل القراءة فقط الصارمة للملاحظة الحالية",

    // إشعارات أوامر التبديل (من main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "تمت إزالة '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' من قائمة القراءة فقط الافتراضية.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "تمت إضافة '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' إلى قائمة القراءة فقط الافتراضية.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "تمت إزالة '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' من قائمة القراءة فقط الصارمة.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "تمت إضافة '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' إلى قائمة القراءة فقط الصارمة.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (تمت الإزالة من القائمة الصارمة)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (تمت الإزالة من القائمة الافتراضية)",

    // إعداد اللغة
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "لغة الملحق",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "اختر لغة العرض لواجهة هذا الملحق. يتطلب إعادة تشغيل أوبسيديان أو إعادة تحميل الملحق لتطبيق التغييرات.",
};
