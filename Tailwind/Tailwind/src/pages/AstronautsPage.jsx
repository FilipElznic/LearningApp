import LearningPageTemplate from "../Components/LearningPageTemplate";
import astronaut from "../assets/arrowastronout.png";

function AstronautsPage() {
  const equipmentParts = [
    {
      title: "Primary Life Support System",
      content:
        "Controls oxygen, temperature, and removes carbon dioxide. Also includes telemetry systems and controls.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Helmet & Visor Assembly",
      content:
        "Provides head protection, radio communication, and sun shielding. The gold visor protects against harmful solar radiation.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Environmental Sensors & Cameras",
      content:
        "Cameras and lights mounted on the helmet for visual recording and assisting mission control with visibility.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Gloved Controls",
      content:
        "The gloves are specially designed to allow dexterity while providing protection against vacuum and temperature extremes.",
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
      pageTitle="Astronauts"
      imageSrc={astronaut}
      imageAlt="Astronaut"
      equipmentParts={equipmentParts}
    />
  );
}

export default AstronautsPage;
