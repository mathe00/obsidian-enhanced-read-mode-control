// src/lang/bn.ts
// Bengali translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'স্বয়ংক্রিয় (অবসিডিয়ানের ভাষা অনুযায়ী)',
    LANG_AUTO: 'স্বয়ংক্রিয় (অবসিডিয়ানের ভাষা অনুযায়ী)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'এনহ্যান্সড রিড মোড কন্ট্রোল সেটিংস',
    SETTINGS_SECTION_EXACT_PATHS: 'সঠিক পাথ ম্যাচিং',
    SETTINGS_SECTION_REGEX_BETA: 'রেজেক্স পাথ ম্যাচিং (বিটা)',
    SETTINGS_SECTION_BEHAVIOR: 'আচরণ',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'প্রতিক্রিয়া ও ডিবাগিং',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'ডিফল্ট রিড-অনলি ফাইল (সঠিক পাথ)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'এখানে তালিকাভুক্ত ফাইলগুলি ডিফল্টভাবে রিড-অনলি মোডে খুলবে। সঠিক পাথ ম্যাচিং ব্যবহার করে।',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'ফাইলের পাথ লিখুন (যেমন, Notes/MyFile.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'স্ট্রিক্ট রিড-অনলি ফাইল (সঠিক পাথ)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'এখানে তালিকাভুক্ত ফাইলগুলি জোর করে রিড-অনলি মোডে রাখা হবে। সঠিক পাথ ম্যাচিং ব্যবহার করে।',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'ফাইলের পাথ লিখুন (যেমন, Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'স্ট্রিক্ট রিড-অনলি ফোল্ডার (সঠিক পাথ)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'এই ফোল্ডারগুলির (এবং সাব-ফোল্ডারগুলির) মধ্যে থাকা সমস্ত নোট জোর করে স্ট্রিক্ট রিড-অনলি মোডে রাখা হবে। সঠিক পাথ ম্যাচিং ব্যবহার করে।',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'ফোল্ডারের পাথ লিখুন ( যেমন, Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'রেজেক্স ম্যাচিং সক্রিয় করুন (বিটা)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'রেগুলার এক্সপ্রেশনের সাথে ফাইল পাথ ম্যাচিং সক্রিয় করুন। এটি একটি বিটা বৈশিষ্ট্য। ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'সাবধানতার সাথে ব্যবহার করুন: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'অবৈধ রেজেক্স প্যাটার্ন ত্রুটি বা অপ্রত্যাশিত আচরণের কারণ হতে পারে। রেজেক্স ম্যাচিং সঠিক ফোল্ডার/ফাইল ম্যাচের পরে পরীক্ষা করা হয়।',

    SETTINGS_DEFAULT_REGEX_TITLE: 'ডিফল্ট রিড-অনলি (রেজেক্স প্যাটার্ন)',
    SETTINGS_DEFAULT_REGEX_DESC: 'এখানে থাকা যেকোনো রেজেক্স প্যাটার্নের সাথে মিলে যাওয়া ফাইল পাথগুলি ডিফল্ট রিড-অনলি মোডে খুলবে। প্রতি লাইনে একটি জাভাস্ক্রিপ্ট রেজেক্স প্যাটার্ন (স্ল্যাশ ছাড়া)।',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'রেজেক্স প্যাটার্ন লিখুন (যেমন, ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'স্ট্রিক্ট রিড-অনলি (রেজেক্স প্যাটার্ন)',
    SETTINGS_STRICT_REGEX_DESC: 'এখানে থাকা যেকোনো রেজেক্স প্যাটার্নের সাথে মিলে যাওয়া ফাইল পাথগুলি জোর করে স্ট্রিক্ট রিড-অনলি মোডে রাখা হবে। প্রতি লাইনে একটি জাভাস্ক্রিপ্ট রেজেক্স প্যাটার্ন (স্ল্যাশ ছাড়া)।',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'রেজেক্স প্যাটার্ন লিখুন (যেমন, ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'পাথ যোগ করুন',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'রেজেক্স যোগ করুন',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'সরান', // e.g., "সরান /path/to/file"
    SETTINGS_LIST_UI_EMPTY_FILES: 'এখনও কোনো ফাইল যোগ করা হয়নি।',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'এখনও কোনো ফোল্ডার যোগ করা হয়নি।',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'এখনও কোনো রেজেক্স প্যাটার্ন যোগ করা হয়নি।',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'অব্যবস্থাপিত নোটগুলিতে এডিট মোড ফোর্স করুন',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'প্লাগইন উপরের সেটিংসে তালিকাভুক্ত নয় এমন নোটগুলি কীভাবে পরিচালনা করবে তা চয়ন করুন।',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'সমস্যা:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' যখন একটি প্লাগইন-নিয়ন্ত্রিত নোট (রিড-অনলি) থেকে একটি সাধারণ নোটে নেভিগেট করা হয় ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'একই ট্যাবে',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', তখন অবসিডিয়ান সাধারণ নোটটিকে ভুলভাবে রিড-অনলি মোডে আটকে রাখতে পারে।',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'বিকল্প ১: নিষ্ক্রিয় (ডিফল্ট)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'ক্রিয়া:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' প্লাগইন সাধারণ নোটগুলিতে কখনও এডিট মোড ফোর্স করে না।',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'সুবিধা:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' ম্যানুয়াল পরিবর্তনগুলিকে সম্পূর্ণরূপে সম্মান করে। আপনি যদি একটি সাধারণ নোটকে রিড-অনলি হিসাবে সেট করেন, তবে এটি সেভাবেই থাকবে।',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'অসুবিধা:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' একই ট্যাবে "রিড-অনলিতে আটকে থাকা" বাগটি থেকে যায়। সেক্ষেত্রে আপনাকে ম্যানুয়ালি এডিট মোডে ফিরে যেতে হবে।',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'বিকল্প ২: সক্রিয়',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'ক্রিয়া:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' প্লাগইন রিড-অনলি মোডে পাওয়া যেকোনো সাধারণ নোট খোলার সময় সেটিকে এডিট মোডে ফোর্স করে।',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'সুবিধা:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' একই ট্যাবে নেভিগেশনের জন্য "রিড-অনলিতে আটকে থাকা" বাগটি சரி করে।',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'অসুবিধা:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' ম্যানুয়াল পছন্দগুলিকে অগ্রাহ্য করে। আপনি যদি একটি সাধারণ নোটকে রিড-অনলি হিসাবে সেট করেন, এই প্লাগইনটি খোলার সময় সেটিকে এডিট মোডে ফোর্স করবে।',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'মোড পরিবর্তনের সময় বিজ্ঞপ্তি দিন (বিটা)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'প্লাগইন খোলার সময় সক্রিয়ভাবে একটি নোটের ভিউ মোড পরিবর্তন করলে একটি সংক্ষিপ্ত বিজ্ঞপ্তি দেখান। এটি একটি বিটা বৈশিষ্ট্য।',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'ডিবাগ লগিং সক্রিয় করুন',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'ডেভেলপার কনসোলে বিস্তারিত লগ দেখান। সম্পূর্ণ প্রভাবের জন্য অবসিডিয়ান পুনরায় চালু করা বা প্লাগইন পুনরায় লোড করা প্রয়োজন।',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' সেট করা হয়েছে ", // e.g., "'MyNote.md' সেট করা হয়েছে "
    NOTICE_MODE_DEFAULT: "ডিফল্ট রিড-অনলি।",
    NOTICE_MODE_STRICT: "স্ট্রিক্ট রিড-অনলি।",
    NOTICE_MODE_EDIT: "এডিট মোড।",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "এনহ্যান্সড রিড মোড: অবৈধ স্ট্রিক্ট রেজেক্স প্যাটার্ন: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "এনহ্যান্সড রিড মোড: অবৈধ ডিফল্ট রেজেক্স প্যাটার্ন: ",
    NOTICE_NOTIFICATIONS_ENABLED: "মোড পরিবর্তনের বিজ্ঞপ্তি সক্রিয় করা হয়েছে।",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "এনহ্যান্সড রিড মোড কন্ট্রোল: বর্তমান নোটের জন্য ডিফল্ট রিড-অনলি টগল করুন",
    COMMAND_TOGGLE_STRICT: "এনহ্যান্সড রিড মোড কন্ট্রোল: বর্তমান নোটের জন্য স্ট্রিক্ট রিড-অনলি টগল করুন",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' ডিফল্ট রিড-অনলি তালিকা থেকে সরানো হয়েছে।",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' ডিফল্ট রিড-অনলি তালিকায় যোগ করা হয়েছে।",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' স্ট্রিক্ট রিড-অনলি তালিকা থেকে সরানো হয়েছে।",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' স্ট্রিক্ট রিড-অনলি তালিকায় যোগ করা হয়েছে।",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (স্ট্রিক্ট তালিকা থেকে সরানো হয়েছে)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (ডিফল্ট তালিকা থেকে সরানো হয়েছে)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "প্লাগইন ভাষা",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "এই প্লাগইনের ইন্টারফেসের জন্য প্রদর্শনের ভাষা চয়ন করুন। পরিবর্তনগুলি প্রয়োগ করতে অবসিডিয়ান পুনরায় চালু করা বা প্লাগইন পুনরায় লোড করা প্রয়োজন।",
};
