"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function WindshieldTitle() {
  const { t } = useLanguage();
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.5, behavior: "smooth" });
  };

  return (
    <>
      {/* Main headline — top center */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[3%] left-1/2 z-10 -translate-x-1/2 text-center whitespace-nowrap"
      >
        <h1 className="font-sans text-[clamp(1.5rem,2.2vw,2rem)] font-black tracking-[0.12em] text-[#ededed] uppercase leading-tight">
          {t.dashboard.windshield.line1}
        </h1>
        <h1 className="font-sans text-[clamp(1.5rem,2.2vw,2rem)] font-black tracking-[0.12em] uppercase leading-tight">
          <span className="text-[#ededed]">{t.dashboard.windshield.line2of} </span>
          <span className="text-[#ff2d2d]" style={{ textShadow: "0 0 18px rgba(255,45,45,0.55)" }}>
            {t.dashboard.windshield.line2highlight}
          </span>
        </h1>
      </motion.div>

      {/* Scroll cue — below the title, still top-center */}
      <motion.button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[13%] left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 focus-visible:outline-none"
      >
        <span className="font-mono text-[clamp(0.55rem,0.75vw,0.7rem)] tracking-[0.28em] text-[#6b6b6b] uppercase">
          {t.dashboard.windshield.scrollCue}
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
      </motion.button>
    </>
  );
}
