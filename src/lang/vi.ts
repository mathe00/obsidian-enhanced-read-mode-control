// src/lang/vi.ts
// Vietnamese translations

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Tự động (Theo Obsidian)',
    LANG_AUTO: 'Tự động (Theo Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Cài đặt Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Đối sánh Đường dẫn Chính xác',
    SETTINGS_SECTION_REGEX_BETA: 'Đối sánh Đường dẫn Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Hành vi',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Phản hồi & Gỡ lỗi',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Tệp Chỉ Đọc Mặc định (Đường dẫn Chính xác)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Các tệp được liệt kê ở đây sẽ mở ở chế độ chỉ đọc theo mặc định. Sử dụng đối sánh đường dẫn chính xác.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Nhập đường dẫn tệp (ví dụ: Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Thư mục Chỉ Đọc Mặc định (Đường dẫn Chính xác)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Tất cả ghi chú trong các thư mục này (và thư mục con) sẽ mở ở chế độ chỉ đọc mặc định. Sử dụng khớp đường dẫn chính xác.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Nhập đường dẫn thư mục (ví dụ: Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Tệp Chỉ Đọc Nghiêm ngặt (Đường dẫn Chính xác)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Các tệp được liệt kê ở đây sẽ bị buộc vào chế độ chỉ đọc. Sử dụng đối sánh đường dẫn chính xác.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Nhập đường dẫn tệp (ví dụ: Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Thư mục Chỉ Đọc Nghiêm ngặt (Đường dẫn Chính xác)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Tất cả ghi chú trong các thư mục này (và thư mục con) sẽ bị buộc vào chế độ chỉ đọc nghiêm ngặt. Sử dụng đối sánh đường dẫn chính xác.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Nhập đường dẫn thư mục (ví dụ: Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Bật Đối sánh Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Bật đối sánh đường dẫn tệp với biểu thức chính quy. Đây là tính năng BETA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Sử dụng cẩn thận: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'các mẫu regex không hợp lệ có thể gây ra lỗi hoặc hành vi không mong muốn. Đối sánh regex được kiểm tra SAU các đối sánh thư mục/tệp chính xác.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Chỉ Đọc Mặc định (Mẫu Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Các đường dẫn tệp khớp với bất kỳ mẫu regex nào ở đây sẽ mở ở chế độ chỉ đọc mặc định. Một mẫu regex JavaScript mỗi dòng (không có dấu gạch chéo).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Nhập mẫu regex (ví dụ: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Chỉ Đọc Nghiêm ngặt (Mẫu Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Các đường dẫn tệp khớp với bất kỳ mẫu regex nào ở đây sẽ bị buộc vào chế độ chỉ đọc nghiêm ngặt. Một mẫu regex JavaScript mỗi dòng (không có dấu gạch chéo).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Nhập mẫu regex (ví dụ: ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Thêm Đường dẫn',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Thêm Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Xóa',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Chưa có tệp nào được thêm.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Chưa có thư mục nào được thêm.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Chưa có mẫu regex nào được thêm.',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "Đường dẫn '{path}' đã tồn tại trong danh sách này.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "Mẫu Regex '{path}' đã tồn tại trong danh sách này.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "{itemType} không hợp lệ: '{path}'. Vui lòng kiểm tra định dạng hoặc sự tồn tại.",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Buộc Chế độ Chỉnh sửa trên Ghi chú Không được Quản lý',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Chọn cách plugin xử lý các ghi chú KHÔNG được liệt kê trong cài đặt ở trên.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Vấn đề:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Khi điều hướng từ một ghi chú do plugin kiểm soát (chỉ đọc) sang một ghi chú bình thường ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'trong cùng một tab',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian có thể để ghi chú bình thường bị kẹt ở chế độ chỉ đọc một cách không chính xác.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Tùy chọn 1: TẮT (Mặc định)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Hành động:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Plugin KHÔNG BAO GIỜ buộc chế độ chỉnh sửa trên các ghi chú bình thường.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Lợi ích:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Hoàn toàn tôn trọng các thay đổi thủ công. Nếu bạn đặt một ghi chú bình thường ở chế độ chỉ đọc, nó sẽ giữ nguyên như vậy.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Hạn chế:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Lỗi "bị kẹt ở chế độ chỉ đọc" trong cùng một tab vẫn còn. Bạn phải tự chuyển lại chế độ chỉnh sửa trong trường hợp cụ thể đó.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Tùy chọn 2: BẬT',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Hành động:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Plugin buộc BẤT KỲ ghi chú bình thường nào được tìm thấy ở chế độ chỉ đọc trở lại chế độ chỉnh sửa khi mở.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Lợi ích:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Sửa lỗi "bị kẹt ở chế độ chỉ đọc" khi điều hướng trong cùng một tab.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Hạn chế:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Ghi đè các lựa chọn thủ công. Nếu bạn đặt một ghi chú bình thường ở chế độ chỉ đọc, plugin này SẼ buộc nó trở lại chế độ chỉnh sửa khi bạn mở lại.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Thông báo khi Chế độ Thay đổi (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Hiển thị thông báo ngắn khi plugin chủ động thay đổi chế độ xem của ghi chú khi mở. Đây là tính năng BETA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Bật Ghi nhật ký Gỡ lỗi',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Hiển thị nhật ký chi tiết trong bảng điều khiển dành cho nhà phát triển. Yêu cầu khởi động lại Obsidian hoặc tải lại plugin để có hiệu lực đầy đủ.',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Bật Phát hiện Xung đột",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "Phân tích cài đặt để tìm các quy tắc xung đột (ví dụ: cùng một đường dẫn trong danh sách mặc định và nghiêm ngặt). Các xung đột sẽ được đánh dấu trong danh sách dưới đây.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Thông báo khi có Xung đột Cấu hình",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "Hiển thị thông báo nếu phát hiện xung đột cấu hình khi cài đặt được mở hoặc thay đổi.",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' được đặt thành ",
    NOTICE_MODE_DEFAULT: "Chỉ Đọc Mặc định.",
    NOTICE_MODE_STRICT: "Chỉ Đọc Nghiêm ngặt.",
    NOTICE_MODE_EDIT: "Chế độ Chỉnh sửa.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Mẫu regex nghiêm ngặt không hợp lệ: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Mẫu regex mặc định không hợp lệ: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Thông báo thay đổi chế độ đã được bật.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "Đã phát hiện {count} xung đột cấu hình.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "Kiểm tra cài đặt plugin để biết chi tiết.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "Kiểm tra danh sách dưới đây để biết chi tiết.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Chuyển đổi chỉ đọc mặc định cho ghi chú hiện tại",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Chuyển đổi chỉ đọc nghiêm ngặt cho ghi chú hiện tại",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Đã xóa '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' khỏi danh sách chỉ đọc mặc định.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Đã thêm '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' vào danh sách chỉ đọc mặc định.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Đã xóa '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' khỏi danh sách chỉ đọc nghiêm ngặt.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Đã thêm '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' vào danh sách chỉ đọc nghiêm ngặt.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Đã xóa khỏi danh sách nghiêm ngặt)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Đã xóa khỏi danh sách mặc định)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Ngôn ngữ Plugin",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Chọn ngôn ngữ hiển thị cho giao diện plugin này. Yêu cầu khởi động lại Obsidian hoặc tải lại plugin để áp dụng các thay đổi.",
	SETTINGS_DIAGNOSTICS_TITLE: "Chẩn đoán Cấu hình",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "Xung đột: Tệp này ('{path}') cũng có trong danh sách Tệp Chỉ Đọc Nghiêm ngặt. Nó sẽ là NGHIÊM NGẶT.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "Xung đột: Tệp này ('{path}') cũng có trong danh sách Tệp Chỉ Đọc Mặc định. Nó sẽ là NGHIÊM NGẶT theo ưu tiên.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "Xung đột: Thư mục này ('{path}') cũng có trong danh sách Thư mục Chỉ Đọc Nghiêm ngặt. Tất cả ghi chú bên trong sẽ là NGHIÊM NGẶT.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "Xung đột: Thư mục này ('{path}') cũng có trong danh sách Thư mục Chỉ Đọc Mặc định. Tất cả ghi chú bên trong sẽ là NGHIÊM NGẶT theo ưu tiên.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "Ghi đè: Tệp này ('{path}') nằm trong danh sách Mặc định, nhưng nó nằm trong thư mục Nghiêm ngặt '{conflictingPath}'. Nó sẽ là NGHIÊM NGẶT.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "Thông tin: Tệp này ('{path}') nằm trong danh sách Nghiêm ngặt và bên trong thư mục Mặc định '{conflictingPath}'. Quy tắc Nghiêm ngặt cụ thể của tệp được ưu tiên.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "Thừa: Tệp này ('{path}') đã được bao gồm bởi quy tắc Thư mục Chỉ Đọc Mặc định cho '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "Thừa: Tệp này ('{path}') đã được bao gồm bởi quy tắc Thư mục Chỉ Đọc Nghiêm ngặt cho '{conflictingPath}'.",

};
