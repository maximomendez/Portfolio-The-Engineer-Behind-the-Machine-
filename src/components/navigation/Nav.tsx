"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Engine", href: "#engine" },
  { label: "AI System", href: "#ai-system" },
  { label: "Projects", href: "#track" },
  { label: "Contact", href: "#pit-stop" },
];

const SECTION_IDS = ["ignition", "dashboard", "engine", "ai-system", "track", "pit-stop"];

export function Nav() {
  const [activeSection, setActiveSection] = useState("ignition");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "ignition";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#2a2a2a] bg-[#0b0b0b]/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => handleNav("#ignition")}
          className="group flex items-center gap-2 focus-visible:outline-none"
          aria-label="Back to top"
        >
          <span className="font-heading text-sm font-bold tracking-widest text-[#ededed] transition-colors group-hover:text-[#ff2d2d]">
            MM
          </span>
          <span className="hidden text-[10px] font-mono tracking-[0.2em] text-[#6b6b6b] transition-colors group-hover:text-[#ededed] sm:block">
            / ENGINEER
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className={cn(
                    "relative font-mono text-[11px] tracking-widest transition-colors duration-200 focus-visible:outline-none",
                    isActive ? "text-[#ff2d2d]" : "text-[#6b6b6b] hover:text-[#ededed]"
                  )}
                >
                  {label.toUpperCase()}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#ff2d2d]"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col items-end gap-[5px] p-1 md:hidden focus-visible:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-px w-5 bg-[#ededed] transition-transform duration-200 origin-right",
              menuOpen && "-rotate-45 translate-y-[3px]"
            )}
          />
          <span
            className={cn(
              "block h-px w-3 bg-[#ededed] transition-all duration-200",
              menuOpen && "opacity-0 w-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-[#ededed] transition-transform duration-200 origin-right",
              menuOpen && "rotate-45 -translate-y-[3px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-[#2a2a2a] bg-[#0b0b0b]/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={href}>
                    <button
                      onClick={() => handleNav(href)}
                      className={cn(
                        "font-mono text-[11px] tracking-widest transition-colors",
                        isActive ? "text-[#ff2d2d]" : "text-[#6b6b6b]"
                      )}
                    >
                      {label.toUpperCase()}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
