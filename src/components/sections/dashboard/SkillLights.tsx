"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const SKILLS = [
  { label: "Backend",          color: "#3dff8f" },
  { label: "APIs",             color: "#3dff8f" },
  { label: "Automation",       color: "#3dff8f" },
  { label: "AI / ML",          color: "#38BDF8" },
  { label: "Data Engineering", color: "#38BDF8" },
  { label: "DevOps",           color: "#3dff8f" },
] as const;

export function SkillLights() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
      className="absolute z-10"
      style={{ bottom: "2.8%", left: "2.7%" }}
    >
      <div
        style={{
          width: "300px",
          height: "417px",
          minHeight: "220px",
          borderRadius: "16px",
          background:
            "linear-gradient(160deg, rgba(18,18,20,0.93) 0%, rgba(10,10,12,0.97) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,45,45,0.18)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.55), 0 0 24px rgba(255,45,45,0.04), inset 0 1px 0 rgba(255,255,255,0.04)",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "14px" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#e5e7eb",
              textTransform: "uppercase",
            }}
          >
            {t.dashboard.skillLights.header}
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "0.08em",
              color: "rgba(156,163,175,0.55)",
            }}
          >
            {t.dashboard.skillLights.subheader}
          </span>
        </div>

        {/* Skills list container */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "8px",
            overflow: "hidden",
            flex: 1,
            marginBottom: "21px",
          }}
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 1.15 + i * 0.07 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                height: "58px",
                padding: "15px 10px",
                borderBottom:
                  i < SKILLS.length - 1
                    ? "1px solid rgba(255,255,255,0.04)"
                    : "none",
                cursor: "default",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.03)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "transparent")
              }
            >
              <motion.span
                aria-hidden
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{
                  duration: 2 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  backgroundColor: skill.color,
                  boxShadow: `0 0 7px 1px ${skill.color}88`,
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "17px",
                  letterSpacing: "0.06em",
                  color: "rgba(209,213,219,0.8)",
                }}
              >
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <motion.span
            aria-hidden
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              flexShrink: 0,
              backgroundColor: "#3dff8f",
              boxShadow: "0 0 8px 2px #3dff8f88",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "17px",
              letterSpacing: "0.22em",
              color: "rgba(209,213,219,0.55)",
              textTransform: "uppercase",
            }}
          >
            {t.dashboard.skillLights.allSystemsGo}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
