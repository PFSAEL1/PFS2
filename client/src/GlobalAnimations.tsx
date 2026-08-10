import { useEffect } from "react";
import { animate } from "framer-motion";
import { useLocation } from "wouter";
import {
  fadeIn,
  slideLeft,
  slideRight,
  slideUp,
  scaleUp,
  stagger,
} from "./animations/variants";

const animations = {
  fadeIn,
  slideLeft,
  slideRight,
  slideUp,
  scaleUp,
  stagger,
};

export default function GlobalAnimations() {
  const [location] = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const animationName = element.dataset.animation;
          if (!animationName) return;

          const animation = animations[animationName as keyof typeof animations];
          if (!animation) return;

          // Use exact PFS settings: duration 2s, easeOut
          animate(element, animation.visible, {
            duration: 0.6,
            ease: "easeOut",
          });

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.1, // lower than PFS 0.8 so off-screen elements also trigger on scroll
      }
    );

    const initAnimations = () => {
      const elements = document.querySelectorAll<HTMLElement>("[data-animation]");

      elements.forEach((element) => {
        if (element.dataset.animated) return;

        const animationName = element.dataset.animation;
        if (!animationName) return;

        const animation = animations[animationName as keyof typeof animations];
        if (!animation) return;

        // Apply initial hidden styles exactly as PFS does
        Object.assign(element.style, animation.hidden);

        observer.observe(element);
        element.dataset.animated = "true";
      });
    };

    initAnimations();

    // Re-scan when new content mounts (e.g. lazy-loaded sections)
    const mutationObserver = new MutationObserver(initAnimations);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location]);

  return null;
}