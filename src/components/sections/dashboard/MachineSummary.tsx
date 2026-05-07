"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useMotionValueEvent, animate } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Metric {
  numericValue?: number;
  suffix?: string;
  display?: string;
  label: string;
  comingSoon?: boolean;
}


function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-5%" });
  const mv = useMotionValue(0);
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
    });
    return () => ctrl.stop();
  }, [inView, mv, value]);

  useMotionValueEvent(mv, "change", (v) => {
    if (ref.current) {
      ref.current.textContent =
        (isDecimal ? v.toFixed(1) : Math.round(v).toString()) + suffix;
    }
  });

  return (
    <div ref={wrapRef}>
      <span ref={ref} style={{ fontFamily: "monospace", fontSize: "24px", fontWeight: 700, color: "#e8e8e8", lineHeight: 1 }}>
        0{suffix}
      </span>
    </div>
  );
}

export function MachineSummary() {
  const { t } = useLanguage();

  const METRICS: Metric[] = [
    { numericValue: 3, suffix: "+", label: t.dashboard.machineSummary.experience },
    { numericValue: 1, suffix: "+", label: t.dashboard.machineSummary.projects, comingSoon: true },
    { numericValue: 99.9, suffix: "%", label: t.dashboard.machineSummary.uptime },
    { display: "∞", label: t.dashboard.machineSummary.learning },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-[3%] z-10"
      style={{ left: "22%", right: "17%" }}
    >
      <div
        style={{
          background: "linear-gradient(160deg, rgba(10,10,14,0.94) 0%, rgba(6,6,9,0.90) 100%)",
          border: "1px solid rgba(160,20,20,0.28)",
          borderRadius: "14px",
          boxShadow: "0 0 28px rgba(255,45,45,0.05), 0 0 0 1px rgba(255,45,45,0.06), 0 8px 40px rgba(0,0,0,0.45)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          padding: "18px 22px 16px",
        }}
      >
        {/* Header */}
        <p
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "#c0c0c0",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          {t.dashboard.machineSummary.header}
        </p>

        {/* Metrics panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "rgba(4,4,7,0.55)",
            border: "1px solid rgba(80,80,80,0.14)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "14px 10px 12px",
                borderLeft: i > 0 ? "1px solid rgba(80,80,80,0.14)" : "none",
                gap: "6px",
              }}
            >
              {m.display !== undefined ? (
                <span style={{ fontFamily: "monospace", fontSize: "24px", fontWeight: 700, color: "#e8e8e8", lineHeight: 1 }}>
                  {m.display}
                </span>
              ) : (
                <AnimatedNumber value={m.numericValue!} suffix={m.suffix!} />
              )}
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "17px",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {m.label}
              </span>
              {m.comingSoon && (
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#ff2d2d",
                    background: "rgba(255,45,45,0.08)",
                    border: "1px solid rgba(255,45,45,0.25)",
                    borderRadius: "4px",
                    padding: "1px 5px",
                    lineHeight: 1.6,
                  }}
                >
                  soon
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            marginTop: "14px",
            fontFamily: "monospace",
            fontSize: "17px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            lineHeight: 1.5,
          }}
        >
          <span style={{ color: "#b0b0b0" }}>{t.dashboard.machineSummary.footer1}{" "}</span>
          <span
            style={{
              color: "#ff2d2d",
              textShadow: "0 0 12px rgba(255,45,45,0.55), 0 0 24px rgba(255,45,45,0.25)",
            }}
          >
            {t.dashboard.machineSummary.footer2}
          </span>
        </p>
      </div>
    </motion.div>
  );
}
