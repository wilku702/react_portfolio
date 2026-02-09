export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerHalf = {
  animate: { transition: { staggerChildren: 0.05 } }
};

export const staggerOne = {
  animate: { transition: { staggerChildren: 0.25 } }
};

export const bannerFadeInVariants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: defaultEasing },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.4, duration: 0.8, ease: defaultEasing },
  }
};

export const bannerFadeInUpVariants = {
  initial: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delayChildren: 0.4, duration: 0.8, ease: defaultEasing },
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing },
  }
};

export const defaultPageFadeInVariants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
  }
};

export const articleVariants = {
  normal: {
    zIndex: 3,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: defaultEasing }
  },
  clicked: {
    zIndex: 3,
    scale: 0.85,
    opacity: 0,
    transition: { duration: 0.5, ease: defaultEasing }
  }
};
