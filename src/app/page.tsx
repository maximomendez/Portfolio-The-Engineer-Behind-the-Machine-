import { Ignition } from "@/components/sections/Ignition";
import { Dashboard } from "@/components/sections/Dashboard";
import { Engine } from "@/components/sections/Engine";
import { AISystem } from "@/components/sections/AISystem";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pb-7">
      <Ignition />
      <Dashboard />
      <Engine />
      <AISystem />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
