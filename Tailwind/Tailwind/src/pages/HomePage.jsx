import { useAuth } from "../AuthContext";
import { useToast } from "../ToastContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Leaderboard from "../Components/Leaderboard";
import { supabase } from "../supabaseClient";
import planetEarthImg from "../assets/planetearth.jpg";
import Carousel from "../Components/carousel";
import Shipwrecked from "../Components/Shipwrecked";

// XP Progress Graph Component
function XPProgressGraph({ userXP }) {
  const [animatedXP, setAnimatedXP] = useState(0);

  // XP level thresholds
  const levels = [
    { level: 1, xp: 0, title: "Space Cadet" },
    { level: 2, xp: 20, title: "Astronaut Trainee" },
    { level: 3, xp: 30, title: "Space Explorer" },
    { level: 4, xp: 50, title: "Cosmic Navigator" },
    { level: 5, xp: 75, title: "Star Captain" },
    { level: 6, xp: 100, title: "Galaxy Master" },
    { level: 7, xp: 200, title: "Universe Legend" },
  ];

  // Calculate current level and progress
  const getCurrentLevel = (xp) => {
    for (let i = levels.length - 1; i >= 0; i--) {
      if (xp >= levels[i].xp) {
        return levels[i];
      }
    }
    return levels[0];
  };

  const getNextLevel = (currentLevel) => {
    const nextLevelIndex =
      levels.findIndex((l) => l.level === currentLevel.level) + 1;
    return nextLevelIndex < levels.length ? levels[nextLevelIndex] : null;
  };

  const currentLevel = getCurrentLevel(userXP);
  const nextLevel = getNextLevel(currentLevel);
  const progressToNext = nextLevel
    ? ((userXP - currentLevel.xp) / (nextLevel.xp - currentLevel.xp)) * 100
    : 100;

  // Animate XP counter
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = userXP / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setAnimatedXP(Math.min(increment * step, userXP));

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedXP(userXP);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [userXP]);

  return (
    <div className="w-full space-y-8">
      {/* Current Level & XP Display */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-900/40 to-violet-900/40 rounded-2xl px-8 py-4 border border-purple-500/30">
          <div className="text-4xl">🚀</div>
          <div>
            <h4 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text">
              {currentLevel.title}
            </h4>
            <p className="text-purple-200">Level {currentLevel.level}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">
              {Math.floor(animatedXP).toLocaleString()}
            </div>
            <p className="text-purple-300 text-sm">Total XP</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {nextLevel && (
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-purple-300">
            <span>Level {currentLevel.level}</span>
            <span>
              {userXP}/{nextLevel.xp} XP
            </span>
            <span>Level {nextLevel.level}</span>
          </div>

          <div className="relative h-6 bg-zinc-800/50 rounded-full overflow-hidden border border-purple-500/20">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-violet-900/20"></div>

            {/* Progress fill with animation */}
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-violet-500 to-purple-400 rounded-full transition-all duration-2000 ease-out relative overflow-hidden"
              style={{ width: `${Math.min(progressToNext, 100)}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>

            {/* Progress text overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white drop-shadow-lg">
              {Math.round(progressToNext)}%
            </div>
          </div>

          <div className="text-center text-sm text-purple-300">
            {nextLevel.xp - userXP} XP until{" "}
            <span className="text-purple-200 font-semibold">
              {nextLevel.title}
            </span>
          </div>
        </div>
      )}

      {/* XP Breakdown Chart */}

      {/* Level Milestones */}
      <div className="space-y-3">
        <h5 className="text-lg font-semibold text-purple-200 text-center">
          Journey Milestones
        </h5>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          {levels.map((level) => (
            <div
              key={level.level}
              className={`p-2 rounded-lg border text-center transition-all ${
                userXP >= level.xp
                  ? "bg-gradient-to-br from-purple-600/40 to-violet-600/40 border-purple-400/50 text-purple-100"
                  : "bg-zinc-800/30 border-zinc-600/30 text-zinc-400"
              }`}
            >
              <div className="font-semibold">Lv.{level.level}</div>
              <div className="text-xs opacity-80">{level.xp} XP</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const [userXP, setUserXP] = useState(0);

  // Fetch user XP from database
  useEffect(() => {
    const fetchUserXP = async () => {
      if (user?.email) {
        try {
          const { data, error } = await supabase
            .from("users")
            .select("xp")
            .eq("email", user.email)
            .single();

          if (error) {
            console.error("Error fetching user XP:", error);
            return;
          }

          setUserXP(data?.xp || 0);
        } catch (error) {
          console.error("Error fetching user XP:", error);
        }
      }
    };

    fetchUserXP();
  }, [user?.email]);

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
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold tracking-wide">LearningApp</div>
          </div>
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
              from A, B, or C, and earn XP based on the difficulty level. (XP
              and levels are for fun and learning, not real astronaut ranks!)
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/tasks"
                className="bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold px-10 py-4 rounded-full shadow-lg transition text-xl border border-indigo-900 transform hover:scale-105"
              >
                🚀 Start Your Mission
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">
                  Multiple Choice Mastery
                </h3>
                <p className="text-zinc-300">
                  Navigate through carefully crafted questions with A, B, or C
                  options. Each challenge tests your knowledge and pushes your
                  cosmic understanding further!
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">
                  XP Constellation System
                </h3>
                <p className="text-zinc-300">
                  Collect experience points based on quiz difficulty. Easy
                  questions grant 5 XP, medium questions reward 10 XP, and
                  expert questions offer 15 XP!
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">
                  Cosmic Progress Tracking
                </h3>
                <p className="text-zinc-300">
                  Chart your journey through the learning galaxy. Monitor
                  achievements, unlock new learning milestones, and see your
                  progress as you become a space knowledge expert!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Star Icon Section */}
        <div className="flex items-center justify-center w-full py-8  rounded-bl-[50px]">
          <img
            src={planetEarthImg}
            alt="earth image"
            className="z-50 w-[40vw] h-[80vh] absolute left-[-350px] rotate-90 "
          />
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
        <Carousel />

        <div className="w-full py-16 px-10 ">
          <div className="flex  flex-col items-center">
            <h3 className="text-5xl font-extrabold text-white mb-8 text-center tracking-wide">
              Level up the progression of your space journey!
            </h3>

            <p className="text-center text-lg text-zinc-600 w-1/4">
              Join us as we explore the cosmos of knowledge and unlock new
              levels of learning!
            </p>
          </div>
          <div className="max-w-6xl mt-24 mx-auto">
            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8">
              {/* XP Progress Graph */}
              <XPProgressGraph userXP={userXP} />
            </div>
          </div>
        </div>
        <div className="w-full h-[20vh] hidden md:block"></div>
        <Shipwrecked />
        <div className="w-full h-[20vh] hidden md:block"></div>
        {/* Leaderboard Section */}
        <div className="w-full py-16 px-10">
          <div className="max-w-7xl mx-auto">
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
            
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            
            @keyframes slide-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            
            .animate-slide {
              animation: slide 20s linear infinite;
            }
            
            .animate-slide-reverse {
              animation: slide-reverse 20s linear infinite;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default HomePage;
