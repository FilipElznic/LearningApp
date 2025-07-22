import PropTypes from "prop-types";

// Carousel Item Component
const CarouselItem = ({ text, className = "", spacing = 8 }) => (
  <span
    className={`text-2xl text-zinc-700 font-semibold ${className}`}
    style={{ marginRight: `${spacing}rem` }}
  >
    {text}
  </span>
);

CarouselItem.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  spacing: PropTypes.number,
};

// Single Carousel Row Component
const CarouselRow = ({
  words,
  direction = "left",
  speed = 20,
  spacing = 8,
  className = "",
}) => {
  const animationClass =
    direction === "left" ? "animate-slide" : "animate-slide-reverse";

  return (
    <div className={`relative w-full h-16 flex items-center ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div
          className={`flex ${animationClass} whitespace-nowrap`}
          style={{ "--animation-duration": `${speed}s` }}
        >
          {/* First set of words */}
          {words.map((word, index) => (
            <CarouselItem
              key={`first-${index}`}
              text={word}
              spacing={spacing / 4}
            />
          ))}

          {/* Duplicate set for seamless loop */}
          {words.map((word, index) => (
            <CarouselItem
              key={`second-${index}`}
              text={word}
              spacing={spacing / 4}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

CarouselRow.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  speed: PropTypes.number,
  spacing: PropTypes.number,
  className: PropTypes.string,
};

// Main Carousel Component
function Carousel({
  carousels = [],
  className = "",
  titleClassName = "text-3xl font-bold text-white text-center pt-12 mb-12",
}) {
  // Default carousel data
  const defaultCarousels = [
    {
      words: [
        "Exploration",
        "Discovery",
        "Innovation",
        "Knowledge",
        "Adventure",
        "Universe",
        "Learning",
        "Progress",
        "Community",
        "Excellence",
      ],
      direction: "left",
      speed: 20,
    },
    {
      words: [
        "Creativity",
        "Collaboration",
        "Achievement",
        "Dedication",
        "Inspiration",
        "Growth",
        "Success",
        "Vision",
        "Future",
        "Dreams",
      ],
      direction: "right",
      speed: 20,
    },
  ];

  const carouselData = carousels.length > 0 ? carousels : defaultCarousels;

  return (
    <div className={`w-full relative overflow-hidden my-20 ${className}`}>
      <div className="space-y-6">
        {carouselData.map((carousel, index) => (
          <CarouselRow
            key={index}
            words={carousel.words}
            direction={carousel.direction}
            speed={carousel.speed}
            spacing={carousel.spacing || 16}
            className={carousel.className}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes slide-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          
          .animate-slide {
            animation: slide var(--animation-duration, 20s) linear infinite;
          }
          
          .animate-slide-reverse {
            animation: slide-reverse var(--animation-duration, 20s) linear infinite;
          }
        `}
      </style>
    </div>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
  carousels: PropTypes.arrayOf(
    PropTypes.shape({
      words: PropTypes.arrayOf(PropTypes.string).isRequired,
      direction: PropTypes.oneOf(["left", "right"]),
      speed: PropTypes.number,
      spacing: PropTypes.number,
      className: PropTypes.string,
    })
  ),
  className: PropTypes.string,
  titleClassName: PropTypes.string,
};

export default Carousel;
