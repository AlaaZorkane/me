import { Centered } from "~/components/layout/centered";
import { AnimatePresence } from "framer-motion";
import { useAtomValue } from "jotai";
import { viewAtom, Views } from "~/store/layout";
import EntryView from "~/views/entry/index";
import MainView from "~/views/main/index";

function Home() {
  const view = useAtomValue(viewAtom);

  return (
    <Centered>
      <AnimatePresence exitBeforeEnter>
        {(() => {
          switch (view) {
            case Views.Entry:
              return <EntryView key="entry" />;
            case Views.Main:
              return <MainView key="main" />;
            default:
              return null;
          }
        })()}
      </AnimatePresence>
    </Centered>
  );
}

export default Home;
