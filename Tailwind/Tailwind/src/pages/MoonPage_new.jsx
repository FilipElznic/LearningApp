import LearningPageTemplate from "../Components/LearningPageTemplate";
import moonImage from "../assets/arrowmoon.png";

function MoonPage() {
  const equipmentParts = [
    {
      title: "Craters & Impact Basins",
      content:
        "The Moon's surface is marked by numerous craters and impact basins, formed by collisions with asteroids and comets over billions of years.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Maria (Lunar Seas)",
      content:
        "The Moon's maria are large, dark, basaltic plains formed by ancient volcanic eruptions. They are less cratered than the highlands and are primarily located on the side of the Moon facing Earth.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Highlands",
      content:
        "The lighter, rougher areas are called highlands. These are older than the maria and are composed mostly of anorthosite rock, giving them a bright appearance.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "No Atmosphere",
      content:
        "The Moon has a very thin atmosphere, called an exosphere, which is not capable of supporting human life. This lack of atmosphere means there is no weather, and temperatures can vary dramatically.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Mobility Harness",
      content:
        "Contains structural support and attachment points for tools and tethers to prevent floating away.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Mobility Joints & Thermal Boots",
      content:
        "Designed for flexibility in microgravity. Boots have thermal and micrometeoroid protection, and some variants have magnetic soles for spacecraft surface work.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <LearningPageTemplate
      pageTitle="MOON"
      imageSrc={moonImage}
      imageAlt="Moon"
      equipmentParts={equipmentParts}
    />
  );
}

export default MoonPage;
