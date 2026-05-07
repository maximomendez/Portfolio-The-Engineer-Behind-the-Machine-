"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, BrainCircuit, FolderKanban, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MODULES = [
  { id: "engine",    label: "Engine",   href: "#engine",    Icon: Layers       },
  { id: "ai-system", label: "AI System", href: "#ai-system", Icon: BrainCircuit },
  { id: "track",     label: "Projects", href: "#track",     Icon: FolderKanban },
  { id: "pit-stop",  label: "Contact",  href: "#pit-stop",  Icon: Send         },
] as const;

type ModuleId = (typeof MODULES)[number]["id"];

export function ControlCenter() {
  const { t } = useLanguage();
  const [active, setActive]   = useState<ModuleId | null>(null);
  const [hovered, setHovered] = useState<ModuleId | null>(null);

  const MODULE_LABELS: Record<ModuleId, string> = {
    "engine":    t.dashboard.controlCenter.engine,
    "ai-system": t.dashboard.controlCenter.aiSystem,
    "track":     t.dashboard.controlCenter.projects,
    "pit-stop":  t.dashboard.controlCenter.contact,
  };

  const handleClick = (id: ModuleId, href: string) => {
    setActive(id);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.85 }}
      className="absolute z-10"
      style={{ top: "26.8%", left: "65%", width: "22.3%" }}
    >
      {/* Outer bezel — mimics the screen frame */}
      <div
        style={{
          background: "linear-gradient(160deg, #0b0d10 0%, #0d1014 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "8px",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.04), " +
            "0 0 24px rgba(255,45,45,0.07), " +
            "0 8px 32px rgba(0,0,0,0.8)",
          padding: "8px 10px 7px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient bottom glow */}
        <div
          aria-hidden
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 35% at 50% 110%, rgba(255,45,45,0.07) 0%, transparent 70%)",
          }}
        />

        {/* ── HEADER ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "17px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6b7280",
            }}
          >
            {t.dashboard.controlCenter.header}
          </span>
          <motion.span
            aria-hidden
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#ff2d2d",
              boxShadow: "0 0 6px #ff2d2d",
            }}
          />
        </div>

        {/* ── GRID 2 cols × 3 rows ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "5px" }}>
          {MODULES.map((mod) => {
            const isActive  = active  === mod.id;
            const isHovered = hovered === mod.id && !isActive;

            const borderColor = isActive
              ? "rgba(255,74,61,0.65)"
              : isHovered
              ? "rgba(255,74,61,0.38)"
              : "rgba(255,255,255,0.07)";

            const bgGradient = isActive
              ? "radial-gradient(ellipse 90% 65% at 50% 105%, rgba(255,45,45,0.16) 0%, rgba(11,13,16,0.95) 100%)"
              : isHovered
              ? "radial-gradient(ellipse 90% 65% at 50% 105%, rgba(255,45,45,0.08) 0%, rgba(11,13,16,0.95) 100%)"
              : "rgba(255,255,255,0.018)";

            const iconColor   = isActive || isHovered ? "#ff4a3d" : "#9ca3af";
            const labelColor  = isActive ? "#ffffff" : isHovered ? "#e5e7eb" : "#9ca3af";
            const glow        = isActive
              ? "drop-shadow(0 0 5px rgba(255,74,61,0.8))"
              : isHovered
              ? "drop-shadow(0 0 3px rgba(255,74,61,0.5))"
              : "none";
            const boxShadow   = isActive
              ? "0 0 12px rgba(255,45,45,0.22), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "inset 0 1px 0 rgba(255,255,255,0.03)";

            const idleDelay = MODULES.indexOf(mod) * 0.25;

            return (
              <motion.button
                key={mod.id}
                onClick={() => handleClick(mod.id, mod.href)}
                onMouseEnter={() => setHovered(mod.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  height: "90px",
                  borderRadius: "6px",
                  border: `1px solid ${borderColor}`,
                  background: bgGradient,
                  boxShadow,
                  cursor: "pointer",
                  outline: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Scan line on hover */}
                {isHovered && (
                  <motion.span
                    aria-hidden
                    initial={{ y: "-100%" }}
                    animate={{ y: "200%" }}
                    transition={{ duration: 0.55, ease: "easeIn" }}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      height: "30%",
                      background: "linear-gradient(to bottom, transparent, rgba(255,74,61,0.08), transparent)",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Icon — pulses subtly when idle */}
                <motion.span
                  aria-hidden
                  animate={
                    !isActive && !isHovered
                      ? { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={
                    !isActive && !isHovered
                      ? { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: idleDelay }
                      : { duration: 0.15 }
                  }
                  style={{ display: "flex", color: iconColor, filter: glow }}
                >
                  <mod.Icon size={40} strokeWidth={1.2} />
                </motion.span>

                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "15px",
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: labelColor,
                    transition: "color 0.18s ease",
                  }}
                >
                  {MODULE_LABELS[mod.id]}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* ── FOOTER ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4b5563",
            }}
          >
            {t.dashboard.controlCenter.footer}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: i === 0 ? "#9ca3af" : "rgba(255,255,255,0.12)",
                  transition: "background 0.2s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
