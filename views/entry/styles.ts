import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const EntryMotto = styled(motion.p)`
  font-family: "Dancing Script", cursive;
  font-size: 1.5rem;
  position: absolute;
  font-weight: normal;
  text-transform: none;
  white-space: nowrap;
  pointer-events: none;
  top: -3rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const EntryContainer = styled(motion.div)`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EnterButton = styled(motion.button)`
  position: relative;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border: 1px solid whitesmoke;
  text-transform: uppercase;
  user-select: none;
`;
