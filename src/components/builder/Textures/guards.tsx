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
}

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
    </>
  );
}
