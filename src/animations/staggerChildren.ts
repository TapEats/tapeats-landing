export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });