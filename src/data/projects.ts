import type { Lang } from "@/lib/translations";

export type Localized = Record<Lang, string>;

export type ProjectMetric = {
  value: string;
  label: Localized;
};

export type Project = {
  id: string;
  code: string;
  name: string;
  period: Localized;
  circuit: Localized;
  role: Localized;
  problem: Localized;
  solution: Localized;
  relevance: Localized;
  metrics: ProjectMetric[];
  stack: string[];
  accent: "#FF2D2D" | "#00D4FF" | "#3DFF8F";
};

export const projects: Project[] = [
  {
    id: "pathmonk",
    code: "PRJ-001",
    name: "Pathmonk",
    period: { en: "Nov 2025 – Apr 2026 · Freelance, remote", es: "Nov 2025 – Abr 2026 · Freelance, remoto" },
    circuit: { en: "Automation & AI Circuit", es: "Circuito de Automatización e IA" },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    problem: {
      en: "AI agents tied to the CRM needed a workflow built by hand for every agent, and the team repeated manual steps on each one.",
      es: "Los agentes de IA integrados con el CRM requerían montar un flujo a mano por cada agente, con pasos manuales repetidos en cada uno.",
    },
    solution: {
      en: "Built an AI agent orchestration platform integrated with the CRM. When an agent is created, the backend generates its n8n workflow through the n8n API, with the OpenAI API as the intelligence layer. Also built the Android, iOS and PWA app from scratch (TypeScript, REST API, JWT, multi-tenant, real-time metrics) on a Java 11, Spring Boot and MySQL backend. Built an MCP and integrated Claude Code into the development workflow.",
      es: "Construí una plataforma de orquestación de agentes de IA integrada con el CRM. Al crear un agente, el backend genera su workflow en n8n mediante la API de n8n, con la API de OpenAI como capa de inteligencia. También desarrollé desde cero la app Android, iOS y PWA (TypeScript, API REST, JWT, multi-tenant, métricas en tiempo real) sobre un backend Java 11, Spring Boot y MySQL. Construí un MCP e integré Claude Code en el flujo de desarrollo.",
    },
    relevance: {
      en: "Shows I can own a system end to end: backend, automation generated from code, AI integration and a multi-tenant client app.",
      es: "Demuestra que puedo responsabilizarme de un sistema completo: backend, automatización generada por código, integración de IA y una app cliente multi-tenant.",
    },
    metrics: [
      { value: "−70%", label: { en: "manual processes (up to)", es: "procesos manuales (hasta)" } },
      { value: "+80%", label: { en: "development cycle", es: "ciclo de desarrollo" } },
    ],
    stack: [
      "Java 11",
      "Spring Boot",
      "MySQL",
      "TypeScript",
      "REST",
      "JWT",
      "n8n API",
      "OpenAI API",
      "MCP",
      "Claude Code",
    ],
    accent: "#00D4FF",
  },
  {
    id: "fitenium",
    code: "PRJ-002",
    name: "Fitenium",
    period: { en: "Apr 2023 – Feb 2025", es: "Abr 2023 – Feb 2025" },
    circuit: { en: "Performance Circuit", es: "Circuito de Rendimiento" },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    problem: {
      en: "A training app needed personalized workouts, live biometric feedback, paid subscriptions and a delivery pipeline fast enough to keep shipping.",
      es: "Una app de entrenamiento necesitaba entrenamientos personalizados, seguimiento biométrico en vivo, suscripciones de pago y un pipeline de entrega lo bastante ágil para seguir publicando.",
    },
    solution: {
      en: "Built the Node.js and GraphQL backend on MongoDB, the React Native app and the AI workout generation. Added real-time biometric monitoring, the Stripe and RevenueCat paywall, a web acquisition funnel and the CI/CD pipeline.",
      es: "Construí el backend en Node.js y GraphQL sobre MongoDB, la app en React Native y la generación de entrenamientos con IA. Añadí el monitoreo biométrico en tiempo real, el paywall con Stripe y RevenueCat, un funnel web de captación y el pipeline de CI/CD.",
    },
    relevance: {
      en: "Shows I can take a product from API and data layer to mobile app, payments and deployment, and measure the result.",
      es: "Demuestra que puedo llevar un producto desde la API y la capa de datos hasta la app móvil, los pagos y el despliegue, y medir el resultado.",
    },
    metrics: [
      { value: "+50%", label: { en: "active users", es: "usuarios activos" } },
      { value: "+50%", label: { en: "acquisition via web funnel", es: "captación con funnel web" } },
      { value: "−40%", label: { en: "deployment time (CI/CD)", es: "tiempo de despliegue (CI/CD)" } },
    ],
    stack: [
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Mongoose",
      "React Native",
      "React",
      "Stripe",
      "RevenueCat",
      "CI/CD",
    ],
    accent: "#3DFF8F",
  },
];
