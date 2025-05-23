import { WoodPattern } from "./woods";

import tort from "./imgs/tort";
import pearl from "./imgs/pearl";

export enum PickguardTexture {
  RED_TORTOISESHELL = "Red_TortoiseShell",
  PEARL = "Pearl",
  BWB = "BWB",
  BLACK_SINGLEPLY = "Black_SinglePly",
  WHITE_SINGLEPLY = "White_SinglePly",
  CREAM_SINGLEPLY = "Cream_SinglePly",
  VINTAGE_WHITE_SINGLEPLY = "Vintage_White_SinglePly",
  GREEN_PERSPEX = "Green_Perspex",
  ORANGE_PERSPEX = "Orange_Perspex",
}

export const PickguardMap = {
  [PickguardTexture.RED_TORTOISESHELL]: {
    name: "Red Tortoiseshell",
    price: 0,
  },
  [PickguardTexture.PEARL]: {
    name: "Pearl",
    price: 0,
  },
  [PickguardTexture.BWB]: {
    name: "BWB",
    price: 0,
  },
  [PickguardTexture.BLACK_SINGLEPLY]: {
    name: "Black Single Ply",
    price: 0,
  },
  [PickguardTexture.WHITE_SINGLEPLY]: {
    name: "White Single Ply",
    price: 0,
  },
  [PickguardTexture.CREAM_SINGLEPLY]: {
    name: "Cream Single Ply",
    price: 0,
  },
  [PickguardTexture.VINTAGE_WHITE_SINGLEPLY]: {
    name: "Vintage White Single Ply",
    price: 0,
  },
  [PickguardTexture.GREEN_PERSPEX]: {
    name: "Green Perspex",
    price: 50,
  },
  [PickguardTexture.ORANGE_PERSPEX]: {
    name: "Orange Perspex",
    price: 50,
  },
};

export function OthersDef() {
  return (
    <>
      <WoodPattern
        id={PickguardTexture.RED_TORTOISESHELL}
        width={tort.width}
        height={tort.height}
        src={tort.src}
      />
      <WoodPattern
        id={PickguardTexture.PEARL}
        width={pearl.width}
        height={pearl.height}
        src={pearl.src}
      />
      <pattern id={PickguardTexture.BWB} width="100%" height="100%">
        <rect width="100%" height="100%" fill="#010002" />
      </pattern>
      <pattern id={PickguardTexture.BLACK_SINGLEPLY} width="100%" height="100%">
        <rect width="100%" height="100%" fill="#000000" />
      </pattern>

      <pattern id={PickguardTexture.WHITE_SINGLEPLY} width="100%" height="100%">
        <rect width="100%" height="100%" fill="#FFFFFF" />
      </pattern>

      <pattern id={PickguardTexture.CREAM_SINGLEPLY} width="100%" height="100%">
        <rect width="100%" height="100%" fill="#d2c8a6" />
      </pattern>
      <pattern
        id={PickguardTexture.VINTAGE_WHITE_SINGLEPLY}
        width="100%"
        height="100%"
      >
        <rect width="100%" height="100%" fill="#e9e3dd" />
      </pattern>
      <pattern id={PickguardTexture.GREEN_PERSPEX} width="100%" height="100%">
        <rect width="100%" height="100%" fill="#25a305" fillOpacity={0.6} />
      </pattern>
      <pattern id={PickguardTexture.ORANGE_PERSPEX} width="100%" height="100%">
        <rect width="100%" height="100%" fill="#ff5c1c" fillOpacity={0.6} />
      </pattern>
    </>
  );
}
