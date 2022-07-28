import React from "react";

import { UpperHandContainer } from "./styles";

import { useMotionValue, useTransform } from "framer-motion";
import { useMedia, useWindowSize } from "react-use";

function UpperHand() {
  const { width, height } = useWindowSize();
  const isMouse = useMedia("(hover: hover) and (pointer: fine)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(
    y,
    isMouse ? [0, height] : [10, 80, 160],
    isMouse ? [0, 10] : [-35, 0, 35],
  );
  const rotateY = useTransform(x, [0, width], [0, 20]);

  React.useEffect(() => {
    if (isMouse) {
      function handleMouse(event: MouseEvent) {
        x.set(event.clientX);
        y.set(event.clientY);
      }

      window.addEventListener("mousemove", handleMouse, {
        passive: true,
      });

      return () => {
        window.removeEventListener("mousemove", handleMouse);
      };
    } else {
      const handleOrientation = ({ beta = null }: DeviceOrientationEvent) => {
        // if (alpha) {
        //   x.set(alpha);
        // }
        if (beta) {
          y.set(beta);
        }
      };

      y.set(80);

      window.addEventListener("deviceorientation", handleOrientation, {
        passive: true,
      });
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    }
  }, [x, y, isMouse]);

  return (
    <UpperHandContainer
      src="/assets/upper-hand.png"
      initial={{ x: -500, y: -500 }}
      animate={{ x: 0, y: 0, transition: { duration: 3 } }}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
      }}
    />
  );
}

export default UpperHand;
