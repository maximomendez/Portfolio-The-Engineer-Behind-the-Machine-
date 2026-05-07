"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Bot, Braces, Cpu, Database, Network, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import type { Translations } from "@/lib/translations";

type Accent = "#FF2D2D" | "#00D4FF" | "#3DFF8F";
type FlowStep = "Request" | "API" | "Runtime" | "Logic" | "Data" | "Automation" | "AI" | "Response";

type EngineModuleBase = {
  id: keyof Translations["engine"]["modules"];
  accent: Accent;
  side: "left" | "right";
  className: string;
  dotClassName: string;
  stack: string[];
  flowStep: FlowStep;
};

type EngineModule = EngineModuleBase & {
  label: string;
  part: string;
  description: string;
  powers: string[];
  telemetry: string;
  output: string;
};

const ENGINE_BASE: EngineModuleBase[] = [
  {
    id: "combustion",
    accent: "#FF2D2D",
    side: "left",
    className: "left-[2%] top-[13%]",
    dotClassName: "left-[38%] top-[40%]",
    stack: ["Service Layer", "Domain Models", "DTOs", "Validators"],
    flowStep: "Logic",
  },
  {
    id: "block",
    accent: "#FF2D2D",
    side: "left",
    className: "left-[2%] top-[40%]",
    dotClassName: "left-[47%] top-[53%]",
    stack: ["Node.js", "Java", "TypeScript", "Workers", "React", "React Native", "JavaScript"],
    flowStep: "Runtime",
  },
  {
    id: "fuel",
    accent: "#3DFF8F",
    side: "left",
    className: "left-[2%] top-[67%]",
    dotClassName: "left-[43%] top-[70%]",
    stack: ["PostgreSQL", "Redis", "Indexes", "Caching"],
    flowStep: "Data",
  },
  {
    id: "intake",
    accent: "#00D4FF",
    side: "right",
    className: "right-[2%] top-[13%]",
    dotClassName: "left-[50%] top-[25%]",
    stack: ["REST APIs", "GraphQL", "JWT Auth", "Webhooks"],
    flowStep: "API",
  },
  {
    id: "turbo",
    accent: "#3DFF8F",
    side: "right",
    className: "right-[2%] top-[40%]",
    dotClassName: "left-[68%] top-[43%]",
    stack: ["n8n", "Cron Jobs", "Queues", "CI/CD"],
    flowStep: "Automation",
  },
  {
    id: "ecu",
    accent: "#00D4FF",
    side: "right",
    className: "right-[2%] top-[67%]",
    dotClassName: "left-[64%] top-[61%]",
    stack: ["LLMs", "AI Agents", "Claude", "OpenAI"],
    flowStep: "AI",
  },
];

function buildModules(t: Translations): EngineModule[] {
  return ENGINE_BASE.map((base) => ({ ...base, ...t.engine.modules[base.id] }));
}

const requestFlow: FlowStep[] = ["Request", "API", "Runtime", "Logic", "Data", "Automation", "AI", "Response"];

function moduleIcon(id: string) {
  const props = { size: 15, strokeWidth: 1.6 };
  if (id === "intake") return <Network {...props} />;
  if (id === "combustion") return <Braces {...props} />;
  if (id === "block") return <Cpu {...props} />;
  if (id === "fuel") return <Database {...props} />;
  if (id === "turbo") return <Zap {...props} />;
  return <Bot {...props} />;
}

function EngineLabel({
  module,
  active,
  onSelect,
}: {
  module: EngineModule;
  active: boolean;
  onSelect: () => void;
}) {
  const { t } = useLanguage();
  return (
    <button
      onClick={onSelect}
      aria-pressed={active}
      className="group relative text-left backdrop-blur-[20px] transition-[opacity,transform,box-shadow] duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2"
      style={{
        width: "clamp(260px, 18vw, 380px)",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.06)",
        borderLeft: `3px solid ${active ? module.accent : module.accent + "55"}`,
        background: "rgba(5,8,13,0.88)",
        boxShadow: active
          ? `0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px ${module.accent}18`
          : "0 8px 28px rgba(0,0,0,0.45)",
        outlineColor: module.accent,
        transition: "border-left-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 h-px w-[130px] -translate-y-1/2",
          module.side === "left" ? "left-full" : "right-full"
        )}
        style={{
          background:
            module.side === "left"
              ? `linear-gradient(90deg, ${module.accent}99, transparent)`
              : `linear-gradient(270deg, ${module.accent}99, transparent)`,
          opacity: active ? 1 : 0.3,
          transition: "opacity 0.3s ease",
        }}
      />
      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full",
          module.side === "left" ? "left-[calc(100%+128px)]" : "right-[calc(100%+128px)]"
        )}
        style={{
          backgroundColor: module.accent,
          boxShadow: `0 0 ${active ? 14 : 8}px ${module.accent}`,
          opacity: active ? 1 : 0.55,
          transition: "opacity 0.3s ease, box-shadow 0.3s ease",
        }}
      />
      <motion.span
        aria-hidden
        className={cn(
          "absolute top-1/2 h-px w-[130px] -translate-y-1/2",
          module.side === "left" ? "left-full" : "right-full"
        )}
        style={{
          background:
            module.side === "left"
              ? `linear-gradient(90deg, transparent, ${module.accent}, transparent)`
              : `linear-gradient(270deg, transparent, ${module.accent}, transparent)`,
        }}
        animate={{ scaleX: [0, 1, 0], opacity: [0, active ? 0.9 : 0.45, 0] }}
        transition={{ duration: active ? 1.2 : 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div style={{ padding: "clamp(4px, 0.35vw, 6px) clamp(8px, 0.7vw, 11px)" }}>
        <div
          className="flex items-center"
          style={{ gap: "clamp(5px, 0.45vw, 8px)", marginBottom: "clamp(3px, 0.3vw, 5px)" }}
        >
          <span
            className="flex shrink-0 items-center justify-center rounded-md"
            style={{
              width: "clamp(20px, 1.7vw, 26px)",
              height: "clamp(20px, 1.7vw, 26px)",
              color: module.accent,
              background: `${module.accent}14`,
              border: `1px solid ${module.accent}30`,
            }}
          >
            {moduleIcon(module.id)}
          </span>
          <span
            className="font-mono uppercase tracking-[0.18em]"
            style={{ color: module.accent, fontSize: "clamp(9px, 0.72vw, 12px)" }}
          >
            {module.part}
          </span>
          <motion.span
            className="ml-auto rounded-full"
            style={{
              backgroundColor: module.accent,
              width: "clamp(6px, 0.5vw, 9px)",
              height: "clamp(6px, 0.5vw, 9px)",
            }}
            animate={{ opacity: active ? [1, 0.3, 1] : [0.3, 0.15, 0.3] }}
            transition={{ duration: active ? 1.4 : 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="flex" style={{ gap: "clamp(8px, 0.8vw, 12px)" }}>
          <div className="min-w-0 w-1/2">
            <p
              className="font-semibold leading-snug text-[#ededed]"
              style={{ fontSize: "clamp(12px, 1.05vw, 16px)", marginBottom: "clamp(1px, 0.15vw, 2px)" }}
            >
              {module.label}
            </p>
            <p className="leading-relaxed text-[#8a929c]" style={{ fontSize: "clamp(9px, 0.75vw, 11px)" }}>
              {module.description}
            </p>
          </div>

          <div
            className="w-1/2 border-l"
            style={{
              paddingLeft: "clamp(7px, 0.65vw, 10px)",
              borderColor: "rgba(255,255,255,0.07)",
            }}
          >
            <p
              className="font-mono uppercase tracking-[0.18em]"
              style={{ color: module.accent, fontSize: "clamp(8px, 0.65vw, 10px)", marginBottom: "clamp(1px, 0.15vw, 2px)" }}
            >
              {t.engine.whatItPowers}
            </p>
            <ul className="flex flex-col" style={{ gap: "clamp(1px, 0.15vw, 2px)" }}>
              {module.powers.map((p) => (
                <li
                  key={p}
                  className="flex items-start text-[#9ca3af]"
                  style={{ fontSize: "clamp(9px, 0.78vw, 12px)", gap: "clamp(4px, 0.4vw, 7px)", lineHeight: 1.4 }}
                >
                  <span style={{ color: module.accent, fontSize: "clamp(7px, 0.6vw, 9px)" }} className="mt-px shrink-0">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-wrap border-t"
          style={{
            marginTop: "clamp(3px, 0.3vw, 5px)",
            paddingTop: "clamp(3px, 0.3vw, 5px)",
            gap: "clamp(3px, 0.3vw, 5px)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          {module.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono uppercase tracking-[0.1em] text-[#8a929c]"
              style={{
                fontSize: "clamp(8px, 0.65vw, 10px)",
                padding: "clamp(3px, 0.3vw, 5px) clamp(8px, 0.75vw, 12px)",
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

function EngineDot({
  module,
  active,
  onSelect,
}: {
  module: EngineModule;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "group absolute z-30 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4",
        module.dotClassName
      )}
      style={{ outlineColor: module.accent }}
      aria-label={`Inspect ${module.part}`}
      aria-pressed={active}
    >
      <motion.span
        className="absolute inset-0 rounded-full border"
        style={{ borderColor: module.accent }}
        animate={{
          scale: active ? [0.85, 1.25, 0.85] : [0.85, 1.05, 0.85],
          opacity: active ? [0.65, 1, 0.65] : [0.25, 0.55, 0.25],
        }}
        transition={{ duration: active ? 1.4 : 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute h-5 w-5 rounded-full"
        style={{ backgroundColor: module.accent }}
        animate={{ scale: active ? [1, 2.3, 1] : [1, 1.75, 1], opacity: active ? [0.75, 0, 0.75] : [0.45, 0, 0.45] }}
        transition={{ duration: active ? 1.4 : 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span
        className="relative h-2.5 w-2.5 rounded-full transition-transform group-hover:scale-125"
        style={{ backgroundColor: module.accent, boxShadow: `0 0 ${active ? 18 : 10}px ${module.accent}` }}
      />
      <span
        className="pointer-events-none absolute left-1/2 top-full mt-1 hidden -translate-x-1/2 whitespace-nowrap border border-white/[0.08] bg-[#04070d]/90 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#ededed] backdrop-blur-md group-hover:block"
        style={{ borderRadius: 6 }}
      >
        {module.part}
      </span>
    </button>
  );
}

function EngineStage({
  modules,
  activeModule,
  onSelect,
}: {
  modules: EngineModule[];
  activeModule: EngineModule;
  onSelect: (module: EngineModule) => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#05080c]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,237,237,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(237,237,237,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at center, black 0%, black 68%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.035), rgba(255,255,255,0.035) 1px, transparent 1px, transparent 6px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(0,212,255,0.16) 0%, rgba(0,212,255,0.05) 30%, transparent 58%), radial-gradient(circle at 50% 55%, rgba(255,45,45,0.12) 0%, transparent 45%), linear-gradient(180deg, rgba(5,8,12,0.16), rgba(5,8,12,0.95))",
        }}
      />

      <div className="absolute left-1/2 top-10 z-20 w-[min(960px,calc(100%-32px))] -translate-x-1/2 text-center">
        <p className="mb-2 font-mono text-[clamp(0.48rem,0.68vw,0.62rem)] uppercase tracking-[0.32em] text-[#6b6b6b]">
          {t.engine.eyebrow}
        </p>
        <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.5rem)] font-semibold uppercase leading-tight tracking-[0.08em] text-[#ededed] drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
          {t.engine.title1}
        </h2>
        <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.5rem)] font-semibold uppercase leading-tight tracking-[0.08em] drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
          <span className="text-[#ededed]">{t.engine.titleOf} </span>
          <span className="text-[#ff2d2d]" style={{ textShadow: "0 0 18px rgba(255,45,45,0.55)" }}>
            {t.engine.titleHighlight}
          </span>
        </h2>
        <p className="mt-3 hidden w-full text-center text-[11px] leading-relaxed text-[#9ca3af]/80 md:block">
          {t.engine.subtitle}
        </p>
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <span className="font-mono text-[clamp(0.45rem,0.65vw,0.6rem)] uppercase tracking-[0.28em] text-[#6b6b6b]">
            {t.engine.scrollHint}
          </span>
          <motion.span
            aria-hidden
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block font-mono text-[clamp(0.75rem,1vw,0.95rem)] leading-none text-[#ff2d2d]"
            style={{ textShadow: "0 0 8px rgba(255,45,45,0.6)" }}
          >
            ↓
          </motion.span>
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pt-20">
        <motion.div
          className="relative grid aspect-[1.5/1] w-[min(760px,82vw)] place-items-center lg:w-[min(760px,55vw)]"
          animate={{ y: [0, -12, 0], rotateX: [0, 1.2, 0], rotateY: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            aria-hidden
            className="absolute h-[70%] w-[88%] rounded-full opacity-90 blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,255,0.25) 0%, rgba(0,212,255,0.08) 38%, transparent 72%), radial-gradient(circle, rgba(255,45,45,0.13), transparent 62%)",
            }}
          />
          <div
            aria-hidden
            className="absolute aspect-square w-[78%] rounded-full border border-[#00d4ff]/15"
            style={{
              boxShadow:
                "0 0 0 34px rgba(0,212,255,0.045), 0 0 0 68px rgba(0,212,255,0.032), 0 0 0 102px rgba(0,212,255,0.02)",
            }}
          />
          <Image
            src="/backend-engine.png"
            alt="Backend architecture engine"
            width={900}
            height={560}
            priority
            className="relative z-10 h-auto w-full select-none object-contain drop-shadow-[0_34px_42px_rgba(0,0,0,0.75)]"
            draggable={false}
          />
          {modules.map((module) => (
            <EngineDot
              key={module.id}
              module={module}
              active={activeModule.id === module.id}
              onSelect={() => onSelect(module)}
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute left-[2%] top-0 bottom-0 z-20 hidden 2xl:flex flex-col justify-center py-[18%] gap-[3%]">
        {modules.filter((m) => m.side === "left").map((module) => (
          <EngineLabel
            key={module.id}
            module={module}
            active={activeModule.id === module.id}
            onSelect={() => onSelect(module)}
          />
        ))}
      </div>

      <div className="absolute right-[2%] top-0 bottom-0 z-20 hidden 2xl:flex flex-col justify-center py-[18%] gap-[3%]">
        {modules.filter((m) => m.side === "right").map((module) => (
          <EngineLabel
            key={module.id}
            module={module}
            active={activeModule.id === module.id}
            onSelect={() => onSelect(module)}
          />
        ))}
      </div>

      <MobileModulePanel modules={modules} activeModule={activeModule} onSelect={onSelect} />
    </div>
  );
}

function MobileModulePanel({
  modules,
  activeModule,
  onSelect,
}: {
  modules: EngineModule[];
  activeModule: EngineModule;
  onSelect: (module: EngineModule) => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="absolute bottom-[112px] left-4 right-4 z-30 2xl:hidden">
      <div className="mb-3 flex gap-2 overflow-x-auto">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => onSelect(module)}
            className="shrink-0 border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#ededed]"
            style={{
              borderColor: activeModule.id === module.id ? module.accent : "#2a2a2a",
              background: activeModule.id === module.id ? `${module.accent}14` : "rgba(7,11,16,0.84)",
            }}
          >
            {module.part}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeModule.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="relative overflow-hidden border border-white/[0.07] bg-[#04070d]/80 p-6 backdrop-blur-[18px]"
          style={{
            borderRadius: 16,
            boxShadow: "0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div
            aria-hidden
            className="absolute left-0 right-0 top-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #ff2b2b 30%, #ff2b2b 70%, transparent 100%)",
              opacity: 0.7,
            }}
          />
          <p className="relative mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#9ca3af]/75">
            {t.engine.engineModule}
          </p>
          <p className="relative font-heading text-[17px] font-bold uppercase tracking-[0.06em] text-white">
            {activeModule.label}
          </p>
          <div
            aria-hidden
            className="relative my-3 h-px w-full"
            style={{
              background: "linear-gradient(90deg, rgba(255,43,43,0.35) 0%, rgba(255,255,255,0.06) 60%, transparent 100%)",
            }}
          />
          <p className="relative font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: activeModule.accent }}>
            {activeModule.part}
          </p>
          <p className="relative mt-2.5 text-[13px] leading-[1.7] text-[#9ca3af]/85">{activeModule.description}</p>
          <div className="relative mt-4 flex flex-wrap gap-2">
            {activeModule.stack.map((tech) => (
              <span
                key={tech}
                className="border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#9ca3af]"
                style={{
                  borderRadius: 4,
                  borderColor: `${activeModule.accent}4d`,
                  background: `${activeModule.accent}10`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function getFlowLabel(step: FlowStep, t: Translations): string {
  if (step === "Request") return t.engine.flow.requestIn;
  if (step === "Response") return t.engine.flow.responseOut;
  return step;
}

function flowAccent(step: FlowStep): Accent {
  if (step === "Data" || step === "Automation") return "#3DFF8F";
  if (step === "API" || step === "AI") return "#00D4FF";
  return "#FF2D2D";
}

function RequestFlow({ activeModule }: { activeModule: EngineModule }) {
  const { t } = useLanguage();
  return (
    <div className="absolute bottom-5 left-1/2 z-40 w-[min(860px,calc(100%-32px))] -translate-x-1/2 overflow-hidden border border-white/[0.08] bg-[#05080c]/82 px-4 py-3.5 backdrop-blur-md">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${activeModule.accent}, transparent)` }}
      />
      <div className="mb-3 flex items-center justify-center gap-2">
        <Activity size={13} style={{ color: activeModule.accent }} />
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#ededed]">
          {t.engine.requestFlow}
        </p>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-0.5">
        {requestFlow.map((step, index) => {
          const accent = flowAccent(step);
          const isActive = activeModule.flowStep === step;
          const isEndpoint = step === "Request" || step === "Response";
          return (
            <div key={step} className="flex items-center gap-2">
              <div
                className="relative overflow-hidden whitespace-nowrap border px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#ededed]"
                style={{
                  borderRadius: 6,
                  borderColor: isActive ? activeModule.accent : isEndpoint ? "rgba(255,255,255,0.12)" : `${accent}45`,
                  background: isActive ? `${activeModule.accent}18` : isEndpoint ? "rgba(255,255,255,0.035)" : `${accent}12`,
                  boxShadow: isActive ? `0 0 18px ${activeModule.accent}26` : "none",
                }}
              >
                {isActive && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1/2"
                    style={{ background: `linear-gradient(90deg, transparent, ${activeModule.accent}2e, transparent)` }}
                    initial={{ x: "-120%" }}
                    animate={{ x: "240%" }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <span className="relative">{getFlowLabel(step, t)}</span>
              </div>
              {index < requestFlow.length - 1 && (
                <span className="font-mono text-sm text-[#00d4ff]/70">-&gt;</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EngineBuildDock() {
  const { t } = useLanguage();
  return (
    <div className="absolute bottom-5 left-[180px] z-40 hidden w-[380px] overflow-hidden border border-white/[0.08] bg-[#05080c]/78 p-4 backdrop-blur-md xl:block">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff2d2d] to-transparent opacity-70"
      />
      <div className="mb-3.5  flex items-center justify-between">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#ededed]">
          {t.engine.engineBuilds}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6b6b6b]">
          {t.engine.caseStudies}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {projects.map((project) => (
          <span
            key={project.id}
            className="border bg-[#0b1016] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[#ededed]"
            style={{ borderColor: `${project.accent}55`, borderRadius: 4 }}
          >
            {project.name}
          </span>
        ))}
      </div>
      <p className="mt-3.5 text-[11px] leading-relaxed text-[#9ca3af]/70">
        {t.engine.engineBuildsSub}
      </p>
    </div>
  );
}

function EngineGridCard({
  module,
  active,
  onSelect,
}: {
  module: EngineModule;
  active: boolean;
  onSelect: () => void;
}) {
  const { t } = useLanguage();
  return (
    <button
      onClick={onSelect}
      aria-pressed={active}
      className="group w-full overflow-hidden text-left backdrop-blur-[20px] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2"
      style={{
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.06)",
        borderLeft: `3px solid ${active ? module.accent : module.accent + "55"}`,
        background: "rgba(5,8,13,0.88)",
        boxShadow: active
          ? `0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px ${module.accent}18`
          : "0 8px 28px rgba(0,0,0,0.45)",
        outlineColor: module.accent,
      }}
    >
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded"
            style={{ color: module.accent, background: `${module.accent}14`, border: `1px solid ${module.accent}30` }}
          >
            {moduleIcon(module.id)}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: module.accent }}>
            {module.part}
          </span>
          <motion.span
            className="ml-auto h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: module.accent }}
            animate={{ opacity: active ? [1, 0.3, 1] : [0.25, 0.1, 0.25] }}
            transition={{ duration: active ? 1.4 : 3, repeat: Infinity }}
          />
        </div>

        <p className="mb-1 text-sm font-semibold leading-snug text-[#ededed]">{module.label}</p>
        <p className="mb-3 text-xs leading-relaxed text-[#8a929c]">{module.description}</p>

        <div className="mb-3 border-t pt-2.5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: module.accent }}>
            {t.engine.whatItPowers}
          </p>
          <ul className="flex flex-col gap-1">
            {module.powers.map((p) => (
              <li key={p} className="flex items-start gap-1.5 text-xs leading-snug text-[#9ca3af]">
                <span style={{ color: module.accent }} className="mt-px shrink-0 text-[9px]">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {module.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#8a929c]"
              style={{
                padding: "3px 8px",
                borderRadius: 3,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function Engine() {
  const { t } = useLanguage();
  const modules = buildModules(t);
  const [activeModuleId, setActiveModuleId] = useState<string>(ENGINE_BASE[3].id);
  const activeModule = modules.find((m) => m.id === activeModuleId) ?? modules[3];
  const { ref, inView } = useInView(0.12);

  return (
    <div id="engine" ref={ref as unknown as React.Ref<HTMLDivElement>}>
      {/* ── xl+ : full-screen 16:9 stage ── */}
      <section
        className="relative hidden h-dvh w-full items-center justify-center overflow-hidden border-t border-[#1e1e1e] bg-[#05080c] 2xl:flex"
      >
        <div
          className="relative overflow-hidden"
          style={{
            width: "min(100vw, calc(100dvh * 16 / 9))",
            height: "min(100dvh, calc(100vw * 9 / 16))",
          }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="h-full w-full"
          >
            <motion.div variants={fadeInUp} className="h-full w-full">
              <EngineStage
                modules={modules}
                activeModule={activeModule}
                onSelect={(m) => setActiveModuleId(m.id)}
              />
            </motion.div>
          </motion.div>
        </div>
        <RequestFlow activeModule={activeModule} />
        {/* <EngineBuildDock /> */}
      </section>

      {/* ── < xl : engine on top, cards grid below ── */}
      <section
        className="w-full border-t border-[#1e1e1e] bg-[#05080c] 2xl:hidden"
      >
        <div className="relative flex flex-col items-center px-5 pb-6 pt-16">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-[#6b6b6b]">
            {t.engine.eyebrow}
          </p>
          <h2 className="mb-1 text-center font-heading text-[clamp(1.65rem,6vw,2rem)] font-semibold uppercase tracking-[0.06em] text-[#ededed]">
            {t.engine.title1}
          </h2>
          <h2 className="mb-6 text-center font-heading text-[clamp(1.65rem,6vw,2rem)] font-semibold uppercase tracking-[0.06em]">
            <span className="text-[#ededed]">{t.engine.titleOf} </span>
            <span className="text-[#ff2d2d]" style={{ textShadow: "0 0 14px rgba(255,45,45,0.5)" }}>
              {t.engine.titleHighlight}
            </span>
          </h2>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 60%, rgba(0,212,255,0.12) 0%, transparent 60%), radial-gradient(circle at 50% 40%, rgba(255,45,45,0.08) 0%, transparent 50%)",
            }}
          />
          <motion.div
            className="relative z-10 grid aspect-[1.5/1] w-full max-w-[560px] place-items-center"
            animate={{ y: [0, -10, 0], rotateX: [0, 1, 0], rotateY: [-1, 1, -1] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/backend-engine.png"
              alt="Backend architecture engine"
              width={700}
              height={440}
              className="h-auto w-full select-none object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.7)]"
              draggable={false}
            />
            {modules.map((module) => (
              <EngineDot
                key={module.id}
                module={module}
                active={activeModule.id === module.id}
                onSelect={() => setActiveModuleId(module.id)}
              />
            ))}
          </motion.div>
          <p className="mt-3 mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#4a4a4a]">
            ↑ {t.engine.tapToInspect}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 px-4 pb-20 md:grid-cols-2 md:gap-5">
          {modules.map((module) => (
            <EngineGridCard
              key={module.id}
              module={module}
              active={activeModule.id === module.id}
              onSelect={() => setActiveModuleId(module.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
