import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-transparent px-4 py-6 w-full mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Learning App
            </h3>
            <p className="text-white max-w-xs">
              This project is created via project shipwreacked by Filip Elznic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-600 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-white hover:text-blue-600 transition duration-200"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-white hover:text-blue-600 transition duration-200"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-white hover:text-blue-600 transition duration-200"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/FilipElznic"
                aria-label="GitHub"
                className="text-white hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/filip-elznic/"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="elznicfilip@gmail.com"
                aria-label="Email"
                className="text-white hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-white text-sm">
          © {currentYear} Learning App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
