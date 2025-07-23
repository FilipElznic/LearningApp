import LearningPageTemplate from "../Components/LearningPageTemplate";
import rocketImage from "../assets/arrowrocket.png";
import rEngine from "../assets/rocketengine.png";
import rOrbit from "../assets/rocketorbit.png";
import rStage from "../assets/rocketstage.png";

function SpacecraftPage() {
  const equipmentParts = [
    {
      title: "Solid Rocket Boosters",
      content:
        "Provide the main thrust during the first two minutes of launch, helping lift the shuttle through Earth's atmosphere. Jettisoned once their fuel is spent.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "External Fuel Tank",
      content:
        "Holds liquid hydrogen and liquid oxygen to fuel the shuttle's main engines during launch. It's the only part not reused after launch.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Orbiter Vehicle",
      content:
        "The spacecraft portion where astronauts live and work. Equipped with engines, wings, and the payload bay. Returns to Earth for reuse.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Main Engines",
      content:
        "Located at the base of the orbiter, these engines burn fuel from the external tank to propel the shuttle into orbit.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Heat-Resistant Tiles",
      content:
        "Covers the orbiter to protect it during re-entry into Earth's atmosphere, where temperatures reach over 1,600°C (2,900°F).",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Navigation Systems",
      content:
        "Advanced computer systems and sensors that guide the spacecraft through space, maintain orbit, and ensure precise landings.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <LearningPageTemplate
        pageTitle="SPACECRAFT"
        imageSrc={rocketImage}
        imageAlt="Space Shuttle"
        equipmentParts={equipmentParts}
      />

      {/* Extended Spacecraft Information Section */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            ROCKET TECHNOLOGY
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
        </div>

        {/* Propulsion Systems Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                PROPULSION SYSTEMS
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-orange-300 mb-3">
                    Chemical Rockets
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The most common type of rocket engine, burning fuel and
                    oxidizer to create hot gases that are expelled through a
                    nozzle. Provides tremendous thrust needed to escape
                    Earth&apos;s gravity.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-red-300 mb-3">
                    Ion Thrusters
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Electric propulsion systems that accelerate ions to
                    extremely high speeds. While providing low thrust, they are
                    highly fuel-efficient for long-duration space missions.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Placeholder for propulsion system image */}
              <img src={rEngine} alt="Rocket Engine" className="rounded-xl " />
            </div>
          </div>
        </div>

        {/* Rocket Stages Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              {/* Placeholder for rocket stages diagram */}
              <img src={rStage} alt="Rocket Stages" className="rounded-xl " />
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                MULTI-STAGE DESIGN
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-blue-300 mb-3">
                    First Stage
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The largest and most powerful stage, designed to lift the
                    entire rocket off the ground and through the dense lower
                    atmosphere. Burns massive amounts of fuel quickly.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                    Second Stage
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ignites after first stage separation, continuing to
                    accelerate the payload toward orbit. More efficient in the
                    vacuum of space where there&apos;s no atmospheric
                    resistance.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">
                    Payload Stage
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The final stage carrying the spacecraft, satellites, or crew
                    capsule to their destination. May include additional
                    propulsion for orbital adjustments and mission operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Types Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                MISSION PROFILES
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-green-400/20 rounded-xl p-4 hover:border-green-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-green-300">
                    Low Earth Orbit (LEO)
                  </h4>
                  <p className="text-gray-400 text-sm">
                    160-2,000km altitude, includes ISS missions and satellite
                    deployment
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 hover:border-blue-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-300">
                    Geostationary Orbit (GEO)
                  </h4>
                  <p className="text-gray-400 text-sm">
                    35,786km altitude, for communication and weather satellites
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 hover:border-purple-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-purple-300">
                    Interplanetary
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Missions to Moon, Mars, and beyond requiring escape velocity
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4 hover:border-yellow-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-yellow-300">
                    Deep Space
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Exploration missions to outer planets and beyond solar
                    system
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Placeholder for mission trajectory diagram */}
              <img src={rOrbit} alt="Rocket Orbit" className="rounded-xl " />
            </div>
          </div>
        </div>

        {/* Spacecraft Evolution Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              SPACECRAFT EVOLUTION
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-400 font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-300">
                    V-2 Rocket
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  First rocket to reach space (1944), foundation of modern
                  rocketry
                </p>
              </div>
              <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/30 border border-blue-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-300">
                    Saturn V
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Most powerful rocket of its time, carried Apollo missions to
                  the Moon
                </p>
              </div>
              <div className="bg-gradient-to-b from-orange-800/30 to-orange-900/30 border border-orange-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-400 font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-300">
                    Space Shuttle
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  First reusable spacecraft, built International Space Station
                </p>
              </div>
              <div className="bg-gradient-to-b from-red-800/30 to-red-900/30 border border-red-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-400 font-bold">4</span>
                  </div>
                  <h4 className="text-xl font-semibold text-red-300">
                    Modern Era
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  SpaceX Falcon 9, reusable rockets revolutionizing space access
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacecraft Statistics */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-12">
            ROCKET SPECIFICATIONS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-4 md:p-6 text-center hover:border-orange-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
                11.2
              </div>
              <div className="text-gray-400 text-sm">km/s Escape Velocity</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-4 md:p-6 text-center hover:border-red-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
                3,000°C
              </div>
              <div className="text-gray-400 text-sm">Engine Temperature</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4 md:p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                7.8
              </div>
              <div className="text-gray-400 text-sm">km/s Orbital Speed</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 md:p-6 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                90%
              </div>
              <div className="text-gray-400 text-sm">Fuel Mass Ratio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacecraftPage;
