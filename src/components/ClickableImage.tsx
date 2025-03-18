"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useImageContext, ImageItem } from "@/context/ImageContext";

type ClickableImageProps = Omit<ImageItem, "alt"> & {
  imageHeight?: string;
};

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  title,
  imageHeight = "h-48",
}) => {
  const { registerImages, unregisterImages, setSelectedImage } =
    useImageContext();

  // Register the image when the component mounts
  useEffect(() => {
    // Create an ImageItem from the props
    const imageItem: ImageItem = {
      src,
      alt: title,
      title: title,
    };

    registerImages([imageItem]);

    // Unregister the image when the component unmounts
    return () => {
      unregisterImages([imageItem]);
    };
  }, [src, title, registerImages, unregisterImages]);

  return (
    <div
      className={`relative ${imageHeight} w-full rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={() => setSelectedImage(src)}
    >
      <Image src={src} alt={title} fill className="object-cover" />
    </div>
  );
};

export default ClickableImage;
