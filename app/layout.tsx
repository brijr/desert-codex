import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
