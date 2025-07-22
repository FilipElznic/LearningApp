import { Link } from "react-router-dom";

function PrivacyPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-black via-zinc-900 to-zinc-800 overflow-hidden relative">
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/90 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.4 14.4,13.2 13.7,13.7C14.2,14.1 14.5,14.9 14.5,15.5V16.5C14.5,17.6 13.6,18.5 12.5,18.5H11.5C10.4,18.5 9.5,17.6 9.5,16.5V15.5C9.5,14.9 9.8,14.1 10.3,13.7C9.6,13.2 9.2,12.4 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.9 10.5,9.7V11.5C10.5,12.3 11.2,13 12,13C12.8,13 13.5,12.3 13.5,11.5V9.7C13.5,8.9 12.8,8.2 12,8.2Z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
                Privacy Policy
              </h1>
              <p className="text-xl text-zinc-300">
                Your privacy is important to us. Learn how we protect your data
                in our cosmic learning journey.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-zinc-300">
              {/* Data Collection */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
                  </svg>
                  What Information We Collect
                </h2>
                <div className="pl-9 space-y-3">
                  <p>
                    We collect minimal information to provide you with the best
                    learning experience:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Account Information:</strong> Your email address
                      for authentication and account management
                    </li>
                    <li>
                      <strong>Learning Progress:</strong> Your quiz scores, XP
                      earned, and completed tasks to track your progress
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Basic analytics to improve
                      our platform (no personal identification)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                  </svg>
                  How We Protect Your Data
                </h2>
                <div className="pl-9 space-y-3">
                  <p className="text-lg font-semibold text-green-200">
                    🛡️ Your data is NOT shared with anyone, ever.
                  </p>
                  <p>
                    We take your privacy seriously and implement multiple layers
                    of protection:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Secure Authentication:</strong> We use
                      Supabase&apos;s secure authentication system
                    </li>
                    <li>
                      <strong>Encrypted Storage:</strong> All data is encrypted
                      both in transit and at rest
                    </li>
                    <li>
                      <strong>No Third-Party Sharing:</strong> We never sell,
                      rent, or share your personal information
                    </li>
                    <li>
                      <strong>Minimal Data Collection:</strong> We only collect
                      what&apos;s necessary for the app to function
                    </li>
                  </ul>
                </div>
              </section>

              {/* Data Usage */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                  How We Use Your Information
                </h2>
                <div className="pl-9 space-y-3">
                  <p>
                    Your information is used exclusively to enhance your
                    learning experience:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Personalize your learning dashboard and track progress
                    </li>
                    <li>
                      Display your achievements and XP on leaderboards (username
                      only)
                    </li>
                    <li>
                      Send you learning-related notifications (if enabled)
                    </li>
                    <li>
                      Improve our platform based on usage patterns (anonymized
                      data)
                    </li>
                  </ul>
                </div>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Your Rights
                </h2>
                <div className="pl-9 space-y-3">
                  <p>You have complete control over your data:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Access:</strong> View all data we have about you
                      in your profile
                    </li>
                    <li>
                      <strong>Correction:</strong> Update your information at
                      any time
                    </li>
                    <li>
                      <strong>Deletion:</strong> Delete your account and all
                      associated data
                    </li>
                    <li>
                      <strong>Portability:</strong> Export your learning
                      progress data
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-600">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6H20Z" />
                  </svg>
                  Questions About Privacy?
                </h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy or how we
                  handle your data, please don&apos;t hesitate to reach out to
                  us.
                </p>
                <p className="text-cyan-200 font-semibold">
                  Remember: Your data stays with us and is never shared with
                  third parties. Your privacy is our priority.
                </p>
              </section>

              {/* Last Updated */}
              <div className="text-center text-zinc-400 text-sm pt-8 border-t border-zinc-700">
                Last updated: July 22, 2025
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

export default PrivacyPage;
