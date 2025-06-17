import Nav from "../components/Nav";

function HomePage() {
  return (
    <>
      <div className="h-[200vh] w-full  flex flex-col p-10 bg-white">
        <div className="grid grid-cols-5 grid-rows-8 gap-0  h-full ">
          <div className="col-span-5 row-span-3 rounded-t-3xl rounded-br-3xl bg-black flex flex-row items-center ">
            <div className="bg-orange-600 m-5 w-1/2 pt-5">
              <h1 className="text-white text-8xl font-bold  mt-10">
                Welcome <br></br>aboard
              </h1>
            </div>
            <div className="bg-orange-600 m-5 w-full ">
              <h1 className="text-white text-8xl font-bold  mt-10">
                Welcome <br></br>aboard
              </h1>
            </div>
          </div>
          <div className="row-start-4 rounded-bl-[50px] bg-black">2</div>
          <div className="col-span-3 row-span-3 row-start-4  bg-black">3</div>
          <div className="col-span-5 row-span-2 col-start-1 row-start-7 rounded-b-[50px] rounded-tl-[50px] bg-black">
            4
          </div>
          <div className="col-start-5 row-start-6 rounded-tr-[50px] bg-black">
            5
          </div>
          <div className="row-span-2 col-start-1 row-start-5 bg-black ">
            <div className="w-full h-full bg-white rounded-r-[50px] "></div>
          </div>
          <div className="row-span-2 col-start-5 row-start-4 bg-black">
            <div className="w-full h-full bg-white rounded-l-[50px] "></div>
          </div>
        </div>
      </div>

      <div className="w-full h-[20vh]"> </div>
    </>
  );
}

export default HomePage;
