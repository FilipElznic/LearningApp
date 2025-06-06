import "../App.css";
import Spline from "@splinetool/react-spline";
import { useState, useEffect, useRef } from "react";
import Planets from "../Components/Planets";
import IntroText from "../Components/IntroText";
import Layout from "../Components/Layout";
import LandingPage from "./LandingPage";
import { webGLManager } from "../Components/Planet";

function MainPage() {
  const [scrollY, setScrollY] = useState(0);
  const splineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transform values based on scroll position
  const getSplineTransform = () => {
    const firstPhaseScroll = window.innerHeight * 1.5;
    const secondPhaseStart = window.innerHeight * 2.5;
    const secondPhaseEnd = window.innerHeight * 3;
    const planetsStart = window.innerHeight * 5;

    const firstProgress = Math.min(scrollY / firstPhaseScroll, 1);
    const secondProgress = Math.max(
      0,
      Math.min(
        (scrollY - secondPhaseStart) / (secondPhaseEnd - secondPhaseStart),
        1
      )
    );

    // First phase: Move from right to left
    let translateX = -firstProgress * 60;
    let scale = 1 - firstProgress * 0.1;
    let opacity = 1;
    let rotateZ = 0;

    // Second phase: Fade in and rotate to the right
    if (scrollY > secondPhaseStart) {
      const pausePoint = 0.8;

      if (secondProgress <= pausePoint) {
        translateX = -60 + secondProgress * 120;
        opacity = secondProgress;
        rotateZ = secondProgress * 45;
        scale = (1 - firstProgress * 0.1) * (1 - secondProgress * 0.3);
      } else {
        const finalPhaseProgress =
          (secondProgress - pausePoint) / (1 - pausePoint);
        translateX = -60 + pausePoint * 120;
        opacity = 1;
        rotateZ = pausePoint * 45 * (1 - finalPhaseProgress);
        scale = (1 - firstProgress * 0.1) * (1 - pausePoint * 0.3);
      }
    }

    // Planets section: Alternating left-right movement
    if (scrollY > planetsStart) {
      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor(
        (scrollY - planetsStart) / sectionHeight
      );
      const sectionProgress =
        ((scrollY - planetsStart) % sectionHeight) / sectionHeight;

      // Determine if current section is PlanetMessage (even) or PlanetMessageMirrored (odd)
      const isRightSide = currentSection % 2 === 0;

      // Adjusted position values - more left, less right
      const rightPosition = 40; // Reduced from 60 to 40 for less right movement
      const leftPosition = -80; // Changed from -60 to -80 for more left movement

      // Calculate smooth transition between positions
      if (isRightSide) {
        // Moving from left to right
        translateX =
          leftPosition + (rightPosition - leftPosition) * sectionProgress;
      } else {
        // Moving from right to left
        translateX =
          rightPosition + (leftPosition - rightPosition) * sectionProgress;
      }

      scale = 0.7; // Keep model slightly smaller in planets section
      rotateZ = 0; // Reset rotation
      opacity = 1;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale}) rotateZ(${rotateZ}deg)`,
      opacity: opacity,
      transition: "transform 0.3s ease-out, opacity 0.3s ease-out", // Increased transition time for smoother movement
      zIndex: 5,
    };
  };

  // Calculate when to show the second section's background
  const getSecondSectionStyle = () => {
    const triggerPoint = window.innerHeight * 0.8;
    const progress = Math.max(
      0,
      (scrollY - triggerPoint) / (window.innerHeight * 0.5)
    );
    const clampedProgress = Math.min(progress, 1);

    return {
      opacity: clampedProgress,
      transform: `translateY(${(1 - clampedProgress) * 20}px)`,
      transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
    };
  };

  return (
    <div className="min-h-screen bg-transparent" ref={containerRef}>
      <LandingPage />
      {/* Spline Canvas Section - Always visible with scroll animation */}
      <div
        className="w-full md:w-2/3 h-[40vh] md:h-screen fixed top-0 right-0 z-20 flex items-center justify-center overflow-hidden"
        ref={splineRef}
        style={getSplineTransform()}
      >
        <Spline
          scene="https://prod.spline.design/azadXvKhi40FDGgp/scene.splinecode"
          className="w-full h-full bg-transparent"
          onLoad={() => webGLManager.addContext("main-model")}
        />
      </div>
      {/* Spacer to allow scrolling */}
      <div className="w-full h-screen flex items-end" id="intro">
        <div className="w-1/2  h-full"></div>
        <div className="w-1/2  h-full flex items-center justify-center ">
          <IntroText />
        </div>
      </div>

      <div
        className="min-h-screen bg-white flex justify-center items-center relative z-10 flex-col"
        style={getSecondSectionStyle()}
      >
        <Layout />
      </div>
      <div className="w-full h-[20vh] bg-white"></div>
      <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-center pt-20 z-30">
        <div className="w-2/3 h-full flex items-center flex-col">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-start">
            Unmatched experience.
          </h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-start">
            Unmatched experience.
          </h2>
          <p className="text-2xl w-1/2 mt-2 font-light text-gray-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            accusantium dolor minus tenetur eligendi!
          </p>
          <div className=" w-full h-full flex flex-row items-center justify-center mt-10 gap-2">
            <div className="w-1/3 h-4/6 bg-zinc-800  "></div>
            <div className="w-1/3 h-full bg-zinc-800"></div>
            <div className="w-1/3 h-4/6 bg-zinc-800  "></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20vh] bg-slate-50"></div>
      <div className="min-h-screen bg-white ">
        <Planets />
      </div>
    </div>
  );
}

export default MainPage;
