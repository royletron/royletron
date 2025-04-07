import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Toggle({
  on,
  children,
}: {
  on: boolean;
  children: React.ReactNode;
}) {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
    }),
    []
  );

  useEffect(() => {
    api.start({
      to: { opacity: on ? 1 : 0 },
      delay: on ? 0 : 200,
    });
  }, [on]);

  return <animated.g style={props}>{children}</animated.g>;
}
