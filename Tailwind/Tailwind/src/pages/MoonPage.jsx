import LearningPageTemplate from "../Components/LearningPageTemplate";
import moonImage from "../assets/arrowmoon.png";
import Mooncrust from "../assets/mooncrust.png";
import Moonland from "../assets/moonland.png";
import Moonphases from "../assets/moonphases.png";
import Moontheory from "../assets/moonteory.png";

function MoonPage() {
  const equipmentParts = [
    {
      title: "Craters & Impact Basins",
      content:
        "The Moon's surface is marked by numerous craters and impact basins, formed by collisions with asteroids and comets over billions of years. These features tell the story of the early solar system.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Maria (Lunar Seas)",
      content:
        "The Moon's maria are large, dark, basaltic plains formed by ancient volcanic eruptions. They are less cratered than the highlands and are primarily located on the side of the Moon facing Earth.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Highlands",
      content:
        "The lighter, rougher areas are called highlands. These are older than the maria and are composed mostly of anorthosite rock, giving them a bright appearance.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "No Atmosphere",
      content:
        "The Moon has a very thin atmosphere, called an exosphere, which is not capable of supporting human life. This lack of atmosphere means there is no weather, and temperatures can vary dramatically.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Tidal Locking",
      content:
        "The Moon is tidally locked to Earth, meaning the same side always faces our planet. This creates distinct 'near side' and 'far side' hemispheres with different geological characteristics.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Lunar Gravity",
      content:
        "The Moon's gravity is only 1/6th of Earth's, allowing astronauts to jump higher and move differently. This low gravity affects how dust settles and how objects behave on the surface.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <LearningPageTemplate
        pageTitle="MOON"
        imageSrc={moonImage}
        imageAlt="Moon"
        equipmentParts={equipmentParts}
      />

      {/* Extended Moon Information Section */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent mb-4">
            LUNAR ANALYSIS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-300 to-white mx-auto rounded-full"></div>
        </div>

        {/* Lunar Surface Features Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                SURFACE FEATURES
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-400/20 rounded-xl p-6 hover:border-gray-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-gray-300 mb-3">
                    Impact Craters
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The Moon&apos;s surface is covered with over 300,000 craters
                    larger than 1km. Major craters like Tycho and Copernicus
                    showcase the Moon&apos;s violent past, with some impacts
                    creating massive basins hundreds of kilometers across.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-amber-300 mb-3">
                    Regolith Layer
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    A fine layer of dust and rock fragments covers the entire
                    lunar surface, created by billions of years of meteorite
                    impacts. This regolith can be several meters deep and poses
                    challenges for lunar exploration.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={Moonland}
                alt="Lunar Surface Features"
                className="rounded-xl  mb-6 w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Lunar Phases & Orbit Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                ORBITAL MECHANICS
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 hover:border-blue-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-300">
                    New Moon
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Moon positioned between Earth and Sun, invisible from Earth
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 hover:border-blue-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-300">
                    Waxing Crescent
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Thin crescent visible in western sky after sunset
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 hover:border-blue-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-300">
                    First Quarter
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Half moon visible, highest in sky at sunset
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 hover:border-blue-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-300">
                    Full Moon
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Fully illuminated, rises at sunset and sets at sunrise
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Placeholder for lunar phases diagram */}
              <img
                src={Moonphases}
                alt="Lunar Phases"
                className="rounded-xl  mb-6 w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Formation Theory Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              FORMATION THEORY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-red-800/30 to-red-900/30 border border-red-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-400 font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-red-300">
                    Giant Impact
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Mars-sized object called Theia collided with early Earth 4.5
                  billion years ago
                </p>
              </div>
              <div className="bg-gradient-to-b from-orange-800/30 to-orange-900/30 border border-orange-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-400 font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-300">
                    Debris Disk
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Impact ejected massive amounts of material into orbit around
                  Earth
                </p>
              </div>
              <div className="bg-gradient-to-b from-yellow-800/30 to-yellow-900/30 border border-yellow-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-400 font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-yellow-300">
                    Accretion
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Debris gradually coalesced to form the Moon over millions of
                  years
                </p>
              </div>
            </div>
          </div>
          <img
            src={Moontheory}
            alt="Moon Formation Theory"
            className="rounded-xl  mb-6 w-full h-auto"
          />
        </div>

        {/* Lunar Statistics */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-12">
            LUNAR STATISTICS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-400/20 rounded-xl p-4 md:p-6 text-center hover:border-gray-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-gray-300 mb-2">
                4.53B
              </div>
              <div className="text-gray-400 text-sm">Years Old</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 md:p-6 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                3,474
              </div>
              <div className="text-gray-400 text-sm">km Diameter</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 md:p-6 text-center hover:border-purple-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                27.3
              </div>
              <div className="text-gray-400 text-sm">Earth Days/Orbit</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4 md:p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                384,400
              </div>
              <div className="text-gray-400 text-sm">km from Earth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoonPage;
