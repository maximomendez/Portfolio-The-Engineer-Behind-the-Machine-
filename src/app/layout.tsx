import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maximo Mendez — The Engineer Behind the Machine",
  description:
    "Full Stack Developer specialized in Backend, Automation & AI. I build the systems, workflows and intelligence that make digital products perform.",
  keywords: ["Full Stack Developer", "Backend Engineer", "Automation", "AI", "Node.js", "TypeScript"],
  openGraph: {
    title: "Maximo Mendez — The Engineer Behind the Machine",
    description:
      "Full Stack Developer specialized in Backend, Automation & AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
