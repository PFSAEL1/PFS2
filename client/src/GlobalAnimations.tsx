import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { animate } from "framer-motion";
import {
  fadeIn,
  slideLeft,
  slideRight,
} from "./animations/variants";

const animations = {
  fadeIn,
  slideLeft,
  slideRight,
};

export default function GlobalAnimations() {
  const [location] = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // 1. Create IntersectionObserver to reveal elements when entering viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const animationName = element.dataset.animation;
          if (!animationName) return;

          const animation = animations[animationName as keyof typeof animations];
          if (!animation) return;

          // Animate smoothly to visible state
          animate(element, animation.visible, {
            duration: 0.6,
            ease: "easeOut",
          });

          // Unobserve immediately after triggering (one-time animation)
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observerRef.current = observer;

    // 2. Discover and initialize elements with [data-animation]
    const initElements = () => {
      const elements = document.querySelectorAll<HTMLElement>("[data-animation]");

      elements.forEach((element) => {
        if (element.dataset.animated === "true") return;

        const animationName = element.dataset.animation;
        if (!animationName) return;

        const animation = animations[animationName as keyof typeof animations];
        if (!animation) return;

        // Set initial hidden state with Framer Motion instantly
        const hiddenState = animation.getHidden ? animation.getHidden() : { opacity: 0 };
        animate(element, hiddenState, { duration: 0 });

        observer.observe(element);
        element.dataset.animated = "true";
      });
    };

    // Run initial scan
    initElements();

    // 3. MutationObserver with requestAnimationFrame debouncing to catch async/lazy-loaded DOM updates
    let scheduled = false;
    const mutationObserver = new MutationObserver(() => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(() => {
          scheduled = false;
          initElements();
        });
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      observerRef.current = null;
    };
  }, [location]);

  return null;
}