import "./globals.css";

import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://desertcodex.com"),
  title: "Desert Codex | Design Engineering & AI Integration Studio",
  description:
    "Desert Codex is a design engineering and AI integration studio founded by Bridger. We partner with product teams for full stack design engineering and AI integration. No wireframe handoffs, no bloated timelines.",
  keywords: [
    "design engineering",
    "AI integration",
    "full stack",
    "product design",
    "system architecture",
    "interface design",
    "Utah",
  ],
  authors: [{ name: "Bridger" }],
  creator: "Bridger",
  openGraph: {
    title: "Desert Codex | Design Engineering & AI Integration Studio",
    description:
      "Design engineering and AI integration studio. Full stack execution from system architecture to interface. Monthly engagements with teams that have budget and urgency.",
    type: "website",
    locale: "en_US",
    siteName: "Desert Codex",
    url: "https://desertcodex.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desert Codex | Design Engineering & AI Integration Studio",
    description:
      "Design engineering and AI integration studio. Full stack execution from system architecture to interface.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
