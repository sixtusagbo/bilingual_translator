import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - Project Details & Technical Information",
  description:
    "Comprehensive documentation for the Bilingual Translator project including technical stack, API information, assignment requirements, and project details by Sixtus Miracle Agbo at Nnamdi Azikiwe University.",
  keywords: [
    "bilingual translator documentation",
    "project documentation",
    "Google Translate API documentation",
    "Next.js project documentation",
    "TypeScript documentation",
    "CSC 422 assignment documentation",
    "Nnamdi Azikiwe University project",
    "technical documentation",
    "API integration guide",
    "React documentation",
    "Tailwind CSS documentation"
  ],
  openGraph: {
    title: "Bilingual Translator Documentation",
    description:
      "Complete project documentation including technical details, API information, and assignment requirements.",
    url: "https://bilingual-translator-sixtus.vercel.app/docs",
    type: "article",
    images: [
      {
        url: "/docs-og-image.png",
        width: 1200,
        height: 630,
        alt: "Bilingual Translator Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilingual Translator Documentation",
    description: "Complete technical documentation and project details",
    images: ["/docs-twitter-image.png"],
  },
  alternates: {
    canonical: "/docs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
