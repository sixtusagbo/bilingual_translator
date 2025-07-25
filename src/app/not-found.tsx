import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you are looking for does not exist. Return to the Bilingual Translator homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          404 - Page Not Found
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to translating!
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
            Go to Translator
          </Link>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <Link
              href="/docs"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              View Documentation
            </Link>
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-400 dark:text-gray-500">
          <p>Bilingual Translator - English ↔ Spanish Translation</p>
          <p>Created by Sixtus Miracle Agbo</p>
        </div>
      </div>
    </div>
  );
}
