export type Lang = "en" | "es";

export const en = {
  nav: {
    links: [
      { label: "Dashboard", href: "#dashboard" },
      { label: "Engine", href: "#engine" },
      { label: "AI System", href: "#ai-system" },
      { label: "Projects", href: "#track" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#pit-stop" },
    ],
  },
  ignition: {
    eyebrow: "THE ENGINEER BEHIND THE MACHINE",
    role: "FULL STACK DEVELOPER — BACKEND, AUTOMATION & AI",
    tagline: "You are entering the machine.",
    startEngine: "START ENGINE",
    booting: "BOOTING...",
    skipIntro: "SKIP INTRO",
    scrollHint: "SCROLL TO EXPLORE",
    boot: {
      init: "INITIALIZING SYSTEM BOOT...",
      engine: "ENGINE MODULE: ONLINE",
      automation: "AUTOMATION CORE: LOADED",
      ai: "AI SUBSYSTEM: READY",
      nominal: "ALL SYSTEMS NOMINAL",
      entering: "ENTERING DASHBOARD...",
      systemLoad: "SYSTEM LOAD",
    },
  },
  engine: {
    eyebrow: "System Overview",
    title1: "Backend & Architecture",
    titleOf: "of the",
    titleHighlight: "Engine",
    subtitle:
      "APIs, runtime, data, automation and AI working as connected parts of one production system.",
    scrollHint: "Scroll to inspect",
    tapToInspect: "Tap a dot to inspect module",
    whatItPowers: "What it powers",
    requestFlow: "Request Flow",
    engineBuilds: "Engine Builds",
    caseStudies: "Case studies",
    engineBuildsSub:
      "Real systems mapped as engine builds: automation, AI and performance circuits.",
    engineModule: "Engine Module",
    modules: {
      combustion: {
        label: "Cylinders / Combustion",
        part: "Business Logic",
        description:
          "Services, validations and domain rules, tested with Jest, that turn raw requests into product behavior.",
        powers: ["Core business rules", "Domain validations", "Predictable behavior"],
        telemetry: "Ruleset integrity",
        output: "Predictable product behavior",
      },
      block: {
        label: "Engine Block / Core",
        part: "Runtime Core",
        description:
          "Node.js, NestJS, Spring Boot and TypeScript runtime decisions built for throughput and reliability.",
        powers: ["Request throughput", "Memory efficiency", "Stable execution"],
        telemetry: "Execution stability",
        output: "Reliable service runtime",
      },
      fuel: {
        label: "Fuel System",
        part: "Data Layer",
        description: "PostgreSQL, MySQL and MongoDB for relational modeling and reliable persistence.",
        powers: ["Fast data access", "Relational modeling", "Reliable persistence"],
        telemetry: "Data flow pressure",
        output: "Fast access to trusted data",
      },
      intake: {
        label: "Intake / Entry",
        part: "API Layer",
        description: "REST, GraphQL, JWT/OAuth2, Swagger and consistent external contracts.",
        powers: ["Clean contracts", "Auth enforcement", "External integrations"],
        telemetry: "Contract surface",
        output: "Clean inputs and integrations",
      },
      turbo: {
        label: "Turbo / Boost",
        part: "Automation",
        description: "n8n workflows generated through its API, Git-based CI/CD and process acceleration.",
        powers: ["Fewer manual steps", "Automated pipelines", "Faster deployments"],
        telemetry: "Manual work reduction",
        output: "Processes that run without drag",
      },
      ecu: {
        label: "ECU / Brain",
        part: "AI Integration",
        description:
          "AI agents with OpenAI API and Claude, an MCP and Claude Code connected to real workflows.",
        powers: ["LLM decisions", "Contextual responses", "Smart data routing"],
        telemetry: "Intelligence layer",
        output: "AI decisions wired to real workflows",
      },
    },
    flow: {
      requestIn: "Request In",
      responseOut: "Response Out",
    },
  },
  aiSystem: {
    eyebrow: "Intelligence Layer",
    title1: "AI Integration",
    title2: "System",
    titleHighlight: "Pipeline",
    subtitle:
      "How I wire LLMs and automation into production systems — select a stage to inspect it.",
    whatItDoes: "What it does",
    stack: "Stack",
    realUseCase: "Real use case",
    output: "Output",
    active: "Active",
    step: "Step",
    selectHint: "Select a stage to inspect",
    stages: {
      input: {
        label: "Input",
        sublabel: "Data Source",
        description:
          "Raw signals enter the system. User input, API payloads and database queries are ingested, validated and normalized before any AI processing begins.",
        useCase:
          "Pathmonk: the agent configuration and CRM data are received through the REST API, validated and normalized.",
        output: "Validated, normalized data ready for enrichment",
      },
      context: {
        label: "Context",
        sublabel: "Agent Context",
        description:
          "The context the agent needs is assembled: CRM data, agent configuration and the workflow definition to generate.",
        useCase:
          "Pathmonk: when an agent is created, its configuration is turned into the definition of an n8n workflow.",
        output: "Agent context ready for the model and the workflow",
      },
      model: {
        label: "Model",
        sublabel: "LLM Processing",
        description:
          "The intelligence core. The OpenAI API and Claude process the context and generate structured or conversational output.",
        useCase:
          "Pathmonk: the agents orchestrated by the platform use the OpenAI API for their intelligence.",
        output: "Raw model response",
      },
      parser: {
        label: "Parser",
        sublabel: "Output Structuring",
        description:
          "Raw model output is transformed into reliable, typed data. JSON extraction, schema validation, error recovery and retry logic make AI output production-safe.",
        useCase:
          "Model output parsed into a typed structure — validated and safe to persist or route downstream.",
        output: "Type-safe, validated data ready for action",
      },
      action: {
        label: "Action",
        sublabel: "Integration",
        description:
          "Intelligence connects to the system. Database writes, API calls and n8n workflows translate AI decisions into real business operations.",
        useCase:
          "Pathmonk: the backend creates the n8n workflow through its API and the agent acts on the CRM.",
        output: "Business action executed in production",
      },
    },
  },
  projects: {
    eyebrow: "03 / Track Record",
    title: "Projects",
    subtitle1: "Two real systems built for production.",
    subtitle2: "Each case study covers the problem, what I built and why it matters.",
    problem: "Problem",
    solution: "What I built",
    relevance: "Why it matters",
    stack: "Stack",
  },
  experience: {
    eyebrow: "04 / Career Log",
    title: "Experience",
    subtitle: "Three roles building backends, automation and AI in production.",
    stack: "Stack",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages",
  },
  contact: {
    rotateDevice: "ROTATE DEVICE",
    rotateHint: "Turn your phone horizontal for the best cockpit experience.",
    statusLines: [
      { key: "STATUS", value: "AVAILABLE" },
      { key: "LOCATION", value: "TENERIFE" },
      { key: "MODE", value: "BUILD" },
    ],
    headline: "Let's build something that",
    headlineHighlight: "runs.",
    description:
      "I'm open to backend, automation and AI projects,\nfreelance work or full-time roles.",
    cta: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Download CV",
    },
    placeholder: "Type your message...",
    send: "SEND >",
    footer: "> The Engineer is Ready —",
    footerHighlight: "Start the Engine.",
  },
  dashboard: {
    identity: {
      eyebrow: "Developer + Architect",
      title: "System Builder",
      description: "I build scalable systems, solve complex problems and automate the future.",
      cta: "About Me",
    },
    windshield: {
      line1: "This is the Control Panel",
      line2of: "of the",
      line2highlight: "Machine",
      scrollCue: "Scroll to Accelerate",
    },
    systemStatus: {
      header: "System Status",
      backend: { label: "Backend", state: "OPERATIONAL", tooltip: "APIs, services, data flow" },
      aiEngine: { label: "AI Engine", state: "ACTIVE", tooltip: "LLM workflows and automation" },
      automation: { label: "Automation", state: "RUNNING", tooltip: "Processes running efficiently" },
    },
    controlCenter: {
      header: "Control Center",
      footer: "Select a Module",
      engine: "Engine",
      aiSystem: "AI System",
      projects: "Projects",
      contact: "Contact",
    },
    speedMetrics: {
      header: "SPEED",
      subheader: "(DEVELOPMENT)",
      metric1Label: "Development Speed",
      metric2Label: "Deployment Speed",
      cta: "CLICK TO ANALYZE",
    },
    skillLights: {
      header: "SKILLS",
      subheader: "(SYSTEM LIGHTS)",
      allSystemsGo: "ALL SYSTEMS GO",
    },
    machineSummary: {
      header: "Machine Summary",
      experience: "Years Experience",
      projects: "Case Studies",
      companies: "Companies",
      learning: "Always Learning",
      footer1: "I Don't Just Code.",
      footer2: "I Engineer Solutions.",
    },
    engineStack: {
      viewStack: "VIEW STACK",
    },
    steeringButtons: {
      whoTitle: "WHO I AM",
      whoSub: "CLICK TO KNOW MORE",
      whatTitle: "WHAT I DO",
      whatSub: "CLICK TO EXPLORE",
    },
    miniPerf: {
      label1: "SYSTEM",
      label2: "PERF",
      optimal: "OPTIMAL",
    },
  },
};

export const es: typeof en = {
  nav: {
    links: [
      { label: "Dashboard", href: "#dashboard" },
      { label: "Motor", href: "#engine" },
      { label: "Sistema IA", href: "#ai-system" },
      { label: "Proyectos", href: "#track" },
      { label: "Experiencia", href: "#experience" },
      { label: "Contacto", href: "#pit-stop" },
    ],
  },
  ignition: {
    eyebrow: "EL INGENIERO DETRÁS DE LA MÁQUINA",
    role: "DESARROLLADOR FULL STACK — BACKEND, AUTOMATIZACIÓN E IA",
    tagline: "Estás ingresando a la máquina.",
    startEngine: "ENCENDER MOTOR",
    booting: "INICIANDO...",
    skipIntro: "SALTAR INTRO",
    scrollHint: "DESPLÁZATE",
    boot: {
      init: "INICIALIZANDO ARRANQUE DEL SISTEMA...",
      engine: "MÓDULO MOTOR: EN LÍNEA",
      automation: "NÚCLEO AUTOMATIZACIÓN: CARGADO",
      ai: "SUBSISTEMA IA: LISTO",
      nominal: "TODOS LOS SISTEMAS NORMALES",
      entering: "ENTRANDO AL DASHBOARD...",
      systemLoad: "CARGA DEL SISTEMA",
    },
  },
  engine: {
    eyebrow: "Vista del Sistema",
    title1: "Backend y Arquitectura",
    titleOf: "del",
    titleHighlight: "Motor",
    subtitle:
      "APIs, runtime, datos, automatización e IA funcionando como partes conectadas de un sistema de producción.",
    scrollHint: "Desplaza para inspeccionar",
    tapToInspect: "Toca un punto para inspeccionar el módulo",
    whatItPowers: "Qué impulsa",
    requestFlow: "Flujo de Petición",
    engineBuilds: "Proyectos del Motor",
    caseStudies: "Casos de estudio",
    engineBuildsSub:
      "Sistemas reales mapeados como proyectos del motor: circuitos de automatización, IA y rendimiento.",
    engineModule: "Módulo del Motor",
    modules: {
      combustion: {
        label: "Cilindros / Combustión",
        part: "Lógica de Negocio",
        description:
          "Servicios, validaciones y reglas de dominio, probados con Jest, que transforman peticiones en comportamiento de producto.",
        powers: ["Reglas de negocio", "Validaciones de dominio", "Comportamiento predecible"],
        telemetry: "Integridad del conjunto de reglas",
        output: "Comportamiento de producto predecible",
      },
      block: {
        label: "Bloque Motor / Núcleo",
        part: "Núcleo de Ejecución",
        description:
          "Decisiones de runtime con Node.js, NestJS, Spring Boot y TypeScript diseñadas para rendimiento y confiabilidad.",
        powers: ["Throughput de peticiones", "Eficiencia de memoria", "Ejecución estable"],
        telemetry: "Estabilidad de ejecución",
        output: "Runtime de servicio confiable",
      },
      fuel: {
        label: "Sistema de Combustible",
        part: "Capa de Datos",
        description: "PostgreSQL, MySQL y MongoDB para modelado relacional y persistencia confiable.",
        powers: ["Acceso rápido a datos", "Modelado relacional", "Persistencia confiable"],
        telemetry: "Presión del flujo de datos",
        output: "Acceso rápido a datos confiables",
      },
      intake: {
        label: "Admisión / Entrada",
        part: "Capa API",
        description: "REST, GraphQL, JWT/OAuth2, Swagger y contratos externos consistentes.",
        powers: ["Contratos limpios", "Enforcement de auth", "Integraciones externas"],
        telemetry: "Superficie de contratos",
        output: "Entradas e integraciones limpias",
      },
      turbo: {
        label: "Turbo / Impulso",
        part: "Automatización",
        description: "Flujos n8n generados por su API, CI/CD con Git y aceleración de procesos.",
        powers: ["Menos pasos manuales", "Pipelines automatizados", "Despliegues más rápidos"],
        telemetry: "Reducción de trabajo manual",
        output: "Procesos que corren sin fricción",
      },
      ecu: {
        label: "ECU / Cerebro",
        part: "Integración IA",
        description:
          "Agentes de IA con la API de OpenAI y Claude, un MCP y Claude Code conectados a flujos reales.",
        powers: ["Decisiones LLM", "Respuestas contextuales", "Ruteo inteligente de datos"],
        telemetry: "Capa de inteligencia",
        output: "Decisiones IA conectadas a flujos reales",
      },
    },
    flow: {
      requestIn: "Petición",
      responseOut: "Respuesta",
    },
  },
  aiSystem: {
    eyebrow: "Capa de Inteligencia",
    title1: "Integración de IA",
    title2: "Sistema",
    titleHighlight: "Pipeline",
    subtitle:
      "Cómo conecto LLMs y automatización en sistemas de producción — selecciona una etapa para inspeccionarla.",
    whatItDoes: "Qué hace",
    stack: "Stack",
    realUseCase: "Caso de uso real",
    output: "Salida",
    active: "Activo",
    step: "Paso",
    selectHint: "Selecciona una etapa para inspeccionar",
    stages: {
      input: {
        label: "Entrada",
        sublabel: "Fuente de Datos",
        description:
          "Las señales brutas ingresan al sistema. Entradas de usuario, payloads de API y consultas de base de datos son ingestados, validados y normalizados antes de cualquier procesamiento IA.",
        useCase:
          "Pathmonk: la configuración del agente y los datos del CRM llegan por la API REST, se validan y se normalizan.",
        output: "Datos validados y normalizados listos para enriquecimiento",
      },
      context: {
        label: "Contexto",
        sublabel: "Contexto del Agente",
        description:
          "Se ensambla el contexto que necesita el agente: datos del CRM, configuración del agente y la definición del workflow a generar.",
        useCase:
          "Pathmonk: al crear un agente, su configuración se convierte en la definición de un workflow de n8n.",
        output: "Contexto del agente listo para el modelo y el workflow",
      },
      model: {
        label: "Modelo",
        sublabel: "Procesamiento LLM",
        description:
          "El núcleo de inteligencia. La API de OpenAI y Claude procesan el contexto y generan salida estructurada o conversacional.",
        useCase:
          "Pathmonk: los agentes que orquesta la plataforma usan la API de OpenAI como capa de inteligencia.",
        output: "Respuesta bruta del modelo",
      },
      parser: {
        label: "Parser",
        sublabel: "Estructuración de Salida",
        description:
          "La salida bruta del modelo se transforma en datos tipados y confiables. Extracción JSON, validación de esquemas, recuperación de errores y lógica de reintentos hacen la salida IA segura para producción.",
        useCase:
          "Salida del modelo parseada en una estructura tipada — validada y segura para persistir o enrutar después.",
        output: "Datos tipados y validados listos para acción",
      },
      action: {
        label: "Acción",
        sublabel: "Integración",
        description:
          "La inteligencia se conecta al sistema. Escrituras a base de datos, llamadas API y flujos n8n traducen decisiones IA en operaciones de negocio reales.",
        useCase:
          "Pathmonk: el backend crea el workflow en n8n mediante su API y el agente actúa sobre el CRM.",
        output: "Acción de negocio ejecutada en producción",
      },
    },
  },
  projects: {
    eyebrow: "03 / Historial",
    title: "Proyectos",
    subtitle1: "Dos sistemas reales construidos para producción.",
    subtitle2: "Cada caso explica el problema, qué construí y por qué importa.",
    problem: "Problema",
    solution: "Qué construí",
    relevance: "Por qué importa",
    stack: "Stack",
  },
  experience: {
    eyebrow: "04 / Trayectoria",
    title: "Experiencia",
    subtitle: "Tres puestos construyendo backend, automatización e IA en producción.",
    stack: "Stack",
    education: "Educación",
    certifications: "Certificaciones",
    languages: "Idiomas",
  },
  contact: {
    rotateDevice: "GIRAR DISPOSITIVO",
    rotateHint: "Gira tu teléfono horizontalmente para la mejor experiencia de cockpit.",
    statusLines: [
      { key: "ESTADO", value: "DISPONIBLE" },
      { key: "UBICACIÓN", value: "TENERIFE" },
      { key: "MODO", value: "CONSTRUIR" },
    ],
    headline: "Construyamos algo que",
    headlineHighlight: "funcione.",
    description:
      "Estoy disponible para proyectos de backend,\nautomatización e IA, freelance o posiciones full-time.",
    cta: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Descargar CV",
    },
    placeholder: "Escribe tu mensaje...",
    send: "ENVIAR >",
    footer: "> El Ingeniero está Listo —",
    footerHighlight: "Enciende el Motor.",
  },
  dashboard: {
    identity: {
      eyebrow: "Desarrollador + Arquitecto",
      title: "Constructor de Sistemas",
      description: "Construyo sistemas escalables\nresuelvo problemas complejos\ny automatizo el futuro.",
      cta: "Sobre Mí",
    },
    windshield: {
      line1: "Este es el Panel de Control",
      line2of: "de la",
      line2highlight: "Máquina",
      scrollCue: "Desplaza para Acelerar",
    },
    systemStatus: {
      header: "Estado del Sistema",
      backend: { label: "Backend", state: "OPERACIONAL", tooltip: "APIs, servicios, flujo de datos" },
      aiEngine: { label: "Motor IA", state: "ACTIVO", tooltip: "Flujos LLM y automatización" },
      automation: { label: "Automatización", state: "CORRIENDO", tooltip: "Procesos ejecutándose eficientemente" },
    },
    controlCenter: {
      header: "Centro de Control",
      footer: "Selecciona un Módulo",
      engine: "Motor",
      aiSystem: "Sistema IA",
      projects: "Proyectos",
      contact: "Contacto",
    },
    speedMetrics: {
      header: "VELOCIDAD",
      subheader: "(DESARROLLO)",
      metric1Label: "Velocidad de Desarrollo",
      metric2Label: "Velocidad de Despliegue",
      cta: "CLICK PARA ANALIZAR",
    },
    skillLights: {
      header: "SKILLS",
      subheader: "(LUCES DEL SISTEMA)",
      allSystemsGo: "TODO OPERACIONAL",
    },
    machineSummary: {
      header: "Resumen de Máquina",
      experience: "Años de Experiencia",
      projects: "Casos de Estudio",
      companies: "Empresas",
      learning: "Siempre Aprendiendo",
      footer1: "No Solo Codifico.",
      footer2: "Ingeniero Soluciones.",
    },
    engineStack: {
      viewStack: "VER STACK",
    },
    steeringButtons: {
      whoTitle: "QUIÉN SOY",
      whoSub: "CLICK PARA SABER MÁS",
      whatTitle: "QUÉ HAGO",
      whatSub: "CLICK PARA EXPLORAR",
    },
    miniPerf: {
      label1: "REND.",
      label2: "SIST.",
      optimal: "ÓPTIMO",
    },
  },
};

export type Translations = typeof en;

export const translations: Record<Lang, Translations> = { en, es };
