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
  title: {
    default: "Bilingual Translator - Free English ↔ Spanish Translation Tool",
    template: "%s | Bilingual Translator",
  },
  description:
    "Free online English to Spanish translator powered by Google Translate API. Instant, accurate translations for academic, educational, and personal use. Created by Sixtus Miracle Agbo at Nnamdi Azikiwe University for CSC 422.",
  keywords: [
    "English to Spanish translator",
    "Spanish to English translator",
    "bilingual translator",
    "Google Translate API",
    "free translation tool",
    "online translator",
    "language translation",
    "academic translation",
    "educational tool",
    "real-time translation",
    "Nnamdi Azikiwe University",
    "CSC 422",
    "Sixtus Miracle Agbo",
    "Nigeria translation tool",
    "web translator",
    "instant translation",
  ],
  authors: [
    { name: "Sixtus Miracle Agbo", url: "https://github.com/sixtusagbo" },
  ],
  creator: "Sixtus Miracle Agbo",
  publisher: "Nnamdi Azikiwe University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bilingual-translator-sixtus.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bilingual-translator-sixtus.vercel.app",
    title: "Bilingual Translator - Free English ↔ Spanish Translation Tool",
    description:
      "Free online English to Spanish translator powered by Google Translate API. Instant, accurate translations for academic and educational use.",
    siteName: "Bilingual Translator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bilingual Translator - English to Spanish Translation Tool",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilingual Translator - Free English ↔ Spanish Translation",
    description:
      "Free online translator powered by Google Translate API. Instant, accurate English-Spanish translations.",
    images: ["/twitter-image.png"],
    creator: "@sixtusagbo",
    site: "@sixtusagbo",
  },
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
    yahoo: "yahoo-site-verification-placeholder",
  },
  category: "Education",
  classification: "Educational Tool",
  referrer: "origin-when-cross-origin",
  applicationName: "Bilingual Translator",
  generator: "Next.js",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://translation.googleapis.com" />
        <link rel="dns-prefetch" href="https://translation.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
