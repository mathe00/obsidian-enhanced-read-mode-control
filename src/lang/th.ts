// src/lang/th.ts
// Thai translations - ภาษาไทย

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'อัตโนมัติ (ตาม Obsidian)',
    LANG_AUTO: 'อัตโนมัติ (ตาม Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'การตั้งค่า Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'การจับคู่เส้นทางที่แน่นอน',
    SETTINGS_SECTION_REGEX_BETA: 'การจับคู่เส้นทาง Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'พฤติกรรม',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'ข้อเสนอแนะและการดีบัก',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'ไฟล์อ่านอย่างเดียวเริ่มต้น (เส้นทางที่แน่นอน)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'ไฟล์ที่ระบุในที่นี้จะเปิดในโหมดอ่านอย่างเดียวโดยค่าเริ่มต้น ใช้การจับคู่เส้นทางที่แน่นอน',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'ป้อนเส้นทางไฟล์ (เช่น Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "โฟลเดอร์อ่านอย่างเดียวเริ่มต้น (เส้นทางที่แน่นอน)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "โน้ตทั้งหมดภายในโฟลเดอร์เหล่านี้ (และโฟลเดอร์ย่อย) จะเปิดในโหมดอ่านอย่างเดียวเริ่มต้น ใช้การจับคู่เส้นทางที่แน่นอน",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "ป้อนเส้นทางโฟลเดอร์ (เช่น Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'ไฟล์อ่านอย่างเดียวแบบเข้มงวด (เส้นทางที่แน่นอน)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'ไฟล์ที่ระบุในที่นี้จะถูกบังคับให้อยู่ในโหมดอ่านอย่างเดียว ใช้การจับคู่เส้นทางที่แน่นอน',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'ป้อนเส้นทางไฟล์ (เช่น Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'โฟลเดอร์อ่านอย่างเดียวแบบเข้มงวด (เส้นทางที่แน่นอน)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'บันทึกทั้งหมดในโฟลเดอร์เหล่านี้ (และโฟลเดอร์ย่อย) จะถูกบังคับให้อยู่ในโหมดอ่านอย่างเดียวแบบเข้มงวด ใช้การจับคู่เส้นทางที่แน่นอน',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'ป้อนเส้นทางโฟลเดอร์ (เช่น Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'เปิดใช้งานการจับคู่ Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'เปิดใช้งานการจับคู่เส้นทางไฟล์กับนิพจน์ทั่วไป นี่คือคุณสมบัติ BETA ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'ใช้ด้วยความระมัดระวัง: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'รูปแบบ regex ที่ไม่ถูกต้องอาจทำให้เกิดข้อผิดพลาดหรือพฤติกรรมที่ไม่คาดคิด การจับคู่ Regex จะถูกตรวจสอบหลังจากจับคู่โฟลเดอร์/ไฟล์ที่แน่นอนแล้ว',

    SETTINGS_DEFAULT_REGEX_TITLE: 'อ่านอย่างเดียวเริ่มต้น (รูปแบบ Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'เส้นทางไฟล์ที่ตรงกับรูปแบบ regex ใด ๆ ที่นี่จะเปิดในโหมดอ่านอย่างเดียวเริ่มต้น หนึ่งรูปแบบ regex JavaScript ต่อบรรทัด (ไม่มีเครื่องหมายทับ)',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'ป้อนรูปแบบ regex (เช่น ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'อ่านอย่างเดียวแบบเข้มงวด (รูปแบบ Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'เส้นทางไฟล์ที่ตรงกับรูปแบบ regex ใด ๆ ที่นี่จะถูกบังคับให้อยู่ในโหมดอ่านอย่างเดียวแบบเข้มงวด หนึ่งรูปแบบ regex JavaScript ต่อบรรทัด (ไม่มีเครื่องหมายทับ)',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'ป้อนรูปแบบ regex (เช่น ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'เพิ่มเส้นทาง',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'เพิ่ม Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'ลบ',
    SETTINGS_LIST_UI_EMPTY_FILES: 'ยังไม่มีไฟล์ถูกเพิ่ม',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'ยังไม่มีโฟลเดอร์ถูกเพิ่ม',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'ยังไม่มีรูปแบบ regex ถูกเพิ่ม',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'บังคับโหมดแก้ไขในบันทึกที่ไม่ได้จัดการ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'เลือกวิธีที่ปลั๊กอินจัดการกับบันทึกที่ไม่ได้ระบุในการตั้งค่าด้านบน',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'ปัญหา:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' เมื่อนำทางจากบันทึกที่ควบคุมโดยปลั๊กอิน (อ่านอย่างเดียว) ไปยังบันทึกปกติ ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'ในแท็บเดียวกัน',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian อาจทำให้บันทึกปกติค้างอยู่ในโหมดอ่านอย่างเดียวอย่างไม่ถูกต้อง',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'ตัวเลือกที่ 1: ปิดใช้งาน (ค่าเริ่มต้น)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'การดำเนินการ:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' ปลั๊กอินจะไม่บังคับโหมดแก้ไขในบันทึกปกติ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'ประโยชน์:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' เคารพการเปลี่ยนแปลงด้วยตนเองอย่างเต็มที่ หากคุณตั้งค่าบันทึกปกติเป็นโหมดอ่านอย่างเดียว มันจะยังคงเป็นเช่นนั้น',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'ข้อเสีย:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' ข้อบกพร่อง "ค้างอยู่ในโหมดอ่านอย่างเดียว" ในแท็บเดียวกันยังคงอยู่ คุณต้องสลับกลับไปที่โหมดแก้ไขด้วยตนเองในกรณีเฉพาะนั้น',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'ตัวเลือกที่ 2: เปิดใช้งาน',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'การดำเนินการ:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' ปลั๊กอินบังคับให้บันทึกปกติใด ๆ ที่พบในโหมดอ่านอย่างเดียวกลับสู่โหมดแก้ไขเมื่อเปิด',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'ประโยชน์:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' แก้ไขข้อบกพร่อง "ค้างอยู่ในโหมดอ่านอย่างเดียว" สำหรับการนำทางในแท็บเดียวกัน',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'ข้อเสีย:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' แทนที่ตัวเลือกด้วยตนเอง หากคุณตั้งค่าบันทึกปกติเป็นโหมดอ่านอย่างเดียว ปลั๊กอินนี้จะบังคับให้กลับสู่โหมดแก้ไขเมื่อคุณเปิดใหม่อีกครั้ง',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'แจ้งเตือนเมื่อโหมดเปลี่ยน (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'แสดงการแจ้งเตือนสั้น ๆ เมื่อปลั๊กอินเปลี่ยนโหมดมุมมองของบันทึกเมื่อเปิด นี่คือคุณสมบัติ BETA',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'เปิดใช้งานการบันทึกดีบัก',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'แสดงบันทึกโดยละเอียดในคอนโซลนักพัฒนาซอฟต์แวร์ ต้องรีสตาร์ท Obsidian หรือโหลดปลั๊กอินใหม่เพื่อให้มีผลเต็มที่',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' ถูกตั้งค่าเป็น ",
    NOTICE_MODE_DEFAULT: "อ่านอย่างเดียวเริ่มต้น",
    NOTICE_MODE_STRICT: "อ่านอย่างเดียวแบบเข้มงวด",
    NOTICE_MODE_EDIT: "โหมดแก้ไข",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: รูปแบบ regex แบบเข้มงวดไม่ถูกต้อง: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: รูปแบบ regex เริ่มต้นไม่ถูกต้อง: ",
    NOTICE_NOTIFICATIONS_ENABLED: "เปิดใช้งานการแจ้งเตือนการเปลี่ยนโหมดแล้ว",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: สลับโหมดอ่านอย่างเดียวเริ่มต้นสำหรับบันทึกปัจจุบัน",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: สลับโหมดอ่านอย่างเดียวแบบเข้มงวดสำหรับบันทึกปัจจุบัน",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "ลบ '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' ออกจากรายการอ่านอย่างเดียวเริ่มต้นแล้ว",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "เพิ่ม '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' ในรายการอ่านอย่างเดียวเริ่มต้นแล้ว",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "ลบ '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' ออกจากรายการอ่านอย่างเดียวแบบเข้มงวดแล้ว",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "เพิ่ม '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' ในรายการอ่านอย่างเดียวแบบเข้มงวดแล้ว",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (ลบออกจากรายการแบบเข้มงวดแล้ว)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (ลบออกจากรายการเริ่มต้นแล้ว)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "ภาษาของปลั๊กอิน",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "เลือกภาษาที่แสดงสำหรับอินเทอร์เฟซปลั๊กอินนี้ ต้องรีสตาร์ท Obsidian หรือโหลดปลั๊กอินใหม่เพื่อใช้การเปลี่ยนแปลง",
};
