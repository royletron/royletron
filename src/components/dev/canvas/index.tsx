import { Renderer } from "@tldraw/core";
import { app, useAppState } from "./state";
import { useEffect } from "react";

export default function Canvas() {
  const {
    onPinch,
    onPinchStart,
    onPinchEnd,
    onPan,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    shapeUtils,
    createGhostShape,
  } = app;

  useEffect(() => {
    const evtSource = new EventSource("https://drawered.anton.rip/events");
    evtSource.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        createGhostShape(data);
      } catch (error) {
        console.error(error);
      }
    };
    return () => evtSource.close();
  }, [createGhostShape]);
  const { page, pageState } = useAppState();
  return (
    <div className="absolute inset-0 fill-base-content">
      <Renderer
        page={page}
        pageState={pageState}
        shapeUtils={shapeUtils as any}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPinch={onPinch}
        onPinchStart={onPinchStart}
        onPinchEnd={onPinchEnd}
        onPan={onPan}
        theme={{ background: "rgba(0, 0, 0, 0)" }}
      />
    </div>
  );
}
