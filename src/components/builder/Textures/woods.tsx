import { useSpring, animated, useSpringValue } from "@react-spring/web";
import { useEffect } from "react";

export enum BodyWoodTextures {
  KORINA = "korina",
  AMERICAN_WALNUT = "american-walnut",
  SWAMP_ASH = "swamp-ash",
}

export enum NeckWoodTextures {
  MAPLE = "maple",
  ROAST_MAPLE = "roast-maple",
  FLAME_ROAST_MAPLE = "flame-roast-maple",
}

export enum FretboardWoodTextures {
  ROSEWOOD = "rosewood",
  EBONY = "ebony",
  MAPLE = "maple",
  ROAST_MAPLE = "roast-maple",
  FLAME_ROAST_MAPLE = "flame-roast-maple",
}

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
  [WoodTextures.EBONY]: {
    baseColor: "#575250",
    filter: () => (
      <filter id={WoodTextures.EBONY} x="0" y="0" width="100%" height="100%">
        <feTurbulence
          result="noise1"
          type="turbulence"
          seed="5"
          baseFrequency="0.002 0.006"
          numOctaves="30"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise2"
          type="fractalNoise"
          seed="4"
          baseFrequency="0.001 0.02"
          numOctaves="7"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise3"
          type="turbulence"
          seed="3"
          baseFrequency="0.002 0.0005"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feDiffuseLighting
          in="noise1"
          result="lighting1"
          surfaceScale="0"
          diffuseConstant="0.9"
        >
          <feDistantLight azimuth="235" elevation="45" />
        </feDiffuseLighting>
        <feDiffuseLighting
          in="noise2"
          result="lighting2"
          surfaceScale="-3"
          diffuseConstant="0.33"
        >
          <feDistantLight azimuth="125" elevation="65" />
        </feDiffuseLighting>
        <feBlend
          in="lighting1"
          in2="lighting2"
          result="combined1"
          mode="overlay"
        />
        <feBlend
          in="combined1"
          in2="lighting3"
          result="combined2"
          mode="overlay"
        />
        <feBlend in="SourceGraphic" in2="combined2" mode="overlay" />
      </filter>
    ),
  },
  [WoodTextures.FLAME_ROAST_MAPLE]: {
    baseColor: "#a16b04",
    filter: () => (
      <filter
        id={WoodTextures.FLAME_ROAST_MAPLE}
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <feTurbulence
          result="noise1"
          type="turbulence"
          seed="5"
          baseFrequency="0.002 0.006"
          numOctaves="30"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise2"
          type="fractalNoise"
          seed="4"
          baseFrequency="0.001 0.02"
          numOctaves="7"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise3"
          type="turbulence"
          seed="3"
          baseFrequency="0.002 0.0005"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feDiffuseLighting
          in="noise1"
          result="lighting1"
          surfaceScale="0"
          diffuseConstant="0.9"
        >
          <feDistantLight azimuth="235" elevation="45" />
        </feDiffuseLighting>
        <feDiffuseLighting
          in="noise2"
          result="lighting2"
          surfaceScale="-3"
          diffuseConstant="0.33"
        >
          <feDistantLight azimuth="125" elevation="65" />
        </feDiffuseLighting>
        <feBlend
          in="lighting1"
          in2="lighting2"
          result="combined1"
          mode="overlay"
        />
        <feBlend
          in="combined1"
          in2="lighting3"
          result="combined2"
          mode="overlay"
        />
        <feColorMatrix
          in2="combined2"
          result="matrix"
          type="luminanceToAlpha"
        />
        <feBlend in="SourceGraphic" in2="matrix" mode="overlay" />
      </filter>
    ),
  },
  [WoodTextures.MAPLE]: {
    baseColor: "#f2d29f",
    filter: () => (
      <filter id={WoodTextures.MAPLE} x="0" y="0" width="100%" height="100%">
        <feTurbulence
          result="noise1"
          type="turbulence"
          seed="5"
          baseFrequency="0.002 0.006"
          numOctaves="30"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise2"
          type="fractalNoise"
          seed="4"
          baseFrequency="0.001 0.02"
          numOctaves="7"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise3"
          type="turbulence"
          seed="3"
          baseFrequency="0.002 0.0005"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feDiffuseLighting
          in="noise1"
          result="lighting1"
          surfaceScale="0"
          diffuseConstant="0.9"
        >
          <feDistantLight azimuth="235" elevation="45" />
        </feDiffuseLighting>
        <feDiffuseLighting
          in="noise2"
          result="lighting2"
          surfaceScale="-3"
          diffuseConstant="0.33"
        >
          <feDistantLight azimuth="125" elevation="65" />
        </feDiffuseLighting>
        <feBlend
          in="lighting1"
          in2="lighting2"
          result="combined1"
          mode="overlay"
        />
        <feBlend
          in="combined1"
          in2="lighting3"
          result="combined2"
          mode="overlay"
        />
        <feColorMatrix
          in2="combined2"
          result="matrix"
          type="luminanceToAlpha"
        />
        <feBlend in="SourceGraphic" in2="matrix" mode="overlay" />
      </filter>
    ),
  },
  [WoodTextures.ROSEWOOD]: {
    baseColor: "#965436",
    filter: () => (
      <filter id={WoodTextures.ROSEWOOD} x="0" y="0" width="100%" height="100%">
        <feTurbulence
          result="noise2"
          type="fractalNoise"
          seed="4"
          baseFrequency="0.2 0.015"
          numOctaves="1"
          stitchTiles="stitch"
        ></feTurbulence>
        <feDiffuseLighting
          in="noise2"
          result="lighting2"
          surfaceScale="-5"
          diffuseConstant="0.3"
        >
          <feDistantLight azimuth="225" elevation="75"></feDistantLight>
        </feDiffuseLighting>
        <feBlend in="SourceGraphic" in2="lighting2" mode="overlay"></feBlend>
      </filter>
    ),
  },
  [WoodTextures.ROAST_MAPLE]: {
    baseColor: "#99682f",
    filter: () => (
      <filter
        id={WoodTextures.ROAST_MAPLE}
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <feTurbulence
          result="noise2"
          type="fractalNoise"
          seed="4"
          baseFrequency="0.3 0.05"
          numOctaves="1"
          stitchTiles="stitch"
        ></feTurbulence>
        <feDiffuseLighting
          in="noise2"
          result="lighting2"
          surfaceScale="-5"
          diffuseConstant="0.3"
        >
          <feDistantLight azimuth="225" elevation="75"></feDistantLight>
        </feDiffuseLighting>
        <feBlend in="SourceGraphic" in2="lighting2" mode="overlay"></feBlend>
      </filter>
    ),
  },
  [WoodTextures.KORINA]: {
    baseColor: "#f2bd78",
    filter: () => (
      <filter id={WoodTextures.KORINA} x="0" y="0" width="100%" height="100%">
        <feTurbulence
          result="noise1"
          type="turbulence"
          seed="5"
          baseFrequency="0.06 0.02"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise2"
          type="fractalNoise"
          seed="4"
          baseFrequency="0.1 0.01"
          numOctaves="5"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise3"
          type="turbulence"
          seed="3"
          baseFrequency="0.02 0.005"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feDiffuseLighting
          in="noise1"
          result="lighting1"
          surfaceScale="0"
          diffuseConstant="0.9"
        >
          <feDistantLight azimuth="235" elevation="45" />
        </feDiffuseLighting>
        <feDiffuseLighting
          in="noise2"
          result="lighting2"
          surfaceScale="-2"
          diffuseConstant="0.3"
        >
          <feDistantLight azimuth="225" elevation="75" />
        </feDiffuseLighting>
        <feBlend
          in="lighting1"
          in2="lighting2"
          result="combined1"
          mode="overlay"
        />
        <feBlend
          in="combined1"
          in2="lighting3"
          result="combined2"
          mode="overlay"
        />
        <feBlend in="SourceGraphic" in2="combined2" mode="overlay" />
      </filter>
    ),
  },
  [WoodTextures.SWAMP_ASH]: {
    baseColor: "#fabe7f",
    filter: () => (
      <filter
        id={WoodTextures.SWAMP_ASH}
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".1 .01"
          result="noise2"
          stitchTiles="stitch"
        />
        <feDiffuseLighting
          in="noise2"
          result="lighting2"
          surfaceScale="-5"
          diffuseConstant="0.3"
        >
          <feDistantLight azimuth="225" elevation="75" />
        </feDiffuseLighting>
        <feBlend in="SourceGraphic" in2="lighting2" mode="overlay" />
      </filter>
    ),
  },
  [WoodTextures.AMERICAN_WALNUT]: {
    baseColor: "#4d2e1e",
    filter: () => (
      <filter
        id={WoodTextures.AMERICAN_WALNUT}
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <feTurbulence
          result="noise1"
          type="turbulence"
          seed="5"
          baseFrequency="0.06 0.02"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise2"
          type="fractalNoise"
          seed="4"
          baseFrequency="0.3 0.05"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feTurbulence
          result="noise3"
          type="turbulence"
          seed="3"
          baseFrequency="0.02 0.005"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feDiffuseLighting
          in="noise1"
          result="lighting1"
          surfaceScale="0"
          diffuseConstant="0.9"
        >
          <feDistantLight azimuth="235" elevation="45" />
        </feDiffuseLighting>
        <feDiffuseLighting
          in="noise2"
          result="lighting2"
          surfaceScale="-2"
          diffuseConstant="0.3"
        >
          <feDistantLight azimuth="225" elevation="75" />
        </feDiffuseLighting>
        <feDiffuseLighting
          in="noise3"
          result="lighting3"
          surfaceScale="5"
          diffuseConstant="0.55"
        >
          <feDistantLight azimuth="225" elevation="90" />
        </feDiffuseLighting>
        <feBlend
          in="lighting1"
          in2="lighting2"
          result="combined1"
          mode="overlay"
        />
        <feBlend
          in="combined1"
          in2="lighting3"
          result="combined2"
          mode="overlay"
        />
        <feBlend in="SourceGraphic" in2="combined2" mode="overlay" />
      </filter>
    ),
  },
};

export const WoodsDef = () => {
  return (
    <>
      {Object.keys(woods).map((wood) => {
        return woods[wood].filter();
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
