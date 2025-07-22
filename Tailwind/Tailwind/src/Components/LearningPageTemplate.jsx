import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function LearningPageTemplate({
  pageTitle,
  imageSrc,
  imageAlt,
  equipmentParts,
}) {
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
  }, [displayedText, currentPartIndex, isTyping, isVisible, equipmentParts]);

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
            className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all duration-300 font-semibold shadow backdrop-blur"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <h2 className="text-2xl font-bold">Space Learning Platform</h2>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 mx-auto px-4 py-16">
        <div className="w-full h-full flex flex-col">
          <div className="w-full mt-20">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-center mb-8">
              {pageTitle}
            </h1>
          </div>
          <div className="flex flex-row h-full w-full items-center justify-center space-x-4">
            <img src={imageSrc} className="w-1/2 h-full" alt={imageAlt} />

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

export default LearningPageTemplate;
