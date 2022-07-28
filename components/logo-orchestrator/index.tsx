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
        <motion.div
          key={type}
          variants={logoVariant}
          initial="initial"
          animate="shown"
          exit="exit"
        >
          {(() => {
            switch (type) {
              case LogoType.Profile:
                return <LogoProfile src="/assets/profile.jpg" key="profile" />;
              case LogoType.Letter:
                return <LogoLetter key="letter" />;
              case LogoType.Memoji:
                return <LogoMemoji src="/assets/memoji.png" key="memoji" />;
              default:
                return null;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    </OrchestratorContainer>
  );
}

export default LogoOrchestrator;
