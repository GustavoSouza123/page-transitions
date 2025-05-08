export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 1,
    y: -100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: '100vh',
		// opacity: 0,
  },
  enter: {
    y: '100vh',
    // opacity: 0,
  },
  exit: {
    y: 0,
		opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide2 = {
  initial: {
    y: '100vh',
  },
  enter: {
    y: '100vh',
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};
