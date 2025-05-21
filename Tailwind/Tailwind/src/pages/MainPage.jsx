import "../App.css";

function MainPage() {
  return (
    <div className="min-h-screen bg-transparent ">
      <div className="h-screen  imagebg">
        <div className="text-white text-start font-semibold absolute top-1/4 pl-10">
          <h1 className="text-8xl ">
            Are you ready <br></br> to explore?
          </h1>
          <p className="w-1/3 mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus illo voluptatem sit reprehenderit perspiciatis possimus
            ipsum esse illum molestias dolore dicta laudantium accusantium
            aliquam incidunt expedita, nobis cum. Voluptatem, vel?
          </p>
          <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-cyan-900 px-6 font-medium text-neutral-200 rounded-full mt-8 ">
            <span>Get Started</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="h-screen  "></div>
      <div className="h-screen bg-white"></div>
      <div className="h-screen bg-white"></div>
    </div>
  );
}

export default MainPage;
