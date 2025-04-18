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
  woods,
} from "../Textures/woods";
import { useDebounce } from "@uidotdev/usehooks";
import { useFormContext } from "react-hook-form";
import { paintColors, PaintColors } from "../Textures/paints";
import { PickguardTexture } from "../Textures/guards";
import { useEffect, useState } from "react";
import { useControls } from "react-zoom-pan-pinch";
import Selector, { Option } from "../components/Selector";
import { PickupType, PickupTypeMap } from "./pickups";

import { useSpring, animated } from "@react-spring/web";
import { classes, classIf } from "~/utils/utils";
import { PricingLabel, usePricingContext } from "../components/Pricing";

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

export enum NeckLength {
  "24_75" = "24.75",
  "25_5" = "25.5",
}

export type NQProps = {
  type: NQType;
  orientation: OrientationType;
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
  neckLength: NeckLength;
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
const NeckLengthEnum = nativeEnum(NeckLength);

export const NQFormSchema = object({
  type: NQTypeEnum.default(NQType.STAGE),
  orientation: orientationEnum.default(OrientationType.RIGHT),
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
  neckLength: NeckLengthEnum.default(NeckLength["25_5"]),
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
      <Selector name="neckLength" label="Neck Length">
        <Option
          value={NeckLength["24_75"]}
          className="w-32 text-center justify-center"
        >
          24.75
          <PricingLabel pricingKey="neckLength" value={0} />
        </Option>
        <Option
          value={NeckLength["25_5"]}
          className="w-32 text-center justify-center"
        >
          25.5
          <PricingLabel pricingKey="neckLength" value={0} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const NeckWood = ({ active }: { active: boolean }) => {
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

const BodyPaint = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const bodyWood = watch("bodyWood");
  return (
    <OptionGroup active={active}>
      <Selector name="bodyPaint" label="Paint" className="!gap-2">
        <Option
          value={undefined}
          className="!rounded-full !h-6 !w-6"
          style={{ backgroundColor: woods[bodyWood].baseColor }}
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

const BodyWood = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const { setPrice } = usePricingContext();
  const bodyWood = watch("bodyWood");
  useEffect(
    () =>
      setPrice("bodyWood", bodyWood === BodyWoodTextures.SWAMP_ASH ? 200 : 0),
    [bodyWood]
  );
  return (
    <OptionGroup active={active}>
      <Selector name="bodyWood" label="Wood">
        <Option
          value={BodyWoodTextures.KORINA}
          className="w-32 text-center justify-center"
        >
          Korina
          <PricingLabel pricingKey="bodyWood" value={0} />
        </Option>
        <Option
          value={BodyWoodTextures.SWAMP_ASH}
          className="w-32 text-center justify-center"
        >
          Swamp Ash
          <PricingLabel pricingKey="bodyWood" value={200} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const BodyType = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const { setPrice } = usePricingContext();
  const type = watch("type");
  useEffect(() => {
    switch (type) {
      case NQType.STAGE:
        setPrice("type", 800);
        break;
      case NQType.ROCKET:
        setPrice("type", 1200);
        break;
      case NQType.STANDARD:
        setPrice("type", 2000);
        break;
    }
  }, [type]);
  return (
    <OptionGroup active={active}>
      <Selector name="type" label="Type">
        <Option
          value={NQType.STAGE}
          className="w-32 text-center justify-center"
        >
          Stage
          <PricingLabel pricingKey="type" value={800} />
        </Option>
        <Option
          value={NQType.ROCKET}
          className="w-32 text-center justify-center"
        >
          Rocket
          <PricingLabel pricingKey="type" value={1200} />
        </Option>
        <Option
          value={NQType.STANDARD}
          className="w-32 text-center justify-center"
        >
          Standard
          <PricingLabel pricingKey="type" value={2000} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Orientation = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
      <Selector name="orientation" label="Orientation">
        <Option
          value={OrientationType.RIGHT}
          className="w-32 text-center justify-center"
        >
          Right
          <PricingLabel pricingKey="orientation" value={0} />
        </Option>
        <Option
          value={OrientationType.LEFT}
          className="w-32 text-center justify-center"
        >
          Left
          <PricingLabel pricingKey="orientation" value={0} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Tuners = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const tuners = watch("tuners");

  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (tuners) {
      case TunerType.LOCKING:
        setPrice("tuners", 200);
        break;
      case TunerType.STANDARD:
        setPrice("tuners", 0);
        break;
    }
  }, [tuners]);
  return (
    <OptionGroup active={active}>
      <Selector name="tuners" label="Tuners">
        <Option
          value={TunerType.STANDARD}
          className="w-32 text-center justify-center"
        >
          Standard
          <PricingLabel pricingKey="tuners" value={0} />
        </Option>
        <Option
          value={TunerType.LOCKING}
          className="w-32 text-center justify-center"
        >
          Locking
          <PricingLabel pricingKey="tuners" value={200} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Headstock = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const bodyPaint = watch("bodyPaint");
  const bodyPainted =
    bodyPaint !== undefined && bodyPaint !== null && bodyPaint !== "Natural";

  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (bodyPainted) {
      case true:
        setPrice("headstockPaint", 200);
        break;
      case false:
        setPrice("headstockPaint", 0);
        break;
    }
  }, [bodyPainted]);
  return (
    <OptionGroup active={active}>
      <Selector
        name="headstockPaint"
        label={"Painted Headstock?"}
        disabled={!bodyPainted ? "Select a body paint first" : undefined}
      >
        <Option value={true} className="w-32 text-center justify-center">
          Yes
          <PricingLabel pricingKey="headstockPaint" value={200} />
        </Option>
        <Option value={false} className="w-32 text-center justify-center">
          No
          <PricingLabel pricingKey="headstockPaint" value={0} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const NeckPickup = ({ active }: { active: boolean }) => {
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
    </OptionGroup>
  );
};

const BridgePickup = ({ active }: { active: boolean }) => {
  return (
    <OptionGroup active={active}>
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
  const { watch } = useFormContext();
  const tremolo = watch("tremolo");
  const orientation = watch("orientation");
  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (tremolo) {
      case true:
        setPrice("tremolo", 200);
        break;
      case false:
        setPrice("tremolo", 0);
        break;
    }
  }, [tremolo]);
  return (
    <OptionGroup active={active}>
      <Selector
        name="tremolo"
        label="Tremolo"
        disabled={
          orientation === "left" ? "Left orientation is selected" : undefined
        }
      >
        <Option value={true} className="w-32 text-center justify-center">
          Yes
          <PricingLabel pricingKey="tremolo" value={200} />
        </Option>
        <Option value={false} className="w-32 text-center justify-center">
          No
          <PricingLabel pricingKey="tremolo" value={0} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const HollowBody = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const hollowBody = watch("hollowBody");
  const germanCarve = watch("germanCarve");
  const orientation = watch("orientation");

  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (hollowBody) {
      case true:
        setPrice("hollow", 200);
        break;
      case false:
        setPrice("hollow", 0);
        break;
    }
  }, [hollowBody]);
  return (
    <OptionGroup active={active}>
      <Selector
        name="hollowBody"
        label="Hollow Body"
        disabled={
          orientation === "left"
            ? "Left orientation is selected"
            : germanCarve
            ? "German carve is selected"
            : undefined
        }
      >
        <Option value={true} className="w-32 text-center justify-center">
          Yes
          <PricingLabel pricingKey="hollow" value={200} />
        </Option>
        <Option value={false} className="w-32 text-center justify-center">
          No
          <PricingLabel pricingKey="hollow" value={0} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const GermanCarve = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const hollowBody = watch("hollowBody");
  const germanCarve = watch("germanCarve");

  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (germanCarve) {
      case true:
        setPrice("carve", 200);
        break;
      case false:
        setPrice("carve", 0);
        break;
    }
  }, [germanCarve]);
  return (
    <OptionGroup active={active}>
      <Selector
        name="germanCarve"
        label="German Carve"
        disabled={hollowBody ? "Hollow body is selected" : undefined}
      >
        <Option value={true} className="w-32 text-center justify-center">
          Yes
          <PricingLabel pricingKey="carve" value={200} />
        </Option>
        <Option value={false} className="w-32 text-center justify-center">
          No
          <PricingLabel pricingKey="carve" value={0} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const TabList = [
  "Orientation",
  "Type",
  "Hollow Body",
  "German Carve",
  "Body Wood",
  "Body Paint",
  "Neck Length",
  "Neck Wood",
  "Fingerboard",
  "Headstock",
  "Tuners",
  "Neck Pickup",
  "Bridge Pickup",
  "Pickguard",
  "Bridge",
];

const zoom = {
  full: [0, 1],
  body: [2, 3, 4, 5, 11, 12, 13, 14],
  neck: [6, 7, 8],
  headstock: [9, 10],
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
        <BodyType active={currentTab === 1} />
        <HollowBody active={currentTab === 2} />
        <GermanCarve active={currentTab === 3} />
        <BodyWood active={currentTab === 4} />
        <BodyPaint active={currentTab === 5} />
        <Neck active={currentTab === 6} />
        <NeckWood active={currentTab === 7} />
        <Fingerboard active={currentTab === 8} />
        <Headstock active={currentTab === 9} />
        <Tuners active={currentTab === 10} />
        <NeckPickup active={currentTab === 11} />
        <BridgePickup active={currentTab === 12} />
        <Pickguard active={currentTab === 13} />
        <Bridge active={currentTab === 14} />
      </div>
    </div>
  );
}
