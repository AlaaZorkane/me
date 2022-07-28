import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const EyeCandyContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
`;
