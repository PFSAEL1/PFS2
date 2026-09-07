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

  // useEffect(() => {

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return;

  //         const element = entry.target as HTMLElement;

  //         const animationName = element.dataset.animation;

  //         if (!animationName) return;

  //         const animation =
  //           animations[animationName as keyof typeof animations];

  //         if (!animation) return;

  //         animate(element, animation.visible, {
  //           duration: 0.6,
  //           ease: "easeOut",
  //         });

  //         observer.unobserve(element);

  //       });
  //     },
  //     {
  //       threshold: 0.8,
  //     }
  //   );

  //   const initAnimations = () => {
  //     const elements =
  //       document.querySelectorAll<HTMLElement>("[data-animation]");

  //     elements.forEach((element) => {

  //       if (element.dataset.animated) return;

  //       const animationName = element.dataset.animation;

  //       if (!animationName) return;

  //       const animation =
  //         animations[animationName as keyof typeof animations];

  //       if (!animation) return;

  //       Object.assign(element.style, animation.hidden);

  //       observer.observe(element);

  //       element.dataset.animated = "true";
  //     });
  //   };

  //   initAnimations();

  //   // return () => observer.disconnect();

  //   // Our Process Section

  //   // const processLists =
  //   //   document.querySelectorAll<HTMLOListElement>(".pfs-steps");

  //   // const processObservers: IntersectionObserver[] = [];

  //   // const processScrollHandlers: (() => void)[] = [];

  //   // processLists.forEach((list) => {
  //   //   const items =
  //   //     Array.from(list.querySelectorAll<HTMLElement>(".pfs-step"));

  //   //   const progress =
  //   //     list.querySelector<HTMLElement>(".pfs-steps__progress");

  //   //   if (!items.length) return;

  //   //   /*
  //   //    * Step reveal observer
  //   //    */
  //   //   const processObserver = new IntersectionObserver(
  //   //     (entries) => {
  //   //       entries.forEach((entry) => {
  //   //         if (entry.isIntersecting) {
  //   //           entry.target.classList.add("is-visible");
  //   //         }
  //   //       });
  //   //     },
  //   //     {
  //   //       threshold: 0.35,
  //   //       rootMargin: "0px 0px -10% 0px",
  //   //     }
  //   //   );

  //   //   items.forEach((item) => {
  //   //     processObserver.observe(item);
  //   //   });

  //   //   processObservers.push(processObserver);

  //   //   /*
  //   //    * Progress bar
  //   //    */
  //   //   const onScroll = () => {
  //   //     if (!progress) return;

  //   //     const rect = list.getBoundingClientRect();

  //   //     const total = rect.height - 24;

  //   //     const scrolled =
  //   //       window.innerHeight * 0.55 - rect.top;

  //   //     const height = Math.max(
  //   //       0,
  //   //       Math.min(total, scrolled)
  //   //     );

  //   //     progress.style.height = `${height}px`;
  //   //   };

  //   //   onScroll();

  //   //   window.addEventListener("scroll", onScroll, {
  //   //     passive: true,
  //   //   });

  //   //   window.addEventListener("resize", onScroll);

  //   //   processScrollHandlers.push(onScroll);
  //   // });

  //   // =====================================================
  //   // OUR PROCESS SECTION
  //   // =====================================================

  //   const processLists =
  //     document.querySelectorAll<HTMLOListElement>(
  //       ".pfs-steps"
  //     );

  //   const processObservers: IntersectionObserver[] = [];

  //   const processScrollHandlers: (() => void)[] = [];

  //   processLists.forEach((list) => {

  //     const items =
  //       Array.from(
  //         list.querySelectorAll<HTMLElement>(
  //           ".pfs-step"
  //         )
  //       );

  //     const progress =
  //       list.querySelector<HTMLElement>(
  //         ".pfs-steps__progress"
  //       );

  //     if (!items.length) return;


  //     // ===================================================
  //     // STEP REVEAL
  //     // ===================================================

  //     const processObserver =
  //       new IntersectionObserver(
  //         (entries) => {

  //           entries.forEach((entry) => {

  //             if (!entry.isIntersecting) return;

  //             entry.target.classList.add(
  //               "is-visible"
  //             );

  //           });

  //         },
  //         {
  //           threshold: 0.35,
  //           rootMargin:
  //             "0px 0px -10% 0px",
  //         }
  //       );


  //     items.forEach((item) => {
  //       processObserver.observe(item);
  //     });


  //     processObservers.push(
  //       processObserver
  //     );


  //     // ===================================================
  //     // SCROLL
  //     // PROGRESS + ACTIVE STEP
  //     // ===================================================

  //     const onScroll = () => {

  //       // -----------------------------------------------
  //       // PROGRESS LINE
  //       // -----------------------------------------------

  //       const rect =
  //         list.getBoundingClientRect();

  //       const total =
  //         rect.height - 24;

  //       const scrolled =
  //         window.innerHeight * 0.55 -
  //         rect.top;

  //       const height =
  //         Math.max(
  //           0,
  //           Math.min(
  //             total,
  //             scrolled
  //           )
  //         );


  //       if (progress) {
  //         progress.style.height =
  //           `${height}px`;
  //       }


  //       // -----------------------------------------------
  //       // FIND ACTIVE STEP
  //       // -----------------------------------------------

  //       const viewportCenter =
  //         window.innerHeight / 2;

  //       let closestIndex = 0;

  //       let closestDistance =
  //         Infinity;


  //       items.forEach(
  //         (item, index) => {

  //           const itemRect =
  //             item.getBoundingClientRect();

  //           const itemCenter =
  //             itemRect.top +
  //             itemRect.height / 2;

  //           const distance =
  //             Math.abs(
  //               itemCenter -
  //               viewportCenter
  //             );


  //           if (
  //             distance <
  //             closestDistance
  //           ) {

  //             closestDistance =
  //               distance;

  //             closestIndex =
  //               index;

  //           }

  //         }
  //       );


  //       // -----------------------------------------------
  //       // UPDATE ACTIVE STEP
  //       // -----------------------------------------------

  //       // items.forEach(
  //       //   (item, index) => {

  //       //     item.classList.toggle(
  //       //       "is-active",
  //       //       index === closestIndex
  //       //     );

  //       //   }
  //       // );
  //       items.forEach((item, index) => {
  //         item.classList.toggle(
  //           "is-active",
  //           index <= closestIndex
  //         );
  //       });
  //     };


  //     // Run immediately
  //     onScroll();


  //     // Scroll
  //     window.addEventListener(
  //       "scroll",
  //       onScroll,
  //       {
  //         passive: true,
  //       }
  //     );


  //     // Resize
  //     window.addEventListener(
  //       "resize",
  //       onScroll
  //     );


  //     processScrollHandlers.push(
  //       onScroll
  //     );

  //   });

  //   return () => {
  //     observer.disconnect();

  //     processObservers.forEach((observer) => {
  //       observer.disconnect();
  //     });

  //     processScrollHandlers.forEach((handler) => {
  //       window.removeEventListener("scroll", handler);
  //       window.removeEventListener("resize", handler);
  //     });
  //   };


  // }, []);
  useEffect(() => {
    // =====================================================
    // GLOBAL ANIMATIONS
    // =====================================================

    const getAnimationDistance = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        return 60;
      }

      if (width <= 1024) {
        return 80;
      }

      return 100;
    };

    const getHiddenAnimation = (
      element: HTMLElement,
      animationName: string,
      animation: any
    ) => {
      if (
        animationName !== "slideLeft" &&
        animationName !== "slideRight"
      ) {
        return animation.hidden;
      }

      const distance = getAnimationDistance();

      const direction =
        animationName === "slideLeft" ? -1 : 1;

      return {
        ...animation.hidden,
        transform: `translateX(${direction * distance}px)`,
      };
    };

    // =====================================================
    // MAIN INTERSECTION OBSERVER
    // =====================================================

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          const animationName = element.dataset.animation;

          if (!animationName) return;

          const animation =
            animations[
            animationName as keyof typeof animations
            ];

          if (!animation) return;

          // Animate to visible state
          animate(element, animation.visible, {
            duration: 0.6,
            ease: "easeOut",
          });

          // Only animate once
          observer.unobserve(element);
        });
      },
      {
        // 20% visibility is much more reliable
        // across desktop/tablet/mobile
        threshold: 0.2,

        // Start animation slightly before element
        // reaches the viewport
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // =====================================================
    // INITIALIZE GLOBAL ANIMATIONS
    // =====================================================

    const initAnimations = () => {
      const elements =
        document.querySelectorAll<HTMLElement>(
          "[data-animation]"
        );

      elements.forEach((element) => {
        if (element.dataset.animated === "true") {
          return;
        }

        const animationName =
          element.dataset.animation;

        if (!animationName) return;

        const animation =
          animations[
          animationName as keyof typeof animations
          ];

        if (!animation) return;

        // Apply responsive hidden position
        const hiddenAnimation =
          getHiddenAnimation(
            element,
            animationName,
            animation
          );

        Object.assign(
          element.style,
          hiddenAnimation
        );

        observer.observe(element);

        element.dataset.animated = "true";
      });
    };

    initAnimations();


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
      const items = Array.from(
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
              if (!entry.isIntersecting) {
                return;
              }

              entry.target.classList.add(
                "is-visible"
              );
            });
          },
          {
            threshold: 0.2,
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
      // SCROLL HANDLER
      // ===================================================

      let ticking = false;

      const updateProcess = () => {
        ticking = false;

        const rect =
          list.getBoundingClientRect();

        // -----------------------------------------------
        // PROGRESS LINE
        // -----------------------------------------------

        const total =
          Math.max(0, rect.height - 24);

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
        // CUMULATIVE ACTIVE STEPS
        // -----------------------------------------------

        items.forEach(
          (item, index) => {
            item.classList.toggle(
              "is-active",
              index <= closestIndex
            );
          }
        );
      };


      // ===================================================
      // REQUEST ANIMATION FRAME
      // ===================================================

      const onScroll = () => {
        if (ticking) return;

        ticking = true;

        requestAnimationFrame(
          updateProcess
        );
      };


      // Run once immediately
      updateProcess();


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


    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      // Main animation observer
      observer.disconnect();

      // Process observers
      processObservers.forEach(
        (processObserver) => {
          processObserver.disconnect();
        }
      );

      // Process scroll handlers
      processScrollHandlers.forEach(
        (handler) => {
          window.removeEventListener(
            "scroll",
            handler
          );

          window.removeEventListener(
            "resize",
            handler
          );
        }
      );
    };

  }, []);

  return null;

}