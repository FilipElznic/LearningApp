import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import spacecraft from "../assets/rocketship.jpg";

function SpacecraftPage() {
  const spacecraftParts = [
    {
      title: "Propulsion Systems",
      content: "Modern spacecraft use various propulsion methods, from chemical rockets to ion engines. These systems provide thrust for launch, orbital maneuvers, and deep space travel, with each type optimized for specific mission requirements.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Life Support Systems",
      content: "For crewed missions, spacecraft must carry complex life support systems that recycle air and water, maintain pressure, and regulate temperature. These systems are crucial for astronaut survival in the harsh environment of space.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Navigation & Control",
      content: "Spacecraft rely on sophisticated guidance systems, including star trackers, gyroscopes, and computer systems. These enable precise orientation and trajectory control essential for successful space missions.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Power Generation",
      content: "Solar panels and radioisotope generators provide electrical power for spacecraft systems. The choice depends on mission distance from the Sun, with solar power common for near-Earth missions and nuclear power for deep space exploration.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Communication Systems",
      content: "High-gain antennas and radio transmitters maintain vital links with Earth. These systems transmit scientific data, receive commands, and enable navigation, becoming more challenging as spacecraft venture deeper into space.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Scientific Instruments",
      content: "Modern spacecraft carry various sensors and instruments for their missions. These range from cameras and spectrometers to particle detectors and radar systems, enabling diverse scientific observations and discoveries.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const currentPart = spacecraftParts[currentPartIndex];
    const fullText = currentPart.content;

    if (isTyping && displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 25);

      return () => clearTimeout(timeout);
    } else if (isTyping && displayedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayedText, currentPartIndex, isTyping, isVisible]);

  const handleNextPart = () => {
    if (currentPartIndex < spacecraftParts.length - 1) {
      setCurrentPartIndex((prev) => prev + 1);
      setDisplayedText("");
      setIsTyping(true);
    }
  };

  const handlePrevPart = () => {
    if (currentPartIndex > 0) {
      setCurrentPartIndex((prev) => prev - 1);
      setDisplayedText("");
      setIsTyping(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
            ← Back to Home
          </Link>
          <h2 className="text-2xl font-bold">Space Learning Platform</h2>
        </div>
      </nav>

      <div className="pt-20 mx-auto px-4 py-16">
        <div className="w-full h-full flex flex-col">
          <div className="w-full mt-20">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-center mb-8">
              Spacecraft
            </h1>
          </div>
          <div className="flex flex-row h-full w-full items-center justify-center space-x-4">
            <div className="w-1/2 flex justify-center">
              <div className="relative">
                
                <img
                  src={spacecraft}
                  alt="Spacecraft"
                  className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full hover:scale-110 transition-transform duration-500 shadow-2xl border-4 border-blue-300/30"
                />
              </div>
            </div>

            <div
              ref={componentRef}
              className={`w-1/2 h-full flex items-center justify-center transition-all duration-1000 ease-out`}
            >
              <div
                className={`w-full h-[60vh] ${spacecraftParts[currentPartIndex].bgColor} flex flex-col items-center justify-center text-white px-8 relative rounded-lg`}
              >
                <h2
                  className={`text-3xl font-bold text-center transition-all mb-6 duration-1000 delay-300 ease-out ${
                    spacecraftParts[currentPartIndex].textColor
                  } ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {spacecraftParts[currentPartIndex].title}
                </h2>

                <div
                  className={`text-lg text-center min-h-[8rem] flex items-center transition-all duration-1000 delay-500 ease-out leading-relaxed w-1/2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="inline-block font-medium tracking-wide">
                    {displayedText}
                    <span
                      className={`inline-block w-1 h-6 bg-white ml-2 ${
                        isTyping && isVisible ? "animate-pulse" : "opacity-0"
                      }`}
                    />
                  </span>
                </div>

                <div className="absolute bottom-4 flex justify-between w-full px-8">
                  <button
                    onClick={handlePrevPart}
                    className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white ${
                      currentPartIndex === 0 ? "invisible" : ""
                    }`}
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextPart}
                    className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white ${
                      currentPartIndex === spacecraftParts.length - 1 ? "invisible" : ""
                    }`}
                  >
                    →
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-2">
                    {spacecraftParts.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentPartIndex ? "bg-white" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpacecraftPage;
