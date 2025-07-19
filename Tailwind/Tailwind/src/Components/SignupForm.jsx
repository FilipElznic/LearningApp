import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useToast } from "../ToastContext";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { supabase } from "../supabaseClient";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const { signUp } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const { data, error } = await signUp({ email, password });
      if (error) throw error;

      // If signup was successful and we have user data, insert into users table
      if (data?.user) {
        const { error: insertError } = await supabase.from("users").insert([
          {
            uuid: data.user.id,
            email: data.user.email,
            xp: 0,
            created_at: new Date().toISOString(),
          },
        ]);

        if (insertError) {
          console.error("Error inserting user data:", insertError);
          toast.error(
            "Account created but there was an issue setting up your profile."
          );
        } else {
          toast.success(
            "Account created successfully! Check your email for confirmation."
          );
        }
      }

      setMessage("Check your email for the confirmation link!");
    } catch (error) {
      setError(error.message);
      toast.error("Signup failed. Please try again.");
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
          className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white transition font-semibold shadow backdrop-blur"
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
          Home
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

      {/* Signup Card */}
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
            Sign Up
          </h1>
          <p className="mt-2 text-zinc-300">
            Create your cosmic account and join the universe of knowledge.
          </p>
        </div>

        {error && (
          <div className="p-4 mb-4 text-sm text-red-200 bg-red-900/40 rounded-lg border border-red-800">
            {error}
          </div>
        )}

        {message && (
          <div className="p-4 mb-4 text-sm text-green-200 bg-green-900/40 rounded-lg border border-green-800">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 mt-1 bg-zinc-900 border border-zinc-700 rounded-md shadow-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition"
              placeholder="you@email.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 bg-zinc-900 border border-zinc-700 rounded-md shadow-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 transition"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-full shadow-lg hover:from-indigo-600 hover:to-indigo-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {loading ? "Loading..." : "Sign Up & Launch"}
            </button>
          </div>
        </form>
        <div className="mt-8 text-center text-zinc-400 text-xs">
          By signing up, you join a community of cosmic learners. <br />
          <span className="text-white">Ready for lift-off?</span>
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
