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
  { id: "PROC-001", tipo: "Processos finalísticos - sedec", macroprocesso: "Gerir riscos e desastres", processo: "Acionar protocolo de resposta a desastres", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: null, status: "Previsto" },
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
  "PROC-009": "Este processo integra as ações de Integridade do Ministério e atende às diretrizes da CGU para estruturar, implementar e monitorar práticas que previnam riscos éticos na Administração Pública. Envolve a análise de situações em que fatores pessoais, financeiros, familiares ou políticos possam comprometer a imparcialidade do servidor, conforme a definição de conflito de interesses da Lei nº 12.813/2013, utilizando o sistema SeCI para consultas ou autorizações relativas a atividades privadas. Também abrange medidas de prevenção ao nepotismo, evitando favorecimentos baseados em vínculos de parentesco e garantindo o cumprimento do princípio da impessoalidade. O fluxo descrito busca assegurar conformidade normativa, transparência e integridade institucional, devendo ser atualizado sempre que houver mudanças legais ou necessidade de aprimoramento das rotinas de trabalho.",
  "PROC-010": "Este processo integra as ações de Integridade do Ministério e atende às diretrizes da CGU para estruturar, implementar e monitorar práticas que previnam riscos éticos na Administração Pública. Envolve a análise de situações em que fatores pessoais, financeiros, familiares ou políticos possam comprometer a imparcialidade do servidor, conforme a definição de conflito de interesses da Lei nº 12.813/2013, utilizando o sistema SeCI para consultas ou autorizações relativas a atividades privadas. Também abrange medidas de prevenção ao nepotismo, evitando favorecimentos baseados em vínculos de parentesco e garantindo o cumprimento do princípio da impessoalidade. O fluxo descrito busca assegurar conformidade normativa, transparência e integridade institucional, devendo ser atualizado sempre que houver mudanças legais ou necessidade de aprimoramento das rotinas de trabalho.",
  "PROC-011": "A Prestação de Contas é um processo obrigatório para toda pessoa física ou jurídica, pública ou privada, que utilize, arrecade, guarde, gerencie ou administre recursos, bens e valores públicos, ou pelos quais a União responda. Esse processo consiste na demonstração, pelos beneficiários de recursos federais oriundos de transferências voluntárias ou obrigatórias, dos resultados alcançados com a aplicação dos recursos recebidos. A responsabilidade pela elaboração da prestação de contas é do gestor em exercício na data definida para sua apresentação, independentemente de ter sido o signatário do instrumento. Na ausência dessa apresentação, compete ao gestor sucessor adotar as providências legais cabíveis, incluindo, quando necessário, a instauração de Tomada de Contas Especial, conforme a jurisprudência do Tribunal de Contas da União. No âmbito do MIDR, a Coordenação-Geral de Prestação de Contas e Tomada de Contas Especial (CGPC) é responsável pelo acompanhamento, análise financeira e verificação da regularidade das prestações de contas, assegurando a correta aplicação dos recursos públicos e o resguardo do patrimônio da União.",
  "PROC-023": "A avaliação de desempenho é um instrumento de gestão que contribui para a melhoria dos resultados institucionais e individuais, articulando planejamento, definição de metas e pactuação de compromissos entre servidores, chefias e equipes. O processo integra desempenho institucional e individual por meio do desdobramento das metas e da análise das competências demonstradas nas atividades realizadas, comparando o desempenho alcançado com o planejado. Além de orientar boas práticas e estimular o desenvolvimento do servidor, seus indicadores permitem identificar gargalos organizacionais, aprimorar métricas, subsidiar decisões gerenciais, apoiar critérios para gratificações e orientar revisões no planejamento estratégico e nas políticas de carreira. Este processo serve como referência para que as unidades identifiquem as atividades, os agentes envolvidos e suas responsabilidades na condução da avaliação.",
  "PROC-026": "O contrato de repasse é o instrumento utilizado pelas secretarias finalísticas do Ministério para transferir recursos aos entes federativos, em alinhamento às políticas públicas e à missão institucional de promover o desenvolvimento regional e reduzir desigualdades. Conforme a Portaria Interministerial nº 424/2016, trata-se de um instrumento administrativo por meio do qual a transferência financeira ocorre via instituição financeira pública que atua como mandatária da União. Este processo consolida normas e procedimentos a serem seguidos desde a celebração do contrato — etapa em que as partes firmam o acordo e avaliam o objeto proposto — até o acompanhamento da execução, quando o Ministério monitora, por meio da mandatária, o cumprimento físico das metas e etapas do projeto. A elaboração deste fluxo contou com a participação dos atores envolvidos e deve ser atualizada sempre que houver alterações relevantes nas rotinas ou na legislação aplicável.",
  "PROC-027": "O contrato de repasse é o instrumento utilizado pelas secretarias finalísticas do Ministério para transferir recursos aos entes federativos, em alinhamento às políticas públicas e à missão institucional de promover o desenvolvimento regional e reduzir desigualdades. Conforme a Portaria Interministerial nº 424/2016, trata-se de um instrumento administrativo por meio do qual a transferência financeira ocorre via instituição financeira pública que atua como mandatária da União. Este processo consolida normas e procedimentos a serem seguidos desde a celebração do contrato — etapa em que as partes firmam o acordo e avaliam o objeto proposto — até o acompanhamento da execução, quando o Ministério monitora, por meio da mandatária, o cumprimento físico das metas e etapas do projeto. A elaboração deste fluxo contou com a participação dos atores envolvidos e deve ser atualizada sempre que houver alterações relevantes nas rotinas ou na legislação aplicável.",
  "PROC-028": "O território brasileiro, marcado por ampla diversidade geográfica, populacional e econômica, enfrenta ao longo dos anos uma variedade de desastres naturais e tecnológicos, recorrentes ou resultantes de ações humanas, que frequentemente exigem apoio técnico, operacional e financeiro da União. Este processo apresenta o fluxo de coordenação do Sistema Federal de Proteção e Defesa Civil (SIFDEC), abrangendo tanto a mobilização dos órgãos a partir da emissão de alertas de probabilidade de desastre quanto a governança diante de eventos súbitos ou de grande magnitude, cuja repercussão demanda ações articuladas para apoiar os entes federados na resposta aos danos e prejuízos provocados.",
  "PROC-038": "Este processo orienta a tramitação das demandas encaminhadas por órgãos de controle, órgãos de defesa do Estado e instituições essenciais à função jurisdicional que possuem competência legal para emitir recomendações à administração pública, quando recebidas no âmbito do MIDR. Cabe ao Ministério garantir respostas tempestivas e completas, assegurando a prestação de contas e a transparência sobre assuntos de sua competência. Assim, o fluxo apresentado busca padronizar os procedimentos para disponibilização das informações solicitadas, promovendo maior efetividade e consistência nas respostas emitidas.",
  "PROC-042": "O Projeto de Lei Orçamentária Anual (PLOA) é o instrumento que estima as receitas e fixa as despesas para o exercício seguinte, orientando a aplicação eficiente e responsável dos recursos públicos e a gestão fiscal do Ministério da Integração e do Desenvolvimento Regional. Este painel apresenta o processo "Elaborar PLOA – Fase Qualitativa", contemplando o fluxo do processo, o detalhamento das atividades, a legislação aplicável, os indicadores utilizados e o diagnóstico de riscos, em conformidade com as diretrizes da Secretaria de Orçamento Federal, apoiando a tomada de decisão e o alinhamento às políticas públicas.",
  "PROC-043": "A Administração Pública Federal busca continuamente modernizar-se e aprimorar a eficiência e a transparência no gasto público, e o Plano de Contratações Anual (PCA) consolida as demandas do órgão para o exercício seguinte, atendendo ao Decreto nº 10.947/2022 e orientando tanto o mercado fornecedor quanto o planejamento institucional. Sua elaboração visa alinhar contratações ao planejamento estratégico e demais instrumentos de governança, subsidiar a construção das leis orçamentárias, evitar o fracionamento de despesas, aprimorar a gestão das contratações e ampliar a transparência dos gastos públicos. A normatização do processo é essencial para garantir prazos, definir atores e responsabilidades, uniformizar procedimentos, assegurar o patrocínio da alta administração e sistematizar os fluxos envolvidos.",
  "PROC-045": "A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) estabelece regras para o tratamento de dados pessoais, com o propósito de proteger direitos fundamentais e garantir privacidade, exigindo que a Administração Pública mantenha registro de todas as operações realizadas com esses dados. Em alinhamento a essa obrigação, a Secretaria de Governo Digital do MGI publicou o Guia de Elaboração de Inventário de Dados Pessoais, orientando boas práticas de privacidade e segurança da informação. No âmbito do Ministério, a Ouvidoria, em parceria com a DIGEC, estruturou o passo a passo para a elaboração do Inventário de Dados Pessoais, consolidado neste processo, que orienta unidades e agentes envolvidos. O fluxo deve ser periodicamente revisado sempre que houver mudanças legais ou necessidade de aperfeiçoar as rotinas, garantindo que as atividades reflitam com fidelidade a execução do trabalho.",
  "PROC-049": "A prestação de contas, exigida pelo Art. 70 da Constituição Federal, assegura transparência na gestão dos recursos públicos, permitindo avaliar a legalidade, legitimidade, economicidade e os impactos das ações governamentais. O Relatório de Gestão Integrado consolida informações contábeis, financeiras, orçamentárias, operacionais e patrimoniais, oferecendo uma visão sistêmica do desempenho e da conformidade da gestão durante o exercício financeiro. Elaborado anualmente e disponibilizado ao Tribunal de Contas da União, o documento também permanece acessível ao público por período mínimo de cinco anos, cumprindo seu papel de comunicação entre governo e sociedade. Este processo organiza as etapas e atividades necessárias para sua elaboração, devendo ser atualizado sempre que houver mudanças legais ou necessidade de aprimoramento, garantindo que o fluxo reflita com fidelidade como o relatório é construído até sua publicação.",
  "PROC-063": "A gestão patrimonial envolve o controle dos bens permanentes e intangíveis do Ministério, desde o recebimento até a baixa, garantindo uso eficiente, conservação e segurança dos ativos públicos. Por impactar diretamente a qualidade dos serviços prestados e a correta aplicação dos recursos do contribuinte, requer rigor no acompanhamento de tombamento, registro, guarda, movimentação, preservação, incorporação, baixa e inventário. Este processo consolida o fluxo de atividades e responsabilidades relacionadas à administração dos bens patrimoniais, assegurando organização, controle e conformidade com as normas vigentes. Alterações legais ou necessidades de aprimoramento devem resultar na revisão do fluxo, de modo que represente fielmente a execução das rotinas patrimoniais no Ministério.",
  "PROC-064": "A gestão patrimonial envolve o controle dos bens permanentes e intangíveis do Ministério, desde o recebimento até a baixa, garantindo uso eficiente, conservação e segurança dos ativos públicos. Por impactar diretamente a qualidade dos serviços prestados e a correta aplicação dos recursos do contribuinte, requer rigor no acompanhamento de tombamento, registro, guarda, movimentação, preservação, incorporação, baixa e inventário. Este processo consolida o fluxo de atividades e responsabilidades relacionadas à administração dos bens patrimoniais, assegurando organização, controle e conformidade com as normas vigentes. Alterações legais ou necessidades de aprimoramento devem resultar na revisão do fluxo, de modo que represente fielmente a execução das rotinas patrimoniais no Ministério.",
  "PROC-065": "A gestão patrimonial envolve o controle dos bens permanentes e intangíveis do Ministério, desde o recebimento até a baixa, garantindo uso eficiente, conservação e segurança dos ativos públicos. Por impactar diretamente a qualidade dos serviços prestados e a correta aplicação dos recursos do contribuinte, requer rigor no acompanhamento de tombamento, registro, guarda, movimentação, preservação, incorporação, baixa e inventário. Este processo consolida o fluxo de atividades e responsabilidades relacionadas à administração dos bens patrimoniais, assegurando organização, controle e conformidade com as normas vigentes. Alterações legais ou necessidades de aprimoramento devem resultar na revisão do fluxo, de modo que represente fielmente a execução das rotinas patrimoniais no Ministério.",
  "PROC-067": "A descentralização de recursos federais ocorre por meio de convênios, instrumentos administrativos que formalizam o acordo entre o Ministério e os entes federativos para execução de ações alinhadas às políticas públicas e à missão institucional de promover o desenvolvimento sustentável e reduzir desigualdades regionais. Além da transferência dos recursos, cabe à União verificar sua correta aplicação no objeto pactuado, garantindo o interesse público. O processo envolve três etapas: a formalização, que inclui avaliação da proposta, aprovação do plano de trabalho, análise do projeto básico e assinatura do instrumento; o acompanhamento, que consiste no monitoramento das metas e etapas de execução sob responsabilidade do ente recebedor; e o encerramento, quando ocorre a prestação de contas e a verificação técnica e financeira da execução. Este processo consolida normas e procedimentos que orientam todas as fases de gestão dos convênios no âmbito do Ministério.",
  "PROC-068": "A descentralização de recursos federais ocorre por meio de convênios, instrumentos administrativos que formalizam o acordo entre o Ministério e os entes federativos para execução de ações alinhadas às políticas públicas e à missão institucional de promover o desenvolvimento sustentável e reduzir desigualdades regionais. Além da transferência dos recursos, cabe à União verificar sua correta aplicação no objeto pactuado, garantindo o interesse público. O processo envolve três etapas: a formalização, que inclui avaliação da proposta, aprovação do plano de trabalho, análise do projeto básico e assinatura do instrumento; o acompanhamento, que consiste no monitoramento das metas e etapas de execução sob responsabilidade do ente recebedor; e o encerramento, quando ocorre a prestação de contas e a verificação técnica e financeira da execução. Este processo consolida normas e procedimentos que orientam todas as fases de gestão dos convênios no âmbito do Ministério.",
  "PROC-069": "A descentralização de recursos federais ocorre por meio de convênios, instrumentos administrativos que formalizam o acordo entre o Ministério e os entes federativos para execução de ações alinhadas às políticas públicas e à missão institucional de promover o desenvolvimento sustentável e reduzir desigualdades regionais. Além da transferência dos recursos, cabe à União verificar sua correta aplicação no objeto pactuado, garantindo o interesse público. O processo envolve três etapas: a formalização, que inclui avaliação da proposta, aprovação do plano de trabalho, análise do projeto básico e assinatura do instrumento; o acompanhamento, que consiste no monitoramento das metas e etapas de execução sob responsabilidade do ente recebedor; e o encerramento, quando ocorre a prestação de contas e a verificação técnica e financeira da execução. Este processo consolida normas e procedimentos que orientam todas as fases de gestão dos convênios no âmbito do Ministério.",
  "PROC-070": "A descentralização de recursos federais ocorre por meio de convênios, instrumentos administrativos que formalizam o acordo entre o Ministério e os entes federativos para execução de ações alinhadas às políticas públicas e à missão institucional de promover o desenvolvimento sustentável e reduzir desigualdades regionais. Além da transferência dos recursos, cabe à União verificar sua correta aplicação no objeto pactuado, garantindo o interesse público. O processo envolve três etapas: a formalização, que inclui avaliação da proposta, aprovação do plano de trabalho, análise do projeto básico e assinatura do instrumento; o acompanhamento, que consiste no monitoramento das metas e etapas de execução sob responsabilidade do ente recebedor; e o encerramento, quando ocorre a prestação de contas e a verificação técnica e financeira da execução. Este processo consolida normas e procedimentos que orientam todas as fases de gestão dos convênios no âmbito do Ministério.",
  "PROC-073": "A Administração Pública utiliza seu patrimônio — composto por bens, valores e equipamentos — para viabilizar políticas e atender às necessidades da sociedade, sendo essencial manter controles patrimoniais eficazes que assegurem planejamento, economia e conservação dos recursos públicos. A gestão patrimonial depende de registros atualizados de entrada, movimentação e saída dos bens, responsabilidade compartilhada entre a unidade de patrimônio e todos os servidores, que devem zelar pelos materiais sob sua guarda. No âmbito dos equipamentos de informática, este processo reúne as etapas de fornecimento, movimentação e devolução, desde a verificação de disponibilidade e entrega, até alterações de localização e recolhimento ao almoxarifado. O fluxo apresentado, alinhado à norma vigente, padroniza procedimentos e fortalece a segurança e a clareza na gestão desses ativos no Ministério.",
  "PROC-074": "A Administração Pública utiliza seu patrimônio — composto por bens, valores e equipamentos — para viabilizar políticas e atender às necessidades da sociedade, sendo essencial manter controles patrimoniais eficazes que assegurem planejamento, economia e conservação dos recursos públicos. A gestão patrimonial depende de registros atualizados de entrada, movimentação e saída dos bens, responsabilidade compartilhada entre a unidade de patrimônio e todos os servidores, que devem zelar pelos materiais sob sua guarda. No âmbito dos equipamentos de informática, este processo reúne as etapas de fornecimento, movimentação e devolução, desde a verificação de disponibilidade e entrega, até alterações de localização e recolhimento ao almoxarifado. O fluxo apresentado, alinhado à norma vigente, padroniza procedimentos e fortalece a segurança e a clareza na gestão desses ativos no Ministério.",
  "PROC-077": "A Região Integrada de Desenvolvimento (RIDE) conta com o Conselho Administrativo da Região Integrada do Distrito Federal e Entorno (COARIDE), criado pela Lei Complementar nº 94/1998 para coordenar ações entre os entes federados, promover o desenvolvimento integrado e reduzir desigualdades regionais. Suas atribuições incluem aprovar e supervisionar planos, programas e projetos, além de integrar e unificar serviços públicos de interesse comum. Diante da necessidade de padronizar e aprimorar a realização das reuniões do colegiado, este processo apresenta o fluxo das atividades, a legislação aplicável, as formas de comunicação utilizadas e as oportunidades de melhoria, oferecendo orientações claras para a execução uniforme das etapas. Qualquer alteração nas rotinas deverá ser atualizada e formalizada em nova versão.",
  "PROC-078": "O Decreto nº 9.203, de 22 de novembro de 2017, estabelece, em seu artigo 7º, que cabe à alta administração dos órgãos e entidades implementar e manter mecanismos, instâncias e práticas de governança, em conformidade com os princípios e diretrizes definidos no referido Decreto. Nesse contexto, por meio da Portaria MIDR nº 3.344, de 26 de outubro de 2023, foi instituído o Comitê Estratégico de Governança – CEG do Ministério da Integração e do Desenvolvimento Regional, instância de caráter consultivo e deliberativo, com a finalidade de assessorar o Ministro na execução da política de governança da administração pública federal. O CEG é assessorado pela Comissão Técnica do Comitê Estratégico de Governança – CT-CEG, e a Diretoria de Gestão Estratégica exerce a função de secretaria-executiva do Comitê.",
  "PROC-079": "O Decreto nº 9.203, de 22 de novembro de 2017, estabelece que cabe à alta administração implementar mecanismos de governança, incluindo formas de acompanhamento de resultados, soluções para melhoria do desempenho institucional e instrumentos que promovam decisões fundamentadas em evidências. Nesse contexto, a Portaria MIDR nº 1.087, de 4 de abril de 2025, instituiu o Comitê de Governança Digital, Segurança da Informação e Proteção de Dados Pessoais do MIDR (CGDSP-MIDR), responsável por deliberar sobre ações de governo digital, uso de recursos de tecnologia da informação e comunicação e segurança da informação. O artigo 2º, §8º, define que a unidade de Tecnologia da Informação atuará como secretaria-executiva do Comitê.",
  "PROC-080": "Com o intuito de viabilizar a formulação de propostas e a execução das políticas públicas do Governo Federal, as Superintendências do Desenvolvimento da Amazônia (SUDAM), do Desenvolvimento do Nordeste (SUDENE) e do Desenvolvimento do Centro-Oeste (SUDECO) contam com seus respectivos Conselhos Deliberativos (Condeis), órgãos de administração colegiada presididos pelo Ministro de Estado da Integração e do Desenvolvimento Regional. Torna-se imprescindível que o processo de realização dessas reuniões seja uniformizado, a fim de resolver ou mitigar problemas relatados pelas Secretarias-Executivas dos Conselhos e pelas Secretarias Nacionais da estrutura do Ministério. Sua construção contou com a colaboração dos atores envolvidos no processo e reflete, de forma detalhada, como ele deve ser executado, devendo eventuais alterações ser oficializadas em nova versão do conjunto de procedimentos.",
  "PROC-081": "A Prestação de Contas é um processo obrigatório para toda pessoa física ou jurídica, pública ou privada, que utilize, arrecade, guarde, gerencie ou administre recursos, bens e valores públicos, ou pelos quais a União responda. Esse processo consiste na demonstração, pelos beneficiários de recursos federais oriundos de transferências voluntárias ou obrigatórias, dos resultados alcançados com a aplicação dos recursos recebidos. No âmbito do MIDR, a Coordenação-Geral de Prestação de Contas e Tomada de Contas Especial (CGPC) é responsável pelo acompanhamento, análise financeira e verificação da regularidade das prestações de contas, assegurando a correta aplicação dos recursos públicos e o resguardo do patrimônio da União.",
  "PROC-092": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-093": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-094": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-095": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-096": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-097": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-098": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-099": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-100": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-101": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-102": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-103": "O processo de gestão contratual compreende as atividades destinadas a verificar o cumprimento dos resultados previstos pela Administração Pública, assegurar a regularidade das obrigações fiscais, previdenciárias e trabalhistas nas contratações de mão de obra continuada e apoiar a instrução processual para repactuações, alterações, reequilíbrios, prorrogações, pagamentos, sanções e encerramentos contratuais, conforme o art. 39 da Instrução Normativa nº 05/2017. A fiscalização do contrato consiste em acompanhar a execução dos serviços e a alocação dos recursos necessários, tarefa realizada por representante designado pela Administração. Ao gestor cabe coordenar as quatro vertentes da fiscalização — técnica, administrativa, setorial e de satisfação do usuário — além de conduzir a instrução dos procedimentos contratuais ordinários e extraordinários.",
  "PROC-104": "O Ministério do Desenvolvimento Regional é responsável por políticas voltadas ao desenvolvimento nacional, incluindo a Política Nacional de Proteção e Defesa Civil. A Secretaria Nacional de Proteção e Defesa Civil (Sedec) apoia os entes federativos na prevenção de riscos, mitigação de desastres e execução de ações de resposta e recuperação. Para fortalecer essa atuação, o Decreto nº 10.689/2021 instituiu o Grupo de Apoio a Desastres (GADE), coordenado pelo Centro Nacional de Gerenciamento de Riscos e Desastres (Cenad). O GADE pode ser acionado pela Sedec ou por solicitação dos entes federativos, sendo composto por agentes de proteção e defesa civil, voluntários e especialistas com experiência mínima de dois anos na área.",
  "PROC-112": "O Ministério da Integração e do Desenvolvimento Regional vem implantando a cultura de gestão de processos para conhecer, documentar, planejar, gerenciar e avaliar os processos de trabalho, garantindo o alcance dos resultados institucionais. Para isso, é essencial priorizar processos alinhados ao PEI e à Cadeia de Valor, selecionando aqueles que, quando desenhados ou aprimorados, contribuam efetivamente para a estratégia. Como tempo e recursos são limitados, torna-se inviável mapear todos os processos, sendo necessário focar nos que mais influenciam os objetivos estratégicos ou apresentam problemas críticos que comprometem o desempenho organizacional. A alta liderança deve conduzir essa priorização, identificando processos a partir dos macroprocessos da Cadeia de Valor.",
  "PROC-113": "O Programa de Gestão e Desempenho (PGD), instituído no âmbito da Administração Pública Federal pelo Decreto nº 11.072/2022 e regulamentado pela IN SGP/ME nº 65/2020, estabelece diretrizes para o desenvolvimento e a mensuração das atividades dos participantes, com foco em resultados e na qualidade dos serviços prestados à sociedade. Entre seus principais benefícios estão a redução de gastos públicos, a retenção de talentos, o estímulo à inovação, a diminuição de afastamentos por saúde e a melhoria da qualidade de vida dos servidores. O PGD representa uma mudança significativa no modelo tradicional de gestão pública, exigindo capacitação de gestores e equipes para o alinhamento de processos, práticas de feedback, transparência nas entregas e coerência com os objetivos institucionais.",
  "PROC-114": "O Programa de Gestão e Desempenho (PGD), instituído no âmbito da Administração Pública Federal pelo Decreto nº 11.072/2022 e regulamentado pela IN SGP/ME nº 65/2020, estabelece diretrizes para o desenvolvimento e a mensuração das atividades dos participantes, com foco em resultados e na qualidade dos serviços prestados à sociedade. Entre seus principais benefícios estão a redução de gastos públicos, a retenção de talentos, o estímulo à inovação, a diminuição de afastamentos por saúde e a melhoria da qualidade de vida dos servidores. O PGD representa uma mudança significativa no modelo tradicional de gestão pública, exigindo capacitação de gestores e equipes para o alinhamento de processos, práticas de feedback, transparência nas entregas e coerência com os objetivos institucionais.",
  "PROC-117": "A avaliação de desempenho é um instrumento de gestão essencial para aprimorar os resultados das equipes e dos servidores, exigindo atenção a todas as suas etapas — desde o planejamento das metas alinhadas aos objetivos estratégicos até a elaboração dos planos de trabalho e a pactuação dos compromissos entre chefia, servidor e equipe. Um aspecto central da avaliação é a vinculação entre desempenho institucional e individual, realizada por meio do desdobramento das metas intermediárias e individuais no plano de trabalho. De caráter somativo, a avaliação compara o desempenho alcançado com o planejado, considerando tanto resultados institucionais quanto individuais, além de aferir fatores que refletem as competências demonstradas pelo servidor no exercício de suas atividades.",
  "PROC-118": "A avaliação de desempenho é um instrumento de gestão essencial para aprimorar os resultados das equipes e dos servidores, exigindo atenção a todas as suas etapas — desde o planejamento das metas alinhadas aos objetivos estratégicos até a elaboração dos planos de trabalho e a pactuação dos compromissos entre chefia, servidor e equipe. Um aspecto central da avaliação é a vinculação entre desempenho institucional e individual, realizada por meio do desdobramento das metas intermediárias e individuais no plano de trabalho. De caráter somativo, a avaliação compara o desempenho alcançado com o planejado, considerando tanto resultados institucionais quanto individuais, além de aferir fatores que refletem as competências demonstradas pelo servidor no exercício de suas atividades.",
  "PROC-123": "O Acordo de Cooperação Técnica Internacional (ACT) é o instrumento utilizado para formalizar a cooperação entre órgãos e entidades da Administração Pública, ou entre estes e entidades privadas, com ou sem fins lucrativos, quando houver interesse comum na execução de programas, projetos ou eventos, sem repasse de recursos financeiros entre os participantes. Sua execução é regulamentada pelo Decreto nº 5.151, de 22 de julho de 2004. No Ministério da Integração e do Desenvolvimento Regional, os ACTs podem ser celebrados por diferentes unidades, conforme o objeto e a competência de cada área, configurando um processo de trabalho estratégico para a missão institucional do Ministério.",
  "PROC-124": "A constante melhoria dos sistemas de governança e gestão das aquisições públicas é essencial, dada sua forte relação com a geração de resultados para a sociedade. A padronização de procedimentos, o monitoramento do desempenho e a avaliação contínua das etapas de contratação são fundamentais para fortalecer a governança e garantir a boa aplicação dos recursos públicos. A governança nas contratações envolve gestão de riscos, controles internos, seleção da proposta mais vantajosa, incentivo à inovação, promoção de um ambiente íntegro e alinhamento ao planejamento estratégico e às leis orçamentárias. Este manual apresenta o processo de contratação dividido em planejamento, seleção de fornecedor e formalização.",
  "PROC-125": "A constante melhoria dos sistemas de governança e gestão das aquisições públicas é essencial, dada sua forte relação com a geração de resultados para a sociedade. A padronização de procedimentos, o monitoramento do desempenho e a avaliação contínua das etapas de contratação são fundamentais para fortalecer a governança e garantir a boa aplicação dos recursos públicos. A governança nas contratações envolve gestão de riscos, controles internos, seleção da proposta mais vantajosa, incentivo à inovação, promoção de um ambiente íntegro e alinhamento ao planejamento estratégico e às leis orçamentárias. Este manual apresenta o processo de contratação dividido em planejamento, seleção de fornecedor e formalização.",
  "PROC-126": "A constante melhoria dos sistemas de governança e gestão das aquisições públicas é essencial, dada sua forte relação com a geração de resultados para a sociedade. A padronização de procedimentos, o monitoramento do desempenho e a avaliação contínua das etapas de contratação são fundamentais para fortalecer a governança e garantir a boa aplicação dos recursos públicos. A governança nas contratações envolve gestão de riscos, controles internos, seleção da proposta mais vantajosa, incentivo à inovação, promoção de um ambiente íntegro e alinhamento ao planejamento estratégico e às leis orçamentárias. Este manual apresenta o processo de contratação dividido em planejamento, seleção de fornecedor e formalização.",
  "PROC-127": "A constante melhoria dos sistemas de governança e gestão das aquisições públicas é essencial, dada sua forte relação com a geração de resultados para a sociedade. A padronização de procedimentos, o monitoramento do desempenho e a avaliação contínua das etapas de contratação são fundamentais para fortalecer a governança e garantir a boa aplicação dos recursos públicos. A governança nas contratações envolve gestão de riscos, controles internos, seleção da proposta mais vantajosa, incentivo à inovação, promoção de um ambiente íntegro e alinhamento ao planejamento estratégico e às leis orçamentárias. Este manual apresenta o processo de contratação dividido em planejamento, seleção de fornecedor e formalização.",
  "PROC-128": "A constante melhoria dos sistemas de governança e gestão das aquisições públicas é essencial, dada sua forte relação com a geração de resultados para a sociedade. A padronização de procedimentos, o monitoramento do desempenho e a avaliação contínua das etapas de contratação são fundamentais para fortalecer a governança e garantir a boa aplicação dos recursos públicos. A governança nas contratações envolve gestão de riscos, controles internos, seleção da proposta mais vantajosa, incentivo à inovação, promoção de um ambiente íntegro e alinhamento ao planejamento estratégico e às leis orçamentárias. Este manual apresenta o processo de contratação dividido em planejamento, seleção de fornecedor e formalização.",
  "PROC-130": "Este Manual Operacional reúne o desenho do processo, o conjunto de atividades e respectivos descritivos adotados pelo Ministério da Integração e do Desenvolvimento Regional nas tratativas de instrução processual para assinatura, pelo Ministro de Estado, das minutas de Resolução oriundas das reuniões dos Conselhos Deliberativos do Desenvolvimento – CONDEL. Criados por lei, os Conselhos Deliberativos do Desenvolvimento são órgãos de administração colegiada e instâncias de deliberação superior das regiões Centro-Oeste (SUDECO), Amazônia (SUDAM) e Nordeste (SUDENE). Atualmente, a Coordenação-Geral de Governança e Processos (CGPRO) exerce a função de análise e instrução processual da documentação encaminhada pelas Superintendências.",
  "PROC-132": "O mapeamento de processos é uma ferramenta gerencial que permite visualizar todas as etapas dos processos de trabalho, possibilitando compreender melhor as atividades e suas intercorrências para estudar formas de aprimorá-las. Com esse objetivo, contribui diretamente para o cumprimento da missão do Ministério da Integração e do Desenvolvimento Regional. No Ministério, a metodologia de Gestão de Processos utilizada como base para o estudo, aperfeiçoamento e transformação dos processos organizacionais foi desenvolvida considerando as referências mais modernas da área, especialmente o BPM – Business Process Management. A Metodologia de Gestão de Processos do MIDR foi aprovada pelo Comitê Estratégico de Governança – CEG, em reunião ordinária realizada em 30 de novembro de 2023.",
  "PROC-133": "O mapeamento de processos é uma ferramenta gerencial que permite visualizar todas as etapas dos processos de trabalho, possibilitando compreender melhor as atividades e suas intercorrências para estudar formas de aprimorá-las. Com esse objetivo, contribui diretamente para o cumprimento da missão do Ministério da Integração e do Desenvolvimento Regional. No Ministério, a metodologia de Gestão de Processos utilizada como base para o estudo, aperfeiçoamento e transformação dos processos organizacionais foi desenvolvida considerando as referências mais modernas da área, especialmente o BPM – Business Process Management. A Metodologia de Gestão de Processos do MIDR foi aprovada pelo Comitê Estratégico de Governança – CEG, em reunião ordinária realizada em 30 de novembro de 2023.",
  "PROC-134": "A Prestação de Contas é obrigatória para qualquer pessoa física ou jurídica que utilize, arrecade, gerencie ou administre recursos públicos. É o momento em que os beneficiários dos recursos federais demonstram ao órgão repassador a correta aplicação dos valores recebidos e os resultados alcançados. Sua elaboração é responsabilidade do gestor em exercício na data prevista para a entrega, cabendo ao sucessor apresentar as contas não prestadas pelo antecessor ou adotar as medidas legais necessárias, incluindo a instauração de Tomada de Contas Especial, conforme entendimento do TCU. No MIDR, a Coordenação-Geral de Prestação de Contas e Tomada de Contas Especial – CGPC é responsável pelo monitoramento das entregas e pela análise financeira dos instrumentos de repasse.",
  "PROC-135": "A Corregedoria-Geral do MIDR é responsável pela prevenção e repressão de ilícitos administrativos cometidos por servidores públicos e pela responsabilização de empresas, sendo essencial para garantir a efetividade e a probidade das políticas públicas da Pasta. Para cumprir essas funções, desenvolve atividades relacionadas ao direito administrativo disciplinar, planejamento e assessoramento, coordenando, executando e supervisionando procedimentos correcionais que, por vezes, envolvem grande complexidade, múltiplas etapas e diversos participantes. A Corregedoria-Geral, com apoio da CGPRO/DIGEC/SE, elaborou o presente mapeamento dos processos correcionais, com o objetivo de orientar servidores e a gestão quanto às principais atividades do órgão.",
  "PROC-136": "A Corregedoria-Geral do MIDR é responsável pela prevenção e repressão de ilícitos administrativos cometidos por servidores públicos e pela responsabilização de empresas, sendo essencial para garantir a efetividade e a probidade das políticas públicas da Pasta. Para cumprir essas funções, desenvolve atividades relacionadas ao direito administrativo disciplinar, planejamento e assessoramento, coordenando, executando e supervisionando procedimentos correcionais que, por vezes, envolvem grande complexidade, múltiplas etapas e diversos participantes. A Corregedoria-Geral, com apoio da CGPRO/DIGEC/SE, elaborou o presente mapeamento dos processos correcionais, com o objetivo de orientar servidores e a gestão quanto às principais atividades do órgão.",
  "PROC-137": "A Corregedoria-Geral do MIDR é responsável pela prevenção e repressão de ilícitos administrativos cometidos por servidores públicos e pela responsabilização de empresas, sendo essencial para garantir a efetividade e a probidade das políticas públicas da Pasta. Para cumprir essas funções, desenvolve atividades relacionadas ao direito administrativo disciplinar, planejamento e assessoramento, coordenando, executando e supervisionando procedimentos correcionais que, por vezes, envolvem grande complexidade, múltiplas etapas e diversos participantes. A Corregedoria-Geral, com apoio da CGPRO/DIGEC/SE, elaborou o presente mapeamento dos processos correcionais, com o objetivo de orientar servidores e a gestão quanto às principais atividades do órgão.",
  "PROC-138": "A Corregedoria-Geral do MIDR é responsável pela prevenção e repressão de ilícitos administrativos cometidos por servidores públicos e pela responsabilização de empresas, sendo essencial para garantir a efetividade e a probidade das políticas públicas da Pasta. Para cumprir essas funções, desenvolve atividades relacionadas ao direito administrativo disciplinar, planejamento e assessoramento, coordenando, executando e supervisionando procedimentos correcionais que, por vezes, envolvem grande complexidade, múltiplas etapas e diversos participantes. A Corregedoria-Geral, com apoio da CGPRO/DIGEC/SE, elaborou o presente mapeamento dos processos correcionais, com o objetivo de orientar servidores e a gestão quanto às principais atividades do órgão.",
  "PROC-139": "A Corregedoria-Geral do MIDR é responsável pela prevenção e repressão de ilícitos administrativos cometidos por servidores públicos e pela responsabilização de empresas, sendo essencial para garantir a efetividade e a probidade das políticas públicas da Pasta. Para cumprir essas funções, desenvolve atividades relacionadas ao direito administrativo disciplinar, planejamento e assessoramento, coordenando, executando e supervisionando procedimentos correcionais que, por vezes, envolvem grande complexidade, múltiplas etapas e diversos participantes. A Corregedoria-Geral, com apoio da CGPRO/DIGEC/SE, elaborou o presente mapeamento dos processos correcionais, com o objetivo de orientar servidores e a gestão quanto às principais atividades do órgão.",
  "PROC-140": "A Corregedoria-Geral do MIDR é responsável pela prevenção e repressão de ilícitos administrativos cometidos por servidores públicos e pela responsabilização de empresas, sendo essencial para garantir a efetividade e a probidade das políticas públicas da Pasta. Para cumprir essas funções, desenvolve atividades relacionadas ao direito administrativo disciplinar, planejamento e assessoramento, coordenando, executando e supervisionando procedimentos correcionais que, por vezes, envolvem grande complexidade, múltiplas etapas e diversos participantes. A Corregedoria-Geral, com apoio da CGPRO/DIGEC/SE, elaborou o presente mapeamento dos processos correcionais, com o objetivo de orientar servidores e a gestão quanto às principais atividades do órgão.",
  "PROC-142": "Os Decretos nº 91.800/1985 e nº 1.387/1995 regulam o afastamento do país de servidores da Administração Pública Federal para capacitações, missões oficiais, participação em eventos e representações, exigindo autorização ministerial e podendo ocorrer com ônus, ônus limitado ou sem ônus. Esses afastamentos devem estar alinhados às políticas públicas sob responsabilidade do Ministério, visando ao aprimoramento da gestão e à otimização da atuação dos servidores. Assim, é fundamental que sejam solicitados apenas afastamentos estritamente necessários e compatíveis com as competências do MIDR e de suas entidades vinculadas. Este manual estabelece os procedimentos para viabilizar tais afastamentos, assegurando maior agilidade das unidades envolvidas, segurança no processo decisório e melhor utilização dos recursos públicos.",
  "PROC-145": "O Ministério da Integração e do Desenvolvimento Regional é responsável por políticas públicas voltadas ao desenvolvimento regional, urbano, hídrico, irrigação, defesa civil e ordenamento territorial. A Ouvidoria, subordinada ao Gabinete do Ministro, atua com imparcialidade no recebimento, análise e tratamento de manifestações referentes aos serviços e políticas do Ministério, sendo o canal oficial para denúncias, reclamações, sugestões, elogios e solicitações de providências, conforme normas legais vigentes. As manifestações são registradas exclusivamente pelo Fala.BR, sistema seguro da Controladoria-Geral da União, que assegura sigilo e proteção de dados pessoais, inclusive permitindo denúncias anônimas.",
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
 // ── GOVERNANÇA ESTRATÉGICA ──────────────────────────────────────────
  { source: "PROC-078", target: "PROC-112", type: "sequential",    label: "delibera priorização" },
  { source: "PROC-112", target: "PROC-085", type: "sequential",    label: "orienta mapeamento" },
  { source: "PROC-085", target: "PROC-086", type: "sequential",    label: "habilita monitoramento" },
  { source: "PROC-086", target: "PROC-049", type: "sequential",    label: "alimenta relatório" },
  { source: "PROC-084", target: "PROC-130", type: "sequential",    label: "instrui" },
  { source: "PROC-130", target: "PROC-080", type: "administrative",label: "subsidia Condel" },
  { source: "PROC-078", target: "PROC-080", type: "administrative",label: "pauta agenda" },
  { source: "PROC-079", target: "PROC-078", type: "administrative",label: "apoia TI" },
  { source: "PROC-077", target: "PROC-059", type: "administrative",label: "integra colegiados" },
  { source: "PROC-075", target: "PROC-042", type: "sequential",    label: "orienta PLOA" },
  { source: "PROC-042", target: "PROC-037", type: "sequential",    label: "fixa dotação" },
  { source: "PROC-037", target: "PROC-036", type: "sequential",    label: "executa" },
  { source: "PROC-061", target: "PROC-049", type: "support",       label: "informa custos" },
  { source: "PROC-062", target: "PROC-049", type: "support",       label: "informa estratégia" },
  { source: "PROC-035", target: "PROC-029", type: "sequential",    label: "orienta estrutura" },
  { source: "PROC-029", target: "PROC-075", type: "sequential",    label: "viabiliza planejamento" },
  { source: "PROC-132", target: "PROC-133", type: "sequential",    label: "mapeia → monitora" },
  { source: "PROC-133", target: "PROC-086", type: "sequential",    label: "retroalimenta" },

  // ── INTEGRIDADE E CONTROLE ──────────────────────────────────────────
  { source: "PROC-005", target: "PROC-038", type: "sequential",    label: "registra demanda" },
  { source: "PROC-115", target: "PROC-116", type: "sequential",    label: "estrutura integridade" },
  { source: "PROC-116", target: "PROC-058", type: "sequential",    label: "promove transparência" },
  { source: "PROC-058", target: "PROC-146", type: "sequential",    label: "verifica ativa/passiva" },
  { source: "PROC-145", target: "PROC-137", type: "sequential",    label: "encaminha PAR" },
  { source: "PROC-145", target: "PROC-138", type: "sequential",    label: "encaminha PAD" },
  { source: "PROC-009", target: "PROC-137", type: "sequential",    label: "detecta conflito" },
  { source: "PROC-135", target: "PROC-136", type: "sequential",    label: "recurso" },
  { source: "PROC-137", target: "PROC-139", type: "sequential",    label: "revisão PAD" },
  { source: "PROC-138", target: "PROC-140", type: "sequential",    label: "TAC" },
  { source: "PROC-004", target: "PROC-109", type: "sequential",    label: "monitora parlamentar" },
  { source: "PROC-019", target: "PROC-004", type: "support",       label: "auxilia" },
  { source: "PROC-123", target: "PROC-059", type: "support",       label: "amplia colegiados" },
  { source: "PROC-045", target: "PROC-088", type: "administrative",label: "orienta LGPD-TI" },

  // ── COMUNICAÇÃO ─────────────────────────────────────────────────────
  { source: "PROC-039", target: "PROC-072", type: "sequential",    label: "estrutura canais" },
  { source: "PROC-072", target: "PROC-052", type: "sequential",    label: "captura informação" },
  { source: "PROC-017", target: "PROC-016", type: "administrative",label: "direciona eventos" },
  { source: "PROC-052", target: "PROC-017", type: "support",       label: "fornece conteúdo" },

  // ── PLANEJAMENTO REGIONAL – SDR ─────────────────────────────────────
  { source: "PROC-055", target: "PROC-047", type: "sequential",    label: "orienta plano" },
  { source: "PROC-047", target: "PROC-056", type: "sequential",    label: "formula políticas" },
  { source: "PROC-048", target: "PROC-056", type: "administrative",label: "diretriz legal" },
  { source: "PROC-056", target: "PROC-081", type: "sequential",    label: "viabiliza transferências" },
  { source: "PROC-012", target: "PROC-013", type: "support",       label: "apoia integração" },
  { source: "PROC-053", target: "PROC-012", type: "sequential",    label: "estrutura assistência" },
  { source: "PROC-054", target: "PROC-012", type: "support",       label: "sistema informação" },
  { source: "PROC-106", target: "PROC-055", type: "support",       label: "rotas integração" },

  // ── GERIR RISCOS E DESASTRES – SEDEC ───────────────────────────────
  { source: "PROC-108", target: "PROC-050", type: "sequential",    label: "monitora → alerta" },
  { source: "PROC-050", target: "PROC-051", type: "sequential",    label: "define prontidão" },
  { source: "PROC-051", target: "PROC-001", type: "sequential",    label: "aciona protocolo" },
  { source: "PROC-001", target: "PROC-028", type: "sequential",    label: "coordena SIFDEC" },
  { source: "PROC-028", target: "PROC-141", type: "sequential",    label: "reconhece emergência" },
  { source: "PROC-141", target: "PROC-104", type: "sequential",    label: "aciona GADE" },
  { source: "PROC-104", target: "PROC-105", type: "sequential",    label: "operacionaliza GADE" },
  { source: "PROC-141", target: "PROC-129", type: "sequential",    label: "habilita carro-pipa" },
  { source: "PROC-014", target: "PROC-028", type: "support",       label: "prevenção obras" },
  { source: "PROC-057", target: "PROC-028", type: "support",       label: "fortalece SINPDEC" },

  // ── ESTRUTURAS HÍDRICAS – SNSH ──────────────────────────────────────
  { source: "PROC-046", target: "PROC-018", type: "sequential",    label: "atualiza projetos" },
  { source: "PROC-018", target: "PROC-131", type: "sequential",    label: "licita obras" },
  { source: "PROC-131", target: "PROC-003", type: "sequential",    label: "acompanha execução" },
  { source: "PROC-003", target: "PROC-110", type: "sequential",    label: "opera PISF" },
  { source: "PROC-003", target: "PROC-144", type: "sequential",    label: "transfere patrimônio" },
  { source: "PROC-015", target: "PROC-032", type: "sequential",    label: "revitaliza bacias" },
  { source: "PROC-032", target: "PROC-033", type: "sequential",    label: "ações bacias" },
  { source: "PROC-033", target: "PROC-111", type: "sequential",    label: "preside CNRH" },
  { source: "PROC-041", target: "PROC-076", type: "sequential",    label: "desenvolve PPIs" },

  // ── FUNDOS REGIONAIS – SNFI ─────────────────────────────────────────
  { source: "PROC-020", target: "PROC-021", type: "sequential",    label: "diretriz → programação" },
  { source: "PROC-021", target: "PROC-022", type: "sequential",    label: "avalia relatório" },
  { source: "PROC-022", target: "PROC-107", type: "sequential",    label: "monitora aplicação" },
  { source: "PROC-121", target: "PROC-020", type: "administrative",label: "critérios sustentabilidade" },
  { source: "PROC-044", target: "PROC-089", type: "sequential",    label: "elabora → gere SEP" },
  { source: "PROC-119", target: "PROC-044", type: "sequential",    label: "arranjo regional → editais" },
  { source: "PROC-122", target: "PROC-044", type: "administrative",label: "sustentabilidade projetos" },

  // ── GERENCIAR TRANSFERÊNCIAS DE RECURSOS ────────────────────────────
  { source: "PROC-081", target: "PROC-002", type: "sequential",    label: "acompanha instrumentos" },
  { source: "PROC-081", target: "PROC-011", type: "sequential",    label: "analisa prestação" },
  { source: "PROC-068", target: "PROC-069", type: "sequential",    label: "análise → celebração" },
  { source: "PROC-069", target: "PROC-067", type: "sequential",    label: "celebra → executa" },
  { source: "PROC-067", target: "PROC-070", type: "sequential",    label: "executa → presta contas" },
  { source: "PROC-027", target: "PROC-026", type: "sequential",    label: "celebra → acompanha" },
  { source: "PROC-081", target: "PROC-067", type: "administrative",label: "enquadra convênio" },
  { source: "PROC-081", target: "PROC-027", type: "administrative",label: "enquadra repasse" },
  { source: "PROC-011", target: "PROC-070", type: "administrative",label: "valida PC" },

  // ── GESTÃO CONTRATUAL ───────────────────────────────────────────────
  { source: "PROC-100", target: "PROC-093", type: "sequential",    label: "fiscaliza bens" },
  { source: "PROC-100", target: "PROC-096", type: "sequential",    label: "fiscaliza escopo" },
  { source: "PROC-100", target: "PROC-097", type: "sequential",    label: "fiscaliza demanda" },
  { source: "PROC-100", target: "PROC-098", type: "sequential",    label: "fiscaliza continuados" },
  { source: "PROC-100", target: "PROC-099", type: "sequential",    label: "fiscaliza DEMO" },
  { source: "PROC-095", target: "PROC-101", type: "sequential",    label: "altera → prorroga" },
  { source: "PROC-101", target: "PROC-102", type: "sequential",    label: "prorroga → repactua" },
  { source: "PROC-092", target: "PROC-095", type: "sequential",    label: "aplica sanção" },
  { source: "PROC-094", target: "PROC-103", type: "sequential",    label: "encerra → rescinde" },

  // ── REALIZAR CONTRATAÇÕES ───────────────────────────────────────────
  { source: "PROC-043", target: "PROC-126", type: "sequential",    label: "PCA → planejar" },
  { source: "PROC-126", target: "PROC-127", type: "sequential",    label: "compra direta" },
  { source: "PROC-126", target: "PROC-128", type: "sequential",    label: "pregão eletrônico" },
  { source: "PROC-127", target: "PROC-125", type: "sequential",    label: "formaliza" },
  { source: "PROC-128", target: "PROC-125", type: "sequential",    label: "formaliza" },
  { source: "PROC-125", target: "PROC-124", type: "sequential",    label: "registra preços" },
  { source: "PROC-125", target: "PROC-100", type: "sequential",    label: "inicia fiscalização" },
  { source: "PROC-037", target: "PROC-126", type: "administrative",label: "viabiliza orçamento" },

  // ── PESSOAS ─────────────────────────────────────────────────────────
  { source: "PROC-087", target: "PROC-008", type: "sequential",    label: "ingresso → movimentação" },
  { source: "PROC-030", target: "PROC-040", type: "sequential",    label: "PDP → competências" },
  { source: "PROC-040", target: "PROC-113", type: "sequential",    label: "competências → PGD" },
  { source: "PROC-113", target: "PROC-114", type: "sequential",    label: "adere → monitora PGD" },
  { source: "PROC-117", target: "PROC-118", type: "sequential",    label: "plano → avaliação" },
  { source: "PROC-118", target: "PROC-023", type: "sequential",    label: "avalia desempenho" },
  { source: "PROC-023", target: "PROC-060", type: "support",       label: "informa folha" },
  { source: "PROC-120", target: "PROC-030", type: "support",       label: "saúde → PDP" },
  { source: "PROC-008", target: "PROC-142", type: "support",       label: "afastamento" },

  // ── TECNOLOGIA DA INFORMAÇÃO ────────────────────────────────────────
  { source: "PROC-082", target: "PROC-091", type: "sequential",    label: "infraestrutura → soluções" },
  { source: "PROC-091", target: "PROC-088", type: "sequential",    label: "soluções → segurança" },
  { source: "PROC-024", target: "PROC-073", type: "sequential",    label: "contrata → fornece" },
  { source: "PROC-073", target: "PROC-074", type: "sequential",    label: "devolve ↔ fornece" },
  { source: "PROC-088", target: "PROC-045", type: "support",       label: "segurança LGPD" },
  { source: "PROC-091", target: "PROC-054", type: "support",       label: "apoia sistema info" },

  // ── ADMINISTRAÇÃO E LOGÍSTICA ───────────────────────────────────────
  { source: "PROC-025", target: "PROC-066", type: "sequential",    label: "contrata → gere" },
  { source: "PROC-066", target: "PROC-094", type: "sequential",    label: "contrato → encerra" },
  { source: "PROC-043", target: "PROC-025", type: "sequential",    label: "PCA → contratar" },
  { source: "PROC-007", target: "PROC-063", type: "sequential",    label: "administra → desfaz" },
  { source: "PROC-063", target: "PROC-064", type: "sequential",    label: "desfazimento → inventário" },
  { source: "PROC-064", target: "PROC-065", type: "sequential",    label: "inventário → movimenta" },
  { source: "PROC-006", target: "PROC-043", type: "administrative",label: "acompanha planos" },
  { source: "PROC-071", target: "PROC-084", type: "support",       label: "documenta processos" },
  { source: "PROC-034", target: "PROC-083", type: "support",       label: "passagens → orçamento" },
  { source: "PROC-143", target: "PROC-036", type: "support",       label: "sistemas estruturantes" },

  // ── ORÇAMENTO E FINANÇAS ────────────────────────────────────────────
  { source: "PROC-036", target: "PROC-134", type: "sequential",    label: "executa → presta contas" },
  { source: "PROC-037", target: "PROC-036", type: "sequential",    label: "planejar → executar" },
];

// Node positions for the network graph
export const nodePositions: Record<string, { x: number; y: number }> = {
   // ── GESTÃO ESTRATÉGICA – GM (y=40) ──────────────────────────────────
  "PROC-078": { x: 40,   y: 40  },  // CEG
  "PROC-077": { x: 200,  y: 40  },  // Coaride
  "PROC-079": { x: 360,  y: 40  },  // CGDSP
  "PROC-080": { x: 520,  y: 40  },  // Condel
  "PROC-059": { x: 680,  y: 40  },  // Órgãos colegiados
  "PROC-019": { x: 840,  y: 40  },  // Orçamento parlamentar
  "PROC-004": { x: 1000, y: 40  },  // Tramitações Congresso
  "PROC-109": { x: 1160, y: 40  },  // Demandas parlamentares

  // ── GESTÃO ESTRATÉGICA – SE (y=160) ─────────────────────────────────
  "PROC-075": { x: 40,   y: 160 },  // Instrumentos planejamento
  "PROC-042": { x: 200,  y: 160 },  // PLOA
  "PROC-029": { x: 360,  y: 160 },  // Estrutura regimental
  "PROC-035": { x: 520,  y: 160 },  // Fortalecimento governança
  "PROC-049": { x: 680,  y: 160 },  // Relatório gestão
  "PROC-061": { x: 840,  y: 160 },  // Informações custos
  "PROC-062": { x: 1000, y: 160 },  // Informações estratégicas
  "PROC-112": { x: 1160, y: 160 },  // Priorização de processo

  // ── PROCESSOS ORGANIZACIONAIS / MAPEAMENTO (y=280) ──────────────────
  "PROC-084": { x: 40,   y: 280 },  // Instrução processual
  "PROC-085": { x: 200,  y: 280 },  // Mapeamento
  "PROC-086": { x: 360,  y: 280 },  // Monitoramento
  "PROC-130": { x: 520,  y: 280 },  // Realizar instrução processual
  "PROC-132": { x: 680,  y: 280 },  // Realizar mapeamento
  "PROC-133": { x: 840,  y: 280 },  // Realizar monitoramento

  // ── INTEGRIDADE E CONTROLE (y=400) ──────────────────────────────────
  "PROC-005": { x: 40,   y: 400 },  // Demandas órgãos controle
  "PROC-038": { x: 200,  y: 400 },  // Demandas de controle
  "PROC-009": { x: 360,  y: 400 },  // Conflito interesses
  "PROC-010": { x: 520,  y: 400 },  // Nepotismo
  "PROC-115": { x: 680,  y: 400 },  // Gestão riscos e controles
  "PROC-116": { x: 840,  y: 400 },  // Integridade
  "PROC-058": { x: 1000, y: 400 },  // Transparência accountability
  "PROC-146": { x: 1160, y: 400 },  // Transparência ativa/passiva
  "PROC-045": { x: 1320, y: 400 },  // LGPD inventário
  "PROC-145": { x: 1480, y: 400 },  // Tratar denúncias
  "PROC-123": { x: 1640, y: 400 },  // ACT

  // ── PROCESSOS CORRECIONAIS (y=520) ───────────────────────────────────
  "PROC-135": { x: 40,   y: 520 },  // PAR - reconsideração
  "PROC-136": { x: 200,  y: 520 },  // PAD - recurso
  "PROC-137": { x: 360,  y: 520 },  // PAR - instaurar
  "PROC-138": { x: 520,  y: 520 },  // PAD - instaurar
  "PROC-139": { x: 680,  y: 520 },  // PAD - revisão
  "PROC-140": { x: 840,  y: 520 },  // TAC

  // ── COMUNICAÇÃO (y=640) ──────────────────────────────────────────────
  "PROC-039": { x: 40,   y: 640 },  // Canais comunicação
  "PROC-072": { x: 200,  y: 640 },  // Fluxo informação
  "PROC-052": { x: 360,  y: 640 },  // Captura informações
  "PROC-017": { x: 520,  y: 640 },  // Assessorar dirigentes
  "PROC-016": { x: 680,  y: 640 },  // Assessorar eventos

  // ── PLANEJAMENTO REGIONAL – SDR (y=780) ──────────────────────────────
  "PROC-055": { x: 40,   y: 780 },  // Políticas Desen. Regional
  "PROC-047": { x: 200,  y: 780 },  // Plano desen. regional
  "PROC-048": { x: 360,  y: 780 },  // Portaria diretrizes
  "PROC-056": { x: 520,  y: 780 },  // Formular políticas
  "PROC-106": { x: 680,  y: 780 },  // Rotas de integração
  "PROC-012": { x: 840,  y: 780 },  // Apoiar gestão serviços
  "PROC-013": { x: 1000, y: 780 },  // Apoiar integração regional
  "PROC-053": { x: 1160, y: 780 },  // Estruturar assistência técnica
  "PROC-054": { x: 1320, y: 780 },  // Sistema nacional informações SDR

  // ── GERIR RISCOS E DESASTRES – SEDEC (y=900) ─────────────────────────
  "PROC-108": { x: 40,   y: 900 },  // Monitorar eventos
  "PROC-050": { x: 200,  y: 900 },  // Emitir alertas
  "PROC-051": { x: 360,  y: 900 },  // Níveis prontidão
  "PROC-001": { x: 520,  y: 900 },  // Acionar protocolo
  "PROC-028": { x: 680,  y: 900 },  // Coordenação SIFDEC
  "PROC-141": { x: 840,  y: 900 },  // Reconhecer emergência
  "PROC-104": { x: 1000, y: 900 },  // GADE - acionar
  "PROC-105": { x: 1160, y: 900 },  // GADE - operacionalizar
  "PROC-129": { x: 1320, y: 900 },  // Carro pipa
  "PROC-014": { x: 1480, y: 900 },  // Apoiar obras prevenção
  "PROC-057": { x: 1640, y: 900 },  // Fortalecer SINPDEC

  // ── ESTRUTURAS HÍDRICAS – SNSH (y=1020) ──────────────────────────────
  "PROC-046": { x: 40,   y: 1020 }, // Planejamento anual obras
  "PROC-018": { x: 200,  y: 1020 }, // Atualizar projetos
  "PROC-131": { x: 360,  y: 1020 }, // Realizar licitação
  "PROC-003": { x: 520,  y: 1020 }, // Acompanhar execução empreend.
  "PROC-110": { x: 680,  y: 1020 }, // Operar PISF
  "PROC-144": { x: 840,  y: 1020 }, // Transferir patrimônio

  // ── REVITALIZAÇÃO DE BACIAS / IRRIGAÇÃO – SNSH (y=1140) ──────────────
  "PROC-015": { x: 40,   y: 1140 }, // Articular recursos hídricos
  "PROC-032": { x: 200,  y: 1140 }, // Acesso à água bacias
  "PROC-033": { x: 360,  y: 1140 }, // Ações revitalização bacias
  "PROC-111": { x: 520,  y: 1140 }, // Presidir CNRH
  "PROC-041": { x: 680,  y: 1140 }, // Desenvolver Polos Irrigação
  "PROC-076": { x: 840,  y: 1140 }, // Gerenciar PPIs

  // ── FUNDOS REGIONAIS – SNFI (y=1260) ─────────────────────────────────
  "PROC-020": { x: 40,   y: 1260 }, // Avaliar diretrizes fundos
  "PROC-021": { x: 200,  y: 1260 }, // Avaliar programação financeira
  "PROC-022": { x: 360,  y: 1260 }, // Avaliar relatório circunstâncias
  "PROC-107": { x: 520,  y: 1260 }, // Monitorar aplicação fundos
  "PROC-121": { x: 680,  y: 1260 }, // Sustentabilidade fundos

  // ── PPP E CONCESSÕES – SNFI (y=1380) ─────────────────────────────────
  "PROC-119": { x: 40,   y: 1380 }, // Arranjos regionais
  "PROC-044": { x: 200,  y: 1380 }, // Elaborar estudos editais
  "PROC-089": { x: 360,  y: 1380 }, // Gerir SEP/MIDR
  "PROC-122": { x: 520,  y: 1380 }, // Sustentabilidade projetos

  // ── GERENCIAR TRANSFERÊNCIAS (y=1500) ────────────────────────────────
  "PROC-081": { x: 40,   y: 1500 }, // Gerenciar transferências
  "PROC-002": { x: 200,  y: 1500 }, // Acompanhar instrumentos repasse
  "PROC-011": { x: 360,  y: 1500 }, // Analisar prestação contas

  // ── CONVÊNIOS (y=1620) ────────────────────────────────────────────────
  "PROC-068": { x: 40,   y: 1620 }, // Analisar projeto básico/TR
  "PROC-069": { x: 200,  y: 1620 }, // Celebrar convênio
  "PROC-067": { x: 360,  y: 1620 }, // Acompanhar convênio
  "PROC-070": { x: 520,  y: 1620 }, // Prestação contas convênio

  // ── CONTRATO DE REPASSE (y=1740) ──────────────────────────────────────
  "PROC-027": { x: 40,   y: 1740 }, // Celebrar contrato repasse
  "PROC-026": { x: 200,  y: 1740 }, // Acompanhar contrato repasse

  // ── GESTÃO CONTRATUAL (y=1860) ────────────────────────────────────────
  "PROC-100": { x: 40,   y: 1860 }, // Fiscalização inicial
  "PROC-093": { x: 200,  y: 1860 }, // Fiscalização bens
  "PROC-096": { x: 360,  y: 1860 }, // Fiscalização escopo
  "PROC-097": { x: 520,  y: 1860 }, // Fiscalização demanda
  "PROC-098": { x: 680,  y: 1860 }, // Fiscalização serv. continuados
  "PROC-099": { x: 840,  y: 1860 }, // Fiscalização DEMO
  "PROC-095": { x: 1000, y: 1860 }, // Alteração contratual
  "PROC-101": { x: 1160, y: 1860 }, // Prorrogação contratual
  "PROC-102": { x: 1320, y: 1860 }, // Repactuação contratual
  "PROC-092": { x: 1480, y: 1860 }, // Sanção administrativa
  "PROC-094": { x: 1640, y: 1860 }, // Encerrar contrato
  "PROC-103": { x: 1800, y: 1860 }, // Rescindir contrato

  // ── REALIZAR CONTRATAÇÕES (y=1980) ────────────────────────────────────
  "PROC-126": { x: 40,   y: 1980 }, // Planejar contratação
  "PROC-127": { x: 200,  y: 1980 }, // Compra direta
  "PROC-128": { x: 360,  y: 1980 }, // Pregão eletrônico
  "PROC-125": { x: 520,  y: 1980 }, // Formalizar contratação
  "PROC-124": { x: 680,  y: 1980 }, // Ata registro preços

  // ── SUPORTE – PESSOAS (y=2100) ────────────────────────────────────────
  "PROC-087": { x: 40,   y: 2100 }, // Recrutamento e ingresso
  "PROC-008": { x: 200,  y: 2100 }, // Movimentação funcional
  "PROC-030": { x: 360,  y: 2100 }, // PDP
  "PROC-040": { x: 520,  y: 2100 }, // Desenvolver competências
  "PROC-113": { x: 680,  y: 2100 }, // PGD - aderir
  "PROC-114": { x: 840,  y: 2100 }, // PGD - monitorar
  "PROC-117": { x: 1000, y: 2100 }, // Avaliação desempenho - plano
  "PROC-118": { x: 1160, y: 2100 }, // Avaliação desempenho - realizar
  "PROC-023": { x: 1320, y: 2100 }, // Avaliação de desempenho
  "PROC-060": { x: 1480, y: 2100 }, // Folha de pagamento
  "PROC-120": { x: 1640, y: 2100 }, // Qualidade de vida e saúde
  "PROC-142": { x: 1800, y: 2100 }, // Afastamento do país

  // ── SUPORTE – TECNOLOGIA DA INFORMAÇÃO (y=2220) ───────────────────────
  "PROC-082": { x: 40,   y: 2220 }, // Infraestrutura TI
  "PROC-091": { x: 200,  y: 2220 }, // Soluções e serviços TI
  "PROC-088": { x: 360,  y: 2220 }, // Segurança da informação
  "PROC-024": { x: 520,  y: 2220 }, // Contratar equipamentos
  "PROC-073": { x: 680,  y: 2220 }, // Devolução equipamentos
  "PROC-074": { x: 840,  y: 2220 }, // Fornecimento equipamentos
  "PROC-090": { x: 1000, y: 2220 }, // SiD - Sistema Informação Desastres

  // ── SUPORTE – ADMINISTRAÇÃO E LOGÍSTICA (y=2340) ──────────────────────
  "PROC-043": { x: 40,   y: 2340 }, // PCA
  "PROC-006": { x: 200,  y: 2340 }, // Acompanhar planos
  "PROC-025": { x: 360,  y: 2340 }, // Contratar bens/serviços
  "PROC-066": { x: 520,  y: 2340 }, // Gerenciar contratos gerais
  "PROC-007": { x: 680,  y: 2340 }, // Administrar bens permanentes
  "PROC-063": { x: 840,  y: 2340 }, // Bens patrimoniais - desfazimento
  "PROC-064": { x: 1000, y: 2340 }, // Bens patrimoniais - inventário
  "PROC-065": { x: 1160, y: 2340 }, // Bens patrimoniais - movimentação
  "PROC-071": { x: 1320, y: 2340 }, // Gerenciar documentos
  "PROC-034": { x: 1480, y: 2340 }, // Passagens aéreas
  "PROC-083": { x: 1640, y: 2340 }, // Orçamento Diretoria
  "PROC-143": { x: 1800, y: 2340 }, // Sistemas estruturantes

  // ── SUPORTE – ORÇAMENTO E FINANÇAS (y=2460) ───────────────────────────
  "PROC-037": { x: 40,   y: 2460 }, // Coordenar orçamento e finanças
  "PROC-036": { x: 200,  y: 2460 }, // Gestão contábil e PC
  "PROC-134": { x: 360,  y: 2460 }, // Realizar prestação de contas
};
export function countBy<T>(arr: T[], key: keyof T): { name: string; value: number }[] {
  const map: Record<string, number> = {};
  arr.forEach((item) => {
    const val = String(item[key] ?? "N/A");
    map[val] = (map[val] || 0) + 1;
  });
  return Object.entries(map).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
}
