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
  extraCost?: number;
};

export const paintColors: Record<PaintColors, PaintColor> = {
  [PaintColors.ConfettiPink]: {
    fill: "#e9d0cf",
  },
  [PaintColors.FoolsGold]: {
    fill: "#b08d57",
  },
  [PaintColors.JackBlack]: {
    fill: "#1a1a1a",
  },
  [PaintColors.SonicRed]: {
    fill: "#ff0000",
  },
  [PaintColors.MidAzureGreen]: {
    fill: "#007f7f",
  },
  [PaintColors.OffWhite]: {
    fill: "#f0f0f0",
  },
  [PaintColors.MrDavidYellow]: {
    fill: "#f0f000",
  },
  [PaintColors.MarineBlue]: {
    fill: "#0000f0",
  },
  [PaintColors.JewelBeetleGreen]: {
    fill: "#00f000",
  },
  [PaintColors.HeatOrange]: {
    fill: "#f07f00",
  },
};
