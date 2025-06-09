import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import fullmoon from "../assets/fullmoon.jpg";

function MoonPage() {
  const moonParts = [
    {
      title: "Formation & Origin",
      content: "The Moon formed approximately 4.5 billion years ago, likely from debris after a Mars-sized object collided with Earth. This impact theory explains the Moon's composition and orbital characteristics.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Apollo Missions",
      content: "Between 1969 and 1972, NASA's Apollo program successfully landed 12 astronauts on the Moon. These missions brought back 382 kg of lunar rocks and helped us understand the Moon's geology.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Lunar Features",
      content: "The Moon's surface is marked by craters, maria (dark plains), and mountains. The far side looks very different from the near side, with fewer maria but more craters.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Moon Phases",
      content: "As the Moon orbits Earth, we see different portions illuminated by the Sun, creating the lunar phases. This cycle takes approximately 29.5 days to complete.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Lunar Effects",
      content: "The Moon's gravitational pull causes Earth's tides and helps stabilize our planet's axial tilt. This stability has been crucial for the development of life on Earth.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Future Exploration",
      content: "NASA's Artemis program aims to return humans to the Moon by 2026. Plans include establishing a permanent lunar base and using the Moon as a stepping stone for Mars missions.",
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

    const currentPart = moonParts[currentPartIndex];
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
    if (currentPartIndex < moonParts.length - 1) {
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
              Moon
            </h1>
          </div>
          <div className="flex flex-row h-full w-full items-center justify-center space-x-4">
            <div className="w-1/2 flex justify-center">
              <div className="relative">
              
                <img
                  src={fullmoon}
                  alt="Full Moon"
                  className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full hover:scale-110 transition-transform duration-500 shadow-2xl"
                />
              </div>
            </div>

            <div
              ref={componentRef}
              className={`w-1/2 h-full flex items-center justify-center transition-all duration-1000 ease-out`}
            >
              <div className={`w-full h-[60vh] ${moonParts[currentPartIndex].bgColor} flex flex-col items-center justify-center text-white px-8 relative rounded-lg`}>
                <h2 className={`text-3xl font-bold text-center transition-all mb-6 duration-1000 delay-300 ease-out ${
                  moonParts[currentPartIndex].textColor
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  {moonParts[currentPartIndex].title}
                </h2>

                <div className={`text-lg text-center min-h-[8rem] flex items-center transition-all duration-1000 delay-500 ease-out leading-relaxed w-1/2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  <span className="inline-block font-medium tracking-wide">
                    {displayedText}
                    <span className={`inline-block w-1 h-6 bg-white ml-2 ${
                      isTyping && isVisible ? "animate-pulse" : "opacity-0"
                    }`} />
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
                      currentPartIndex === moonParts.length - 1 ? "invisible" : ""
                    }`}
                  >
                    →
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-2">
                    {moonParts.map((_, index) => (
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

export default MoonPage;
