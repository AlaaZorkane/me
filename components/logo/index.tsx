import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LogoLetter = styled(motion.h2, {
  label: "Logo, the letter 'a' written in Comfortaa font",
})`
  font-family: "Comfortaa", cursive;
  font-size: 9rem;
  font-weight: bold;
  margin: -2rem 0;
  &::before {
    content: "a";
  }
`;

export const LogoMemoji = styled(motion.img)`
  content: url(/assets/memoji.png);
`;

export const LogoProfile = styled(motion.img)`
  content: url(/assets/profile.jpg);
`;
