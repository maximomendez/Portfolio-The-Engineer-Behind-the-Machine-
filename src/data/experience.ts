import type { Localized } from "@/data/projects";

export type Role = {
  id: string;
  company: string;
  title: Localized;
  period: Localized;
  location: Localized;
  stack: string[];
  highlights: Localized[];
};

export const roles: Role[] = [
  {
    id: "pathmonk",
    company: "Pathmonk",
    title: { en: "Freelance Full Stack Developer", es: "Full Stack Developer Autónomo" },
    period: { en: "Nov 2025 – Apr 2026", es: "Nov 2025 – Abr 2026" },
    location: { en: "Remote", es: "Remoto" },
    stack: ["TypeScript", "OpenAI API", "n8n API", "Java 11", "Spring Boot", "MySQL"],
    highlights: [
      {
        en: "Built an AI agent orchestration platform integrated with the CRM business logic: when an agent is created, the backend generates the workflow that runs its tasks through the n8n API.",
        es: "Desarrollé una plataforma de orquestación de agentes de IA integrada con la lógica de negocio del CRM: al crear un agente, el backend genera, mediante la API de n8n, el workflow que ejecuta sus tareas.",
      },
      {
        en: "Integrated the OpenAI API and n8n to turn user instructions into workflows. Agents and automations with ChatGPT, Claude and n8n cut manual processes by up to 70%.",
        es: "Integré la API de OpenAI y n8n para convertir instrucciones de usuarios en workflows. Los agentes y automatizaciones con ChatGPT, Claude y n8n redujeron procesos manuales hasta un 70%.",
      },
      {
        en: "Built a cross-platform Android, iOS and PWA app from scratch: TypeScript frontend, REST API integration, JWT authentication, multi-tenant and real-time metrics.",
        es: "Desarrollé desde cero una aplicación multiplataforma Android, iOS y PWA: frontend en TypeScript, integración por API REST, autenticación JWT, multi-tenant y métricas en tiempo real.",
      },
      {
        en: "Built an MCP and brought Claude Code into the development workflow.",
        es: "Construí un MCP e incorporé Claude Code al flujo de desarrollo.",
      },
    ],
  },
  {
    id: "contactel",
    company: "Contactel",
    title: { en: "Full Stack Developer", es: "Full Stack Developer" },
    period: { en: "Apr 2025 – Nov 2025", es: "Abr 2025 – Nov 2025" },
    location: { en: "Santa Cruz de Tenerife", es: "Santa Cruz de Tenerife" },
    stack: ["Node.js", "React", "GraphQL", "PostgreSQL", "Java"],
    highlights: [
      {
        en: "Took part in migrating features from Java to Node.js, making them easier to maintain.",
        es: "Participé en la migración de funcionalidades de Java a Node.js, facilitando su mantenimiento.",
      },
      {
        en: "Built new features for contact center platforms in Node.js, React, GraphQL and PostgreSQL.",
        es: "Desarrollé nuevas funcionalidades para plataformas de contact center en Node.js, React, GraphQL y PostgreSQL.",
      },
      {
        en: "Maintained contact center systems in Java and Node.js and resolved incidents.",
        es: "Mantuve sistemas de contact center en Java y Node.js y resolví incidencias.",
      },
    ],
  },
  {
    id: "fitenium",
    company: "Fitenium",
    title: { en: "Full Stack Developer", es: "Full Stack Developer" },
    period: { en: "Apr 2023 – Feb 2025", es: "Abr 2023 – Feb 2025" },
    location: { en: "Santa Cruz de Tenerife", es: "Santa Cruz de Tenerife" },
    stack: ["Node.js", "GraphQL", "MongoDB", "React Native", "React"],
    highlights: [
      {
        en: "With my team, grew active users in the mobile app by 50% by optimizing load times and redesigning the user experience.",
        es: "Logré junto a mi equipo un aumento del 50% de usuarios activos en la app móvil, optimizando los tiempos de carga y rediseñando la experiencia de usuario.",
      },
      {
        en: "Designed and built a web funnel that increased new-user acquisition by 50%.",
        es: "Diseñé y desarrollé un funnel web que incrementó un 50% la captación de nuevos usuarios.",
      },
      {
        en: "Built the Node.js, GraphQL and MongoDB backend that processes workouts and biometric data, including queries and algorithms to calculate muscle fatigue.",
        es: "Desarrollé en Node.js, GraphQL y MongoDB el backend que procesa entrenamientos y datos biométricos, con consultas a base de datos y algoritmos para calcular la fatiga muscular.",
      },
      {
        en: "Implemented AI-based workout generation and data analysis.",
        es: "Implementé con IA la generación automática de entrenamientos y el análisis de datos.",
      },
      {
        en: "Implemented real-time biometric monitoring during and outside training.",
        es: "Implementé el monitoreo en tiempo real de datos biométricos durante y fuera del entrenamiento.",
      },
      {
        en: "Redesigned the paywall with Stripe and RevenueCat, improving subscription conversion.",
        es: "Rediseñé el paywall con Stripe y RevenueCat, mejorando la conversión de suscripciones.",
      },
      {
        en: "Contributed to CI/CD pipelines that cut deployment times by more than 40%.",
        es: "Colaboré en pipelines CI/CD que redujeron los tiempos de despliegue en más de un 40%.",
      },
    ],
  },
];

export const education: { period: string; title: Localized; school: string }[] = [
  {
    period: "2021 – 2023",
    title: { en: "Higher Vocational Degree in Web Application Development", es: "CFGS Desarrollo de Aplicaciones Web" },
    school: "CIFP César Manrique",
  },
  {
    period: "2018 – 2021",
    title: { en: "Higher Vocational Degree in Network Systems Administration", es: "CFGS Administración de Sistemas Informáticos en Red" },
    school: "CIFP César Manrique",
  },
];

export const certifications: Localized[] = [
  { en: "Web application development with NodeJS and Express", es: "Desarrollo de aplicaciones web con NodeJS y Express" },
  { en: "TypeScript course", es: "Curso de TypeScript" },
  { en: "ITIL Foundation", es: "ITIL Foundation" },
];

export const languages: Localized[] = [
  { en: "Spanish (native)", es: "Español (nativo)" },
  { en: "English (B2)", es: "Inglés (B2)" },
];
