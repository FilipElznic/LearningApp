import { useState, useEffect, useRef } from "react";

function IntroText() {
  const storyParts = [
    {
      content: [
        "Hello, Space Explorer!",
        "I'm Orbi, the official mascot of this web app!",
      ],
    },
    {
      content: [
        "I once orbited a lonely satellite... until a spark of Earth code brought me to life!",
      ],
    },
    {
      content: ["Now, I’m here to improve your learning journey!"],
    },
    {
      content: [
        "Jetpack ready, databanks full — I’ll lead the way.",
        "Strap in, and let’s explore the stars, one click at a time!",
      ],
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
        threshold: 0.3, // Trigger when 30% of component is visible
        rootMargin: "0px 0px -100px 0px", // Start animation 100px before fully visible
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

    const currentPart = storyParts[currentPartIndex];
    const fullText = currentPart.content.join(" ");

    if (isTyping && displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 25); // Faster typing speed (was 50ms, now 25ms)

      return () => clearTimeout(timeout);
    } else if (isTyping && displayedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayedText, currentPartIndex, isTyping, isVisible]);

  const handleNextPart = () => {
    if (currentPartIndex < storyParts.length - 1) {
      setCurrentPartIndex((prev) => prev + 1);
      setDisplayedText(""); // Reset text
      setIsTyping(true); // Restart typing animation
    }
  };

  const handlePrevPart = () => {
    if (currentPartIndex > 0) {
      setCurrentPartIndex((prev) => prev - 1);
      setDisplayedText(""); // Reset text
      setIsTyping(true); // Restart typing animation
    }
  };

  return (
    <div
      ref={componentRef}
      className={`w-full h-full flex items-center justify-center transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 "
      }`}
    >
      <div className="w-2/3 h-[50vh] bg-black flex flex-col items-center justify-center text-white px-8 relative">
        <div
          className={`text-2xl text-center min-h-[10rem] flex items-center transition-all duration-1000 delay-500 ease-out leading-relaxed ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block font-medium text-gray-100 tracking-wide">
            {displayedText}
            <span
              className={`inline-block w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 ml-2 ${
                isTyping && isVisible ? "animate-pulse" : "opacity-0"
              }`}
            />
          </span>
        </div>

        <div className="absolute bottom-4 flex justify-between w-full px-8 ">
          <button
            onClick={handlePrevPart}
            className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors  ${
              currentPartIndex === 0 ? "invisible" : ""
            }`}
          >
            ←
          </button>
          <button
            onClick={handleNextPart}
            className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${
              currentPartIndex === storyParts.length - 1 ? "invisible" : ""
            }`}
          >
            →
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2">
            {storyParts.map((_, index) => (
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
  );
}

export default IntroText;
