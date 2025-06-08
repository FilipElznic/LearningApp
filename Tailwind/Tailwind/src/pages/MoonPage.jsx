import { Link } from "react-router-dom";
import fullmoon from "../assets/fullmoon.jpg";

function MoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold hover:text-blue-400 transition-colors"
          >
            ← Back to Home
          </Link>
          <h2 className="text-2xl font-bold">Space Learning Platform</h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-blue-300 bg-clip-text text-transparent">
              Moon Exploration
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Earth's celestial companion has captivated humanity for millennia.
              Explore the history, science, and future of lunar exploration.
            </p>
            <div className="space-y-4 text-lg text-gray-400">
              <p>
                The Moon is Earth's only natural satellite, formed approximately
                4.5 billion years ago. Its gravitational influence affects our
                planet's tides and stabilizes Earth's axial tilt.
              </p>
              <p>
                From the Apollo missions to modern lunar rovers, our
                understanding of the Moon continues to grow, paving the way for
                future lunar settlements.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={fullmoon}
                alt="Full Moon"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full hover:scale-110 transition-transform duration-500 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Apollo Program
            </h3>
            <p className="text-gray-300">
              Between 1969 and 1972, six Apollo missions successfully landed 12
              astronauts on the Moon, marking humanity's first steps on another
              celestial body.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-400">
              Lunar Science
            </h3>
            <p className="text-gray-300">
              Moon rocks and samples have revealed crucial information about the
              early solar system, while lunar geology helps us understand
              planetary formation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Future Missions
            </h3>
            <p className="text-gray-300">
              The Artemis program aims to return humans to the Moon by 2026,
              establishing a sustainable lunar presence for future Mars
              missions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoonPage;
