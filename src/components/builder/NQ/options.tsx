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
import { useFormContext } from "react-hook-form";
import { PaintColors } from "../Textures/paints";

export enum PickupType {
  "SINGLE" = "single",
  "DOUBLE" = "double",
}

export enum NQType {
  "ROCKET" = "rocket",
  "NQ" = "nq",
}

export type NQProps = {
  type: NQType;
  neckLength: 24.5 | 25.5;
  bodyWood: BodyWoodTextures;
  bodyPaint?: PaintColors;
  neckWood: NeckWoodTextures;
  fretboardWood: FretboardWoodTextures;
  pickupA: PickupType;
  pickupB?: PickupType;
  pickupC: PickupType;
  hollowBody: boolean;
  germanCarve: boolean;
};

const NQTypeEnum = nativeEnum(NQType);
const PickupTypeEnum = nativeEnum(PickupType);
const BodyWoodEnum = nativeEnum(BodyWoodTextures);
const NeckWoodEnum = nativeEnum(NeckWoodTextures);
const FretboardWoodEnum = nativeEnum(FretboardWoodTextures);
const PaintColorEnum = nativeEnum(PaintColors);

export const NQFormSchema = object({
  type: NQTypeEnum.default(NQType.NQ),
  neckLength: union([literal(24.5), literal(25.5)]),
  bodyWood: BodyWoodEnum.default(BodyWoodTextures.KORINA),
  bodyPaint: PaintColorEnum.optional(),
  neckWood: NeckWoodEnum.default(NeckWoodTextures.ROAST_MAPLE),
  fretboardWood: FretboardWoodEnum.default(FretboardWoodTextures.ROSEWOOD),
  pickupA: PickupTypeEnum.default(PickupType.SINGLE),
  pickupB: PickupTypeEnum.optional(),
  pickupC: PickupTypeEnum.default(PickupType.SINGLE),
  hollowBody: boolean().default(false),
  germanCarve: boolean().default(false),
});

export default function Options() {
  const { register, setValue, watch } = useFormContext();
  const neckWood = watch("neckWood");
  return (
    <div className="flex flex-col gap-2">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="neck-choices" defaultChecked />
        <div className="collapse-title font-semibold">Step 1. Neck</div>
        <div className="collapse-content flex flex-col gap-3">
          <label className="w-full select">
            <span className="label">Wood</span>
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
              className="select select-bordered w-full"
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
            <span className="label">Fretboard</span>
            <select
              {...register("fretboardWood")}
              className="select select-bordered w-full"
            >
              <option disabled>Select wood for fretboard</option>
              {neckWood === NeckWoodTextures.ROAST_MAPLE && (
                <>
                  <option value={FretboardWoodTextures.ROSEWOOD}>
                    Rosewood
                  </option>
                  <option value={FretboardWoodTextures.ROAST_MAPLE}>
                    Roasted Maple
                  </option>
                </>
              )}
              {neckWood === NeckWoodTextures.FLAME_ROAST_MAPLE && (
                <>
                  <option value={FretboardWoodTextures.ROSEWOOD}>
                    Rosewood
                  </option>
                  <option value={FretboardWoodTextures.FLAME_ROAST_MAPLE}>
                    Flame Roasted Maple
                  </option>
                </>
              )}
              {neckWood === NeckWoodTextures.MAPLE && (
                <>
                  <option value={FretboardWoodTextures.EBONY}>Ebony</option>
                  <option value={FretboardWoodTextures.MAPLE}>Maple</option>
                </>
              )}
            </select>
          </label>
          <label className="w-full select">
            <span className="label">Length</span>
            <select
              {...register("neckLength")}
              className="select select-bordered w-full"
            >
              <option disabled>Length of neck</option>
              <option value={24.5}>24.5 cm</option>
              <option value={25.5}>25.5 cm</option>
            </select>
          </label>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="neck-choices" />
        <div className="collapse-title font-semibold">Step 2. Body</div>
        <div className="collapse-content flex flex-col gap-3">
          <label className="w-full select">
            <span className="label">Wood</span>
            <select
              {...register("bodyWood")}
              className="select select-bordered w-full"
            >
              <option disabled>Select wood for body</option>
              <option value={BodyWoodTextures.KORINA}>Korina</option>
              <option value={BodyWoodTextures.SWAMP_ASH}>Swamp Ash</option>
              <option value={BodyWoodTextures.AMERICAN_WALNUT}>
                American Walnut
              </option>
            </select>
          </label>
          <label className="w-full select">
            <span className="label">Paint</span>
            <select
              {...register("bodyPaint")}
              className="select select-bordered w-full"
            >
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
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="electrics" />
        <div className="collapse-title font-semibold">Step 3. Electrics</div>
        <div className="collapse-content flex flex-col gap-3">
          <label className="w-full select">
            <span className="label">Neck Pickup</span>
            <select
              {...register("pickupA")}
              className="select select-bordered w-full"
            >
              <option disabled>Select neck pickup</option>
              <option value={PickupType.SINGLE}>Single</option>
              <option value={PickupType.DOUBLE}>Double</option>
            </select>
          </label>
          <label className="w-full select">
            <span className="label">Bridge Pickup</span>
            <select
              {...register("pickupC")}
              className="select select-bordered w-full"
            >
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
