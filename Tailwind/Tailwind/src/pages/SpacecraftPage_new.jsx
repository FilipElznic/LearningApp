import LearningPageTemplate from "../Components/LearningPageTemplate";
import rocketImage from "../assets/arrowrocket.png";

function SpacecraftPage() {
  const equipmentParts = [
    {
      title: "Solid Rocket Boosters",
      content:
        "Provide the main thrust during the first two minutes of launch, helping lift the shuttle through Earth's atmosphere. Jettisoned once their fuel is spent.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "External Fuel Tank",
      content:
        "Holds liquid hydrogen and liquid oxygen to fuel the shuttle's main engines during launch. It's the only part not reused after launch.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Orbiter Vehicle",
      content:
        "The spacecraft portion where astronauts live and work. Equipped with engines, wings, and the payload bay. Returns to Earth for reuse.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Main Engines",
      content:
        "Located at the base of the orbiter, these engines burn fuel from the external tank to propel the shuttle into orbit.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      title: "Heat-Resistant Tiles",
      content:
        "Covers the orbiter to protect it during re-entry into Earth's atmosphere, where temperatures reach over 1,600°C (2,900°F).",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <LearningPageTemplate
      pageTitle="Spacecraft"
      imageSrc={rocketImage}
      imageAlt="Space Shuttle"
      equipmentParts={equipmentParts}
    />
  );
}

export default SpacecraftPage;
