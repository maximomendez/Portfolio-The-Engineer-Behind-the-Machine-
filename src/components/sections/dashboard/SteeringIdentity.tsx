"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface SteeringIdentityProps {
  onAboutClick?: () => void;
}

export function SteeringIdentity({ onAboutClick }: SteeringIdentityProps) {
  const { t } = useLanguage();
  const handleAbout = () => {
    if (onAboutClick) {
      onAboutClick();
    } else {
      document.getElementById("pit-stop")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[2.5%] left-[1.5%] z-10 w-[560px]"
    >
      <div
        className={cn(
          "relative rounded-[16px]",
          "border border-white/[0.07]",
          "p-6",
          "backdrop-blur-[18px]",
          "transition-[border-color,box-shadow] duration-500",
          "hover:border-white/[0.12]",
          "shadow-[0_8px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.05)]"
        )}
        style={{
          background: "rgba(4, 7, 13, 0.78)",
        }}
      >
        {/* Red top accent line — echoes the cockpit gauge cluster trim */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #ff2b2b 30%, #ff2b2b 70%, transparent 100%)",
            opacity: 0.7,
          }}
        />

        {/* Subtle inner vignette to ground the content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255,43,43,0.04) 0%, transparent 65%)",
          }}
        />

        {/* Horizontal layout: avatar + text block */}
        <div className="relative flex items-center gap-4">
          {/* Avatar — styled as a cockpit instrument ring */}
          <div className="relative flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.18 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "h-[76px] w-[76px] rounded-full",
                "overflow-hidden cursor-pointer",
                "border border-white/[0.10]",
                "shadow-[0_0_0_3px_rgba(255,43,43,0.18),0_4px_20px_rgba(0,0,0,0.6)]"
              )}
            >
              <Image
                src="/cartoonPhoto.png"
                alt="Máximo Méndez"
                width={248}
                height={248}
                className="h-full w-full object-cover object-top"
                priority
              />
            </motion.div>
            {/* Pulsing red ring — like a live status indicator */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 0 3px rgba(255,43,43,0.22)",
              }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Text stack */}
          <div className="flex min-w-0 flex-col">
            {/* Uppercase label */}
            <p
              className="mb-[8px] text-[15px] font-medium uppercase tracking-[0.22em]"
              style={{ color: "rgba(156,163,175,0.75)" }}
            >
              {t.dashboard.identity.eyebrow}
            </p>

            {/* Main heading */}
            <h2
              className="mb-[10px] text-[28px] font-bold uppercase leading-none tracking-[0.06em] text-white"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              {t.dashboard.identity.title}
            </h2>

            {/* Thin divider — echoes the cockpit's trim lines */}
            <div
              className="mb-[10px] h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,43,43,0.35) 0%, rgba(255,255,255,0.06) 60%, transparent 100%)",
              }}
            />

            {/* Description */}
            <p
              className="mb-3 text-[17px] leading-[1.75]"
              style={{ color: "rgba(156,163,175,0.80)" }}
            >
              {t.dashboard.identity.description.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>

            {/* CTA */}
            <button
              onClick={handleAbout}
              className="flex items-center gap-1 self-start text-[13px] font-semibold uppercase tracking-[0.18em] transition-opacity duration-200 hover:opacity-75 focus-visible:outline-none"
              style={{ color: "#FF2B2B" }}
            >
              {t.dashboard.identity.cta}
              <motion.span
                aria-hidden
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                →
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
