export const titleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.5,
      staggerChildren: 0.3
    }
  }
};

export const childOpacityVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const fluidEnteringVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export const fluidChildrenVariants = {
  hidden: {
    opacity: 0,
    y: -70
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1.5
    }
  }
};

export const hoverVariant = {
  scale: 1.05,
  transition: {
    duration: 0
  }
};
