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
    const secondPhaseEnd = window.innerHeight * 4;

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

    // Hide spline after second animation ends
    if (scrollY > secondPhaseEnd) {
      opacity = 0;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale}) rotateZ(${rotateZ}deg)`,
      opacity: opacity,
      transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
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
        <div className="w-1/2  h-full flex items-center justify-center z-50">
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
            Sign up and explore.
          </h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-start mt-2">
            Unlock quick learning.
          </h2>
          <p className="text-2xl w-1/2 mt-2 font-light text-gray-900 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            accusantium dolor minus tenetur eligendi!
          </p>
          <div className="w-full h-full flex flex-row items-center justify-center mt-10 gap-6">
            {/* Card 1 */}
            <div className="w-1/3 h-4/6 bg-gradient-to-b from-zinc-900 to-zinc-800 rounded-3xl relative overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-white/5"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-zinc-700 rounded-full mb-4 shadow-lg flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-80"
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
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Start Your Journey
                  </h3>
                  <p className="text-zinc-200 text-sm">
                    Create your free account and unlock the universe of
                    knowledge.
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <a
                    href="/signup"
                    className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-zinc-200 transition"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-8 left-6 w-1 h-1 bg-white rounded-full opacity-10"></div>
            </div>

            {/* Card 2 */}
            <div className="w-1/3 h-full bg-gradient-to-b from-zinc-800 to-zinc-700 rounded-3xl relative overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-white/5"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 bg-zinc-600 rounded-full mb-4 shadow-lg flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-60"
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
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Why Join us?
                  </h3>
                  <p className="text-zinc-200 text-sm">
                    Track your progress, earn xp, and access exclusive space
                    knowledge.
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <a
                    href="/signup"
                    className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-zinc-200 transition"
                  >
                    Create Account
                  </a>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/10 rounded-full"></div>
              <div className="absolute top-6 right-8 w-2 h-2 bg-white rounded-full opacity-20"></div>
            </div>

            {/* Card 3 */}
            <div className="w-1/3 h-4/6 bg-gradient-to-b from-zinc-900 to-zinc-700 rounded-3xl relative overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-white/5"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-zinc-800 rounded-full mb-4 shadow-lg flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-50"
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
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Already a member?
                  </h3>
                  <p className="text-zinc-200 text-sm">
                    Sign in and continue your cosmic adventure with interactive
                    tasks!
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <a
                    href="/signup"
                    className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-zinc-200 transition"
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
      <div className="min-h-screen bg-white ">
        <Planets />
      </div>
    </div>
  );
}

export default MainPage;
