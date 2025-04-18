import { useSpring, animated, useSpringValue } from "@react-spring/web";
import React, { useEffect } from "react";

import korina from "./imgs/korina_texture.jpg";
import swamp from "./imgs/swamp_texture.jpg";
import maple from "./imgs/maple.jpg";
import roastedMaple from "./imgs/roasted_maple_texture.jpg";
import flameRoastedMaple from "./imgs/flame_roasted_maple_texture.jpg";
import roseWood from "./imgs/rosewood_texture.jpg";

export enum BodyWoodTextures {
  KORINA = "korina",
  SWAMP_ASH = "swamp-ash",
}

export enum NeckWoodTextures {
  MAPLE = "maple",
  ROAST_MAPLE = "roast-maple",
  FLAME_ROAST_MAPLE = "flame-roast-maple",
}

export enum FretboardWoodTextures {
  ROSEWOOD = "rosewood",
  MAPLE = "maple",
  ROAST_MAPLE = "roast-maple",
  FLAME_ROAST_MAPLE = "flame-roast-maple",
}

export const WoodPattern = ({
  id,
  width,
  height,
  src,
}: {
  id: string;
  width: number;
  height: number;
  src: string;
}) => (
  <pattern
    id={id}
    patternUnits="userSpaceOnUse"
    width={width * 2}
    height={height * 2}
  >
    <image href={src} x="0" y="0" />
    <image
      href={src}
      x={width}
      y="0"
      style={{
        transformBox: "content-box",
        transform: "scaleX(-1)",
        transformOrigin: "unset",
      }}
    />
    <image
      href={src}
      x="0"
      y={height}
      style={{
        transformBox: "content-box",
        transform: "scaleY(-1)",
        transformOrigin: "unset",
      }}
    />
    <image
      href={src}
      x={width}
      y={height}
      style={{
        transformBox: "content-box",
        transform: "scale(-1)",
        transformOrigin: "unset",
      }}
    />
  </pattern>
);

export const WoodTextures = {
  ...BodyWoodTextures,
  ...NeckWoodTextures,
  ...FretboardWoodTextures,
};
export type WoodTextures =
  | BodyWoodTextures
  | NeckWoodTextures
  | FretboardWoodTextures;

type WoodTexture = {
  filter: () => JSX.Element;
  baseColor: string;
};

export const woods: Record<WoodTextures, WoodTexture> = {
  [WoodTextures.FLAME_ROAST_MAPLE]: {
    baseColor: "#a16b04",
    filter: () => (
      <WoodPattern
        id={WoodTextures.FLAME_ROAST_MAPLE}
        width={flameRoastedMaple.width}
        height={flameRoastedMaple.height}
        src={flameRoastedMaple.src}
      />
    ),
  },
  [WoodTextures.MAPLE]: {
    baseColor: "#edcd97",
    filter: () => (
      <WoodPattern
        id={WoodTextures.MAPLE}
        width={maple.width}
        height={maple.height}
        src={maple.src}
      />
    ),
  },
  [WoodTextures.ROSEWOOD]: {
    baseColor: "#661f00",
    filter: () => (
      <WoodPattern
        id={WoodTextures.ROSEWOOD}
        width={roseWood.width}
        height={roseWood.height}
        src={roseWood.src}
      />
    ),
  },
  [WoodTextures.ROAST_MAPLE]: {
    baseColor: "#99682f",
    filter: () => (
      <WoodPattern
        id={WoodTextures.ROAST_MAPLE}
        width={roastedMaple.width}
        height={roastedMaple.height}
        src={roastedMaple.src}
      />
    ),
  },
  [WoodTextures.KORINA]: {
    baseColor: "#f2bd78",
    filter: () => (
      <WoodPattern
        id={WoodTextures.KORINA}
        width={korina.width}
        height={korina.height}
        src={korina.src}
      />
    ),
  },
  [WoodTextures.SWAMP_ASH]: {
    baseColor: "#fabe7f",
    filter: () => (
      <WoodPattern
        id={WoodTextures.SWAMP_ASH}
        width={swamp.width}
        height={swamp.height}
        src={swamp.src}
      />
    ),
  },
};

export const WoodsDef = () => {
  return (
    <>
      {Object.keys(woods).map((wood, idx) => {
        return (
          <React.Fragment key={`wood_${idx}`}>
            {woods[wood].filter()}
          </React.Fragment>
        );
      })}
    </>
  );
};

// export type WoodsProps = {
//   texture: WoodTextures;
//   id: string;
//   color?: string;
// };

// function WoodColor({ color }: { color?: string }) {
//   const floodColor = useSpringValue("rgba(130, 130, 130, 100)");

//   useEffect(() => {
//     floodColor.start(color || "rgba(130, 130, 130, 100)");
//   }, [color, floodColor]);

//   if (!color) {
//     return null;
//   }

//   console.log(floodColor);

//   return (
//     <>
//       <animated.feFlood result="color" style={{ floodColor }} />
//       <feColorMatrix
//         type="luminanceToAlpha"
//         values="0"
//         in="grainColor"
//         result="grainBW"
//       ></feColorMatrix>
//       <feBlend in2="grainBW" in="color" mode="soft-light" />
//     </>
//   );
// }

// export default function Wood({ texture, id, color }: WoodsProps) {
//   const wood = woods[texture];

//   return (
//     <filter id={id}>
//       <feTurbulence
//         type="fractalNoise"
//         result="grain"
//         baseFrequency={wood.baseFrequency}
//       />
//       <feColorMatrix in="grain" result="grainColor" values={wood.colorMatrix} />
//       <WoodColor color={color} />
//     </filter>
//   );
// }
