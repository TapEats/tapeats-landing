export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
      },
    }),
  };