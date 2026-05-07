"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function SpeedMetricsPanel({ onAnalyzeClick }: { onAnalyzeClick?: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute z-10"
      style={{ top: "29%", left: "2.5%" }}
    >
      <div
        style={{
          width: "290px",
          minHeight: "220px",
          borderRadius: "16px",
          background:
            "linear-gradient(160deg, rgba(18,18,20,0.92) 0%, rgba(10,10,12,0.96) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
          padding: "16px 16px",
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
            {t.dashboard.speedMetrics.header}
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "15px",
              letterSpacing: "0.1em",
              color: "rgba(156,163,175,0.6)",
            }}
          >
            {t.dashboard.speedMetrics.subheader}
          </span>
        </div>

        {/* Metric 1 */}
        <div style={{ paddingBottom: "12px" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "36px",
              fontWeight: 300,
              lineHeight: 1,
              color: "#f3f4f6",
              textShadow: "0 0 20px rgba(255,255,255,0.08)",
              margin: 0,
            }}
          >
            +80%
          </p>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "0.12em",
              color: "#ff2d2d",
              textTransform: "uppercase",
              marginTop: "6px",
              margin: "6px 0 0 0",
            }}
          >
            {t.dashboard.speedMetrics.metric1Label}
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
            margin: "0 0 12px 0",
          }}
        />

        {/* Metric 2 */}
        <div style={{ paddingBottom: "14px" }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "36px",
              fontWeight: 300,
              lineHeight: 1,
              color: "#f3f4f6",
              textShadow: "0 0 20px rgba(255,255,255,0.08)",
              margin: 0,
            }}
          >
            +40%
          </p>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              letterSpacing: "0.12em",
              color: "#ff2d2d",
              textTransform: "uppercase",
              marginTop: "6px",
              margin: "6px 0 0 0",
            }}
          >
            {t.dashboard.speedMetrics.metric2Label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
