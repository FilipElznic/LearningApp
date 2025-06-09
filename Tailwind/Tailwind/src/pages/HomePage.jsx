import Nav from "../components/Nav";

function HomePage() {
  return (
    <>
      <div className="h-[200vh] w-full  flex flex-col p-10">
        <div className="grid grid-cols-5 grid-rows-9 w-full h-full ">
          <div className="bg-white rounded-tl-[50px] rounded-bl-[50px] p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
            <p className="text-gray-600 mt-2">Your learning journey continues here</p>
          </div>
          
          <div className="col-span-3 row-span-8 bg-white p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Learning Dashboard</h1>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Current Progress</h3>
                {/* Add progress charts or statistics here */}
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Recent Courses</h3>
                {/* Add course list here */}
              </div>
            </div>
          </div>

          <div className="row-span-4 col-start-5 bg-white rounded-tr-[50px] rounded-br-[50px] p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
            <ul className="space-y-4">
              <li className="text-gray-700">JavaScript Basics - 2:00 PM</li>
              <li className="text-gray-700">React Fundamentals - 4:00 PM</li>
            </ul>
          </div>

          <div className="row-span-2 col-start-5 row-start-6 bg-white rounded-tr-[50px] rounded-br-[50px] p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Quick Actions</h2>
            <div className="mt-4 space-y-2">
              <button className="w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-200">Start Learning</button>
              <button className="w-full px-4 py-2 text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-200">Join Session</button>
            </div>
          </div>

          <div className="row-span-6 col-start-1 row-start-3 bg-white rounded-tl-[50px] rounded-bl-[50px] p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Learning Path</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium">Web Development</h3>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="w-3/4 bg-gray-600 h-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 col-start-2 row-start-9 bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recent Achievements</h2>
              <button className="text-gray-600 hover:text-gray-800">View All</button>
            </div>
          </div>

          {/* Keep the existing black sections as accent elements */}
          <div className="col-start-5 row-start-5">
            <div className="w-full h-full   bg-white flex  justify-center items-center ">
              <div className=" bg-black rounded-tl-[50px] rounded-bl-[50px]  text-white  w-full h-full">
                
              </div>
            </div>
          </div>
          <div className="col-start-5 row-start-8">
            <div className="w-full h-full   bg-white flex  justify-center items-center ">
              <div className=" bg-black rounded-tl-[50px] rounded-bl-[50px]  text-white  w-full h-full">
                
              </div>
            </div>
          </div>
          <div className="col-start-1 row-start-9">
            <div className="w-full h-full   bg-white flex  justify-center items-center ">
              <div className=" bg-black rounded-tr-[50px]   w-full h-full">
                
              </div>
            </div>
          </div>
          <div className="col-start-1 row-start-2">
            <div className="w-full h-full   bg-white flex  justify-center items-center ">
              <div className=" bg-black rounded-tr-[50px] rounded-br-[50px]  text-white  w-full h-full">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[20vh]"> </div>
    </>
  );
}

export default HomePage;
