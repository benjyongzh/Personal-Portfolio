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

export const projectCardHolderVariant = {
  hidden: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const projectCardVariant = {
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      type: "spring",
      duration: 1.4,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.4,
    },
  },
};
