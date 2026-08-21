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
  { id: "PROC-101", tipo: "Processos finalísticos", macroprocesso: "Gestão de Convênios", processo: "Celebrar convênio", subprocesso: "Analisar proposta", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SDR", ator: "CGSL", ano: 2025, status: "Monitorado" },
  { id: "PROC-102", tipo: "Processos finalísticos", macroprocesso: "Gestão de Convênios", processo: "Celebrar convênio", subprocesso: "Formalizar termo", classificacao: "Finalístico", prioridade: "CEG", secretaria: "SDR", ator: "SDR/SEDEC", ano: 2025, status: "Monitorado" },
  { id: "PROC-103", tipo: "Processos de governança", macroprocesso: "Gestão Estratégica", processo: "Elaborar plano estratégico", subprocesso: "", classificacao: "Gerenciais", prioridade: "CEG", secretaria: "SE", ator: "CGPRO", ano: 2025, status: "Mapeado" },
  { id: "PROC-104", tipo: "Processos finalísticos", macroprocesso: "Gerir Riscos e Desastres", processo: "Monitorar alertas de risco", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SEDEC", ator: "SEDEC", ano: 2026, status: "Monitorado" },
  { id: "PROC-105", tipo: "Processos de suporte", macroprocesso: "Gestão de Pessoas", processo: "Realizar capacitação de servidores", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: 2025, status: "Mapeado" },
  { id: "PROC-106", tipo: "Processos finalísticos", macroprocesso: "Implantar Estruturas Hídricas", processo: "Vistoriar obras hídricas", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: 2026, status: "Mapeado" },
  { id: "PROC-107", tipo: "Processos de suporte", macroprocesso: "Gestão Orçamentária", processo: "Executar orçamento", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: 2025, status: "Mapeado" },
  { id: "PROC-108", tipo: "Processos finalísticos", macroprocesso: "Administração e Logística", processo: "Gerir patrimônio", subprocesso: "", classificacao: "Finalístico", prioridade: "CEG", secretaria: "SDR", ator: "SDR/SEDEC", ano: 2026, status: "Monitorado" },
  { id: "PROC-109", tipo: "Processos de governança", macroprocesso: "Gestão Estratégica", processo: "Elaborar relatório de gestão", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "CGPRO", ano: 2025, status: "Mapeado" },
  { id: "PROC-110", tipo: "Processos de governança", macroprocesso: "Gestão Estratégica", processo: "Realizar audiência pública", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "CGPP", ano: 2025, status: "Previsto" },
  { id: "PROC-111", tipo: "Processos finalísticos", macroprocesso: "Gerir Riscos e Desastres", processo: "Decretar situação de emergência", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SEDEC", ator: "SEDEC", ano: 2026, status: "Monitorado" },
  { id: "PROC-112", tipo: "Processos de suporte", macroprocesso: "Tecnologia da Informação", processo: "Manter sistemas de informação", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "DTI", ano: 2025, status: "Mapeado" },
  { id: "PROC-113", tipo: "Processos de suporte", macroprocesso: "Tecnologia da Informação", processo: "Desenvolver novos sistemas", subprocesso: "", classificacao: "Suporte", prioridade: "CEG", secretaria: "SE", ator: "DTI", ano: 2026, status: "Previsto" },
  { id: "PROC-114", tipo: "Processos de governança", macroprocesso: "Gestão Estratégica", processo: "Gerir riscos organizacionais", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "GM", ator: "CGPRO", ano: 2025, status: "Mapeado" },
  { id: "PROC-115", tipo: "Processos finalísticos", macroprocesso: "Gestão de Convênios", processo: "Monitorar execução de convênios", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SDR", ator: "SDR/SEDEC", ano: 2026, status: "Monitorado" },
  { id: "PROC-116", tipo: "Processos finalísticos", macroprocesso: "Administração e Logística", processo: "Gerir frota de veículos", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SE", ator: "CGSL", ano: 2025, status: "Mapeado" },
  { id: "PROC-117", tipo: "Processos de suporte", macroprocesso: "Comunicação", processo: "Elaborar material de divulgação", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "GM", ator: "CGPP", ano: 2025, status: "Previsto" },
  { id: "PROC-118", tipo: "Processos finalísticos", macroprocesso: "Implantar Estruturas Hídricas", processo: "Contratar execução de obras", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SNSH", ator: "SNSH", ano: 2026, status: "Monitorado" },
  { id: "PROC-119", tipo: "Processos finalísticos", macroprocesso: "Gerir Riscos e Desastres", processo: "Coordenar resposta a desastres", subprocesso: "", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SEDEC", ator: "SEDEC", ano: 2026, status: "Monitorado" },
  { id: "PROC-120", tipo: "Processos de suporte", macroprocesso: "Gestão de Pessoas", processo: "Conduzir processo seletivo", subprocesso: "", classificacao: "Suporte", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: 2025, status: "Mapeado" },
  { id: "PROC-126", tipo: "Processos finalísticos", macroprocesso: "Administração e Logística", processo: "Realizar Contratações", subprocesso: "Planejar contratação", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2026, status: "Monitorado" },
  { id: "PROC-127", tipo: "Processos finalísticos", macroprocesso: "Administração e Logística", processo: "Realizar Contratações", subprocesso: "Realizar compra direta", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2026, status: "Monitorado" },
  { id: "PROC-128", tipo: "Processos finalísticos", macroprocesso: "Administração e Logística", processo: "Realizar Contratações", subprocesso: "Selecionar fornecedor por pregão", classificacao: "Finalístico", prioridade: "PEI", secretaria: "SE", ator: "CGSL", ano: 2026, status: "Monitorado" },
  { id: "PROC-129", tipo: "Processos de governança", macroprocesso: "Gerir Riscos e Desastres", processo: "Inclusão de município — Operação Carro Pipa", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SEDEC", ator: "SEDEC", ano: 2025, status: "Mapeado" },
  { id: "PROC-130", tipo: "Processos de governança", macroprocesso: "Gestão Estratégica", processo: "Realizar instrução processual", subprocesso: "", classificacao: "Gerenciais", prioridade: "Não prioritário", secretaria: "SE", ator: "CGPRO", ano: 2025, status: "Mapeado" },
  { id: "PROC-131", tipo: "Processos finalísticos", macroprocesso: "Implantar Estruturas Hídricas", processo: "Realizar licitação de obras hídricas", subprocesso: "", classificacao: "Finalístico", prioridade: "Não prioritário", secretaria: "SNSH", ator: "SNSH", ano: null, status: "Previsto" },
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
