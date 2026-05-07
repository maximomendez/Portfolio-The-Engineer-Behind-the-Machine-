"use client";

import { useState, useMemo, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Braces, Search, Signal, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/context/LanguageContext";

type Accent = "#FF2D2D" | "#00D4FF" | "#3DFF8F";

type PipelineStage = {
  id: string;
  step: number;
  label: string;
  sublabel: string;
  description: string;
  stack: string[];
  useCase: string;
  output: string;
  accent: Accent;
};

const STAGE_STATIC = [
  { id: "input",   step: 1, stack: ["REST APIs", "Webhooks", "File Uploads", "DB Queries", "User Input"], accent: "#00D4FF" as Accent },
  { id: "context", step: 2, stack: ["Embeddings", "Vector Store", "Semantic Search", "Memory", "Chunking"], accent: "#00D4FF" as Accent },
  { id: "model",   step: 3, stack: ["Claude API", "OpenAI", "Prompt Engineering", "System Prompts", "Chain-of-Thought"], accent: "#FF2D2D" as Accent },
  { id: "parser",  step: 4, stack: ["JSON Schema", "Zod", "Retry Logic", "Structured Output", "Transformers"], accent: "#3DFF8F" as Accent },
  { id: "action",  step: 5, stack: ["n8n", "Webhooks", "PostgreSQL", "REST APIs", "Notifications"], accent: "#3DFF8F" as Accent },
];

function stageIcon(id: string) {
  const props = { size: 17, strokeWidth: 1.5 };
  if (id === "input") return <Signal {...props} />;
  if (id === "context") return <Search {...props} />;
  if (id === "model") return <Bot {...props} />;
  if (id === "parser") return <Braces {...props} />;
  return <Zap {...props} />;
}

function PipelineNode({
  stage,
  active,
  onSelect,
}: {
  stage: PipelineStage;
  active: boolean;
  onSelect: () => void;
}) {
  const { t } = useLanguage();
  return (
    <button
      onClick={onSelect}
      aria-pressed={active}
      className="group relative flex shrink-0 flex-col items-center gap-3 overflow-hidden border px-7 py-6 backdrop-blur-[16px] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2"
      style={{
        borderRadius: 12,
        minWidth: 148,
        borderColor: active ? `${stage.accent}66` : "rgba(255,255,255,0.07)",
        background:
          "linear-gradient(160deg, rgba(4,7,13,0.88) 0%, rgba(8,11,17,0.78) 100%)",
        boxShadow: active
          ? `0 8px 32px rgba(0,0,0,0.55), 0 0 24px ${stage.accent}28, inset 0 1px 0 rgba(255,255,255,0.06)`
          : "0 4px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
        outlineColor: stage.accent,
      }}
    >
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${stage.accent}, transparent)`,
          opacity: active ? 0.9 : 0.32,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${stage.accent}0f 0%, transparent 65%)`,
        }}
      />
      {active && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 h-1/3"
          style={{
            background: `linear-gradient(to bottom, transparent, ${stage.accent}0e, transparent)`,
          }}
          initial={{ y: "-100%" }}
          animate={{ y: "300%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <span
        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08]"
        style={{
          color: stage.accent,
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.06) 0%, rgba(4,7,13,0.9) 100%)",
          boxShadow: active ? `0 0 0 5px ${stage.accent}1e` : "none",
        }}
      >
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: `0 0 0 2px ${stage.accent}33` }}
          animate={{ opacity: active ? [0.45, 1, 0.45] : [0.2, 0.45, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        {stageIcon(stage.id)}
      </span>

      <span
        className="relative rounded px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em]"
        style={{
          background: active ? `${stage.accent}18` : "transparent",
          color: active ? stage.accent : "#555",
          border: `1px solid ${active ? `${stage.accent}44` : "transparent"}`,
        }}
      >
        {active ? t.aiSystem.active : `${t.aiSystem.step} ${stage.step}`}
      </span>

      <strong
        className="relative block font-heading text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200"
        style={{ color: active ? stage.accent : "#d8d8d8" }}
      >
        {stage.label}
      </strong>

      <span className="relative font-mono text-[10px] uppercase tracking-[0.12em] text-[#585858]">
        {stage.sublabel}
      </span>
    </button>
  );
}

function StageConnector({
  fromAccent,
  toAccent,
}: {
  fromAccent: Accent;
  toAccent: Accent;
}) {
  return (
    <div className="relative flex-1 overflow-hidden" style={{ height: 2, minWidth: 24 }}>
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(90deg, ${fromAccent}33, ${toAccent}33)` }}
      />
      <motion.div
        aria-hidden
        className="absolute top-0 h-full"
        style={{
          width: "40%",
          background: `linear-gradient(90deg, transparent, ${toAccent}bb, transparent)`,
        }}
        animate={{ x: ["-100%", "350%"] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 0.5,
        }}
      />
    </div>
  );
}

function ActiveStagePanel({ stage }: { stage: PipelineStage }) {
  const { t } = useLanguage();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden border border-white/[0.07] bg-[#04070d]/85 backdrop-blur-[18px]"
        style={{
          borderRadius: 14,
          borderTopColor: `${stage.accent}55`,
          boxShadow: `0 8px 40px rgba(0,0,0,0.55), 0 0 24px ${stage.accent}14, inset 0 1px 0 rgba(255,255,255,0.04)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${stage.accent}, transparent)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 80% at 10% 50%, ${stage.accent}08 0%, transparent 60%)`,
          }}
        />

        <div className="relative grid grid-cols-3 divide-x divide-white/[0.05]">
          {/* What it does */}
          <div className="flex flex-col gap-7 px-8 py-10">
            <div className="flex items-center gap-2">
              <span
                className="h-[3px] w-5 rounded-full"
                style={{ backgroundColor: stage.accent, opacity: 0.8 }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color: stage.accent, opacity: 0.65 }}>
                {t.aiSystem.whatItDoes}
              </p>
            </div>
            <p className="font-sans text-sm leading-[1.85] text-[#a8b3bf]">
              {stage.description}
            </p>
          </div>

          {/* Stack */}
          <div className="flex flex-col gap-7 px-8 py-10">
            <div className="flex items-center gap-2">
              <span
                className="h-[3px] w-5 rounded-full"
                style={{ backgroundColor: stage.accent, opacity: 0.8 }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color: stage.accent, opacity: 0.65 }}>
                {t.aiSystem.stack}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {stage.stack.map((tech) => (
                <span
                  key={tech}
                  className="border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em]"
                  style={{
                    borderRadius: 4,
                    borderColor: `${stage.accent}40`,
                    background: `${stage.accent}0c`,
                    color: `${stage.accent}cc`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Use case + Output */}
          <div className="flex flex-col gap-8 px-8 py-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span
                  className="h-[3px] w-5 rounded-full"
                  style={{ backgroundColor: stage.accent, opacity: 0.8 }}
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color: stage.accent, opacity: 0.65 }}>
                  {t.aiSystem.realUseCase}
                </p>
              </div>
              <p className="font-sans text-sm leading-[1.85] text-[#9aa3af]">
                {stage.useCase}
              </p>
            </div>

            <div
              className="rounded-lg border p-5"
              style={{
                borderColor: `${stage.accent}30`,
                background: `${stage.accent}0a`,
              }}
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.26em] text-[#6b6b6b]">
                {t.aiSystem.output}
              </p>
              <p
                className="font-mono text-xs font-medium leading-relaxed"
                style={{ color: stage.accent }}
              >
                → {stage.output}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function MobilePipelinePanel({
  activeStage,
  stages,
  onSelect,
}: {
  activeStage: PipelineStage;
  stages: PipelineStage[];
  onSelect: (stage: PipelineStage) => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="flex w-full max-w-xl flex-col gap-5 lg:hidden mx-auto">
      {/* Vertical pipeline */}
      <div className="flex flex-col">
        {stages.map((stage, index) => {
          const active = activeStage.id === stage.id;
          return (
            <div key={stage.id} className="flex flex-col">
              {/* Step row */}
              <button
                onClick={() => onSelect(stage)}
                aria-pressed={active}
                className="flex items-center gap-4 rounded-xl border px-4 py-3 text-left transition-all duration-200"
                style={{
                  borderColor: active ? `${stage.accent}55` : "rgba(255,255,255,0.06)",
                  background: active
                    ? `linear-gradient(135deg, ${stage.accent}0e 0%, rgba(4,7,13,0.88) 100%)`
                    : "rgba(4,7,13,0.6)",
                  boxShadow: active ? `0 0 16px ${stage.accent}18` : "none",
                }}
              >
                {/* Icon */}
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08]"
                  style={{
                    color: stage.accent,
                    background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.06) 0%, rgba(4,7,13,0.9) 100%)",
                    boxShadow: active ? `0 0 0 4px ${stage.accent}1e` : "none",
                  }}
                >
                  {stageIcon(stage.id)}
                </span>

                {/* Labels */}
                <div className="flex flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-xs uppercase tracking-[0.18em]"
                      style={{ color: active ? stage.accent : "#555" }}
                    >
                      {active ? t.aiSystem.active : `${t.aiSystem.step} ${stage.step}`}
                    </span>
                  </div>
                  <span
                    className="font-heading text-base font-semibold uppercase tracking-[0.08em]"
                    style={{ color: active ? stage.accent : "#d8d8d8" }}
                  >
                    {stage.label}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#585858]">
                    {stage.sublabel}
                  </span>
                </div>

                {/* Active indicator */}
                <span
                  className="font-mono text-xs transition-opacity duration-200"
                  style={{ color: stage.accent, opacity: active ? 1 : 0 }}
                >
                  →
                </span>
              </button>

              {/* Vertical connector */}
              {index < stages.length - 1 && (
                <div className="ml-[28px] flex flex-col items-center py-0.5">
                  <div
                    className="w-[2px]"
                    style={{
                      height: 20,
                      background: `linear-gradient(to bottom, ${stage.accent}44, ${stages[index + 1].accent}44)`,
                    }}
                  />
                  <motion.div
                    aria-hidden
                    className="w-[2px]"
                    style={{
                      height: 8,
                      background: `linear-gradient(to bottom, ${stage.accent}bb, ${stages[index + 1].accent}bb)`,
                      marginTop: -8,
                    }}
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border border-white/[0.07] bg-[#04070d]/85 p-6 backdrop-blur-[16px]"
          style={{
            borderRadius: 14,
            borderTopColor: `${activeStage.accent}44`,
            boxShadow: `0 0 24px ${activeStage.accent}10`,
          }}
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${activeStage.accent}, transparent)`,
            }}
          />

          {/* What it does */}
          <div className="mb-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[3px] w-4 rounded-full" style={{ backgroundColor: activeStage.accent, opacity: 0.8 }} />
              <p className="font-mono text-xs uppercase tracking-[0.24em]" style={{ color: activeStage.accent, opacity: 0.65 }}>
                {t.aiSystem.whatItDoes}
              </p>
            </div>
            <p className="text-base leading-[1.8] text-[#a8b3bf]">{activeStage.description}</p>
          </div>

          {/* Stack */}
          <div className="mb-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[3px] w-4 rounded-full" style={{ backgroundColor: activeStage.accent, opacity: 0.8 }} />
              <p className="font-mono text-xs uppercase tracking-[0.24em]" style={{ color: activeStage.accent, opacity: 0.65 }}>
                {t.aiSystem.stack}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeStage.stack.map((tech) => (
                <span
                  key={tech}
                  className="border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em]"
                  style={{
                    borderRadius: 4,
                    borderColor: `${activeStage.accent}40`,
                    background: `${activeStage.accent}0c`,
                    color: `${activeStage.accent}cc`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Use case */}
          <div className="mb-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[3px] w-4 rounded-full" style={{ backgroundColor: activeStage.accent, opacity: 0.8 }} />
              <p className="font-mono text-xs uppercase tracking-[0.24em]" style={{ color: activeStage.accent, opacity: 0.65 }}>
                {t.aiSystem.realUseCase}
              </p>
            </div>
            <p className="text-base leading-[1.8] text-[#9aa3af]">{activeStage.useCase}</p>
          </div>

          {/* Output */}
          <div
            className="rounded-lg border p-4"
            style={{ borderColor: `${activeStage.accent}30`, background: `${activeStage.accent}0a` }}
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-[#6b6b6b]">{t.aiSystem.output}</p>
            <p className="font-mono text-sm font-medium leading-relaxed" style={{ color: activeStage.accent }}>
              → {activeStage.output}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function AISystem() {
  const { t } = useLanguage();
  const { ref, inView } = useInView(0.12);

  const pipelineStages: PipelineStage[] = useMemo(() =>
    STAGE_STATIC.map((s) => {
      const tr = t.aiSystem.stages[s.id as keyof typeof t.aiSystem.stages];
      return { ...s, label: tr.label, sublabel: tr.sublabel, description: tr.description, useCase: tr.useCase, output: tr.output };
    }),
    [t]
  );

  const [activeStageId, setActiveStageId] = useState<string>("model");
  const activeStage = pipelineStages.find((s) => s.id === activeStageId) ?? pipelineStages[2];

  return (
    <section
      id="ai-system"
      ref={ref as React.Ref<HTMLElement>}
      className="relative flex w-full flex-col overflow-hidden border-t border-[#1e1e1e] bg-[#05080c] min-h-screen"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,237,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(237,237,237,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 68%, transparent 100%)",
        }}
      />
      {/* Scan lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 6px)",
          mixBlendMode: "screen",
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(0,212,255,0.07) 0%, transparent 40%), radial-gradient(circle at 80% 50%, rgba(61,255,143,0.05) 0%, transparent 40%), radial-gradient(circle at 50% 40%, rgba(255,45,45,0.05) 0%, transparent 35%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 flex h-full flex-1 flex-col"
      >
        {/* ── HEADER ─────────────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center pt-12 text-center"
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-widest text-[#6b6b6b]">
            {t.aiSystem.eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight tracking-[0.12em] sm:text-5xl lg:text-5xl">
            <span className="block text-[#ededed]">{t.aiSystem.title1}</span>
            <span className="block">
              <span className="text-[#ededed]">{t.aiSystem.title2} </span>
              <span
                className="text-[#00d4ff]"
                style={{ textShadow: "0 0 18px rgba(0,212,255,0.45)" }}
              >
                {t.aiSystem.titleHighlight}
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl px-6 text-base leading-relaxed text-[#9ca3af] sm:text-lg">
            {t.aiSystem.subtitle}
          </p>
        </motion.div>

        {/* ── PIPELINE AREA ──────────────────────────────────────── */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10"
        >
          {/* Desktop: nodes row */}
          <div className="hidden w-full max-w-4xl items-center lg:flex">
            {pipelineStages.map((stage, index) => (
              <Fragment key={stage.id}>
                <PipelineNode
                  stage={stage}
                  active={activeStage.id === stage.id}
                  onSelect={() => setActiveStageId(stage.id)}
                />
                {index < pipelineStages.length - 1 && (
                  <StageConnector
                    fromAccent={stage.accent}
                    toAccent={pipelineStages[index + 1].accent}
                  />
                )}
              </Fragment>
            ))}
          </div>

          {/* Desktop: stage selection hint */}
          <p className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-[#3a3a3a] lg:block">
            {t.aiSystem.selectHint}
          </p>

          {/* Desktop: detail panel */}
          <div className="hidden w-full max-w-4xl lg:block">
            <ActiveStagePanel stage={activeStage} />
          </div>

          {/* Mobile */}
          <MobilePipelinePanel
            activeStage={activeStage}
            stages={pipelineStages}
            onSelect={(stage) => setActiveStageId(stage.id)}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
