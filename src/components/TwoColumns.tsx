"use client";

import React, { ReactNode } from "react";

interface TwoColumnsProps {
  children: ReactNode;
  image: ReactNode;
  textWidth?: string;
  imageWidth?: string;
}

const TwoColumns: React.FC<TwoColumnsProps> = ({
  children,
  image,
  textWidth = "md:w-2/3",
  imageWidth = "md:w-1/3",
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className={`w-full ${textWidth} mb-4 md:mb-0 space-y-4`}>
        {children}
      </div>
      <div className={`w-full ${imageWidth}`}>{image}</div>
    </div>
  );
};

export default TwoColumns;
