// src/lang/ko.ts
// Korean translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: '자동 (Obsidian 언어 일치)',
    LANG_AUTO: '자동 (Obsidian 언어 일치)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Enhanced Read Mode Control 설정',
    SETTINGS_SECTION_EXACT_PATHS: '정확한 경로 일치',
    SETTINGS_SECTION_REGEX_BETA: '정규식 경로 일치 (베타)',
    SETTINGS_SECTION_BEHAVIOR: '동작',
    SETTINGS_SECTION_FEEDBACK_DEBUG: '피드백 및 디버깅',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: '기본 읽기 전용 파일 (정확한 경로)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: '여기에 나열된 파일은 기본적으로 읽기 전용 모드로 열립니다. 정확한 경로 일치를 사용합니다.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: '파일 경로 입력 (예: Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "기본 읽기 전용 폴더 (정확한 경로)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "이 폴더 (및 하위 폴더) 내의 모든 노트는 기본 읽기 전용 모드로 열립니다. 정확한 경로 일치를 사용합니다.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "폴더 경로 입력 (예: Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: '엄격한 읽기 전용 파일 (정확한 경로)',
    SETTINGS_STRICT_FILES_EXACT_DESC: '여기에 나열된 파일은 읽기 전용 모드로 강제됩니다. 정확한 경로 일치를 사용합니다.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: '파일 경로 입력 (예: Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: '엄격한 읽기 전용 폴더 (정확한 경로)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: '이 폴더(및 하위 폴더) 내의 모든 노트는 엄격한 읽기 전용 모드로 강제됩니다. 정확한 경로 일치를 사용합니다.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: '폴더 경로 입력 (예: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: '정규식 일치 활성화 (베타)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: '파일 경로를 정규식과 일치시키도록 활성화합니다. 이것은 베타 기능입니다. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: '주의해서 사용하십시오: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: '잘못된 정규식 패턴은 오류나 예기치 않은 동작을 유발할 수 있습니다. 정규식 일치는 정확한 폴더/파일 일치 후에 확인됩니다.',

    SETTINGS_DEFAULT_REGEX_TITLE: '기본 읽기 전용 (정규식 패턴)',
    SETTINGS_DEFAULT_REGEX_DESC: '여기의 정규식 패턴과 일치하는 파일 경로는 기본적으로 읽기 전용 모드로 열립니다. 줄당 하나의 JavaScript 정규식 패턴 (슬래시 제외).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: '정규식 패턴 입력 (예: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: '엄격한 읽기 전용 (정규식 패턴)',
    SETTINGS_STRICT_REGEX_DESC: '여기의 정규식 패턴과 일치하는 파일 경로는 엄격한 읽기 전용 모드로 강제됩니다. 줄당 하나의 JavaScript 정규식 패턴 (슬래시 제외).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: '정규식 패턴 입력 (예: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: '경로 추가',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: '정규식 추가',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: '제거',
    SETTINGS_LIST_UI_EMPTY_FILES: '아직 추가된 파일이 없습니다.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: '아직 추가된 폴더가 없습니다.',
    SETTINGS_LIST_UI_EMPTY_REGEX: '아직 추가된 정규식 패턴이 없습니다.',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: '관리되지 않는 노트에서 편집 모드 강제',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: '플러그인이 위 설정에 나열되지 않은 노트를 처리하는 방법을 선택합니다.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: '문제점:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' 플러그인 제어 노트(읽기 전용)에서 일반 노트로 ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: '같은 탭에서',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ' 이동할 때 Obsidian이 일반 노트를 잘못 읽기 전용 모드로 유지할 수 있습니다.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: '옵션 1: 비활성화 (기본값)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: '동작:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' 플러그인은 일반 노트에서 편집 모드를 강제하지 않습니다.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: '이점:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' 수동 변경 사항을 완전히 존중합니다. 일반 노트를 읽기 전용으로 설정하면 그대로 유지됩니다.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: '단점:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' 같은 탭에서 "읽기 전용 모드에서 멈춤" 버그가 남아 있습니다. 해당 특정 경우에 수동으로 편집 모드로 다시 전환해야 합니다.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: '옵션 2: 활성화',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: '동작:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' 플러그인은 읽기 전용 모드에서 발견된 모든 일반 노트를 열 때 편집 모드로 다시 강제합니다.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: '이점:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' 같은 탭 탐색 시 "읽기 전용 모드에서 멈춤" 버그를 수정합니다.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: '단점:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' 수동 선택을 재정의합니다. 일반 노트를 읽기 전용으로 설정하면 이 플러그인이 다시 열 때 편집 모드로 강제합니다.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: '모드 변경 시 알림 (베타)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: '플러그인이 노트의 보기 모드를 열 때 적극적으로 변경하면 간단한 알림을 표시합니다. 이것은 베타 기능입니다.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: '디버그 로깅 활성화',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: '개발자 콘솔에 자세한 로그를 표시합니다. 완전히 적용하려면 Obsidian을 다시 시작하거나 플러그인을 다시 로드해야 합니다.',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}'이(가) ",
    NOTICE_MODE_DEFAULT: "기본 읽기 전용으로 설정되었습니다.",
    NOTICE_MODE_STRICT: "엄격한 읽기 전용으로 설정되었습니다.",
    NOTICE_MODE_EDIT: "편집 모드로 설정되었습니다.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: 잘못된 엄격한 정규식 패턴: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: 잘못된 기본 정규식 패턴: ",
    NOTICE_NOTIFICATIONS_ENABLED: "모드 변경 알림이 활성화되었습니다.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: 현재 노트의 기본 읽기 전용 전환",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: 현재 노트의 엄격한 읽기 전용 전환",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "'이(가) 기본 읽기 전용 목록에서 제거되었습니다.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "'이(가) 기본 읽기 전용 목록에 추가되었습니다.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "'이(가) 엄격한 읽기 전용 목록에서 제거되었습니다.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "'이(가) 엄격한 읽기 전용 목록에 추가되었습니다.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (엄격한 목록에서 제거됨)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (기본 목록에서 제거됨)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "플러그인 언어",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "이 플러그인 인터페이스의 표시 언어를 선택합니다. 변경 사항을 적용하려면 Obsidian을 다시 시작하거나 플러그인을 다시 로드해야 합니다.",
};
