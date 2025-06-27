import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
function HomePage() {
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    await signOut();
    // Optionally, redirect or show a message
  };

  return (
    <>
      {/* Main content */}
      <div className="h-[200vh] w-full  flex flex-col p-10 bg-white">
        <div className="grid grid-cols-5 grid-rows-8 gap-0  h-full ">
          <div className="col-span-5 row-span-3 rounded-t-3xl rounded-br-3xl bg-black flex flex-col items-center ">
            <nav className="w-full flex items-center justify-between px-10 py-4 bg-transparent text-white rounded-b-3xl shadow-lg mb-6">
              <div className="text-2xl font-bold tracking-wide">
                LearningApp
              </div>
              <div className="flex items-center gap-4">
                {user && (
                  <>
                    <Link
                      to="/profile"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </>
                )}
              </div>
            </nav>
            <div className="flex flex-row w-full">
              <div className=" m-5 w-1/2 pt-5 ml-20">
                <h1 className="text-white text-8xl font-bold  mt-10 ">
                  Welcome <br></br>aboard
                </h1>
                <p className="mt-10 text-white text-lg">
                  em ipsum dolor sit amet consectetur adipisicing elit. Alias
                  adipisci suscipit quasi quis itaque cumque mollitia voluptate
                  vitae maxime. Assumenda libero atque provident officiis
                  adipisci dolores. Repellat ad veniam blanditiis?
                </p>
              </div>
              <div className="m-5 w-1/2 h-[70vh] overflow-hidden">
                <Spline
                  scene="https://prod.spline.design/azadXvKhi40FDGgp/scene.splinecode"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="row-start-4 rounded-bl-[50px] bg-black flex items-center justify-center">
            {/* Star Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
            </svg>
          </div>
          <div className="col-span-3 row-span-3 row-start-4 bg-black flex flex-col items-center justify-center  shadow-lg">
            {/* Space Learning Design */}
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 mb-4 text-white drop-shadow-lg"
                fill="none"
                viewBox="0 0 64 64"
              >
                <circle cx="32" cy="32" r="28" fill="#1e293b" />
                <circle cx="32" cy="32" r="18" fill="#6366f1" />
                <circle cx="44" cy="24" r="4" fill="#fbbf24" />
                <circle cx="24" cy="44" r="2" fill="#f472b6" />
                <circle cx="40" cy="40" r="1.5" fill="#38bdf8" />
              </svg>
              <h2 className="text-4xl font-extrabold text-white mb-2 text-center drop-shadow-lg">
                Explore the Universe of Knowledge!
              </h2>
              <p className="text-lg text-indigo-200 mb-6 text-center max-w-md">
                Embark on your space learning journey. Complete tasks, earn
                stars, and unlock new galaxies of wisdom!
              </p>
              <a
                href="/tasks"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow-lg transition text-lg"
              >
                Start Your Mission
              </a>
            </div>
          </div>
          <div className="col-span-5 row-span-2 col-start-1 row-start-7 rounded-b-[50px] rounded-tl-[50px] bg-black"></div>
          <div className="col-start-5 row-start-6 rounded-tr-[50px] bg-black"></div>
          <div className="row-span-2 col-start-1 row-start-5 bg-black flex items-center justify-start">
            <div className="w-1/2 h-full bg-white rounded-r-[150px] "></div>
          </div>
          <div className="row-span-2 col-start-5 row-start-4 bg-black flex items-center justify-end">
            <div className="w-1/2 h-full bg-white rounded-l-[150px] "></div>
          </div>
        </div>
      </div>

      <div className="w-full h-[20vh] bg-white"> </div>
    </>
  );
}

export default HomePage;
