import LearningPageTemplate from "../Components/LearningPageTemplate";
import astronaut from "../assets/arrowastronout.png";
import spacesuit from "../assets/aspacesuit.png";
import spacetrain from "../assets/aspacetraining.jpg";

import famous from "../assets/afamous.png";

function AstronautsPage() {
  const equipmentParts = [
    {
      title: "Primary Life Support System",
      content:
        "Controls oxygen, temperature, and removes carbon dioxide. Also includes telemetry systems and controls for vital life support functions.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Helmet & Visor Assembly",
      content:
        "Provides head protection, radio communication, and sun shielding. The gold visor protects against harmful solar radiation and provides clear visibility.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Environmental Sensors & Cameras",
      content:
        "Cameras and lights mounted on the helmet for visual recording and assisting mission control with visibility during EVAs.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Pressure Gloves",
      content:
        "Specially designed gloves that maintain pressure while allowing dexterity. Feature heating elements and protection against temperature extremes.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Mobility Harness",
      content:
        "Contains structural support and attachment points for tools and tethers to prevent floating away during spacewalks.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Thermal Protection System",
      content:
        "Multi-layer insulation protects against temperature extremes from -250°F to +250°F. Includes micrometeoroid protection layers.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <LearningPageTemplate
        pageTitle="ASTRONAUTS"
        imageSrc={astronaut}
        imageAlt="Astronaut"
        equipmentParts={equipmentParts}
      />

      {/* Extended Astronaut Information Section */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 via-white to-silver bg-clip-text text-transparent mb-4">
            HUMAN SPACEFLIGHT
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-white mx-auto rounded-full"></div>
        </div>

        {/* Spacesuit Technology Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                SPACESUIT TECHNOLOGY
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-blue-300 mb-3">
                    Pressure Suit
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Maintains 4.3 psi internal pressure to keep astronauts alive
                    in the vacuum of space. Features multiple layers including a
                    pressure bladder, restraint layer, and thermal protection.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                    Life Support Backpack
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The Portable Life Support System (PLSS) provides oxygen,
                    removes CO2, regulates temperature, and maintains
                    communication for up to 8 hours of EVA.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Placeholder for spacesuit technology image */}
              <img
                src={spacesuit}
                alt="Spacesuit Technology"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Astronaut Training Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              <img
                src={spacetrain}
                alt="Astronaut Training"
                className="rounded-xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                ASTRONAUT TRAINING
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-green-300 mb-3">
                    Physical Conditioning
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Rigorous fitness training including cardiovascular
                    endurance, strength training, and adaptation to microgravity
                    environments using centrifuges and underwater training.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">
                    Technical Skills
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Extensive training in spacecraft systems, robotics, EVA
                    procedures, emergency protocols, and scientific equipment
                    operation.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-orange-300 mb-3">
                    Simulation Training
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Thousands of hours in high-fidelity simulators, underwater
                    neutral buoyancy training, and virtual reality systems to
                    prepare for all mission scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Space Medicine Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                SPACE MEDICINE
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-red-400/20 rounded-xl p-4 hover:border-red-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-red-300">
                    Bone Density Loss
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Astronauts lose 1-2% bone mass per month in microgravity
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4 hover:border-yellow-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-yellow-300">
                    Muscle Atrophy
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Daily exercise on specialized equipment prevents muscle loss
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-green-400/20 rounded-xl p-4 hover:border-green-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-green-300">
                    Cardiovascular Changes
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Heart adapts to reduced workload, requires reconditioning
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 hover:border-blue-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-blue-300">
                    Radiation Exposure
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Continuous monitoring and protection from cosmic radiation
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center">
              {/* White bone SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-52 h-52 text-white" // Tailwind width & height classes
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Famous Astronauts Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              PIONEERING ASTRONAUTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/30 border border-blue-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-300">
                    Yuri Gagarin
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  First human in space (1961), completed one orbit around Earth
                </p>
              </div>
              <div className="bg-gradient-to-b from-cyan-800/30 to-cyan-900/30 border border-cyan-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-cyan-400 font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-cyan-300">
                    Neil Armstrong
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  First human to walk on the Moon during Apollo 11 mission
                  (1969)
                </p>
              </div>
              <div className="bg-gradient-to-b from-purple-800/30 to-purple-900/30 border border-purple-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-purple-300">
                    Sally Ride
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  First American woman in space, aboard Space Shuttle Challenger
                  (1983)
                </p>
              </div>
              <div className="bg-gradient-to-b from-orange-800/30 to-orange-900/30 border border-orange-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-400/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-orange-400 font-bold">4</span>
                  </div>
                  <h4 className="text-xl font-semibold text-orange-300">
                    Chris Hadfield
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  ISS Commander, renowned for space education and communication
                </p>
              </div>
            </div>
          </div>
          <img
            src={famous}
            alt="Famous Astronauts"
            className="rounded-xl mb-12  mx-auto max-w-full h-auto"
          />
        </div>

        {/* Astronaut Statistics */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-12">
            ASTRONAUT FACTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 md:p-6 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                562
              </div>
              <div className="text-gray-400 text-sm">People in Space</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-4 md:p-6 text-center hover:border-green-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
                2.5
              </div>
              <div className="text-gray-400 text-sm">Years Training</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 md:p-6 text-center hover:border-purple-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                8
              </div>
              <div className="text-gray-400 text-sm">Hours EVA Duration</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-4 md:p-6 text-center hover:border-orange-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
                17,500
              </div>
              <div className="text-gray-400 text-sm">mph Orbital Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstronautsPage;
