"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useImageContext, ImageItem } from "@/context/ImageContext";

type ClickableImageProps = ImageItem & {
  imageHeight?: string;
};

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
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
      alt,
      title: title || alt,
    };

    registerImages([imageItem]);

    // Unregister the image when the component unmounts
    return () => {
      unregisterImages([imageItem]);
    };
  }, [src, alt, title, registerImages, unregisterImages]);

  return (
    <div
      className={`relative ${imageHeight} w-full rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity`}
      onClick={() => setSelectedImage(src)}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default ClickableImage;
