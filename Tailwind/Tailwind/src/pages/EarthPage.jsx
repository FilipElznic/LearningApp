import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import astronaut from "../assets/arrowearth.png";

function EarthPage() {
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

  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Intersection Observer for fade-in animation
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

    const currentPart = equipmentParts[currentPartIndex];
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
    if (currentPartIndex < equipmentParts.length - 1) {
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto px-4 py-4 flex justify-between items-center">
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
      <div className="pt-20 mx-auto px-4 py-16">
        <div className="w-full h-full flex flex-col">
          <div className="w-full mt-20">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-center mb-8">
              Earth
            </h1>
          </div>
          <div className="flex flex-row h-full w-full items-center justify-center space-x-4">
            <img src={astronaut} className="w-1/2 h-full" alt="Astronaut"></img>

            <div
              ref={componentRef}
              className={`w-1/2 h-full flex items-center justify-center transition-all duration-1000 ease-out bg-black ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className={`w-full h-[60vh] ${equipmentParts[currentPartIndex].bgColor} flex flex-col items-center justify-center text-white px-8 relative rounded-lg`}
              >
                <h2
                  className={`text-3xl font-bold  text-center transition-all mb-6 duration-1000 delay-300 ease-out ${
                    equipmentParts[currentPartIndex].textColor
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {equipmentParts[currentPartIndex].title}
                </h2>

                <div
                  className={`text-lg text-center min-h-[8rem] flex items-center transition-all duration-1000 delay-500 ease-out leading-relaxed w-1/2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="inline-block font-medium tracking-wide ">
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
                      currentPartIndex === equipmentParts.length - 1
                        ? "invisible"
                        : ""
                    }`}
                  >
                    →
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-2">
                    {equipmentParts.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentPartIndex
                            ? "bg-white"
                            : "bg-white/30"
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

export default EarthPage;
