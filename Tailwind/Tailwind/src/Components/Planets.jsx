import Spline from "@splinetool/react-spline";
import React from "react";

// Regular component - planet on left, message on right
const PlanetMessage = ({ planetModel, heading, text }) => {
  return (
    <div className="imgbg w-full h-screen flex flex-col md:flex-row items-center relative overflow-hidden">
      {/* Planet Image - Left Side on desktop, top on mobile */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <Spline scene={planetModel} className="w-full h-full" />
      </div>

      {/* Message Box - Right Side on desktop, bottom on mobile */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-8">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-lg animate-fade-in">
          <h2 className="text-orange-300 text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {heading}
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

// Mirrored component - message on left, planet on right
const PlanetMessageMirrored = ({ planetModel, heading, text }) => {
  return (
    <div className="imgbg w-full h-screen flex flex-col md:flex-row items-center relative overflow-hidden">
      {/* Message Box - Left Side on desktop, top on mobile */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-8 order-2 md:order-1">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-6 md:p-8 max-w-lg animate-fade-in">
          <h2 className="text-orange-300 text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {heading}
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
            {text}
          </p>
        </div>
      </div>

      {/* Planet Image - Right Side on desktop, bottom on mobile */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center order-1 md:order-2">
        <Spline scene={planetModel} className="w-full h-full" />
      </div>
    </div>
  );
};

export { PlanetMessage, PlanetMessageMirrored };
