import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

export default function Profile() {
  const { user, signOut, authError } = useAuth();
  const [loading, setLoading] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState("");

  const handleSignOut = async () => {
    setLoading(true);
    setLogoutMessage("");

    try {
      const { error } = await signOut();

      if (error) {
        throw error;
      }

      setLogoutMessage("Logging out...");
    } catch (error) {
      console.error("Error signing out:", error.message);
      setLogoutMessage("Error signing out. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800 overflow-hidden">
      {/* Back Home Button - Top Left */}
      <div className="absolute top-6 left-6 z-30">
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
      </div>

      {/* Decorative Stars */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
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

      {/* Spline or planet illustration */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-1/2 z-10">
        <div className="flex items-center justify-center h-full">
          <Spline
            scene="https://prod.spline.design/azadXvKhi40FDGgp/scene.splinecode"
            className="w-full h-full object-contain opacity-70"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="relative z-20 w-full max-w-md p-10 bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mb-4">
            <svg
              className="w-10 h-10 text-white opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="white"
                className="opacity-30"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Your Space Profile
          </h1>
          <p className="mt-2 text-zinc-300">Welcome to your cosmic dashboard</p>
        </div>

        {authError && (
          <div className="p-4 mb-4 text-sm text-red-200 bg-red-900/40 rounded-lg border border-red-800">
            {authError}
          </div>
        )}

        {logoutMessage && (
          <div className="p-4 mb-4 text-sm text-blue-200 bg-blue-900/40 rounded-lg border border-blue-800">
            {logoutMessage}
          </div>
        )}

        <div className="space-y-6">
          <div className="p-4 bg-zinc-800/60 rounded-lg border border-zinc-700 shadow-inner">
            <h2 className="mb-3 text-lg font-semibold text-white flex items-center gap-2">
              <svg
                className="w-5 h-5 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="currentColor"
                  className="opacity-30"
                />
              </svg>
              Astronaut Info
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">Email</span>
                <span className="text-white">{user?.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-400">
                  User ID
                </span>
                <span className="text-xs text-zinc-300 break-all">
                  {user?.id}
                </span>
              </div>
              {user?.user_metadata &&
                Object.keys(user.user_metadata).length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs font-medium text-zinc-400">
                      Additional Info
                    </span>
                    <pre className="mt-1 text-xs overflow-auto p-2 bg-zinc-900/70 rounded text-zinc-200">
                      {JSON.stringify(user.user_metadata, null, 2)}
                    </pre>
                  </div>
                )}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              onClick={handleSignOut}
              disabled={loading}
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-700 to-red-900 rounded-full shadow-lg hover:from-red-600 hover:to-red-800 transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              {loading ? "Logging out..." : "Sign Out"}
            </button>
          </div>
        </div>
      </div>

      {/* Twinkle animation keyframes */}
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
