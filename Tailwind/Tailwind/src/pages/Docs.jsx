import { Link } from "react-router-dom";
import SEOHead from "../Components/SEOHead";
import Database from "../assets/database.webp";

function Docs() {
  const seoData = {
    title: "Documentation | SpaceLearning API & Features Guide",
    description:
      "Complete documentation for SpaceLearning platform features, API endpoints, XP system, and leaderboard functionality. Learn how to integrate and use our space education tools.",
    keywords:
      "SpaceLearning documentation, API documentation, space education API, XP system guide, leaderboard API, educational platform docs, space learning integration",
    canonical: "https://yourdomain.com/docs",
    ogImage: "https://yourdomain.com/docs-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: "SpaceLearning Documentation",
      description:
        "Complete technical documentation for the SpaceLearning educational platform",
      about: [
        {
          "@type": "Thing",
          name: "API Documentation",
        },
        {
          "@type": "Thing",
          name: "Educational Platform",
        },
        {
          "@type": "Thing",
          name: "Space Learning Tools",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-black via-zinc-900 to-zinc-800 overflow-hidden relative">
      <SEOHead {...seoData} />
      {/* Decorative Stars */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(0.5px)",
              animation: `twinkle 2s infinite ${Math.random()}s alternate`,
            }}
          />
        ))}
      </div>

      {/* Header/Nav */}
      <nav className="w-full flex items-center justify-between px-10 py-6 bg-transparent text-white z-20 relative">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-indigo-400 transition-colors"
        >
          LearningApp
        </Link>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all duration-300 font-semibold shadow backdrop-blur"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 px-10 py-12 z-20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-wide">
              Project Documentation
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Complete setup guide for the Cosmic Learning App. Follow these
              steps to get your space academy up and running!
            </p>
          </div>

          {/* Prerequisites */}
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/90 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <svg
                className="w-8 h-8 mr-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,14H13V16H11V14M11,8H13V12H11V8Z" />
              </svg>
              Prerequisites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Node.js
                </h3>
                <p className="text-zinc-400 text-sm">
                  Version 18+ required for running the development server
                </p>
              </div>
              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Git</h3>
                <p className="text-zinc-400 text-sm">
                  For cloning the repository and version control
                </p>
              </div>
              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Code Editor
                </h3>
                <p className="text-zinc-400 text-sm">
                  VS Code recommended with React extensions
                </p>
              </div>
            </div>
          </div>

          {/* Step 1: Supabase Setup */}
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/90 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg font-bold">
                1
              </span>
              Supabase Database Setup
            </h2>
            <div className="space-y-6">
              <div className="bg-indigo-900/30 border border-indigo-700/50 rounded-2xl p-6">
                <h3 className="text-indigo-200 font-semibold text-xl mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                  Why Supabase?
                </h3>
                <p className="text-indigo-100 mb-4">
                  This project requires a Supabase database to handle user
                  authentication, store learning progress, track XP points, and
                  manage task completion. Supabase provides a powerful
                  PostgreSQL database with real-time capabilities and built-in
                  authentication.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-xl">
                  Setup Steps:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      1
                    </div>
                    <div>
                      <p className="text-zinc-300">
                        Go to{" "}
                        <a
                          href="https://supabase.com"
                          className="text-indigo-400 hover:text-indigo-300 underline"
                        >
                          supabase.com
                        </a>{" "}
                        and create a free account
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      2
                    </div>
                    <div>
                      <p className="text-zinc-300">
                        Create a new project and choose a region close to your
                        users
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      3
                    </div>
                    <div>
                      <p className="text-zinc-300">
                        Copy your project URL and anon key from Settings → API
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      4
                    </div>
                    <div>
                      <p className="text-zinc-300">
                        Insert the database schema
                      </p>
                      <img
                        src={Database}
                        alt="Database Schema"
                        className="mt-2 rounded-lg shadow-lg w-2/3 h-2/3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-2xl p-4">
                <p className="text-yellow-200 text-sm">
                  📝 <strong>Note:</strong> You&apos;ll need to turn off RLS
                  policies which is not recommended for production. Create your
                  own policies for select, insert, update..
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Clone & Install */}
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/90 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg font-bold">
                2
              </span>
              Clone Repository & Install Dependencies
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  Clone the Repository
                </h3>
                <div className="bg-black/50 rounded-xl p-4 border border-zinc-600">
                  <code className="text-green-400 font-mono text-sm">
                    git clone https://github.com/FilipElznic/LearningApp.git
                    <br />
                    cd LearningApp
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  Install Required Libraries
                </h3>
                <p className="text-zinc-300 mb-4">
                  Install all necessary dependencies for the cosmic learning
                  experience:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-indigo-300 font-medium mb-2">
                      Core Dependencies:
                    </h4>
                    <div className="bg-black/50 rounded-xl p-4 border border-zinc-600">
                      <code className="text-green-400 font-mono text-sm">
                        npm install react react-dom react-router-dom
                        <br />
                        npm install @supabase/supabase-js
                        <br />
                        npm install lucide-react
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-indigo-300 font-medium mb-2">
                      Styling & UI:
                    </h4>
                    <div className="bg-black/50 rounded-xl p-4 border border-zinc-600">
                      <code className="text-green-400 font-mono text-sm">
                        npm install tailwindcss postcss autoprefixer
                        <br />
                        npm install @splinetool/react-spline
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-indigo-300 font-medium mb-2">
                      Development Tools:
                    </h4>
                    <div className="bg-black/50 rounded-xl p-4 border border-zinc-600">
                      <code className="text-green-400 font-mono text-sm">
                        npm install -D vite @vitejs/plugin-react
                        <br />
                        npm install -D eslint eslint-plugin-react
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-indigo-300 font-medium mb-2">
                      Or install everything at once:
                    </h4>
                    <div className="bg-black/50 rounded-xl p-4 border border-zinc-600">
                      <code className="text-green-400 font-mono text-sm">
                        npm install
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Environment Setup */}
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/90 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg font-bold">
                3
              </span>
              Environment Configuration
            </h2>

            <div className="space-y-4">
              <p className="text-zinc-300">
                Create a{" "}
                <code className="bg-zinc-800 px-2 py-1 rounded text-indigo-300">
                  .env
                </code>{" "}
                file in the root directory:
              </p>

              <div className="bg-black/50 rounded-xl p-4 border border-zinc-600">
                <code className="text-green-400 font-mono text-sm">
                  VITE_SUPABASE_URL=your_supabase_project_url
                  <br />
                  VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
                </code>
              </div>

              <div className="bg-red-900/30 border border-red-700/50 rounded-2xl p-4">
                <p className="text-red-200 text-sm">
                  🔒 <strong>Security:</strong> Never commit your .env file to
                  version control. Add it to .gitignore!
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Launch */}
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/90 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-lg font-bold">
                4
              </span>
              Launch Your Cosmic Academy
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  Start Development Server
                </h3>
                <div className="bg-black/50 rounded-xl p-4 border border-zinc-600">
                  <code className="text-green-400 font-mono text-sm">
                    npm run dev
                  </code>
                </div>
                <p className="text-zinc-400 text-sm mt-2">
                  This will start the development server at
                  http://localhost:5173
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  Build for Production
                </h3>
                <div className="bg-black/50 rounded-xl p-4 border border-zinc-600">
                  <code className="text-green-400 font-mono text-sm">
                    npm run build
                  </code>
                </div>
                <p className="text-zinc-400 text-sm mt-2">
                  Creates an optimized production build in the dist folder
                </p>
              </div>
            </div>
          </div>

          {/* Features Overview */}
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/90 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <svg
                className="w-8 h-8 mr-4 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              </svg>
              What You&apos;ll Get
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  User Authentication
                </h3>
                <p className="text-zinc-400 text-sm">
                  Secure login/signup with Supabase Auth
                </p>
              </div>

              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  XP System
                </h3>
                <p className="text-zinc-400 text-sm">
                  Earn points based on difficulty levels
                </p>
              </div>

              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Progress Tracking
                </h3>
                <p className="text-zinc-400 text-sm">
                  Monitor learning journey and achievements
                </p>
              </div>

              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19C9.29,21.78 8.28,21.85 7.59,21.16L2.84,16.41C2.15,15.72 2.22,14.71 2.81,14.12M7.44,7.44C8.2,6.68 9.41,6.68 10.17,7.44C10.93,8.2 10.93,9.41 10.17,10.17C9.41,10.93 8.2,10.93 7.44,10.17C6.68,9.41 6.68,8.2 7.44,7.44Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Interactive UI
                </h3>
                <p className="text-zinc-400 text-sm">
                  Engaging space-themed interface
                </p>
              </div>

              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Multiple Realms
                </h3>
                <p className="text-zinc-400 text-sm">
                  Earth, Moon, and Deep Space challenges
                </p>
              </div>

              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5,9L2,6V18H4V10.5L5,9M9,5A1,1 0 0,1 10,6V8L12,10L14,8V6A1,1 0 0,1 15,5A1,1 0 0,1 16,6V8A1,1 0 0,1 15,9L12,12L9,9A1,1 0 0,1 8,8V6A1,1 0 0,1 9,5M18.5,2A1.5,1.5 0 0,1 20,3.5V4.5A1.5,1.5 0 0,1 18.5,6A1.5,1.5 0 0,1 17,4.5V3.5A1.5,1.5 0 0,1 18.5,2M16,8A1,1 0 0,1 17,9V16H20V18H13V16H15V9A1,1 0 0,1 16,8Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Leaderboards
                </h3>
                <p className="text-zinc-400 text-sm">
                  Compete with fellow space explorers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.1; }
            100% { opacity: 0.4; }
          }
        `}
      </style>
    </div>
  );
}

export default Docs;
