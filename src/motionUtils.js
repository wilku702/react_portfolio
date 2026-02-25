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

/* ── ArticlePage scroll/reveal animation variants ── */

export const scrollFadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: defaultEasing },
  viewport: { once: true, amount: 0.2 },
};

export const slideFromLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  viewport: { once: true, amount: 0.2 },
};

export const slideFromRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  viewport: { once: true, amount: 0.2 },
};

export const scaleUp = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.2 },
};

export const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export const galleryItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: defaultEasing },
  },
};

export const splitContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export const splitLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export const splitRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};
