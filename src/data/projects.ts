export type Project = {
  id: string;
  name: string;
  circuit: string;
  role: string;
  context: string;
  problem: string;
  result: string;
  metrics: string[];
  stack: string[];
  accent: "#FF2D2D" | "#00D4FF" | "#3DFF8F";
};

export const projects: Project[] = [
  {
    id: "pathmonk",
    name: "Pathmonk",
    circuit: "Intelligence Circuit",
    role: "Full Stack Developer",
    context:
      "AI-powered marketing platform helping businesses understand and optimize their customer journey.",
    problem:
      "Manual workflows and disconnected data pipelines were slowing down analysis and decision-making.",
    result:
      "Built intelligent automation systems and backend services that transformed raw data into actionable insights at scale.",
    metrics: ["+80% development speed", "+70% config reduction", "3x data throughput"],
    stack: ["Node.js", "TypeScript", "GraphQL", "PostgreSQL", "n8n", "Claude AI"],
    accent: "#00D4FF",
  },
  {
    id: "fitenium",
    name: "Fitenium",
    circuit: "Performance Circuit",
    role: "Full Stack Developer",
    context:
      "Fitness platform connecting trainers and athletes through data-driven performance tracking.",
    problem:
      "No unified backend system to handle user data, workout logic, and real-time metrics across devices.",
    result:
      "Designed and built the full backend architecture, REST APIs, and data layer powering the platform end-to-end.",
    metrics: ["+40% faster deployment", "99.9% uptime", "10k+ users served"],
    stack: ["Node.js", "Java", "REST APIs", "PostgreSQL", "Redis", "Docker"],
    accent: "#3DFF8F",
  },
  {
    id: "contactel",
    name: "Contactel",
    circuit: "Legacy Modernization Circuit",
    role: "Backend Engineer",
    context:
      "Telecommunications company running on legacy infrastructure that struggled to scale with modern demands.",
    problem:
      "Outdated systems caused integration failures, slow data sync, and high maintenance overhead.",
    result:
      "Modernized core backend services and built integration layers that connected legacy systems to modern APIs.",
    metrics: ["60% less maintenance time", "5 systems integrated", "+40% deploy speed"],
    stack: ["Java", "REST APIs", "Webhooks", "PostgreSQL", "CI/CD", "Docker"],
    accent: "#FF2D2D",
  },
];
