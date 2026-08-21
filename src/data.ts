export type Process = {
  id: string;
  tipo: string;
  macroprocesso: string;
  processo: string;
  subprocesso: string;
  classificacao: "Finalístico" | "Gerenciais" | "Suporte";
  prioridade: string;
  secretaria: string;
  ator: string;
  ano: number | null;
  status: "Monitorado" | "Mapeado" | "Previsto";
};

export const processes: Process[] = [
  { { id: "PROC-001", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Acionar protocolo de resposta a desastres", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
{ id: "PROC-002", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Acompanhar a execução de instrumentos de repasse", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI/CEG", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: null, status: "Previsto" },
{ id: "PROC-003", tipo: "Processos finalísticos - snsh", macroprocesso: "Implantar estruturas hídricas estratégicas", processo: "Acompanhar a execução do empreendimento", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-004", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Acompanhar as tramitações no Congresso Nacional de interesse do Ministério", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "ASPAR", ano: null, status: "Previsto" },
{ id: "PROC-005", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Acompanhar demandas de órgãos de controle", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AECI", ano: null, status: "Previsto" },
{ id: "PROC-006", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Acompanhar os planos", subprocesso: "", classificacao: "Suporte", prioridade: "CEG", secretaria: "SE", ator: "CGSL", ano: null, status: "Priorizado" },
{ id: "PROC-007", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Administrar bens permanentes e materiais de consumo", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: null, status: "Previsto" },
{ id: "PROC-008", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Administrar movimentação funcional, afastamentos e desligamentos", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: null, status: "Previsto" },
{ id: "PROC-009", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Analisar conflito de interesses e evitar nepotismo", subprocesso: "Analisar conflito de interesses", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AECI/CGGP", ano: 2024, status: "Monitorado" },
{ id: "PROC-010", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Analisar conflito de interesses e evitar nepotismo", subprocesso: "Evitar nepotismo", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AECI/CGGP", ano: 2024, status: "Monitorado" },
{ id: "PROC-011", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Analisar prestação de contas", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI/CEG", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: 2024, status: "Mapeado" },
{ id: "PROC-012", tipo: "Processos gerenciais", macroprocesso: "Fornecer apoio e assistência técnica aos entes federativos e entidades setoriais", processo: "Apoiar a implementação de melhoria da gestão dos serviços básicos", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR", ano: null, status: "Previsto" },
{ id: "PROC-013", tipo: "Processos gerenciais", macroprocesso: "Fornecer apoio e assistência técnica aos entes federativos e entidades setoriais", processo: "Apoiar a integração da atuação regional com o plano nacional", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR", ano: null, status: "Previsto" },
{ id: "PROC-014", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Apoiar projetos e obras de prevenção e mitigação", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
{ id: "PROC-015", tipo: "Processos finalísticos - snsh", macroprocesso: "Gerenciar a revitalização de bacias hidrográficas", processo: "Articular a gestão dos recursos hídricos com a gestão do uso do solo no âmbito de ações de revitalização de bacias hidrográficas", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-016", tipo: "Processos de governança", macroprocesso: "Comunicação", processo: "Assessorar as Unidades no planejamento de eventos institucionais", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AESCOM", ano: null, status: "Previsto" },
{ id: "PROC-017", tipo: "Processos de governança", macroprocesso: "Comunicação", processo: "Assessorar os dirigentes nas ações de comunicação social", subprocesso: "", classificacao: "Gerenciais", prioridade: "CEG", secretaria: "GM", ator: "AESCOM", ano: null, status: "Previsto" },
{ id: "PROC-018", tipo: "Processos finalísticos - snsh", macroprocesso: "Implantar estruturas hídricas estratégicas", processo: "Atualizar projetos de engenharia", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-019", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Auxiliar a gestão do orçamento relacionadas as demandas parlamentares", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "ASPAR", ano: null, status: "Previsto" },
{ id: "PROC-020", tipo: "Processos finalísticos - snfi", macroprocesso: "Estabelecer diretrizes para a destinação dos recursos dos fundos regionais", processo: "Avaliar propostas de diretrizes e prioridades de aplicação", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Previsto" },
{ id: "PROC-021", tipo: "Processos finalísticos - snfi", macroprocesso: "Estabelecer diretrizes para a destinação dos recursos dos fundos regionais", processo: "Avaliar propostas de programação financeira dos fundos constitucionais de financiamento", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Previsto" },
{ id: "PROC-022", tipo: "Processos finalísticos - snfi", macroprocesso: "Estabelecer diretrizes para a destinação dos recursos dos fundos regionais", processo: "Avaliar Relatório de Circunstâncias dos Fundos Constitucionais", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Previsto" },
{ id: "PROC-023", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Avalição de desempenho", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: 2023, status: "Monitorado" },
{ id: "PROC-024", tipo: "Processos de suporte", macroprocesso: "Tecnologia da informação", processo: "Contratar equipamentos", subprocesso: "", classificacao: "Suporte", prioridade: "PEI/CEG", secretaria: "SE", ator: "DTI", ano: null, status: "Priorizado" },
{ id: "PROC-025", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Contratar serviços e bens de necessidade do Ministério", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: null, status: "Previsto" },
{ id: "PROC-026", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Contrato de Repasse", subprocesso: "Acompanhar a execução do contrato de repasse", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: 2022, status: "Monitorado" },
{ id: "PROC-027", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Contrato de Repasse", subprocesso: "Celebrar instrumento de repasse", classificacao: "Finalístico", prioridade: "PEI/CEG", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: 2022, status: "Monitorado" },
{ id: "PROC-028", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Coordenação do sistema federal de proteção e defesa civil", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: 2022, status: "Mapeado" },
{ id: "PROC-029", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Coordenar a elaboração da estrutura regimental do MIDR", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "DIGEC", ano: null, status: "Previsto" },
{ id: "PROC-030", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Coordenar a execução do PDP", subprocesso: "", classificacao: "Suporte", prioridade: "PEI/CEG", secretaria: "SE", ator: "CGGP", ano: null, status: "Previsto" },
{ id: "PROC-031", tipo: "Processos gerenciais", macroprocesso: "Coordenar a elaboração, a implementação, o monitoramento, a avaliação e a revisão de planos nacionais", processo: "Coordenar a implementação da Política Nacional de Irrigação PNI", subprocesso: "", classificacao: "", prioridade: "CEG", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-032", tipo: "Processos finalísticos - snsh", macroprocesso: "Gerenciar a revitalização de bacias hidrográficas", processo: "Coordenar a implementação de ações de acesso à água no âmbito das ações de revitalização de bacias hidrográficas", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-033", tipo: "Processos finalísticos - snsh", macroprocesso: "Gerenciar a revitalização de bacias hidrográficas", processo: "Coordenar a implementação de ações relacionadas a revitalização de bacias hidrográficas", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-034", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Coordenar as atividades de administração", subprocesso: "Requisitar passagens aéreas", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DA", ano: null, status: "Previsto" },
{ id: "PROC-035", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Coordenar o processo de fortalecimento da governança", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: null, status: "Previsto" },
{ id: "PROC-036", tipo: "Processos de suporte", macroprocesso: "Orçamento e finanças", processo: "Coordenar o processo de gestão contábil e prestação de contas", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DIORF", ano: null, status: "Previsto" },
{ id: "PROC-037", tipo: "Processos de suporte", macroprocesso: "Orçamento e finanças", processo: "Coordenar o processo de orçamento e finanças", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DIORF", ano: null, status: "Previsto" },
{ id: "PROC-038", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Demandas de controle", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AECI", ano: 2023, status: "Mapeado" },
{ id: "PROC-039", tipo: "Processos de governança", macroprocesso: "Comunicação", processo: "Desenvolver canais de comunicação interna e externa", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AESCOM", ano: null, status: "Priorizado" },
{ id: "PROC-040", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Desenvolver competências", subprocesso: "", classificacao: "Suporte", prioridade: "PEI", secretaria: "SE", ator: "CGGP", ano: null, status: "Previsto" },
{ id: "PROC-041", tipo: "Processos finalísticos - snsh", macroprocesso: "Promover o desenvolvimento da agricultura irrigada", processo: "Desenvolver Polos de Irrigação", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-042", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Elaborar a etapa qualitativa do PLOA", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPE", ano: 2026, status: "Mapeado" },
{ id: "PROC-043", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Elaborar e monitorar plano de contratação anual - PCA", subprocesso: "", classificacao: "Suporte", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2025, status: "Monitorado" },
{ id: "PROC-044", tipo: "Processos finalísticos - snfi", macroprocesso: "Estruturar projetos de parceria público-privada e concessões", processo: "Elaborar estudos e editais necessários à implementação de projetos de parcerias", subprocesso: "", classificacao: "", prioridade: "PEI", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Priorizado" },
{ id: "PROC-045", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Elaborar Iventário de dados LGPD", subprocesso: "", classificacao: "Gerenciais", prioridade: "PEI", secretaria: "GM", ator: "OUVIDORIA", ano: 2024, status: "Mapeado" },
{ id: "PROC-046", tipo: "Processos finalísticos - snsh", macroprocesso: "Implantar estruturas hídricas estratégicas", processo: "Elaborar planejamento anual para execução de obras", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI/CEG", secretaria: "SNSH", ator: "SNSH", ano: 2024, status: "Mapeado" },
{ id: "PROC-047", tipo: "Processos finalísticos - sdr", macroprocesso: "Coordenar o planejamento regional e a gestão do território", processo: "Elaborar plano de desenvolvimento regional", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR", ano: null, status: "Previsto" },
{ id: "PROC-048", tipo: "Processos finalísticos - sdr", macroprocesso: "Coordenar o planejamento regional e a gestão do território", processo: "Elaborar portaria de diretrizes e orientações gerais", subprocesso: "", classificacao: "Finalístico", prioridade: "CEG", secretaria: "SDR", ator: "SDR", ano: null, status: "Priorizado" },
{ id: "PROC-049", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Elaborar relatório de gestão integrado", subprocesso: "", classificacao: "Gerenciais", prioridade: "PEI/CEG", secretaria: "SE", ator: "CGPRO", ano: 2024, status: "Mapeado" },
{ id: "PROC-050", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Emitir alertas e alarmes", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
{ id: "PROC-051", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Estabelecer níveis de prontidão", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
{ id: "PROC-052", tipo: "Processos de governança", macroprocesso: "Comunicação", processo: "Estabelecer procedimentos de captura de informações e mecanismos de divulgação", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AESCOM", ano: null, status: "Previsto" },
{ id: "PROC-053", tipo: "Processos gerenciais", macroprocesso: "Fornecer apoio e assistência técnica aos entes federativos e entidades setoriais", processo: "Estruturar a promoção de assistência técnica", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR", ano: null, status: "Previsto" },
{ id: "PROC-054", tipo: "Processos gerenciais", macroprocesso: "Gerenciar sistema nacional de informações", processo: "Estruturar o Sistema Nacional de Informações para o Desenvolvimento Regional", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR", ano: null, status: "Previsto" },
{ id: "PROC-055", tipo: "Processos finalísticos - sdr", macroprocesso: "Coordenar o planejamento regional e a gestão do território", processo: "Estruturar Políticas de Desenvolvimento Regional e Gestão do Território", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI/CEG", secretaria: "SDR", ator: "SDR", ano: null, status: "Priorizado" },
{ id: "PROC-056", tipo: "Processos finalísticos - sdr", macroprocesso: "Coordenar o planejamento regional e a gestão do território", processo: "Formular políticas", subprocesso: "", classificacao: "Finalístico", prioridade: "CEG", secretaria: "SE", ator: "SDR", ano: 2025, status: "Mapeado" },
{ id: "PROC-057", tipo: "Processos gerenciais", macroprocesso: "Fornecer apoio e assistência técnica aos entes federativos e entidades setoriais", processo: "Fortalecer o Sistema Nacional de Proteção e Defesa Civil", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
{ id: "PROC-058", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Fortalecer transparência e accountability no Ministério", subprocesso: "", classificacao: "Gerenciais", prioridade: "CEG", secretaria: "GM", ator: "AECI", ano: null, status: "Previsto" },
{ id: "PROC-059", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerenciar a atuação do Ministério em órgãos colegiados", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: null, status: "Previsto" },
{ id: "PROC-060", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Gerenciar a folha de pagamento dos servidores do Ministério", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: null, status: "Previsto" },
{ id: "PROC-061", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerenciar as informações de custos", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: null, status: "Previsto" },
{ id: "PROC-062", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerenciar as informações estratégicas do MIDR", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGIE", ano: null, status: "Previsto" },
{ id: "PROC-063", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Gerenciar bens patrimoniais", subprocesso: "Realizar desfazimento de bens", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: 2023, status: "Mapeado" },
{ id: "PROC-064", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Gerenciar bens patrimoniais", subprocesso: "Realizar inventário", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Mapeado" },
{ id: "PROC-065", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Gerenciar bens patrimoniais", subprocesso: "Realizar movimentação de bens", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: 2025, status: "Mapeado" },
{ id: "PROC-066", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Gerenciar contratos de bens e serviços gerais", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: null, status: "Previsto" },
{ id: "PROC-067", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Gerenciar convênios", subprocesso: "Acompanhar a execução do convênio", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: 2025, status: "Monitorado" },
{ id: "PROC-068", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Gerenciar convênios", subprocesso: "Analisar projeto básico/TR", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: 2025, status: "Monitorado" },
{ id: "PROC-069", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Gerenciar convênios", subprocesso: "Celebrar convênio", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: 2025, status: "Monitorado" },
{ id: "PROC-070", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Gerenciar convênios", subprocesso: "Realizar prestação de contas final", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: 2025, status: "Monitorado" },
{ id: "PROC-071", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Gerenciar documentos", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: null, status: "Previsto" },
{ id: "PROC-072", tipo: "Processos de governança", macroprocesso: "Comunicação", processo: "Gerenciar fluxo de informação", subprocesso: "", classificacao: "Gerenciais", prioridade: "CEG", secretaria: "GM", ator: "AESCOM", ano: null, status: "Priorizado" },
{ id: "PROC-073", tipo: "Processos de suporte", macroprocesso: "Tecnologia da informação", processo: "Gerenciar movimentação de equipamentos de informática", subprocesso: "Devolver equipamentos informática", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DTI", ano: 2023, status: "Monitorado" },
{ id: "PROC-074", tipo: "Processos de suporte", macroprocesso: "Tecnologia da informação", processo: "Gerenciar movimentação de equipamentos de informática", subprocesso: "Fornecer equipamentos de informática", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DTI", ano: 2023, status: "Monitorado" },
{ id: "PROC-075", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerenciar os instrumentos de planejamento no âmbito do MIDR", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPE", ano: null, status: "Previsto" },
{ id: "PROC-076", tipo: "Processos finalísticos - snsh", macroprocesso: "Promover o desenvolvimento da agricultura irrigada", processo: "Gerenciar PPIs", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-077", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerenciar reunião Coaride", subprocesso: "", classificacao: "Gerenciais", prioridade: "PEI", secretaria: "SE", ator: "DIGEC", ano: 2026, status: "Monitorado" },
{ id: "PROC-078", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerenciar reuniões CEG-ordinária/extraordinária", subprocesso: "", classificacao: "Gerenciais", prioridade: "PEI", secretaria: "SE", ator: "CGPRO", ano: 2024, status: "Monitorado" },
{ id: "PROC-079", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerenciar reuniões CGDSP", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "DTI", ano: 2025, status: "Mapeado" },
{ id: "PROC-080", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerenciar reuniões do Condel", subprocesso: "", classificacao: "Gerenciais", prioridade: "PEI", secretaria: "GM", ator: "GM/SE/DIGEC", ano: 2025, status: "Monitorado" },
{ id: "PROC-081", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Gerenciar transferências de recursos", processo: "Gerenciar transferências de recursos", subprocesso: "", classificacao: "Finalístico", prioridade: "CEG", secretaria: "SDR", ator: "SDR/SEDEC/SNSH", ano: 2024, status: "Mapeado" },
{ id: "PROC-082", tipo: "Processos de suporte", macroprocesso: "Tecnologia da informação", processo: "Gerir a infraestrutura do parque tecnológico", subprocesso: "", classificacao: "Suporte", prioridade: "PEI/CEG", secretaria: "SE", ator: "DTI", ano: null, status: "Previsto" },
{ id: "PROC-083", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Gerir orçamento da Diretoria", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DA", ano: null, status: "Previsto" },
{ id: "PROC-084", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerir os processos organizacionais em consonância com as diretrizes estratégicas do MIDR", subprocesso: "Realizar instrução processual", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: null, status: "Previsto" },
{ id: "PROC-085", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerir os processos organizacionais em consonância com as diretrizes estratégicas do MIDR", subprocesso: "Realizar mapeamento", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: null, status: "Previsto" },
{ id: "PROC-086", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Gerir os processos organizacionais em consonância com as diretrizes estratégicas do MIDR", subprocesso: "Realizar monitoramento", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: null, status: "Previsto" },
{ id: "PROC-087", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Gerir recrutamento, seleção e ingresso", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: null, status: "Previsto" },
{ id: "PROC-088", tipo: "Processos de suporte", macroprocesso: "Tecnologia da informação", processo: "Gerir segurança da informação", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DTI", ano: null, status: "Previsto" },
{ id: "PROC-089", tipo: "Processos finalísticos - snfi", macroprocesso: "Estruturar projetos de parceria público-privada e concessões", processo: "Gerir Sistema de Estruturação de Projetos - SEP/MIDR", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Previsto" },
{ id: "PROC-090", tipo: "Processos gerenciais", macroprocesso: "Gerenciar sistema nacional de informações", processo: "Gerir Sistema de Informação de Desastres - SiD", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
{ id: "PROC-091", tipo: "Processos de suporte", macroprocesso: "Tecnologia da informação", processo: "Gerir soluções e serviços de TI", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DTI", ano: null, status: "Previsto" },
{ id: "PROC-092", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Aplicar sanção administrativa", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-093", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar fiscalização de contratos de bens", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-094", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Encerrar instrumento contratual", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-095", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar alteração contratual", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-096", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar fiscalização de contratos por escopo", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-097", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar fiscalização de contratos por demanda", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-098", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar fiscalização de contratos de serviços continuados", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-099", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar fiscalização de contrato de dedicação exclusiva mão-de-obra-demo", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-100", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar fiscalização incial", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-101", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar prorrogação contratual", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-102", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Realizar repactuação contratual", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-103", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Gestão contratual", subprocesso: "Rescindir contrato", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2024, status: "Monitorado" },
{ id: "PROC-104", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Grupo de apoio a desastres - GADE", subprocesso: "Acionar o grupo de apoio a desastres - GADE", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: 2025, status: "Monitorado" },
{ id: "PROC-105", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Grupo de apoio a desastres - GADE", subprocesso: "Operacionalizar o grupo de apoio a desastres - GADE", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
{ id: "PROC-106", tipo: "Processos finalísticos - sdr", macroprocesso: "Estruturar cadeias produtivas regionais", processo: "Implementar Rotas de Integração", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SDR", ator: "SDR", ano: null, status: "Previsto" },
{ id: "PROC-107", tipo: "Processos finalísticos - snfi", macroprocesso: "Estabelecer diretrizes para a destinação dos recursos dos fundos regionais", processo: "Monitorar aplicação dos recursos dos fundos regionais", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Previsto" },
{ id: "PROC-108", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Monitorar eventos adversos", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
{ id: "PROC-109", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Monitorar o tratamento das demandas parlamentares", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AECI/ASPAR", ano: null, status: "Previsto" },
{ id: "PROC-110", tipo: "Processos finalísticos - snsh", macroprocesso: "Implantar estruturas hídricas estratégicas", processo: "Operar e manter a infraestrutura hídrica do PISF", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-111", tipo: "Processos finalísticos - snsh", macroprocesso: "Gerenciar a revitalização de bacias hidrográficas", processo: "Presidir o Conselho Nacional de Recursos Hídricos", subprocesso: "", classificacao: "Finalístico", prioridade: "CEG", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Priorizado" },
{ id: "PROC-112", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Priorização de processo", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: 2023, status: "Mapeado" },
{ id: "PROC-113", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Programa de gestão", subprocesso: "Aderir ao programa de gestão", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: 2023, status: "Monitorado" },
{ id: "PROC-114", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Programa de gestão", subprocesso: "Monitorar programa de gestão", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: 2023, status: "Monitorado" },
{ id: "PROC-115", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Promover a gestão de riscos e controles internos", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AECI", ano: null, status: "Previsto" },
{ id: "PROC-116", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Promover a integridade no Ministério", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AECI", ano: null, status: "Previsto" },
{ id: "PROC-117", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Promover avaliação de desempenho funcional", subprocesso: "Elaborar plano de trabalho", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: 2023, status: "Monitorado" },
{ id: "PROC-118", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Promover avaliação de desempenho funcional", subprocesso: "Realizar avaliação de desempenho", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: 2023, status: "Monitorado" },
{ id: "PROC-119", tipo: "Processos finalísticos - snfi", macroprocesso: "Estruturar projetos de parceria público-privada e concessões", processo: "Promover os melhores arranjos regionais possíveis para projetos de parcerias", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Previsto" },
{ id: "PROC-120", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Promover qualidade de vida e saúde", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: null, status: "Previsto" },
{ id: "PROC-121", tipo: "Processos finalísticos - snfi", macroprocesso: "Estabelecer diretrizes para a destinação dos recursos dos fundos regionais", processo: "Propor a inserção de critérios de sustentabilidade no âmbito das diretrizes e normas dos fundos regionais", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Previsto" },
{ id: "PROC-122", tipo: "Processos finalísticos - snfi", macroprocesso: "Estruturar projetos de parceria público-privada e concessões", processo: "Propor a inserção de critérios de sustentabilidade nos projetos de infraestrutura e políticas públicas", subprocesso: "", classificacao: "", prioridade: "Não prioritário", secretaria: "SNFI", ator: "SNFI", ano: null, status: "Previsto" },
{ id: "PROC-123", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Realizar acordo de cooperação Técnica Internacional - ACT", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "GM/SEDEC/SNSH/SDR/SNFI", ano: 2025, status: "Mapeado" },
{ id: "PROC-124", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Realizar Contratações", subprocesso: "Formalizar ata de registro de preços", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2026, status: "Monitorado" },
{ id: "PROC-125", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Realizar Contratações", subprocesso: "Formalizar contratação", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2026, status: "Monitorado" },
{ id: "PROC-126", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Realizar Contratações", subprocesso: "Planejar contratação", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2026, status: "Monitorado" },
{ id: "PROC-127", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Realizar Contratações", subprocesso: "Realizar compra direta", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2026, status: "Monitorado" },
{ id: "PROC-128", tipo: "Processos finalísticos - sdr/sedec/snsh", macroprocesso: "Administração e logística", processo: "Realizar Contratações", subprocesso: "Selecionar fornecedor por pregão", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2026, status: "Monitorado" },
{ id: "PROC-129", tipo: "Processos de governança", macroprocesso: "Gerir riscos e desastres", processo: "Realizar inclusão de município na operação carro pipa", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: 2025, status: "Mapeado" },
{ id: "PROC-130", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Realizar instrução processual", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: 2025, status: "Mapeado" },
{ id: "PROC-131", tipo: "Processos finalísticos - snsh", macroprocesso: "Implantar estruturas hídricas estratégicas", processo: "Realizar licitação", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-132", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Realizar mapeamento e monitoramento de processos", subprocesso: "Realizar mapeamento de processos", classificacao: "Gerenciais", prioridade: "PEI", secretaria: "SE", ator: "CGPRO", ano: 2024, status: "Monitorado" },
{ id: "PROC-133", tipo: "Processos de governança", macroprocesso: "Gestão estratégica", processo: "Realizar mapeamento e monitoramento de processos", subprocesso: "Realizar monitoramento de processos", classificacao: "Gerenciais", prioridade: "PEI", secretaria: "SE", ator: "CGPRO", ano: 2024, status: "Monitorado" },
{ id: "PROC-134", tipo: "Processos de suporte", macroprocesso: "Orçamento e finanças", processo: "Realizar prestação de contas", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DIORF", ano: 2024, status: "Mapeado" },
{ id: "PROC-135", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Realizar procedimento correcional", subprocesso: "Apresentar pedido de reconsideração - PAR", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CORREGEDFORIA", ano: 2023, status: "Monitorado" },
{ id: "PROC-136", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Realizar procedimento correcional", subprocesso: "Apresentar pedido de recurso/reconsideração - PAD", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CORREGEDFORIA", ano: 2023, status: "Monitorado" },
{ id: "PROC-137", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Realizar procedimento correcional", subprocesso: "Instaurar processo administrativo de responsabilização - PAR", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CORREGEDFORIA", ano: 2023, status: "Monitorado" },
{ id: "PROC-138", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Realizar procedimento correcional", subprocesso: "Instaurar processo administrativo disciplinar - PAD", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CORREGEDFORIA", ano: 2023, status: "Monitorado" },
{ id: "PROC-139", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Realizar procedimento correcional", subprocesso: "Instaurar processo administrativo disciplinar - PAD Revisão", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CORREGEDFORIA", ano: 2023, status: "Monitorado" },
{ id: "PROC-140", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Realizar procedimento correcional", subprocesso: "Celebrar termo de ajustamento de conduta - TAC", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CORREGEDFORIA", ano: 2023, status: "Monitorado" },
{ id: "PROC-141", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Reconhecer situação de emergência ou estado de calamidade pública", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI/CEG", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Priorizado" },
{ id: "PROC-142", tipo: "Processos de suporte", macroprocesso: "Pessoas", processo: "Solicitar afastamento do pais", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGGP", ano: 2023, status: "Monitorado" },
{ id: "PROC-143", tipo: "Processos de suporte", macroprocesso: "Administração e logística", processo: "Supervisionar as atividades relacionadas aos sistemas estruturantes", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DA", ano: null, status: "Previsto" },
{ id: "PROC-144", tipo: "Processos finalísticos - snsh", macroprocesso: "Implantar estruturas hídricas estratégicas", processo: "Transferir patrimônio das obras", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
{ id: "PROC-145", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Tratar denúncias", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "AECI", ano: 2023, status: "Monitorado" },
{ id: "PROC-146", tipo: "Processos de governança", macroprocesso: "Integridade e controle", processo: "Verificar o atendimento da transparência ativa e passiva", subprocesso: "", classificacao: "Gerenciais", prioridade: "CEG", secretaria: "GM", ator: "AECI", ano: null, status: "Previsto" },
];

// Descriptions for the detail panel
export const processDescriptions: Record<string, string> = {
  "PROC-101": "Análise técnica, orçamentária e jurídica das propostas recebidas de entes federativos e entidades para celebração de convênio com o MIDR. Envolve verificação de regularidade do proponente, pertinência do objeto com as políticas do Ministério e disponibilidade de recursos.",
  "PROC-102": "Formalização do instrumento jurídico de convênio entre o MIDR e o ente convenente, compreendendo assinatura, publicação no Diário Oficial da União e registro nos sistemas SICONV/TRANSFEREGOV. Define objeto, metas, cronograma físico-financeiro e responsabilidades das partes.",
  "PROC-103": "Elaboração e revisão periódica do Planejamento Estratégico Institucional do MIDR, definindo objetivos, indicadores e metas alinhados ao Plano Plurianual (PPA). Inclui análise ambiental, mapeamento de stakeholders e integração com os planos nacionais sob responsabilidade do Ministério.",
  "PROC-104": "Monitoramento contínuo de alertas emitidos pelo CEMADEN e órgãos estaduais de defesa civil sobre riscos de desastres naturais e tecnológicos. Envolve análise de dados meteorológicos, verificação de vulnerabilidades municipais e acionamento das equipes de resposta quando necessário.",
  "PROC-105": "Planejamento e execução de ações de capacitação e desenvolvimento de servidores do MIDR, contemplando levantamento de necessidades, elaboração de plano anual de capacitação, contratação de cursos e avaliação de resultados.",
  "PROC-106": "Realização de vistorias técnicas in loco para acompanhamento do andamento físico das obras de infraestrutura hídrica financiadas pelo MIDR, verificando conformidade com projetos, qualidade dos serviços executados e cumprimento do cronograma contratual.",
  "PROC-107": "Acompanhamento e execução da programação orçamentária e financeira do MIDR, incluindo descentralização de créditos, empenho, liquidação e pagamento de despesas, em conformidade com a Lei de Responsabilidade Fiscal e os normativos da STN/SOF.",
  "PROC-108": "Gestão do patrimônio imobiliário e mobiliário do MIDR, compreendendo tombamento, inventário, cessão de uso, manutenção preventiva e corretiva de bens, e alienação de bens considerados inservíveis, conforme normas do SIADS e da STN.",
  "PROC-109": "Elaboração do Relatório Anual de Gestão do MIDR, consolidando informações sobre execução das metas, indicadores de desempenho, gestão de riscos e resultados das auditorias internas, para prestação de contas ao TCU e à sociedade.",
  "PROC-110": "Organização e condução de audiências públicas para participação social na formulação, implementação e avaliação das políticas públicas sob responsabilidade do MIDR, em cumprimento às diretrizes de transparência e controle social.",
  "PROC-111": "Decretação de Situação de Emergência ou Estado de Calamidade Pública em municípios afetados por desastres, mediante análise técnica da SEDEC, reconhecimento federal e habilitação do ente para acesso a recursos extraordinários e medidas de resposta.",
  "PROC-112": "Operação, manutenção e suporte dos sistemas de informação corporativos do MIDR, incluindo controle de acessos, backup, atualização de versões e atendimento ao usuário interno, garantindo a disponibilidade e integridade dos dados institucionais.",
  "PROC-113": "Desenvolvimento de novos sistemas e soluções tecnológicas para apoio às atividades finalísticas e de gestão do MIDR, seguindo metodologias ágeis, padrões de segurança da informação do governo federal e integração com plataformas GOV.BR.",
  "PROC-114": "Identificação, avaliação, tratamento e monitoramento dos riscos estratégicos e operacionais do MIDR, em conformidade com a Instrução Normativa Conjunta MP/CGU nº 01/2016 e as diretrizes do Comitê de Governança, Riscos e Controles.",
  "PROC-115": "Acompanhamento sistemático da execução física e financeira dos convênios e instrumentos similares celebrados pelo MIDR, verificando o cumprimento de metas, analisando prestações de contas parciais e adotando medidas corretivas quando necessário.",
  "PROC-116": "Administração da frota de veículos oficiais do MIDR, incluindo controle de uso, manutenção preventiva e corretiva, abastecimento, renovação e desfazimento de veículos, em conformidade com as normas do SEGES/MGI.",
  "PROC-117": "Criação e produção de materiais de comunicação institucional e de divulgação das políticas e programas do MIDR, incluindo releases, infográficos, vídeos institucionais e conteúdos para redes sociais e portais governamentais.",
  "PROC-118": "Condução dos processos licitatórios para contratação de empresas executoras de obras de infraestrutura hídrica estratégica, incluindo elaboração de edital, análise de propostas, habilitação e adjudicação, em conformidade com a Lei nº 14.133/2021.",
  "PROC-119": "Coordenação das ações de resposta a desastres naturais, articulando órgãos federais, estaduais e municipais para restabelecimento de serviços essenciais, abrigo e assistência humanitária às populações afetadas, com base no SINPDEC.",
  "PROC-120": "Condução de processos seletivos internos para remoção, redistribuição e aproveitamento de servidores no âmbito do MIDR, bem como acompanhamento de concursos públicos e gestão das vagas disponíveis junto ao MGI.",
  "PROC-126": "Planejamento das contratações a serem realizadas pelo MIDR no exercício, incluindo elaboração do Plano de Contratações Anual (PCA), definição de prioridades, previsão orçamentária e alinhamento com as necessidades das unidades demandantes.",
  "PROC-127": "Execução de aquisições de bens e serviços de baixo valor por meio das modalidades de dispensa de licitação previstas na Lei nº 14.133/2021, como compra direta de itens padronizados no mercado, mediante pesquisa de preços e verificação de regularidade fiscal do fornecedor.",
  "PROC-128": "Condução de processo licitatório na modalidade Pregão Eletrônico para seleção do fornecedor mais vantajoso para o MIDR, compreendendo elaboração do Estudo Técnico Preliminar (ETP), Termo de Referência, publicação do edital, sessão de disputa e homologação.",
  "PROC-129": "Análise e instrução dos pedidos de inclusão de municípios na Operação Carro-Pipa, programa de abastecimento emergencial de água potável para populações em situação de vulnerabilidade hídrica nas regiões semiáridas afetadas por estiagem.",
  "PROC-130": "Instrução de processos administrativos no âmbito do MIDR, compreendendo autuação, juntada de documentos, elaboração de despachos e pareceres, tramitação entre unidades e arquivamento, em conformidade com as normas do SGD e da Lei nº 9.784/1999.",
  "PROC-131": "Realização de licitações para contratação de obras de infraestrutura hídrica estratégica, como sistemas de abastecimento, barragens e canais de irrigação, seguindo os ritos da Lei nº 14.133/2021 e as diretrizes do PNRH.",
};

// Value chain structure
export const valueChain = {
  estrategicos: [
    { id: "vc-e1", label: "ESTABELECER ESTRATÉGIAS E DIRETRIZES SETORIAIS INTEGRADAS", macro: "Gestão Estratégica" },
    { id: "vc-e2", label: "COORDENAR A ELABORAÇÃO, IMPLEMENTAÇÃO, MONITORAMENTO E REVISÃO DE PLANOS NACIONAIS", macro: "Gestão Estratégica" },
    { id: "vc-e3", label: "FORNECER APOIO E ASSISTÊNCIA TÉCNICA AOS ENTES FEDERATIVOS E ENTIDADES SETORIAIS", macro: "Gestão de Convênios" },
    { id: "vc-e4", label: "GERENCIAR SISTEMAS NACIONAIS DE INFORMAÇÕES", macro: "Tecnologia da Informação" },
  ],
  gerenciais: [
    { id: "vc-g1", label: "GESTÃO ESTRATÉGICA", macro: "Gestão Estratégica" },
    { id: "vc-g2", label: "INTEGRIDADE E CONTROLE", macro: "Gestão Estratégica" },
    { id: "vc-g3", label: "COMUNICAÇÃO", macro: "Comunicação" },
  ],
  finalisticos: [
    [
      { id: "vc-f1", label: "COORDENAR O PLANEJAMENTO REGIONAL E A GESTÃO DO TERRITÓRIO", macro: "Gestão Estratégica" },
      { id: "vc-f2", label: "IMPLANTAR ESTRUTURAS HÍDRICAS ESTRATÉGICAS", macro: "Implantar Estruturas Hídricas" },
      { id: "vc-f3", label: "PROMOVER O DESENVOLVIMENTO DA AGRICULTURA IRRIGADA", macro: "Implantar Estruturas Hídricas" },
    ],
    [
      { id: "vc-f4", label: "ESTRUTURAR CADEIAS PRODUTIVAS REGIONAIS", macro: "Gestão de Convênios" },
      { id: "vc-f5", label: "GERIR RISCOS E DESASTRES", macro: "Gerir Riscos e Desastres" },
      { id: "vc-f6", label: "GERENCIAR A REVITALIZAÇÃO DE BACIAS HIDROGRÁFICAS", macro: "Implantar Estruturas Hídricas" },
    ],
    [
      { id: "vc-f7", label: "GERENCIAR TRANSFERÊNCIAS DE RECURSOS", macro: "Gestão de Convênios" },
      { id: "vc-f8", label: "ESTABELECER DIRETRIZES PARA DESTINAÇÃO DE RECURSOS DOS FUNDOS REGIONAIS", macro: "Gestão Estratégica" },
      { id: "vc-f9", label: "PROMOVER O DESENVOLVIMENTO DA AGRICULTURA IRRIGADA", macro: "Implantar Estruturas Hídricas" },
    ],
  ],
  suporte: [
    { id: "vc-s1", label: "PESSOAS", macro: "Gestão de Pessoas" },
    { id: "vc-s2", label: "ORÇAMENTO E FINANÇAS", macro: "Gestão Orçamentária" },
    { id: "vc-s3", label: "ADMINISTRAÇÃO E LOGÍSTICA", macro: "Administração e Logística" },
    { id: "vc-s4", label: "TECNOLOGIA DA INFORMAÇÃO", macro: "Tecnologia da Informação" },
  ],
};

// Network edges — logical dependencies between processes
export type NetworkEdge = { source: string; target: string; label?: string; type?: "sequential" | "administrative" | "support" };

export const networkEdges: NetworkEdge[] = [
  // Planejamento → Contratação
  { source: "PROC-103", target: "PROC-130", type: "administrative", label: "subsidia" },
  { source: "PROC-130", target: "PROC-126", type: "sequential", label: "instrui" },
  { source: "PROC-107", target: "PROC-126", type: "administrative", label: "viabiliza" },
  { source: "PROC-126", target: "PROC-127", type: "sequential", label: "executa" },
  { source: "PROC-126", target: "PROC-128", type: "sequential", label: "executa" },
  { source: "PROC-126", target: "PROC-131", type: "sequential", label: "origina" },

  // Obras hídricas
  { source: "PROC-131", target: "PROC-118", type: "sequential", label: "adjudica" },
  { source: "PROC-118", target: "PROC-106", type: "sequential", label: "fiscaliza" },
  { source: "PROC-107", target: "PROC-118", type: "administrative", label: "viabiliza" },

  // Riscos e desastres
  { source: "PROC-104", target: "PROC-111", type: "sequential", label: "aciona" },
  { source: "PROC-111", target: "PROC-119", type: "sequential", label: "mobiliza" },
  { source: "PROC-119", target: "PROC-129", type: "sequential", label: "habilita" },
  { source: "PROC-105", target: "PROC-119", type: "support", label: "capacita equipes" },

  // Convênios
  { source: "PROC-107", target: "PROC-101", type: "administrative", label: "viabiliza" },
  { source: "PROC-101", target: "PROC-102", type: "sequential", label: "aprova" },
  { source: "PROC-102", target: "PROC-115", type: "sequential", label: "monitora" },
  { source: "PROC-115", target: "PROC-108", type: "sequential", label: "registra" },

  // Governança
  { source: "PROC-114", target: "PROC-103", type: "administrative", label: "subsidia" },
  { source: "PROC-103", target: "PROC-109", type: "sequential", label: "gera" },
  { source: "PROC-103", target: "PROC-110", type: "administrative", label: "pauta" },
  { source: "PROC-117", target: "PROC-110", type: "support", label: "divulga" },

  // TI
  { source: "PROC-112", target: "PROC-115", type: "support", label: "apoia sistemas" },
  { source: "PROC-113", target: "PROC-112", type: "sequential", label: "substitui" },
  { source: "PROC-112", target: "PROC-104", type: "support", label: "suporta monitoramento" },

  // Pessoas
  { source: "PROC-120", target: "PROC-105", type: "sequential", label: "encaminha" },
  { source: "PROC-116", target: "PROC-119", type: "support", label: "logística" },
];

// Node positions for the network graph
export const nodePositions: Record<string, { x: number; y: number }> = {
  // Gestão Estratégica / Governança — left column
  "PROC-114": { x: 40,  y: 30 },
  "PROC-103": { x: 40,  y: 190 },
  "PROC-109": { x: 40,  y: 350 },
  "PROC-110": { x: 40,  y: 510 },

  // Instrução / Orçamento — second column
  "PROC-130": { x: 250, y: 110 },
  "PROC-107": { x: 250, y: 270 },
  "PROC-117": { x: 250, y: 430 },

  // Contratações — center column
  "PROC-126": { x: 460, y: 110 },
  "PROC-127": { x: 360, y: 270 },
  "PROC-128": { x: 560, y: 270 },
  "PROC-116": { x: 460, y: 430 },

  // Convênios — right-center
  "PROC-101": { x: 700, y: 30 },
  "PROC-102": { x: 700, y: 190 },
  "PROC-115": { x: 700, y: 350 },
  "PROC-108": { x: 700, y: 510 },

  // Obras hídricas — right
  "PROC-131": { x: 930, y: 30 },
  "PROC-118": { x: 930, y: 190 },
  "PROC-106": { x: 930, y: 350 },

  // Riscos e desastres — far right
  "PROC-104": { x: 1140, y: 30 },
  "PROC-111": { x: 1140, y: 190 },
  "PROC-119": { x: 1140, y: 350 },
  "PROC-129": { x: 1140, y: 510 },

  // Suporte — bottom row
  "PROC-120": { x: 120, y: 700 },
  "PROC-105": { x: 320, y: 700 },
  "PROC-112": { x: 520, y: 700 },
  "PROC-113": { x: 720, y: 700 },
};

export function countBy<T>(arr: T[], key: keyof T): { name: string; value: number }[] {
  const map: Record<string, number> = {};
  arr.forEach((item) => {
    const val = String(item[key] ?? "N/A");
    map[val] = (map[val] || 0) + 1;
  });
  return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
}
