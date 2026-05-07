"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SteeringIdentity } from "./dashboard/SteeringIdentity";
import { WindshieldTitle } from "./dashboard/WindshieldTitle";
import { SystemStatusPanel } from "./dashboard/SystemStatusPanel";
import { SpeedMetricsPanel } from "./dashboard/SpeedMetricsPanel";
import { ControlCenter } from "./dashboard/ControlCenter";
import { SkillLights } from "./dashboard/SkillLights";
import { MachineSummary } from "./dashboard/MachineSummary";
import { EngineStackPanel } from "./dashboard/EngineStackPanel";
import { ScaledHUD } from "./dashboard/ScaledHUD";

function RotateDeviceOverlay() {
  const { t } = useLanguage();
  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#05080c] landscape:hidden">
      {/* Rotate icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF2D2D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-16 w-16 animate-spin-slow"
        aria-hidden
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 21h6" />
        <path d="M12 17v-4" />
        <path d="M9 13h6" />
      </svg>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[#FF2D2D]">
          {t.contact.rotateDevice}
        </p>
        <p className="text-sm text-white/70 max-w-[220px] leading-relaxed">
          {t.contact.rotateHint}
        </p>
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    /*
     * Outer section fills the full viewport and provides the letterbox
     * background (black bars on non-16:9 screens).
     */
    <section
      id="dashboard"
      className="relative h-dvh w-full overflow-hidden bg-[#05080c] flex items-center justify-center"
    >
      {/* Portrait-mode prompt — only visible on small screens in portrait orientation */}
      <RotateDeviceOverlay />
      {/*
       * 16:9 stage — the image AND every HUD element live inside here.
       * At any viewport size this box is the largest 16:9 rectangle that
       * fits inside the viewport, so all absolute-% positions stay locked
       * to the cockpit image at every screen size.
       *
       *   width  = min(100vw,  100dvh × 16/9)
       *   height = min(100dvh, 100vw  × 9/16)
       */}
      <div
        className="relative overflow-hidden"
        style={{
          width:  "min(100vw, calc(100dvh * 16 / 9))",
          height: "min(100dvh, calc(100vw * 9 / 16))",
        }}
      >
        {/* ── BASE IMAGE ──────────────────────────────────────────────── */}
        <Image
          src="/cockpit-base.png"
          alt="Cockpit dashboard"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay — lifts contrast for HUD legibility */}
        <div aria-hidden className="absolute inset-0 bg-[rgba(5,8,12,0.42)]" />

        {/* Vignette — draws focus to center */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(5,8,12,0.88) 100%)",
          }}
        />

        {/*
         * ScaledHUD — all HUD elements live here, designed at 1440×810.
         * The wrapper measures the actual stage and scales everything
         * uniformly, so pixel values stay correct at any viewport size.
         */}
        <ScaledHUD>
          <SteeringIdentity />
          <WindshieldTitle />
          <SystemStatusPanel />
          <SpeedMetricsPanel />
          <ControlCenter />
          <SkillLights />
          <MachineSummary />
          <EngineStackPanel
            onViewStack={() =>
              document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </ScaledHUD>
      </div>
    </section>
  );
}
