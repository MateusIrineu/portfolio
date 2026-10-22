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
    status: 'Disponível para projetos & oportunidades',
    role: 'Engenheiro de Software Full-Stack',
    tagline:
      'Construo aplicações web escaláveis, APIs resilientes e produtos integrados com IA que eliminam fricção e resolvem problemas reais.',
    nav: [
      { id: 'sobre', number: '01', label: 'Sobre' },
      { id: 'projetos', number: '02', label: 'Projetos em Destaque' },
      { id: 'arquitetura', number: '03', label: 'Stack & Engenharia' },
      { id: 'trajetoria', number: '04', label: 'Formação & Arquivo' },
    ],
    cmdHint: 'Menu rápido',
    copyEmail: 'Copiar e-mail',
    copiedEmail: 'E-mail copiado!',
    aboutTitle: 'Sobre',
    aboutParagraphs: [
      'Sou desenvolvedor Full-Stack em formação em Tecnologia em Análise e Desenvolvimento de Sistemas pelo IFRN (Instituto Federal do Rio Grande do Norte) e com atuação prática em desenvolvimento de software no SENAC. Minha abordagem combina rigor de engenharia no backend com interfaces rápidas, diretas e centradas na experiência do usuário.',
      'Gosto de transformar fluxos complexos em experiências simples. Isso aparece no Kofrim — onde substituí planilhas financeiras por uma conversa natural no WhatsApp processada por IA com 77 testes automatizados garantindo precisão monetária — e no PDFix, um SaaS pay-per-use que automatiza a geração de documentos padronizados com checkout Pix integrado.',
      'Trabalho confortavelmente em todo o ciclo de vida do software: da modelagem relacional em PostgreSQL e construção de APIs RESTful em Python (Django) ou Node.js (Express/Sequelize) até frontends modernos com React, Next.js, TypeScript e Tailwind CSS.',
    ],
    metrics: [
      { value: '77+', label: 'Testes automatizados no Kofrim (100% pass)' },
      { value: 'Full-Stack', label: 'Python, Django, Node.js, React & Next.js' },
      { value: 'C1 / Avançado', label: 'Proficiência em Inglês técnico & conversação' },
    ],
    projectsTitle: 'Projetos em Destaque',
    projectsSubtitle:
      'Produtos autorais desenhados ponta a ponta com foco em arquitetura limpa, regras de negócio reais e entrega de valor.',
    filterAll: 'Todos',
    viewArch: 'Inspecionar Arquitetura',
    hideArch: 'Ocultar Arquitetura',
    trySimulator: 'Testar Fluxo WhatsApp → IA',
    sourceCode: 'Repositório',
    privateRepoNote: 'Repositório Privado',
    featuredProjects: [
      {
        id: 'kofrim',
        year: '2026',
        badge: 'IA Generativa & FinTech',
        title: 'Kofrim — Assistente Financeiro Autônomo com IA & WhatsApp',
        shortDescription:
          'Engenharia de software para eliminar a fricção do controle financeiro pessoal. O usuário conversa naturalmente pelo WhatsApp; o sistema interpreta intenções via Google Gemini 3.8 Flash, sanitiza valores monetários com rigor e persiste o estado no PostgreSQL.',
        problemSolved:
          'Substitui planilhas manuais e apps com dezenas de campos por mensagens naturais, mantendo precisão contábil, metas diárias e segurança de nível bancário.',
        repoUrl: 'https://github.com/MateusIrineu/Kofrim',
        isPrivate: false,
        highlightMetric: '77 Testes Automatizados (100% Cobertura Crítica)',
        tech: [
          'Python 3.11+',
          'Django 6.1',
          'PostgreSQL 16',
          'Google Gemini API',
          'WhatsApp Cloud API',
          'HMAC SHA-256',
          'Gunicorn',
        ],
        architecture: {
          pipeline: [
            { step: '01. Webhook & Segurança', detail: 'Validação de assinatura HMAC SHA-256 da Meta + Deduplicação idempotente por message_id.' },
            { step: '02. Motor de IA (Gemini 3.8)', detail: 'Extração estruturada de intenção (Receita, Despesa, Meta, Extrato), categoria e data.' },
            { step: '03. Sanitização & Regras', detail: 'Validação estrita em Decimal (R$), isolamento multi-tenant por usuário e cálculo de limite diário.' },
            { step: '04. Persistência & Resposta', detail: 'Transação ACID no PostgreSQL 16 + feedback imediato formatado no WhatsApp.' },
          ],
          decisions: [
            'Idempotência nativa para evitar duplicidade de lançamentos em retries da WhatsApp Cloud API.',
            'Filtro inteligente de mídia que intercepta áudios/figurinhas antes de acionar tokens de IA, reduzindo custos operacionais.',
            'Suíte com 77 testes unitários e de integração cobrindo todas as 6 categorias, metas, extratos e segurança.',
          ],
        },
        simulator: [
          {
            label: 'Registrar Despesa',
            userMsg: 'Gastei 64,90 no supermercado hoje no almoço',
            aiParsed: '{ "intent": "DESPESA", "categoria": "Alimentação", "valor": "64.90", "data": "2026-10-22" }',
            botReply: '✅ Despesa registrada: R$ 64,90 em Alimentação.\n📊 Limite diário restante: R$ 85,10 | Meta mensal: 78% dentro do planejado.',
          },
          {
            label: 'Definir Meta',
            userMsg: 'Quero economizar 1500 reais até o fim do mês',
            aiParsed: '{ "intent": "DEFINIR_META", "valor_meta": "1500.00", "prazo": "mensal" }',
            botReply: '🎯 Meta atualizada: Economizar R$ 1.500,00.\n💡 Para atingir sua meta, seu teto de gastos diário agora é de R$ 112,00.',
          },
          {
            label: 'Consultar Extrato',
            userMsg: 'Como estão meus gastos dessa semana?',
            aiParsed: '{ "intent": "EXTRATO", "periodo": "7_dias", "agrupamento": "categoria" }',
            botReply: '📑 Resumo (Últimos 7 dias):\n• Alimentação: R$ 214,50\n• Transporte: R$ 89,00\n💰 Saldo atual disponível: R$ 2.840,00.',
          },
        ],
      },
      {
        id: 'pdfix',
        year: '2026',
        badge: 'SaaS Full-Stack & Pagamentos',
        title: 'PDFix — Documentos & Orçamentos Profissionais Instantâneos',
        shortDescription:
          'Plataforma SaaS pay-per-use criada para combater o "amadorismo caro" de autônomos e freelancers. Automatiza a criação de currículos e orçamentos seguindo normas técnicas e ABNT em menos de 2 minutos, com preview protegido e cobrança via Pix/Stripe.',
        problemSolved:
          'Elimina a perda de clientes causada por orçamentos informais em texto, oferecendo geração instantânea sem obrigar o profissional a pagar assinaturas mensais.',
        repoUrl: 'https://github.com/MateusIrineu/pdfix',
        isPrivate: false,
        highlightMetric: 'Fluxo de 7 Telas • Geração < 2 min',
        tech: [
          'Next.js 16',
          'React 19',
          'Tailwind CSS 4',
          'Node.js',
          'Express',
          'PostgreSQL',
          'Sequelize',
          'Stripe & Pix',
          'Firebase Auth',
          'Docker',
        ],
        architecture: {
          pipeline: [
            { step: '01. Coleta Modular', detail: 'Formulário guiado em blocos no Next.js 16 com validação em tempo real.' },
            { step: '02. Renderização PDF', detail: 'Geração dinâmica de layout ABNT com @react-pdf/renderer e camada de marca d’água no preview.' },
            { step: '03. Checkout Pay-per-Use', detail: 'Integração com API de pagamentos (QR Code Pix dinâmico Copia e Cola + Stripe).' },
            { step: '04. Liberação & Entrega', detail: 'Desbloqueio automático do documento oficial e compartilhamento direto via WhatsApp.' },
          ],
          decisions: [
            'Arquitetura desacoplada em monorepo (/frontend, /backend, /infra) containerizada com Docker.',
            'Autenticação híbrida com Firebase Admin SDK + persistência relacional estruturada via Sequelize ORM e migrations.',
            'Modelo de negócios orientado a conversão com preview real do documento antes do pagamento.',
          ],
        },
      },
    ],
    stackTitle: 'Stack & Ecossistema Técnico',
    stackSubtitle:
      'Passe o mouse ou clique em uma tecnologia para filtrar onde ela foi aplicada na prática.',
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
        name: 'Frontend & Interface',
        items: [
          { name: 'React', projects: ['pdfix'] },
          { name: 'Next.js', projects: ['pdfix'] },
          { name: 'TypeScript / JavaScript', projects: ['pdfix', 'gestao-assinatura'] },
          { name: 'Tailwind CSS', projects: ['pdfix'] },
          { name: 'HTML5 & CSS3', projects: ['pdfix'] },
        ],
      },
      {
        name: 'Dados, Infra & Qualidade',
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
    journeyTitle: 'Formação & Trajetória',
    journeyItems: [
      {
        period: 'Atual',
        title: 'Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)',
        org: 'IFRN — Instituto Federal do Rio Grande do Norte (Campus Natal-Central)',
        description:
          'Formação superior focada em Engenharia de Software, Estruturas de Dados Lineares, Programação Orientada a Objetos, Bancos de Dados Relacionais, Arquitetura de Computadores e Desenvolvimento de Sistemas Web.',
        tags: ['Engenharia de Software', 'Algoritmos', 'POO', 'Desenvolvimento Web'],
      },
      {
        period: '2024 — 2026',
        title: 'Desenvolvimento Full-Stack & Projetos Integradores',
        org: 'SENAC RN',
        description:
          'Atuação prática no desenvolvimento de sistemas e MVPs utilizando metodologias ágeis, Node.js, React, PostgreSQL, testes automatizados e padrões de qualidade de software.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Testes Automatizados', 'Scrum'],
      },
    ],
    archiveTitle: 'Outros Experimentos no GitHub',
    archiveSubtitle: 'Repositórios próprios de estudo, APIs REST e desafios de baixo nível.',
    archiveProjects: [
      {
        year: '2026',
        name: 'BiblioTech',
        tech: 'Python • POO • CLI Architecture',
        desc: 'Sistema completo de gestão de acervo e controle de empréstimos de biblioteca aplicando pilares de Orientação a Objetos.',
        url: 'https://github.com/MateusIrineu/BiblioTech',
      },
      {
        year: '2026',
        name: 'API Gestão de Assinaturas',
        tech: 'Node.js • Express 5 • PostgreSQL • JWT',
        desc: 'API RESTful para gerenciamento de planos recorrentes, usuários e autenticação segura com Bcrypt e Sequelize.',
        url: 'https://github.com/MateusIrineu/gestao-assinatura',
      },
      {
        year: '2026',
        name: 'Angry Birds MIPS (MARS 4.5)',
        tech: 'Assembly MIPS • Arquitetura de Computadores',
        desc: 'Implementação em baixo nível inspirada em Angry Birds diretamente em Assembly MIPS para estudo de registradores e memória.',
        url: 'https://github.com/MateusIrineu/angry_birds-mars45',
      },
      {
        year: '2026',
        name: 'Estruturas de Dados & LeetCode',
        tech: 'Python • Algoritmos • Complexidade',
        desc: 'Repositórios dedicados à implementação de estruturas de dados lineares e resolução contínua de desafios algorítmicos.',
        url: 'https://github.com/MateusIrineu/leetcode',
      },
    ],
    footerText:
      'Projetado com estética minimalista editorial e desenvolvido com React, Vite e Tailwind CSS.',
    ctaTitle: 'Vamos construir algo juntos?',
    ctaText:
      'Estou aberto a oportunidades como Desenvolvedor Full-Stack / Backend, freelas desafiadores ou colaborações em projetos de produto.',
  },
  en: {
    status: 'Available for projects & opportunities',
    role: 'Full-Stack Software Engineer',
    tagline:
      'I build scalable web applications, resilient APIs, and AI-powered products that remove friction and solve real-world problems.',
    nav: [
      { id: 'sobre', number: '01', label: 'About' },
      { id: 'projetos', number: '02', label: 'Featured Projects' },
      { id: 'arquitetura', number: '03', label: 'Stack & Engineering' },
      { id: 'trajetoria', number: '04', label: 'Education & Archive' },
    ],
    cmdHint: 'Quick menu',
    copyEmail: 'Copy email',
    copiedEmail: 'Email copied!',
    aboutTitle: 'About',
    aboutParagraphs: [
      'I am a Full-Stack Developer pursuing a degree in Systems Analysis and Development at IFRN (Federal Institute of Rio Grande do Norte) with hands-on experience building full-lifecycle applications at SENAC. My work combines backend engineering rigor with fast, intentional, user-centric interfaces.',
      'I enjoy turning high-friction workflows into effortless experiences. That philosophy drives Kofrim — where I replaced complex budgeting spreadsheets with a natural WhatsApp conversation powered by Google Gemini and backed by 77 automated tests — and PDFix, a pay-per-use SaaS that automates ABNT-compliant documents with integrated Pix/Stripe checkout.',
      'I work comfortably across the entire stack: from relational modeling in PostgreSQL and building RESTful APIs in Python (Django) or Node.js (Express/Sequelize) to modern frontends with React, Next.js, TypeScript, and Tailwind CSS.',
    ],
    metrics: [
      { value: '77+', label: 'Automated tests in Kofrim (100% pass rate)' },
      { value: 'Full-Stack', label: 'Python, Django, Node.js, React & Next.js' },
      { value: 'C1 / Advanced', label: 'English proficiency for global teams' },
    ],
    projectsTitle: 'Featured Projects',
    projectsSubtitle:
      'Self-authored end-to-end systems engineered with clean architecture, real business rules, and measurable impact.',
    filterAll: 'All',
    viewArch: 'Inspect Architecture',
    hideArch: 'Hide Architecture',
    trySimulator: 'Test WhatsApp → AI Flow',
    sourceCode: 'Repository',
    privateRepoNote: 'Private Repository',
    featuredProjects: [
      {
        id: 'kofrim',
        year: '2026',
        badge: 'Generative AI & FinTech',
        title: 'Kofrim — Autonomous AI Financial Assistant on WhatsApp',
        shortDescription:
          'Software engineering solution designed to eliminate personal finance tracking friction. Users chat naturally on WhatsApp; the system parses intent via Google Gemini 3.8 Flash, strictly sanitizes monetary values, and persists state in PostgreSQL.',
        problemSolved:
          'Replaces manual spreadsheets and bloated forms with natural conversation while enforcing accounting accuracy, daily spending caps, and bank-grade webhook security.',
        repoUrl: 'https://github.com/MateusIrineu/Kofrim',
        isPrivate: false,
        highlightMetric: '77 Automated Tests (100% Critical Coverage)',
        tech: [
          'Python 3.11+',
          'Django 6.1',
          'PostgreSQL 16',
          'Google Gemini API',
          'WhatsApp Cloud API',
          'HMAC SHA-256',
          'Gunicorn',
        ],
        architecture: {
          pipeline: [
            { step: '01. Webhook & Security', detail: 'Meta HMAC SHA-256 signature verification + idempotent deduplication by message_id.' },
            { step: '02. AI Engine (Gemini 3.8)', detail: 'Structured intent extraction (Income, Expense, Goal, Statement), category, and date.' },
            { step: '03. Sanitization & Rules', detail: 'Strict Decimal validation, multi-tenant user isolation, and dynamic daily allowance calculation.' },
            { step: '04. Persistence & Reply', detail: 'ACID transaction in PostgreSQL 16 + instant formatted feedback delivered via WhatsApp.' },
          ],
          decisions: [
            'Native idempotency prevents duplicate financial entries during WhatsApp Cloud API retries.',
            'Smart media filter intercepts audio/stickers before invoking LLM tokens, cutting operational costs.',
            'Comprehensive suite of 77 unit and integration tests covering all categories, goals, statements, and security.',
          ],
        },
        simulator: [
          {
            label: 'Log Expense',
            userMsg: 'Spent 64.90 at the grocery store today',
            aiParsed: '{ "intent": "EXPENSE", "category": "Food", "amount": "64.90", "date": "2026-10-22" }',
            botReply: '✅ Expense logged: R$ 64,90 in Food.\n📊 Remaining daily budget: R$ 85,10 | Monthly goal: 78% on track.',
          },
          {
            label: 'Set Savings Goal',
            userMsg: 'I want to save 1500 reais by the end of the month',
            aiParsed: '{ "intent": "SET_GOAL", "target_amount": "1500.00", "period": "monthly" }',
            botReply: '🎯 Goal updated: Save R$ 1.500,00.\n💡 To hit your target, your safe daily spending limit is now R$ 112,00.',
          },
          {
            label: 'Check Statement',
            userMsg: 'How are my expenses looking this week?',
            aiParsed: '{ "intent": "STATEMENT", "range": "7_days", "group_by": "category" }',
            botReply: '📑 Weekly Summary:\n• Food: R$ 214,50\n• Transport: R$ 89,00\n💰 Current available balance: R$ 2.840,00.',
          },
        ],
      },
      {
        id: 'pdfix',
        year: '2026',
        badge: 'Full-Stack SaaS & Payments',
        title: 'PDFix — Instant Professional Documents & Quotes SaaS',
        shortDescription:
          'Pay-per-use SaaS built to eliminate costly amateurism for freelancers and independent service providers. Generates ABNT-compliant resumes and service quotes in under 2 minutes with watermarked previews and Pix/Stripe checkout.',
        problemSolved:
          'Helps freelancers close more deals with polished PDF documents without locking them into expensive monthly subscriptions.',
        repoUrl: 'https://github.com/MateusIrineu/pdfix',
        isPrivate: false,
        highlightMetric: '7-Step Funnel • Generation < 2 min',
        tech: [
          'Next.js 16',
          'React 19',
          'Tailwind CSS 4',
          'Node.js',
          'Express',
          'PostgreSQL',
          'Sequelize',
          'Stripe & Pix',
          'Firebase Auth',
          'Docker',
        ],
        architecture: {
          pipeline: [
            { step: '01. Modular Intake', detail: 'Guided multi-block form built in Next.js 16 with real-time validation.' },
            { step: '02. PDF Engine', detail: 'Dynamic ABNT layout generation via @react-pdf/renderer with watermarked preview protection.' },
            { step: '03. Pay-per-Use Checkout', detail: 'Payment integration featuring dynamic Pix QR Code + Stripe checkout.' },
            { step: '04. Instant Delivery', detail: 'Automatic unlock of the final PDF with one-click WhatsApp sharing.' },
          ],
          decisions: [
            'Decoupled monorepo architecture (/frontend, /backend, /infra) containerized with Docker.',
            'Hybrid authentication using Firebase Admin SDK + relational persistence managed via Sequelize ORM migrations.',
            'Conversion-first product flow allowing users to preview their exact document before paying.',
          ],
        },
      },
    ],
    stackTitle: 'Technical Stack & Ecosystem',
    stackSubtitle:
      'Hover or click any technology to highlight which featured projects use it in production.',
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
        name: 'Data, Infra & Quality',
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
    journeyTitle: 'Education & Background',
    journeyItems: [
      {
        period: 'Present',
        title: 'B.S. in Systems Analysis and Development (TADS)',
        org: 'IFRN — Federal Institute of Rio Grande do Norte (Natal-Central)',
        description:
          'Higher education focused on Software Engineering, Linear Data Structures, Object-Oriented Programming, Relational Databases, Computer Architecture, and Web Systems Development.',
        tags: ['Software Engineering', 'Data Structures', 'OOP', 'Web Systems'],
      },
      {
        period: '2024 — 2026',
        title: 'Full-Stack Development & Integrative Projects',
        org: 'SENAC RN',
        description:
          'Hands-on development of MVPs and full-stack applications using Node.js, React, PostgreSQL, automated testing, and software quality standards.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Automated Testing', 'Agile'],
      },
    ],
    archiveTitle: 'Other GitHub Experiments',
    archiveSubtitle: 'Personal study repositories, REST APIs, and low-level computing challenges.',
    archiveProjects: [
      {
        year: '2026',
        name: 'BiblioTech',
        tech: 'Python • OOP • CLI Architecture',
        desc: 'Complete library catalog and loan lifecycle management system applying strict Object-Oriented Programming principles.',
        url: 'https://github.com/MateusIrineu/BiblioTech',
      },
      {
        year: '2026',
        name: 'Subscription Management API',
        tech: 'Node.js • Express 5 • PostgreSQL • JWT',
        desc: 'RESTful API for recurring subscription plans, user management, and secure authentication with Bcrypt and Sequelize.',
        url: 'https://github.com/MateusIrineu/gestao-assinatura',
      },
      {
        year: '2026',
        name: 'Angry Birds MIPS (MARS 4.5)',
        tech: 'MIPS Assembly • Computer Architecture',
        desc: 'Low-level game implementation written directly in MIPS Assembly for register, memory, and hardware architecture studies.',
        url: 'https://github.com/MateusIrineu/angry_birds-mars45',
      },
      {
        year: '2026',
        name: 'Linear Data Structures & LeetCode',
        tech: 'Python • Algorithms • Complexity',
        desc: 'Repositories dedicated to implementing core data structures from scratch and solving algorithmic challenges.',
        url: 'https://github.com/MateusIrineu/leetcode',
      },
    ],
    footerText:
      'Designed with an editorial minimalist aesthetic and built with React, Vite, and Tailwind CSS.',
    ctaTitle: 'Let’s build something together?',
    ctaText:
      'I am open to Full-Stack / Backend Developer roles, challenging freelance projects, and product collaborations.',
  },
};
