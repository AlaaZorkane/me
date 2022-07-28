import { useAtom, useSetAtom } from "jotai";
import { logoAtom, LogoType } from "~/store/logo";
import { AnimatePresence, motion } from "framer-motion";
import { LogoLetter, LogoMemoji, LogoProfile } from "../logo/index";
import { OrchestratorContainer } from "../logo/styles";
import { logoVariant } from "./variants";
import React from "react";

const MouseOrchestrator = () => {
  const setType = useSetAtom(logoAtom);

  React.useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      const sectionWidth = window.innerWidth / 3;

      const x = ev.clientX;

      if (x < sectionWidth) {
        setType(LogoType.Profile);
      }
      if (x > sectionWidth && x < sectionWidth * 2) {
        setType(LogoType.Letter);
      }
      if (x > sectionWidth * 2) {
        setType(LogoType.Memoji);
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

function LogoOrchestrator() {
  const [type, setType] = useAtom(logoAtom);

  const handleTap = () => {
    setType((prevType) => {
      return prevType + 1 > 2 ? 0 : prevType + 1;
    });
  };

  return (
    <OrchestratorContainer onTap={handleTap} role="button">
      <MouseOrchestrator />
      <AnimatePresence exitBeforeEnter>
        {type === LogoType.Letter && (
          <LogoLetter
            key="letter"
            variants={logoVariant}
            initial="initial"
            exit="exit"
            animate="shown"
            aria-description="Logo, the letter 'a' written in a cursive font"
          />
        )}
        {type === LogoType.Memoji && (
          <LogoMemoji
            key="memoji"
            variants={logoVariant}
            initial="initial"
            exit="exit"
            animate="shown"
          />
        )}
        {type === LogoType.Profile && (
          <LogoProfile
            key="profile"
            initial="initial"
            exit="exit"
            animate="shown"
            variants={logoVariant}
          />
        )}
      </AnimatePresence>
    </OrchestratorContainer>
  );
}

export default LogoOrchestrator;
