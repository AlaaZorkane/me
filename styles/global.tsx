import CSSReset from "./reset";

import { css, Global } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          /* *,
          :after,
          :focus {
            @media (hover: hover) and (pointer: fine) {
              cursor: none !important;
            }
          } */
          *::selection {
            background-color: whitesmoke;
            color: black;
          }
          html {
            color: whitesmoke;
            background-image: url("/assets/bg.png");
            background-repeat: repeat;
            font-family: "Comfortaa", cursive;
            height: 100%;
            width: 100%;
          }
          * {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
          }
        `}
      />
    </>
  );
};
