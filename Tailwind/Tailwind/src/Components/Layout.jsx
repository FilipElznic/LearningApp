import planet from "../assets/planetearth.jpg";
import spaceship from "../assets/rocketship.jpg";
import astronaut from "../assets/astronaut.png";
import fullmoon from "../assets/fullmoon.jpg";


function Layout() {
  return (
    <>
      <div className=" w-full px-4 sm:px-6 lg:px-8 xl:w-2/3 h-full mt-24 sm:mt-32 md:mt-40 lg:mt-48  bg-white">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          Unmatched experience
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-6 sm:mt-8 font-extralight text-gray-900">
          This learning platform is designed to provide an unmatched experience
          for learning about space for every generation.
        </p>

        <div className="w-full h-full mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4 group/sections">
         
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
      
              <div className="group/item w-full sm:w-1/3 h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl blackgradient relative z-10 cursor-pointer transition-all duration-300 group-hover/sections:brightness-50 group-hover/sections:opacity-70 hover:!brightness-100 hover:!opacity-100 hover:scale-105 hover:z-20" onClick={() => {
                window.location.href = "/astronaut";
              }}>
                <img
                  src={astronaut}
                  className="object-contain w-full h-full rotate-12 transition-transform duration-300 group-hover/item:rotate-6"
                />
              </div>

              <div className="group/item w-full sm:w-2/3 h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl blackgradient relative z-10 cursor-pointer transition-all duration-300 group-hover/sections:brightness-50 group-hover/sections:opacity-70 hover:!brightness-100 hover:!opacity-100 hover:scale-105 hover:z-20" onClick={() => {
                window.location.href = "/moon";
              }}>
                <img
                  src={fullmoon}
                  className="object-contain w-full h-full transition-transform duration-300 group-hover/item:scale-110"
                />
              </div>
            </div>
       

          <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div
              className="group/item w-full sm:w-2/3 h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl blackgradient relative z-10 text-white text-center text-9xl flex items-center justify-center font-bold cursor-pointer transition-all duration-300 group-hover/sections:brightness-50 group-hover/sections:opacity-70 hover:!brightness-100 hover:!opacity-100 hover:scale-105 hover:z-20"
              onClick={() => {
                window.location.href = "/earth";
              }}
            >
              <span className="transition-all duration-300 group-hover/item:scale-110">
                Earth
              </span>
              <img
                src={planet}
                className=" bottom-[-600px] left-[-520px] object-contain z-20 absolute"
              />
            </div>

            <div
              className="group/item w-full sm:w-1/3 h-[30vh] sm:h-[35vh] md:h-[40vh] rounded-2xl sm:rounded-3xl blackgradient relative z-10 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover/sections:brightness-50 group-hover/sections:opacity-70 hover:!brightness-100 hover:!opacity-100 hover:scale-105 hover:z-20"
              onClick={() => {
                window.location.href = "/spacecraft";
              }}
            >
              <img
                src={spaceship}
                className="object-contain w-full h-full rotate-12 transition-transform duration-300 group-hover/item:rotate-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[15vh] sm:h-[20vh] bg-white"></div>
    </>
  );
}

export default Layout;
