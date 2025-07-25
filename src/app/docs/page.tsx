"use client";

import Link from "next/link";

export default function DocsPage() {
  return (
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
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              ← Back to Translator
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Complete project documentation and technical details
            </p>
          </header>

          {/* Project Information */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <svg
                className="w-8 h-8 mr-3 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Project Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Author
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sixtus Miracle Agbo
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    miracleagbosixtus@gmail.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Institution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nnamdi Azikiwe University
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Course
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">CSC 422</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Academic Year
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">2024/2025</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Assignment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Project Documentation and Implementation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assignment Requirements */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <svg
                className="w-8 h-8 mr-3 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Assignment Requirements
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Language Selection
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Selected English and Spanish as source and target languages
                    with bidirectional translation support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    API Documentation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Implemented Google Translate API by Google LLC with
                    comprehensive documentation of features, endpoints, and
                    usage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Stakeholder Analysis
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Identified and analyzed 7 key stakeholders including end
                    users, educators, Google LLC, Vercel, and accessibility
                    community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Web Application URL
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Deployed on Vercel with live URL for public access and
                    demonstration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Comprehensive Documentation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Created detailed documentation covering team communication,
                    knowledge transfer, future reference, and project
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <svg
                className="w-8 h-8 mr-3 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Technical Stack
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Next.js 15</li>
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">
                  API & Services
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Google Translate API</li>
                  <li>• RESTful Architecture</li>
                  <li>• JSON Data Format</li>
                  <li>• Environment Variables</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-3">
                  Deployment
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Vercel Platform</li>
                  <li>• GitHub Integration</li>
                  <li>• Automatic Deployment</li>
                  <li>• Global CDN</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <svg
                className="w-8 h-8 mr-3 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                      Real-time Translation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Instant translation between English and Spanish
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                      Responsive Design
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Works seamlessly on all devices
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                      Language Swapping
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Quick swap between source and target languages
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                      Copy to Clipboard
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Easy copying of translated text
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                      Error Handling
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Comprehensive error messages and validation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                      Loading States
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Visual feedback during translation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                      Dark Mode Support
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Automatic theme detection
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">
                      Character Counter
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Real-time character count display
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* API Information */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <svg
                className="w-8 h-8 mr-3 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              Google Translate API
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  API Details
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      <strong>Provider:</strong> Google LLC (Alphabet Inc.)
                    </li>
                    <li>
                      <strong>Endpoint:</strong>{" "}
                      https://translation.googleapis.com/language/translate/v2
                    </li>
                    <li>
                      <strong>Method:</strong> POST
                    </li>
                    <li>
                      <strong>Authentication:</strong> API Key
                    </li>
                    <li>
                      <strong>Free Tier:</strong> 500,000 characters per month
                    </li>
                    <li>
                      <strong>Response Format:</strong> JSON
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Why Google Translate API?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                      Advantages
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• High translation accuracy</li>
                      <li>• Global accessibility (works from Nigeria)</li>
                      <li>• Reliable uptime (99.9%)</li>
                      <li>• Neural machine translation</li>
                      <li>• Generous free tier</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      Use Case
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Academic assignments</li>
                      <li>• Language learning</li>
                      <li>• Quick translations</li>
                      <li>• Cross-language communication</li>
                      <li>• Educational purposes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 text-center">
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
              Assignment 2: Project Documentation and Implementation
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © 2024 Sixtus Miracle Agbo • Nnamdi Azikiwe University
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
