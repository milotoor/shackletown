"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useImageContext, ImageItem } from "../context/ImageContext";

interface ImageGridProps {
  images: ImageItem[];
  noShadow?: boolean;
}

export default function ImageGrid({
  images,
  noShadow = false,
}: ImageGridProps) {
  // Use the global image context instead of local state
  const { registerImages, unregisterImages, setSelectedImage } =
    useImageContext();

  // Register images when component mounts
  useEffect(() => {
    registerImages(images);

    // Unregister images when component unmounts
    return () => {
      unregisterImages(images);
    };
  }, [images, registerImages, unregisterImages]);

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-slate-800 rounded-lg overflow-hidden ${
              noShadow ? "" : "shadow-md"
            } hover:shadow-lg transition-shadow cursor-pointer`}
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="relative h-48 sm:h-40 md:h-48">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
