import { Link } from "react-router-dom";
import planet from "../assets/planetearth.jpg";

function EarthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-800 to-blue-700 text-white">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
              Planet Earth
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Our home planet, a pale blue dot in the vast cosmos, harbors all
              known life in the universe and serves as our gateway to
              understanding space exploration.
            </p>
            <div className="space-y-4 text-lg text-blue-200">
              <p>
                Earth is the third planet from the Sun and the only known planet
                to harbor life. Its unique atmosphere, liquid water, and
                magnetic field make it a perfect sanctuary for diverse
                ecosystems.
              </p>
              <p>
                From Earth's perspective, we study the cosmos and launch
                missions to explore other worlds, making our planet the
                launchpad for all human space exploration.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={planet}
                alt="Planet Earth"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full hover:scale-110 transition-transform duration-500 shadow-2xl border-4 border-blue-300/30"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">
              Atmosphere
            </h3>
            <p className="text-blue-100">
              Earth's atmosphere protects us from harmful radiation and meteors
              while providing the air we breathe and creating weather patterns
              that sustain life.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-green-300">
              Biosphere
            </h3>
            <p className="text-blue-100">
              Earth's biosphere contains millions of species in diverse
              ecosystems, from deep ocean trenches to high mountain peaks,
              showcasing life's adaptability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">
              Space Observation
            </h3>
            <p className="text-blue-100">
              From Earth's surface and orbit, we observe the universe through
              telescopes and satellites, expanding our knowledge of distant
              galaxies and exoplanets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarthPage;
