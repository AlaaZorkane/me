import React from "react";

import { LowerHandContainer } from "./styles";

import { useMotionValue, useTransform } from "framer-motion";
import { useMedia, useWindowSize } from "react-use";

function LowerHand() {
  const { width, height } = useWindowSize();
  const isMouse = useMedia("(hover: hover) and (pointer: fine)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(
    y,
    isMouse ? [0, height] : [10, 80, 120],
    isMouse ? [-10, 0] : [-40, 0, 40],
  );
  const rotateY = useTransform(x, [0, width], [-20, 0]);

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
      const handleOrientation = ({
        alpha = null,
        beta = null,
      }: DeviceOrientationEvent) => {
        // x.set(alpha);
        y.set(beta);
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
    <LowerHandContainer
      src="/assets/lower-hand.png"
      initial={{ x: 500, y: 500 }}
      animate={{ x: 0, y: 0, transition: { duration: 3 } }}
      transition={{ duration: 3 }}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
      }}
    />
  );
}

export default LowerHand;
