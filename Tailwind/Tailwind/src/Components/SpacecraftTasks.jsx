import React from "react";

function SpacecraftTasks() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="z-10 w-full max-w-xl px-8 py-10 bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          🚀 Spacecraft Tasks
        </h1>
        <ul className="space-y-4">
          <li className="flex items-center justify-between px-5 py-4 bg-gray-800 rounded-xl border border-gray-700">
            <span className="text-white">Inspect life support systems</span>
            <button className="px-3 py-1 rounded bg-gray-700 text-gray-200 text-xs font-semibold hover:bg-gray-600 transition">
              Complete
            </button>
          </li>
          <li className="flex items-center justify-between px-5 py-4 bg-gray-800 rounded-xl border border-gray-700">
            <span className="text-white">Test propulsion engines</span>
            <button className="px-3 py-1 rounded bg-gray-700 text-gray-200 text-xs font-semibold hover:bg-gray-600 transition">
              Complete
            </button>
          </li>
          <li className="flex items-center justify-between px-5 py-4 bg-gray-800 rounded-xl border border-gray-700">
            <span className="text-white">Update navigation software</span>
            <button className="px-3 py-1 rounded bg-gray-700 text-gray-200 text-xs font-semibold hover:bg-gray-600 transition">
              Complete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpacecraftTasks;
