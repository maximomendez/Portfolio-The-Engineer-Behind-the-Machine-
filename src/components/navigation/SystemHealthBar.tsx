"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type StatusValue = "Online" | "Initializing...";

const INDICATORS = [
  { label: "System", value: "Online" as StatusValue, color: "#3dff8f" },
  { label: "Performance", value: "High" as const, color: "#3dff8f" },
  { label: "Automation", value: "Active" as const, color: "#00d4ff" },
  { label: "AI Core", value: "Ready" as const, color: "#00d4ff" },
] as const;

function PulseDot({ color }: { color: string }) {
  return (
    <span className="relative inline-flex h-1.5 w-1.5 shrink-0">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full opacity-75"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.75, 0, 0.75] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span
        className="relative inline-flex h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

export function SystemHealthBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 8 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1e1e1e] bg-[#0b0b0b]/80 backdrop-blur-sm"
      role="status"
      aria-label="System status"
    >
      <div className="mx-auto flex h-7 max-w-7xl items-center justify-between px-6">
        {/* Left: indicators */}
        <ul className="flex items-center gap-5">
          {INDICATORS.map(({ label, value, color }) => (
            <li key={label} className="flex items-center gap-1.5">
              <PulseDot color={color} />
              <span className="font-mono text-[10px] tracking-widest text-[#6b6b6b]">
                {label.toUpperCase()}
                <span className="ml-1 text-[#ededed]">{value}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* Right: timestamp */}
        <LiveClock />
      </div>
    </motion.div>
  );
}

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hidden font-mono text-[10px] tracking-widest text-[#2a2a2a] sm:block">
      {time}
    </span>
  );
}
