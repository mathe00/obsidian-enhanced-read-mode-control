// src/lang/zh.ts
// 简体中文翻译

export default {
    // 通用
    LANG_AUTO_DETECT_OBSIDIAN: '自动 (跟随 Obsidian 语言)',
    LANG_AUTO: '自动 (跟随 Obsidian 语言)',

    // 设置选项卡标题
    SETTINGS_TAB_MAIN_TITLE: 'Enhanced Read Mode Control 设置',
    SETTINGS_SECTION_EXACT_PATHS: '精确路径匹配',
    SETTINGS_SECTION_REGEX_BETA: '正则表达式路径匹配 (BETA)',
    SETTINGS_SECTION_BEHAVIOR: '行为',
    SETTINGS_SECTION_FEEDBACK_DEBUG: '反馈与调试',

    // 精确路径列表管理
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: '默认只读文件 (精确路径)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: '此处列出的文件将默认以只读模式打开。使用精确路径匹配。',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: '输入文件路径 (例如：笔记/我的文件.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: '严格只读文件 (精确路径)',
    SETTINGS_STRICT_FILES_EXACT_DESC: '此处列出的文件将被强制进入只读模式。使用精确路径匹配。',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: '输入文件路径 (例如：模板/受保护.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: '严格只读文件夹 (精确路径)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: '这些文件夹（及其子文件夹）中的所有笔记都将被强制进入严格只读模式。使用精确路径匹配。',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: '输入文件夹路径 (例如：存档/2023)',

    // 正则表达式路径列表管理
    SETTINGS_ENABLE_REGEX_TITLE: '启用正则表达式匹配 (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: '启用根据正则表达式匹配文件路径。这是一个BETA功能。',
    SETTINGS_ENABLE_REGEX_DESC_PART2: '请谨慎使用：',
    SETTINGS_ENABLE_REGEX_DESC_PART3: '无效的正则表达式模式可能导致错误或意外行为。正则表达式匹配在精确文件夹/文件匹配之后检查。',

    SETTINGS_DEFAULT_REGEX_TITLE: '默认只读 (正则表达式模式)',
    SETTINGS_DEFAULT_REGEX_DESC: '匹配此处任何正则表达式模式的文件路径将默认以只读模式打开。每行一个 JavaScript 正则表达式模式 (不带斜杠)。',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: '输入正则表达式模式 (例如：^日记/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: '严格只读 (正则表达式模式)',
    SETTINGS_STRICT_REGEX_DESC: '匹配此处任何正则表达式模式的文件路径将被强制进入严格只读模式。每行一个 JavaScript 正则表达式模式 (不带斜杠)。',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: '输入正则表达式模式 (例如：^模板/.*)',

    // 列表管理 UI 共享
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: '添加路径',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: '添加正则',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: '移除',
    SETTINGS_LIST_UI_EMPTY_FILES: '尚未添加文件。',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: '尚未添加文件夹。',
    SETTINGS_LIST_UI_EMPTY_REGEX: '尚未添加正则表达式模式。',

    // 行为设置
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: '对未管理笔记强制编辑模式',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: '选择插件如何处理未在上述设置中列出的笔记。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: '问题：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' 当从插件控制的笔记（只读）导航到普通笔记时，',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: '在同一标签页中',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: '，Obsidian 可能会错误地使普通笔记卡在只读模式。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: '选项1：禁用 (默认)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: '行为：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' 插件从不对普通笔记强制编辑模式。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: '优点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' 完全尊重手动更改。如果您将普通笔记设置为只读，它将保持该状态。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: '缺点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' 同一标签页中“卡在只读模式”的错误仍然存在。您必须在该特定情况下手动切换回编辑模式。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: '选项2：启用',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: '行为：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' 插件在打开时会强制将任何处于只读模式的普通笔记切换回编辑模式。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: '优点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' 修复了同一标签页导航中“卡在只读模式”的错误。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: '缺点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' 覆盖手动选择。如果您将普通笔记设置为只读，此插件将在您重新打开它时强制将其切换回编辑模式。',

    // 反馈与调试部分
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: '模式更改时通知 (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: '当插件在打开笔记时主动更改其视图模式时，显示简短通知。这是一个BETA功能。',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: '启用调试日志',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: '在开发者控制台中显示详细日志。需要重启 Obsidian 或重新加载插件才能完全生效。',

    // 通知 (来自 main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' 已设为 ",
    NOTICE_MODE_DEFAULT: "默认只读。",
    NOTICE_MODE_STRICT: "严格只读。",
    NOTICE_MODE_EDIT: "编辑模式。",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode：无效的严格正则表达式模式：",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode：无效的默认正则表达式模式：",
    NOTICE_NOTIFICATIONS_ENABLED: "模式更改通知已启用。",

    // 命令面板命令名称 (来自 main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control：切换当前笔记的默认只读状态",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control：切换当前笔记的严格只读状态",

    // 切换命令通知 (来自 main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "已从默认只读列表中移除 '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "'。",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "已将 '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' 添加到默认只读列表。",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "已从严格只读列表中移除 '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "'。",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "已将 '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' 添加到严格只读列表。",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (已从严格列表移除)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (已从默认列表移除)",

    // 语言设置
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "插件语言",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "选择此插件界面的显示语言。需要重启 Obsidian 或重新加载插件以应用更改。",
};
