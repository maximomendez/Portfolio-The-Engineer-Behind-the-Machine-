# Task: Primer caso de estudio + lista de tecnologías alineada con el CV

## Goal

Que el portfolio contenga solo lo que aparece en el CV (`main_general_node_ia.tex`, fuente de verdad) y que la sección Projects deje de ser "Details Releasing Soon" con un caso de estudio real (Pathmonk). Aplicar en EN y ES.

## Hallazgos del código

- `src/data/projects.ts`: métricas inventadas (99.9% uptime, 10k+ users, 5 systems integrated, 60% less maintenance, 3x throughput, "+80% development speed" sin empresa) y stacks con Redis. Contactel figura como "legacy modernization" con Java/Webhooks, pero el CV dice migración Java -> Node.js.
- `src/components/sections/Projects.tsx`: `QUEUED_PROJECTS` con "Case Study — Details Releasing Soon" (+ textos en `translations.ts` líneas ~172-177 y ~437).
- Menciones a eliminar: `Engine.tsx` (Workers, Redis, Indexes, Caching, Webhooks, Cron Jobs, Queues), `AISystem.tsx` (Webhooks, Prompt Engineering, System Prompts, Chain-of-Thought), `SkillLights.tsx` (AI / ML, Data Engineering), `EngineStackPanel.tsx` (MICROSERVICES, REDIS, K8S, GCP), `translations.ts` (RAG, GPT-4, Redis, colas, cron, webhooks; EN y ES), `skills.ts`.

## Plan

- [ ] 1. Decisiones pendientes con el usuario (ver abajo).
- [ ] 2. Reescribir `projects.ts`: Pathmonk como caso completo (problema, rol, solución técnica, stack, relevancia, resultado con cifras reales). Fitenium y Contactel con solo datos del CV, sin métricas inventadas.
- [ ] 3. Ampliar el tipo `Project` (solo lo necesario) y mostrar el caso en `Projects.tsx`; contenido bilingüe en `translations.ts`.
- [ ] 4. Lista de tecnologías (bloque A): quitar Redis, K8S, GCP, Microservices, RAG, Data Engineering, AI / ML, Indexes, Caching, Cron, Queues, Webhooks, Workers, Prompt Eng./System Prompts/CoT, GPT-4.
- [ ] 5. Lista de tecnologías (bloque B): añadir NestJS, Express, Spring Boot, OAuth2, Swagger, MySQL, Mongoose, Stripe, RevenueCat, n8n API, MCP, Claude Code, Git, Jest, DigitalOcean.
- [ ] 6. Corregir errata del titular ("...systems, solve complex problems...").
- [ ] 7. Ajustar `AISystem` (caso Pathmonk: OpenAI API + n8n, no "Claude analiza sesiones").
- [ ] 8. Experiencia, certificaciones, formación: fuera de este paso (siguiente tarea).

## Decisiones pendientes

1. Pathmonk: ¿"+50% entrega sin bajar la calidad de los tests" o "+80% ciclo de desarrollo"? (Si es el mismo logro, elegir una.)
2. ¿Has usado de verdad Redis, colas, webhooks, cron o RAG? Si sí, se quedan y se añaden al CV.
3. ¿Puedo nombrar Pathmonk y describir la plataforma de agentes (CRM + workflow n8n generado por API)? Sin datos de clientes.

## Verification

- [ ] `grep -riE "redis|kubernetes|k8s|gcp|microservic|\brag\b|data engineering|AI ?/ ?ML|cron|queue|webhook|gpt-4|prompt engineering" src` sin resultados.
- [ ] Presentes: NestJS, Express, Spring Boot, OAuth2, Swagger, MySQL, Stripe, RevenueCat, MCP, Claude Code, Jest, DigitalOcean.
- [ ] Toggle EN/ES coherente.
- [ ] `npm run lint` y `npm run build`.
- [ ] Revisión visual en móvil y escritorio.

## Review

Hecho: Pathmonk (+80% ciclo de desarrollo) y Fitenium como casos de estudio en EN/ES; bloque A eliminado; B aplicado salvo Jest y Git (sin sitio natural aun). Contactel retirado de proyectos. Typecheck y build OK; `npm run lint` falla por `--dir` (script preexistente, no arreglado). Pendiente: Jest/Git/Express en Skills, Machine Summary ("99.9% Uptime", "1+ Projects"), experiencia/certificaciones, revision visual.


## Review 2

Hecho: Machine Summary real (3+ años, 2 casos, 3 empresas), Jest y Git en Engine, seccion Experience (roles, educacion, certificaciones, idiomas) EN/ES con enlace en Nav, CV nuevo copiado a `public/cv-maximo-mendez.pdf`. Pendiente: og:image (`/backend-engine.png` no existe en public), contadores, Lighthouse/movil, revision visual.
