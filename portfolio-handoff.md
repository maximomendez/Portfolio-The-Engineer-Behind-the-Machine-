# Handoff para el proyecto del portfolio (2026-11-16)

Contexto: Máximo Josué Méndez Hernández busca trabajo como backend / full stack (Node.js, TypeScript, Java/Spring Boot, IA y automatización con n8n, OpenAI API, Claude Code). Remoto o presencial solo en Tenerife. CV de referencia: `/Users/maximomendez/Documents/JobFinderAgent/ai-job-search/cv/main_general_node_ia.tex` (PDF compilado en la misma carpeta).

Portfolio: https://portfolio-the-engineer-behind-the-m.vercel.app/ (repo GitHub: maximomendez/Portfolio-The-Engineer-Behind-the-Machine-, TypeScript). Concepto: "The Engineer Behind the Machine" (panel de control, motor, pipeline de IA), EN/ES.

## Datos confirmados por el usuario (se pueden usar)
- Pathmonk (freelance, Nov 2025 - Abr 2026, remoto): plataforma de orquestación de agentes de IA integrada con el CRM; al crear un agente, el backend genera el workflow en n8n por API. OpenAI API + n8n. Hasta -70% de procesos manuales. App Android/iOS/PWA desde cero (TypeScript, API REST, JWT, multi-tenant, métricas en tiempo real). Backend Java 11, Spring Boot, MySQL. Construyó un MCP e integró Claude Code. Mejora de entrega/ciclo de desarrollo en Pathmonk: **cifra pendiente de decidir (+50% entrega sin bajar calidad de tests, o +80% ciclo de desarrollo; pueden ser el mismo logro)**.
- Contactel (Abr - Nov 2025): migración de Java a Node.js; Node.js, React, GraphQL, PostgreSQL; mantenimiento de sistemas de contact center en Java y Node.js.
- Fitenium (Abr 2023 - Feb 2025): app de entrenamiento con IA; Node.js, GraphQL, MongoDB, React Native; +50% usuarios activos (confirmado Fitenium), funnel web +50% captación, CI/CD -40% tiempos de despliegue, paywall Stripe + RevenueCat, generación de entrenamientos con IA, monitoreo biométrico en tiempo real.
- Certificaciones: NodeJS y Express, Curso de TypeScript, Python desde cero, Seguridad Informática, ITIL Foundation (sin versión ni año).

## Hallazgos del análisis del portfolio, por prioridad
1. Los tres proyectos (PRJ-001..003) dicen "Case Study — Details Releasing Soon". Es la sección clave y está vacía. Preferible un caso real (Fitenium o plataforma de agentes de Pathmonk, sin datos del cliente): problema, qué construyó, stack, resultado con cifra.
2. El portfolio afirma tecnologías que el CV NO recoge: Redis, Kubernetes, GCP, microservicios, RAG, "Data Engineering", "AI / ML". Preguntar al usuario cuáles usa de verdad; quitar el resto o subir las reales al CV. (El CV sí tiene: Node.js, NestJS, REST, GraphQL, JWT/OAuth2, Java/Spring Boot, React, React Native, TypeScript, MongoDB, MySQL, PostgreSQL, Stripe, RevenueCat, n8n, Claude Code, MCP, OpenAI API, Git, Docker, CI/CD, Jest, AWS, DigitalOcean.)
3. Cifras sin empresa: "+80% development speed" y "+40% deployment speed". El +40% es Fitenium. El +80% es Pathmonk (confirmado) pero hay que decidir 50 vs 80.
4. Contadores "0+ años" y "0+ proyectos" aparecían en 0 en el texto leído (¿animación al hacer scroll no se dispara?). Comprobar. Años correctos: 3.
5. Sección de IA: "Pathmonk: Claude analyzes session data and generates prioritized optimization recommendations". El CV habla de OpenAI + n8n. Verificar exactitud y confidencialidad.
6. Errata: "I build scalable systems solve complex problems and automate the future" (falta puntuación).
7. CV descargable (`/cv-maximo-mendez.pdf`, 86 KB) es distinto del nuevo (46 KB, `main_general_node_ia.pdf`). Sustituir por el nuevo.
8. `og:image` apunta a `https://maximomendez.dev/backend-engine.png`; comprobar que el dominio/imagen existen (si no, no hay miniatura al compartir).
9. Intro "START ENGINE / SKIP INTRO" y animaciones pesadas; no se probó móvil ni velocidad. Revisar Lighthouse y móvil.
10. GitHub (8 repos): crmApi (Java), dealApi, budgetTracker-api/web, nextjs-web-test, Porfolio (Astro, errata), -maximomendez-.github.io, Portfolio-The-Engineer-Behind-the-Machine-. Parecen ejercicios, con duplicados y casi sin descripciones. Plan: fijar 3 repos buenos con README y capturas; ocultar los vacíos; perfil de GitHub con el mismo titular que LinkedIn.

## Estado de LinkedIn (editado el 2026-11-16 con permiso)
Acerca de nuevo, experiencias con descripción y cargo Full Stack Developer, fechas Fitenium del CV, Formación con nombres oficiales, Open to Work con "En remoto", aptitudes añadidas. Pendiente: ITIL (falta entidad emisora), quitar Híbrido (opcional), banner nuevo (`/Users/maximomendez/Documents/JobFinderAgent/ai-job-search/linkedin/banner.png`), subir CV nuevo al post nuevo, post nuevo (tono humano, no de plantilla).

## Instrucción del usuario: alinear el portfolio con el CV (2026-11-16)
Regla: el portfolio debe contener solo lo que aparece en el CV (`main_general_node_ia.tex`), y el CV es la fuente de verdad. Hay que (A) eliminar del portfolio lo que no está en el CV y (B) añadir lo que está en el CV y falta en el portfolio.

### A. Eliminar del portfolio (no aparece en el CV)
- Tecnologías: **Redis**, **Kubernetes (K8S)**, **GCP**, **Microservices / Microservicios** (en "Architecture"), **RAG / Retrieval** (paso 2 del pipeline de IA), **Data Engineering** (luz de "SKILLS"), **AI / ML** (sustituir por "IA y automatización" / "AI & Automation").
- Elementos genéricos de las tarjetas del motor que el CV no recoge: **Indexes**, **Caching** / "Cache hit rates", **Cron jobs**, **Queues** / "Queue reliability", **Webhooks**, **Workers** / "Worker concurrency".
- En el pipeline de IA: **Prompt Engineering, System Prompts, Chain-of-thought** y la mención a **GPT-4** (dejar "OpenAI API" y "Claude / Claude Code").
- Texto "Cloud: AWS / GCP" -> dejar solo **AWS** (y DigitalOcean, ver B). "DevOps: DOCKER / K8S" -> solo **Docker** y CI/CD.
- Si el usuario dice que realmente usó alguna de estas (por ejemplo Redis o colas), se mantiene y se añade al CV. No eliminar nada de este bloque sin que quede coherente con el CV.
- Revisar también el contenido "REAL USE CASE" de Pathmonk (Claude analiza datos de sesión): solo se mantiene si es exacto y no es confidencial; el CV habla de OpenAI API + n8n.

### B. Añadir al portfolio (está en el CV y falta en el portfolio)
- **Backend:** NestJS, Express, Spring Boot (Java como segundo backend), OAuth2, Swagger, Java 11.
- **Datos e integraciones:** MySQL, Mongoose (MongoDB), Stripe, RevenueCat, n8n API.
- **IA y automatización:** MCP (construyó un MCP propio), Claude Code (con skills propias), agentes de IA con ChatGPT/Claude/n8n.
- **Herramientas:** Git, Jest, despliegue en AWS y **DigitalOcean**.
- **Frontend / móvil:** conservar React, React Native, TypeScript, JavaScript (ya están).
- **Experiencia (el portfolio no tiene sección de experiencia):** Pathmonk (Nov 2025 - Abr 2026), Contactel (Abr - Nov 2025), Fitenium (Abr 2023 - Feb 2025), con las viñetas del CV.
- **Cifras con su empresa:** hasta -70% de procesos manuales (Pathmonk), +50% usuarios activos (Fitenium), +50% captación con funnel web (Fitenium), -40% tiempos de despliegue con CI/CD (Fitenium). La cifra de mejora de ciclo/entrega de Pathmonk (50% o 80%) queda pendiente de decidir.
- **Certificaciones:** NodeJS y Express, Curso de TypeScript, ITIL Foundation (más Python desde cero y Seguridad Informática si se quieren mostrar).
- **Formación e idiomas:** CFGS DAW y CFGS ASIR (CIFP César Manrique); español nativo, inglés B2.
- **Disponibilidad:** "Remoto o Tenerife" (ya aparece Tenerife).

### Resultado esperado
Lista de tecnologías del portfolio = la del CV. Tras aplicar A y B, comprobar con una búsqueda en el código del portfolio que no queden menciones a Redis, Kubernetes/K8S, GCP, microservices, RAG, "Data Engineering", "AI / ML", cron jobs, queues, webhooks, GPT-4, prompt engineering; y que están NestJS, Express, Spring Boot, OAuth2, Swagger, MySQL, Stripe, RevenueCat, MCP, Claude Code, Jest, DigitalOcean. Hay versiones EN y ES (toggle): aplicar los cambios en las dos.

## Siguiente paso acordado
Redactar el texto del primer caso de estudio y la lista de tecnologías filtrada (apartados A y B), y aplicarlo en el repo del portfolio.
