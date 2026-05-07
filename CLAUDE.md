# CLAUDE.md — Portfolio “The Engineer Behind the Machine”

## 0. Mission

Build a premium interactive portfolio for a Full Stack Developer specialized in **Backend, Automation, and AI**.

Core narrative:

> The Engineer Behind the Machine

Main message:

> I do not just code. I engineer the systems, workflows, and intelligence that make digital products perform.

The portfolio must feel like entering and operating a **high-performance digital machine**, not a generic personal website.

This project should sell engineering capability, not just visual taste.

The user should quickly understand:

- What I build.
- Why it matters.
- What kind of systems I can own.
- Why Backend, Automation, and AI make me valuable.
- How to contact me or evaluate my work.

Prioritize:

1. Clear professional value.
2. Strong visual storytelling.
3. Performance, accessibility, and maintainability.
4. Interactive elements that explain real skills, not empty decoration.
5. Simple, focused implementation.

---

## 1. Project Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- GSAP ScrollTrigger for complex scroll storytelling
- Lenis for smooth scrolling
- Spline or React Three Fiber only when 3D clearly adds value
- Vercel deployment

Do not add new dependencies unless explicitly requested.

Before adding any dependency, consider whether the same result can be achieved with the existing stack.

---

## 2. Product Direction

The portfolio should feel premium, technical, precise, and confident.

It should communicate that I am not only a developer who builds interfaces, but an engineer who can design, automate, and optimize the systems behind digital products.

The experience should feel like operating a machine:

- Systems activating.
- Workflows connecting.
- Data moving.
- Intelligence being layered on top.
- Performance being measured and improved.
- Follow `STYLE_GUIDE` when adding something.

---

## 3. Target Audience

The portfolio is aimed at:

- Recruiters.
- Hiring managers.
- Startup founders.
- Technical leads.
- Potential freelance or consulting clients.
- Other developers evaluating my work.

The tone should be:

- Professional.
- Direct.
- Confident.
- Human.
- Technical without being confusing.
- Premium without sounding arrogant.

Avoid generic phrases like:

- “Passionate developer.”
- “I love creating amazing digital experiences.”
- “Highly motivated individual.”
- “I build beautiful websites.”

Prefer specific, value-driven language:

- “I build backend systems that automate business workflows.”
- “I connect APIs, data, and AI into production-ready tools.”
- “I design systems that reduce manual work and improve operational speed.”

---

### 5.2 System Overview

Purpose:

Explain my capabilities as connected parts of one system.

Suggested capability groups:

- Backend Engineering
- Automation Workflows
- AI Integration
- Frontend Interfaces
- APIs and Integrations
- Performance and Deployment

This section should show how the skills connect, not just list technologies.

The user should understand that I can design complete systems from logic to interface.

---

### 5.3 Projects

Purpose:

Prove capability through real work.

Projects should be presented as case studies, not just cards.

Each project should include:

- Problem.
- My role.
- Technical solution.
- Stack.
- Backend, Automation, or AI relevance.
- Outcome or measurable impact when available.
- Demo link if available.
- GitHub link if available.

Each project must answer:

> Why does this prove I can build valuable systems?

Avoid vague descriptions such as:

- “A modern web app built with React.”
- “A cool project using AI.”
- “A responsive website.”

Prefer concrete descriptions:

- “Automated a manual lead qualification workflow using API integrations and AI-assisted scoring.”
- “Built a backend service that synchronizes data between external platforms.”
- “Designed a dashboard that exposes operational metrics from automated workflows.”

---

### 5.4 Skills Matrix

Purpose:

Show technical range in an organized way.

Group skills by area:

- Backend
- Automation
- AI
- Frontend
- Databases
- DevOps
- APIs and Integrations
- Tooling

Avoid a random wall of logos.

Skills should feel like modules inside the machine.

Each group should explain what the skill enables, not only name the tool.

Example:

- Node.js — backend APIs, services, and business logic.
- PostgreSQL — relational data modeling and reliable persistence.
- OpenAI APIs — intelligent workflows, assistants, and data processing.
- n8n / Make / Zapier — business process automation.
- Docker — reproducible environments and deployment workflows.

---

### 5.5 Process

Purpose:

Explain how I think and work.

Possible structure:

1. Understand the business process.
2. Map the system and data flow.
3. Design the backend or automation logic.
4. Build the interface or integration layer.
5. Test, optimize, and deploy.
6. Measure, improve, and maintain.

This section should show that I think in systems, not isolated screens.

---

### 5.6 About

Purpose:

Make the portfolio human without weakening the technical positioning.

The About section should be concise.

It should explain:

- Who I am.
- What kind of problems I enjoy solving.
- Why I focus on Backend, Automation, and AI.
- What makes my approach different.

Avoid long autobiographical text.

---

### 5.7 Contact

Purpose:

Make the next step obvious.

Include clear calls to action:

- Contact me.
- View projects.
- Download CV.
- Visit GitHub.
- Connect on LinkedIn.

The contact section should feel like the final activation point of the machine.

---

## 6. Content Rules

Content must be specific, credible, and value-oriented.

Every section should answer at least one of these questions:

- What can I build?
- What problem does it solve?
- Why does it matter?
- What proof do I have?
- What should the visitor do next?

Use strong but believable language.

Avoid excessive hype.

Good tone:

> I build systems that connect backend logic, automation, and AI to reduce manual work and improve product performance.

Bad tone:

> I create stunning digital experiences with passion and innovation.

Do not use filler text.

Do not add fake metrics, fake clients, or fake achievements.

If real numbers are unavailable, describe impact qualitatively.

Example:

- “Reduced repetitive manual steps.”
- “Centralized scattered workflow logic.”
- “Improved visibility into operational data.”
- “Connected multiple tools into one automated flow.”

---

## 7. Interaction and Motion Rules

Motion must support the machine narrative.

Use animation for:

- Revealing system layers.
- Showing data or workflow movement.
- Explaining automation pipelines.
- Creating a premium sense of precision.
- Guiding attention between sections.

Use Framer Motion for:

- Component-level animations.
- Reveals.
- Hover states.
- Micro-interactions.
- Page or section transitions.

Use GSAP ScrollTrigger only for:

- Complex scroll storytelling.
- Timeline-based sequences.
- Advanced pinned sections.
- System-flow animations that would be difficult with Framer Motion alone.

Use Lenis for smooth scrolling only if it improves the experience and does not harm usability.

Use Spline or React Three Fiber only when the 3D element clearly supports the concept.

Avoid:

- Animating every element.
- Scroll hijacking.
- Long intro animations.
- Heavy 3D for decoration.
- Interactions that confuse navigation.
- Effects that hurt performance or accessibility.

The site should feel engineered, not chaotic.

---

## 8. Performance Rules

Performance is part of the product quality.

Follow these rules:

- Keep bundle size under control.
- Avoid unnecessary client components.
- Prefer server components when possible.
- Use dynamic imports for heavy interactive sections.
- Lazy-load 3D, videos, and large media.
- Optimize images.
- Avoid unnecessary re-renders.
- Prefer CSS and Tailwind effects before heavy JavaScript.
- Do not sacrifice readability for visual effects.
- Maintain strong Lighthouse scores.

Interactive sections should be impressive, but not expensive without reason.

If a visual effect creates performance issues, simplify it.

---

## 9. Accessibility Rules

The portfolio must remain accessible and usable.

Follow these rules:

- Use semantic HTML where possible.
- Maintain strong color contrast.
- Keep text readable on all screen sizes.
- Ensure interactive elements are keyboard accessible.
- Do not rely only on color to communicate meaning.
- Add meaningful alt text for important images.
- Respect reduced motion preferences where possible.
- Avoid motion that could cause discomfort.
- Ensure links and buttons have clear labels.

Premium design should not reduce usability.

---

## 10. SEO Rules

Maintain basic SEO quality.

Include:

- Clear page title.
- Strong meta description.
- Correct heading hierarchy.
- Descriptive section content.
- Clean URLs.
- Useful alt text.
- Open Graph metadata when relevant.
- Structured and readable content.

The website should clearly communicate:

- Full Stack Developer.
- Backend.
- Automation.
- AI.
- Portfolio.
- Projects.
- Systems engineering.

Avoid keyword stuffing.

---

## 11. Code Principles

Follow these principles:

- Simplicity first.
- Minimal impact.
- No unnecessary abstractions.
- No unnecessary dependencies.
- Clear naming.
- Maintainable components.
- Mobile-first implementation.
- Reusable components only when reuse is real.
- Keep business/content data separate from presentation when useful.
- Avoid touching unrelated files.
- Avoid large refactors unless required.

When creating components:

- Keep them focused.
- Use clear props.
- Avoid overly clever logic.
- Prefer composition over complex configuration.
- Keep styling readable.

When using TypeScript:

- Avoid `any` unless there is a strong reason.
- Define useful types for content and components.
- Keep types simple and close to where they are used when appropriate.

---

## 12. Design System Guidelines

Use a consistent design language.

Preferred UI patterns:

- Cards as system modules.
- Lines as data connections.
- Pills as labels or system tags.
- Grids as technical structure.
- Subtle glows as active states.
- Monospace accents for machine/interface details.
- Clear section headers.
- Strong visual hierarchy.

Use shadcn/ui when it helps create reliable, accessible UI primitives.

Do not overuse prebuilt components if custom layout is more appropriate.

The interface should feel custom and intentional.

---

## 12.1 Typography Scale

Use a consistent typography scale across the portfolio.

The typography should feel premium, technical, and precise. Text must remain readable on all screen sizes.

### Font Direction

Use:

- Sans-serif for primary text.
- Monospace only for technical accents, labels, system codes, tags, or interface details.

Avoid using too many font sizes or font styles.

### Recommended Type Scale

Use Tailwind CSS responsive classes.

#### Hero

- Hero eyebrow / label:
  - `text-xs md:text-sm`
  - uppercase
  - tracking-wide or tracking-widest
  - monospace optional

- Hero headline:
  - `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
  - font-bold or font-semibold
  - tight line height: `leading-[0.95]` or `leading-tight`

- Hero supporting text:
  - `text-base md:text-lg lg:text-xl`
  - max width around `max-w-2xl`
  - relaxed line height: `leading-relaxed`

#### Section Headers

- Section eyebrow:
  - `text-xs md:text-sm`
  - uppercase
  - tracking-widest
  - muted color

- Section title:
  - `text-3xl md:text-4xl lg:text-5xl`
  - font-semibold
  - tight line height

- Section description:
  - `text-base md:text-lg`
  - max width around `max-w-2xl`
  - muted color

#### Cards and Modules

- Card title:
  - `text-lg md:text-xl`
  - font-semibold

- Card description:
  - `text-sm md:text-base`
  - muted color
  - `leading-relaxed`

- Card metadata / tags:
  - `text-xs`
  - uppercase optional
  - tracking-wide

#### Navigation

- Nav links:
  - `text-sm`
  - font-medium

- Buttons:
  - `text-sm md:text-base`
  - font-medium

#### Body Text

- Default paragraph:
  - `text-base`
  - `leading-7`

- Small supporting text:
  - `text-sm`
  - muted color

- Technical labels:
  - `text-xs`
  - monospace
  - uppercase
  - tracking-wider

### Rules

- Do not invent random font sizes per component.
- Prefer the defined scale unless there is a clear design reason.
- Keep line length readable with `max-w-*`.
- Hero text may be large, but must not break awkwardly on mobile.
- Avoid text smaller than `text-xs`.
- Maintain strong contrast for all important content.
- Use `text-muted-foreground` or equivalent only for secondary content.

---

## 13. Workflow Orchestration

### 13.1 Plan Mode Default

For simple tasks, implement directly.

Simple tasks include:

- Text changes.
- Small styling adjustments.
- Adding or editing a link.
- Minor spacing changes.
- Small component tweaks.

For non-trivial tasks, enter plan mode first.

Non-trivial tasks include:

- New major section.
- Architecture changes.
- Large visual changes.
- Refactors.
- New animation systems.
- SEO structure changes.
- Data/content model changes.
- Bug reports with unclear cause.

For non-trivial tasks:

1. Create or update `tasks/todo.md`.
2. Write a clear plan with checkable items.
3. Include verification steps.
4. Explain the approach before implementation.
5. Then implement in focused steps.

If implementation diverges from the plan, stop and re-plan.

---

### 13.2 Task Management

Use `tasks/todo.md` for non-trivial work.

The file should include:

- Task title.
- Goal.
- Plan.
- Checklist.
- Verification steps.
- Review section after completion.

Example structure:

```md
# Task: Add Projects Section

## Goal

Create a project section that presents work as engineering case studies.

## Plan

- [ ] Define project content structure.
- [ ] Create reusable project card component.
- [ ] Build responsive projects section.
- [ ] Add motion carefully.
- [ ] Verify responsive behavior.
- [ ] Run lint and build.

## Review

To be completed after implementation.