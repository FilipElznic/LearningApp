import { Link } from "react-router-dom";
import spaceship from "../assets/rocketship.jpg";

function SpacecraftPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 text-white">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
              Spacecraft
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
              The magnificent machines that carry humanity beyond Earth's
              atmosphere, from rockets and shuttles to space stations and
              interplanetary probes.
            </p>
            <div className="space-y-4 text-lg text-orange-200">
              <p>
                Spacecraft are vehicles designed to operate in the vacuum of
                space, equipped with life support systems, navigation
                technology, and scientific instruments to explore the cosmos.
              </p>
              <p>
                From the first Sputnik satellite to modern reusable rockets,
                spacecraft technology continues to evolve, making space more
                accessible than ever before.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={spaceship}
                alt="Spacecraft"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-contain rotate-12 hover:rotate-6 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-orange-300">Rockets</h3>
            <p className="text-orange-100">
              Powerful propulsion systems that overcome Earth's gravity, using
              chemical reactions to generate thrust and lift payloads into orbit
              and beyond.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-red-300">
              Space Stations
            </h3>
            <p className="text-orange-100">
              Orbital laboratories like the ISS provide long-term research
              platforms, allowing astronauts to conduct experiments in
              microgravity environments.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">
              Future Craft
            </h3>
            <p className="text-orange-100">
              Next-generation spacecraft will feature advanced propulsion, AI
              navigation, and sustainable life support for long-duration
              missions to Mars and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacecraftPage;
