import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAXEFF - Energy Efficiency Solutions | Enerji Verimliliği Çözümleri",
  description:
    "Innovative energy efficiency solutions and sustainable technologies for industrial facilities. Endüstriyel tesisler için yenilikçi enerji verimliliği çözümleri.",
  keywords:
    "energy efficiency, enerji verimliliği, sustainability, sürdürülebilirlik, industrial optimization, endüstriyel optimizasyon, Turkey, Türkiye, MAXEFF",
  authors: [{ name: "MAXEFF" }],
  creator: "MAXEFF",
  publisher: "MAXEFF",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MAXEFF - Energy Efficiency Solutions",
    description:
      "Leading provider of energy efficiency solutions and sustainable technologies for industrial facilities",
    url: "https://maxeff.com.tr",
    siteName: "MAXEFF",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAXEFF - Energy Efficiency Solutions",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAXEFF - Energy Efficiency Solutions",
    description:
      "Leading provider of energy efficiency solutions and sustainable technologies",
    images: ["/twitter-image.jpg"],
    creator: "@maxeff",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://maxeff.com.tr",
    languages: {
      "tr-TR": "https://maxeff.com.tr",
      "en-US": "https://maxeff.com.tr/en",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
