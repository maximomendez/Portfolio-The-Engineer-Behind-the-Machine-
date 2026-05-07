"use client";

import { useRef, useEffect, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

// ── Geometry ─────────────────────────────────────────────────────────────────
const CX = 100;
const CY = 100;
const R_OUTER = 84;          // outer edge of tick marks
const R_LABEL = 66;          // radius where numbers sit
const START_ANGLE = 225;     // degrees clockwise from 12 o'clock  → 7:30 position
const SWEEP = 270;
const TOTAL_TICKS = 25;      // indices 0..24;  major at 0,6,12,18,24

function polarPoint(angleDeg: number, radius: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

// ── Types ─────────────────────────────────────────────────────────────────────
interface TickLabel {
  index: number; // 0..24
  text: string;
}

export interface GaugeDialProps {
  value: number;
  maxValue: number;
  unit: string;
  label: string;
  tickLabels: TickLabel[];
  color?: string;
  delay?: number;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function GaugeDial({
  value,
  maxValue,
  unit,
  label,
  tickLabels,
  color = "#ff2d2d",
  delay = 0,
}: GaugeDialProps) {
  const progress = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  const isDecimal = value < 20;
  const [displayText, setDisplayText] = useState(isDecimal ? "0.0" : "0");
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(progress, value / maxValue, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      delay,
    });
    return () => ctrl.stop();
  }, [inView, progress, value, maxValue, delay]);

  useMotionValueEvent(progress, "change", (p) => {
    setFillProgress(p);
    const v = p * value;
    setDisplayText(isDecimal ? v.toFixed(1) : Math.round(v).toString());
  });

  // How many ticks are "active" (lit red) at this animation frame
  const activeTicks = fillProgress * (TOTAL_TICKS - 1);

  // Pre-compute tick geometry
  const ticks = Array.from({ length: TOTAL_TICKS }, (_, i) => {
    const angle = START_ANGLE + (i / (TOTAL_TICKS - 1)) * SWEEP;
    const isMajor = i % 6 === 0;
    const len = isMajor ? 11 : 7;
    const strokeW = isMajor ? 2.5 : 1.8;
    const outer = polarPoint(angle, R_OUTER);
    const inner = polarPoint(angle, R_OUTER - len);
    const isActive = i <= activeTicks;
    return { outer, inner, isMajor, strokeW, isActive };
  });

  const filterId = `gauge-glow-${label.replace(/\s+/g, "")}`;

  return (
    <div ref={ref} className="relative w-full select-none">
      <svg
        viewBox="0 0 200 210"
        width="100%"
        height="auto"
        aria-label={`${label}: ${value} ${unit}`}
        className="overflow-visible"
      >
        <defs>
          {/* Red glow filter for active ticks */}
          <filter id={filterId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background circle ─────────────────────────────────────── */}
        <circle cx={CX} cy={CY} r={94} fill="#090c10" />
        {/* subtle inner gradient ring */}
        <circle
          cx={CX} cy={CY} r={94}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={1}
        />
        <circle
          cx={CX} cy={CY} r={87}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={0.5}
        />

        {/* ── Dim (inactive) ticks ──────────────────────────────────── */}
        {ticks.map(({ outer, inner, strokeW }, i) => (
          <line
            key={`dim-${i}`}
            x1={outer.x} y1={outer.y}
            x2={inner.x} y2={inner.y}
            stroke="rgba(255,255,255,0.10)"
            strokeWidth={strokeW}
            strokeLinecap="round"
          />
        ))}

        {/* ── Active (red) ticks — rendered in a filtered group ─────── */}
        <g filter={`url(#${filterId})`}>
          {ticks
            .filter((t) => t.isActive)
            .map(({ outer, inner, strokeW }, i) => (
              <line
                key={`active-${i}`}
                x1={outer.x} y1={outer.y}
                x2={inner.x} y2={inner.y}
                stroke={color}
                strokeWidth={strokeW}
                strokeLinecap="round"
              />
            ))}
        </g>

        {/* ── Scale labels ──────────────────────────────────────────── */}
        {tickLabels.map(({ index, text }) => {
          const angle = START_ANGLE + (index / (TOTAL_TICKS - 1)) * SWEEP;
          const pt = polarPoint(angle, R_LABEL);
          return (
            <text
              key={text}
              x={pt.x.toFixed(2)}
              y={pt.y.toFixed(2)}
              textAnchor="middle"
              dominantBaseline="central"
              fill="rgba(255,255,255,0.50)"
              fontSize={7.5}
              fontFamily="ui-monospace, monospace"
            >
              {text}
            </text>
          );
        })}

        {/* ── Center: main value ────────────────────────────────────── */}
        <text
          x={CX}
          y={CY - 4}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#ffffff"
          fontSize={30}
          fontWeight="700"
          fontFamily="ui-monospace, monospace"
          letterSpacing="-0.5"
        >
          {displayText}
        </text>

        {/* ── Center: unit ──────────────────────────────────────────── */}
        <text
          x={CX}
          y={CY + 17}
          textAnchor="middle"
          dominantBaseline="central"
          fill="rgba(255,255,255,0.45)"
          fontSize={7.5}
          fontFamily="ui-monospace, monospace"
          letterSpacing="2"
        >
          {unit}
        </text>

        {/* Red underline beneath unit — matches reference image */}
        <line
          x1={CX - 18} y1={CY + 23}
          x2={CX + 18} y2={CY + 23}
          stroke={color}
          strokeWidth={1}
          opacity={0.75}
        />

        {/* ── Bottom label ──────────────────────────────────────────── */}
        <text
          x={CX}
          y={186}
          textAnchor="middle"
          dominantBaseline="central"
          fill="rgba(255,255,255,0.28)"
          fontSize={6.5}
          fontFamily="ui-monospace, monospace"
          letterSpacing="2.5"
        >
          {label.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
