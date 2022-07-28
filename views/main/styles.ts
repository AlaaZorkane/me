import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { bp } from "~/styles/bp";

export const MainContainer = styled(motion.div)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MainName = styled(motion.h1)`
  font-size: 2.5em;
  text-align: center;
  ${bp("lg")} {
    font-size: 3em;
  }
`;

export const MainOccupation = styled(motion.h3)`
  font-size: 1.5em;
  text-align: center;
`;

export const SocialLinks = styled.div`
  gap: 0.5em;
  display: flex;
  font-size: 1.6em;
  padding: 0.5em;
`;

export const ResetButton = styled(motion.button)`
  position: fixed;
  bottom: 3vh;
  left: 2vw;
  font-size: 1.5em;
  padding: 8px;
  border-radius: 4px;
  z-index: 99;
`;
