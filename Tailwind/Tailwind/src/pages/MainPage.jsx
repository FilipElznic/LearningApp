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
      <div className="w-full h-[30vh]"></div>

      <div className="min-h-screen bg-white flex justify-center items-center ">
        <div className="w-2/3 h-full  mt-48">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Unmatched expirience
          </h2>
          <p className="text-2xl w-1/2 mt-8 font-extralight text-gray-900">
            This learning platform is designed to provide an unmatched
            experience for learning about space for every generation.
          </p>
          <div className="w-full h-full mt-10   flex flex-col gap-4">
            <div className="w-full flex flex-row gap-4">
              <div className="w-1/3 h-[40vh] rounded-3xl blackgradient"></div>
              <div className="w-2/3 h-[40vh] rounded-3xl blackgradient"></div>
            </div>
            <div className="w-full flex flex-row gap-4">
              <div className="w-2/3 h-[40vh] rounded-3xl blackgradient"></div>
              <div className="w-1/3 h-[40vh] rounded-3xl blackgradient"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-white"></div>
    </div>
  );
}

export default MainPage;
