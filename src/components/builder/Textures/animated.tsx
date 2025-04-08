import React, { useEffect } from "react";

import { animated, useSpring } from "@react-spring/web";

export default function AnimatedTextureContainer({
  children,
  texture,
  fill,
}: {
  children: React.ReactNode;
  texture?: string;
  fill?: string;
}) {
  const [styles, api] = useSpring(() => ({
    from: {
      fill,
    },
  }));

  useEffect(() => {
    api.start({ fill });
  }, [fill]);
  return (
    <>
      <g fill={`url(#${texture})`}>{children}</g>
      <animated.g style={{ mixBlendMode: "multiply", ...styles }}>
        {children}
      </animated.g>
    </>
  );
}
