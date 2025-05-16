// src/lang/fi.ts
// Finnish translations - Suomi

export default {
    // General
    LANG_AUTO_DETECT_OBSIDIAN: 'Automaattinen (Obsidianin mukaan)',
    LANG_AUTO: 'Automaattinen (Obsidianin mukaan)',

    // Settings Tab Titles
    SETTINGS_TAB_MAIN_TITLE: 'Enhanced Read Mode Control -asetukset',
    SETTINGS_SECTION_EXACT_PATHS: 'Tarkka Polkumatchaus',
    SETTINGS_SECTION_REGEX_BETA: 'Regex Polkumatchaus (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Käyttäytyminen',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Palaute & Vianetsintä',

    // Exact Path List Management
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Oletuslukutilatiedostot (Tarkat Polut)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Tässä luetellut tiedostot avautuvat oletusarvoisesti lukutilassa. Käyttää tarkkaa polkumatchausta.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Syötä tiedostopolku (esim. Muistiinpanot/OmaTiedosto.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Oletusarvoiset Vain luku -kansiot (Tarkat polut)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Kaikki näiden kansioiden (ja alikansioiden) muistiinpanot avautuvat oletusarvoisessa vain luku -tilassa. Käyttää tarkkaa polun vastaavuutta.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Anna kansion polku (esim. Projektit/Aktiiviset)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Tiukat Lukutilatiedostot (Tarkat Polut)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Tässä luetellut tiedostot pakotetaan lukutilaan. Käyttää tarkkaa polkumatchausta.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Syötä tiedostopolku (esim. Mallit/Suojattu.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Tiukat Lukutilakansiot (Tarkat Polut)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Kaikki muistiinpanot näissä kansioissa (ja alikansioissa) pakotetaan tiukkaan lukutilaan. Käyttää tarkkaa polkumatchausta.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Syötä kansiopolku (esim. Arkisto/2023)',

    // Regex Path List Management
    SETTINGS_ENABLE_REGEX_TITLE: 'Ota Regex-matchaus käyttöön (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Ota käyttöön tiedostopolkujen matchaus säännöllisiin lausekkeisiin. Tämä on BETA-ominaisuus. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Käytä varoen: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'virheelliset regex-kuviot voivat aiheuttaa virheitä tai odottamatonta käyttäytymistä. Regex-matchaus tarkistetaan TARKKOJEN kansio-/tiedostomatchausten JÄLKEEN.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Oletuslukutila (Regex-kuviot)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Tiedostopolut, jotka vastaavat mitä tahansa regex-kuviota tässä, avautuvat oletuslukutilassa. Yksi JavaScript regex-kuvio per rivi (ilman kauttaviivoja).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Syötä regex-kuvio (esim. ^Päiväkirja/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Tiukka Lukutila (Regex-kuviot)',
    SETTINGS_STRICT_REGEX_DESC: 'Tiedostopolut, jotka vastaavat mitä tahansa regex-kuviota tässä, pakotetaan tiukkaan lukutilaan. Yksi JavaScript regex-kuvio per rivi (ilman kauttaviivoja).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Syötä regex-kuvio (esim. ^Mallit/.*)',

    // List Management UI Shared
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Lisää Polku',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Lisää Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Poista',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Tiedostoja ei ole vielä lisätty.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Kansioita ei ole vielä lisätty.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Regex-kuvioita ei ole vielä lisätty.',

    // Behavior Setting
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Pakota Muokkaustila Hallitsemattomille Muistiinpanoille',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Valitse, miten lisäosa käsittelee muistiinpanoja, joita EI ole lueteltu yllä olevissa asetuksissa.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Ongelma:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Navigoitaessa lisäosan hallitsemasta muistiinpanosta (vain luku) normaaliin muistiinpanoon ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'samassa välilehdessä',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', Obsidian saattaa virheellisesti jättää normaalin muistiinpanon lukutilaan.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Vaihtoehto 1: POIS KÄYTÖSTÄ (Oletus)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Toiminto:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' Lisäosa EI KOSKAAN pakota muokkaustilaa normaaleille muistiinpanoille.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Hyöty:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Kunnioittaa täysin manuaalisia muutoksia. Jos asetat normaalin muistiinpanon vain luku -tilaan, se pysyy sellaisena.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Haitta:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' "Lukutilaan jumiutuminen" -bugi samassa välilehdessä säilyy. Sinun on manuaalisesti vaihdettava takaisin muokkaustilaan kyseisessä tapauksessa.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Vaihtoehto 2: KÄYTÖSSÄ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Toiminto:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' Lisäosa pakottaa KAIKKI normaalit muistiinpanot, jotka löytyvät lukutilasta, takaisin muokkaustilaan avattaessa.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Hyöty:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Korjaa "lukutilaan jumiutuminen" -bugin samassa välilehdessä navigoinnissa.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Haitta:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Ohittaa manuaaliset valinnat. Jos asetat normaalin muistiinpanon vain luku -tilaan, tämä lisäosa PAKOTTAA sen takaisin muokkaustilaan, kun avaat sen uudelleen.',

    // Feedback & Debugging Section
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Ilmoita Tilanvaihdosta (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Näytä lyhyt ilmoitus, kun lisäosa aktiivisesti muuttaa muistiinpanon näyttötilaa avattaessa. Tämä on BETA-ominaisuus.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Ota Vianetsintäloki Käyttöön',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Näytä yksityiskohtaiset lokit kehittäjäkonsolissa. Vaatii Obsidianin uudelleenkäynnistyksen tai lisäosan uudelleenlatauksen täyden vaikutuksen saavuttamiseksi.',

    // Notifications (from main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' asetettu tilaan ",
    NOTICE_MODE_DEFAULT: "Oletuslukutila.",
    NOTICE_MODE_STRICT: "Tiukka Lukutila.",
    NOTICE_MODE_EDIT: "Muokkaustila.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Virheellinen tiukka regex-kuvio: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Virheellinen oletus regex-kuvio: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Tilanvaihdosta ilmoittaminen käytössä.",

    // Command Palette Command Names (from main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Vaihda nykyisen muistiinpanon oletuslukutila",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Vaihda nykyisen muistiinpanon tiukka lukutila",

    // Toggle Command Notices (from main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Poistettu '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' oletuslukutilalistasta.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Lisätty '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' oletuslukutilalistaan.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Poistettu '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' tiukasta lukutilalistasta.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Lisätty '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' tiukkaan lukutilalistaan.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Poistettu tiukasta listasta)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Poistettu oletuslistasta)",

    // Language Setting
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Lisäosan Kieli",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Valitse tämän lisäosan käyttöliittymän näyttökieli. Vaatii Obsidianin uudelleenkäynnistyksen tai lisäosan uudelleenlatauksen muutosten voimaantuloon.",
};
