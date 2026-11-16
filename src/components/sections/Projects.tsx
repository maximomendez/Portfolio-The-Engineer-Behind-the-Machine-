"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { projects, type Project } from "@/data/projects";
import type { Lang, Translations } from "@/lib/translations";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Field({ label, children }: { label: string; children: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h4 className="font-mono text-xs uppercase tracking-wider text-[#6b6b6b]">{label}</h4>
      <p className="text-sm md:text-base leading-relaxed text-[#b5b5b5]">{children}</p>
    </div>
  );
}

function CaseStudyCard({
  project,
  lang,
  labels,
}: {
  project: Project;
  lang: Lang;
  labels: Translations["projects"];
}) {
  return (
    <motion.article
      variants={cardVariants}
      className="relative flex flex-col gap-6 overflow-hidden rounded-sm border border-[#1e1e1e] bg-[#0d0d0d] p-6"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: project.accent }}>
            {project.circuit[lang]}
          </span>
          <span className="font-mono text-xs tracking-widest text-[#4a4a4a]">{project.code}</span>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-[#ededed]">{project.name}</h3>
        <p className="text-sm text-[#6b6b6b]">
          {project.role[lang]} · {project.period[lang]}
        </p>
      </header>

      <Field label={labels.problem}>{project.problem[lang]}</Field>
      <Field label={labels.solution}>{project.solution[lang]}</Field>
      <Field label={labels.relevance}>{project.relevance[lang]}</Field>

      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#1e1e1e] pt-5">
        {project.metrics.map((metric) => (
          <div key={metric.label.en} className="flex flex-col gap-1">
            <dt className="order-2 text-xs text-[#6b6b6b]">{metric.label[lang]}</dt>
            <dd className="order-1 font-mono text-2xl font-semibold" style={{ color: project.accent }}>
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-auto flex flex-wrap gap-1.5" aria-label={labels.stack}>
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-sm bg-[#141414] px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-[#9a9a9a]"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="track"
      className="relative min-h-screen w-full border-t border-[#1e1e1e] bg-[#0b0b0b] flex items-center py-24"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ededed 1px, transparent 1px), linear-gradient(90deg, #ededed 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-[#6b6b6b] uppercase mb-3">
            {t.projects.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#ededed] mb-4">
            {t.projects.title}
          </h2>
          <p className="text-sm md:text-base text-[#6b6b6b] max-w-xl leading-relaxed">
            {t.projects.subtitle1}
            <br />
            {t.projects.subtitle2}
          </p>
        </motion.div>

        {/* Case studies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {projects.map((project) => (
            <CaseStudyCard key={project.id} project={project} lang={lang} labels={t.projects} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
