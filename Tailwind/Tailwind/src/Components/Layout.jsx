import planet from "../assets/planet.png";

function Layout() {
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:w-2/3 h-full mt-24 sm:mt-32 md:mt-40 lg:mt-48  bg-black">
        <img
          src={planet}
          className="absolute bottom-[-500px] left-[-300px] h-[110vh] z-20"
        />
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          Unmatched experience
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-6 sm:mt-8 font-extralight text-gray-900">
          This learning platform is designed to provide an unmatched experience
          for learning about space for every generation.
        </p>
        <div className="w-full h-full mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4">
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full sm:w-1/3 h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl blackgradient relative z-10"></div>
            <div className="w-full sm:w-2/3 h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl blackgradient relative z-10"></div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full sm:w-2/3 h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl blackgradient relative z-10"></div>
            <div className="w-full sm:w-1/3 h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl blackgradient relative z-10"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[15vh] sm:h-[20vh] "></div>
    </>
  );
}

export default Layout;
