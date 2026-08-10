/**
 * Single-point Motion Library Helper Utility
 * Provides reusable animation helpers built on framer-motion.
 */

import { animate, inView } from "framer-motion";

export const LOW_SPEED_DURATION = 0.85;
export const EASE_CURVE = [0.16, 1, 0.3, 1] as const;

export type MotionTarget = string | HTMLElement | Element | null;

function resolveElement(target: MotionTarget): HTMLElement | null {
  if (!target) return null;
  if (typeof target === "string") {
    return document.querySelector(target) as HTMLElement;
  }
  return target as HTMLElement;
}

export function slideLeft(
  target: MotionTarget,
  options: { delay?: number; duration?: number; distance?: number } = {}
) {
  const el = resolveElement(target);
  if (!el) return;
  const { delay = 0, duration = LOW_SPEED_DURATION, distance = 60 } = options;
  el.style.opacity = "0";
  el.style.transform = `translateX(-${distance}px)`;
  el.style.willChange = "opacity, transform";
  inView(el, () => {
    animate(el, { opacity: 1, x: 0 }, { duration, delay, ease: EASE_CURVE });
  }, { amount: 0.12 });
}

export function slideRight(
  target: MotionTarget,
  options: { delay?: number; duration?: number; distance?: number } = {}
) {
  const el = resolveElement(target);
  if (!el) return;
  const { delay = 0, duration = LOW_SPEED_DURATION, distance = 60 } = options;
  el.style.opacity = "0";
  el.style.transform = `translateX(${distance}px)`;
  el.style.willChange = "opacity, transform";
  inView(el, () => {
    animate(el, { opacity: 1, x: 0 }, { duration, delay, ease: EASE_CURVE });
  }, { amount: 0.12 });
}

export function fadeIn(
  target: MotionTarget,
  options: { delay?: number; duration?: number } = {}
) {
  const el = resolveElement(target);
  if (!el) return;
  const { delay = 0, duration = LOW_SPEED_DURATION } = options;
  el.style.opacity = "0";
  el.style.willChange = "opacity";
  inView(el, () => {
    animate(el, { opacity: 1 }, { duration, delay, ease: EASE_CURVE });
  }, { amount: 0.1 });
}

export function animateGroup(
  selector: string | Element[],
  type: "slide-left" | "slide-right" | "fade" = "fade",
  stagger: number = 0.12
) {
  const elements = typeof selector === "string"
    ? Array.from(document.querySelectorAll(selector))
    : selector;
  elements.forEach((el, i) => {
    const delay = i * stagger;
    if (type === "slide-left") slideLeft(el as HTMLElement, { delay });
    else if (type === "slide-right") slideRight(el as HTMLElement, { delay });
    else fadeIn(el as HTMLElement, { delay });
  });
}

// Global window helpers
if (typeof window !== "undefined") {
  (window as any).pfsMotion = { slideLeft, slideRight, fadeIn, animateGroup, animate, inView };
}

export { animate, inView };
