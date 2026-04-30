export type SkillCategory = "backend" | "automation" | "ai" | "infra";

export type Skill = {
  name: string;
  level: number;
  category: SkillCategory;
};

export const skills: Skill[] = [
  { name: "Node.js", level: 92, category: "backend" },
  { name: "TypeScript", level: 90, category: "backend" },
  { name: "Java", level: 82, category: "backend" },
  { name: "REST APIs", level: 95, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "n8n / Workflows", level: 88, category: "automation" },
  { name: "Process Automation", level: 90, category: "automation" },
  { name: "Claude AI / LLMs", level: 85, category: "ai" },
  { name: "AI Agent Design", level: 82, category: "ai" },
  { name: "Docker", level: 80, category: "infra" },
  { name: "CI/CD Pipelines", level: 78, category: "infra" },
];
