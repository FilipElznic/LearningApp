import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Menu, X, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      closeMenu();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? "font-medium" : "";
  };

  return (
    <div className="z-40">
      <nav className="bg-transparent p-2 sm:p-4 w-full h-14 sm:h-16 flex justify-between items-center">
        {/* Left section - Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <span className="text-lg sm:text-xl md:text-2xl font-bold flex items-center">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-1 sm:mr-2" />
              <span className="hidden xs:block sm:block">LearningApp</span>
              <span className="block xs:hidden sm:hidden">LA</span>
            </span>
          </Link>
        </div>

        {/* Middle section - Navigation Links (Desktop) */}
        <div className="hidden lg:flex justify-center items-center space-x-4 xl:space-x-6">
          <Link
            to="/"
            className={`text-white text-sm hover:text-blue-400 transition ${isActive(
              "/"
            )}`}
          >
            <button className="group relative inline-flex h-8 xl:h-10 items-center justify-center overflow-hidden bg-neutral-950 px-4 xl:px-6 font-medium text-neutral-200 rounded-full text-xs xl:text-sm">
              <span>Home</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </Link>
          <Link
            to="/profile"
            className={`text-white text-sm hover:text-blue-400 transition ${isActive(
              "/profile"
            )}`}
          >
            <button className="group relative inline-flex h-8 xl:h-10 items-center justify-center overflow-hidden bg-neutral-950 px-4 xl:px-6 font-medium text-neutral-200 rounded-full text-xs xl:text-sm">
              <span>Profile</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </Link>
        </div>

        {/* Right section - Auth Buttons & Mobile Menu */}
        <div className="flex justify-end items-center">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center">
            {user ? (
              <button
                onClick={handleLogout}
                className="group border-2 relative inline-flex h-10 lg:h-12 items-center justify-center rounded-full bg-neutral-950 py-1 pl-4 lg:pl-6 pr-12 lg:pr-14 font-medium text-neutral-50 text-xs lg:text-sm"
              >
                <span className="z-10 pr-2">Sign out</span>
                <div className="absolute right-1 inline-flex h-8 lg:h-10 w-10 lg:w-12 items-center justify-end rounded-full bg-red-900 transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-2.5 lg:mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 lg:h-5 lg:w-5 text-neutral-50"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            ) : (
              <div className="flex items-center space-x-2 lg:space-x-4">
                <Link
                  to="/login"
                  className="text-white text-sm hover:text-blue-400 transition"
                >
                  <button className="group relative inline-flex h-10 lg:h-12 items-center justify-center overflow-hidden bg-neutral-950 px-4 lg:px-6 font-medium text-neutral-200 rounded-full text-xs lg:text-sm">
                    <span>Login</span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                      <div className="relative h-full w-8 bg-white/20"></div>
                    </div>
                  </button>
                </Link>
                <Link
                  to="/signup"
                  className="text-white rounded-md text-sm font-medium flex items-center"
                >
                  <button className="group border-2 relative inline-flex h-10 lg:h-14 items-center justify-center rounded-full bg-neutral-950 py-1 pl-4 lg:pl-6 pr-12 lg:pr-14 font-medium text-neutral-50 text-xs lg:text-sm">
                    <span className="z-10 pr-2">Register</span>
                    <div className="absolute right-1 inline-flex h-8 lg:h-12 w-10 lg:w-12 items-center justify-end rounded-full bg-neutral-800 transition-[width] group-hover:w-[calc(100%-8px)]">
                      <div className="mr-2.5 lg:mr-3.5 flex items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 lg:h-5 lg:w-5 text-neutral-50"
                        >
                          <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-2 sm:ml-4">
            <button
              onClick={toggleMenu}
              className="text-white p-2 hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Slide-out Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 sm:w-80 bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button
            onClick={closeMenu}
            className="text-white p-2 hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-4 space-y-4">
          {/* Navigation Links */}
          <div className="space-y-3">
            <Link
              to="/"
              className={`block py-3 px-4 text-white hover:text-blue-400 hover:bg-neutral-800 rounded-lg transition-colors ${isActive(
                "/"
              )}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/profile"
              className={`block py-3 px-4 text-white hover:text-blue-400 hover:bg-neutral-800 rounded-lg transition-colors ${isActive(
                "/profile"
              )}`}
              onClick={closeMenu}
            >
              Profile
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700 my-4"></div>

          {/* Auth Section */}
          <div className="space-y-3">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-left py-3 px-4 text-white hover:text-red-400 hover:bg-neutral-800 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block py-3 px-4 text-white hover:text-blue-400 hover:bg-neutral-800 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block py-3 px-4 text-white hover:text-blue-400 hover:bg-neutral-800 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
