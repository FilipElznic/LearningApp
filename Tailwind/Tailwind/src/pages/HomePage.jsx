import Nav from "../components/Nav";

function HomePage() {
  return (
    <>
      <div className="h-[200vh] w-full bg-black  flex flex-col p-10">
        <div className="grid grid-cols-5 grid-rows-9  w-full h-full">
          <div className="bg-white rounded-tl-[50px] rounded-bl-[50px]">1</div>
          <div className="col-span-3 row-span-8 bg-white">2</div>
          <div className="row-span-4 col-start-5 bg-white rounded-tr-[50px] rounded-br-[50px]">
            3
          </div>
          <div className="row-span-2 col-start-5 row-start-6 bg-white rounded-tr-[50px] rounded-br-[50px]">
            4
          </div>
          <div className="row-span-6 col-start-1 row-start-3 bg-white rounded-tl-[50px] rounded-bl-[50px]">
            6
          </div>
          <div className="col-span-4 col-start-2 row-start-9 bg-white rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]">
            7
          </div>
          <div className="col-start-5 row-start-5 ">
            <div className="w-full h-full   bg-white flex  justify-center items-center ">
              <div className=" bg-black rounded-tl-[50px] rounded-bl-[50px]  text-white  w-full h-full">
                0
              </div>
            </div>
          </div>
          <div className="col-start-5 row-start-8">
            <div className="w-full h-full   bg-white flex  justify-center items-center ">
              <div className=" bg-black rounded-tl-[50px] rounded-bl-[50px]  text-white  w-full h-full">
                0
              </div>
            </div>
          </div>
          <div className="col-start-1 row-start-9">
            <div className="w-full h-full   bg-white flex  justify-center items-center ">
              <div className=" bg-black rounded-tr-[50px]   w-full h-full">
                0
              </div>
            </div>
          </div>
          <div className="col-start-1 row-start-2">
            <div className="w-full h-full   bg-white flex  justify-center items-center ">
              <div className=" bg-black rounded-tr-[50px] rounded-br-[50px]  text-white  w-full h-full">
                0
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
