import "../App.css";
import Spline from "@splinetool/react-spline";
import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

import IntroText from "../Components/IntroText";
import Layout from "../Components/Layout";

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
    const firstPhaseScroll = window.innerHeight * 1.5; // First animation completes
    const secondPhaseStart = window.innerHeight * 2.5; // When second animation starts
    const secondPhaseEnd = window.innerHeight * 4; // When second animation completes

    const firstProgress = Math.min(scrollY / firstPhaseScroll, 1);
    const secondProgress = Math.max(
      0,
      Math.min(
        (scrollY - secondPhaseStart) / (secondPhaseEnd - secondPhaseStart),
        1
      )
    );

    // First phase: Move from right to left
    let translateX = -firstProgress * 60; // Move left by 60%
    let scale = 1 - firstProgress * 0.1; // Scale down to 90%
    let opacity = 1;
    let rotateZ = 0;

    // Second phase: Fade in and rotate to the right
    if (scrollY > secondPhaseStart) {
      const pausePoint = 0.8; // When to pause the movement (at 80% progress)

      if (secondProgress <= pausePoint) {
        // Normal animation until 80%
        translateX = -60 + secondProgress * 120; // Move back to right
        opacity = secondProgress; // Fade in from 0 to 80%
        rotateZ = secondProgress * 45; // Rotate 45 degrees clockwise
        scale = (1 - firstProgress * 0.1) * (1 - secondProgress * 0.3); // Additional scaling
      } else {
        // From 80% to 100%: Rotate back to original position
        const finalPhaseProgress =
          (secondProgress - pausePoint) / (1 - pausePoint); // 0 to 1 for final 20%
        translateX = -60 + pausePoint * 120; // Stay at 80% position
        opacity = 1; // Full opacity
        rotateZ = pausePoint * 45 * (1 - finalPhaseProgress); // Rotate back to 0 degrees
        scale = (1 - firstProgress * 0.1) * (1 - pausePoint * 0.3); // Stay at 80% scale
      }
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale}) rotateZ(${rotateZ}deg)`,
      opacity: opacity,
      transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
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
      <div className="min-h-screen flex flex-col md:flex-row relative">
        {/* Text Section - 1/3 width */}
        <div className="w-full md:w-1/3 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 z-30 relative">
          <div className="text-white text-start font-semibold max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight drop-shadow-lg">
              Are you ready <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>to explore?
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base leading-relaxed drop-shadow-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus illo voluptatem sit reprehenderit perspiciatis
              possimus ipsum esse illum molestias dolore dicta laudantium
              accusantium aliquam incidunt expedita, nobis cum. Voluptatem, vel?
            </p>
            <button className="group relative inline-flex h-12 sm:h-14 items-center justify-center overflow-hidden bg-cyan-900 px-4 sm:px-6 font-medium text-neutral-200 rounded-full mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base drop-shadow-lg">
              <span>Get Started</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Spline Canvas Section - Always visible with scroll animation */}
        <div
          className="w-full md:w-2/3 h-64 md:h-screen fixed top-0 right-0 z-20 flex items-center justify-center overflow-hidden"
          ref={splineRef}
          style={getSplineTransform()}
        >
          <Spline
            scene="https://prod.spline.design/1Fe7o7OsJuBQi6Q6/scene.splinecode"
            className="w-full h-full"
          />

          {/* First Animation Guidance Div */}
          <div
            className="absolute  rounded-lg px-4 py-2 text-white text-sm font-medium w-1/2 h-1/2"
            style={{
              top: "50%",
              left: "50%",
              transform: `translateY(${
                scrollY < window.innerHeight * 1.5
                  ? scrollY * 0.1
                  : window.innerHeight * 0.15
              }px)`,
              opacity: scrollY < window.innerHeight * 2.5 ? 1 : 0,
              transition: "opacity 0.3s ease-out",
            }}
          >
            <div className="w-20 bg-blue-700 h-10"></div>
          </div>

          {/* Second Animation Guidance Div */}
          <div
            className="absolute bg-green-500/80 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm font-medium"
            style={{
              bottom: "50%",
              right: "50%",
              transform: `rotate(0 deg) scale(${
                scrollY > window.innerHeight * 2.5
                  ? 1 + (scrollY - window.innerHeight * 2.5) * 0.0005
                  : 1
              })`,
              opacity:
                scrollY > window.innerHeight * 2.5
                  ? Math.min(
                      (scrollY - window.innerHeight * 2.5) /
                        (window.innerHeight * 0.5),
                      1
                    )
                  : 0,
              transition: "opacity 0.3s ease-out",
            }}
          >
            🚀 Ready to launch!
          </div>
        </div>
      </div>

      {/* Spacer to allow scrolling */}
      <div className="w-full h-screen flex items-end">
        <div className="w-1/2  h-full"></div>
        <div className="w-1/2  h-full flex items-center justify-center ">
          <IntroText />
        </div>
      </div>
      {/* add sliding cards for more info */}

      {/* Second section with animated appearance */}
      <div
        className="min-h-screen bg-black flex justify-center items-center relative z-10 flex-col"
        style={getSecondSectionStyle()}
      >
        <Layout />
      </div>

      <div className="w-full h-[20vh] "></div>

      <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-center pt-20 z-30 relative">
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
    </div>
  );
}

export default MainPage;
