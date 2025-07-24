import LearningPageTemplate from "../Components/LearningPageTemplate";
import SEOHead from "../Components/SEOHead";
import earthImage from "../assets/arrowearth.png";
import watercycleImage from "../assets/watercycle.jpg";
import ContinetsImage from "../assets/continents.png";
import earthImageCore from "../assets/crust.png";
import earthAtmosphereImage from "../assets/atmosphere.png";

function EarthPage() {
  const seoData = {
    title: "Earth - Our Blue Planet | SpaceLearning",
    description:
      "Discover Earth's atmosphere, continents, water cycle, and core structure. Learn about our planet's unique features that make life possible through interactive content.",
    keywords:
      "Earth, planet Earth, atmosphere, continents, water cycle, geology, climate zones, terrestrial planet, blue planet, home planet",
    canonical: "https://yourdomain.com/earth",
    ogImage: "https://yourdomain.com/earth-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: "Earth - Our Blue Planet",
      description:
        "Comprehensive educational content about Earth's structure, atmosphere, and systems",
      educationalLevel: "beginner",
      learningResourceType: "Interactive Content",
      about: [
        {
          "@type": "Thing",
          name: "Earth",
        },
        {
          "@type": "Thing",
          name: "Planetary Science",
        },
        {
          "@type": "Thing",
          name: "Geology",
        },
      ],
    },
  };
  const equipmentParts = [
    {
      title: "Polar Ice & Climate Zones",
      content:
        "Though not fully visible in this image, the polar regions are critical to Earth's climate. Earth's rotation and tilt create distinct climate zones from the equator to the poles.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Atmosphere & Weather Systems",
      content:
        "The atmosphere is a complex system of gases surrounding Earth, playing a crucial role in weather patterns and climate. It protects life by filtering harmful solar radiation and reducing temperature extremes.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Continental Landmasses",
      content:
        "The land areas visible are major continents, including Asia, Europe, and Africa. These regions contain diverse terrains such as mountains, deserts, forests, and plains.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Oceans & Water Bodies",
      content:
        "The Earth's oceans cover more than 70% of its surface, playing a vital role in regulating climate and supporting marine life.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Mobility Harness",
      content:
        "Contains structural support and attachment points for tools and tethers to prevent floating away.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Mobility Joints & Thermal Boots",
      content:
        "Designed for flexibility in microgravity. Boots have thermal and micrometeoroid protection, and some variants have magnetic soles for spacecraft surface work.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEOHead {...seoData} />
      <LearningPageTemplate
        pageTitle="EARTH"
        imageSrc={earthImage}
        imageAlt="Earth"
        equipmentParts={equipmentParts}
      />

      {/* Extended Earth Information Section */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent mb-4">
            PLANETARY ANALYSIS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        {/* Continents Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                CONTINENTAL MASSES
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                    Seven Continents
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Earth&apos;s landmasses are divided into seven continents:
                    Asia (largest), Africa, North America, South America,
                    Antarctica, Europe, and Australia. These massive formations
                    resulted from continental drift over millions of years.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-blue-300 mb-3">
                    Tectonic Activity
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The continents sit on massive tectonic plates that slowly
                    move across Earth&apos;s mantle, creating mountains,
                    valleys, and causing earthquakes. This process continues to
                    reshape our planet&apos;s surface.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Image placeholder for continents */}
              <img
                src={ContinetsImage}
                alt="Continents"
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Earth's Core Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              {/* Image placeholder for Earth's core */}
              <img
                src={earthImageCore}
                alt="Earth's Core"
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                PLANETARY CORE STRUCTURE
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-orange-300 mb-3">
                    Crust
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The outermost solid layer of Earth, ranging from 5-10km
                    thick under oceans to 30-70km thick under continents.
                    Contains all surface features including mountains, valleys,
                    and ocean floors.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-red-300 mb-3">
                    Mantle
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The largest layer extending from the crust to 2,900km deep.
                    Composed of hot, dense rock that slowly flows in convection
                    currents, driving plate tectonics and continental drift.
                  </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-yellow-300 mb-3">
                    Core
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Earth&apos;s innermost layer made of iron and nickel. The
                    liquid outer core generates our magnetic field, while the
                    solid inner core reaches temperatures of 5,700°C - hotter
                    than the Sun&apos;s surface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Atmospheric Layers Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                ATMOSPHERIC LAYERS
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-4 hover:border-gray-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-gray-200">
                    Troposphere (0-12km)
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Weather systems and breathable atmosphere
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-4 hover:border-gray-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-gray-200">
                    Stratosphere (12-50km)
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Contains the ozone layer protecting from UV radiation
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-4 hover:border-gray-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-gray-200">
                    Mesosphere (50-80km)
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Meteors burn up in this coldest atmospheric layer
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-4 hover:border-gray-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-gray-200">
                    Thermosphere (80-600km)
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Aurora phenomena and International Space Station orbit
                  </p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-500/20 rounded-xl p-4 hover:border-gray-400/40 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-gray-200">
                    Exosphere (600-10,000km)
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Outermost layer where atmosphere merges with outer space
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* Bigger image for atmospheric layers */}
              <img
                src={earthAtmosphereImage}
                alt="Atmospheric Layers"
                className="rounded-xl shadow-md w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Water Cycle Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
              HYDROLOGICAL SYSTEM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-blue-800/30 to-blue-900/30 border border-blue-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center mr-3">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <path
                        d="M32 6C32 6 12 30 12 44C12 53.9411 20.0589 62 30 62C39.9411 62 48 53.9411 48 44C48 30 32 6 32 6Z"
                        fill="#81D4FA"
                        stroke="#0288D1"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-300">
                    Oceans
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  71% of surface covered by salt water, containing 97% of
                  Earth&apos;s water
                </p>
              </div>
              <div className="bg-gradient-to-b from-cyan-800/30 to-cyan-900/30 border border-cyan-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center mr-3">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <rect width="64" height="64" rx="12" fill="#B3E5FC" />
                      <path
                        d="M8 48c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4 4-4 8-4 4 4 8 4"
                        stroke="#0288D1"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M8 56c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 8 4 4-4 8-4 4 4 8 4"
                        stroke="#0288D1"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-cyan-300">
                    Fresh Water
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Only 3% of total water, mostly frozen in polar ice caps and
                  glaciers
                </p>
              </div>
              <div className="bg-gradient-to-b from-teal-800/30 to-teal-900/30 border border-teal-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-teal-400/20 rounded-full flex items-center justify-center mr-3">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#0288D1"
                        strokeWidth="2"
                        fill="#E1F5FE"
                      />
                      <path
                        d="M32 10v8M32 10l-3 3M32 10l3 3"
                        stroke="#0288D1"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M32 54v-8M32 54l-3-3M32 54l3-3"
                        stroke="#0288D1"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10 32h8M10 32l3-3M10 32l3 3"
                        stroke="#0288D1"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M54 32h-8M54 32l-3-3M54 32l-3 3"
                        stroke="#0288D1"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="32" cy="32" r="6" fill="#4FC3F7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-teal-300">
                    Water Cycle
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Continuous evaporation, condensation, and precipitation cycle
                </p>
              </div>
            </div>
          </div>
          {/* Image placeholder for water cycle */}
          <img
            src={watercycleImage}
            alt="Water Cycle Illustration"
            className="w-full h-auto mt-6 rounded-xl shadow-md opacity-50"
          />
        </div>

        {/* Earth Statistics */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-white mb-12">
            PLANETARY STATISTICS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-4 md:p-6 text-center hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
                4.54B
              </div>
              <div className="text-gray-300 text-sm">Years Old</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 md:p-6 text-center hover:border-blue-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                12,756
              </div>
              <div className="text-gray-300 text-sm">km Diameter</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 md:p-6 text-center hover:border-purple-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                24h
              </div>
              <div className="text-gray-300 text-sm">Rotation Period</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-4 md:p-6 text-center hover:border-orange-400/50 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
                365.25
              </div>
              <div className="text-gray-300 text-sm">Days/Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarthPage;
