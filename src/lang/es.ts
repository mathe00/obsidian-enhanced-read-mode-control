// src/lang/es.ts
// Traducciones al español

export default {
	// General
	LANG_AUTO_DETECT_OBSIDIAN: "Automático (Idioma de Obsidian)",
	LANG_AUTO: "Automático (Idioma de Obsidian)",

	// Settings Tab Titles
	SETTINGS_TAB_MAIN_TITLE: "Configuración de Enhanced Read Mode Control",
	SETTINGS_SECTION_EXACT_PATHS: "Coincidencia Exacta de Ruta",
	SETTINGS_SECTION_REGEX_BETA: "Coincidencia de Ruta por Regex (BETA)",
	SETTINGS_SECTION_BEHAVIOR: "Comportamiento",
	SETTINGS_SECTION_FEEDBACK_DEBUG: "Feedback, Depuración y Diagnósticos",

	// Exact Path List Management
	SETTINGS_DEFAULT_FILES_EXACT_TITLE:
		"Archivos de Solo Lectura por Defecto (Rutas Exactas)",
	SETTINGS_DEFAULT_FILES_EXACT_DESC:
		"Los archivos listados aquí se abrirán en modo de solo lectura por defecto. Usa coincidencia exacta de ruta.",
	SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER:
		"Ingrese la ruta del archivo (ej: Notas/MiArchivo.md)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE:
		"Carpetas de Solo Lectura por Defecto (Rutas Exactas)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC:
		"Todas las notas en estas carpetas (y subcarpetas) se abrirán en modo de solo lectura por defecto. Usa coincidencia exacta de ruta.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER:
		"Ingrese la ruta de la carpeta (ej: Proyectos/Activos)",

	SETTINGS_STRICT_FILES_EXACT_TITLE:
		"Archivos de Solo Lectura Estricta (Rutas Exactas)",
	SETTINGS_STRICT_FILES_EXACT_DESC:
		"Los archivos listados aquí se forzarán a modo de solo lectura. Usa coincidencia exacta de ruta.",
	SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER:
		"Ingrese la ruta del archivo (ej: Plantillas/Protegido.md)",

	SETTINGS_STRICT_FOLDERS_EXACT_TITLE:
		"Carpetas de Solo Lectura Estricta (Rutas Exactas)",
	SETTINGS_STRICT_FOLDERS_EXACT_DESC:
		"Todas las notas en estas carpetas (y subcarpetas) se forzarán a modo de solo lectura estricta. Usa coincidencia exacta de ruta.",
	SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER:
		"Ingrese la ruta de la carpeta (ej: Archivos/2023)",

	// Regex Path List Management
	SETTINGS_ENABLE_REGEX_TITLE: "Habilitar Coincidencia Regex (BETA)",
	SETTINGS_ENABLE_REGEX_DESC_PART1:
		"Habilitar la coincidencia de rutas de archivo con expresiones regulares. Esta es una función BETA. ",
	SETTINGS_ENABLE_REGEX_DESC_PART2: "Usar con precaución: ",
	SETTINGS_ENABLE_REGEX_DESC_PART3:
		"patrones regex inválidos pueden causar errores o comportamiento inesperado. La coincidencia Regex se verifica DESPUÉS de las coincidencias exactas de carpetas/archivos.",

	SETTINGS_DEFAULT_REGEX_TITLE: "Solo Lectura por Defecto (Patrones Regex)",
	SETTINGS_DEFAULT_REGEX_DESC:
		"Las rutas de archivo que coincidan con cualquier patrón regex aquí se abrirán en modo de solo lectura por defecto. Un patrón regex de JavaScript por línea (sin barras).",
	SETTINGS_DEFAULT_REGEX_PLACEHOLDER:
		"Ingrese un patrón regex (ej: ^Diario/\\d{4}-\\d{2}-\\d{2}\\.md$)",

	SETTINGS_STRICT_REGEX_TITLE: "Solo Lectura Estricta (Patrones Regex)",
	SETTINGS_STRICT_REGEX_DESC:
		"Las rutas de archivo que coincidan con cualquier patrón regex aquí se forzarán a modo de solo lectura estricta. Un patrón regex de JavaScript por línea (sin barras).",
	SETTINGS_STRICT_REGEX_PLACEHOLDER:
		"Ingrese un patrón regex (ej: ^Plantillas/.*)",

	// List Management UI Shared
	SETTINGS_LIST_UI_ADD_PATH_BUTTON: "Añadir Ruta",
	SETTINGS_LIST_UI_ADD_REGEX_BUTTON: "Añadir Regex",
	SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: "Eliminar",
	SETTINGS_LIST_UI_EMPTY_FILES: "No hay archivos añadidos aún.",
	SETTINGS_LIST_UI_EMPTY_FOLDERS: "No hay carpetas añadidas aún.",
	SETTINGS_LIST_UI_EMPTY_REGEX: "No hay patrones regex añadidos aún.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH:
		"La ruta '{path}' ya existe en esta lista.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX:
		"El patrón Regex '{path}' ya existe en esta lista.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX:
		"{itemType} inválido: '{path}'. Por favor, compruebe el formato o la existencia.",

	// Behavior Setting
	SETTINGS_FORCE_EDIT_UNMANAGED_TITLE:
		"Forzar Modo Edición en Notas No Gestionadas",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO:
		"Elija cómo el plugin maneja las notas NO listadas en la configuración anterior.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: "Problema:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT:
		" Al navegar desde una nota controlada por el plugin (solo lectura) a una nota normal ",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB:
		"en la misma pestaña",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END:
		", Obsidian podría dejar la nota normal incorrectamente atascada en modo de solo lectura.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL:
		"Opción 1: DESHABILITADO (Predeterminado)",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: "Acción:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT:
		" El plugin NUNCA fuerza el modo edición en notas normales.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: "Beneficio:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT:
		" Respeta completamente los cambios manuales. Si establece una nota normal en solo lectura, permanece así.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: "Desventaja:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT:
		' El error de "atascado en solo lectura" en la misma pestaña persiste. Debe volver manually al modo edición en ese caso específico.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: "Opción 2: HABILITADO",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: "Acción:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT:
		" El plugin fuerza CUALQUIER nota normal encontrada en modo de solo lectura a volver al modo edición al abrirla.",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: "Beneficio:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT:
		' Corrige el error de "atascado en solo lectura" para la navegación en la misma pestaña.',
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: "Desventaja:",
	SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT:
		" Sobrescribe las elecciones manuales. Si establece una nota normal en solo lectura, este plugin LA FORZARÁ a volver al modo edición cuando la reabra.",

	// Feedback & Debugging Section
	SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: "Notificar Cambio de Modo (BETA)",
	SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC:
		"Mostrar una breve notificación cuando el plugin cambie activamente el modo de vista de una nota al abrirla. Esta es una función BETA.",
	SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: "Habilitar Registro de Depuración",
	SETTINGS_ENABLE_DEBUG_LOGGING_DESC:
		"Mostrar registros detallados en la consola de desarrollador. Requiere reiniciar Obsidian o recargar el plugin para que tenga pleno efecto.",
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE:
		"Habilitar Detección de Conflictos",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC:
		"Analizar configuraciones para reglas conflictivas (ej: misma ruta en listas por defecto y estrictas). Los conflictos se resaltarán en las listas de abajo.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE:
		"Notificar en Conflictos de Configuración",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC:
		"Mostrar una notificación si se detectan conflictos de configuración al abrir o cambiar las configuraciones.",

	// Notifications (from main.ts and settings.ts)
	NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' establecido a ",
	NOTICE_MODE_DEFAULT: "Solo Lectura por Defecto.",
	NOTICE_MODE_STRICT: "Solo Lectura Estricta.",
	NOTICE_MODE_EDIT: "Modo Edición.",
	NOTICE_INVALID_STRICT_REGEX_PREFIX:
		"Enhanced Read Mode: Patrón regex estricto inválido: ",
	NOTICE_INVALID_DEFAULT_REGEX_PREFIX:
		"Enhanced Read Mode: Patrón regex por defecto inválido: ",
	NOTICE_NOTIFICATIONS_ENABLED:
		"Notificaciones de cambio de modo habilitadas.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY:
		"{count} conflicto(s) de configuración detectado(s).",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS:
		"Compruebe la configuración del plugin para más detalles.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE:
		"Compruebe las listas de abajo para más detalles.",

	// Command Palette Command Names (from main.ts)
	COMMAND_TOGGLE_DEFAULT:
		"Enhanced Read Mode Control: Alternar solo lectura por defecto para nota actual",
	COMMAND_TOGGLE_STRICT:
		"Enhanced Read Mode Control: Alternar solo lectura estricta para nota actual",

	// Toggle Command Notices (from main.ts)
	NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Eliminado '",
	NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX:
		"' de la lista de solo lectura por defecto.",
	NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Añadido '",
	NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX:
		"' a la lista de solo lectura por defecto.",
	NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Eliminado '",
	NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX:
		"' de la lista de solo lectura estricta.",
	NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Añadido '",
	NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' a la lista de solo lectura estricta.",
	NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Eliminado de la lista estricta)",
	NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX:
		" (Eliminado de la lista por defecto)",

	// Language Setting
	SETTINGS_PLUGIN_LANGUAGE_TITLE: "Idioma del Plugin",
	SETTINGS_PLUGIN_LANGUAGE_DESC:
		"Elija el idioma de visualización para la interfaz de este plugin. Requiere reiniciar Obsidian o recargar el plugin para aplicar los cambios.",

	// Conflict Messages (for tooltips)
	SETTINGS_DIAGNOSTICS_TITLE: "Diagnósticos de Configuración",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT:
		"Conflicto: Este archivo ('{path}') también está en la lista de Archivos Estrictos. Será ESTRICTO.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT:
		"Conflicto: Este archivo ('{path}') también está en la lista de Archivos por Defecto. Será ESTRICTO (prioridad).",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT:
		"Conflicto: Esta carpeta ('{path}') también está en la lista de Carpetas Estrictas. Todas las notas dentro serán ESTRICTAS.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT:
		"Conflicto: Esta carpeta ('{path}') también está en la lista de Carpetas por Defecto. Todas las notas dentro serán ESTRICTAS (prioridad).",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER:
		"Prioridad: Este archivo ('{path}') está en una lista por Defecto, pero está dentro de la carpeta Estricta '{conflictingPath}'. Será ESTRICTO.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER:
		"Info: Este archivo ('{path}') está en una lista Estricta y dentro de la carpeta por Defecto '{conflictingPath}'. La regla Estricta del archivo tiene prioridad.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT:
		"Redundante: Este archivo ('{path}') ya está cubierto por la regla de la Carpeta por Defecto para '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT:
		"Redundante: Este archivo ('{path}') ya está cubierto por la regla de la Carpeta Estricta para '{conflictingPath}'.",
};
