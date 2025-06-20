import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../AuthContext";

const moonTasksList = [
  { id: 1, label: "Collect lunar soil samples", xp: 10 },
  { id: 2, label: "Repair moon rover", xp: 15 },
  { id: 3, label: "Set up lunar base antenna", xp: 20 },
];

function MoonTasks() {
  const { user } = useAuth();
  const [completed, setCompleted] = useState([]);
  const [message, setMessage] = useState("");

  const handleComplete = async (task) => {
    if (!user) return;

    // Mark as completed locally
    setCompleted((prev) => [...prev, task.id]);
    setMessage(`+${task.xp} XP awarded!`);

    // Update XP in Supabase (example: add XP to the first user in your table)
    // You should adjust this logic to match your real user identification
    const { data, error } = await supabase
      .from("users")
      .update({ xp: task.xp }) // This will overwrite xp, for increment use .increment if available or fetch/add/set
      .eq("id", 1); // Replace with your user's id

    if (error) {
      setMessage("Error awarding XP.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="z-10 w-full max-w-xl px-8 py-10 bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">🌙 Moon Tasks</h1>
        {message && (
          <div className="mb-4 text-center text-green-400 font-semibold">{message}</div>
        )}
        <ul className="space-y-4">
          {moonTasksList.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between px-5 py-4 bg-gray-800 rounded-xl border border-gray-700 ${
                completed.includes(task.id) ? "opacity-50" : ""
              }`}
            >
              <span className="text-white">{task.label}</span>
              <button
                className="px-3 py-1 rounded bg-gray-700 text-gray-200 text-xs font-semibold hover:bg-gray-600 transition disabled:opacity-50"
                disabled={completed.includes(task.id)}
                onClick={() => handleComplete(task)}
              >
                {completed.includes(task.id) ? "Completed" : `Complete (+${task.xp} XP)`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MoonTasks;