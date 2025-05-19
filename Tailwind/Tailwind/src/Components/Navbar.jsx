import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Menu, X, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      closeMenu();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? "font-medium" : "";
  };

  return (
    <div>
      <nav className="bg-zinc-900 p-4 w-full h-16 flex justify-between items-center">
        {/* Left section - Logo */}
        <div className="w-1/3 h-full flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white flex items-center">
              <BookOpen className="h-6 w-6 mr-2 text-white" />
              <span>LearningApp</span>
            </span>
          </Link>
        </div>

        {/* Middle section - Navigation Links */}
        <div className="w-1/3 h-full flex justify-center items-center space-x-6">
          <Link
            to="/"
            className={`text-white text-sm hover:text-blue-400 transition ${isActive(
              "/"
            )}`}
          >
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-neutral-950 px-6 font-medium text-neutral-200 rounded-full">
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
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-neutral-950 px-6 font-medium text-neutral-200 rounded-full">
              <span>Profile</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </Link>
        </div>

        {/* Right section - Auth Buttons */}
        <div className="w-1/3 h-full flex justify-end items-center">
          {user ? (
            <button
              onClick={handleLogout}
              className="group border-2 relative inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50"
            >
              <span className="z-10 pr-2">Sign out</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-red-0 transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neutral-50"
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
            <div className="flex justify-end items-center space-x-4">
              <Link
                to="/login"
                className="text-white text-sm hover:text-blue-400 transition"
              >
                <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-neutral-950 px-6 font-medium text-neutral-200 rounded-full">
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
                <button className="group border-2 relative inline-flex h-14 items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
                  <span className="z-10 pr-2">Register</span>
                  <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-800 transition-[width] group-hover:w-[calc(100%-8px)]">
                    <div className="mr-3.5 flex items-center justify-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-neutral-50"
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

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 py-4 space-y-4 px-4">
          <Link
            to="/"
            className={`block py-2 text-white hover:text-blue-400 ${isActive(
              "/"
            )}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className={`block py-2 text-white hover:text-blue-400 ${isActive(
              "/profile"
            )}`}
            onClick={closeMenu}
          >
            Profile
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="w-full text-left py-2 text-white hover:text-blue-400"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block py-2 text-white hover:text-blue-400"
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block py-2 text-white hover:text-blue-400"
                onClick={closeMenu}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
