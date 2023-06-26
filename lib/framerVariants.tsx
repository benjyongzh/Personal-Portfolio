export const pageVariant = {
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      duration: 4,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 4,
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
      staggerDirection: -11,
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
