import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useToast } from "../ToastContext";
import { Menu, X, BookOpen } from "lucide-react";
import img from "../assets/fullmoon.jpg"; // Adjust the path as necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { toast } = useToast();
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
      toast.logout();
      closeMenu();
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? "font-medium" : "";
  };

  return (
    <nav className=" p-2 sm:p-4 w-full  h-14 sm:h-16 flex justify-between items-center ">
      <div className="flex items-center ">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <img
            src={img}
            alt="Logo"
            className="h-20 w-20 rounded-full object-contain"
          />
        </Link>
      </div>
      <div className="hidden md:flex justify-center items-center flex-1 max-w-md mx-4 absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-3 text-white">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-lg font-medium tracking-wide">
            Explore • Learn • Discover
          </span>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
 <div className="z-40">
     

       

    
        <div className="flex justify-end items-center">
      
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

  
      <div className="md:hidden px-4 pb-2">
        <div className="flex items-center w-full h-10 bg-gray-300 rounded-full px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent outline-none text-sm w-full text-black placeholder:text-black"
          />
        </div>
      </div>


      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

     
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 sm:w-80 bg-zinc-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
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

   
        <div className="p-4 space-y-4">
        
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

   
          <div className="border-t border-zinc-700 my-4"></div>

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
  */
