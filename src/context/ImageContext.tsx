import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import Image from "next/image";

export interface ImageItem {
  src: string;
  alt: string;
  title: string;
}

interface ImageContextType {
  allImages: ImageItem[];
  registerImages: (images: ImageItem[]) => void;
  unregisterImages: (images: ImageItem[]) => void;
  selectedImage: string | null;
  setSelectedImage: (src: string | null) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};

interface ImageProviderProps {
  children: ReactNode;
}

export function ImageProvider({ children }: ImageProviderProps) {
  const [allImages, setAllImages] = useState<ImageItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Register a group of images in the context
  const registerImages = useCallback(
    (images: ImageItem[]) => {
      setAllImages((prev) => [...prev, ...images]);
    },
    [setAllImages]
  );

  // Unregister a group of images from the context (used during unmounting)
  const unregisterImages = useCallback(
    (images: ImageItem[]) => {
      const imageSrcs = new Set(images.map((img) => img.src));
      setAllImages((prev) => prev.filter((img) => !imageSrcs.has(img.src)));
    },
    [setAllImages]
  );

  // Navigate to the next image in the collection
  const navigateToNext = () => {
    if (!selectedImage || allImages.length === 0) return;

    const currentIndex = allImages.findIndex(
      (img) => img.src === selectedImage
    );
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex].src);
  };

  // Navigate to the previous image in the collection
  const navigateToPrevious = () => {
    if (!selectedImage || allImages.length === 0) return;

    const currentIndex = allImages.findIndex(
      (img) => img.src === selectedImage
    );
    if (currentIndex === -1) return;

    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIndex].src);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      } else if (event.key === "ArrowRight") {
        navigateToNext();
      } else if (event.key === "ArrowLeft") {
        navigateToPrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, allImages]);

  const value = {
    allImages,
    registerImages,
    unregisterImages,
    selectedImage,
    setSelectedImage,
  };

  return (
    <ImageContext.Provider value={value}>
      {children}

      {/* Global Lightbox */}
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

            {/* Left Navigation Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateToPrevious();
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateToNext();
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </ImageContext.Provider>
  );
}
