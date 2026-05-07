"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const BARS = [0.88, 0.72, 0.92, 0.6, 0.95];

export function MiniPerfDisplay() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="absolute z-10 flex flex-col items-center gap-1"
      style={{ top: "15%", left: "24.5%" }}
    >
      <p className="text-center font-mono text-[6px] leading-tight tracking-[0.12em] text-[#9CA3AF] uppercase">
        {t.dashboard.miniPerf.label1}
        <br />
        {t.dashboard.miniPerf.label2}
      </p>

      <div className="flex h-7 items-end gap-0.5">
        {BARS.map((h, i) => (
          <motion.div
            key={i}
            className="w-[5px] rounded-sm bg-[#ff2d2d]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.7 + i * 0.08, ease: "easeOut" }}
            style={{
              height: `${h * 100}%`,
              transformOrigin: "bottom",
              boxShadow: "0 0 5px rgba(255,45,45,0.7)",
            }}
          />
        ))}
      </div>

      <p className="font-mono text-[6px] tracking-[0.1em] text-[#3dff8f] uppercase">
        {t.dashboard.miniPerf.optimal}
      </p>
      <p className="font-mono text-[7px] font-bold text-[#9CA3AF]">P</p>
    </motion.div>
  );
}
