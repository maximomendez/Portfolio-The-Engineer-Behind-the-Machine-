"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeIn, staggerContainer, staggerFast } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { metrics, type Metric } from "@/data/metrics";
import { skills, type SkillCategory } from "@/data/skills";

// ─── Animated counter ────────────────────────────────────────────────────────

function useCounter(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const animate = (now: number) => {
      if (startTime.current === null) startTime.current = now;
      const elapsed = now - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out expo
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [active, target, duration]);

  return value;
}

// ─── Metric card ─────────────────────────────────────────────────────────────

function MetricCard({ metric, inView }: { metric: Metric; inView: boolean }) {
  const count = useCounter(metric.value, inView, 1600);
  const isRed = metric.accentColor === "#FF2D2D";
  const isBlue = metric.accentColor === "#00D4FF";

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col gap-3 border border-[#1e1e1e] bg-[#0f0f0f] p-6 transition-colors duration-300 hover:border-[#2a2a2a]"
      style={{
        "--glow": isRed
          ? "rgba(255,45,45,0.15)"
          : isBlue
            ? "rgba(0,212,255,0.15)"
            : "rgba(61,255,143,0.15)",
      } as React.CSSProperties}
    >
      {/* Accent top border */}
      <div
        className="absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: metric.accentColor }}
        aria-hidden
      />

      {/* Label */}
      <span className="font-mono text-[10px] tracking-[0.2em] text-[#6b6b6b]">
        {metric.label.toUpperCase()}
      </span>

      {/* Value */}
      <div className="flex items-baseline gap-0.5">
        {metric.prefix && (
          <span
            className="font-heading text-3xl font-bold"
            style={{ color: metric.accentColor }}
          >
            {metric.prefix}
          </span>
        )}
        <span
          className="font-heading text-5xl font-bold tabular-nums"
          style={{ color: metric.accentColor }}
        >
          {count}
        </span>
        <span
          className="font-heading text-2xl font-bold"
          style={{ color: metric.accentColor }}
        >
          {metric.suffix}
        </span>
      </div>

      {/* Context */}
      <p className="font-body text-sm leading-relaxed text-[#6b6b6b]">
        {metric.context}
      </p>
    </motion.div>
  );
}

// ─── Skill bar ────────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<SkillCategory, string> = {
  backend: "#FF2D2D",
  automation: "#3DFF8F",
  ai: "#00D4FF",
  infra: "#6b6b6b",
};

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  backend: "Backend",
  automation: "Automation",
  ai: "AI / LLMs",
  infra: "Infrastructure",
};

function SkillBar({
  name,
  level,
  category,
  inView,
  index,
}: {
  name: string;
  level: number;
  category: SkillCategory;
  inView: boolean;
  index: number;
}) {
  const color = CATEGORY_COLORS[category];

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-wide text-[#ededed]/80">
          {name}
        </span>
        <span className="font-mono text-[10px] text-[#6b6b6b]">{level}%</span>
      </div>
      <div className="h-px w-full bg-[#1a1a1a]">
        <motion.div
          className="h-full origin-left"
          style={{ backgroundColor: color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1 + index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

// ─── Expertise card ───────────────────────────────────────────────────────────

type ExpertiseArea = {
  label: string;
  description: string;
  accent: string;
  icon: string;
};

const EXPERTISE: ExpertiseArea[] = [
  {
    label: "Backend",
    description: "APIs, services, business logic, databases",
    accent: "#FF2D2D",
    icon: "◈",
  },
  {
    label: "Architecture",
    description: "Scalable systems, patterns, design decisions",
    accent: "#FF2D2D",
    icon: "⬡",
  },
  {
    label: "APIs",
    description: "REST, GraphQL, webhooks, integrations",
    accent: "#00D4FF",
    icon: "⇄",
  },
  {
    label: "Automation",
    description: "Workflows, pipelines, process elimination",
    accent: "#3DFF8F",
    icon: "⟳",
  },
  {
    label: "AI",
    description: "LLM agents, AI-assisted dev, Claude",
    accent: "#00D4FF",
    icon: "◉",
  },
  {
    label: "Data",
    description: "PostgreSQL, transformations, sync",
    accent: "#3DFF8F",
    icon: "≡",
  },
];

function ExpertiseCard({ area, delay }: { area: ExpertiseArea; delay: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay }}
      className="group relative border border-[#1a1a1a] bg-[#0f0f0f] p-4 transition-colors duration-200 hover:border-[#2a2a2a]"
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className="font-mono text-base leading-none"
          style={{ color: area.accent }}
          aria-hidden
        >
          {area.icon}
        </span>
        <span className="font-mono text-[11px] tracking-[0.15em] text-[#ededed]">
          {area.label.toUpperCase()}
        </span>
      </div>
      <p className="font-body text-xs leading-relaxed text-[#6b6b6b]">
        {area.description}
      </p>
    </motion.div>
  );
}

// ─── Section nav ──────────────────────────────────────────────────────────────

type NavTarget = { id: string; label: string; accent: string };

const NAV_TARGETS: NavTarget[] = [
  { id: "engine", label: "Engine", accent: "#FF2D2D" },
  { id: "ai-system", label: "AI System", accent: "#00D4FF" },
  { id: "track", label: "Track", accent: "#3DFF8F" },
  { id: "pit-stop", label: "Pit Stop", accent: "#6b6b6b" },
];

function SectionNavPill({ target }: { target: NavTarget }) {
  const handleClick = () => {
    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="group flex items-center gap-2 border border-[#1a1a1a] px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-[#6b6b6b] transition-all duration-200 hover:border-[#2a2a2a] hover:text-[#ededed] focus-visible:outline-none"
    >
      <span
        className="h-1 w-1 rounded-full transition-all duration-200 group-hover:scale-150"
        style={{ backgroundColor: target.accent }}
        aria-hidden
      />
      {target.label.toUpperCase()}
    </button>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export function Dashboard() {
  const { ref: sectionRef, inView } = useInView(0.1);
  const { ref: skillsRef, inView: skillsInView } = useInView(0.15);

  const backendSkills = skills.filter((s) => s.category === "backend");
  const automationSkills = skills.filter((s) => s.category === "automation");
  const aiSkills = skills.filter((s) => s.category === "ai");
  const infraSkills = skills.filter((s) => s.category === "infra");

  return (
    <section
      id="dashboard"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative border-t border-[#1a1a1a] bg-[#0b0b0b] px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,237,237,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(237,237,237,0.018) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">

        {/* ── Section header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.span
            variants={fadeIn}
            className="mb-4 block font-mono text-[10px] tracking-[0.35em] text-[#6b6b6b]"
          >
            02 — DASHBOARD
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl font-bold tracking-tight text-[#ededed] sm:text-5xl lg:text-6xl"
          >
            Control Panel
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-xl font-body text-base leading-relaxed text-[#6b6b6b]"
          >
            Full Stack Developer specialized in Backend, Automation & AI.
            I build the systems, workflows and intelligence that make digital products perform.
          </motion.p>
        </motion.div>

        {/* ── Main grid: identity + metrics ── */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_1.4fr]">

          {/* Identity / expertise */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-4"
          >
            <motion.div variants={fadeIn} className="mb-2">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#6b6b6b]">
                EXPERTISE AREAS
              </span>
            </motion.div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {EXPERTISE.map((area, i) => (
                <ExpertiseCard key={area.label} area={area} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-4"
          >
            <motion.div variants={fadeIn} className="mb-2">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#6b6b6b]">
                PERFORMANCE METRICS
              </span>
            </motion.div>
            <div className="grid gap-3 sm:grid-cols-1">
              {metrics.map((m) => (
                <MetricCard key={m.label} metric={m} inView={inView} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Skills ── */}
        <div
          ref={skillsRef as React.RefObject<HTMLDivElement>}
          className="mb-16"
        >
          <div className="mb-6">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#6b6b6b]">
              TECHNICAL STACK
            </span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {/* Backend */}
            <SkillGroup
              category="backend"
              skills={backendSkills}
              inView={skillsInView}
              startIndex={0}
            />
            {/* Automation */}
            <SkillGroup
              category="automation"
              skills={automationSkills}
              inView={skillsInView}
              startIndex={backendSkills.length}
            />
            {/* AI */}
            <SkillGroup
              category="ai"
              skills={aiSkills}
              inView={skillsInView}
              startIndex={backendSkills.length + automationSkills.length}
            />
            {/* Infra */}
            <SkillGroup
              category="infra"
              skills={infraSkills}
              inView={skillsInView}
              startIndex={
                backendSkills.length + automationSkills.length + aiSkills.length
              }
            />
          </div>
        </div>

        {/* ── Section navigation ── */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-4"
        >
          <motion.span
            variants={fadeIn}
            className="font-mono text-[10px] tracking-[0.2em] text-[#6b6b6b]"
          >
            NAVIGATE
          </motion.span>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
            {NAV_TARGETS.map((t) => (
              <SectionNavPill key={t.id} target={t} />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── Skill group ─────────────────────────────────────────────────────────────

function SkillGroup({
  category,
  skills: groupSkills,
  inView,
  startIndex,
}: {
  category: SkillCategory;
  skills: { name: string; level: number; category: SkillCategory }[];
  inView: boolean;
  startIndex: number;
}) {
  const color = CATEGORY_COLORS[category];
  const label = CATEGORY_LABELS[category];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="h-1 w-3 rounded-full" style={{ backgroundColor: color }} aria-hidden />
        <span className="font-mono text-[10px] tracking-[0.15em]" style={{ color }}>
          {label.toUpperCase()}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {groupSkills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            category={skill.category}
            inView={inView}
            index={startIndex + i}
          />
        ))}
      </div>
    </div>
  );
}
