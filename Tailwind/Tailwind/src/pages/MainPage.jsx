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
    const firstPhaseScroll = window.innerHeight * 1.5; // First phase: move left and down
    const secondPhaseStart = window.innerHeight * 2.5; // Second phase: continue down only
    const thirdPhaseStart = window.innerHeight * 3; // Third phase: move right (around 350vh)
    const secondPhaseEnd = window.innerHeight * 5;

    const firstProgress = Math.min(scrollY / firstPhaseScroll, 1);
    const secondProgress = Math.max(
      0,
      Math.min(
        (scrollY - secondPhaseStart) / (thirdPhaseStart - secondPhaseStart),
        1
      )
    );
    const thirdProgress = Math.max(
      0,
      Math.min(
        (scrollY - thirdPhaseStart) / (secondPhaseEnd - thirdPhaseStart),
        1
      )
    );

    // First phase: Move from right to left and down
    let translateX = -firstProgress * 80; // Move 80% to the left
    let translateY = firstProgress * 160; // Move down 160vh
    let scale = 1 - firstProgress * 0.1;
    let opacity = 1;
    let rotateZ = 0;
    let zIndex = 5;
    let pointerEvents = "auto";

    // Second phase: Continue moving down only (no horizontal movement)
    if (scrollY > secondPhaseStart && scrollY <= thirdPhaseStart) {
      translateX = -80; // Stay at left position
      translateY = 160 + secondProgress * 150; // Fixed to start from 160 (matching first phase end)
      opacity = 1;
      scale = (1 - firstProgress * 0.1) * (1 - secondProgress * 0.1);
    }

    // Third phase: Move to the right and continue down
    if (scrollY > thirdPhaseStart) {
      translateX = -80 + thirdProgress * 400; // Move back to the right
      translateY = 310 + thirdProgress * 60; // Start from 310 (160 + 150) to match second phase end
      opacity = 1;
      rotateZ = thirdProgress * 45; // Add rotation during right movement
      scale =
        (1 - firstProgress * 0.1) *
        (1 - secondProgress * 0.1) *
        (1 - thirdProgress * 0.2);
    }

    // Hide spline after animation ends and disable pointer events
    if (scrollY > secondPhaseEnd) {
      opacity = 0;
      pointerEvents = "none";
      zIndex = -1; // Move behind everything when not visible
      translateX = -200; // Move far off screen to ensure it's completely hidden
      translateY = 1000; // Move far down to ensure it's completely hidden
    }

    // Disable pointer events when spline is faded or not in focus
    if (opacity < 0.5 || scrollY > window.innerHeight * 4) {
      pointerEvents = "none";
    }

    return {
      transform: `translateX(${translateX}%) translateY(${translateY}vh) scale(${scale}) rotateZ(${rotateZ}deg)`,
      opacity: opacity,
      transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      zIndex: zIndex,
      pointerEvents: pointerEvents,
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
    <>
      <style>
        {`
          html, body {
            overflow-x: hidden !important;
            max-width: 100vw !important;
          }
        `}
      </style>
      <div
        className="min-h-screen bg-transparent overflow-x-hidden max-w-full"
        ref={containerRef}
        style={{ overflowX: "hidden", maxWidth: "100vw" }}
      >
        <LandingPage />
        {/* Spline Canvas Section - Always visible with scroll animation */}
        <div
          className="w-full md:w-2/3 h-[40vh] md:h-screen fixed top-0 right-0 flex items-center justify-center overflow-hidden"
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
        <div
          className="w-full h-screen flex flex-col md:flex-row items-end"
          id="intro"
        >
          <div className="w-full md:w-1/2 h-1/2 md:h-full"></div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center z-50">
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
        <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-center pt-10 md:pt-20 z-30 px-4 md:px-0">
          <div className="w-full md:w-2/3 h-full flex items-center flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-start">
              Sign up and explore.
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-start mt-2">
              Unlock quick learning.
            </h2>
            <p className="text-base md:text-2xl w-full md:w-1/2 mt-4 md:mt-2 font-light text-gray-900 text-center px-4 md:px-0">
              This app is a free learning platform designed to help you explore
              a universe of knowledge through interactive questions. (All XP and
              achievements are for fun and learning, not real astronaut
              training.)
            </p>
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center mt-6 md:mt-10 gap-4 md:gap-6 px-4 md:px-0 pb-8 md:pb-0">
              {/* Card 1 */}
              <div className="w-full md:w-1/3 h-64 md:h-4/6 bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-3xl relative overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-700 rounded-full mb-4 shadow-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-white opacity-80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          fill="white"
                          className="opacity-30"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Start Your Journey
                    </h3>
                    <p className="text-zinc-200 text-sm">
                      Create your free account and unlock the universe of
                      knowledge.
                    </p>
                  </div>
                  <div className="flex justify-center mt-4 md:mt-6">
                    <a
                      href="/signup"
                      className="bg-white text-black font-semibold px-4 md:px-6 py-2 rounded-full shadow hover:bg-zinc-200 transition text-sm md:text-base"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-8 left-6 w-1 h-1 bg-white rounded-full opacity-10"></div>
              </div>

              {/* Card 2 */}
              <div className="w-full md:w-1/3 h-80 md:h-full bg-gradient-to-b from-zinc-800 to-zinc-700 rounded-3xl relative overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-600 rounded-full mb-4 shadow-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8 md:w-12 md:h-12 text-white opacity-60"
                        fill="none"
                        viewBox="0 0 32 32"
                        stroke="currentColor"
                      >
                        <ellipse
                          cx="16"
                          cy="16"
                          rx="13"
                          ry="6"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                        <ellipse
                          cx="16"
                          cy="16"
                          rx="4"
                          ry="2"
                          fill="white"
                          className="opacity-20"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Why Join us?
                    </h3>
                    <p className="text-zinc-200 text-sm">
                      Track your progress, earn XP, and access exclusive
                      space-themed learning content.
                    </p>
                  </div>
                  <div className="flex justify-center mt-4 md:mt-6">
                    <a
                      href="/signup"
                      className="bg-white text-black font-semibold px-4 md:px-6 py-2 rounded-full shadow hover:bg-zinc-200 transition text-sm md:text-base"
                    >
                      Create Account
                    </a>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 border-2 border-white/10 rounded-full"></div>
                <div className="absolute top-6 right-8 w-2 h-2 bg-white rounded-full opacity-20"></div>
              </div>

              {/* Card 3 */}
              <div className="w-full md:w-1/3 h-64 md:h-4/6 bg-gradient-to-b from-zinc-900 to-zinc-700 rounded-3xl relative overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-800 rounded-full mb-4 shadow-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white opacity-50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M2 12h20M12 2v20"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Already a member?
                    </h3>
                    <p className="text-zinc-200 text-sm">
                      Sign in and continue your cosmic adventure
                      (metaphorically!) with interactive tasks and quizzes.
                    </p>
                  </div>
                  <div className="flex justify-center mt-4 md:mt-6">
                    <a
                      href="/login"
                      className="bg-white text-black font-semibold px-4 md:px-6 py-2 rounded-full shadow hover:bg-zinc-200 transition text-sm md:text-base"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full opacity-10"></div>
                <div className="absolute top-8 right-2 w-1 h-1 bg-white rounded-full opacity-10"></div>
                <div className="absolute bottom-12 right-8 w-1 h-1 bg-white rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[20vh] bg-slate-50"></div>
        <div className="min-h-screen bg-white z-50 relative">
          <Planets />
        </div>
      </div>
    </>
  );
}

export default MainPage;
