import LearningPageTemplate from "../Components/LearningPageTemplate";
import earthImage from "../assets/arrowearth.png";

function EarthPage() {
  const equipmentParts = [
    {
      title: "Polar Ice & Climate Zones",
      content:
        "Though not fully visible in this image, the polar regions are critical to Earth's climate. Earth's rotation and tilt create distinct climate zones from the equator to the poles.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Atmosphere & Weather Systems",
      content:
        "The atmosphere is a complex system of gases surrounding Earth, playing a crucial role in weather patterns and climate. It protects life by filtering harmful solar radiation and reducing temperature extremes.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Continental Landmasses",
      content:
        "The land areas visible are major continents, including Asia, Europe, and Africa. These regions contain diverse terrains such as mountains, deserts, forests, and plains.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Oceans & Water Bodies",
      content:
        "The Earth's oceans cover more than 70% of its surface, playing a vital role in regulating climate and supporting marine life.",
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
      pageTitle="EARTH"
      imageSrc={earthImage}
      imageAlt="Earth"
      equipmentParts={equipmentParts}
    />
  );
}

export default EarthPage;
