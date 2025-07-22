import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function LandingPage() {
  const navigate = useNavigate();

  const handleDocsClick = () => {
    navigate("/docs");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen w-full bg-white">
      {/* Mobile Layout */}
      <div className="md:hidden imgbg h-screen flex flex-col">
        {/* Navigation for mobile */}
        <div className="p-4">
          <Navbar />
        </div>

        {/* Main content - positioned at bottom */}
        <div className="flex-1 flex flex-col justify-end items-center px-6 pb-8">
          <div className="text-white text-center font-semibold max-w-sm mb-6">
            <h1 className="text-4xl leading-tight drop-shadow-lg mb-4">
              Hi, I am <span className="text-orange-600">Orbi</span>
            </h1>
            <p className="text-sm leading-relaxed drop-shadow-md mb-6">
              Welcome to the Learning app, that was created for project
              Shipwrecked
            </p>
            <a
              href="#intro"
              className="group relative inline-flex h-12 items-center overflow-hidden bg-cyan-900 px-6 font-medium text-neutral-200 rounded-full text-sm drop-shadow-lg"
            >
              <span>Get Started</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
            <button
              onClick={handleDocsClick}
              className="w-full h-14 imgbg rounded-[35px] text-white text-center text-xl flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer relative z-50 border-none outline-none"
            >
              Docs
            </button>
            <button
              onClick={handleLoginClick}
              className="w-full h-14 imgbg rounded-[35px] text-white text-center text-xl flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer relative z-50 border-none outline-none font-mono"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Layout (md and up) */}
      <div className="hidden md:block p-10 h-full">
        <div className="grid grid-cols-5 grid-rows-5 gap-0 min-h-[90vh] w-full">
          <div className="col-start-1 col-end-5 row-start-1 row-end-2 imgbg h-full rounded-tl-[70px] rounded-tr-[70px] p-5">
            <Navbar />
          </div>
          <div className="col-start-5 col-end-6 row-start-1 row-end-2 imgbg h-full">
            <div className="w-full h-full rounded-bl-[70px] bg-white flex justify-center">
              <button
                onClick={handleDocsClick}
                className="w-4/5 h-3/4 imgbg rounded-[70px] text-white text-center text-3xl flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer relative z-50 border-none outline-none"
              >
                Docs
              </button>
            </div>
          </div>

          <div className="col-start-1 col-end-6 row-start-2 row-end-5 imgbg h-full rounded-tr-[70px] rounded-bl-[70px]">
            <div className="w-full h-full flex items-center ">
              <div className="w-full md:w-1/3 flex items-center p-4 sm:p-6 md:p-8 lg:p-10 z-30 relative">
                <div className="text-white text-start font-semibold max-w-lg">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  leading-tight drop-shadow-lg">
                    Hi, I am <span className="text-orange-600">Orbi</span>
                  </h1>
                  <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base leading-relaxed drop-shadow-md">
                    Welcome to the Learning app, that was created for project
                    Shipwrecked
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
          <div className="col-start-1 col-end-2 row-start-5 row-end-6 imgbg h-full">
            <div className="w-full h-full rounded-tr-[70px] bg-white flex items-end justify-center">
              <div className="w-4/5 h-3/4 imgbg  rounded-[70px] flex justify-center text-white text-center text-3xl items-center">
                <button
                  onClick={handleLoginClick}
                  className="w-4/5 h-3/4 imgbg rounded-[70px] text-white text-center text-3xl flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer relative z-50 border-none outline-none font-mono"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-end-6 row-start-5 row-end-6 imgbg h-full rounded-br-[70px] rounded-bl-[70px]"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
