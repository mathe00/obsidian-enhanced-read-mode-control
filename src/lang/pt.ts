// src/lang/pt.ts
// Traduções para o português

export default {
    // Geral
    LANG_AUTO_DETECT_OBSIDIAN: 'Automático (Idioma do Obsidian)',
    LANG_AUTO: 'Automático (Idioma do Obsidian)',

    // Títulos da Aba de Configurações
    SETTINGS_TAB_MAIN_TITLE: 'Configurações do Enhanced Read Mode Control',
    SETTINGS_SECTION_EXACT_PATHS: 'Correspondência Exata de Caminho',
    SETTINGS_SECTION_REGEX_BETA: 'Correspondência de Caminho por Regex (BETA)',
    SETTINGS_SECTION_BEHAVIOR: 'Comportamento',
    SETTINGS_SECTION_FEEDBACK_DEBUG: 'Feedback e Depuração',

    // Gerenciamento de Lista de Caminhos Exatos
    SETTINGS_DEFAULT_FILES_EXACT_TITLE: 'Arquivos Somente Leitura Padrão (Caminhos Exatos)',
    SETTINGS_DEFAULT_FILES_EXACT_DESC: 'Os arquivos listados aqui serão abertos no modo somente leitura por padrão. Usa correspondência exata de caminho.',
    SETTINGS_DEFAULT_FILES_EXACT_PLACEHOLDER: 'Digite o caminho do arquivo (ex: Notas/MeuArquivo.md)',
	SETTINGS_DEFAULT_FOLDERS_EXACT_TITLE: "Pastas Somente Leitura Padrão (Caminhos Exatos)",
	SETTINGS_DEFAULT_FOLDERS_EXACT_DESC: "Todas as notas dentro destas pastas (e subpastas) serão abertas no modo somente leitura padrão. Usa correspondência exata de caminho.",
	SETTINGS_DEFAULT_FOLDERS_EXACT_PLACEHOLDER: "Digite o caminho da pasta (ex: Projetos/Ativos)",

    SETTINGS_STRICT_FILES_EXACT_TITLE: 'Arquivos Somente Leitura Estrito (Caminhos Exatos)',
    SETTINGS_STRICT_FILES_EXACT_DESC: 'Os arquivos listados aqui serão forçados para o modo somente leitura. Usa correspondência exata de caminho.',
    SETTINGS_STRICT_FILES_EXACT_PLACEHOLDER: 'Digite o caminho do arquivo (ex: Modelos/Protegido.md)',

    SETTINGS_STRICT_FOLDERS_EXACT_TITLE: 'Pastas Somente Leitura Estrito (Caminhos Exatos)',
    SETTINGS_STRICT_FOLDERS_EXACT_DESC: 'Todas as notas nestas pastas (e subpastas) serão forçadas para o modo somente leitura estrito. Usa correspondência exata de caminho.',
    SETTINGS_STRICT_FOLDERS_EXACT_PLACEHOLDER: 'Digite o caminho da pasta (ex: Arquivos/2023)',

    // Gerenciamento de Lista de Caminhos por Regex
    SETTINGS_ENABLE_REGEX_TITLE: 'Habilitar Correspondência Regex (BETA)',
    SETTINGS_ENABLE_REGEX_DESC_PART1: 'Habilitar a correspondência de caminhos de arquivo com expressões regulares. Esta é uma funcionalidade BETA. ',
    SETTINGS_ENABLE_REGEX_DESC_PART2: 'Use com cautela: ',
    SETTINGS_ENABLE_REGEX_DESC_PART3: 'padrões regex inválidos podem causar erros ou comportamento inesperado. A correspondência Regex é verificada APÓS as correspondências exatas de pastas/arquivos.',

    SETTINGS_DEFAULT_REGEX_TITLE: 'Somente Leitura Padrão (Padrões Regex)',
    SETTINGS_DEFAULT_REGEX_DESC: 'Caminhos de arquivo que correspondam a qualquer padrão regex aqui serão abertos no modo somente leitura padrão. Um padrão regex JavaScript por linha (sem barras).',
    SETTINGS_DEFAULT_REGEX_PLACEHOLDER: 'Digite um padrão regex (ex: ^Diario/\\d{4}-\\d{2}-\\d{2}\\.md$)',

    SETTINGS_STRICT_REGEX_TITLE: 'Somente Leitura Estrito (Padrões Regex)',
    SETTINGS_STRICT_REGEX_DESC: 'Caminhos de arquivo que correspondam a qualquer padrão regex aqui serão forçados para o modo somente leitura estrito. Um padrão regex JavaScript por linha (sem barras).',
    SETTINGS_STRICT_REGEX_PLACEHOLDER: 'Digite um padrão regex (ex: ^Modelos/.*)',

    // UI de Gerenciamento de Lista Compartilhada
    SETTINGS_LIST_UI_ADD_PATH_BUTTON: 'Adicionar Caminho',
    SETTINGS_LIST_UI_ADD_REGEX_BUTTON: 'Adicionar Regex',
    SETTINGS_LIST_UI_REMOVE_TOOLTIP_PREFIX: 'Remover',
    SETTINGS_LIST_UI_EMPTY_FILES: 'Nenhum arquivo adicionado ainda.',
    SETTINGS_LIST_UI_EMPTY_FOLDERS: 'Nenhuma pasta adicionada ainda.',
    SETTINGS_LIST_UI_EMPTY_REGEX: 'Nenhum padrão regex adicionado ainda.',

    // Configuração de Comportamento
    SETTINGS_FORCE_EDIT_UNMANAGED_TITLE: 'Forçar Modo Edição em Notas Não Gerenciadas',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_INTRO: 'Escolha como o plugin lida com notas NÃO listadas nas configurações acima.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_LABEL: 'Problema:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT: ' Ao navegar de uma nota controlada pelo plugin (somente leitura) para uma nota normal ',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_SAME_TAB: 'na mesma aba',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_PROBLEM_TEXT_END: ', o Obsidian pode deixar a nota normal incorretamente presa no modo somente leitura.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_LABEL: 'Opção 1: DESABILITADO (Padrão)',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_LABEL: 'Ação:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_ACTION_TEXT: ' O plugin NUNCA força o modo edição em notas normais.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_LABEL: 'Benefício:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_BENEFIT_TEXT: ' Respeita totalmente as alterações manuais. Se você definir uma nota normal como somente leitura, ela permanece assim.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_LABEL: 'Desvantagem:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION1_DRAWBACK_TEXT: ' O bug de "preso em somente leitura" na mesma aba persiste. Você deve voltar manualmente para o modo edição nesse caso específico.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_LABEL: 'Opção 2: HABILITADO',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_LABEL: 'Ação:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_ACTION_TEXT: ' O plugin força QUALQUER nota normal encontrada no modo somente leitura a voltar para o modo edição ao abri-la.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_LABEL: 'Benefício:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_BENEFIT_TEXT: ' Corrige o bug de "preso em somente leitura" para navegação na mesma aba.',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_LABEL: 'Desvantagem:',
    SETTINGS_FORCE_EDIT_UNMANAGED_DESC_OPTION2_DRAWBACK_TEXT: ' Sobrescreve escolhas manuais. Se você definir uma nota normal como somente leitura, este plugin A FORÇARÁ a voltar para o modo edição quando você a reabrir.',

    // Seção de Feedback e Depuração
    SETTINGS_NOTIFY_ON_MODE_CHANGE_TITLE: 'Notificar Mudança de Modo (BETA)',
    SETTINGS_NOTIFY_ON_MODE_CHANGE_DESC: 'Mostrar uma breve notificação quando o plugin alterar ativamente o modo de visualização de uma nota ao abri-la. Esta é uma funcionalidade BETA.',
    SETTINGS_ENABLE_DEBUG_LOGGING_TITLE: 'Habilitar Registro de Depuração',
    SETTINGS_ENABLE_DEBUG_LOGGING_DESC: 'Mostrar registros detalhados no console do desenvolvedor. Requer reinicialização do Obsidian ou recarregamento do plugin para ter efeito total.',

    // Notificações (de main.ts)
    NOTICE_MODE_CHANGE_PREFIX: "'{fileName}' definido para ",
    NOTICE_MODE_DEFAULT: "Somente Leitura Padrão.",
    NOTICE_MODE_STRICT: "Somente Leitura Estrito.",
    NOTICE_MODE_EDIT: "Modo Edição.",
    NOTICE_INVALID_STRICT_REGEX_PREFIX: "Enhanced Read Mode: Padrão regex estrito inválido: ",
    NOTICE_INVALID_DEFAULT_REGEX_PREFIX: "Enhanced Read Mode: Padrão regex padrão inválido: ",
    NOTICE_NOTIFICATIONS_ENABLED: "Notificações de mudança de modo habilitadas.",

    // Nomes de Comando da Paleta de Comandos (de main.ts)
    COMMAND_TOGGLE_DEFAULT: "Enhanced Read Mode Control: Alternar somente leitura padrão para nota atual",
    COMMAND_TOGGLE_STRICT: "Enhanced Read Mode Control: Alternar somente leitura estrito para nota atual",

    // Notificações de Comando de Alternância (de main.ts)
    NOTICE_TOGGLE_REMOVED_DEFAULT_PREFIX: "Removido '",
    NOTICE_TOGGLE_REMOVED_DEFAULT_SUFFIX: "' da lista de somente leitura padrão.",
    NOTICE_TOGGLE_ADDED_DEFAULT_PREFIX: "Adicionado '",
    NOTICE_TOGGLE_ADDED_DEFAULT_SUFFIX: "' à lista de somente leitura padrão.",
    NOTICE_TOGGLE_REMOVED_STRICT_PREFIX: "Removido '",
    NOTICE_TOGGLE_REMOVED_STRICT_SUFFIX: "' da lista de somente leitura estrito.",
    NOTICE_TOGGLE_ADDED_STRICT_PREFIX: "Adicionado '",
    NOTICE_TOGGLE_ADDED_STRICT_SUFFIX: "' à lista de somente leitura estrito.",
    NOTICE_TOGGLE_MOVED_FROM_STRICT_SUFFIX: " (Removido da lista estrita)",
    NOTICE_TOGGLE_MOVED_FROM_DEFAULT_SUFFIX: " (Removido da lista padrão)",

    // Configuração de Idioma
    SETTINGS_PLUGIN_LANGUAGE_TITLE: "Idioma do Plugin",
    SETTINGS_PLUGIN_LANGUAGE_DESC: "Escolha o idioma de exibição para a interface deste plugin. Requer reinicialização do Obsidian ou recarregamento do plugin para aplicar as alterações.",
};
