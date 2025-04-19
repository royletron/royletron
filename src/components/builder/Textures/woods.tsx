import React from "react";

import korina from "./imgs/korina";
import swamp from "./imgs/swamp";
import maple from "./imgs/maple";
import roastedMaple from "./imgs/roasted";
import flameRoastedMaple from "./imgs/flame_roasted";
import roseWood from "./imgs/rosewood";

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
