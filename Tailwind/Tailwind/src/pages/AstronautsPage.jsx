import { Link } from "react-router-dom";
import astronaut from "../assets/astronaut.png";

function AstronautsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Astronauts
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover the brave pioneers who venture into the vast expanse of
              space, pushing the boundaries of human exploration and scientific
              discovery.
            </p>
            <div className="space-y-4 text-lg text-gray-400">
              <p>
                Astronauts are highly trained professionals who travel to space
                to conduct scientific research, maintain space stations, and
                explore celestial bodies.
              </p>
              <p>
                From the first human spaceflight by Yuri Gagarin to the current
                International Space Station missions, astronauts have been at
                the forefront of humanity's greatest adventure.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={astronaut}
                alt="Astronaut"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-contain rotate-12 hover:rotate-6 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Training</h3>
            <p className="text-gray-300">
              Astronauts undergo years of rigorous training including
              zero-gravity simulation, survival training, and technical
              education on spacecraft systems.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Missions
            </h3>
            <p className="text-gray-300">
              From short orbital flights to long-duration stays on the ISS,
              astronauts participate in various mission types to advance our
              understanding of space.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Future</h3>
            <p className="text-gray-300">
              The next generation of astronauts will journey to Mars, establish
              lunar bases, and explore the outer reaches of our solar system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstronautsPage;
