import styled from "@emotion/styled";
import { motion } from "framer-motion";

/**
 * Centers all elements in the page horizontally and vertically
 */
export const Centered = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
