"use client";

import { useState, useCallback } from "react";
import { LazyImage } from "./lazy-image";
import { Lightbox } from "./lightbox";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 1 | 2 | 3;
}

export function ImageGallery({ images, columns = 2 }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const onClose = useCallback(() => setLightboxIndex(-1), []);
  const onPrev = useCallback(
    () =>
      setLightboxIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const onNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2";

  return (
    <>
      <div className={`grid ${gridCols} gap-4 my-8`} role="group" aria-label="Image gallery">
        {images.map((image, index) => (
          <LazyImage
            key={index}
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            caption={image.caption}
            onClick={() => setLightboxIndex(index)}
            className="w-full h-auto"
          />
        ))}
      </div>
      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={onClose}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}
