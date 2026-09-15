import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageGalleryProps {
    images: string[];
    alt?: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
    images,
    alt = "Product image",
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

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

    return (
        <div className="product-image-gallery">
            {/* Main image viewport */}
            <div className="product-image-gallery__viewport">
                <img
                    src={validImages[activeIndex]}
                    alt={`${alt} ${activeIndex + 1}`}
                    className="product-image-gallery__image"
                />

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
                            aria-current={index === activeIndex ? "true" : undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductImageGallery;
