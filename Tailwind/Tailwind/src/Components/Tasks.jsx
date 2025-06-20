import React from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-zinc-900 to-gray-900 relative overflow-hidden">
      {/* Space stars background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full">
          {/* Simulated stars */}
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-70"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(0.5px)",
              }}
            />
          ))}
        </div>
      </div>
      <div className="z-10 w-full max-w-xl px-8 py-10 bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-md">
        <h1 className="text-3xl font-extrabold text-white tracking-wide mb-6 text-center drop-shadow-lg">
          🚀 Space Tasks
        </h1>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => navigate("/moon-tasks")}
            className="w-full py-2 rounded bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition"
          >
            🌙 Moon Tasks
          </button>
          <button
            onClick={() => navigate("/earth-tasks")}
            className="w-full py-2 rounded bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition"
          >
            🌍 Earth Tasks
          </button>
          <button
            onClick={() => navigate("/spacecraft-tasks")}
            className="w-full py-2 rounded bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition"
          >
            🚀 Spacecraft Tasks
          </button>
        </div>
        <div className="mt-8 text-center text-gray-400 text-xs tracking-widest">
          <span>Mission Control • 2087</span>
        </div>
      </div>
    </div>
  );
}

export default Tasks;