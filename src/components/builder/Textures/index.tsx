import {
  useTransition,
  animated,
  useSpringRef,
  useSpringValue,
  useSpring,
} from "@react-spring/web";
import { useEffect } from "react";
import useAnimatedStyle from "~/components/hooks/useAnimatedStyle";

export type TextureProps = {
  x: string;
  y: string;
  width: string;
  height: string;
  fill: string;
  filter: string;
};

export const Texture = ({
  x,
  y,
  width,
  height,
  fill,
  filter,
}: TextureProps) => {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        filter={`url(#${filter})`}
      />
    </>
  );
};

const AnimatedRect = ({ x, y, width, height, fill, filter }: TextureProps) => {
  const styles = useAnimatedStyle({ fill });
  return (
    <animated.rect
      x={x}
      y={y}
      width={width}
      height={height}
      filter={`url(#${filter})`}
      style={styles}
    ></animated.rect>
  );
};

export const AnimatedTexture = ({
  x,
  y,
  width,
  height,
  fill,
  filter,
}: TextureProps) => {
  const transRef = useSpringRef();
  const [transitions, api] = useTransition(filter, () => ({
    from: { opacity: 0, fill },
    enter: { opacity: 1, fill },
    leave: { opacity: 0, fill },
    ref: transRef,
  }));

  useEffect(() => {
    transRef.start();
  }, [filter, fill]);

  return transitions((style, item) => (
    <animated.g opacity={style.opacity}>
      <AnimatedRect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        filter={item}
      />
    </animated.g>
  ));
};
