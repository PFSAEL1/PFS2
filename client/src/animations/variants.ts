export interface AnimationVariant {
  getHidden?: () => { opacity: number; x: number };
  hidden?: { opacity: number; x: number };
  visible: { opacity: number; x: number };
}

export const getAnimationDistance = (): number => {
  if (typeof window === "undefined") return 60;
  const width = window.innerWidth;
  if (width <= 480) return 40;
  if (width <= 1024) return 60;
  return 80;
};

export const fadeIn: AnimationVariant = {
  getHidden: () => ({
    opacity: 0,
    x: 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const slideLeft: AnimationVariant = {
  getHidden: () => ({
    opacity: 0,
    x: -getAnimationDistance(),
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const slideRight: AnimationVariant = {
  getHidden: () => ({
    opacity: 0,
    x: getAnimationDistance(),
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
};
