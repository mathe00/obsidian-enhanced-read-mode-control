// src/lang/ja.ts
// Japanese translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: '自動 (Obsidianの言語に合わせる)',
    LANG_AUTO: '自動 (Obsidianの言語に合わせる)', // Fallback, should be same as above

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Enhanced Read Mode Control 設定',
    SETTINGS_SECTION_EXACT_PATHS: '完全パス一致',
    SETTINGS_SECTION_REGEX_BETA: '正規表現パス一致 (ベータ版)',
    SETTINGS_SECTION_BEHAVIOR: '動作',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'フィードバックとデバッグ',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'デフォルト読み取り専用ファイル (完全パス)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'ここにリストされたファイルはデフォルトで読み取り専用モードで開きます。完全パス一致を使用します。',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'ファイルパスを入力 (例: Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "デフォルトの読み取り専用フォルダー（完全パス）",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "これらのフォルダー（およびサブフォルダー）内のすべてのノートは、デフォルトの読み取り専用モードで開きます。完全パス一致を使用します。",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "フォルダーパスを入力（例：Projects/Active）",

    SETTINGS_STRICT_FILES_EXACT_TITLE: '厳格な読み取り専用ファイル (完全パス)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'ここにリストされたファイルは強制的に読み取り専用モードになります。完全パス一致を使用します。',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'ファイルパスを入力 (例: Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: '厳格な読み取り専用フォルダ (完全パス)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'これらのフォルダ（およびサブフォルダ）内のすべてのノートは強制的に厳格な読み取り専用モードになります。完全パス一致を使用します。',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'フォルダパスを入力 (例: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: '正規表現一致を有効にする (ベータ版)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'ファイルパスと正規表現のマッチングを有効にします。これはベータ機能です。',
    SETTINGS_ENABLE_REGEX_DESC_PART2: '注意して使用してください：',
    SETTINGS_ENABLE_REGEX_DESC_PART3: '無効な正規表現パターンはエラーや予期しない動作を引き起こす可能性があります。正規表現一致は、完全なフォルダ/ファイル一致の後にチェックされます。',

    SETTINGS_DEFAULT_REGEX_TITLE: 'デフォルト読み取り専用 (正規表現パターン)',
    SETTINGS_DEFAULT_REGEX_DESC: 'ここの正規表現パターンに一致するファイルパスは、デフォルトで読み取り専用モードで開きます。1行に1つのJavaScript正規表現パターン（スラッシュなし）。',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: '正規表現パターンを入力 (例: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: '厳格な読み取り専用 (正規表現パターン)',
    SETTINGS_STRICT_REGEX_DESC: 'ここの正規表現パターンに一致するファイルパスは、強制的に厳格な読み取り専用モードになります。1行に1つのJavaScript正規表現パターン（スラッシュなし）。',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: '正規表現パターンを入力 (例: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'パスを追加',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: '正規表現を追加',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: '削除',
    SETTINGS_LIST_UI_EMPTY_FILES: 'まだファイルが追加されていません。',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'まだフォルダが追加されていません。',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'まだ正規表現パターンが追加されていません。',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "パス '{path}' は既にこのリストに存在します。",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "正規表現パターン '{path}' は既にこのリストに存在します。",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "無効な {itemType}: '{path}'。形式または存在を確認してください。",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: '未管理ノートで編集モードを強制',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: '上記の設定にリストされていないノートをプラグインがどのように処理するかを選択します。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: '問題点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' プラグイン管理下のノート（読み取り専用）から通常のノートへ ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: '同じタブ内で',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ' ナビゲートすると、Obsidianは通常のノートを誤って読み取り専用モードのままにする可能性があります。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'オプション1：無効（デフォルト）',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: '動作：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' プラグインは通常のノートで編集モードを強制しません。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: '利点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' 手動変更を完全に尊重します。通常のノートを読み取り専用に設定した場合、その状態が維持されます。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: '欠点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' 同じタブでの「読み取り専用モードでスタックする」バグは残ります。その特定のケースでは手動で編集モードに戻す必要があります。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'オプション2：有効',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: '動作：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' プラグインは、読み取り専用モードで見つかった通常のノートを開く際に編集モードに戻すよう強制します。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: '利点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' 同じタブでのナビゲーションにおける「読み取り専用モードでスタックする」バグを修正します。',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: '欠点：',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' 手動選択を上書きします。通常のノートを読み取り専用に設定した場合、このプラグインはそれを再度開く際に編集モードに戻すよう強制します。',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'モード変更時に通知 (ベータ版)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'プラグインがノートの表示モードを開く際に積極的に変更した場合に簡単な通知を表示します。これはベータ機能です。',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'デバッグログを有効にする',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: '開発者コンソールに詳細なログを表示します。完全に有効にするにはObsidianの再起動またはプラグインの再読み込みが必要です。',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "競合検出を有効にする",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "競合するルール（デフォルトリストと厳密リストの同じパスなど）の設定を分析します。競合は以下のリストで強調表示されます。",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "構成の競合時に通知する",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "設定を開いたり変更したりしたときに構成の競合が検出された場合に通知を表示します。",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' を ",
    NOTICE_MODE_DEFAULT: "デフォルト読み取り専用に設定しました。",
    NOTICE_MODE_STRICT: "厳格な読み取り専用に設定しました。",
    NOTICE_MODE_EDIT: "編集モードに設定しました。",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: 無効な厳格な正規表現パターン： ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: 無効なデフォルト正規表現パターン： ",
    NOTICE_NOTIFICATIONS_ENABLED: "モード変更通知が有効になりました。",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "{count} 件の構成の競合が検出されました。",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "詳細については、プラグイン設定を確認してください。",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "詳細については、以下のリストを確認してください。",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: 現在のノートのデフォルト読み取り専用を切り替え",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: 現在のノートの厳格な読み取り専用を切り替え",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' をデフォルト読み取り専用リストから削除しました。",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' をデフォルト読み取り専用リストに追加しました。",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' を厳格な読み取り専用リストから削除しました。",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "'",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' を厳格な読み取り専用リストに追加しました。",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (厳格リストから削除)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (デフォルトリストから削除)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "プラグイン言語",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "このプラグインインターフェースの表示言語を選択します。変更を適用するにはObsidianの再起動またはプラグインの再読み込みが必要です。",
	SETTINGS_DIAGNOSTICS_TITLE: "構成診断",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "競合: このファイル（'{path}'）は厳密読み取り専用ファイルリストにも存在します。厳密になります。",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "競合: このファイル（'{path}'）はデフォルト読み取り専用ファイルリストにも存在します。優先度に従って厳密になります。",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "競合: このフォルダー（'{path}'）は厳密読み取り専用フォルダーリストにも存在します。内部のすべてのノートは厳密になります。",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "競合: このフォルダー（'{path}'）はデフォルト読み取り専用フォルダーリストにも存在します。内部のすべてのノートは優先度に従って厳密になります。",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "上書き: このファイル（'{path}'）はデフォルトリストにありますが、厳密フォルダー '{conflictingPath}' 内にあります。厳密になります。",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "情報: このファイル（'{path}'）は厳密リストにあり、デフォルトフォルダー '{conflictingPath}' 内にあります。ファイル固有の厳密ルールが優先されます。",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "冗長: このファイル（'{path}'）は、'{conflictingPath}' のデフォルト読み取り専用フォルダー ルールによって既にカバーされています。",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "冗長: このファイル（'{path}'）は、'{conflictingPath}' の厳密読み取り専用フォルダー ルールによって既にカバーされています。",

};
