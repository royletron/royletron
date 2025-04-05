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
import { PickupTypeMap } from "./pickups";

export enum PickupType {
  "SINGLE" = "single",
  "DOUBLE" = "double",
}

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
};

const NQTypeEnum = nativeEnum(NQType);
const orientationEnum = nativeEnum(OrientationType);
const PickupTypeEnum = nativeEnum(PickupType);
const BodyWoodEnum = nativeEnum(BodyWoodTextures);
const NeckWoodEnum = nativeEnum(NeckWoodTextures);
const FretboardWoodEnum = nativeEnum(FretboardWoodTextures);
const PaintColorEnum = nativeEnum(PaintColors);
const PickguardEnum = nativeEnum(PickguardTexture);

export const NQFormSchema = object({
  type: NQTypeEnum.default(NQType.STAGE),
  orientation: orientationEnum.default(OrientationType.RIGHT),
  neckLength: union([literal(24.5), literal(25.5)]),
  bodyWood: BodyWoodEnum.default(BodyWoodTextures.KORINA),
  bodyPaint: PaintColorEnum.optional(),
  headstockPaint: boolean().default(false),
  neckWood: NeckWoodEnum.default(NeckWoodTextures.ROAST_MAPLE),
  fretboardWood: FretboardWoodEnum.default(FretboardWoodTextures.ROSEWOOD),
  pickupA: PickupTypeEnum.default(PickupType.SINGLE),
  pickupB: PickupTypeEnum.optional(),
  pickupC: PickupTypeEnum.default(PickupType.SINGLE),
  hollowBody: boolean().default(false),
  germanCarve: boolean().default(false),
  pickguard: PickguardEnum.default(PickguardTexture.RED_TORTOISESHELL),
});

export default function Options() {
  const { register, setValue, watch } = useFormContext();
  const neckWood = watch("neckWood");
  const bodyPaint = watch("bodyPaint");
  const bodyPainted =
    bodyPaint !== undefined && bodyPaint !== null && bodyPaint !== "Natural";

  useEffect(() => {
    if (!bodyPainted) {
      setValue("headstockPaint", false);
    }
  }, [bodyPainted]);
  return (
    <div className="flex flex-col gap-2">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="choices" defaultChecked />
        <div className="collapse-title font-semibold">Step 1. Neck</div>
        <div className="collapse-content flex flex-col gap-3">
          <label className="w-full select">
            <span className="label w-32">Wood</span>
            <select
              {...register("neckWood")}
              onChange={(e) => {
                const val = e.target.value as NeckWoodTextures;
                setValue("neckWood", val);
                switch (val) {
                  case NeckWoodTextures.MAPLE:
                    setValue("fretboardWood", FretboardWoodTextures.MAPLE);
                    break;
                  case NeckWoodTextures.FLAME_ROAST_MAPLE:
                    setValue(
                      "fretboardWood",
                      FretboardWoodTextures.FLAME_ROAST_MAPLE
                    );
                    break;
                  case NeckWoodTextures.ROAST_MAPLE:
                    setValue(
                      "fretboardWood",
                      FretboardWoodTextures.ROAST_MAPLE
                    );
                    break;
                }
              }}
            >
              <option disabled>Select wood for neck</option>
              <option value={NeckWoodTextures.MAPLE}>Maple</option>
              <option value={NeckWoodTextures.ROAST_MAPLE}>Roast Maple</option>
              <option value={NeckWoodTextures.FLAME_ROAST_MAPLE}>
                Flamed Roast Maple
              </option>
            </select>
          </label>
          <label className="w-full select">
            <span className="label w-32">Fretboard</span>
            <select {...register("fretboardWood")}>
              <option disabled>Select wood for fretboard</option>
              {neckWood === NeckWoodTextures.ROAST_MAPLE && (
                <>
                  <option value={FretboardWoodTextures.ROAST_MAPLE}>
                    Roasted Maple
                  </option>
                  <option value={FretboardWoodTextures.ROSEWOOD}>
                    Rosewood
                  </option>
                </>
              )}
              {neckWood === NeckWoodTextures.FLAME_ROAST_MAPLE && (
                <>
                  <option value={FretboardWoodTextures.FLAME_ROAST_MAPLE}>
                    Flame Roasted Maple
                  </option>
                  <option value={FretboardWoodTextures.ROSEWOOD}>
                    Rosewood
                  </option>
                </>
              )}
              {neckWood === NeckWoodTextures.MAPLE && (
                <>
                  <option value={FretboardWoodTextures.MAPLE}>Maple</option>
                  <option value={FretboardWoodTextures.EBONY}>Ebony</option>
                </>
              )}
            </select>
          </label>
          <label className="w-full select">
            <span className="label w-32">Length</span>
            <select {...register("neckLength")}>
              <option disabled>Length of neck</option>
              <option value={24.5}>24.5 cm</option>
              <option value={25.5}>25.5 cm</option>
            </select>
          </label>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="choices" />
        <div className="collapse-title font-semibold">Step 2. Body</div>
        <div className="collapse-content flex flex-col gap-3">
          <label className="w-full select">
            <span className="label w-32">Type</span>
            <select {...register("type")}>
              <option disabled>Type of shape</option>
              <option value={NQType.STAGE}>Stage</option>
              <option value={NQType.ROCKET}>Rocket</option>
              <option value={NQType.STANDARD}>Standard</option>
            </select>
          </label>
          <label className="w-full select">
            <span className="label w-32">Wood</span>
            <select {...register("bodyWood")}>
              <option disabled>Select wood for body</option>
              <option value={BodyWoodTextures.KORINA}>Korina</option>
              <option value={BodyWoodTextures.SWAMP_ASH}>Swamp Ash</option>
              <option value={BodyWoodTextures.AMERICAN_WALNUT}>
                American Walnut
              </option>
            </select>
          </label>
          <label className="w-full select">
            <span className="label w-32">Paint</span>
            <select {...register("bodyPaint")}>
              <option disabled>Select paint for body</option>
              <option value={undefined}>Natural</option>
              <option value={PaintColors.ConfettiPink}>Confetti Pink</option>
              <option value={PaintColors.JackBlack}>Jack Black</option>
              <option value={PaintColors.SonicRed}>Sonic Red</option>
              <option value={PaintColors.MidAzureGreen}>Azure Mid Green</option>
              <option disabled>Addtional cost</option>
              <option value={PaintColors.FoolsGold}>Fools Gold</option>
            </select>
          </label>
          <label className="w-full select">
            <span className="label w-32">Pickguard</span>
            <select {...register("pickguard")}>
              <option disabled>Select pickguard</option>
              <option value={PickguardTexture.BWB}>BWB</option>
              <option value={PickguardTexture.BLACK_SINGLEPLY}>
                Black single ply
              </option>
              <option value={PickguardTexture.BROWN_TORTOISESHELL}>
                Brown Tortoiseshell
              </option>
              <option value={PickguardTexture.RED_TORTOISESHELL}>
                Red Tortoiseshell
              </option>
              <option value={PickguardTexture.CREAM_SINGLEPLY}>
                Cream single ply
              </option>
              <option value={PickguardTexture.VINTAGE_WHITE_SINGLEPLY}>
                Vintage white
              </option>
              <option value={PickguardTexture.WHITE_SINGLEPLY}>
                White single ply
              </option>
            </select>
          </label>
          <label className="w-full">
            <span className="label text-sm w-36 pl-4">Painted Headstock</span>
            <input
              type="checkbox"
              className="toggle"
              disabled={!bodyPainted}
              {...register("headstockPaint")}
            />
          </label>
          <label className="w-full">
            <span className="label text-sm w-36 pl-4">Hollow Body</span>
            <input
              type="checkbox"
              className="toggle"
              {...register("hollowBody")}
            />
          </label>
          <label className="w-full">
            <span className="label text-sm w-36 pl-4">German Carve</span>
            <input
              type="checkbox"
              className="toggle"
              {...register("germanCarve")}
            />
          </label>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="choices" />
        <div className="collapse-title font-semibold">Step 3. Electrics</div>
        <div className="collapse-content flex flex-col gap-3">
          <label className="w-full select">
            <span className="label w-32">Neck Pickup</span>
            <select {...register("pickupA")}>
              <option disabled>Select neck pickup</option>
              <option value={PickupType.SINGLE}>Single</option>
              <option value={PickupType.DOUBLE}>Double</option>
            </select>
          </label>
          <label className="w-full select">
            <span className="label w-32">Bridge Pickup</span>
            <select {...register("pickupC")}>
              <option disabled>Select bridge pickup</option>
              <option value={PickupType.SINGLE}>Single</option>
              <option value={PickupType.DOUBLE}>Double</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

const OptionGroup = ({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col gap-4 ${active ? "" : "hidden"}`}>
      {children}
    </div>
  );
};

const Neck = ({ active }: { active: boolean }) => {
  const { watch, setValue } = useFormContext();
  const neckWood = watch("neckWood");

  useEffect(() => {
    switch (neckWood) {
      case NeckWoodTextures.MAPLE:
        setValue("fretboardWood", FretboardWoodTextures.MAPLE);
        break;
      case NeckWoodTextures.FLAME_ROAST_MAPLE:
        setValue("fretboardWood", FretboardWoodTextures.FLAME_ROAST_MAPLE);
        break;
      case NeckWoodTextures.ROAST_MAPLE:
        setValue("fretboardWood", FretboardWoodTextures.ROAST_MAPLE);
        break;
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
  const { watch } = useFormContext();
  const neckWood = watch("neckWood");

  const options = useMemo(() => {
    switch (neckWood) {
      case NeckWoodTextures.ROAST_MAPLE:
        return [
          <Option value={FretboardWoodTextures.ROAST_MAPLE}>
            Roasted Maple
          </Option>,
          <Option value={FretboardWoodTextures.ROSEWOOD}>Rosewood</Option>,
        ];
      case NeckWoodTextures.FLAME_ROAST_MAPLE:
        return [
          <Option value={FretboardWoodTextures.FLAME_ROAST_MAPLE}>
            Flame Roasted Maple
          </Option>,
          <Option value={FretboardWoodTextures.ROSEWOOD}>Rosewood</Option>,
        ];
      case NeckWoodTextures.MAPLE:
        return [
          <Option value={FretboardWoodTextures.MAPLE}>Maple</Option>,
          <Option value={FretboardWoodTextures.EBONY}>Ebony</Option>,
        ];
      default:
        return [];
    }
  }, [neckWood]);
  return (
    <OptionGroup active={active}>
      <Selector name="fretboardWood" label="Wood">
        {options}
      </Selector>
    </OptionGroup>
  );
};

const Body = ({ active }: { active: boolean }) => {
  const { watch } = useFormContext();
  const bodyPaint = watch("bodyPaint");
  const bodyPainted =
    bodyPaint !== undefined && bodyPaint !== null && bodyPaint !== "Natural";
  return (
    <OptionGroup active={active}>
      <Selector name="bodyWood" label="Wood">
        <Option value={BodyWoodTextures.KORINA}>Korina</Option>
        <Option value={BodyWoodTextures.SWAMP_ASH}>Swamp Ash</Option>
        <Option value={BodyWoodTextures.AMERICAN_WALNUT}>
          American Walnut
        </Option>
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
      <Selector
        name="headstockPaint"
        label={"Matching Headstock?"}
        disabled={!bodyPainted}
      >
        <Option value={true}>Yes</Option>
        <Option value={false}>No</Option>
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
  return (
    <OptionGroup active={active}>
      <p>todo</p>
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
          value={PickguardTexture.BROWN_TORTOISESHELL}
        >
          Brown Tortoiseshell
        </Option>
        <Option
          className="w-32 text-center justify-center"
          value={PickguardTexture.RED_TORTOISESHELL}
        >
          Red Tortoiseshell
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

const TabList = [
  "Type & Orientation",
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
  body: [1, 5, 6, 7],
  neck: [2],
  fretboard: [3],
  headstock: [4],
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
        <div className="flex items-center gap-2">
          <span className="font-semibold">{TabList[currentTab]}</span>{" "}
          <small>
            {currentTab + 1}/{TabList.length}
          </small>
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
      <div className="pt-2">
        <Orientation active={currentTab === 0} />
        <Body active={currentTab === 1} />
        <Neck active={currentTab === 2} />
        <Fingerboard active={currentTab === 3} />
        <Headstock active={currentTab === 4} />
        <Pickups active={currentTab === 5} />
        <Pickguard active={currentTab === 6} />
      </div>
    </div>
  );
}
