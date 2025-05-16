// src/lang/ru.ts
// Russian translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Автоматически (язык Obsidian)',
    LANG_AUTO: 'Автоматически (язык Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Настройки Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Точное совпадение путей',
    SETTINGS_SECTION_REGEX_BETA: 'Совпадение путей по Regex (БЕТА)',
    SETTINGS_SECTION_BEHAVIOR: 'Поведение',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Обратная связь и отладка',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Файлы только для чтения по умолчанию (точные пути)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Файлы, перечисленные здесь, будут открываться в режиме только для чтения по умолчанию. Используется точное совпадение путей.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Введите путь к файлу (например, Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Папки только для чтения по умолчанию (точные пути)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Все заметки в этих папках (и подпапках) будут открываться в режиме только для чтения по умолчанию. Используется точное совпадение путей.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Введите путь к папке (например, Проекты/Активные)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Файлы строго только для чтения (точные пути)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Файлы, перечисленные здесь, будут принудительно открываться в режиме только для чтения. Используется точное совпадение путей.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Введите путь к файлу (например, Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Папки строго только для чтения (точные пути)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Все заметки в этих папках (и подпапках) будут принудительно открываться в режиме строго только для чтения. Используется точное совпадение путей.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Введите путь к папке (например, Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Включить совпадение по Regex (БЕТА)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Включить совпадение путей файлов по регулярным выражениям. Это БЕТА-функция. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Используйте с осторожностью: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'неверные шаблоны regex могут вызвать ошибки или неожиданное поведение. Совпадение по Regex проверяется ПОСЛЕ точных совпадений папок/файлов.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Только для чтения по умолчанию (шаблоны Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Пути файлов, соответствующие любому шаблону regex здесь, будут открываться в режиме только для чтения по умолчанию. Один шаблон JavaScript regex на строку (без слешей).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Введите шаблон regex (например, ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Строго только для чтения (шаблоны Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Пути файлов, соответствующие любому шаблону regex здесь, будут принудительно открываться в режиме строго только для чтения. Один шаблон JavaScript regex на строку (без слешей).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Введите шаблон regex (например, ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Добавить путь',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Добавить Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Удалить',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Файлы еще не добавлены.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Папки еще не добавлены.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Шаблоны Regex еще не добавлены.',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Принудительный режим редактирования для неуправляемых заметок',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Выберите, как плагин обрабатывает заметки, НЕ перечисленные в настройках выше.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Проблема:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' При переходе от заметки, управляемой плагином (только для чтения), к обычной заметке ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'в той же вкладке',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian может неправильно оставить обычную заметку в режиме только для чтения.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Вариант 1: ОТКЛЮЧЕНО (По умолчанию)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Действие:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Плагин НИКОГДА не принуждает к режиму редактирования для обычных заметок.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Преимущество:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Полностью уважает ручные изменения. Если вы установите обычную заметку в режим только для чтения, она такой и останется.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Недостаток:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Ошибка "застревания в режиме только для чтения" в той же вкладке остается. Вам придется вручную переключаться обратно в режим редактирования в этом конкретном случае.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Вариант 2: ВКЛЮЧЕНО',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Действие:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Плагин принуждает ЛЮБУЮ обычную заметку, найденную в режиме только для чтения, возвращаться в режим редактирования при открытии.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Преимущество:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Исправляет ошибку "застревания в режиме только для чтения" при навигации в той же вкладке.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Недостаток:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Переопределяет ручные выборы. Если вы установите обычную заметку в режим только для чтения, этот плагин ПРИНУДИТЕЛЬНО вернет ее в режим редактирования при повторном открытии.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Уведомлять об изменении режима (БЕТА)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Показывать короткое уведомление, когда плагин активно изменяет режим просмотра заметки при ее открытии. Это БЕТА-функция.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Включить журнал отладки',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Показывать подробные журналы в консоли разработчика. Требуется перезапуск Obsidian или перезагрузка плагина для полного применения.',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' установлен в режим ",
    NOTICE_MODE_DEFAULT: "Только для чтения по умолчанию.",
    NOTICE_MODE_STRICT: "Строго только для чтения.",
    NOTICE_MODE_EDIT: "Режим редактирования.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Неверный шаблон строгого regex: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Неверный шаблон regex по умолчанию: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Уведомления об изменении режима включены.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Переключить режим только для чтения по умолчанию для текущей заметки",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Переключить строгий режим только для чтения для текущей заметки",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Удалено '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' из списка только для чтения по умолчанию.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Добавлено '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' в список только для чтения по умолчанию.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Удалено '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' из списка строго только для чтения.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Добавлено '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' в список строго только для чтения.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Удалено из строгого списка)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Удалено из списка по умолчанию)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Язык плагина",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Выберите язык отображения для интерфейса этого плагина. Требуется перезапуск Obsidian или перезагрузка плагина для применения изменений.",
};
