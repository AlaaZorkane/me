import React from "react";

import CursorContainer from "./container";

import { useMedia } from "react-use";

interface Props {
  children: React.ReactNode;
}

function Cursor({ children }: Props) {
  const isMouse = useMedia("(hover: hover) and (pointer: fine)");

  if (isMouse)
    return (
      <>
        <CursorContainer />
        {children}
      </>
    );
  return <>children</>;
}

export default Cursor;
