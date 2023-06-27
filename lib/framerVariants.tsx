export const staggerVariant = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export const textVerticalFadeMoveFromBottomVariant = {
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      type: "spring",
      duration: 1,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};
