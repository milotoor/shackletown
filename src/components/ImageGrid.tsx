"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
  title: string;
}

interface ImageGridProps {
  images: ImageItem[];
  noShadow?: boolean;
}

export default function ImageGrid({
  images,
  noShadow = false,
}: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Add event listener for the Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    // Add event listener when a image is selected
    if (selectedImage) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    // Clean up the event listener when component unmounts or selectedImage changes
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedImage]);

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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
