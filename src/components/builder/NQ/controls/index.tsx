import { useFormContext } from "react-hook-form";
import Rocket from "./rocket";
import Stage from "./stage";
import { NQType } from "../options";

import { useTransition, animated } from "@react-spring/web";
import { useEffect } from "react";
import Standard from "./standard";

export default function Controls() {
  const { watch } = useFormContext();
  const type = watch("type");
  const [transitions, api] = useTransition(type, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }));

  useEffect(() => {
    api.start();
  }, [api, type]);

  return transitions((style, item) => (
    <animated.g opacity={style.opacity}>
      {item === NQType.ROCKET && <Rocket />}
      {item === NQType.STAGE && <Stage />}
      {item === NQType.STANDARD && <Standard />}
    </animated.g>
  ));
}
