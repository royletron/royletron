export const woodColors = {
  roastMaple: "#af723c",
  flameRoastMaple: "#a15730",
  rosewood: "#1e2829",
  maple: "#e8a74a",
  ebony: "#34282a",
};

export const bodyColors = {
  confetti: "#e9d0cf",
  foolsGold: "#f5e1a4",
  jackBlack: "#040e0f",
  sonicRed: "#ff0000",
  azureGreen: "#073025",
};

export const pickguardColors = {
  white: "#ffffff",
  black: "#000000",
  tortoiseShell: "#8b4726",
  pearl: "#f5f1f0",
};

export type Option<T> = {
  name: string;
  value: T;
};

export type OptionWithStyle<T> = {
  name: string;
  value: T;
  style: React.CSSProperties;
};

export type Choice<T> = {
  name: string;
  options: Option<T>[];
  defaultValue?: T;
  placeholder?: string;
};

export type ChoiceWithStyle<T> = Choice<T> & {
  options: OptionWithStyle<T>[];
  defaultStyle: React.CSSProperties;
};

// neck options
// Roast Maple + Rosewood board
// Roast Maple + Roast Maple
// Flamed Roast Maple + Rosewood board
// Flamed Roast Maple + Flamed Roast Maple board
// Roast Maple + Bound Ebony with block inlays
// Plain maple + Plain Maple

export type NQRequiredChoices =
  | "neckWood"
  | "fretboardWood"
  | "bodyColour"
  | "pickGuard";
type Choices<K extends keyof any> = {
  [P in K]: ChoiceWithStyle<string | number>;
} & {
  [key: string]: Choice<string | number>;
};

export const choices: Choices<NQRequiredChoices> = {
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
  fretboardWood: {
    name: "Fretboard Wood",
    options: [
      {
        name: "Rosewood",
        value: "rosewood",
        style: {
          fill: woodColors.rosewood,
        },
      },
      {
        name: "Roast Maple",
        value: "roast-maple",
        style: {
          fill: woodColors.roastMaple,
        },
      },
      {
        name: "Bound Ebony with block inlays",
        value: "ebony",
        style: {
          fill: woodColors.ebony,
        },
      },
    ],
    defaultValue: "rosewood",
    defaultStyle: {
      fill: woodColors.rosewood,
    },
  },
  neckWood: {
    name: "Neck Wood",
    options: [
      {
        name: "Roast Maple",
        value: "roast-maple",
        style: {
          fill: woodColors.roastMaple,
        },
      },
      {
        name: "Flamed Roast Maple",
        value: "flamed-roast-maple",
        style: {
          fill: woodColors.flameRoastMaple,
        },
      },
      {
        name: "Plain Maple",
        value: "plain-maple",
        style: {
          fill: woodColors.maple,
        },
      },
    ],
    defaultValue: "roast-maple",
    defaultStyle: {
      fill: woodColors.rosewood,
    },
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
        value: "confetti-pink",
        style: {
          fill: bodyColors.confetti,
        },
      },
      {
        name: "Fools Gold",
        value: "fools-gold",
        style: {
          fill: bodyColors.foolsGold,
        },
      },
      {
        name: "Jack Black",
        value: "jack-black",
        style: {
          fill: bodyColors.jackBlack,
        },
      },
      {
        name: "Sonic Red",
        value: "sonic-red",
        style: {
          fill: bodyColors.sonicRed,
        },
      },
      {
        name: "Azure Mid Green",
        value: "azure-mid-green",
        style: {
          fill: bodyColors.azureGreen,
        },
      },
    ],
    defaultValue: "#e9d0cf",
    defaultStyle: {
      fill: bodyColors.confetti,
    },
  },
  pickGuard: {
    name: "Pickguard",
    options: [
      {
        name: "White",
        value: "white",
        style: {
          fill: pickguardColors.white,
        },
      },
      {
        name: "Black",
        value: "black",
        style: {
          fill: pickguardColors.black,
        },
      },
      {
        name: "Tortoise Shell",
        value: "tortoise-shell",
        style: {
          fill: pickguardColors.tortoiseShell,
        },
      },
    ],
    defaultValue: "white",
    defaultStyle: {
      fill: pickguardColors.white,
    },
  },
};
