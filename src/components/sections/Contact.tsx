"use client";

import { useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

// SVG ring that wraps around the hex avatar
// Hex box: 272×312. Ring SVG canvas: 400×400, hex centered at (200,200).
// Hex origin inside SVG: left=(200-136)=64, top=(200-156)=44
const HEX_CX = 200;
const HEX_CY = 200;
const RING_R = 175;

function buildTicks() {
  const ticks: Array<{ x1: number; y1: number; x2: number; y2: number; major: boolean }> = [];
  // Hex vertex angles (top-pointing hex): 270, 330, 30, 90, 150, 210 degrees
  const vertexAngles = new Set([270, 330, 30, 90, 150, 210]);

  for (let deg = 0; deg < 360; deg += 5) {
    const rad = (deg - 90) * (Math.PI / 180);
    const isVertex = vertexAngles.has(deg);
    const isMajor = deg % 30 === 0;
    const outerR = RING_R;
    const innerR = isVertex ? RING_R - 18 : isMajor ? RING_R - 12 : RING_R - 6;
    ticks.push({
      x1: HEX_CX + outerR * Math.cos(rad),
      y1: HEX_CY + outerR * Math.sin(rad),
      x2: HEX_CX + innerR * Math.cos(rad),
      y2: HEX_CY + innerR * Math.sin(rad),
      major: isMajor || isVertex,
    });
  }
  return ticks;
}

const RING_TICKS = buildTicks();

function HexDecorativeRing() {
  return (
    <svg
      width={400}
      height={400}
      viewBox="0 0 400 400"
      className="pointer-events-none absolute"
      style={{ left: -64, top: -44, zIndex: 10 }}
      aria-hidden
    >
      {/* Outer ring circle */}
      <circle
        cx={HEX_CX}
        cy={HEX_CY}
        r={RING_R}
        fill="none"
        stroke="#ff2d2d"
        strokeWidth={0.8}
        strokeOpacity={0.35}
      />

      {/* Tick marks */}
      {RING_TICKS.map((t, i) => (
        <line
          key={i}
          x1={t.x1} y1={t.y1}
          x2={t.x2} y2={t.y2}
          stroke="#ff2d2d"
          strokeWidth={t.major ? 1.5 : 0.7}
          strokeOpacity={t.major ? 0.75 : 0.3}
        />
      ))}

      {/* Small dots at the 6 vertex angles */}
      {[270, 330, 30, 90, 150, 210].map((deg) => {
        const rad = (deg - 90) * (Math.PI / 180);
        const dotR = RING_R + 8;
        return (
          <circle
            key={deg}
            cx={HEX_CX + dotR * Math.cos(rad)}
            cy={HEX_CY + dotR * Math.sin(rad)}
            r={2.5}
            fill="#ff2d2d"
            fillOpacity={0.6}
          />
        );
      })}

      {/* Corner bracket accents at top and bottom vertices */}
      {/* Top */}
      <g stroke="#ff2d2d" strokeWidth={1.2} strokeOpacity={0.5} fill="none">
        <polyline points={`${HEX_CX - 10},${HEX_CY - RING_R - 16} ${HEX_CX - 10},${HEX_CY - RING_R - 22} ${HEX_CX},${HEX_CY - RING_R - 22} ${HEX_CX + 10},${HEX_CY - RING_R - 22} ${HEX_CX + 10},${HEX_CY - RING_R - 16}`} />
      </g>
      {/* Bottom */}
      <g stroke="#ff2d2d" strokeWidth={1.2} strokeOpacity={0.5} fill="none">
        <polyline points={`${HEX_CX - 10},${HEX_CY + RING_R + 16} ${HEX_CX - 10},${HEX_CY + RING_R + 22} ${HEX_CX},${HEX_CY + RING_R + 22} ${HEX_CX + 10},${HEX_CY + RING_R + 22} ${HEX_CX + 10},${HEX_CY + RING_R + 16}`} />
      </g>
    </svg>
  );
}

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type CtaButton = {
  label: string;
  icon: ComponentType<{ size?: number }>;
  href: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Contact() {
  const { t } = useLanguage();
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const ctaButtons: CtaButton[] = [
    { label: t.contact.cta.email, icon: Mail, href: "mailto:maximomendz87@gmail.com" },
    { label: t.contact.cta.github, icon: GithubIcon, href: "https://github.com/maximomendez" },
    { label: t.contact.cta.linkedin, icon: LinkedinIcon, href: "https://linkedin.com/in/maximomendez" },
    { label: t.contact.cta.cv, icon: FileText, href: "/cv-maximo-mendez.pdf" },
  ];

  const handleSend = () => {
    if (!message.trim()) return;
    window.location.href = `mailto:maximomendz87@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
    setMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="pit-stop" className="relative min-h-screen overflow-hidden bg-[#0b0b0b]">
      {/* Background car photo */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          backgroundImage: "url('/carphoto.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          opacity: 0.28,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-[#0b0b0b]/40" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT — Avatar + Status */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Floating hex */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
            >
              {/* Outer ring + glow wrapper */}
              <div className="relative" style={{ width: 272, height: 312 }}>
                {/* Decorative SVG ring (renders outside hex bounds via absolute) */}
                <HexDecorativeRing />

                {/* Hex glow + border + image */}
                <div
                  style={{
                    filter:
                      "drop-shadow(0 0 14px #ff2d2d) drop-shadow(0 0 36px rgba(255,45,45,0.45)) drop-shadow(0 0 72px rgba(255,45,45,0.2))",
                  }}
                >
                  <div className="relative" style={{ width: 272, height: 312 }}>
                    {/* Red hex border */}
                    <div
                      className="absolute inset-0"
                      style={{ clipPath: HEX, background: "#ff2d2d" }}
                    />
                    {/* Image hex */}
                    <div
                      className="absolute inset-0 origin-center scale-[0.965] overflow-hidden"
                      style={{ clipPath: HEX }}
                    >
                      <Image
                        src="/cartoonPhoto.png"
                        alt="Maximo Mendez"
                        fill
                        sizes="272px"
                        className="object-cover"
                        style={{ objectPosition: "22% 8%" }}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ENGINEER_ONLINE */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="mb-3 flex items-center gap-2"
            >
              <span className="font-mono text-sm font-bold tracking-widest text-[#ededed]">
                // ENGINEER_ONLINE
              </span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff2d2d]" />
            </motion.div>

            {/* Status lines */}
            <div className="mb-4 space-y-1.5">
              {t.contact.statusLines.map(({ key, value }, i) => (
                <motion.div
                  key={key}
                  custom={i + 1}
                  variants={fadeUp}
                  className="flex items-center gap-2 font-mono text-xs"
                >
                  <span className="text-[#ff2d2d]">&gt;</span>
                  <span className="text-[#ff2d2d]">{key}:</span>
                  <span className="text-[#ededed] tracking-wider">{value}</span>
                </motion.div>
              ))}
            </div>

            {/* Red accent line */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="h-px w-28 bg-[#ff2d2d]"
            />
          </motion.div>

          {/* RIGHT — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-lg border border-[#2a2a2a] bg-[#0f0f0f]/90 backdrop-blur-sm"
          >
            {/* Terminal bar */}
            <div className="flex items-center justify-between border-b border-[#2a2a2a] px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#ff2d2d]">
                TERMINAL v2.5.0
              </span>
            </div>

            <div className="space-y-5 p-6">
              {/* $ whoami */}
              <p className="font-mono text-xs text-[#6b6b6b]">$ whoami</p>

              {/* Headline */}
              <h2 className="font-heading text-3xl font-bold leading-tight text-[#ededed] md:text-4xl">
                {t.contact.headline}{" "}
                <span className="text-[#ff2d2d]">{t.contact.headlineHighlight}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
                  className="ml-0.5 inline-block h-8 w-[3px] translate-y-1 bg-[#ff2d2d] align-middle"
                />
              </h2>

              {/* Description */}
              <p className="font-mono text-sm leading-relaxed text-[#6b6b6b]">
                {t.contact.description.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>

              {/* CTA buttons */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {ctaButtons.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded border border-[#2a2a2a] px-3 py-2.5 font-mono text-xs text-[#ededed] transition-colors duration-200 hover:border-[#ff2d2d] hover:text-[#ff2d2d]"
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>

              <div className="border-t border-[#1e1e1e]" />

              {/* $ send_message */}
              <p className="font-mono text-xs text-[#6b6b6b]">$ send_message</p>

              {/* Message input */}
              <div className="rounded border border-[#2a2a2a] bg-[#0b0b0b] p-3 transition-colors duration-200 focus-within:border-[#ff2d2d]">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.placeholder}
                  rows={3}
                  className="w-full resize-none bg-transparent font-mono text-sm text-[#ededed] placeholder-[#3a3a3a] focus:outline-none"
                />
                <div className="mt-2 flex items-center justify-between gap-3">
                  {sent ? (
                    <span className="font-mono text-[10px] tracking-widest text-[#3dff8f]">
                      → MAIL CLIENT OPENED
                    </span>
                  ) : (
                    <span />
                  )}
                  <button
                    onClick={handleSend}
                    className="rounded border border-[#ff2d2d] px-4 py-1.5 font-mono text-xs text-[#ff2d2d] transition-colors duration-200 hover:bg-[#ff2d2d] hover:text-[#0b0b0b]"
                  >
                    {t.contact.send}
                  </button>
                </div>
              </div>

              {/* Footer line */}
              <p className="font-mono text-xs text-[#6b6b6b]">
                {t.contact.footer}{" "}
                <span className="text-[#ff2d2d]">{t.contact.footerHighlight}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
