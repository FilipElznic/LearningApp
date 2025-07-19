import { useAuth } from "../AuthContext";
import { useToast } from "../ToastContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Leaderboard from "../Components/Leaderboard";

function HomePage() {
  const { signOut, user } = useAuth();
  const { toast } = useToast();

  // Show welcome toast when user first visits the page
  useEffect(() => {
    if (user) {
      const hasShownWelcome = sessionStorage.getItem("welcome-shown");
      if (!hasShownWelcome) {
        setTimeout(() => {
          toast.info(
            `Welcome back, ${user.email}! Ready to explore the cosmos and learn?`
          );
          sessionStorage.setItem("welcome-shown", "true");
        }, 1000);
      }
    }
  }, [user, toast]);

  const handleLogout = async () => {
    try {
      await signOut();
      toast.logout();
      // Clear welcome toast flag on logout
      sessionStorage.removeItem("welcome-shown");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-black via-zinc-900 to-zinc-800 overflow-hidden relative">
        {/* Decorative Stars */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
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
          <div className="text-2xl font-bold tracking-wide">LearningApp</div>
          <div className="flex items-center gap-4">
            {user && (
              <>
                <Link
                  to="/profile"
                  className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-6 py-2.5 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center gap-2 border border-zinc-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-red-700 hover:to-red-900 text-white font-semibold px-6 py-2.5 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center gap-2 border border-zinc-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center w-full flex-1 text-center px-10 z-20 relative">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Message */}
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-wide">
                Welcome, {user?.email?.split("@")[0] || "Explorer"}!
              </h1>
            </div>

            <p className="text-zinc-200 text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              🌟 Ready to embark on your cosmic learning journey? Challenge
              yourself with multiple choice questions, pick the right answer
              from A, B, or C, and earn XP based on the difficulty level!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/tasks"
                className="bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold px-10 py-4 rounded-full shadow-lg transition text-xl border border-indigo-900 transform hover:scale-105"
              >
                🚀 Start Your Mission
              </Link>
              <Link
                to="/profile"
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition text-xl border border-zinc-700 transform hover:scale-105"
              >
                View Profile
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">
                  Answer Multiple Choice Questions
                </h3>
                <p className="text-zinc-300">
                  Choose the correct answer from A, B, or C options. Each
                  question has only one right answer, so think carefully before
                  selecting!
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">
                  Earn XP Based on Difficulty
                </h3>
                <p className="text-zinc-300">
                  Harder questions reward more XP! Easy questions give 5 XP,
                  medium questions give 10 XP, and hard questions give 15 XP.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">
                  Track Your Progress
                </h3>
                <p className="text-zinc-300">
                  Monitor your achievements, view your astronaut profile, and
                  see how far you&apos;ve traveled in your learning odyssey.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Star Icon Section */}
        <div className="flex items-center justify-center w-full py-8  rounded-bl-[50px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-yellow-400 drop-shadow-xl"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
          </svg>
        </div>
        {/* Main Call to Action Section */}
        <div className="flex flex-col items-center justify-center w-full py-20 shadow-lg">
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-10 max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
              Your Next Cosmic Task Awaits!
            </h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
              Answer multiple choice questions across different topics! Each
              question has three options (A, B, C), and the XP you earn depends
              on how challenging the question is.
            </p>

            <Link
              to="/tasks"
              className="inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold px-8 py-3 rounded-full shadow-lg transition text-lg border border-indigo-900"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Start Your Mission
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full py-16 px-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8">
              <h3 className="text-3xl font-extrabold text-white mb-8 text-center tracking-wide">
                Ready to Join the Cosmic Community?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-white font-semibold text-xl mb-2">
                    Questions
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Multiple choice questions with A, B, C options
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h4 className="text-white font-semibold text-xl mb-2">
                    XP Rewards
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Earn 5, 10, or 15 XP based on question difficulty
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="text-white font-semibold text-xl mb-2">
                    Progress
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Track your learning journey and achievements
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-white font-semibold text-xl mb-2">
                    Growth
                  </h4>
                  <p className="text-zinc-300 text-sm">
                    Level up your knowledge and skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="w-full py-16 px-10">
          <div className="max-w-4xl mx-auto">
            <Leaderboard />
          </div>
        </div>
        {/* Decorative bottom section */}
        <div className="w-full h-32 bg-gradient-to-t from-black via-zinc-900 to-transparent rounded-t-[50px] mt-10"></div>
        <style>
          {`
            @keyframes twinkle {
              0% { opacity: 0.1; }
              100% { opacity: 0.4; }
            }
          `}
        </style>
      </div>
    </>
  );
}

export default HomePage;
