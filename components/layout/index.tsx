import Navbar from "~/components/navbar";
import CursorContainer from "~/components/primitives/cursor/container";
import { viewAtom, Views } from "~/store/layout";

import EyeCandy from "./eye-candy";
import { LayoutContainer } from "./styles";

import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue } from "jotai/utils";
import { useMedia } from "react-use";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const view = useAtomValue(viewAtom);
  const isMouse = useMedia("(hover: hover) and (pointer: fine)", true);

  return (
    <LayoutContainer>
      <AnimatePresence exitBeforeEnter>
        {view === Views.Countdown && <Navbar />}
      </AnimatePresence>
      {isMouse && <CursorContainer />}
      <AnimatePresence exitBeforeEnter>
        {view === Views.Countdown && <EyeCandy />}
      </AnimatePresence>
      {children}
    </LayoutContainer>
  );
}

export default Layout;
