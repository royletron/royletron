import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
  useTransformEffect,
} from "react-zoom-pan-pinch";
import Raw from "../NQ/raw";
import useSize from "@react-hook/size";

import { toBlob, toPng } from "html-to-image";

import { useRotation } from "..";
import { classes, classIf } from "~/utils/utils";
import { Foreground } from "./PhotoOverlay";

import FileSaver from "file-saver";

interface PhotoBoothProps {
  open: boolean;
  onClose: () => void;
}

interface PhotoControlsProps {
  onTakeScreenshot: () => void;
  aspectRatio: AspectRatio;
  setAspectRatio: (aspectRatio: AspectRatio) => void;
}

export enum AspectRatio {
  Square = "1",
  Portrait = "2",
}

function PhotoControls({
  onTakeScreenshot,
  aspectRatio,
  setAspectRatio,
}: PhotoControlsProps) {
  const { zoomIn, zoomOut } = useControls();
  const { rotation, setRotation } = useRotation();

  const [scale, setScale] = useState(0.7);

  const updateScale = (e) => {
    const targetScale = parseFloat(e.target.value);
    const factor = Math.log(targetScale / scale);

    if (targetScale > scale) {
      zoomIn(factor, 0);
    } else {
      zoomOut(-factor, 0);
    }

    setScale(targetScale);
  };

  useTransformEffect((ref) => {
    setScale(ref.state.scale);
  });

  return (
    <div className=" flex flex-row justify-center gap-4 w-full py-4 ">
      <div className="flex-1 flex justify-end gap-2">
        <div className="flex flex-col gap-0.5 flex-1 items-end">
          <label className="label">Zoom</label>
          <input
            className="range max-w-full"
            min={0.5}
            max={5}
            step={0.1}
            type="range"
            value={scale}
            onChange={updateScale}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <a
          className="btn rounded-full btn-xl btn-square btn-error"
          onClick={onTakeScreenshot}
        ></a>
        <div className="flex flex-col gap-0.5 justify-end">
          <label className="label"></label>
          <a
            className="btn btn-square btn-sm"
            onClick={() => {
              setAspectRatio(
                aspectRatio === AspectRatio.Square
                  ? AspectRatio.Portrait
                  : AspectRatio.Square
              );
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <rect width="12" height="20" x="6" y="2" rx="2" />
              <rect width="20" height="12" x="2" y="6" rx="2" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="flex flex-col gap-0.5 flex-1">
          <label className="label">Rotate</label>
          <input
            className="range max-w-full"
            min={0}
            max={360}
            type="range"
            value={rotation}
            onChange={(e) => {
              setRotation(parseInt(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Flashbulb({ run }: { run: number | undefined }) {
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
  }));

  useEffect(() => {
    if (!run) return;
    api.start({
      opacity: 1,
      config: { duration: 100 },
      onRest: () => {
        api.start({ opacity: 0, config: { duration: 100 } });
      },
    });
  }, [run]);

  return (
    <animated.div
      className="bg-white absolute inset-0 z-50 pointer-events-none"
      style={styles}
    ></animated.div>
  );
}

interface PassthruProps {
  positionX: number;
  positionY: number;
  scale: number;
  open: boolean;
}

export default function PhotoBooth({ open, onClose }: PhotoBoothProps) {
  const [styles, api] = useSpring(() => ({
    from: { transform: "translate(0, -100%)", opacity: 0 },
  }));
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(
    AspectRatio.Square
  );

  const ref = useRef<HTMLDivElement>(null);

  const target = useRef<HTMLDivElement>(null);
  const [width, height] = useSize(target);

  const [screen, setScreen] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (open) {
      api.start({ transform: "translate(0, 0)", opacity: 1 });
    } else {
      api.start({ transform: "translate(0, -100%)", opacity: 0 });
    }
  }, [open, api]);

  const takeScreenshot = () => {
    if (!ref.current) return;
    setScreen(Date.now());
    toBlob(ref.current, {
      cacheBust: true,
      canvasHeight: aspectRatio == AspectRatio.Portrait ? 1024 / (2 / 3) : 1024,
      canvasWidth: 1024,
    })
      .then((blob) => {
        if (navigator.canShare() && blob) {
          navigator
            .share({
              files: [
                new File([blob], "ancoats-guitar.png", { type: "image/png" }),
              ],
              title: "Ancoats NQ",
              text: "Check out this custom guitar!",
            })
            .then(() => console.log("Share successful"))
            .catch((error) => console.error("Error sharing:", error));
        }
        FileSaver.saveAs(blob, "ancoats-guitar.png");
      })
      .catch((err) => {
        console.error("oops, something went wrong!", err);
      });
  };

  const { instance } = useControls();
  return (
    <animated.div className="fixed inset-0 z-10" style={styles}>
      <Flashbulb run={screen} />
      <TransformWrapper minScale={0.5} maxScale={5}>
        {/* <Passthru
          open={open}
          scale={instance.transformState.scale}
          positionX={instance.transformState.positionX}
          positionY={instance.transformState.positionY}
        /> */}
        <div className="inset-0 absolute bg-neutral-100 z-10 p-4 flex flex-col">
          <a
            className="absolute btn btn-square top-4 right-4 z-20"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
          <div
            className="relative flex-1 w-full overflow-hidden flex items-center justify-center"
            ref={target}
          >
            <div
              className={classes(
                "bg-amber-950 m-auto",
                classIf(aspectRatio == AspectRatio.Portrait, "aspect-[2/3]"),
                classIf(aspectRatio == AspectRatio.Square, "aspect-square")
              )}
              style={
                (aspectRatio === AspectRatio.Square ? width : width / (2 / 3)) >
                height
                  ? { height }
                  : { width }
              }
            >
              <div
                className={classes(
                  "bg-repeat w-full relative overflow-hidden",
                  classIf(aspectRatio == AspectRatio.Portrait, "aspect-[2/3]"),
                  classIf(aspectRatio == AspectRatio.Square, "aspect-square")
                )}
              >
                <div
                  ref={ref}
                  className="absolute inset-0 overflow-hidden bg-white"
                >
                  <TransformComponent
                    wrapperStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                    contentStyle={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Raw />
                  </TransformComponent>
                  <Foreground aspectRatio={aspectRatio} />
                </div>
              </div>
            </div>
          </div>
          <PhotoControls
            onTakeScreenshot={takeScreenshot}
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
          />
        </div>
      </TransformWrapper>
    </animated.div>
  );
}
