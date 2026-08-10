// Animation variant definitions for GlobalAnimations.tsx
// Format: hidden = initial CSS applied immediately; visible = target for framer-motion animate()
// Note: framer-motion's imperative animate() accepts CSS property strings (transform, opacity)

export const fadeIn = {
  hidden: {
    opacity: "0",
    transform: "translateX(0px)",
  },
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
  },
};

export const slideLeft = {
  hidden: {
    opacity: "0",
    transform: "translateX(-100px)",
  },
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
  },
};

export const slideRight = {
  hidden: {
    opacity: "0",
    transform: "translateX(100px)",
  },
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
  },
};

export const slideUp = {
  hidden: {
    opacity: "0",
    transform: "translateY(50px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
  },
};

export const scaleUp = {
  hidden: {
    opacity: "0",
    transform: "scale(0.9)",
  },
  visible: {
    opacity: 1,
    transform: "scale(1)",
  },
};

export const stagger = {
  hidden: {
    opacity: "0",
    transform: "translateY(30px)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
  },
};