import React from "react";

import { viewAtom, Views } from "~/store/layout";
import { ResetButton } from "~/views/main/styles";

import LowerHand from "../hands/lower-hand";
import UpperHand from "../hands/upper-hand";

import { EyeCandyContainer } from "./styles";

import { useUpdateAtom } from "jotai/utils";
import { VscRefresh } from "react-icons/vsc";

function EyeCandy() {
  const setView = useUpdateAtom(viewAtom);

  return (
    <EyeCandyContainer
      key="eyecandy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ filter: "blur(5px)", opacity: 0 }}
      transition={{ ease: "easeInOut" }}
    >
      <ResetButton
        whileHover={{ backgroundColor: "black", rotate: 90 }}
        onClick={() => setView(Views.Main)}
      >
        <VscRefresh />
      </ResetButton>
      <UpperHand />
      <LowerHand />
    </EyeCandyContainer>
  );
}

export default EyeCandy;
