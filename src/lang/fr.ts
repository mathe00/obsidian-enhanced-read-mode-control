// src/lang/fr.ts
// Traductions françaises

export default {
    // Général
    LANG_AUTO_DETECT_OBSIDIAN: 'Automatique (Selon Obsidian)',

    // Titres de l'onglet des paramètres
    SETTINGS_TAB_MAIN_TITLE: 'Paramètres de Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Correspondance Exacte de Chemin',
    SETTINGS_SECTION_REGEX_BETA: 'Correspondance de Chemin par Regex (BÊTA)',
    SETTINGS_SECTION_BEHAVIOR: 'Comportement',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Retours & Débogage',

    // Gestion de liste de chemins exacts
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Fichiers en Lecture Seule par Défaut (Chemins Exacts)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Les fichiers listés ici s\'ouvriront en mode lecture seule par défaut. Utilise la correspondance exacte de chemin.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Entrez le chemin du fichier (ex: Notes/MonFichier.md)',

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Fichiers en Lecture Seule Stricte (Chemins Exacts)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Les fichiers listés ici seront forcés en mode lecture seule. Utilise la correspondance exacte de chemin.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Entrez le chemin du fichier (ex: Modèles/Protégé.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Dossiers en Lecture Seule Stricte (Chemins Exacts)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Toutes les notes dans ces dossiers (et sous-dossiers) seront forcées en mode lecture seule stricte. Utilise la correspondance exacte de chemin.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Entrez le chemin du dossier (ex: Archives/2023)',

    // Gestion de liste de chemins par Regex
    SETTINGS_ENABLE_REGEX_TITLE: 'Activer la Correspondance Regex (BÊTA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Activer la correspondance des chemins de fichiers avec des expressions régulières. Ceci est une fonctionnalité BÊTA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Utiliser avec prudence : ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'des motifs regex invalides peuvent causer des erreurs ou un comportement inattendu. La correspondance Regex est vérifiée APRÈS les correspondances exactes de dossiers/fichiers.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Lecture Seule par Défaut (Motifs Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Les chemins de fichiers correspondant à un motif regex ici s\'ouvriront en mode lecture seule par défaut. Un motif regex JavaScript par ligne (sans barres obliques).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Entrez un motif regex (ex: ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Lecture Seule Stricte (Motifs Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Les chemins de fichiers correspondant à un motif regex ici seront forcés en mode lecture seule stricte. Un motif regex JavaScript par ligne (sans barres obliques).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Entrez un motif regex (ex: ^Modèles/.*)',

    // UI de gestion de liste partagée
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Ajouter Chemin',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Ajouter Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Supprimer', // e.g., "Supprimer /chemin/vers/fichier"
    SETTINGS_LIST_UI_EMPTY_FILES: 'Aucun fichier ajouté pour le moment.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Aucun dossier ajouté pour le moment.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Aucun motif regex ajouté pour le moment.',

    // Paramètre de comportement
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Forcer Mode Édition sur Notes Non Gérées',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Choisissez comment le plugin gère les notes NON listées dans les paramètres ci-dessus.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Problème :',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Lors de la navigation d\'une note contrôlée par le plugin (lecture seule) vers une note normale ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'dans le même onglet',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian pourrait laisser la note normale incorrectement bloquée en mode lecture seule.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Option 1 : DÉSACTIVÉ (Défaut)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Action :',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Le plugin NE force JAMAIS le mode édition sur les notes normales.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Avantage :',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Respecte totalement les changements manuels. Si vous mettez une note normale en lecture seule, elle le reste.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Inconvénient :',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Le bug du "blocage en lecture seule" dans le même onglet persiste. Vous devez manuellement rebasculer en mode édition dans ce cas spécifique.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Option 2 : ACTIVÉ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Action :',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Le plugin force TOUTE note normale trouvée en mode lecture seule à repasser en mode édition à son ouverture.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Avantage :',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Corrige le bug du "blocage en lecture seule" pour la navigation dans le même onglet.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Inconvénient :',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Outrepasse les choix manuels. Si vous mettez une note normale en lecture seule, ce plugin LA FORCERA à repasser en mode édition lorsque vous la rouvrirez.',

    // Section Retours & Débogage
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Notifier lors du Changement de Mode (BÊTA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Afficher une brève notification lorsque le plugin change activement le mode de vue d\'une note à son ouverture. Ceci est une fonctionnalité BÊTA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Activer le Journal de Débogage',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Afficher les journaux détaillés dans la console développeur. Nécessite un redémarrage d\'Obsidian ou un rechargement du plugin pour prendre pleinement effet.',

    // Notifications (depuis main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' défini sur ", // ex: "'MaNote.md' défini sur "
    NOTICE_MODE_DEFAULT: "Lecture Seule par Défaut.",
    NOTICE_MODE_STRICT: "Lecture Seule Stricte.",
    NOTICE_MODE_EDIT: "Mode Édition.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode : Motif regex strict invalide : ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode : Motif regex par défaut invalide : ",
    NOTICE_NOTIFICATIONS_ENABLED: "Notifications de changement de mode activées.",

    // Noms des Commandes de la Palette (depuis main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control : Basculer lecture seule par défaut pour la note actuelle",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control : Basculer lecture seule stricte pour la note actuelle",

    // Notifications des Commandes de Bascule (depuis main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Retiré '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' de la liste lecture seule par défaut.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Ajouté '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' à la liste lecture seule par défaut.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Retiré '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' de la liste lecture seule stricte.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Ajouté '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' à la liste lecture seule stricte.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Retiré de la liste stricte)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Retiré de la liste par défaut)",

    // Paramètre de Langue
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Langue du Plugin",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Choisissez la langue d'affichage pour l'interface de ce plugin. Nécessite un redémarrage d'Obsidian ou un rechargement du plugin pour appliquer les changements.",
};
