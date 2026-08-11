import { useEffect } from "react";
import { animate } from "framer-motion";
import {
  fadeIn,
  slideLeft,
  slideRight
} from "./animations/variants";

const animations = {
  fadeIn,
  slideLeft,
  slideRight
};

export default function GlobalAnimations() {

  // working code

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          const animationName = element.dataset.animation;

          if (!animationName) return;

          const animation =
            animations[animationName as keyof typeof animations];

          if (!animation) return;

          animate(element, animation.visible, {
            duration: 0.6,
            ease: "easeOut",
          });

          observer.unobserve(element);

        });
      },
      {
        threshold: 0.8,
      }
    );

    const initAnimations = () => {
      const elements =
        document.querySelectorAll<HTMLElement>("[data-animation]");

      elements.forEach((element) => {

        if (element.dataset.animated) return;

        const animationName = element.dataset.animation;

        if (!animationName) return;

        const animation =
          animations[animationName as keyof typeof animations];

        if (!animation) return;

        Object.assign(element.style, animation.hidden);

        observer.observe(element);

        element.dataset.animated = "true";
      });
    };

    initAnimations();

    // return () => observer.disconnect();

    // Our Process Section

    // const processLists =
    //   document.querySelectorAll<HTMLOListElement>(".pfs-steps");

    // const processObservers: IntersectionObserver[] = [];

    // const processScrollHandlers: (() => void)[] = [];

    // processLists.forEach((list) => {
    //   const items =
    //     Array.from(list.querySelectorAll<HTMLElement>(".pfs-step"));

    //   const progress =
    //     list.querySelector<HTMLElement>(".pfs-steps__progress");

    //   if (!items.length) return;

    //   /*
    //    * Step reveal observer
    //    */
    //   const processObserver = new IntersectionObserver(
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //           entry.target.classList.add("is-visible");
    //         }
    //       });
    //     },
    //     {
    //       threshold: 0.35,
    //       rootMargin: "0px 0px -10% 0px",
    //     }
    //   );

    //   items.forEach((item) => {
    //     processObserver.observe(item);
    //   });

    //   processObservers.push(processObserver);

    //   /*
    //    * Progress bar
    //    */
    //   const onScroll = () => {
    //     if (!progress) return;

    //     const rect = list.getBoundingClientRect();

    //     const total = rect.height - 24;

    //     const scrolled =
    //       window.innerHeight * 0.55 - rect.top;

    //     const height = Math.max(
    //       0,
    //       Math.min(total, scrolled)
    //     );

    //     progress.style.height = `${height}px`;
    //   };

    //   onScroll();

    //   window.addEventListener("scroll", onScroll, {
    //     passive: true,
    //   });

    //   window.addEventListener("resize", onScroll);

    //   processScrollHandlers.push(onScroll);
    // });

    // =====================================================
    // OUR PROCESS SECTION
    // =====================================================

    const processLists =
      document.querySelectorAll<HTMLOListElement>(
        ".pfs-steps"
      );

    const processObservers: IntersectionObserver[] = [];

    const processScrollHandlers: (() => void)[] = [];

    processLists.forEach((list) => {

      const items =
        Array.from(
          list.querySelectorAll<HTMLElement>(
            ".pfs-step"
          )
        );

      const progress =
        list.querySelector<HTMLElement>(
          ".pfs-steps__progress"
        );

      if (!items.length) return;


      // ===================================================
      // STEP REVEAL
      // ===================================================

      const processObserver =
        new IntersectionObserver(
          (entries) => {

            entries.forEach((entry) => {

              if (!entry.isIntersecting) return;

              entry.target.classList.add(
                "is-visible"
              );

            });

          },
          {
            threshold: 0.35,
            rootMargin:
              "0px 0px -10% 0px",
          }
        );


      items.forEach((item) => {
        processObserver.observe(item);
      });


      processObservers.push(
        processObserver
      );


      // ===================================================
      // SCROLL
      // PROGRESS + ACTIVE STEP
      // ===================================================

      const onScroll = () => {

        // -----------------------------------------------
        // PROGRESS LINE
        // -----------------------------------------------

        const rect =
          list.getBoundingClientRect();

        const total =
          rect.height - 24;

        const scrolled =
          window.innerHeight * 0.55 -
          rect.top;

        const height =
          Math.max(
            0,
            Math.min(
              total,
              scrolled
            )
          );


        if (progress) {
          progress.style.height =
            `${height}px`;
        }


        // -----------------------------------------------
        // FIND ACTIVE STEP
        // -----------------------------------------------

        const viewportCenter =
          window.innerHeight / 2;

        let closestIndex = 0;

        let closestDistance =
          Infinity;


        items.forEach(
          (item, index) => {

            const itemRect =
              item.getBoundingClientRect();

            const itemCenter =
              itemRect.top +
              itemRect.height / 2;

            const distance =
              Math.abs(
                itemCenter -
                viewportCenter
              );


            if (
              distance <
              closestDistance
            ) {

              closestDistance =
                distance;

              closestIndex =
                index;

            }

          }
        );


        // -----------------------------------------------
        // UPDATE ACTIVE STEP
        // -----------------------------------------------

        // items.forEach(
        //   (item, index) => {

        //     item.classList.toggle(
        //       "is-active",
        //       index === closestIndex
        //     );

        //   }
        // );
        items.forEach((item, index) => {
          item.classList.toggle(
            "is-active",
            index <= closestIndex
          );
        });
      };


      // Run immediately
      onScroll();


      // Scroll
      window.addEventListener(
        "scroll",
        onScroll,
        {
          passive: true,
        }
      );


      // Resize
      window.addEventListener(
        "resize",
        onScroll
      );


      processScrollHandlers.push(
        onScroll
      );

    });

    return () => {
      observer.disconnect();

      processObservers.forEach((observer) => {
        observer.disconnect();
      });

      processScrollHandlers.forEach((handler) => {
        window.removeEventListener("scroll", handler);
        window.removeEventListener("resize", handler);
      });
    };


  }, []);


  return null;

}