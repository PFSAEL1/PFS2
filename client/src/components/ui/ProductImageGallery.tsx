import React, { useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    X,
    ZoomIn,
} from "lucide-react";

interface ProductImageGalleryProps {
    images: string[];
    alt?: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
    images,
    alt = "Product image",
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

    // Remove empty images
    const validImages = images.filter(Boolean);

    if (validImages.length === 0) {
        return null;
    }

    const prev = (): void => {
        setActiveIndex((current) =>
            current === 0 ? validImages.length - 1 : current - 1
        );
    };

    const next = (): void => {
        setActiveIndex((current) =>
            current === validImages.length - 1 ? 0 : current + 1
        );
    };

    // Close lightbox with Escape key
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setLightboxOpen(false);
            }

            if (event.key === "ArrowLeft") {
                prev();
            }

            if (event.key === "ArrowRight") {
                next();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        // Prevent background page scrolling
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [lightboxOpen]);

    return (
        <>
            <div className="product-image-gallery">

                {/* Main image viewport */}
                <div className="product-image-gallery__viewport">

                    {/* Clickable image */}
                    <button
                        type="button"
                        onClick={() => setLightboxOpen(true)}
                        className="product-image-gallery__image-button"
                        aria-label={`Expand ${alt} ${activeIndex + 1}`}
                    >
                        <img
                            src={validImages[activeIndex]}
                            alt={`${alt} ${activeIndex + 1}`}
                            className="product-image-gallery__image"
                        />

                        {/* Zoom indicator */}
                        <span className="product-image-gallery__zoom">
                            <ZoomIn size={16} />
                            <span>ZOOM</span>
                        </span>
                    </button>

                    {/* Previous button */}
                    {validImages.length > 1 && (
                        <button
                            type="button"
                            onClick={prev}
                            className="product-image-gallery__arrow product-image-gallery__arrow--prev"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={22} strokeWidth={2.5} />
                        </button>
                    )}

                    {/* Next button */}
                    {validImages.length > 1 && (
                        <button
                            type="button"
                            onClick={next}
                            className="product-image-gallery__arrow product-image-gallery__arrow--next"
                            aria-label="Next image"
                        >
                            <ChevronRight size={22} strokeWidth={2.5} />
                        </button>
                    )}
                </div>

                {/* Dot indicators */}
                {validImages.length > 1 && (
                    <div className="product-image-gallery__dots">
                        {validImages.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={`product-image-gallery__dot ${index === activeIndex
                                    ? "product-image-gallery__dot--active"
                                    : ""
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                                aria-current={
                                    index === activeIndex ? "true" : undefined
                                }
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* =========================
                LIGHTBOX
            ========================= */}
            {lightboxOpen && (
                <div
                    className="product-image-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Product image viewer"
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Close */}
                    <button
                        type="button"
                        className="product-image-lightbox__close"
                        onClick={() => setLightboxOpen(false)}
                        aria-label="Close image viewer"
                    >
                        <X size={28} />
                    </button>

                    {/* Previous */}
                    {validImages.length > 1 && (
                        <button
                            type="button"
                            className="product-image-lightbox__arrow product-image-lightbox__arrow--prev"
                            onClick={(event) => {
                                event.stopPropagation();
                                prev();
                            }}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>
                    )}

                    {/* Expanded image */}
                    <img
                        src={validImages[activeIndex]}
                        alt={`${alt} ${activeIndex + 1}`}
                        className="product-image-lightbox__image"
                        onClick={(event) => event.stopPropagation()}
                    />

                    {/* Next */}
                    {validImages.length > 1 && (
                        <button
                            type="button"
                            className="product-image-lightbox__arrow product-image-lightbox__arrow--next"
                            onClick={(event) => {
                                event.stopPropagation();
                                next();
                            }}
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>
                    )}

                    {/* Counter */}
                    <div className="product-image-lightbox__counter">
                        {activeIndex + 1} / {validImages.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductImageGallery;
