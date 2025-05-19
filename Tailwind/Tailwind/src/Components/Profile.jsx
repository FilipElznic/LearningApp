import React, { useState } from "react";
import { useAuth } from "../AuthContext";

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

      // The routing will be handled by the ProtectedRoute component
      // when the auth state changes, but we'll show a message briefly
      setLogoutMessage("Logging out...");
    } catch (error) {
      console.error("Error signing out:", error.message);
      setLogoutMessage("Error signing out. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="mt-2 text-gray-600">Welcome to your dashboard</p>
        </div>

        {authError && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {authError}
          </div>
        )}

        {logoutMessage && (
          <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg">
            {logoutMessage}
          </div>
        )}

        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="mb-3 text-lg font-medium">Your Information</h2>

            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">Email</span>
                <span className="text-gray-900">{user?.email}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">
                  User ID
                </span>
                <span className="text-sm text-gray-600 break-all">
                  {user?.id}
                </span>
              </div>

              {user?.user_metadata &&
                Object.keys(user.user_metadata).length > 0 && (
                  <div className="pt-2">
                    <span className="text-sm font-medium text-gray-500">
                      Additional Info
                    </span>
                    <pre className="mt-1 text-xs overflow-auto p-2 bg-gray-100 rounded">
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
              className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              {loading ? "Logging out..." : "Sign Out"}
            </button>

            {/* You can add more profile actions here */}
          </div>
        </div>
      </div>
    </div>
  );
}
