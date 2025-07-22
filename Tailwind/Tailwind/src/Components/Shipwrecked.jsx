import "../blocky-font.css";

function Shipwrecked() {
  return (
    <div className="h-screen gap-5 flex items-center flex-col w-full">
      <h3 className="text-6xl font-extrabold text-white mb-8 text-center tracking-widest font-blocky blocky-font">
        Shipwrecked
      </h3>

      {/* First Section - About the Hackathon */}
      <div className="w-2/3 h-full bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 relative overflow-hidden">
        {/* Sea Wave SVG Background */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-20"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-blue-400"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-blue-400 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.75 3a.75.75 0 00-1.5 0v6.75H5a.75.75 0 000 1.5h6.25V18a.75.75 0 001.5 0v-6.75H19a.75.75 0 000-1.5h-6.25V3z" />
            </svg>
          </div>
          <h4 className="text-3xl font-bold text-white mb-4 font-blocky">
            Innovation at Sea
          </h4>
          <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
            This project is created via project shipwrecked by Filip Elznic. It
            is a unique hackathon on a private island. The location is in the
            USA in Boston.
          </p>
        </div>
      </div>

      {/* Second Section - Challenge Details */}
      <div className="w-2/3 h-full bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 relative overflow-hidden">
        {/* Ocean Depth SVG Background */}
        <svg
          className="absolute top-0 right-0 w-full h-40 opacity-15"
          viewBox="0 0 1200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C400,80 800,40 1200,100 L1200,0 Z"
            fill="currentColor"
            className="text-cyan-400"
          />
          <path
            d="M0,40 C300,120 700,60 1200,140 L1200,0 Z"
            fill="currentColor"
            className="text-blue-500 opacity-60"
          />
        </svg>

        <div className="w-full py-16 px-10 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <svg
              className="w-12 h-12 text-cyan-400 mr-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
            <h4 className="text-3xl font-bold text-white font-blocky">
              Chart Your Course
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200">
            <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-yellow-400 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <h5 className="text-xl font-semibold">Future</h5>
              </div>
              <p className="text-sm">
                This oportunity allowed me to think more about my future job and
                even explore new career paths.
              </p>
            </div>

            <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-green-400 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <h5 className="text-xl font-semibold">Self Improvement</h5>
              </div>
              <p className="text-sm">
                This project helped me practise some new technologies and push
                me into more coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipwrecked;
