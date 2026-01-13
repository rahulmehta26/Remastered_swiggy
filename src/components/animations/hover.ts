import { type Variants } from "motion";

export const hover: Variants = {
  initial: {
    pathLength: 1,
  },
  hover: {
    pathLength: [0, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
