export type Metric = {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  context: string;
  accentColor: string;
};

export const metrics: Metric[] = [
  {
    label: "Development Speed",
    value: 80,
    suffix: "%",
    prefix: "+",
    context: "Faster delivery through automation pipelines and AI-assisted workflows",
    accentColor: "#FF2D2D",
  },
  {
    label: "Config Reduction",
    value: 70,
    suffix: "%",
    prefix: "+",
    context: "Less manual configuration thanks to intelligent defaults and automated setups",
    accentColor: "#00D4FF",
  },
  {
    label: "Deploy Speed",
    value: 40,
    suffix: "%",
    prefix: "+",
    context: "Faster release cycles through CI/CD optimization and container orchestration",
    accentColor: "#3DFF8F",
  },
];
