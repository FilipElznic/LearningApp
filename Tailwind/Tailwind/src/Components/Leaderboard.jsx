import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Leaderboard() {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopUsers();
  }, []);

  const fetchTopUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("users")
        .select("email, xp")
        .order("xp", { ascending: false, nullsLast: true })
        .limit(10);

      if (error) throw error;

      // Filter out users with null emails and set default XP
      const filteredUsers = (data || []).map((user) => ({
        ...user,
        xp: user.xp || 0,
      }));

      setTopUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setError("Failed to load leaderboard");
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return "🏅";
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 to-yellow-600";
      case 2:
        return "from-gray-300 to-gray-500";
      case 3:
        return "from-orange-400 to-orange-600";
      default:
        return "from-zinc-600 to-zinc-800";
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400"></div>
          <span className="ml-2 text-zinc-400">Loading leaderboard...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8">
        <div className="text-center">
          <span className="text-red-400">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8">
      <div className="flex items-center justify-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mr-4">
          <span className="text-2xl">🏆</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-wide">
          Cosmic Leaderboard
        </h2>
      </div>

      <p className="text-zinc-300 text-center mb-8">
        Top explorers in the universe ranked by XP
      </p>

      <div className="space-y-4">
        {topUsers.length === 0 ? (
          <div className="text-center text-zinc-400 py-8">
            <span className="text-4xl mb-4 block">🌌</span>
            <p>No cosmic explorers found yet. Be the first to earn XP!</p>
          </div>
        ) : (
          topUsers.map((user, index) => {
            const rank = index + 1;
            const username = user.email?.split("@")[0] || "Explorer";
            const xp = user.xp || 0;

            return (
              <div
                key={user.email}
                className={`flex items-center justify-between p-4 rounded-2xl border border-zinc-700 bg-gradient-to-r ${getRankColor(
                  rank
                )} bg-opacity-10 backdrop-blur-sm`}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-full flex items-center justify-center shadow-lg mr-4">
                    <span className="text-xl">{getRankIcon(rank)}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {username}
                    </h3>
                    <p className="text-zinc-400 text-sm">Rank #{rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{xp}</div>
                  <div className="text-zinc-400 text-sm">XP</div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="mt-8 text-center">
        <p className="text-zinc-400 text-sm">
          Complete tasks to climb the leaderboard! 🚀
        </p>
      </div>
    </div>
  );
}
