"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp, fadeIn } from "@/lib/animations";

type Phase = "idle" | "booting";

const BOOT_LINES = [
  { text: "INITIALIZING SYSTEM BOOT...", color: "#ededed", delay: 0.35 },
  { text: "ENGINE MODULE: ONLINE", color: "#3dff8f", delay: 0.65 },
  { text: "AUTOMATION CORE: LOADED", color: "#3dff8f", delay: 0.95 },
  { text: "AI SUBSYSTEM: READY", color: "#00d4ff", delay: 1.25 },
  { text: "ALL SYSTEMS NOMINAL", color: "#3dff8f", delay: 1.55 },
  { text: "ENTERING DASHBOARD...", color: "#ff2d2d", delay: 1.85 },
];

export function Ignition() {
  const [phase, setPhase] = useState<Phase>("idle");

  const scrollToDashboard = useCallback(() => {
    document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleStartEngine = useCallback(() => {
    if (phase === "booting") return;
    setPhase("booting");
    // Boot sequence takes ~2.5s; scroll then remove overlay
    setTimeout(scrollToDashboard, 2600);
    setTimeout(() => setPhase("idle"), 3200);
  }, [phase, scrollToDashboard]);

  return (
    <section
      id="ignition"
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0b0b0b]"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,237,237,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(237,237,237,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Corner brackets */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <CornerBracket key={pos} position={pos} />
      ))}

      {/* Scan line */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/20 to-transparent"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Hero content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-5 px-6 text-center"
      >
        {/* Label */}
        <motion.span
          variants={fadeIn}
          className="font-mono text-[10px] tracking-[0.35em] text-[#6b6b6b]"
        >
          THE ENGINEER BEHIND THE MACHINE
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl font-bold tracking-tight text-[#ededed] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          MAXIMO
          <br />
          <span className="text-[#ff2d2d]">MENDEZ</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeInUp}
          className="max-w-sm font-mono text-[10px] tracking-[0.2em] text-[#6b6b6b] sm:text-xs"
        >
          FULL STACK DEVELOPER — BACKEND, AUTOMATION & AI
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="max-w-md font-body text-lg text-[#ededed]/50 sm:text-xl"
        >
          You are entering the machine.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-2 flex flex-col items-center gap-4 sm:flex-row"
        >
          <StartEngineButton onClick={handleStartEngine} disabled={phase === "booting"} />
          <button
            onClick={scrollToDashboard}
            className="font-mono text-[10px] tracking-widest text-[#6b6b6b] transition-colors hover:text-[#ededed] focus-visible:outline-none"
          >
            SKIP INTRO
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-14 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#2a2a2a]">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-5 w-px origin-top bg-gradient-to-b from-[#2a2a2a] to-transparent"
        />
      </motion.div>

      {/* Boot overlay */}
      <AnimatePresence>
        {phase === "booting" && <BootOverlay />}
      </AnimatePresence>
    </section>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function CornerBracket({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-8 w-8",
        position === "tl" && "left-6 top-16 border-l border-t border-[#2a2a2a]",
        position === "tr" && "right-6 top-16 border-r border-t border-[#2a2a2a]",
        position === "bl" && "bottom-12 left-6 border-b border-l border-[#2a2a2a]",
        position === "br" && "bottom-12 right-6 border-b border-r border-[#2a2a2a]"
      )}
    />
  );
}

function StartEngineButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      className={cn(
        "group relative overflow-hidden rounded-none border border-[#ff2d2d] px-8 py-3 font-mono text-[11px] tracking-[0.25em] text-[#ff2d2d] transition-colors duration-200 focus-visible:outline-none",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#ff2d2d] hover:text-[#0b0b0b]"
      )}
    >
      {/* Background fill on hover */}
      <motion.span
        className="absolute inset-0 bg-[#ff2d2d]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.2 }}
        aria-hidden
      />
      <span className="relative z-10 mix-blend-exclusion group-hover:mix-blend-normal">
        {disabled ? "BOOTING..." : "START ENGINE"}
      </span>
    </motion.button>
  );
}

function BootOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.1 } }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#0b0b0b]"
    >
      {/* Boot lines */}
      <div className="flex w-full max-w-sm flex-col gap-2 px-6">
        {BOOT_LINES.map(({ text, color, delay }) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay }}
            className="flex items-center gap-3"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.2, delay }}
              style={{ backgroundColor: color }}
              className="h-px w-3 origin-left"
              aria-hidden
            />
            <span
              className="font-mono text-[11px] tracking-widest"
              style={{ color }}
            >
              {text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* RPM progress bar */}
      <div className="w-full max-w-sm px-6">
        <div className="mb-1.5 flex justify-between">
          <span className="font-mono text-[9px] tracking-widest text-[#6b6b6b]">
            SYSTEM LOAD
          </span>
          <span className="font-mono text-[9px] tracking-widest text-[#6b6b6b]">
            RPM
          </span>
        </div>
        <div className="h-px w-full bg-[#1e1e1e]">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-full origin-left bg-[#ff2d2d]"
          />
        </div>
      </div>
    </motion.div>
  );
}
