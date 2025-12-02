// src/lang/ig.ts
// Igbo translations

export default {
	// General
	LANG_AUTO_DETECT_OBSIDIAN: "Nchekwa onwe (Dịka Obsidian)",
	LANG_AUTO: "Nchekwa onwe (Dịka Obsidian)",

	// Settings Tab Titles
	SETTINGS_TAB_MAIN_TITLE: "Ntọala Njikwa Ọnọdụ Ọgụgụ Etinyere N'ihu",
	SETTINGS_SECTION_EXACT_PATHS: "Njikọ Ụzọ Kpamkpam",
	SETTINGS_SECTION_REGEX_BETA: "Njikọ Ụzọ Regex (BETA)",
	SETTINGS_SECTION_BEHAVIOR: "Omume",
	SETTINGS_SECTION_FEEDBACK_DEBUG: "Nzaghachi & Nchọpụta Njehie",

	// Exact Path List Management
	SETTINGS_DEFAULT_FILES_EXACT_TITLE:
		"Faịlụ Ọgụgụ Nanị Ndi Mgbakwunye (Ụzọ Kpamkpam)",
	SETTINGS_DEFAULT_FILES_EXACT_DESC:
		"Faịlụ ndị edepụtara ebe a ga-emeghe na ọnọdụ ọgụgụ nanị dịka mgbakwunye. Ọ na-eji njikọ ụzọ kpamkpam.",
	SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER:
		"Tinye ụzọ faịlụ (d.m., Ndetu/FaịlụM.md)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE:
		"Nchekwa ndị Read-Only ndabara (Ụzọ ziri ezi)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC:
		"Ihe ndetu niile dị n'ime nchekwa ndị a (na nchekwa nchekwa) ga-emeghe na ọnọdụ read-only ndabara. Na-eji ụzọ ziri ezi dakọtara.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER:
		"Tinye ụzọ nchekwa (dịka, Projects/Active)",

	SETTINGS_STRICT_FILES_EXACT_TITLE:
		"Faịlụ Ọgụgụ Nanị Siri Ike (Ụzọ Kpamkpam)",
	SETTINGS_STRICT_FILES_EXACT_DESC:
		"A ga-amanye faịlụ ndị edepụtara ebe a ka ha nọrọ na ọnọdụ ọgụgụ nanị. Ọ na-eji njikọ ụzọ kpamkpam.",
	SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER:
		"Tinye ụzọ faịlụ (d.m., Nlereanya/Nchedo.md)",

	SETTINGS_STRICT_FOLDERS_EXACT_TITLE:
		"Nchekwa Ọgụgụ Nanị Siri Ike (Ụzọ Kpamkpam)",
	SETTINGS_STRICT_FOLDERS_EXACT_DESC:
		"A ga-amanye ndetu niile dị n'ime nchekwa ndị a (na nchekwa nwa) ka ha nọrọ na ọnọdụ ọgụgụ nanị siri ike. Ọ na-eji njikọ ụzọ kpamkpam.",
	SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER:
		"Tinye ụzọ nchekwa (d.m., Akwụkwọ Nchekwa/2023)",

	// Regex Path List Management
	SETTINGS_ENABLE_REGEX_TITLE: "Mee ka Njikọ Regex rụọ ọrụ (BETA)",
	SETTINGS_ENABLE_REGEX_DESC_PART1:
		"Mee ka njikọ ụzọ faịlụ na nkwupụta oge niile rụọ ọrụ. Nke a bụ atụmatụ BÊTA. ",
	SETTINGS_ENABLE_REGEX_DESC_PART2: "Jiri nlezianya mee ihe: ",
	SETTINGS_ENABLE_REGEX_DESC_PART3:
		"ụkpụrụ regex na-ezighi ezi nwere ike ịkpata njehie ma ọ bụ omume a na-atụghị anya ya. A na-enyocha njikọ Regex MGBACHA njikọ nchekwa/faịlụ kpamkpam.",

	SETTINGS_DEFAULT_REGEX_TITLE: "Ọgụgụ Nanị Ndi Mgbakwunye (Ụkpụrụ Regex)",
	SETTINGS_DEFAULT_REGEX_DESC:
		"Ụzọ faịlụ ndị kwekọrọ na ụkpụrụ regex ọ bụla ebe a ga-emeghe na ọnọdụ ọgụgụ nanị dịka mgbakwunye. Otu ụkpụrụ regex JavaScript kwa ahịrị (na-enweghị akara /).",
	SETTINGS_DEFAULT_REGEX_PLACEHOLDER:
		"Tinye ụkpụrụ regex (d.m., ^Akwụkwọ Akụkọ/\\d{4}-\\d{2}-\\d{2}\\.md$)",

	SETTINGS_STRICT_REGEX_TITLE: "Ọgụgụ Nanị Siri Ike (Ụkpụrụ Regex)",
	SETTINGS_STRICT_REGEX_DESC:
		"A ga-amanye ụzọ faịlụ ndị kwekọrọ na ụkpụrụ regex ọ bụla ebe a ka ha nọrọ na ọnọdụ ọgụgụ nanị siri ike. Otu ụkpụrụ regex JavaScript kwa ahịrị (na-enweghị akara /).",
	SETTINGS_STRICT_REGEX_PLACEHOLDER:
		"Tinye ụkpụrụ regex (d.m., ^Nlereanya/.*)",

	// List Management UI Shared
	SETTINGS_LIST_UI_ADD_PATH_BUTTON: "Tinye Ụzọ",
	SETTINGS_LIST_UI_ADD_REGEX_BUTTON: "Tinye Regex",
	SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: "Wepụ",
	SETTINGS_LIST_UI_EMPTY_FILES: "Ọ dịghị faịlụ etinyere ma.",
	SETTINGS_LIST_UI_EMPTY_FOLDERS: "Ọ dịghị nchekwa etinyere ma.",
	SETTINGS_LIST_UI_EMPTY_REGEX: "Ọ dịghị ụkpụrụ regex etinyere ma.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "Ụzọ '{path}' adịlarị na ndepụta a.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX:
		"Ụkpụrụ Regex '{path}' adịlarị na ndepụta a.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX:
		"{itemType} ezighi ezi: '{path}'. Biko lelee usoro ma ọ bụ ịdị adị ya.",

	// Behavior Setting
	SETTINGS_FORCE_EDIT_UNMANAGED_TITLE:
		"Manye Ọnọdụ Ndezi na Ndetu A Na-achịkwaghị",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO:
		"Họrọ otu ngwa mgbakwunye si ejikwa ndetu ndị A NA-EDEPỤTAGHỊ na ntọala dị n'elu.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: "Nsogbu:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT:
		" Mgbe ị na-esi na ndetu nke ngwa mgbakwunye na-achịkwa (ọgụgụ nanị) gaa na ndetu nkịtị ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: "n'ime otu taabụ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END:
		", Obsidian nwere ike ịhapụ ndetu nkịtị ahụ ka ọ nọrọ na ọnọdụ ọgụgụ nanị n'ụzọ na-ezighi ezi.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL:
		"Nhọrọ 1: AGBANYỤRỤ (Ndi Mgbakwunye)",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: "Omume:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT:
		" Ngwa mgbakwunye ANAGHỊ amanye ọnọdụ ndezi na ndetu nkịtị MA ọLỊ.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: "Uru:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT:
		" Ọ na-asọpụrụ mgbanwe aka kpamkpam. Ọ bụrụ na ị tinye ndetu nkịtị na ọnọdụ ọgụgụ nanị, ọ na-anọgide otú ahụ.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: "Ọghọm:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT:
		" Njehie \"ịnọgide na ọnọdụ ọgụgụ nanị\" n'ime otu taabụ ka dị. Ị ga-eji aka gị gbanwee laghachi na ọnọdụ ndezi n'ọnọdụ ahụ kpọmkwem.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: "Nhọrọ 2: AGBANYERE",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: "Omume:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT:
		" Ngwa mgbakwunye na-amanye ndetu nkịtị ọ BỤLA a hụrụ na ọnọdụ ọgụgụ nanị ka ọ laghachi na ọnọdụ ndezi mgbe emepere ya.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: "Uru:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT:
		' Ọ na-edozi njehie "ịnọgide na ọnọdụ ọgụgụ nanị" maka njem n\'ime otu taabụ.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: "Ọghọm:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT:
		" Ọ na-emebi nhọrọ aka. Ọ bụrụ na ị tinye ndetu nkịtị na ọnọdụ ọgụgụ nanị, ngwa mgbakwunye a GA-AMANYE ya ka ọ laghachi na ọnọdụ ndezi mgbe ị meghere ya ọzọ.",

	// Feedback & Debugging Section
	SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: "Gwa mgbe Ọnọdụ Gbanwere (BETA)",
	SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC:
		"Gosi ozi dị mkpirikpi mgbe ngwa mgbakwunye na-agbanwe ọnọdụ nlele ndetu mgbe emepere ya. Nke a bụ atụmatụ BÊTA.",
	SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: "Mee ka Ndekọ Nchọpụta Njehie rụọ ọrụ",
	SETTINGS_ENABLE_DEBUG_LOGGING_DESC:
		"Gosi ndekọ zuru ezu na kọnsol onye nrụpụta. Ọ chọrọ ka Obsidian malitegharịa ma ọ bụ ka ngwa mgbakwunye bugharịa iji rụọ ọrụ nke ọma.",
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE:
		"Mee ka Nchọpụta Esemokwu rụọ ọrụ",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC:
		"Nyochaa ntọala maka iwu na-emegiderịta onwe ya (dịka otu ụzọ ahụ na ndepụta ndabara na nke siri ike). A ga-eme ka esemokwu pụta ìhè na ndepụta dị n'okpuru.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Gwa maka Esemokwu Nhazi",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC:
		"Gosi ọkwa ma ọ bụrụ na achọpụtara esemokwu nhazi mgbe emepere ma ọ bụ gbanwee ntọala.",

	// Notifications (from main.ts)
	NOTICE_MODE_CHANGE_PREFIX: "E tinyere '{fileName}' na ",
	NOTICE_MODE_DEFAULT: "Ọnọdụ Ọgụgụ Nanị Ndi Mgbakwunye.",
	NOTICE_MODE_STRICT: "Ọnọdụ Ọgụgụ Nanị Siri Ike.",
	NOTICE_MODE_EDIT: "Ọnọdụ Ndezi.",
	NOTICE_INVALID_STRICT_REGEX_PREFIX:
		"Njikwa Ọnọdụ Ọgụgụ Etinyere N'ihu: Ụkpụrụ regex siri ike na-ezighi ezi: ",
	NOTICE_INVALID_DEFAULT_REGEX_PREFIX:
		"Njikwa Ọnọdụ Ọgụgụ Etinyere N'ihu: Ụkpụrụ regex mgbakwunye na-ezighi ezi: ",
	NOTICE_NOTIFICATIONS_ENABLED: "E meela ka ozi mgbanwe ọnọdụ rụọ ọrụ.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "Achọpụtara {count} esemokwu nhazi.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS:
		"Lelee ntọala ngwa mgbakwunye maka nkọwa.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE:
		"Lelee ndepụta dị n'okpuru maka nkọwa.",

	// Command Palette Command Names (from main.ts)
	COMMAND_TOGGLE_DEFAULT:
		"Njikwa Ọnọdụ Ọgụgụ Etinyere N'ihu: Gbanwee ọnọdụ ọgụgụ nanị mgbakwunye maka ndetu dị ugbu a",
	COMMAND_TOGGLE_STRICT:
		"Njikwa Ọnọdụ Ọgụgụ Etinyere N'ihu: Gbanwee ọnọdụ ọgụgụ nanị siri ike maka ndetu dị ugbu a",

	// Toggle Command Notices (from main.ts)
	NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Wepụrụ '",
	NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' na ndepụta ọgụgụ nanị mgbakwunye.",
	NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Tinyere '",
	NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' na ndepụta ọgụgụ nanị mgbakwunye.",
	NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Wepụrụ '",
	NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' na ndepụta ọgụgụ nanị siri ike.",
	NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Tinyere '",
	NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' na ndepụta ọgụgụ nanị siri ike.",
	NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Wepụrụ na ndepụta siri ike)",
	NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Wepụrụ na ndepụta mgbakwunye)",

	// Language Setting
	SETTINGS_PLUGIN_LANGUAGE_TITLE: "Asụsụ Ngwa Mgbakwunye",
	SETTINGS_PLUGIN_LANGUAGE_DESC:
		"Họrọ asụsụ ngosi maka ihu ngwa mgbakwunye a. Ọ chọrọ ka Obsidian malitegharịa ma ọ bụ ka ngwa mgbakwunye bugharịa iji tinye mgbanwe.",
	SETTINGS_DIAGNOSTICS_TITLE: "Nchọpụta Nhazi",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT:
		"Esemokwu: Faịlụ a ('{path}') dịkwa na ndepụta Faịlụ Read-Only siri ike. Ọ ga-abụ SIRI IKE.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT:
		"Esemokwu: Faịlụ a ('{path}') dịkwa na ndepụta Faịlụ Read-Only ndabara. Ọ ga-abụ SIRI IKE dịka ihe kacha mkpa si dị.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT:
		"Esemokwu: Nchekwa a ('{path}') dịkwa na ndepụta Nchekwa Read-Only siri ike. Ihe ndetu niile dị n'ime ya ga-abụ SIRI IKE.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT:
		"Esemokwu: Nchekwa a ('{path}') dịkwa na ndepụta Nchekwa Read-Only ndabara. Ihe ndetu niile dị n'ime ya ga-abụ SIRI IKE dịka ihe kacha mkpa si dị.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER:
		"Mgbanwe: Faịlụ a ('{path}') dị na ndepụta ndabara, mana ọ dị n'ime nchekwa siri ike '{conflictingPath}'. Ọ ga-abụ SIRI IKE.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER:
		"Ozi: Faịlụ a ('{path}') dị na ndepụta siri ike ma dị n'ime nchekwa ndabara '{conflictingPath}'. Iwu faịlụ siri ike akọwapụtara na-ebute ụzọ.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT:
		"Mbugharị: Faịlụ a ('{path}') ekpuchilarịrị site na iwu Nchekwa Read-Only ndabara maka '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT:
		"Mbugharị: Faịlụ a ('{path}') ekpuchilarịrị site na iwu Nchekwa Read-Only siri ike maka '{conflictingPath}'.",
};
