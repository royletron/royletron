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
import { PickguardMap, PickguardTexture } from "../Textures/guards";
import { useEffect, useRef, useState } from "react";
import { useControls } from "react-zoom-pan-pinch";
import Selector, { Option } from "../components/Selector";
import { PickupType, PickupTypeMap } from "./pickups";

import { useSpring, animated } from "@react-spring/web";
import { classes, classIf } from "~/utils/utils";
import { PricingLabel, usePricingContext } from "../components/Pricing";
import Cost, { formatter } from "./cost";
import { toPng } from "html-to-image";
import CostReview from "../components/CostReview";

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

export enum GermanCarve {
  NONE = "none",
  SMALL = "small",
  LARGE = "large",
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
  germanCarve: GermanCarve;
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
const GermanCarveEnum = nativeEnum(GermanCarve);

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
  germanCarve: GermanCarveEnum.default(GermanCarve.NONE),
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
      <Selector name="neckLength" label="Scale Length">
        <Option
          value={NeckLength["24_75"]}
          className="w-32 text-center justify-center"
        >
          24.75"
        </Option>
        <Option
          value={NeckLength["25_5"]}
          className="w-32 text-center justify-center"
        >
          25.5"
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const NeckWood = ({ active }: { active: boolean }) => {
  const { watch, setValue } = useFormContext();
  const neckWood = watch("neckWood");
  const fretboardWood = watch("fretboardWood");
  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (neckWood) {
      case NeckWoodTextures.MAPLE:
        setPrice("neckWood", 0);
        break;
      case NeckWoodTextures.ROAST_MAPLE:
        setPrice("neckWood", 0);
        break;
      case NeckWoodTextures.FLAME_ROAST_MAPLE:
        setPrice("neckWood", 50);
        break;
    }
    if (
      neckWood !== NeckWoodTextures.MAPLE &&
      fretboardWood === FretboardWoodTextures.MAPLE
    ) {
      setValue("fretboardWood", FretboardWoodTextures.ROSEWOOD);
    }
  }, [neckWood]);
  return (
    <OptionGroup active={active}>
      <Selector name="neckWood" label="Wood">
        <Option
          value={NeckWoodTextures.MAPLE}
          className="w-32 text-center justify-center"
        >
          Maple
          <PricingLabel pricingKey="neckWood" value={0} />
        </Option>
        <Option
          value={NeckWoodTextures.ROAST_MAPLE}
          className="w-32 text-center justify-center"
        >
          Roast Maple
          <PricingLabel pricingKey="neckWood" value={0} />
        </Option>
        <Option
          value={NeckWoodTextures.FLAME_ROAST_MAPLE}
          className="w-32 text-center justify-center"
        >
          Flamed Roast Maple
          <PricingLabel pricingKey="neckWood" value={50} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Fingerboard = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const { setPrice } = usePricingContext();
  const neckWood = watch("neckWood");
  const fretboardWood = watch("fretboardWood");
  useEffect(() => {
    switch (fretboardWood) {
      case FretboardWoodTextures.MAPLE:
        setPrice("fretboardWood", 0);
        break;
      case FretboardWoodTextures.ROAST_MAPLE:
        setPrice("fretboardWood", 25);
        break;
      case FretboardWoodTextures.FLAME_ROAST_MAPLE:
        setPrice("fretboardWood", 50);
        break;
      case FretboardWoodTextures.ROSEWOOD:
        setPrice("fretboardWood", 0);
        break;
    }
  }, [fretboardWood]);
  return (
    <OptionGroup active={active}>
      <Selector name="fretboardWood" label="Wood">
        {neckWood === NeckWoodTextures.MAPLE && (
          <Option
            value={FretboardWoodTextures.MAPLE}
            className="w-32 text-center justify-center"
          >
            Maple
          </Option>
        )}
        <Option
          value={FretboardWoodTextures.ROAST_MAPLE}
          className="w-32 text-center justify-center"
        >
          Roasted Maple
          <PricingLabel pricingKey="fretboardWood" value={25} />
        </Option>
        <Option
          value={FretboardWoodTextures.FLAME_ROAST_MAPLE}
          className="w-32 text-center justify-center"
        >
          Flame Roasted Maple
          <PricingLabel pricingKey="fretboardWood" value={50} />
        </Option>
        <Option
          value={FretboardWoodTextures.ROSEWOOD}
          className="w-32 text-center justify-center"
        >
          Rosewood
          <PricingLabel pricingKey="fretboardWood" value={0} />
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
            key={key}
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
  const hollowBody = watch("hollowBody");
  useEffect(
    () =>
      setPrice("bodyWood", bodyWood === BodyWoodTextures.SWAMP_ASH ? 200 : 0),
    [bodyWood]
  );
  return (
    <OptionGroup active={active}>
      <Selector
        name="bodyWood"
        label="Wood"
        disabled={hollowBody ? "Hollow body is selected" : undefined}
      >
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
  const { watch, setValue } = useFormContext();
  const { setPrice } = usePricingContext();
  const type = watch("type");
  useEffect(() => {
    switch (type) {
      case NQType.STAGE:
        setPrice("type", 999);
        break;
      case NQType.ROCKET:
        setPrice("type", 1199);
        setValue("hollowBody", false);
        break;
      case NQType.STANDARD:
        setPrice("type", 1199);
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
          <PricingLabel pricingKey="type" value={999} />
        </Option>
        <Option
          value={NQType.ROCKET}
          className="w-32 text-center justify-center"
        >
          Rocket
          <PricingLabel pricingKey="type" value={1199} />
        </Option>
        <Option
          value={NQType.STANDARD}
          className="w-32 text-center justify-center"
        >
          Standard
          <PricingLabel pricingKey="type" value={1199} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Orientation = ({ active }: { active: boolean }) => {
  const { setValue, watch } = useFormContext();
  const orientation = watch("orientation");
  useEffect(() => {
    if (orientation === OrientationType.LEFT) {
      setValue("tremolo", false);
    }
  }, [orientation]);
  return (
    <OptionGroup active={active}>
      <Selector name="orientation" label="Orientation">
        <Option
          value={OrientationType.RIGHT}
          className="w-32 text-center justify-center"
        >
          Right
        </Option>
        <Option
          value={OrientationType.LEFT}
          className="w-32 text-center justify-center"
        >
          Left
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
        setPrice("tuners", 50);
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
          <PricingLabel pricingKey="tuners" value={50} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Headstock = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const bodyPaint = watch("bodyPaint");
  const headstockPaint = watch("headstockPaint");
  const bodyPainted =
    bodyPaint !== undefined && bodyPaint !== null && bodyPaint !== "Natural";

  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (headstockPaint) {
      case true:
        setPrice("headstockPaint", 75);
        break;
      case false:
        setPrice("headstockPaint", 0);
        break;
    }
  }, [headstockPaint]);
  return (
    <OptionGroup active={active}>
      <Selector
        name="headstockPaint"
        label={"Painted Headstock?"}
        disabled={!bodyPainted ? "Select a body paint first" : undefined}
      >
        <Option value={true} className="w-32 text-center justify-center">
          Yes
          <PricingLabel pricingKey="headstockPaint" value={75} />
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
  const { watch } = useFormContext();
  const pickupA = watch("pickupA");
  const { setPrice } = usePricingContext();
  useEffect(() => {
    setPrice("pickupA", PickupTypeMap[pickupA].price);
  }, [pickupA]);
  return (
    <OptionGroup active={active}>
      <Selector name="pickupA" label="Neck Pickup">
        {Object.keys(PickupTypeMap).map((key) => (
          <Option
            key={key}
            value={key}
            className="w-32 text-center justify-center"
          >
            {PickupTypeMap[key].name}
            <PricingLabel
              pricingKey="pickupA"
              value={PickupTypeMap[key].price}
            />
          </Option>
        ))}
      </Selector>
    </OptionGroup>
  );
};

const BridgePickup = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const pickupC = watch("pickupC");
  const { setPrice } = usePricingContext();
  useEffect(() => {
    setPrice("pickupC", PickupTypeMap[pickupC].price);
  }, [pickupC]);
  return (
    <OptionGroup active={active}>
      <Selector name="pickupC" label="Bridge Pickup">
        {Object.keys(PickupTypeMap).map((key) => (
          <Option
            key={key}
            value={key}
            className="w-32 text-center justify-center"
          >
            {PickupTypeMap[key].name}
            <PricingLabel
              pricingKey="pickupC"
              value={PickupTypeMap[key].price}
            />
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
        {Object.keys(PickguardMap).map((key) => {
          return (
            <Option
              key={key}
              value={key}
              className="w-32 text-center justify-center"
            >
              {PickguardMap[key].name}
              <PricingLabel
                pricingKey="pickguard"
                value={PickguardMap[key].price}
              />
            </Option>
          );
        })}
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
        setPrice("tremolo", 250);
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
          <PricingLabel pricingKey="tremolo" value={250} />
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
  const { watch, setValue } = useFormContext();
  const hollowBody = watch("hollowBody");
  const germanCarve = watch("germanCarve");
  const orientation = watch("orientation");
  const type = watch("type");

  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (hollowBody) {
      case true:
        setValue("bodyWood", BodyWoodTextures.KORINA);
        setPrice("hollowBody", 300);
        break;
      case false:
        setPrice("hollowBody", 0);
        break;
    }
  }, [hollowBody]);

  useEffect(() => {
    if (type === NQType.ROCKET) {
      setValue("hollwBody", false);
    }
  }, [type]);

  return (
    <OptionGroup active={active}>
      <Selector
        name="hollowBody"
        label="Hollow Body"
        disabled={
          orientation === "left"
            ? "Left orientation is selected"
            : germanCarve != GermanCarve.NONE
            ? "German carve is selected"
            : type === NQType.ROCKET
            ? "Rocket type is selected"
            : undefined
        }
      >
        <Option value={true} className="w-32 text-center justify-center">
          Yes
          <PricingLabel pricingKey="hollowBody" value={300} />
        </Option>
        <Option value={false} className="w-32 text-center justify-center">
          No
          <PricingLabel pricingKey="hollowBody" value={0} />
        </Option>
      </Selector>
    </OptionGroup>
  );
};

const Carve = ({ active }: { active: boolean }) => {
  const { watch, setValue } = useFormContext();
  const hollowBody = watch("hollowBody");
  const germanCarve = watch("germanCarve");
  const type = watch("type");

  const { setPrice } = usePricingContext();
  useEffect(() => {
    switch (germanCarve) {
      case true:
        setPrice("germanCarve", 100);
        break;
      case false:
        setPrice("germanCarve", 0);
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
        <Option
          value={GermanCarve.SMALL}
          className="w-32 text-center justify-center"
        >
          Small carve with arm rest
          <PricingLabel pricingKey="carve" value={100} />
        </Option>
        {type === NQType.ROCKET && (
          <Option
            value={GermanCarve.LARGE}
            className="w-32 text-center justify-center"
          >
            Large carve
            <PricingLabel pricingKey="carve" value={100} />
          </Option>
        )}
        <Option
          value={GermanCarve.NONE}
          className="w-32 text-center justify-center"
        >
          None
          <PricingLabel pricingKey="germanCarve" value={0} />
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
  "Scale Length",
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

function Watcher() {
  const { watch, getValues } = useFormContext();

  const obj = Object.keys(getValues()).reduce((acc, key) => {
    const value = watch(key);
    if (value !== undefined && value !== null) {
      acc[key] = value;
    }
    return acc;
  }, {});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "boolean") {
        urlParams.set(key, obj[key] ? "true" : "false");
      } else {
        urlParams.set(key, obj[key]);
      }
    });
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [obj]);

  return null;
}

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
      <Watcher />
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
        <Carve active={currentTab === 3} />
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
      <CostReview />
    </div>
  );
}
