export const fadeIn = {
    hidden: {
        opacity: 0,
        transform: "translateX(0px)",
    },
    visible: {
        opacity: 1,
        transform: "translateX(0px)",
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const isMobile = window.innerWidth <= 480;

export const slideLeft = {
    hidden: {
        opacity: 0,
        transform: `translateX(${isMobile ? -60 : -100}px)`,
    },
    visible: {
        opacity: 1,
        transform: "translateX(0px)",
    },
};

export const slideRight = {
    hidden: {
        opacity: 0,
        transform: `translateX(${isMobile ? 60 : 100}px)`,
    },
    visible: {
        opacity: 1,
        transform: "translateX(0px)",
    },
};