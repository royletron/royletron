import {
  useTransition,
  animated,
  useSpringRef,
  useSpringValue,
  useSpring,
} from "@react-spring/web";
import { useEffect } from "react";
import useAnimatedStyle from "~/components/hooks/useAnimatedStyle";
import Toggle from "../components/Toggle";

export type TextureProps = React.SVGProps<SVGRectElement> & {
  fill: string;
  filter: string;
};

export const Texture = ({ fill, filter, ...props }: TextureProps) => {
  return (
    <>
      <rect fill={fill} filter={`url(#${filter})`} {...props} />
    </>
  );
};

const AnimatedRect = ({ fill, filter, ...props }: TextureProps) => {
  const styles = useAnimatedStyle({ fill });
  return (
    <animated.rect
      filter={`url(#${filter})`}
      style={styles}
      {...props}
      ref={null}
    ></animated.rect>
  );
};

export const AnimatedTexture = ({ fill, filter, ...props }: TextureProps) => {
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
      <AnimatedRect fill={fill} filter={item} {...props} />
    </animated.g>
  ));
};

export const AnimatedMountedTexture = ({
  fill,
  filter,
  allFilters,
  ...props
}: TextureProps & { allFilters: string[] }) => {
  return (
    <g data-filter={filter}>
      {allFilters.map((f) => (
        <Toggle key={f} on={f === filter}>
          <AnimatedRect fill={fill} filter={f} {...props} />
        </Toggle>
      ))}
    </g>
  );
};
