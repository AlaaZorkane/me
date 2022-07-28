import React from "react";

import { viewAtom, Views } from "~/store/layout";

import { EnterButton, EntryContainer, EntryMotto } from "./styles";

import { Variants } from "framer-motion";
import { useUpdateAtom } from "jotai/utils";

const btnVariants: Variants = {
  initial: {
    boxShadow: "-4px -4px 0px 0px rgba(255, 255, 255, 0.897)",
  },
  hover: {
    boxShadow: "4px 4px 0px 0px rgba(255, 255, 255, 0.897)",
  },
  tap: {
    boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0.897)",
  },
};

const mottoVariants = {
  initial: {
    opacity: 0,
    filter: "blur(5px)",
  },
  hover: {
    opacity: 1,
    filter: "blur(0px)",
  },
};

function EntryView() {
  const setView = useUpdateAtom(viewAtom);

  return (
    <EntryContainer
      initial={{ scale: 0.8, opacity: 0, filter: "blur(5px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      exit={{ filter: "blur(5px)", opacity: 0 }}
      transition={{ ease: "easeInOut" }}
      layout
    >
      <EnterButton
        variants={btnVariants}
        initial="initial"
        whileHover="hover"
        onClick={() => setView(Views.Main)}
        whileTap="tap"
      >
        <EntryMotto variants={mottoVariants} transition={{ ease: "easeInOut" }}>
          &#8220; I solemnly swear that I am up to no good &#8221;
        </EntryMotto>
        E N T E R
      </EnterButton>
    </EntryContainer>
  );
}

export default EntryView;
