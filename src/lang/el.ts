// src/lang/el.ts
// Greek translations - Ελληνικά

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Αυτόματο (Σύμφωνα με το Obsidian)',
    LANG_AUTO: 'Αυτόματο (Σύμφωνα με το Obsidian)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Ρυθμίσεις Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Ακριβής Αντιστοίχιση Διαδρομής',
    SETTINGS_SECTION_REGEX_BETA: 'Αντιστοίχιση Διαδρομής Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Συμπεριφορά',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Ανατροφοδότηση & Εκσφαλμάτωση',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Προεπιλεγμένα Αρχεία Μόνο για Ανάγνωση (Ακριβείς Διαδρομές)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Τα αρχεία που παρατίθενται εδώ θα ανοίγουν σε λειτουργία μόνο για ανάγνωση από προεπιλογή. Χρησιμοποιεί ακριβή αντιστοίχιση διαδρομής.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Εισαγάγετε διαδρομή αρχείου (π.χ., Notes/MyFile.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Προεπιλεγμένοι Φάκελοι Μόνο για Ανάγνωση (Ακριβείς Διαδρομές)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Όλες οι σημειώσεις εντός αυτών των φακέλων (και υποφακέλων) θα ανοίγουν σε προεπιλεγμένη λειτουργία μόνο για ανάγνωση. Χρησιμοποιεί ακριβή αντιστοίχιση διαδρομής.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Εισαγάγετε τη διαδρομή φακέλου (π.χ. Projects/Active)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Αυστηρά Αρχεία Μόνο για Ανάγνωση (Ακριβείς Διαδρομές)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Τα αρχεία που παρατίθενται εδώ θα εξαναγκάζονται σε λειτουργία μόνο για ανάγνωση. Χρησιμοποιεί ακριβή αντιστοίχιση διαδρομής.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Εισαγάγετε διαδρομή αρχείου (π.χ., Templates/Protected.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Αυστηροί Φάκελοι Μόνο για Ανάγνωση (Ακριβείς Διαδρομές)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Όλες οι σημειώσεις εντός αυτών των φακέλων (και υποφακέλων) θα εξαναγκάζονται σε αυστηρή λειτουργία μόνο για ανάγνωση. Χρησιμοποιεί ακριβή αντιστοίχιση διαδρομής.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Εισαγάγετε διαδρομή φακέλου (π.χ., Archive/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Ενεργοποίηση Αντιστοίχισης Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Ενεργοποίηση αντιστοίχισης διαδρομών αρχείων με κανονικές εκφράσεις. Αυτή είναι μια λειτουργία BETA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Χρησιμοποιήστε με προσοχή: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'μη έγκυρα μοτίβα regex μπορεί να προκαλέσουν σφάλματα ή απροσδόκητη συμπεριφορά. Η αντιστοίχιση Regex ελέγχεται ΜΕΤΑ τις ακριβείς αντιστοιχίσεις φακέλων/αρχείων.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Προεπιλογή Μόνο για Ανάγνωση (Μοτίβα Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Οι διαδρομές αρχείων που ταιριάζουν με οποιοδήποτε μοτίβο regex εδώ θα ανοίγουν σε προεπιλεγμένη λειτουργία μόνο για ανάγνωση. Ένα μοτίβο regex JavaScript ανά γραμμή (χωρίς καθέτους).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Εισαγάγετε μοτίβο regex (π.χ., ^Journal/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Αυστηρή Λειτουργία Μόνο για Ανάγνωση (Μοτίβα Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Οι διαδρομές αρχείων που ταιριάζουν με οποιοδήποτε μοτίβο regex εδώ θα εξαναγκάζονται σε αυστηρή λειτουργία μόνο για ανάγνωση. Ένα μοτίβο regex JavaScript ανά γραμμή (χωρίς καθέτους).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Εισαγάγετε μοτίβο regex (π.χ., ^Templates/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Προσθήκη Διαδρομής',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Προσθήκη Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Αφαίρεση',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Δεν έχουν προστεθεί ακόμη αρχεία.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Δεν έχουν προστεθεί ακόμη φάκελοι.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Δεν έχουν προστεθεί ακόμη μοτίβα regex.',
	SETTINGS_LIST_UI_ALREADY_EXISTS_PATH: "Η διαδρομή '{path}' υπάρχει ήδη σε αυτήν τη λίστα.",
	SETTINGS_LIST_UI_ALREADY_EXISTS_REGEX: "Το μοτίβο Regex '{path}' υπάρχει ήδη σε αυτήν τη λίστα.",
	SETTINGS_LIST_UI_INVALID_PATH_OR_REGEX: "Μη έγκυρο {itemType}: '{path}'. Ελέγξτε τη μορφή ή την ύπαρξη.",

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Εξαναγκασμός Λειτουργίας Επεξεργασίας σε Μη Διαχειριζόμενες Σημειώσεις',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Επιλέξτε πώς το πρόσθετο χειρίζεται τις σημειώσεις που ΔΕΝ αναφέρονται στις παραπάνω ρυθμίσεις.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Πρόβλημα:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Κατά την πλοήγηση από μια σημείωση ελεγχόμενη από το πρόσθετο (μόνο για ανάγνωση) σε μια κανονική σημείωση ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'στην ίδια καρτέλα',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', το Obsidian μπορεί να αφήσει λανθασμένα την κανονική σημείωση κολλημένη σε λειτουργία μόνο για ανάγνωση.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Επιλογή 1: ΑΠΕΝΕΡΓΟΠΟΙΗΜΕΝΟ (Προεπιλογή)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Ενέργεια:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Το πρόσθετο ΠΟΤΕ δεν εξαναγκάζει τη λειτουργία επεξεργασίας σε κανονικές σημειώσεις.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Όφελος:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Σέβεται πλήρως τις μη αυτόματες αλλαγές. Εάν ορίσετε μια κανονική σημείωση σε μόνο για ανάγνωση, παραμένει έτσι.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Μειονέκτημα:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' Το σφάλμα "κόλλημα σε λειτουργία μόνο για ανάγνωση" στην ίδια καρτέλα παραμένει. Πρέπει να επιστρέψετε μη αυτόματα στη λειτουργία επεξεργασίας σε αυτήν τη συγκεκριμένη περίπτωση.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Επιλογή 2: ΕΝΕΡΓΟΠΟΙΗΜΕΝΟ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Ενέργεια:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Το πρόσθετο εξαναγκάζει ΟΠΟΙΑΔΗΠΟΤΕ κανονική σημείωση που βρίσκεται σε λειτουργία μόνο για ανάγνωση να επιστρέψει σε λειτουργία επεξεργασίας κατά το άνοιγμα.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Όφελος:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Διορθώνει το σφάλμα "κόλλημα σε λειτουργία μόνο για ανάγνωση" για πλοήγηση στην ίδια καρτέλα.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Μειονέκτημα:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Παρακάμπτει τις μη αυτόματες επιλογές. Εάν ορίσετε μια κανονική σημείωση σε μόνο για ανάγνωση, αυτό το πρόσθετο ΘΑ την εξαναγκάσει να επιστρέψει σε λειτουργία επεξεργασίας όταν την ξανανοίξετε.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Ειδοποίηση κατά την Αλλαγή Λειτουργίας (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Εμφάνιση σύντομης ειδοποίησης όταν το πρόσθετο αλλάζει ενεργά τη λειτουργία προβολής μιας σημείωσης κατά το άνοιγμα. Αυτή είναι μια λειτουργία BETA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Ενεργοποίηση Καταγραφής Εκσφαλμάτωσης',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Εμφάνιση λεπτομερών αρχείων καταγραφής στην κονσόλα προγραμματιστή. Απαιτεί επανεκκίνηση του Obsidian ή επαναφόρτωση του πρόσθετου για πλήρη ισχύ.',
	SETTINGS_ENABLE_CONFLICT_DETECTION_TITLE: "Ενεργοποίηση Ανίχνευσης Διενέξεων",
	SETTINGS_ENABLE_CONFLICT_DETECTION_DESC: "Αναλύστε τις ρυθμίσεις για αντικρουόμενους κανόνες (π.χ. ίδια διαδρομή σε προεπιλεγμένες και αυστηρές λίστες). Οι διενέξεις θα επισημανθούν στις παρακάτω λίστες.",
	SETTINGS_NOTIFY_ON_CONFLICT_TITLE: "Ειδοποίηση για Διενέξεις Διαμόρφωσης",
	SETTINGS_NOTIFY_ON_CONFLICT_DESC: "Εμφάνιση ειδοποίησης εάν εντοπιστούν διενέξεις διαμόρφωσης κατά το άνοιγμα ή την αλλαγή των ρυθμίσεων.",

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' ορίστηκε σε ",
    NOTICE_MODE_DEFAULT: "Προεπιλογή Μόνο για Ανάγνωση.",
    NOTICE_MODE_STRICT: "Αυστηρή Λειτουργία Μόνο για Ανάγνωση.",
    NOTICE_MODE_EDIT: "Λειτουργία Επεξεργασίας.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Μη έγκυρο αυστηρό μοτίβο regex: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Μη έγκυρο προεπιλεγμένο μοτίβο regex: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Οι ειδοποιήσεις αλλαγής λειτουργίας ενεργοποιήθηκαν.",
	NOTICE_CONFLICTS_DETECTED_SUMMARY: "Εντοπίστηκαν {count} διενέξεις διαμόρφωσης.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS: "Ελέγξτε τις ρυθμίσεις της προσθήκης για λεπτομέρειες.",
	NOTICE_CHECK_SETTINGS_FOR_DETAILS_INLINE: "Ελέγξτε τις παρακάτω λίστες για λεπτομέρειες.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Εναλλαγή προεπιλεγμένης λειτουργίας μόνο για ανάγνωση για την τρέχουσα σημείωση",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Εναλλαγή αυστηρής λειτουργίας μόνο για ανάγνωση για την τρέχουσα σημείωση",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Αφαιρέθηκε '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' από τη λίστα προεπιλεγμένης λειτουργίας μόνο για ανάγνωση.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Προστέθηκε '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' στη λίστα προεπιλεγμένης λειτουργίας μόνο για ανάγνωση.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Αφαιρέθηκε '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' από τη λίστα αυστηρής λειτουργίας μόνο για ανάγνωση.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Προστέθηκε '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' στη λίστα αυστηρής λειτουργίας μόνο για ανάγνωση.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Αφαιρέθηκε από την αυστηρή λίστα)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Αφαιρέθηκε από την προεπιλεγμένη λίστα)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Γλώσσα Πρόσθετου",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Επιλέξτε τη γλώσσα εμφάνισης για τη διεπαφή αυτού του πρόσθετου. Απαιτεί επανεκκίνηση του Obsidian ή επαναφόρτωση του πρόσθετου για την εφαρμογή των αλλαγών.",
	SETTINGS_DIAGNOSTICS_TITLE: "Διαγνωστικά Διαμόρφωσης",
	CONFLICT_DIRECT_SAME_PATH_FILE_DEFAULT: "Σύγκρουση: Αυτό το αρχείο ('{path}') βρίσκεται επίσης στη λίστα Αρχεία Αυστηρά Μόνο για Ανάγνωση. Θα είναι ΑΥΣΤΗΡΟ.",
	CONFLICT_DIRECT_SAME_PATH_FILE_STRICT: "Σύγκρουση: Αυτό το αρχείο ('{path}') βρίσκεται επίσης στη λίστα Προεπιλεγμένα Αρχεία Μόνο για Ανάγνωση. Θα είναι ΑΥΣΤΗΡΟ βάσει προτεραιότητας.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_DEFAULT: "Σύγκρουση: Αυτός ο φάκελος ('{path}') βρίσκεται επίσης στη λίστα Φάκελοι Αυστηρά Μόνο για Ανάγνωση. Όλες οι σημειώσεις εντός θα είναι ΑΥΣΤΗΡΕΣ.",
	CONFLICT_DIRECT_SAME_PATH_FOLDER_STRICT: "Σύγκρουση: Αυτός ο φάκελος ('{path}') βρίσκεται επίσης στη λίστα Προεπιλεγμένοι Φάκελοι Μόνο για Ανάγνωση. Όλες οι σημειώσεις εντός θα είναι ΑΥΣΤΗΡΕΣ βάσει προτεραιότητας.",
	CONFLICT_DEFAULT_FILE_IN_STRICT_FOLDER: "Παράκαμψη: Αυτό το αρχείο ('{path}') βρίσκεται σε μια προεπιλεγμένη λίστα, αλλά είναι εντός του φακέλου Αυστηρά '{conflictingPath}'. Θα είναι ΑΥΣΤΗΡΟ.",
	CONFLICT_STRICT_FILE_IN_DEFAULT_FOLDER: "Πληροφορία: Αυτό το αρχείο ('{path}') βρίσκεται σε μια αυστηρή λίστα και εντός του προεπιλεγμένου φακέλου '{conflictingPath}'. Ο κανόνας αυστηρού αρχείου υπερισχύει.",
	CONFLICT_DEFAULT_FILE_IN_DEFAULT_FOLDER_REDUNDANT: "Περιττό: Αυτό το αρχείο ('{path}') καλύπτεται ήδη από τον κανόνα Προεπιλεγμένου Φακέλου Μόνο για Ανάγνωση για το '{conflictingPath}'.",
	CONFLICT_STRICT_FILE_IN_STRICT_FOLDER_REDUNDANT: "Περιττό: Αυτό το αρχείο ('{path}') καλύπτεται ήδη από τον κανόνα Αυστηρού Φακέλου Μόνο για Ανάγνωση για το '{conflictingPath}'.",

};
