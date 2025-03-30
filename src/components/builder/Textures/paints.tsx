export enum PaintColors {
  ConfettiPink = "confetti-pink",
  FoolsGold = "fools-gold",
  JackBlack = "jack-black",
  SonicRed = "sonic-red",
  MidAzureGreen = "azure-mid-green",
  OffWhite = "off-white",
  MrDavidYellow = "mr-david-yellow",
  MarineBlue = "marine-blue",
  JewelBeetleGreen = "jewel-beetle-green",
  HeatOrange = "heat-orange",
}

type PaintColor = {
  fill: string;
  name: string;
  extraCost?: number;
};

export const paintColors: Record<PaintColors, PaintColor> = {
  [PaintColors.ConfettiPink]: {
    fill: "#e9d0cf",
    name: "Confetti Pink",
  },
  [PaintColors.FoolsGold]: {
    fill: "#b08d57",
    name: "Fool's Gold",
  },
  [PaintColors.JackBlack]: {
    fill: "#1a1a1a",
    name: "Jack Black",
  },
  [PaintColors.SonicRed]: {
    fill: "#ff0000",
    name: "Sonic Red",
  },
  [PaintColors.MidAzureGreen]: {
    fill: "#007f7f",
    name: "Mid Azure Green",
  },
  [PaintColors.OffWhite]: {
    fill: "#f0f0f0",
    name: "Off White",
  },
  [PaintColors.MrDavidYellow]: {
    fill: "#f0f000",
    name: "Mr. David Yellow",
  },
  [PaintColors.MarineBlue]: {
    fill: "#0000f0",
    name: "Marine Blue",
  },
  [PaintColors.JewelBeetleGreen]: {
    fill: "#00f000",
    name: "Jewel Beetle Green",
  },
  [PaintColors.HeatOrange]: {
    fill: "#f07f00",
    name: "Heat Orange",
  },
};
