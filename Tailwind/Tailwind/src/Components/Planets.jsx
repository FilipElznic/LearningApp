import { PlanetMessage, PlanetMessageMirrored } from "./Planet";

function Plantes() {
  return (
    <>
      <PlanetMessageMirrored
        planetModel="https://prod.spline.design/7Vc5k44drKR-Q-m8/scene.splinecode"
        heading="Mercury"
        text="Mercury is the smallest planet in the Solar System and the closest to the Sun, orbiting at a distance of 57.9 million kilometers. It has a rocky surface, no atmosphere, and extreme temperature differences between day and night."
      />
      <PlanetMessage
        planetModel="https://prod.spline.design/bUkM4hZh5G-Joh5D/scene.splinecode"
        heading="Venus"
        text="Venus orbits the Sun at a distance of 108.2 million kilometers. Often called Earth’s twin due to its similar size, it has a thick, toxic atmosphere and surface temperatures hot enough to melt lead."
      />
      <PlanetMessageMirrored
        heading="Earth"
        text="Earth is the third planet from the Sun, located about 149.6 million kilometers away. It is the only known planet that supports life, with abundant water and a breathable atmosphere.

"
        planetModel="https://prod.spline.design/yQDRf1UA3BphLTml/scene.splinecode"
      />
      <PlanetMessage
        planetModel="https://prod.spline.design/1JKff7iDGmGzgd3y/scene.splinecode"
        heading="Mars"
        text="Mars, known as the Red Planet, is located 227.9 million kilometers from the Sun. It has a cold, dry surface, and is home to the tallest volcano and the largest canyon in the Solar System."
      />
      <PlanetMessageMirrored
        planetModel="https://prod.spline.design/qsvoIQ-R1ruz-RMD/scene.splinecode"
        heading="Jupiter"
        text="Jupiter is a gas giant situated 778.5 million kilometers from the Sun. It is the largest planet in the Solar System and is famous for its Great Red Spot, a massive storm system."
      />
      <PlanetMessage
        planetModel="https://prod.spline.design/Dnm8CT0GWVtlbFCX/scene.splinecode"
        heading="Saturn"
        text="Saturn orbits the Sun at a distance of 1,434 million kilometers. It is best known for its stunning ring system and is mostly made up of hydrogen and helium.

"
      />
      <PlanetMessageMirrored
        planetModel="https://prod.spline.design/Z0efpkXVV0becsVc/scene.splinecode"
        heading="Uranus"
        text="Uranus is located about 2,871 million kilometers from the Sun. It is an ice giant with a pale blue-green color and is unique because it rotates on its side."
      />
      <PlanetMessage
        planetModel="https://prod.spline.design/3II3FSazQK058EQj/scene.splinecode"
        heading="Neptune"
        text="Neptune is the most distant planet, orbiting at 4,495 million kilometers from the Sun. It is a cold, blue ice giant with powerful winds and a dynamic atmosphere."
      />
    </>
  );
}

export default Plantes;
