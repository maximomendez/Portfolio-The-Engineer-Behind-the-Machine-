"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

function WheelButton({
  title,
  subtitle,
  onClick,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  onClick?: () => void;
  delay?: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={cn(
        "relative cursor-pointer border border-[rgba(255,45,45,0.38)] bg-[rgba(5,8,12,0.85)] px-3 py-2 backdrop-blur-sm",
        "transition-all duration-200",
        "hover:border-[rgba(255,45,45,0.75)] hover:shadow-[0_0_14px_3px_rgba(255,45,45,0.18)] hover:scale-[1.04]",
        "focus-visible:outline-none"
      )}
    >
      <span aria-hidden className="absolute left-0 top-0 h-2 w-2 border-l border-t border-[#ff2d2d]" />
      <span aria-hidden className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[#ff2d2d]" />
      <p className="font-mono text-[8px] font-bold tracking-[0.14em] text-[#ff2d2d] uppercase">
        {title}
      </p>
      <p className="mt-0.5 font-mono text-[7px] tracking-[0.1em] text-[#9CA3AF] uppercase">
        {subtitle}
      </p>
    </motion.button>
  );
}

export function SteeringWheelButtons({
  onWhoClick,
  onWhatClick,
}: {
  onWhoClick?: () => void;
  onWhatClick?: () => void;
}) {
  const { t } = useLanguage();
  return (
    <>
      {/* Left steering wheel button — WHO I AM */}
      <div className="absolute z-10" style={{ top: "57%", left: "19%" }}>
        <WheelButton
          title={t.dashboard.steeringButtons.whoTitle}
          subtitle={t.dashboard.steeringButtons.whoSub}
          onClick={onWhoClick}
          delay={0.9}
        />
      </div>

      {/* Right steering wheel button — WHAT I DO */}
      <div className="absolute z-10" style={{ top: "57%", left: "37.5%" }}>
        <WheelButton
          title={t.dashboard.steeringButtons.whatTitle}
          subtitle={t.dashboard.steeringButtons.whatSub}
          onClick={onWhatClick}
          delay={1.0}
        />
      </div>
    </>
  );
}
