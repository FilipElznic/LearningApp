import Navbar from "../Components/Navbar";

function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white p-10 flex flex-col">
      <div className="grid grid-cols-5 grid-rows-5 gap-0 min-h-[90vh] w-full">
        <div className="col-start-1 col-end-5 row-start-1 row-end-2 bg-black h-full rounded-tl-[70px] rounded-tr-[70px] p-5">
          <Navbar />
        </div>
        <div className="col-start-5 col-end-6 row-start-1 row-end-2 bg-black h-full ">
          <div className="w-full h-full rounded-bl-[70px] bg-white flex  justify-center">
            <div className="w-4/5 h-3/4 bg-black  rounded-[70px]   text-white text-center text-3xl flex items-center justify-center">
              Docs
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-6 row-start-2 row-end-5 bg-black h-full rounded-tr-[70px] rounded-bl-[70px]">
          <div className="w-full h-full flex items-center ">
            <div className="w-full md:w-1/3 flex items-center p-4 sm:p-6 md:p-8 lg:p-10 z-30 relative">
              <div className="text-white text-start font-semibold max-w-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight drop-shadow-lg">
                  Hi, I am <span className="text-orange-600">Orbi</span>
                </h1>
                <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base leading-relaxed drop-shadow-md">
                  And today I will be your guide, we will explore the universe
                  together, and I will show you the wonders of the cosmos.
                  Little secret, I am not a real person, I am robot created by
                  the guys from Czech republic.
                </p>
                <a
                  href="#intro"
                  className="group relative inline-flex h-12 sm:h-14 items-center overflow-hidden bg-cyan-900 px-4 sm:px-6 font-medium text-neutral-200 rounded-full mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base drop-shadow-lg"
                >
                  <span>Get Started</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-5 row-end-6 bg-black h-full">
          <div className="w-full h-full rounded-tr-[70px] bg-white flex items-end justify-center">
            <div className="w-4/5 h-3/4 bg-black  rounded-[70px]"></div>
          </div>
        </div>
        <div className="col-start-2 col-end-6 row-start-5 row-end-6 bg-black h-full rounded-br-[70px] rounded-bl-[70px]">
          5
        </div>
      </div>
      <div className="w-full h-[20vh] items-center justify-center flex">
        <div className="w-5/6 bg-black h-2 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default LandingPage;
