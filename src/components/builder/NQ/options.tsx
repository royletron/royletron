import { woodColors } from "./image";

export type Choice<T> = {
  name: string;
  options: {
    name: string;
    value: T;
  }[];
  defaultValue?: T;
  placeholder?: string;
};

// neck options
// Roast Maple + Rosewood board
// Roast Maple + Roast Maple
// Flamed Roast Maple + Rosewood board
// Flamed Roast Maple + Flamed Roast Maple board
// Roast Maple + Bound Ebony with block inlays
// Plain maple + Plain Maple

export const choices: Record<string, Choice<string | number>> = {
  tuners: {
    name: "Tuners",
    options: [
      {
        name: "Standard",
        value: "standard",
      },
      {
        name: "Locking",
        value: "locking",
      },
    ],
    defaultValue: "standard",
  },
  neckScale: {
    name: "Neck Scale",
    options: [
      {
        name: "25.5",
        value: 25.5,
      },
      {
        name: "24.75",
        value: 24.75,
      },
    ],
    defaultValue: 25.5,
  },
  neckWood: {
    name: "Neck Wood",
    options: [
      {
        name: "Roast Maple",
        value: woodColors.roastMaple,
      },
      {
        name: "Flamed Roast Maple",
        value: woodColors.flameRoastMaple,
      },
      {
        name: "Plain Maple",
        value: woodColors.maple,
      },
    ],
    defaultValue: woodColors.roastMaple,
  },
  fretboardWood: {
    name: "Fretboard Wood",
    options: [
      {
        name: "Rosewood",
        value: woodColors.rosewood,
      },
      {
        name: "Roast Maple",
        value: woodColors.roastMaple,
      },
      {
        name: "Bound Ebony with block inlays",
        value: woodColors.ebony,
      },
    ],
    defaultValue: woodColors.rosewood,
  },
  bodyWood: {
    name: "Body Wood",
    options: [
      {
        name: "Korina",
        value: "korina",
      },
      {
        name: "Swamp Ash",
        value: "swamp-ash",
      },
      {
        name: "American Walnut",
        value: "walnut",
      },
      {
        name: "Semi Hollow Korina + Maple top",
        value: "semi-hollow-korina",
      },
    ],
    defaultValue: "korina",
  },
  bodyColour: {
    name: "Body Finish",
    options: [
      {
        name: "Confetti Pink",
        value: "#e9d0cf",
      },
      {
        name: "Fools Gold",
        value: "#f5e1a4",
      },
      {
        name: "Jack Black",
        value: "#040e0f",
      },
      {
        name: "Sonic Red",
        value: "#ff0000",
      },
      {
        name: "Azure Mid Green",
        value: "#073025",
      },
    ],
    defaultValue: "#e9d0cf",
  },
};
