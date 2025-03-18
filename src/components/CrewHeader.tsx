import React from "react";
import Image from "next/image";
import { CrewBio } from "@/hooks/useCrewBio";
import _ from "lodash";

interface CrewHeaderProps {
  bio: CrewBio;
  chips?: React.ReactNode;
  children?: React.ReactNode;
}

const CrewHeader: React.FC<CrewHeaderProps> = ({ bio, chips, children }) => {
  // Function to capitalize the first letter of every word
  const capitalizeWords = (text: string): string => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="mt-2">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl mb-10">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {bio.fullName || bio.name}
          </h1>
          <p className="text-xl text-slate-200">{capitalizeWords(bio.role)}</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Portrait */}
        <div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={`/crew/${bio.internalName}/img/01.webp`}
                alt={bio.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Bio Content */}
        <div className="md:col-span-2">
          {chips && (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                Characteristics
              </h3>
              <div className="flex flex-wrap gap-2">{chips}</div>
            </div>
          )}

          {children && (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrewHeader;
