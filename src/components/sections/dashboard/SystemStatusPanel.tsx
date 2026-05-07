"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function IconBackend({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="1.5" y="1.5" width="17" height="17" rx="3" stroke={color} strokeWidth="1.4" />
      <path d="M5.5 10.5l3 3 6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGear({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="2.8" stroke={color} strokeWidth="1.4" />
      <path
        d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SystemStatusPanel() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  const STATUSES = [
    {
      key: "backend" as const,
      stateColor: "#3dff8f",
      icon: (c: string) => <IconBackend color={c} />,
      iconColor: "#3dff8f",
    },
    {
      key: "aiEngine" as const,
      stateColor: "#38BDF8",
      icon: (c: string) => <IconGear color={c} />,
      iconColor: "#38BDF8",
    },
    {
      key: "automation" as const,
      stateColor: "#3dff8f",
      icon: (c: string) => <IconGear color={c} />,
      iconColor: "#3dff8f",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[2%] right-[2%] z-10 w-[250px]"
      style={{
        background: "linear-gradient(160deg, rgba(18,18,20,0.92) 0%, rgba(10,10,12,0.96) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "14px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
        padding: "16px 18px",
      }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <motion.span
          aria-hidden
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-[#ff2d2d] flex-shrink-0"
          style={{ boxShadow: "0 0 6px #ff2d2d" }}
        />
        <span className="font-mono text-[17px] font-bold tracking-[0.22em] text-white uppercase">
          {t.dashboard.systemStatus.header}
        </span>
      </div>

      {/* Status rows grouped with left red border */}
      <div className="relative flex flex-col gap-3">
        {STATUSES.map((item, i) => {
          const tr = t.dashboard.systemStatus[item.key];
          return (
          <div
            key={item.key}
            className="relative cursor-default"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <span className="flex-shrink-0" style={{ filter: `drop-shadow(0 0 3px ${item.iconColor}88)` }}>
                {item.icon(item.iconColor)}
              </span>

              <div className="flex-1 min-w-0">
                <p className="text-[18px] font-semibold tracking-wide text-white leading-tight">
                  {tr.label}
                </p>
                <p
                  className="font-mono text-[12px] font-bold tracking-[0.18em] mt-2 uppercase leading-tight"
                  style={{ color: item.stateColor }}
                >
                  {tr.state}
                </p>
              </div>
            </div>

            {/* Tooltip */}
            <AnimatePresence>
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.15 }}
                  role="tooltip"
                  className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap border border-[rgba(255,45,45,0.3)] bg-[rgba(5,8,12,0.96)] px-2.5 py-1.5 backdrop-blur-sm"
                >
                  <p className="font-mono text-[16px] text-[#9CA3AF]">{tr.tooltip}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          );
        })}
      </div>
    </motion.div>
  );
}
