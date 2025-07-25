"use client";

import { useState } from "react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Bilingual Translator
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Translate text between multiple languages instantly
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Language Selection */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={swapLanguages}
              className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
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

            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Translation Interface */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Source Text */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Source Text (
                {languages.find((l) => l.code === sourceLang)?.name})
              </label>
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Enter text to translate..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
              />
            </div>

            {/* Translated Text */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Translation (
                {languages.find((l) => l.code === targetLang)?.name})
              </label>
              <textarea
                value={translatedText}
                readOnly
                placeholder="Translation will appear here..."
                className="w-full h-40 p-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 resize-none"
              />
            </div>
          </div>

          {/* Translate Button */}
          <div className="text-center mt-6">
            <button
              onClick={translateText}
              disabled={isLoading || !sourceText.trim()}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium">
              {isLoading ? "Translating..." : "Translate"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p>Powered by Google Translate API</p>
        </footer>
      </div>
    </div>
  );
}
