import { useEffect } from "react";
import { useSpring } from "@react-spring/web";

export default function useAnimatedStyle(style: React.CSSProperties) {
  const [props, api] = useSpring(
    () => ({
      from: style,
    }),
    []
  );

  useEffect(() => {
    const newStyle = { ...style };
    for (const key in props) {
      if (!newStyle.hasOwnProperty(key)) {
        newStyle[key] = "";
      }
    }
    api.start({
      to: style,
    });
  }, [style, api]);

  return props;
}
