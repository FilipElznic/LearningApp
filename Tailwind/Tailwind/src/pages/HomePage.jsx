import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

function HomePage() {
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    await signOut();
    // Optionally, redirect or show a message
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
        {/* Spline 3D Model - larger and more prominent */}
        <div className="hidden md:block absolute right-0 top-0 h-[80vh] w-[55vw] z-10 pointer-events-none">
          <Spline
            scene="https://prod.spline.design/azadXvKhi40FDGgp/scene.splinecode"
            className="w-full h-full object-contain opacity-80"
          />
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
        {/* Main Content - Flex, not grid */}
        <div className="flex flex-col md:flex-row w-full flex-1 z-10 relative">
          {/* Left Welcome Section */}
          <div className="flex-1 flex flex-col justify-center pl-10 pt-10 z-20">
            <h1 className="text-white text-7xl md:text-8xl font-extrabold mt-10 drop-shadow-lg">
              Welcome, Explorer
            </h1>
            <p className="mt-10 text-zinc-200 text-xl max-w-lg">
              Step into your cosmic command center. Here you can track your
              progress, view your astronaut profile, and launch into new
              learning missions. The universe of knowledge awaits—are you ready
              to discover new worlds?
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                to="/tasks"
                className="bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold px-8 py-3 rounded-full shadow-lg transition text-lg border border-indigo-900"
              >
                🚀 Start Your Mission
              </Link>
              <Link
                to="/profile"
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition text-lg border border-zinc-700"
              >
                View Profile
              </Link>
            </div>
          </div>
          {/* Right Spline/Visual Section */}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mb-4 text-indigo-400 drop-shadow-lg"
            fill="none"
            viewBox="0 0 64 64"
          >
            <circle cx="32" cy="32" r="28" fill="#18181b" />
            <circle cx="32" cy="32" r="18" fill="#6366f1" />
            <circle cx="44" cy="24" r="4" fill="#f1f5f9" />
            <circle cx="24" cy="44" r="2" fill="#f1f5f9" />
            <circle cx="40" cy="40" r="1.5" fill="#f1f5f9" />
          </svg>
          <h2 className="text-4xl font-extrabold text-white mb-2 text-center drop-shadow-lg">
            Your Next Cosmic Task Awaits!
          </h2>
          <p className="text-lg text-zinc-300 mb-6 text-center max-w-md">
            Dive into interactive challenges, earn stars, and unlock new
            galaxies of wisdom. Every completed task brings you closer to
            becoming a true space pioneer.
          </p>
          <Link
            to="/tasks"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow-lg transition text-lg"
          >
            Start Your Mission
          </Link>
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
