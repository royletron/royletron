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
  dark: boolean;
  setDark: (dark: boolean) => void;
}

export enum AspectRatio {
  Square = "1",
  Portrait = "2",
}

function PhotoControls({
  onTakeScreenshot,
  aspectRatio,
  setAspectRatio,
  dark,
  setDark,
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
    <div className="flex flex-row justify-center items-center gap-4 w-full py-4 ">
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
          <label className="toggle text-base-content mt-2">
            <input
              type="checkbox"
              checked={aspectRatio === AspectRatio.Square}
              onChange={(e) => {
                setAspectRatio(
                  e.target.checked ? AspectRatio.Square : AspectRatio.Portrait
                );
              }}
            />
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
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
            </svg>
          </label>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <a
          className="btn rounded-full btn-xl btn-square btn-error shutter"
          onClick={onTakeScreenshot}
        ></a>
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
          <label className="toggle text-base-content mt-2">
            <input
              type="checkbox"
              checked={dark}
              onChange={(e) => {
                setDark(e.target.checked);
              }}
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="size-4"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="size-4"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
            </svg>
          </label>
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
  const [dark, setDark] = useState(false);

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
        if (!blob) return;
        const shareData = {
          files: [
            new File([blob], "ancoats-guitar.png", { type: "image/png" }),
          ],
          title: "Ancoats NQ",
          text: "Check out this custom guitar!",
        };
        if (navigator.canShare(shareData)) {
          navigator
            .share(shareData)
            .then(() => console.log("Share successful"))
            .catch((error) => console.error("Error sharing:", error));
        }
        FileSaver.saveAs(blob, "ancoats-guitar.png");
      })
      .catch((err) => {
        console.error("oops, something went wrong!", err);
      });
  };

  return (
    <animated.div className="fixed inset-0 z-10" style={styles}>
      <Flashbulb run={screen} />
      <TransformWrapper minScale={0.5} maxScale={5}>
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
                "m-auto",
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
                  className={classes(
                    "absolute inset-0 overflow-hidden transition-colors",
                    classIf(dark, "bg-neutral-900"),
                    classIf(!dark, "bg-white")
                  )}
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
                  <Foreground
                    aspectRatio={aspectRatio}
                    color={dark ? "white" : "black"}
                  />
                </div>
              </div>
            </div>
          </div>
          <PhotoControls
            onTakeScreenshot={takeScreenshot}
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
            dark={dark}
            setDark={setDark}
          />
        </div>
      </TransformWrapper>
    </animated.div>
  );
}
