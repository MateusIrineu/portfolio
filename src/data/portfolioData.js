export const PROFILE = {
  name: 'Mateus Irineu',
  fullName: 'Mateus Oliveira Irineu',
  handle: '@MateusIrineu',
  email: 'irineu.mateus11@gmail.com',
  location: 'Natal, RN — Brasil',
  avatar: 'https://avatars.githubusercontent.com/u/113316193?v=4',
  github: 'https://github.com/MateusIrineu',
  linkedin: 'https://www.linkedin.com/in/mateus-irineu-a54399226/',
};

export const CONTENT = {
  pt: {
    status: 'Disponível para projetos & desafios',
    role: 'Engenheiro de Software Full-Stack',
    tagline:
      'Desenvolvo soluções orientadas à resolução de problemas: elimino processos manuais, gargalos de usabilidade e riscos técnicos com arquiteturas limpas e IA aplicada.',
    nav: [
      { id: 'sobre', number: '01', label: 'Sobre' },
      { id: 'projetos', number: '02', label: 'Resolução de Problemas' },
      { id: 'arquitetura', number: '03', label: 'Stack & Decisões' },
      { id: 'trajetoria', number: '04', label: 'Trajetória & Arquivo' },
    ],
    cmdHint: 'Menu rápido',
    copyEmail: 'Copiar e-mail',
    copiedEmail: 'E-mail copiado!',
    aboutTitle: 'Foco & Filosofia de Engenharia',
    aboutParagraphs: [
      'Meu foco principal como desenvolvedor não é apenas escrever código, mas identificar gargalos reais onde a fricção humana ou técnica gera desperdício de tempo e dinheiro.',
      'Acredito que boa engenharia equilibra pragmatismo e rigor: interfaces sem fricção na ponta final sustentadas por backends defensivos, modelagem relacional consistente, suítes de testes automatizados e mitigação antecipada de falhas (como duplicidade de webhooks, alucinações de IA ou gargalos de conversão).',
    ],
    metrics: [
      { value: '77+', label: 'Testes automatizados no Kofrim garantindo consistência' },
      { value: 'Full-Stack', label: 'Python (Django), Node.js (Express), React & Next.js' },
      { value: 'C1 / Avançado', label: 'Inglês para atuação técnica e times globais' },
    ],
    projectsTitle: 'Projetos & Resolução de Problemas',
    projectsSubtitle:
      'Casos reais de engenharia: a dor do usuário, a solução técnica desenvolvida e os contornos aplicados para evitar falhas.',
    filterAll: 'Todos',
    viewArch: 'Ver Solução Técnica & Decisões',
    hideArch: 'Ocultar Detalhes Técnicos',
    trySimulator: 'Simulação Interativa: WhatsApp → IA',
    sourceCode: 'Repositório',
    privateRepoNote: 'Repositório Privado',
    problemLabel: 'O Problema',
    solutionLabel: 'A Solução',
    challengesLabel: 'Desafios Técnicos & Contornos de Engenharia',
    featuredProjects: [
      {
        id: 'kofrim',
        year: '2026',
        badge: 'FinTech & IA Pragmática',
        title: 'Kofrim — Automação de Gestão Financeira via WhatsApp',
        problemStatement:
          'Planilhas manuais e aplicativos cheios de formulários exigem alta disciplina, gerando alto índice de abandono no registro financeiro do dia a dia.',
        solutionStatement:
          'Transformação do registro financeiro em uma conversa natural no WhatsApp: o usuário envia mensagens de texto livres e a IA interpreta, sanitiza os valores e atualiza o saldo e limites em tempo real.',
        engineeringMitigations: [
          'Prevenção de transações duplicadas: retries automáticos da WhatsApp Cloud API contornados via deduplicação idempotente por message_id no banco.',
          'Consistência contábil contra alucinações: camada estrita de parsing Decimal (R$) e validação defensiva antes de qualquer persistência no PostgreSQL.',
          'Controle de custos de tokens: filtro prévio que bloqueia áudios, fotos ou stickers antes de acionar a API da LLM.',
          'Confiabilidade garantida: suíte de 77 testes automatizados cobrindo 100% dos caminhos críticos (receitas, despesas, metas e segurança).',
        ],
        repoUrl: 'https://github.com/MateusIrineu/Kofrim',
        isPrivate: false,
        highlightMetric: '77 Testes Automatizados (100% Pass)',
        tech: [
          'Python 3.11',
          'Django 6.1',
          'PostgreSQL 16',
          'Google Gemini 3.8',
          'WhatsApp Cloud API',
          'HMAC SHA-256',
          'Pytest / Django Test',
        ],
        architecture: {
          pipeline: [
            { step: '01. Segurança & Webhook', detail: 'Assinatura HMAC SHA-256 validada na borda + bloqueio de reenvios por message_id.' },
            { step: '02. Interpretação em IA', detail: 'Extração estruturada de intenções (Despesa, Receita, Meta, Extrato) via Gemini 3.8 Flash.' },
            { step: '03. Sanitização Defensiva', detail: 'Conversão monetária em Decimal estrito, validação de categorias e isolamento de usuário.' },
            { step: '04. Transação ACID', detail: 'Persistência no PostgreSQL e cálculo dinâmico do teto diário de gastos com resposta imediata.' },
          ],
          decisions: [
            'Optou-se por WhatsApp em vez de app nativo para zerar a barreira de instalação e atrito de login do usuário.',
            'Uso do Google Gemini 3.8 Flash para manter latência de resposta abaixo de 2 segundos com custo mínimo por requisição.',
          ],
        },
        simulator: [
          {
            label: 'Registrar Despesa',
            userMsg: 'Gastei 64,90 no almoço com a equipe hoje',
            aiParsed: '{ "intent": "DESPESA", "categoria": "Alimentação", "valor": "64.90" }',
            botReply: '✅ Despesa de R$ 64,90 registrada em Alimentação.\n📊 Limite diário restante: R$ 85,10 | Meta mensal: 78% preservada.',
          },
          {
            label: 'Definir Meta',
            userMsg: 'Preciso economizar 1500 reais esse mês',
            aiParsed: '{ "intent": "DEFINIR_META", "valor_meta": "1500.00", "prazo": "mensal" }',
            botReply: '🎯 Meta configurada: R$ 1.500,00 poupados.\n💡 Teto de gasto seguro recalculado: R$ 112,00 por dia.',
          },
          {
            label: 'Consultar Extrato',
            userMsg: 'Quanto gastei essa semana?',
            aiParsed: '{ "intent": "EXTRATO", "periodo": "7_dias" }',
            botReply: '📑 Extrato dos últimos 7 dias:\n• Alimentação: R$ 214,50\n• Transporte: R$ 89,00\n💰 Saldo livre: R$ 2.840,00.',
          },
        ],
      },
      {
        id: 'pdfix',
        year: '2026',
        badge: 'SaaS Pay-per-Use & Automação',
        title: 'PDFix — Padronização de Propostas & Currículos Profissionais',
        problemStatement:
          'Profissionais autônomos e freelancers perdem clientes por enviarem orçamentos despadronizados em texto de WhatsApp ou ficam presos a assinaturas mensais caras de softwares complexos ("amadorismo caro").',
        solutionStatement:
          'Gerador ágil de orçamentos e currículos no padrão ABNT com preenchimento guiado em menos de 2 minutos, sem taxa de assinatura recorrente: o usuário paga apenas pelo documento que emite via Pix ou Stripe.',
        engineeringMitigations: [
          'Prevenção de fraude / download não pago: geração de preview em tempo real com marca d’água dinâmica protegendo o layout até a compensação do pagamento.',
          'Desacoplamento e desempenho: monorepo com frontend em Next.js 16/React 19 para renderização rápida e backend isolado em Node.js com Express e Docker.',
          'Checkout sem atrito: integração com webhook Pix dinâmico (copia e cola / QR Code) para liberação instantânea e compartilhamento direto via WhatsApp.',
        ],
        repoUrl: 'https://github.com/MateusIrineu/pdfix',
        isPrivate: false,
        highlightMetric: 'Emissão < 2 min • Modelo Pay-Per-Use',
        tech: [
          'Next.js 16',
          'React 19',
          'Tailwind CSS 4',
          '@react-pdf/renderer',
          'Node.js',
          'Express',
          'PostgreSQL',
          'Sequelize',
          'Stripe & Pix',
          'Docker',
        ],
        architecture: {
          pipeline: [
            { step: '01. Entrada Estruturada', detail: 'Formulário dividido em blocos de alta velocidade com validação de dados em tempo real.' },
            { step: '02. Motor de PDF & Marca', detail: 'Renderização vetorial ABNT dinâmica via @react-pdf/renderer com selo d’água de proteção.' },
            { step: '03. Webhook de Pagamento', detail: 'Emissão de Pix dinâmico ou Stripe com confirmação assíncrona por webhook.' },
            { step: '04. Liberação Imediata', detail: 'Remoção automática de travas e geração do link direto de download / WhatsApp.' },
          ],
          decisions: [
            'Monorepo desacoplado (/frontend, /backend, /infra) facilitando deploy independente e manutenção de contratos de API.',
            'Modelo Pay-per-use elimina barreira de conversão de quem precisa de um documento pontual.',
          ],
        },
      },
    ],
    stackTitle: 'Stack & Decisões de Tecnologia',
    stackSubtitle:
      'Ferramentas escolhidas a partir dos requisitos e problemas de cada projeto.',
    stackCategories: [
      {
        name: 'Backend & IA',
        items: [
          { name: 'Python', projects: ['kofrim', 'bibliotech'] },
          { name: 'Django', projects: ['kofrim'] },
          { name: 'Node.js', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Express.js', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Google Gemini API', projects: ['kofrim'] },
          { name: 'WhatsApp Cloud API', projects: ['kofrim'] },
          { name: 'REST APIs & JWT', projects: ['kofrim', 'pdfix', 'gestao-assinatura'] },
        ],
      },
      {
        name: 'Frontend & UI',
        items: [
          { name: 'React', projects: ['pdfix'] },
          { name: 'Next.js', projects: ['pdfix'] },
          { name: 'TypeScript / JavaScript', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Tailwind CSS', projects: ['pdfix'] },
          { name: 'HTML5 & CSS3', projects: ['pdfix'] },
        ],
      },
      {
        name: 'Dados, Infra & Confiabilidade',
        items: [
          { name: 'PostgreSQL', projects: ['kofrim', 'pdfix', 'gestao-assinatura'] },
          { name: 'Sequelize ORM', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Docker', projects: ['pdfix'] },
          { name: 'Pytest / Django Test', projects: ['kofrim'] },
          { name: 'Firebase Auth', projects: ['pdfix'] },
          { name: 'Git & GitHub Flow', projects: ['kofrim', 'pdfix'] },
        ],
      },
    ],
    journeyTitle: 'Formação & Trajetória Técnica',
    journeyItems: [
      {
        period: 'Atual',
        title: 'Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)',
        org: 'IFRN — Campus Natal-Central',
        description:
          'Base sólida em Engenharia de Software, Estruturas de Dados Lineares, Algoritmos, Programação Orientada a Objetos, Bancos Relacionais e Arquitetura de Sistemas.',
        tags: ['Engenharia de Software', 'Estruturas de Dados', 'POO', 'Bancos de Dados'],
      },
      {
        period: '2024 — 2026',
        title: 'Desenvolvimento Full-Stack & Projetos Práticos',
        org: 'SENAC RN',
        description:
          'Construção prática de sistemas e MVPs em equipe utilizando Node.js, React, PostgreSQL, testes automatizados e integração contínua.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Testes Automatizados', 'Scrum'],
      },
    ],
    archiveTitle: 'Outros Repositórios no GitHub',
    archiveSubtitle: 'Projetos de estudo em algoritmos, arquitetura de computadores e APIs modulares.',
    archiveProjects: [
      {
        year: '2026',
        name: 'BiblioTech',
        tech: 'Python • POO • Arquitetura de Software',
        desc: 'Gestão de acervo com controle estrito de empréstimos e regras de concorrência em POO pura.',
        url: 'https://github.com/MateusIrineu/BiblioTech',
      },
      {
        year: '2026',
        name: 'API Gestão de Assinaturas',
        tech: 'Node.js • Express 5 • PostgreSQL • JWT',
        desc: 'API RESTful com controle de recorrência de planos, sanitização e autenticação segura com Bcrypt.',
        url: 'https://github.com/MateusIrineu/gestao-assinatura',
      },
      {
        year: '2026',
        name: 'Angry Birds MIPS (MARS 4.5)',
        tech: 'Assembly MIPS • Arquitetura de Baixo Nível',
        desc: 'Manipulação direta de registradores, interrupções e bitmap display em arquitetura MIPS.',
        url: 'https://github.com/MateusIrineu/angry_birds-mars45',
      },
      {
        year: '2026',
        name: 'Estruturas de Dados & LeetCode',
        tech: 'Python • Análise de Complexidade O(n)',
        desc: 'Implementação de estruturas de dados lineares e resolução de desafios algorítmicos.',
        url: 'https://github.com/MateusIrineu/leetcode',
      },
    ],
    footerText:
      'Desenvolvido com foco em clareza, alta performance e arquitetura limpa (React + Vite + Tailwind CSS).',
    ctaTitle: 'Tem um problema técnico ou de produto para resolver?',
    ctaText:
      'Estou disponível para atuar como Desenvolvedor Full-Stack / Backend, construindo arquiteturas confiáveis e sistemas que entregam valor real.',
  },
  en: {
    status: 'Available for projects & challenges',
    role: 'Full-Stack Software Engineer',
    tagline:
      'Problem-solving software engineer: eliminating manual overhead, friction points, and technical risks with clean architectures and applied AI.',
    nav: [
      { id: 'sobre', number: '01', label: 'About' },
      { id: 'projetos', number: '02', label: 'Problem Solving' },
      { id: 'arquitetura', number: '03', label: 'Stack & Decisions' },
      { id: 'trajetoria', number: '04', label: 'Background & Archive' },
    ],
    cmdHint: 'Quick menu',
    copyEmail: 'Copy email',
    copiedEmail: 'Email copied!',
    aboutTitle: 'Focus & Engineering Philosophy',
    aboutParagraphs: [
      'My primary focus as an engineer is not just writing code, but identifying operational and user friction that wastes time and resources.',
      'I believe great engineering balances pragmatism with defensiveness: zero-friction interfaces powered by resilient backends, sound relational schemas, automated test suites, and preemptive mitigation of real-world failures (such as webhook retries, LLM hallucination, or conversion drop-offs).',
    ],
    metrics: [
      { value: '77+', label: 'Automated tests in Kofrim ensuring data consistency' },
      { value: 'Full-Stack', label: 'Python (Django), Node.js (Express), React & Next.js' },
      { value: 'C1 / Advanced', label: 'English proficiency for global teams and technical discussions' },
    ],
    projectsTitle: 'Projects & Problem Solving',
    projectsSubtitle:
      'Real engineering cases: the user pain point, the software solution built, and the mitigations applied to prevent failures.',
    filterAll: 'All',
    viewArch: 'Inspect Technical Solution & Decisions',
    hideArch: 'Hide Technical Details',
    trySimulator: 'Interactive Simulation: WhatsApp → AI',
    sourceCode: 'Repository',
    privateRepoNote: 'Private Repository',
    problemLabel: 'The Problem',
    solutionLabel: 'The Solution',
    challengesLabel: 'Technical Challenges & Engineering Mitigations',
    featuredProjects: [
      {
        id: 'kofrim',
        year: '2026',
        badge: 'FinTech & Pragmatic AI',
        title: 'Kofrim — Automated Personal Finance via WhatsApp',
        problemStatement:
          'Manual spreadsheets and multi-field finance apps require tedious effort, leading to an 80%+ drop-off rate in personal budget tracking.',
        solutionStatement:
          'Replaced complex forms with natural WhatsApp messaging: users text freely; Gemini 3.8 Flash extracts financial intents, sanitizes monetary values, and updates balances and daily limits instantly.',
        engineeringMitigations: [
          'Duplicate entry prevention: Meta WhatsApp Cloud API retries solved through database-level idempotency by message_id.',
          'Accounting accuracy against LLM hallucination: strict Decimal validation and defensive parsing before any PostgreSQL transaction.',
          'Token cost optimization: early media filter drops audio, photos, and stickers before hitting the LLM API.',
          'Rock-solid reliability: 77 automated unit and integration tests covering 100% of critical paths (incomes, expenses, limits, security).',
        ],
        repoUrl: 'https://github.com/MateusIrineu/Kofrim',
        isPrivate: false,
        highlightMetric: '77 Automated Tests (100% Pass)',
        tech: [
          'Python 3.11',
          'Django 6.1',
          'PostgreSQL 16',
          'Google Gemini 3.8',
          'WhatsApp Cloud API',
          'HMAC SHA-256',
          'Pytest / Django Test',
        ],
        architecture: {
          pipeline: [
            { step: '01. Edge Security', detail: 'Meta HMAC SHA-256 verified at the gate + message_id deduplication.' },
            { step: '02. AI Intent Extraction', detail: 'Structured parsing of financial operations via Gemini 3.8 Flash.' },
            { step: '03. Defensive Sanitization', detail: 'Strict Decimal conversion, category enforcement, and tenant isolation.' },
            { step: '04. ACID Persistence', detail: 'PostgreSQL atomic commit + dynamic daily allowance calculation with instant WhatsApp reply.' },
          ],
          decisions: [
            'Chose WhatsApp over a standalone app to eliminate download friction and login fatigue.',
            'Gemini 3.8 Flash delivers sub-2s response latency with minimal token cost per transaction.',
          ],
        },
        simulator: [
          {
            label: 'Log Expense',
            userMsg: 'Spent 64.90 having lunch with the team today',
            aiParsed: '{ "intent": "EXPENSE", "category": "Food", "amount": "64.90" }',
            botReply: '✅ Expense of R$ 64,90 recorded in Food.\n📊 Daily allowance left: R$ 85,10 | Monthly budget: 78% on track.',
          },
          {
            label: 'Set Goal',
            userMsg: 'I want to save 1500 reais this month',
            aiParsed: '{ "intent": "SET_GOAL", "target_amount": "1500.00", "period": "monthly" }',
            botReply: '🎯 Goal saved: R$ 1.500,00 target.\n💡 Safe daily spending ceiling recalculated: R$ 112,00 per day.',
          },
          {
            label: 'Check Balance',
            userMsg: 'How much did I spend this week?',
            aiParsed: '{ "intent": "STATEMENT", "range": "7_days" }',
            botReply: '📑 Last 7 days summary:\n• Food: R$ 214,50\n• Transport: R$ 89,00\n💰 Free cash balance: R$ 2.840,00.',
          },
        ],
      },
      {
        id: 'pdfix',
        year: '2026',
        badge: 'Pay-per-Use SaaS & Automation',
        title: 'PDFix — Automated Client Proposals & Standardized Resumes',
        problemStatement:
          'Freelancers and independent contractors lose deals by sending unstructured WhatsApp text quotes or get trapped in expensive recurring software subscriptions ("costly amateurism").',
        solutionStatement:
          'Streamlined ABNT-compliant document generator that takes under 2 minutes to fill with a pay-per-use model: zero subscription barrier; users only pay per generated document via Pix or Stripe.',
        engineeringMitigations: [
          'Fraud & unpaid download prevention: dynamic real-time preview protected with an unremovable watermark layer until payment webhook confirmation.',
          'Performance & decoupling: monorepo with Next.js 16/React 19 for instantaneous UI feedback and a containerized Node.js/Express backend.',
          'Frictionless checkout: integrated dynamic Pix webhook (copy-paste & QR Code) allowing immediate document unlock and direct WhatsApp sharing.',
        ],
        repoUrl: 'https://github.com/MateusIrineu/pdfix',
        isPrivate: false,
        highlightMetric: 'Generation < 2 min • Pay-Per-Use',
        tech: [
          'Next.js 16',
          'React 19',
          'Tailwind CSS 4',
          '@react-pdf/renderer',
          'Node.js',
          'Express',
          'PostgreSQL',
          'Sequelize',
          'Stripe & Pix',
          'Docker',
        ],
        architecture: {
          pipeline: [
            { step: '01. Structured Intake', detail: 'Multi-block guided intake form with instant field validation.' },
            { step: '02. Protected Rendering', detail: 'Dynamic ABNT vector PDF layout with security watermark overlay.' },
            { step: '03. Payment Webhook', detail: 'Dynamic Pix / Stripe payment with secure asynchronous confirmation.' },
            { step: '04. Instant Unlock', detail: 'Watermark removal and direct download / WhatsApp transfer link generated.' },
          ],
          decisions: [
            'Decoupled monorepo (/frontend, /backend, /infra) for independent scaling and clean API contracts.',
            'Pay-per-use pricing eliminates conversion resistance for intermittent users.',
          ],
        },
      },
    ],
    stackTitle: 'Stack & Architectural Decisions',
    stackSubtitle:
      'Technologies selected based on the specific constraints and requirements of each problem.',
    stackCategories: [
      {
        name: 'Backend & AI',
        items: [
          { name: 'Python', projects: ['kofrim', 'bibliotech'] },
          { name: 'Django', projects: ['kofrim'] },
          { name: 'Node.js', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Express.js', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Google Gemini API', projects: ['kofrim'] },
          { name: 'WhatsApp Cloud API', projects: ['kofrim'] },
          { name: 'REST APIs & JWT', projects: ['kofrim', 'pdfix', 'gestao-assinatura'] },
        ],
      },
      {
        name: 'Frontend & UI',
        items: [
          { name: 'React', projects: ['pdfix'] },
          { name: 'Next.js', projects: ['pdfix'] },
          { name: 'TypeScript / JavaScript', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Tailwind CSS', projects: ['pdfix'] },
          { name: 'HTML5 & CSS3', projects: ['pdfix'] },
        ],
      },
      {
        name: 'Data, Infra & Reliability',
        items: [
          { name: 'PostgreSQL', projects: ['kofrim', 'pdfix', 'gestao-assinatura'] },
          { name: 'Sequelize ORM', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Docker', projects: ['pdfix'] },
          { name: 'Pytest / Django Test', projects: ['kofrim'] },
          { name: 'Firebase Auth', projects: ['pdfix'] },
          { name: 'Git & GitHub Flow', projects: ['kofrim', 'pdfix'] },
        ],
      },
    ],
    journeyTitle: 'Technical Background & Journey',
    journeyItems: [
      {
        period: 'Present',
        title: 'B.S. in Systems Analysis and Development (TADS)',
        org: 'IFRN — Natal-Central',
        description:
          'Deep foundations in Software Engineering, Linear Data Structures, Algorithms, Object-Oriented Design, Relational Databases, and Systems Architecture.',
        tags: ['Software Engineering', 'Data Structures', 'OOP', 'Databases'],
      },
      {
        period: '2024 — 2026',
        title: 'Full-Stack Development & Applied Projects',
        org: 'SENAC RN',
        description:
          'Hands-on system construction in teams utilizing Node.js, React, PostgreSQL, automated testing suites, and continuous delivery.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Automated Testing', 'Agile'],
      },
    ],
    archiveTitle: 'Other GitHub Repositories',
    archiveSubtitle: 'Projects exploring core algorithms, computer architecture, and modular APIs.',
    archiveProjects: [
      {
        year: '2026',
        name: 'BiblioTech',
        tech: 'Python • OOP • Systems Design',
        desc: 'Library catalog management with strict loan state enforcement and concurrency handling in pure OOP.',
        url: 'https://github.com/MateusIrineu/BiblioTech',
      },
      {
        year: '2026',
        name: 'Subscription Management API',
        tech: 'Node.js • Express 5 • PostgreSQL • JWT',
        desc: 'RESTful API with recurring subscription tiers, input sanitization, and secure Bcrypt authentication.',
        url: 'https://github.com/MateusIrineu/gestao-assinatura',
      },
      {
        year: '2026',
        name: 'Angry Birds MIPS (MARS 4.5)',
        tech: 'MIPS Assembly • Low-Level Computing',
        desc: 'Direct register allocation, hardware interrupt routines, and memory-mapped bitmap display.',
        url: 'https://github.com/MateusIrineu/angry_birds-mars45',
      },
      {
        year: '2026',
        name: 'Linear Data Structures & LeetCode',
        tech: 'Python • O(n) Complexity Analysis',
        desc: 'From-scratch linear data structures implementation and algorithmic problem solving.',
        url: 'https://github.com/MateusIrineu/leetcode',
      },
    ],
    footerText:
      'Engineered for clarity, high performance, and clean architecture (React + Vite + Tailwind CSS).',
    ctaTitle: 'Have a technical or product problem to solve?',
    ctaText:
      'I am available for Full-Stack / Backend Developer roles, building resilient architectures and software that delivers real-world impact.',
  },
};
