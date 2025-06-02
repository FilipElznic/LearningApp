import Navbar from "../Components/Navbar";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="m-10 imgbg rounded-[70px] w-full flex  flex-col p-6">
        <Navbar />
        <div className="w-full h-full flex items-center ">
          <div className="w-full md:w-1/3 flex items-center p-4 sm:p-6 md:p-8 lg:p-10 z-30 relative">
            <div className="text-white text-start font-semibold max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight drop-shadow-lg">
                Are you ready <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>to explore?
              </h1>
              <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base leading-relaxed drop-shadow-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus illo voluptatem sit reprehenderit perspiciatis
                possimus ipsum esse illum molestias dolore dicta laudantium
                accusantium aliquam incidunt expedita, nobis cum. Voluptatem,
                vel?
              </p>
              <button className="group relative inline-flex h-12 sm:h-14 items-center overflow-hidden bg-cyan-900 px-4 sm:px-6 font-medium text-neutral-200 rounded-full mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base drop-shadow-lg">
                <span>Get Started</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Text Section - 1/3 width */}
      </div>
    </div>
  );
}

export default LandingPage;
