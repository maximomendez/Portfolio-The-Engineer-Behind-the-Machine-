import { Ignition } from "@/components/sections/Ignition";
import { Dashboard } from "@/components/sections/Dashboard";

const PLACEHOLDER_SECTIONS = [
  { id: "engine", label: "Engine" },
  { id: "ai-system", label: "AI System" },
  { id: "track", label: "Track" },
  { id: "pit-stop", label: "Pit Stop" },
] as const;

export default function Home() {
  return (
    <main className="pb-7">
      <Ignition />
      <Dashboard />
      {PLACEHOLDER_SECTIONS.map(({ id, label }) => (
        <section
          key={id}
          id={id}
          className="flex h-screen items-center justify-center border-t border-[#1e1e1e]"
        >
          <span className="font-mono text-xs tracking-widest text-[#2a2a2a]">
            {label.toUpperCase()} — COMING SOON
          </span>
        </section>
      ))}
    </main>
  );
}
