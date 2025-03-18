"use client";

import React, { ReactNode, useEffect } from "react";
import Image from "next/image";
import { useImageContext, ImageItem } from "@/context/ImageContext";

interface TextImageProps {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageTitle?: string;
  imageHeight?: string;
  textWidth?: string;
  imageWidth?: string;
}

const TextImage: React.FC<TextImageProps> = ({
  children,
  imageSrc,
  imageAlt,
  imageTitle,
  imageHeight = "h-48",
  textWidth = "md:w-2/3",
  imageWidth = "md:w-1/3",
}) => {
  const { registerImages, unregisterImages, setSelectedImage } =
    useImageContext();

  // Register the image when the component mounts
  useEffect(() => {
    // Create an ImageItem from the props
    const imageItem: ImageItem = {
      src: imageSrc,
      alt: imageAlt,
      title: imageTitle ?? imageAlt,
    };

    registerImages([imageItem]);

    // Unregister the image when the component unmounts
    return () => {
      unregisterImages([imageItem]);
    };
  }, [imageSrc, imageAlt, imageTitle, registerImages, unregisterImages]);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className={`w-full ${textWidth} mb-4 md:mb-0 space-y-4`}>
        {children}
      </div>
      <div className={`w-full ${imageWidth}`}>
        <div
          className={`relative ${imageHeight} w-full rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity`}
          onClick={() => setSelectedImage(imageSrc)}
        >
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TextImage;
