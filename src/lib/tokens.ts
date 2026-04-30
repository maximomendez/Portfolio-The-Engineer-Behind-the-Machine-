export const colors = {
  bg: {
    primary: "#0B0B0B",
    secondary: "#151515",
    card: "#1A1A1A",
    input: "#0F0F0F",
  },
  border: {
    default: "#2A2A2A",
    hover: "#3A3A3A",
    subtle: "#1F1F1F",
  },
  text: {
    primary: "#EDEDED",
    secondary: "#A0A0A0",
    muted: "#6B6B6B",
  },
  accent: {
    red: "#FF2D2D",
    redDim: "#CC1F1F",
    blue: "#00D4FF",
    blueDim: "#0099CC",
    green: "#3DFF8F",
    greenDim: "#28CC6A",
  },
} as const;

export const glow = {
  red: "0 0 20px 2px rgba(255, 45, 45, 0.30)",
  redIntense: "0 0 40px 4px rgba(255, 45, 45, 0.45)",
  blue: "0 0 20px 2px rgba(0, 212, 255, 0.30)",
  blueIntense: "0 0 40px 4px rgba(0, 212, 255, 0.45)",
  green: "0 0 16px 1px rgba(61, 255, 143, 0.30)",
} as const;

export const fontSize = {
  display: "4.5rem",   // 72px — hero headings only
  h1: "3.5rem",        // 56px — section hero titles
  h2: "2.5rem",        // 40px — section headings
  h3: "1.75rem",       // 28px — subsection headings
  h4: "1.25rem",       // 20px — labels, widget titles
  bodyLg: "1.125rem",  // 18px — lead paragraphs
  body: "1rem",        // 16px — default
  bodySm: "0.875rem",  // 14px — captions, metadata
  label: "0.6875rem",  // 11px — ALL CAPS HUD labels
  mono: "0.8125rem",   // 13px — code, terminal
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeight = {
  tight: 1.05,
  snug: 1.2,
  normal: 1.5,
  relaxed: 1.65,
} as const;

export const letterSpacing = {
  tight: "-0.02em",  // hero headings
  normal: "0em",
  label: "0.12em",   // uppercase HUD labels
  button: "0.08em",  // button text
  badge: "0.10em",   // tech badges
} as const;

export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
} as const;

export const radius = {
  none: "0px",
  sm: "2px",
  md: "4px",
  lg: "8px",
  full: "9999px",
} as const;

export const duration = {
  instant: 100,
  fast: 200,
  default: 400,
  slow: 600,
  xslow: 1000,
} as const;

export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  spring: [0.22, 1, 0.36, 1] as [number, number, number, number],
  linear: "linear" as const,
} as const;

export const zIndex = {
  base: 0,
  raised: 10,
  overlay: 20,
  sticky: 30,
  modal: 40,
  toast: 50,
  boot: 100,
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const maxWidth = {
  content: "1280px",
  narrow: "720px",
  cards: "1120px",
} as const;
