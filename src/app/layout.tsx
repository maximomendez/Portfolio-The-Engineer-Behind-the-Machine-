import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Nav } from "@/components/navigation/Nav";
import { SystemHealthBar } from "@/components/navigation/SystemHealthBar";
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
  metadataBase: new URL("https://maximomendez.dev"),
  title: "Maximo Mendez — The Engineer Behind the Machine",
  description:
    "Full Stack Developer specialized in Backend, Automation & AI. I build the systems, workflows and intelligence that make digital products perform.",
  keywords: ["Full Stack Developer", "Backend Engineer", "Automation", "AI", "Node.js", "TypeScript"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Maximo Mendez — The Engineer Behind the Machine",
    description:
      "Full Stack Developer specialized in Backend, Automation & AI. I build the systems, workflows and intelligence that make digital products perform.",
    type: "website",
    images: [
      {
        url: "/backend-engine.png",
        width: 700,
        height: 440,
        alt: "Maximo Mendez — Backend Engineering Portfolio",
      },
    ],
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
        <LanguageProvider>
          <SmoothScrollProvider>
            <Nav />
            {children}
            {/* <SystemHealthBar /> */}
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
