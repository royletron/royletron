export enum PaintColors {
  AtomicRed = "atomic-red",
  BakedCherry = "baked-cherry-red",
  HeatOrange = "heat-orange",
  MarigoldOrange = "marigold-orange",
  BlueVerditer = "blue-verditer",
  MarineBlue = "marine-blue",
  MidAzureGreen = "mid-azure-green",
  JewelBeetleGreen = "jewel-beetle-green",
  SilentWhite = "silent-white",
  JackBlack = "jack-black",
  MrDavidYellow = "mr-david-yellow",
  ConfettiPink = "confetti-pink",
}

type PaintColor = {
  fill: string;
  name: string;
  extraCost?: number;
};

export const paintColors: Record<PaintColors, PaintColor> = {
  // not found
  [PaintColors.AtomicRed]: {
    fill: "#bd2520",
    name: "Atomic Red",
  },
  // not found
  [PaintColors.BakedCherry]: {
    fill: "#611117",
    name: "Baked Cherry Red",
  },
  [PaintColors.HeatOrange]: {
    fill: "#9f3c19",
    name: "Heat Orange",
  },
  [PaintColors.MarigoldOrange]: {
    fill: "#f0841f",
    name: "Marigold Orange",
  },
  [PaintColors.BlueVerditer]: {
    fill: "#659ab2",
    name: "Blue Verditer",
  },
  [PaintColors.MarineBlue]: {
    fill: "#03414e",
    name: "Marine Blue",
  },
  [PaintColors.MidAzureGreen]: {
    fill: "#063025",
    name: "Mid Azure Green",
  },
  [PaintColors.JewelBeetleGreen]: {
    fill: "#566038",
    name: "Jewel Beetle Green",
  },
  [PaintColors.SilentWhite]: {
    fill: "#F5F3E2",
    name: "Silent White",
  },
  [PaintColors.JackBlack]: {
    fill: "#040e0f",
    name: "Jack Black",
  },
  [PaintColors.MrDavidYellow]: {
    fill: "#e1c022",
    name: "Mr David Yellow",
  },
  [PaintColors.ConfettiPink]: {
    fill: "#e9d0cf",
    name: "Confetti Pink",
  },
};
