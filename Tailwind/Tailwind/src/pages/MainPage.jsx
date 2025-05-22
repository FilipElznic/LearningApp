import { useEffect, useState } from "react";
import "../App.css";

function MainPage() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotSequence = [".", "..", "...", "..", "."];
    let index = 0;
    const interval = setInterval(() => {
      setDots(dotSequence[index]);
      index = (index + 1) % dotSequence.length;
    }, 1000); // 1s interval

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-transparent">
      <div className="min-h-screen imagebg">
        <div className="text-white text-start font-semibold absolute top-1/4 px-4 sm:px-6 md:px-8 lg:px-10 max-w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            Are you ready <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>to explore?
          </h1>
          <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus illo voluptatem sit reprehenderit perspiciatis possimus
            ipsum esse illum molestias dolore dicta laudantium accusantium
            aliquam incidunt expedita, nobis cum. Voluptatem, vel?
          </p>
          <button className="group relative inline-flex h-12 sm:h-14 items-center justify-center overflow-hidden bg-cyan-900 px-4 sm:px-6 font-medium text-neutral-200 rounded-full mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base">
            <span>Get Started</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="min-h-screen w-full bg-black flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-center text-white my-8 sm:my-12 md:my-16 lg:my-20 xl:my-28 px-4 font-semibold">
          Welcome to space{dots}
        </h2>

        {/* First row of cards */}
        <div className="flex flex-col sm:flex-row w-full mt-4 sm:mt-6 md:mt-8 justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 h-48 sm:h-64 md:h-80 lg:h-96 blackgradient rounded-2xl sm:rounded-3xl"></div>
          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 h-48 sm:h-64 md:h-80 lg:h-96 blackgradient rounded-2xl sm:rounded-3xl"></div>
        </div>

        {/* Second row of cards */}
        <div className="flex flex-col sm:flex-row w-full my-4 sm:my-6 md:my-8 justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 h-48 sm:h-64 md:h-80 lg:h-96 blackgradient rounded-2xl sm:rounded-3xl"></div>
          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/3 h-48 sm:h-64 md:h-80 lg:h-96 blackgradient rounded-2xl sm:rounded-3xl"></div>
        </div>

        {/* Bottom spacer */}
        <div className="w-full bg-black h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48"></div>
      </div>

      <div className="h-screen bg-white"></div>
      <div className="h-screen bg-white"></div>
    </div>
  );
}

export default MainPage;
