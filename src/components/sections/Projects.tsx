"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const QUEUED_PROJECTS = [
  {
    id: "PRJ-001",
    category: "AUTOMATION",
    type: "Backend Workflow System",
    tags: ["Node.js", "n8n", "PostgreSQL", "REST API"],
    lines: [4, 7, 5, 6, 4],
  },
  {
    id: "PRJ-002",
    category: "AI INTEGRATION",
    type: "Intelligent Data Pipeline",
    tags: ["Python", "OpenAI", "Vector DB", "FastAPI"],
    lines: [6, 4, 7, 5, 3],
  },
  {
    id: "PRJ-003",
    category: "API PLATFORM",
    type: "Multi-Service Integration Layer",
    tags: ["TypeScript", "Docker", "Redis", "Webhooks"],
    lines: [5, 6, 4, 7, 5],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function RedactedLine({ width }: { width: number }) {
  return (
    <div
      className="h-[6px] rounded-sm bg-[#1a1a1a]"
      style={{ width: `${width * 12}%` }}
    />
  );
}

function QueuedCard({
  id,
  category,
  type,
  tags,
  lines,
  index,
  queuedLabel,
}: (typeof QUEUED_PROJECTS)[0] & { index: number; queuedLabel: string }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col gap-5 rounded-sm border border-[#1e1e1e] bg-[#0d0d0d] p-6 overflow-hidden"
    >
      {/* Corner lock */}
      <div className="absolute top-4 right-4 text-[#2a2a2a] group-hover:text-[#ff2d2d] transition-colors duration-300">
        <Lock size={13} strokeWidth={1.5} />
      </div>

      {/* Scan line on hover */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/20 to-transparent opacity-0 group-hover:opacity-100"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            {/* Pulsing status dot */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2d2d] opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ff2d2d]" />
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#ff2d2d]">
              {category}
            </span>
          </div>
          <p className="text-sm font-medium text-[#3a3a3a]">{type}</p>
        </div>

        {/* Classified badge */}
        <span className="shrink-0 rounded-sm border border-[#2a2a2a] px-2 py-0.5 font-mono text-[9px] tracking-widest text-[#2a2a2a] uppercase">
          {queuedLabel}
        </span>
      </div>

      {/* Redacted body */}
      <div className="flex flex-col gap-2 py-1">
        {lines.map((w, i) => (
          <RedactedLine key={i} width={w} />
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-[#141414] px-2 py-0.5 font-mono text-[9px] tracking-wider text-[#3a3a3a] uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* File ID */}
      <div className="absolute bottom-4 right-5 font-mono text-[8px] tracking-widest text-[#1e1e1e]">
        {id}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();

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

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {QUEUED_PROJECTS.map((project, i) => (
            <QueuedCard
              key={project.id}
              {...project}
              type={t.projects.types[project.id as keyof typeof t.projects.types] ?? project.type}
              index={i}
              queuedLabel={t.projects.queued}
            />
          ))}
        </motion.div>

        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-[#1a1a1a]" />
          <span className="font-mono text-[9px] tracking-widest text-[#4a4a4a] uppercase">
            {t.projects.statusBar}
          </span>
          <div className="h-px flex-1 bg-[#1a1a1a]" />
        </motion.div>
      </div>
    </section>
  );
}
