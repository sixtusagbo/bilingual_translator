"use client";

import { useState } from "react";
import Link from "next/link";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
];

export default function Home() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const translateText = async () => {
    if (!sourceText.trim()) {
      setError("Please enter text to translate");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Using Google Translate API
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;

      if (!apiKey) {
        setError(
          "API key not configured. Please add NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY to your environment variables."
        );
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: sourceText,
            source: sourceLang,
            target: targetLang,
            format: "text",
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setError(`Translation failed: ${data.error.message}`);
      } else if (
        data.data &&
        data.data.translations &&
        data.data.translations[0]
      ) {
        setTranslatedText(data.data.translations[0].translatedText);
      } else {
        setError("Translation failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Bilingual Translator",
    description:
      "Free online English to Spanish translator powered by Google Translate API for academic and educational use",
    url: "https://bilingual-translator-sixtus.vercel.app",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    browserRequirements:
      "Requires JavaScript. Works with Chrome, Firefox, Safari, Edge.",
    softwareVersion: "1.0.0",
    datePublished: "2024-12-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: ["en", "es"],
    availableLanguage: [
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
      {
        "@type": "Language",
        name: "Spanish",
        alternateName: "es",
      },
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    creator: {
      "@type": "Person",
      name: "Sixtus Miracle Agbo",
      email: "miracleagbosixtus@gmail.com",
      affiliation: {
        "@type": "EducationalOrganization",
        name: "Nnamdi Azikiwe University",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Nigeria",
        },
      },
      sameAs: ["https://github.com/sixtusagbo"],
    },
    featureList: [
      "Real-time English to Spanish translation",
      "Spanish to English translation",
      "Copy translated text to clipboard",
      "Character counter",
      "Responsive design for all devices",
      "Dark and light theme support",
      "Free to use with no registration required",
    ],
    screenshot: "https://bilingual-translator-sixtus.vercel.app/screenshot.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this translator free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, this bilingual translator is completely free to use with no registration required.",
          },
        },
        {
          "@type": "Question",
          name: "What languages are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Currently supports English to Spanish and Spanish to English translation.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate are the translations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Translations are powered by Google Translate API, providing high-quality neural machine translation.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        {/* Navigation */}
        <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                  Bilingual Translator
                </h1>
              </Link>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/sixtusagbo/bilingual_translator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  title="View on GitHub">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <Link
                  href="/docs"
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              English ↔ Spanish
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powered by Google Translate API for accurate, instant translations
              between English and Spanish
            </p>
          </header>

          <div className="max-w-6xl mx-auto">
            {/* Language Selection */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 mb-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <div className="flex items-center justify-center gap-6">
                <div className="flex flex-col items-center">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    From
                  </label>
                  <select
                    value={sourceLang}
                    onChange={(e) => setSourceLang(e.target.value)}
                    className="px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white shadow-sm transition-all duration-200 hover:shadow-md">
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={swapLanguages}
                  className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  title="Swap languages">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </button>

                <div className="flex flex-col items-center">
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    To
                  </label>
                  <select
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                    className="px-6 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white shadow-sm transition-all duration-200 hover:shadow-md">
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Translation Interface */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Source Text */}
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {languages.find((l) => l.code === sourceLang)?.name}
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Ready
                    </span>
                  </div>
                </div>
                <textarea
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  placeholder="Enter text to translate..."
                  className="w-full h-48 p-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:text-white dark:placeholder-gray-400 text-lg leading-relaxed transition-all duration-200"
                />
                <div className="mt-3 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{sourceText.length} characters</span>
                  {sourceText.length > 0 && (
                    <button
                      onClick={() => setSourceText("")}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Translated Text */}
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {languages.find((l) => l.code === targetLang)?.name}
                  </label>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isLoading
                          ? "bg-yellow-400 animate-pulse"
                          : translatedText
                          ? "bg-green-400"
                          : "bg-gray-300"
                      }`}></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {isLoading
                        ? "Translating..."
                        : translatedText
                        ? "Complete"
                        : "Waiting"}
                    </span>
                  </div>
                </div>
                <textarea
                  value={translatedText}
                  readOnly
                  placeholder="Translation will appear here..."
                  className="w-full h-48 p-4 bg-gray-50/50 dark:bg-gray-600/50 border border-gray-200 dark:border-gray-600 rounded-xl resize-none dark:text-white dark:placeholder-gray-400 text-lg leading-relaxed"
                />
                <div className="mt-3 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{translatedText.length} characters</span>
                  {translatedText.length > 0 && (
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(translatedText)
                      }
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center space-x-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Copy</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Translate Button */}
            <div className="text-center mt-8">
              <button
                onClick={translateText}
                disabled={isLoading || !sourceText.trim()}
                className="px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:transform-none">
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Translating...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    <span>Translate</span>
                  </div>
                )}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-100/80 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 rounded-2xl backdrop-blur-md">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-800 dark:text-white">
                  Bilingual Translator
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Powered by Google Translate API
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Created by Sixtus Miracle Agbo • Nnamdi Azikiwe University • CSC
                422 • 2024/2025
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
