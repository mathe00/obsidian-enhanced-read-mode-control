// src/lang/uk.ts
// Ukrainian translations - Українська

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Автоматично (Відповідно до Obsidian)',
    LANG_AUTO: 'Автоматично (Відповідно до Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Налаштування Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Точне Зіставлення Шляху',
    SETTINGS_SECTION_REGEX_BETA: 'Зіставлення Шляху Regex (БЕТА)',
    SETTINGS_SECTION_BEHAVIOR: 'Поведінка',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Зворотній Зв\'язок та Налагодження',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Файли Лише для Читання за Замовчуванням (Точні Шляхи)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Файли, перелічені тут, відкриватимуться в режимі лише для читання за замовчуванням. Використовується точне зіставлення шляху.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Введіть шлях до файлу (напр., Notes/MyFile.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Суворі Файли Лише для Читання (Точні Шляхи)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Файли, перелічені тут, будуть примусово відкриті в режимі лише для читання. Використовується точне зіставлення шляху.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Введіть шлях до файлу (напр., Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Суворі Папки Лише для Читання (Точні Шляхи)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Всі нотатки в цих папках (та підпапках) будуть примусово відкриті в суворому режимі лише для читання. Використовується точне зіставлення шляху.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Введіть шлях до папки (напр., Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Увімкнути Зіставлення Regex (БЕТА)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Увімкнути зіставлення шляхів файлів з регулярними виразами. Це функція БЕТА. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Використовуйте з обережністю: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'неправильні шаблони regex можуть спричинити помилки або неочікувану поведінку. Зіставлення Regex перевіряється ПІСЛЯ точних зіставлень папок/файлів.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Лише для Читання за Замовчуванням (Шаблони Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Шляхи файлів, що відповідають будь-якому шаблону regex тут, відкриватимуться в режимі лише для читання за замовчуванням. Один шаблон regex JavaScript на рядок (без слешів).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Введіть шаблон regex (напр., ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Суворе Лише для Читання (Шаблони Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Шляхи файлів, що відповідають будь-якому шаблону regex тут, будуть примусово відкриті в суворому режимі лише для читання. Один шаблон regex JavaScript на рядок (без слешів).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Введіть шаблон regex (напр., ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Додати Шлях',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Додати Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Видалити',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Ще не додано жодного файлу.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Ще не додано жодної папки.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Ще не додано жодного шаблону regex.',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Примусовий Режим Редагування для Некерованих Нотаток',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Виберіть, як плагін оброблятиме нотатки, НЕ перелічені у налаштуваннях вище.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Проблема:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' При переході з нотатки, керованої плагіном (лише для читання), до звичайної нотатки ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'в тій самій вкладці',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian може неправильно залишити звичайну нотатку в режимі лише для читання.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Варіант 1: ВИМКНЕНО (За замовчуванням)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Дія:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Плагін НІКОЛИ не примушує режим редагування для звичайних нотаток.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Перевага:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Повністю поважає ручні зміни. Якщо ви встановите звичайну нотатку в режим лише для читання, вона такою і залишиться.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Недолік:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Помилка "застрягання в режимі лише для читання" в тій самій вкладці залишається. Вам доведеться вручну переключитися назад до режиму редагування в цьому конкретному випадку.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Варіант 2: УВІМКНЕНО',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Дія:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Плагін примушує БУДЬ-ЯКУ звичайну нотатку, знайдену в режимі лише для читання, повернутися до режиму редагування при відкритті.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Перевага:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Виправляє помилку "застрягання в режимі лише для читання" для навігації в тій самій вкладці.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Недолік:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Перевизначає ручні вибори. Якщо ви встановите звичайну нотатку в режим лише для читання, цей плагін ПРИМУСИТЬ її повернутися до режиму редагування при повторному відкритті.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Сповіщати про Зміну Режиму (БЕТА)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Показувати коротке сповіщення, коли плагін активно змінює режим перегляду нотатки при відкритті. Це функція БЕТА.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Увімкнути Журнал Налагодження',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Показувати детальні журнали в консолі розробника. Потребує перезапуску Obsidian або перезавантаження плагіна для повного ефекту.',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' встановлено на ",
    NOTICE_MODE_DEFAULT: "Лише для Читання за Замовчуванням.",
    NOTICE_MODE_STRICT: "Суворе Лише для Читання.",
    NOTICE_MODE_EDIT: "Режим Редагування.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Неправильний суворий шаблон regex: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Неправильний шаблон regex за замовчуванням: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Сповіщення про зміну режиму увімкнено.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Перемкнути лише для читання за замовчуванням для поточної нотатки",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Перемкнути суворе лише для читання для поточної нотатки",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Видалено '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' зі списку лише для читання за замовчуванням.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Додано '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' до списку лише для читання за замовчуванням.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Видалено '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' зі списку суворого лише для читання.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Додано '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' до списку суворого лише для читання.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Видалено зі списку суворого)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Видалено зі списку за замовчуванням)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Мова Плагіна",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Виберіть мову відображення для інтерфейсу цього плагіна. Потребує перезапуску Obsidian або перезавантаження плагіна для застосування змін.",
};
