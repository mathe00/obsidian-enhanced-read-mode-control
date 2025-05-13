// src/lang/zht.ts
// Chinese (Traditional) translations - 繁體中文

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: '自動 (符合 Obsidian 語言)',
    LANG_AUTO: '自動 (符合 Obsidian 語言)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: '增強閱讀模式控制設定',
    SETTINGS_SECTION_EXACT_PATHS: '精確路徑匹配',
    SETTINGS_SECTION_REGEX_BETA: '正規表示式路徑匹配 (BETA)',
    SETTINGS_SECTION_BEHAVIOR: '行為',
    SETTINGS_SECTION_FEEDBACK_DEBUG: '回饋與除錯',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: '預設唯讀檔案 (精確路徑)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: '此處列出的檔案將預設以唯讀模式開啟。使用精確路徑匹配。',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: '輸入檔案路徑 (例如：筆記/我的檔案.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: '嚴格唯讀檔案 (精確路徑)',
    SETTINGS_STRICT_FILES_EXACT_DESC: '此處列出的檔案將被強制以唯讀模式開啟。使用精確路徑匹配。',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: '輸入檔案路徑 (例如：範本/受保護.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: '嚴格唯讀資料夾 (精確路徑)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: '這些資料夾（及其子資料夾）中的所有筆記都將被強制以嚴格唯讀模式開啟。使用精確路徑匹配。',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: '輸入資料夾路徑 (例如：封存/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: '啟用正規表示式匹配 (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: '啟用根據正規表示式匹配檔案路徑。此為 BETA 功能。',
    SETTINGS_ENABLE_REGEX_DESC_PART2: '請謹慎使用：',
    SETTINGS_ENABLE_REGEX_DESC_PART3: '無效的正規表示式可能會導致錯誤或非預期行為。正規表示式匹配會在精確資料夾/檔案匹配之後進行檢查。',

    SETTINGS_DEFAULT_REGEX_TITLE: '預設唯讀 (正規表示式)',
    SETTINGS_DEFAULT_REGEX_DESC: '符合此處任何正規表示式的檔案路徑將以預設唯讀模式開啟。每行一個 JavaScript 正規表示式 (不含斜線)。',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: '輸入正規表示式 (例如：^日記/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: '嚴格唯讀 (正規表示式)',
    SETTINGS_STRICT_REGEX_DESC: '符合此處任何正規表示式的檔案路徑將被強制以嚴格唯讀模式開啟。每行一個 JavaScript 正規表示式 (不含斜線)。',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: '輸入正規表示式 (例如：^範本/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: '新增路徑',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: '新增 Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: '移除',
    SETTINGS_LIST_UI_EMPTY_FILES: '尚未新增任何檔案。',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: '尚未新增任何資料夾。',
    SETTINGS_LIST_UI_EMPTY_REGEX: '尚未新增任何正規表示式。',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: '強制編輯未管理筆記',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: '選擇外掛程式如何處理未在上述設定中列出的筆記。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: '問題：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' 當從外掛程式控制的筆記（唯讀）導航到普通筆記 ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: '在同一個分頁中',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: '，Obsidian 可能會錯誤地讓普通筆記卡在唯讀模式。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: '選項 1：停用 (預設)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: '操作：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' 外掛程式絕不會強制普通筆記進入編輯模式。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: '優點：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' 完全尊重手動變更。如果您將普通筆記設為唯讀，它將保持該狀態。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: '缺點：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' 同一個分頁中「卡在唯讀模式」的錯誤仍然存在。在該特定情況下，您必須手動切換回編輯模式。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: '選項 2：啟用',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: '操作：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' 外掛程式會在開啟時強制將任何處於唯讀模式的普通筆記切換回編輯模式。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: '優點：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' 修復同一個分頁導航時「卡在唯讀模式」的錯誤。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: '缺點：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' 覆蓋手動選擇。如果您將普通筆記設為唯讀，此外掛程式會在您重新開啟時強制將其切換回編輯模式。',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: '模式變更時通知 (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: '當外掛程式在開啟筆記時主動變更其檢視模式時，顯示簡短通知。此為 BETA 功能。',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: '啟用除錯日誌',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: '在開發者控制台中顯示詳細日誌。需要重新啟動 Obsidian 或重新載入外掛程式才能完全生效。',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' 已設為 ",
    NOTICE_MODE_DEFAULT: "預設唯讀。",
    NOTICE_MODE_STRICT: "嚴格唯讀。",
    NOTICE_MODE_EDIT: "編輯模式。",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "增強閱讀模式控制：無效的嚴格正規表示式：",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "增強閱讀模式控制：無效的預設正規表示式：",
    NOTICE_NOTIFICATIONS_ENABLED: "模式變更通知已啟用。",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "增強閱讀模式控制：切換目前筆記的預設唯讀狀態",
    COMMAND_TOGGLE_STRICT: "增強閱讀模式控制：切換目前筆記的嚴格唯讀狀態",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "已從預設唯讀清單中移除 '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "'。",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "已將 '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' 加入預設唯讀清單。",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "已從嚴格唯讀清單中移除 '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "'。",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "已將 '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' 加入嚴格唯讀清單。",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (已從嚴格清單中移除)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (已從預設清單中移除)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "外掛程式語言",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "選擇此外掛程式介面的顯示語言。需要重新啟動 Obsidian 或重新載入外掛程式以套用變更。",
};
