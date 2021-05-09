import React from "react";
import { useSpring, animated } from "react-spring";
export const Animate = ({ children }: any) => {
  const rotation = 0;
  const timing = 150;
  const [isBooped, setIsBooped] = React.useState(false);
  //   const style = {
  //     display: "inline-block",
  //     // backfaceVisibility: "hidden",
  //     transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
  //     transition: `transform ${timing}ms`,
  //   };
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
    // alert("hello");
  };

  const props = useSpring({
    to: {
      transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
      transition: `transform ${timing}ms`,
      display: "inline-block",
      //   backfaceVisibility: "hidden",
    },
    from: {
      transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
      transition: `transform ${timing}ms`,
      display: "inline-block",
      //   backfaceVisibility: "hidden",
    },
  });
  return (
    <animated.div onMouseEnter={trigger} style={props}>
      {children}
    </animated.div>
  );
};
