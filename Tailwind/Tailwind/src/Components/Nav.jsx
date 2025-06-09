import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Nav() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      navigate("/");
    }
  };

  return (
    <nav className="w-full h-full flex items-start justify-between px-6 mt-4">
      {/* Logo/Brand */}
      <div className="text-black text-2xl font-bold">LearningApp</div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-start space-x-8">
        <a
          href="/courses"
          className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
        >
          Courses
        </a>
        <a
          href="/tutorials"
          className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
        >
          Tutorials
        </a>
        <a
          href="/community"
          className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
        >
          Community
        </a>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        {user && (
          <span className="text-black text-sm">Welcome, {user.email}</span>
        )}
        <button
          onClick={handleSignOut}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
        >
          Odhlásit se
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
