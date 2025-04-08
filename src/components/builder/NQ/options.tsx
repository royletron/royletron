// export const woodColors = {
//   roastMaple: "#af723c",
//   flameRoastMaple: "#a15730",
//   rosewood: "#1e2829",
//   maple: "#e8a74a",
//   ebony: "#34282a",
// };

import { boolean, literal, nativeEnum, object, string, union } from "zod";
import {
  BodyWoodTextures,
  FretboardWoodTextures,
  NeckWoodTextures,
} from "../Textures/woods";
import { useDebounce } from "@uidotdev/usehooks";
import { useFormContext } from "react-hook-form";
import { paintColors, PaintColors } from "../Textures/paints";
import { PickguardTexture } from "../Textures/guards";
import { useEffect, useMemo, useState } from "react";
import { useControls } from "react-zoom-pan-pinch";
import Selector, { Option } from "../components/Selector";
import { PickupType, PickupTypeMap } from "./pickups";

import { useSpring, animated } from "@react-spring/web";
import { classes, classIf } from "~/utils/utils";

export enum NQType {
  "ROCKET" = "rocket",
  "STAGE" = "stage",
  "STANDARD" = "standard",
}

export enum OrientationType {
  "LEFT" = "left",
  "RIGHT" = "right",
}

export enum TunerType {
  "LOCKING" = "locking",
  "STANDARD" = "standard",
}

export type NQProps = {
  type: NQType;
  orientation: OrientationType;
  neckLength: 24.5 | 25.5;
  bodyWood: BodyWoodTextures;
  bodyPaint?: PaintColors;
  headstockPaint: boolean;
  neckWood: NeckWoodTextures;
  fretboardWood: FretboardWoodTextures;
  pickupA: PickupType;
  pickupB?: PickupType;
  pickupC: PickupType;
  hollowBody: boolean;
  germanCarve: boolean;
  pickguard: PickguardTexture;
  tremolo: boolean;
  tuners: TunerType;
};

const NQTypeEnum = nativeEnum(NQType);
const orientationEnum = nativeEnum(OrientationType);
const PickupTypeEnum = nativeEnum(PickupType);
const BodyWoodEnum = nativeEnum(BodyWoodTextures);
const NeckWoodEnum = nativeEnum(NeckWoodTextures);
const FretboardWoodEnum = nativeEnum(FretboardWoodTextures);
const PaintColorEnum = nativeEnum(PaintColors);
const PickguardEnum = nativeEnum(PickguardTexture);
const TunerTypeEnum = nativeEnum(TunerType);

export const NQFormSchema = object({
  type: NQTypeEnum.default(NQType.STAGE),
  orientation: orientationEnum.default(OrientationType.RIGHT),
  neckLength: union([literal(24.5), literal(25.5)]),
  bodyWood: BodyWoodEnum.default(BodyWoodTextures.KORINA),
  bodyPaint: PaintColorEnum.optional(),
  headstockPaint: boolean().default(false),
  neckWood: NeckWoodEnum.default(NeckWoodTextures.ROAST_MAPLE),
  fretboardWood: FretboardWoodEnum.default(FretboardWoodTextures.ROSEWOOD),
  pickupA: PickupTypeEnum.default(PickupType.SINGLEA),
  pickupB: PickupTypeEnum.optional(),
  pickupC: PickupTypeEnum.default(PickupType.SINGLEA),
  hollowBody: boolean().default(false),
  germanCarve: boolean().default(false),
  pickguard: PickguardEnum.default(PickguardTexture.RED_TORTOISESHELL),
  tremolo: boolean().default(false),
  tuners: TunerTypeEnum.default(TunerType.STANDARD),
});

const OptionGroup = ({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) => {
  const [styles, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
  }));

  useEffect(() => {
    api.start({
      to: { opacity: active ? 1 : 0 },
    });
  }, [active]);
  return (
    <animated.div
      style={styles}
      className={classes(
        `flex flex-col gap-4 col-1 row-1`,
        classIf(!active, "pointer-events-none")
      )}
    >
      {children}
    </animated.div>
  );
};

const Neck = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
      <Selector name="neckWood" label="Wood">
        <Option
          value={NeckWoodTextures.MAPLE}
          className="w-32 text-center justify-center"
        >
          Maple
        </Option>
        <Option
          value={NeckWoodTextures.ROAST_MAPLE}
          className="w-32 text-center justify-center"
        >
          Roast Maple
        </Option>
        <Option
          value={NeckWoodTextures.FLAME_ROAST_MAPLE}
          className="w-32 text-center justify-center"
        >
          Flamed Roast Maple
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Fingerboard = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
      <Selector name="fretboardWood" label="Wood">
        <Option
          value={FretboardWoodTextures.MAPLE}
          className="w-32 text-center justify-center"
        >
          Maple
        </Option>
        <Option
          value={FretboardWoodTextures.ROAST_MAPLE}
          className="w-32 text-center justify-center"
        >
          Roasted Maple
        </Option>
        <Option
          value={FretboardWoodTextures.FLAME_ROAST_MAPLE}
          className="w-32 text-center justify-center"
        >
          Flame Roasted Maple
        </Option>
        <Option
          value={FretboardWoodTextures.ROSEWOOD}
          className="w-32 text-center justify-center"
        >
          Rosewood
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Body = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
      <Selector name="bodyWood" label="Wood">
        <Option value={BodyWoodTextures.KORINA}>Korina</Option>
        <Option value={BodyWoodTextures.SWAMP_ASH}>Swamp Ash</Option>
      </Selector>
      <Selector name="bodyPaint" label="Paint" className="!gap-2">
        <Option
          value={undefined}
          className="!rounded-full !h-6 !w-6"
          tooltip="Natural"
        >
          {" "}
        </Option>
        {Object.keys(paintColors).map((key) => (
          <Option
            value={key}
            className="!rounded-full !h-6 !w-6"
            style={{ backgroundColor: paintColors[key].fill }}
            tooltip={paintColors[key].name}
          >
            {" "}
          </Option>
        ))}
      </Selector>
    </OptionGroup>
  );
};

const Orientation = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
      <Selector name="type" label="Type">
        <Option value={NQType.STAGE}>Stage</Option>
        <Option value={NQType.ROCKET}>Rocket</Option>
        <Option value={NQType.STANDARD}>Standard</Option>
      </Selector>
      <Selector name="orientation" label="Orientation">
        <Option value={OrientationType.RIGHT}>Right</Option>
        <Option value={OrientationType.LEFT}>Left</Option>
      </Selector>
    </OptionGroup>
  );
};

const Headstock = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const bodyPaint = watch("bodyPaint");
  const bodyPainted =
    bodyPaint !== undefined && bodyPaint !== null && bodyPaint !== "Natural";
  return (
    <OptionGroup active={active}>
      <Selector
        name="headstockPaint"
        label={"Matching Headstock?"}
        disabled={!bodyPainted ? "Select a body paint first" : undefined}
      >
        <Option value={true}>Yes</Option>
        <Option value={false}>No</Option>
      </Selector>
      <Selector name="tuners" label="Tuners">
        <Option value={TunerType.STANDARD}>Standard</Option>
        <Option value={TunerType.LOCKING}>Locking</Option>
      </Selector>
    </OptionGroup>
  );
};

const Pickups = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
      <Selector name="pickupA" label="Neck Pickup">
        {Object.keys(PickupTypeMap).map((key) => (
          <Option
            key={key}
            value={key}
            className="w-32 text-center justify-center"
          >
            {PickupTypeMap[key]}
          </Option>
        ))}
      </Selector>
      <Selector name="pickupC" label="Bridge Pickup">
        {Object.keys(PickupTypeMap).map((key) => (
          <Option
            key={key}
            value={key}
            className="w-32 text-center justify-center"
          >
            {PickupTypeMap[key]}
          </Option>
        ))}
      </Selector>
    </OptionGroup>
  );
};

const Pickguard = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
      <Selector name="pickguard" label="Pickguard" className="overflow-x-auto">
        <Option
          className="w-32 text-center justify-center"
          value={PickguardTexture.BWB}
        >
          BWB
        </Option>
        <Option
          className="w-32 text-center justify-center"
          value={PickguardTexture.BLACK_SINGLEPLY}
        >
          Black single ply
        </Option>
        <Option
          className="w-32 text-center justify-center"
          value={PickguardTexture.RED_TORTOISESHELL}
        >
          Red Tortoiseshell
        </Option>
        <Option
          className="w-32 text-center justify-center"
          value={PickguardTexture.PEARL}
        >
          Pearl
        </Option>
        <Option
          className="w-32 text-center justify-center"
          value={PickguardTexture.CREAM_SINGLEPLY}
        >
          Cream single ply
        </Option>
        <Option
          className="w-32 text-center justify-center"
          value={PickguardTexture.VINTAGE_WHITE_SINGLEPLY}
        >
          Vintage white
        </Option>
        <Option
          className="w-32 text-center justify-center"
          value={PickguardTexture.WHITE_SINGLEPLY}
        >
          White single ply
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Bridge = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
      <Selector name="tremolo" label="Tremolo">
        <Option value={true}>Yes</Option>
        <Option value={false}>No</Option>
      </Selector>
    </OptionGroup>
  );
};

const Construction = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const hollowBody = watch("hollowBody");
  const germanCarve = watch("germanCarve");
  return (
    <OptionGroup active={active}>
      <Selector
        name="hollowBody"
        label="Hollow Body"
        disabled={germanCarve ? "German carve is selected" : undefined}
      >
        <Option value={true}>Yes</Option>
        <Option value={false}>No</Option>
      </Selector>
      <Selector
        name="germanCarve"
        label="German Carve"
        disabled={hollowBody ? "Hollow body is selected" : undefined}
      >
        <Option value={true}>Yes</Option>
        <Option value={false}>No</Option>
      </Selector>
    </OptionGroup>
  );
};

const TabList = [
  "Type & Orientation",
  "Construction",
  "Body",
  "Neck",
  "Fingerboard",
  "Headstock",
  "Pickups",
  "Pickguard",
  "Bridge",
];

const zoom = {
  full: [0],
  body: [1, 2, 6, 7, 8],
  neck: [3, 4],
  headstock: [5],
};

export function Tabs() {
  const [currentTab, setCurrentTab] = useState(0);
  const debouncedTab = useDebounce(currentTab, 300);
  const { zoomToElement } = useControls();
  const { watch, setValue } = useFormContext();

  const bodyPaint = watch("bodyPaint");
  const bodyPainted =
    bodyPaint !== undefined && bodyPaint !== null && bodyPaint !== "Natural";

  useEffect(() => {
    if (!bodyPainted) {
      setValue("headstockPaint", false);
    }
  }, [bodyPainted]);

  const nextTab = () => {
    if (currentTab < TabList.length - 1) {
      setCurrentTab((prev) => prev + 1);
    }
  };

  const prevTab = () => {
    if (currentTab > 0) {
      setCurrentTab((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const zoomTo = Object.keys(zoom).find((key) => {
      return zoom[key].includes(debouncedTab);
    });

    if (zoomTo) {
      zoomToElement(zoomTo);
    }
  }, [debouncedTab]);

  return (
    <div className="py-4">
      <div className="flex items-center w-full justify-center gap-4 px-4">
        <a
          className={"btn btn-square btn-ghost"}
          //@ts-expect-error disabled prop
          disabled={currentTab === 0}
          onClick={prevTab}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </a>
        <div className="grid">
          {TabList.map((tab, index) => {
            return (
              <div
                className={classes(
                  "flex items-center justify-center gap-2 col-1 row-1 opacity-0 transition-opacity",
                  classIf(currentTab === index, "opacity-100")
                )}
                key={index}
              >
                <span className="font-semibold">{tab}</span>{" "}
                <small>
                  {index + 1}/{TabList.length}
                </small>
              </div>
            );
          })}
        </div>
        <a
          className="btn btn-square btn-ghost"
          //@ts-expect-error disabled prop
          disabled={currentTab === TabList.length - 1}
          onClick={nextTab}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
      <div className="pt-2 grid">
        <Orientation active={currentTab === 0} />
        <Construction active={currentTab === 1} />
        <Body active={currentTab === 2} />
        <Neck active={currentTab === 3} />
        <Fingerboard active={currentTab === 4} />
        <Headstock active={currentTab === 5} />
        <Pickups active={currentTab === 6} />
        <Pickguard active={currentTab === 7} />
        <Bridge active={currentTab === 8} />
      </div>
    </div>
  );
}
