import { useState, useEffect, useRef } from "react";

function IntroText() {
  const storyParts = [
    {
      title: "Hi, I am Orbi",
      content: [
        "Hi there, Earth traveler!",
        "I'm Orbi — your friendly co-pilot to the stars and beyond.",
      ],
    },
    {
      title: "My Origins",
      content: [
        "I used to be a small helper-bot, quietly orbiting a forgotten data satellite, far out in space.",
        "Just circling, day after day. Then one day ZAP! A burst of code from Earth reached me, and everything changed.",
      ],
    },
    {
      title: "My Purpose",
      content: [
        "Suddenly, I had a new purpose:",
        "To help curious explorers like you discover the vast galaxy of space and information.",
      ],
    },
    {
      title: "Your Guide",
      content: [
        "Now, with my trusty hover-pack and a head full of cosmic facts, I glide through this site to keep things in order.",
        "So, whenever you're ready, buckle up! I'll be right here with you, guiding you gently through the cosmos, one click at a time.",
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
      }, 50); // Typing speed

      return () => clearTimeout(timeout);
    } else if (isTyping && displayedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayedText, currentPartIndex, isTyping, isVisible]);

  const handleNextPart = () => {
    if (currentPartIndex < storyParts.length - 1) {
      setCurrentPartIndex((prev) => prev + 1);
      setDisplayedText(""); // Reset text
      setIsTyping(true);   // Restart typing animation
    }
  };

  const handlePrevPart = () => {
    if (currentPartIndex > 0) {
      setCurrentPartIndex((prev) => prev - 1);
      setDisplayedText(""); // Reset text
      setIsTyping(true);   // Restart typing animation
    }
  };

  return (
    <div
      ref={componentRef}
      className={`w-full h-full flex items-center justify-center transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-2/3 h-[50vh] bg-black flex flex-col items-center justify-center text-white px-8 relative">
        <h1
          className={`text-4xl font-bold mb-8 text-center transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {storyParts[currentPartIndex].title}
        </h1>
        <div
          className={`text-xl text-center min-h-[8rem] flex items-center transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block">
            {displayedText}
            <span
              className={`inline-block w-0.5 h-6 bg-white ml-1 ${
                isTyping && isVisible ? "animate-pulse" : "opacity-0"
              }`}
            />
          </span>
        </div>

        <div className="absolute bottom-4 flex justify-between w-full px-8">
          <button
            onClick={handlePrevPart}
            className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ${
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
