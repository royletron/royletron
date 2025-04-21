import React, { useEffect } from "react";

import { animated, useSpring } from "@react-spring/web";
import { PickguardTexture } from "./guards";

export default function AnimatedTextureContainer({
  children,
  texture,
  fill,
  fillOpacity = 1,
  textureOpacity = 1,
}: {
  children: React.ReactNode;
  texture?: string;
  fill?: string;
  fillOpacity?: number;
  textureOpacity?: number;
}) {
  const [styles, api] = useSpring(() => ({
    from: {
      fill,
      fillOpacity,
    },
  }));

  const perspex =
    texture === PickguardTexture.GREEN_PERSPEX ||
    texture === PickguardTexture.ORANGE_PERSPEX;

  if (perspex) {
    textureOpacity = 0.8;
    fillOpacity = 0;
  }

  useEffect(() => {
    api.start({ fill, fillOpacity });
  }, [fill, fillOpacity]);

  return (
    <>
      <g fill={`url(#${texture})`} fillOpacity={textureOpacity}>
        {children}
      </g>
      <animated.g style={{ mixBlendMode: "multiply", ...styles }}>
        {children}
      </animated.g>
    </>
  );
}
