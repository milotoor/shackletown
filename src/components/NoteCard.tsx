import React, { ReactNode } from "react";
import Image from "next/image";

interface NoteCardProps {
  title?: string;
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const NoteCard: React.FC<NoteCardProps> = ({
  title,
  children,
  imageSrc,
  imageAlt = "Note image",
}) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-4 mb-6">
      {title && (
        <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
          {title}
        </h3>
      )}
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className={`${
            imageSrc ? "md:w-2/3" : "w-full"
          } text-slate-700 dark:text-slate-300 space-y-4`}
        >
          {children}
        </div>
        {imageSrc && (
          <div className="md:w-1/3 relative">
            <div className="relative h-64 md:h-full w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteCard;
