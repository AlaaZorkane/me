import type { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item: Variants = {
  hidden: {
    opacity: 0,
    y: -4,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
