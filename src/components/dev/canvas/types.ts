import { TLBinding, TLPage, TLPageState, TLShape } from "@tldraw/core";

export type Easing =
  | "linear"
  | "easeInQuad"
  | "easeOutQuad"
  | "easeInOutQuad"
  | "easeInCubic"
  | "easeOutCubic"
  | "easeInOutCubic"
  | "easeInQuart"
  | "easeOutQuart"
  | "easeInOutQuart"
  | "easeInQuint"
  | "easeOutQuint"
  | "easeInOutQuint"
  | "easeInSine"
  | "easeOutSine"
  | "easeInOutSine"
  | "easeInExpo"
  | "easeOutExpo"
  | "easeInOutExpo";

export interface DrawStyles {
  size: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  easing: Easing;
  thinning: number;
  streamline: number;
  smoothing: number;
  taperStart: number | boolean;
  taperEnd: number | boolean;
  capStart: boolean;
  capEnd: boolean;
  easingStart: Easing;
  easingEnd: Easing;
  isFilled: boolean;
}

export interface DrawShape extends TLShape {
  type: "draw";
  points: number[][];
  style: DrawStyles;
  isDone: boolean;
}

export interface Doc {
  page: TLPage<DrawShape, TLBinding>;
  pageState: TLPageState;
}

export interface State extends Doc {
  appState: {
    status: "idle" | "pinching" | "drawing" | "erasing";
    tool: "drawing" | "erasing";
    editingId?: string;
    style: DrawStyles;
    isPanelOpen: boolean;
  };
}
