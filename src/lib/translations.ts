export type Lang = "en" | "es";

export const en = {
  nav: {
    links: [
      { label: "Dashboard", href: "#dashboard" },
      { label: "Engine", href: "#engine" },
      { label: "AI System", href: "#ai-system" },
      { label: "Projects", href: "#track" },
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
      "Real systems mapped as engine builds: intelligence, performance and modernization circuits.",
    engineModule: "Engine Module",
    modules: {
      combustion: {
        label: "Cylinders / Combustion",
        part: "Business Logic",
        description:
          "Services, validations and domain rules that turn raw requests into product behavior.",
        powers: ["Core business rules", "Domain validations", "Predictable behavior"],
        telemetry: "Ruleset integrity",
        output: "Predictable product behavior",
      },
      block: {
        label: "Engine Block / Core",
        part: "Runtime Core",
        description:
          "Node.js, Java and TypeScript runtime decisions built for throughput and reliability.",
        powers: ["Request throughput", "Memory efficiency", "Worker concurrency"],
        telemetry: "Execution stability",
        output: "Reliable service runtime",
      },
      fuel: {
        label: "Fuel System",
        part: "Data Layer",
        description: "PostgreSQL, Redis, caching, indexing and queue-backed data flow.",
        powers: ["Fast data access", "Cache hit rates", "Queue reliability"],
        telemetry: "Data flow pressure",
        output: "Fast access to trusted data",
      },
      intake: {
        label: "Intake / Entry",
        part: "API Layer",
        description: "REST, GraphQL, auth, webhooks and consistent external contracts.",
        powers: ["Clean contracts", "Auth enforcement", "External integrations"],
        telemetry: "Contract surface",
        output: "Clean inputs and integrations",
      },
      turbo: {
        label: "Turbo / Boost",
        part: "Automation",
        description: "n8n workflows, cron jobs, queues, CI/CD and process acceleration.",
        powers: ["Zero manual steps", "Scheduled pipelines", "Event-driven flows"],
        telemetry: "Manual work reduction",
        output: "Processes that run without drag",
      },
      ecu: {
        label: "ECU / Brain",
        part: "AI Integration",
        description:
          "LLM workflows, agents and Claude/OpenAI integrations connected to production data.",
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
      "How I wire LLMs, retrieval and automation into production systems — select a stage to inspect it.",
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
          "Raw signals enter the system. User prompts, API payloads, documents and database queries are ingested, validated and normalized before any AI processing begins.",
        useCase:
          "Pathmonk: customer journey events streamed from tracking APIs and normalized into a processing queue.",
        output: "Validated, normalized data ready for enrichment",
      },
      context: {
        label: "Context",
        sublabel: "RAG / Retrieval",
        description:
          "Relevant knowledge is retrieved and injected. Documents are embedded, previous interactions recalled and domain data surfaced — before the model processes a single token.",
        useCase:
          "Document Q&A: user question retrieves top-k relevant chunks from an embedded knowledge base, grounding the model in verified data.",
        output: "Enriched prompt with grounding context",
      },
      model: {
        label: "Model",
        sublabel: "LLM Processing",
        description:
          "The intelligence core. Claude, GPT-4 or specialized models process the enriched context, apply reasoning chains and generate structured or conversational output.",
        useCase:
          "Pathmonk: Claude analyzes session data and generates prioritized optimization recommendations mapped to conversion goals.",
        output: "Raw model response with full reasoning",
      },
      parser: {
        label: "Parser",
        sublabel: "Output Structuring",
        description:
          "Raw model output is transformed into reliable, typed data. JSON extraction, schema validation, error recovery and retry logic make AI output production-safe.",
        useCase:
          "Lead scoring: model output parsed into { score, reason, priority } — typed, validated and safe to persist or route downstream.",
        output: "Type-safe, validated data ready for action",
      },
      action: {
        label: "Action",
        sublabel: "Integration",
        description:
          "Intelligence connects to the system. Database writes, API calls, automation triggers and notifications translate AI decisions into real business operations.",
        useCase:
          "Automated workflow: AI decision triggers an n8n flow to update the CRM, send a prioritized alert and schedule the next follow-up action.",
        output: "Business action executed in production",
      },
    },
  },
  projects: {
    eyebrow: "03 / Track Record",
    title: "Projects",
    subtitle1: "Case studies are being prepared for deployment.",
    subtitle2: "Each file documents a real system — backend, automation, or AI.",
    queued: "QUEUED",
    statusBar: "3 systems queued — deployment pending",
    types: {
      "PRJ-001": "Backend Workflow System",
      "PRJ-002": "Intelligent Data Pipeline",
      "PRJ-003": "Multi-Service Integration Layer",
    },
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
      description: "I build scalable systems solve complex problems and automate the future.",
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
      projects: "Projects Delivered",
      uptime: "Uptime Focus",
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
      "Sistemas reales mapeados como proyectos del motor: circuitos de inteligencia, rendimiento y modernización.",
    engineModule: "Módulo del Motor",
    modules: {
      combustion: {
        label: "Cilindros / Combustión",
        part: "Lógica de Negocio",
        description:
          "Servicios, validaciones y reglas de dominio que transforman peticiones en comportamiento de producto.",
        powers: ["Reglas de negocio", "Validaciones de dominio", "Comportamiento predecible"],
        telemetry: "Integridad del conjunto de reglas",
        output: "Comportamiento de producto predecible",
      },
      block: {
        label: "Bloque Motor / Núcleo",
        part: "Núcleo de Ejecución",
        description:
          "Decisiones de runtime con Node.js, Java y TypeScript diseñadas para rendimiento y confiabilidad.",
        powers: ["Throughput de peticiones", "Eficiencia de memoria", "Concurrencia de workers"],
        telemetry: "Estabilidad de ejecución",
        output: "Runtime de servicio confiable",
      },
      fuel: {
        label: "Sistema de Combustible",
        part: "Capa de Datos",
        description: "PostgreSQL, Redis, caché, índices y flujo de datos respaldado por colas.",
        powers: ["Acceso rápido a datos", "Tasas de caché", "Confiabilidad de colas"],
        telemetry: "Presión del flujo de datos",
        output: "Acceso rápido a datos confiables",
      },
      intake: {
        label: "Admisión / Entrada",
        part: "Capa API",
        description: "REST, GraphQL, autenticación, webhooks y contratos externos consistentes.",
        powers: ["Contratos limpios", "Enforcement de auth", "Integraciones externas"],
        telemetry: "Superficie de contratos",
        output: "Entradas e integraciones limpias",
      },
      turbo: {
        label: "Turbo / Impulso",
        part: "Automatización",
        description: "Flujos n8n, cron jobs, colas, CI/CD y aceleración de procesos.",
        powers: ["Cero pasos manuales", "Pipelines programados", "Flujos por eventos"],
        telemetry: "Reducción de trabajo manual",
        output: "Procesos que corren sin fricción",
      },
      ecu: {
        label: "ECU / Cerebro",
        part: "Integración IA",
        description:
          "Flujos LLM, agentes e integraciones de Claude/OpenAI conectadas a datos de producción.",
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
      "Cómo conecto LLMs, recuperación y automatización en sistemas de producción — selecciona una etapa para inspeccionarla.",
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
          "Las señales brutas ingresan al sistema. Prompts de usuario, payloads de API, documentos y consultas de base de datos son ingestados, validados y normalizados antes de cualquier procesamiento IA.",
        useCase:
          "Pathmonk: eventos del customer journey transmitidos desde APIs de tracking y normalizados en una cola de procesamiento.",
        output: "Datos validados y normalizados listos para enriquecimiento",
      },
      context: {
        label: "Contexto",
        sublabel: "RAG / Recuperación",
        description:
          "El conocimiento relevante es recuperado e inyectado. Documentos embebidos, interacciones previas recordadas y datos de dominio disponibles — antes de que el modelo procese un solo token.",
        useCase:
          "Q&A de documentos: la pregunta del usuario recupera los top-k fragmentos relevantes de una base de conocimiento embebida, fundamentando el modelo en datos verificados.",
        output: "Prompt enriquecido con contexto fundamentado",
      },
      model: {
        label: "Modelo",
        sublabel: "Procesamiento LLM",
        description:
          "El núcleo de inteligencia. Claude, GPT-4 o modelos especializados procesan el contexto enriquecido, aplican cadenas de razonamiento y generan salida estructurada o conversacional.",
        useCase:
          "Pathmonk: Claude analiza datos de sesión y genera recomendaciones de optimización priorizadas mapeadas a objetivos de conversión.",
        output: "Respuesta del modelo con razonamiento completo",
      },
      parser: {
        label: "Parser",
        sublabel: "Estructuración de Salida",
        description:
          "La salida bruta del modelo se transforma en datos tipados y confiables. Extracción JSON, validación de esquemas, recuperación de errores y lógica de reintentos hacen la salida IA segura para producción.",
        useCase:
          "Lead scoring: salida del modelo parseada en { score, reason, priority } — tipada, validada y segura para persistir o enrutar downstream.",
        output: "Datos tipados y validados listos para acción",
      },
      action: {
        label: "Acción",
        sublabel: "Integración",
        description:
          "La inteligencia se conecta al sistema. Escrituras a base de datos, llamadas API, activadores de automatización y notificaciones traducen decisiones IA en operaciones de negocio reales.",
        useCase:
          "Flujo automatizado: la decisión IA activa un flujo n8n para actualizar el CRM, enviar una alerta priorizada y programar el siguiente seguimiento.",
        output: "Acción de negocio ejecutada en producción",
      },
    },
  },
  projects: {
    eyebrow: "03 / Historial",
    title: "Proyectos",
    subtitle1: "Los casos de estudio están siendo preparados para lanzamiento.",
    subtitle2: "Cada archivo documenta un sistema real — backend, automatización o IA.",
    queued: "EN COLA",
    statusBar: "3 sistemas en cola — despliegue pendiente",
    types: {
      "PRJ-001": "Sistema de Flujo Backend",
      "PRJ-002": "Pipeline de Datos Inteligente",
      "PRJ-003": "Capa de Integración Multi-Servicio",
    },
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
      projects: "Proyectos Entregados",
      uptime: "Enfoque en Uptime",
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
