import React from "react";

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import gsap from "gsap";

const CursorFollower = styled.div`
  position: fixed;
  z-index: 9999;
  mix-blend-mode: difference;
  pointer-events: none;
  transform: translate(-50%, -50%);
`;

type CursorType =
  | "pointer"
  | "text"
  | "grab"
  | "grabbing"
  | "initial"
  | "custom";

function CursorContainer() {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const [type, setType] = React.useState<CursorType>("initial");

  // Movement effect
  React.useEffect(() => {
    if (!cursorRef.current) {
      return;
    }

    const cursor = cursorRef.current;
    gsap.set(cursor, {});

    const spin = gsap.to(cursor, {
      rotation: "+=" + 20 * 1000,
      duration: 1000,
      repeat: -1,
      ease: "none",
    });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.x;
      mouse.y = e.y;

      if (e.target instanceof HTMLElement || e.target instanceof SVGElement) {
        if (e.target.dataset.cursor) {
          spin.play();
          setType(e.target.dataset.cursor as any);
          return;
        }
        if (e.target.closest("button") || e.target.closest("a")) {
          spin.play();
          setType("pointer");
          return;
        } else if (
          e.target.closest("p") ||
          e.target.closest("span") ||
          e.target.closest("h1") ||
          e.target.closest("h2") ||
          e.target.closest("h3") ||
          e.target.closest("h4") ||
          e.target.closest("h5") ||
          e.target.closest("h6") ||
          e.target.closest("input") ||
          e.target.closest("textarea")
        ) {
          setType("text");
          spin.progress(0);
          spin.pause();
          return;
        }
      }
      spin.play();
      setType("initial");
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Click effect
  // React.useEffect(() => {
  //   function handleMouseClick() {
  //     if (type === "pointer") {
  //       console.log("TODO: click animation");
  //     }
  //   }

  //   window.addEventListener("click", handleMouseClick);

  //   return () => {
  //     window.removeEventListener("click", handleMouseClick);
  //   };
  // }, [type]);

  return (
    <CursorFollower ref={cursorRef}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {(() => {
          switch (type) {
            case "initial":
              return (
                <motion.path
                  initial={{ scale: 0.7 }}
                  animate={{ opacity: 1, scale: 0.8 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ ease: "easeInOut" }}
                  d="M13.4019 1.5C14.5566 -0.499999 17.4434 -0.5 18.5981 1.5L30.7224 22.5C31.8771 24.5 30.4338 27 28.1244 27H3.87565C1.56624 27 0.122867 24.5 1.27757 22.5L13.4019 1.5Z"
                  fill="white"
                />
              );

            case "pointer":
              return (
                <motion.circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="white"
                  transition={{ ease: "easeInOut" }}
                  initial={{ scale: 0.55 }}
                  animate={{ opacity: 1, scale: 0.5 }}
                  exit={{ opacity: 0, scale: 0 }}
                />
              );

            case "text":
              return (
                <motion.rect
                  transition={{ ease: "easeInOut" }}
                  animate={{ opacity: 1, scale: 0.8 }}
                  exit={{ opacity: 0, scale: 0 }}
                  width="8"
                  rx="6"
                  height="40"
                  fill="white"
                />
              );

            default:
              return null;
          }
        })()}
      </svg>
    </CursorFollower>
  );
}

export default CursorContainer;
