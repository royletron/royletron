import { useEffect, useRef, useState } from "react";
import { PricingLabel, usePricingContext } from "./Pricing";
import { toPng } from "html-to-image";
import Cost, { formatter } from "../NQ/cost";
import { useFormContext } from "react-hook-form";
import { NQType, TunerType } from "../NQ/options";
import {
  BodyWoodTextures,
  FretboardWoodTextures,
  NeckWoodTextures,
} from "../Textures/woods";
import { paintColors } from "../Textures/paints";
import { PickupTypeMap } from "../NQ/pickups";
import { PickguardMap } from "../Textures/guards";

function rotateBase64Image(base64data: string, canvas: HTMLCanvasElement) {
  var image = new Image();
  image.src = base64data;
  image.onload = function () {
    canvas.setAttribute("width", `${image.height}px`);
    canvas.setAttribute("height", `${image.width}px`);
    var ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.translate(image.height, 0);
    ctx.rotate((90 * Math.PI) / 180);
    ctx.drawImage(image, 0, 0);
  };
}

const CostLabel = ({ priceKey }: { priceKey: string }) => {
  const { pricing } = usePricingContext();
  const price = pricing[priceKey] || 0;
  if (price === 0) {
    return;
  }
  return (
    <span className="font-bold ml-1">
      {formatter.format(pricing[priceKey])}
    </span>
  );
};

export default function CostReview() {
  const modal = useRef<HTMLDialogElement>(null);
  const { pricing, total } = usePricingContext();
  const { watch } = useFormContext();
  const [open, setOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
    const guitar = document.getElementById("guitar-svg");
    console.log(guitar);
    if (guitar === null || canvasRef.current == null) {
      return;
    }
    toPng(guitar, {
      cacheBust: true,
      width: parseInt(guitar.getAttribute("width") || "0"),
      height: parseInt(guitar.getAttribute("height") || "0"),
    })
      .then((dataUrl) => {
        if (!canvasRef.current) {
          return;
        }
        rotateBase64Image(dataUrl, canvasRef.current);
      })
      .catch((err) => {
        console.error("oops, something went wrong!", err);
      });
  }, [open]);

  useEffect(() => {
    modal.current?.addEventListener("close", handleClose);
    return () => modal.current?.removeEventListener("close", handleClose);
  }, [handleClose]);

  const base = pricing["type"];
  const upgrades = total - base;
  return (
    <>
      <div className="border-t border-neutral-300 mt-2 pt-3">
        <div className="max-w-md md:max-w-full px-4 w-full mx-auto flex justify-center md:justify-end">
          <a
            className="btn btn-primary w-full md:w-auto md:px-8 flex gap-3 btn-lg"
            onClick={handleOpen}
          >
            <Cost />
            <span>|</span>
            <span>Review</span>
          </a>
        </div>
      </div>
      <dialog ref={modal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Review Your Spec</h3>
          <canvas className="max-w-full" ref={canvasRef} />
          <div className="bg-base-100 border-base-300 collapse border-b !outline-0 collapse-arrow rounded-none">
            <input type="checkbox" className="peer !p-0 !min-h-0" />
            <div className="collapse-title !p-0 !min-h-0 font-bold arrow">
              Details
            </div>
            <div className="collapse-content mt-2 px-0 bg-neutral-100 flex flex-col gap-1 !py-0">
              <div className="flex px-2 py-2 text-sm">
                <div className="flex-3">Orientation</div>
                <div className="flex-1 flex justify-end">
                  {watch("orientation") === "left" ? "Left" : "Right"}
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Type</div>
                <div className="flex-1 flex justify-end">
                  <span>
                    {watch("type") === NQType.STAGE
                      ? "Stage"
                      : watch("type") === NQType.ROCKET
                      ? "Rocket"
                      : "Standard"}
                  </span>
                  <CostLabel priceKey="type" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Hollow Body</div>
                <div className="flex-1 flex justify-end">
                  <span>{watch("hollowBody") === true ? "Yes" : "No"}</span>
                  <CostLabel priceKey="hollowBody" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">German Carve</div>
                <div className="flex-1 flex justify-end">
                  <span>{watch("germanCarve") === true ? "Yes" : "No"}</span>
                  <CostLabel priceKey="germanCarve" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Body Wood</div>
                <div className="flex-1 flex justify-end">
                  <span>
                    {watch("bodyWood") === BodyWoodTextures.KORINA
                      ? "Korina"
                      : "Swamp Ash"}
                  </span>
                  <CostLabel priceKey="bodyWood" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Body Paint</div>
                <div className="flex-1 flex justify-end">
                  <span>
                    {paintColors[watch("bodyPaint")]?.name || "Natural"}
                  </span>
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Neck Length</div>
                <div className="flex-1 flex justify-end">
                  <span>{watch("neckLength")}cm</span>
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Neck Wood</div>
                <div className="flex-1 flex justify-end">
                  <span>
                    {watch("neckWood") === NeckWoodTextures.FLAME_ROAST_MAPLE
                      ? "Flame Roast Maple"
                      : watch("neckWood") === NeckWoodTextures.MAPLE
                      ? "Maple"
                      : "Roast Maple"}
                  </span>
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Fretboard</div>
                <div className="flex-1 flex justify-end">
                  <span>
                    {watch("fretboardWood") ===
                    FretboardWoodTextures.FLAME_ROAST_MAPLE
                      ? "Flame Roast Maple"
                      : watch("fretboardWood") === FretboardWoodTextures.MAPLE
                      ? "Maple"
                      : watch("fretboardWood") ===
                        FretboardWoodTextures.ROSEWOOD
                      ? "Rosewood"
                      : "Roast Maple"}
                  </span>
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Painted Headstock</div>
                <div className="flex-1 flex justify-end">
                  <span>{watch("headstockPaint") === true ? "Yes" : "No"}</span>
                  <CostLabel priceKey="headstockPaint" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Tuners</div>
                <div className="flex-1 flex justify-end">
                  <span>
                    {watch("tuners") === TunerType.LOCKING
                      ? "Locking"
                      : "Standard"}
                  </span>
                  <CostLabel priceKey="tuners" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-1">Neck Pickup</div>
                <div className="flex-1 flex justify-end">
                  <span>{PickupTypeMap[watch("pickupA")]?.name}</span>
                  <CostLabel priceKey="pickupA" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-1">Bridge Pickup</div>
                <div className="flex-1 flex justify-end">
                  <span>{PickupTypeMap[watch("pickupC")]?.name}</span>
                  <CostLabel priceKey="pickupC" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-1">Pickguard</div>
                <div className="flex-1 flex justify-end">
                  <span>{PickguardMap[watch("pickguard")]?.name}</span>
                  <CostLabel priceKey="pickguard" />
                </div>
              </div>
              <div className="flex px-2 py-2 text-sm border-t border-neutral-300">
                <div className="flex-3">Tremolo</div>
                <div className="flex-1 flex justify-end">
                  <span>{watch("tremolo") === true ? "Yes" : "No"}</span>
                  <CostLabel priceKey="tremolo" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 pt-4 gap-y-2">
            <div className="col-span-3">Base Price</div>
            <div className="col-span-1 flex justify-end">
              {formatter.format(base)}
            </div>
            <div className="col-span-3">Upgrades</div>
            <div className="col-span-1 flex justify-end">
              {formatter.format(upgrades)}
            </div>
            <div className="col-span-3 font-black">Total</div>
            <div className="col-span-1 font-black flex justify-end">
              {formatter.format(total)}
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <a className="btn" onClick={handleClose}>
                Close
              </a>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
