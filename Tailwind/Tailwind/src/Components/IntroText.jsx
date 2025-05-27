import { useState, useEffect, useRef } from "react";

function IntroText() {
  const sentences = [
    "Welcome to your journey of discovery.",
    "Every great adventure begins with a single step.",
    "Let your curiosity guide you forward.",
    "The possibilities are endless when you believe.",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
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
    // Only start typing animation after component becomes visible
    if (!isVisible) return;

    const currentSentence = sentences[currentSentenceIndex];

    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentSentence.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, displayedText.length + 1));
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait 5 seconds then move to next sentence
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setDisplayedText("");
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, 5000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Brief pause before starting to type next sentence
      const timeout = setTimeout(() => {
        setIsTyping(true);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentSentenceIndex, isTyping, sentences, isVisible]);

  return (
    <div
      ref={componentRef}
      className={`w-full h-full  flex items-center justify-center transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-2/3 h-[50vh] bg-black flex flex-col items-center justify-center text-white px-8">
        <h1
          className={`text-4xl font-bold mb-8 text-center transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Hi, I am Orbi
        </h1>
        <div
          className={`text-xl text-center min-h-[2rem] flex items-center transition-all duration-1000 delay-500 ease-out ${
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
      </div>
    </div>
  );
}

export default IntroText;
