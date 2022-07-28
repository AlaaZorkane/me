import { bp } from "~/styles/bp";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const UpperHandContainer = styled(motion.img)`
  position: absolute;
  top: 0;
  left: -3%;
  height: 25%;
  ${bp("sm")} {
    height: 35%;
  }
  ${bp("md")} {
    height: 40%;
  }
  ${bp("lg")} {
    height: 45%;
  }
  ${bp("xl")} {
    height: 30vw;
  }
  z-index: -1;
`;

export const LowerHandContainer = styled(motion.img)`
  position: absolute;
  bottom: 0;
  right: -1%;
  height: 25%;
  ${bp("sm")} {
    height: 35%;
  }
  ${bp("md")} {
    height: 40%;
  }
  ${bp("lg")} {
    height: 45%;
  }
  ${bp("xl")} {
    height: 30vw;
  }
  z-index: -1;
`;
