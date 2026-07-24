import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { getSiteUrl, siteConfig } from "@/data/site";

import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NiKa Store | Abbigliamento uomo e donna a Sambuceto",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "abbigliamento Sambuceto",
    "abbigliamento donna Sambuceto",
    "abbigliamento uomo Sambuceto",
    "abbigliamento casual Chieti",
    "NiKa Store",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: siteConfig.name,
    title: "NiKa Store | Il tuo stile, ogni giorno",
    description: siteConfig.description,
    images: [
      {
        url: "/images/editorial-hero.jpg",
        width: 1800,
        height: 2700,
        alt: "NiKa Store, abbigliamento casual uomo e donna a Sambuceto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NiKa Store | Il tuo stile, ogni giorno",
    description: siteConfig.description,
    images: ["/images/editorial-hero.jpg"],
  },
  other: {
    "geo.region": "IT-CH",
    "geo.placename": "Sambuceto",
    "geo.position": "42.4220999;14.1876715",
    ICBM: "42.4220999, 14.1876715",
  },
};

export const viewport: Viewport = {
  themeColor: "#12382f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
