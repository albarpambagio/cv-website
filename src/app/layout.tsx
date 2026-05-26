import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";

import "./globals.css";
import type React from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://albar-cv.pages.dev"),
  title: {
    default: `Albar Pambagio — Data Analyst`,
    template: `%s | Albar Pambagio`,
  },
  description:
    "Data analyst building analytics pipelines across FMCG, retail, and healthcare. Based in Bandung, Indonesia.",
  keywords: [
    "resume",
    "cv",
    "portfolio",
    RESUME_DATA.name,
    "data analyst",
    "analytics",
    "python",
    "sql",
    "power bi",
  ],
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://albar-cv.pages.dev",
    siteName: `${RESUME_DATA.name}'s CV`,
    title: `Albar Pambagio — Data Analyst`,
    description:
      "Data analyst building analytics pipelines across FMCG, retail, and healthcare. Based in Bandung, Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `Albar Pambagio — Data Analyst`,
    description:
      "Data analyst building analytics pipelines across FMCG, retail, and healthcare. Based in Bandung, Indonesia.",
  },
  alternates: {
    canonical: "https://albar-cv.pages.dev",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceMono.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
