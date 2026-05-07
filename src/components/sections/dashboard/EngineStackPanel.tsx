"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const STACK = [
  {
    category: "Architecture",
    tech: "MICROSERVICES",
    icon: (
      <svg width="17" height="17" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="2.5" r="1.5" />
        <circle cx="2.5" cy="10" r="1.5" />
        <circle cx="11.5" cy="10" r="1.5" />
        <line x1="7" y1="4" x2="3.3" y2="8.7" />
        <line x1="7" y1="4" x2="10.7" y2="8.7" />
        <line x1="4" y1="10" x2="10" y2="10" />
      </svg>
    ),
  },
  {
    category: "Backend",
    tech: "NODE.JS / JAVA",
    icon: (
      <svg width="17" height="17" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1.5" y="1.5" width="11" height="3.5" rx="1" />
        <rect x="1.5" y="5.5" width="11" height="3.5" rx="1" />
        <rect x="1.5" y="9.5" width="11" height="3" rx="1" />
        <circle cx="11" cy="3.25" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="11" cy="7.25" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    category: "Database",
    tech: "POSTGRES / MONGO / SQL / REDIS",
    icon: (
      <svg width="17" height="17" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="7" cy="3.5" rx="4.5" ry="1.8" />
        <path d="M2.5 3.5v7C2.5 11.5 4.5 12.5 7 12.5s4.5-1 4.5-2V3.5" />
        <path d="M2.5 7C2.5 8 4.5 9 7 9s4.5-1 4.5-2" />
      </svg>
    ),
  },
  {
    category: "DevOps",
    tech: "DOCKER / K8S",
    icon: (
      <svg width="17" height="17" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1.5" y="4.5" width="11" height="7" rx="1.5" />
        <path d="M4.5 4.5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.5" />
        <line x1="1.5" y1="7.5" x2="12.5" y2="7.5" />
        <circle cx="7" cy="9.5" r="1" />
      </svg>
    ),
  },
  {
    category: "Cloud",
    tech: "AWS / GCP",
    icon: (
      <svg width="17" height="17" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 10.5H4a2.5 2.5 0 0 1 0-5h.3A4 4 0 1 1 11 9.5" />
        <path d="M11 10.5a2 2 0 0 0 0-4 2 2 0 0 0-1.5.7" />
      </svg>
    ),
  },
] as const;

export function EngineStackPanel({ onViewStack }: { onViewStack?: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-[4%] right-[2%] z-10 w-[250px]"
    >
      <div
        style={{
          background: "linear-gradient(160deg, rgba(10,10,14,0.94) 0%, rgba(6,6,9,0.90) 100%)",
          border: "1px solid rgba(160,20,20,0.28)",
          borderRadius: "14px",
          boxShadow: "0 0 24px rgba(255,45,45,0.05), 0 0 0 1px rgba(255,45,45,0.06), 0 8px 32px rgba(0,0,0,0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "18px",
        }}
      >
        {/* Header */}
        <div className="mb-3 flex items-baseline gap-1.5">
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#f0f0f0",
              textTransform: "uppercase",
            }}
          >
            ENGINE
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "#525252",
              textTransform: "uppercase",
            }}
          >
            (STACK)
          </span>
        </div>

        {/* Stack list */}
        <div>
          {STACK.map((item, i) => (
            <div key={item.category}>
              <div className="flex items-center gap-2.5 py-[7px]">
                <span style={{ color: "#ff2d2d", flexShrink: 0, display: "flex" }}>
                  {item.icon}
                </span>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: "17px",
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      color: "#e8e8e8",
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    {item.category}
                  </p>
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: "16px",
                      fontWeight: 400,
                      letterSpacing: "0.1em",
                      color: "#6b7280",
                      textTransform: "uppercase",
                      lineHeight: 1.3,
                      margin: "1px 0 0",
                    }}
                  >
                    {item.tech}
                  </p>
                </div>
              </div>
              {i < STACK.length - 1 && (
                <div
                  aria-hidden
                  style={{ height: "1px", background: "rgba(255,45,45,0.07)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          aria-hidden
          style={{ height: "1px", background: "rgba(255,45,45,0.14)", margin: "10px 0 8px" }}
        />
        <button
          onClick={onViewStack}
          className="flex w-full items-center justify-between focus-visible:outline-none"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              color: "#888",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = "#bbb")}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = "#888")}
          >
            {t.dashboard.engineStack.viewStack}
          </span>
          <motion.span
            aria-hidden
            animate={{ x: [0, 2, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "#ff2d2d", fontSize: "13px", display: "inline-block" }}
          >
            →
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
}
