import React from "react";
import Image from "next/image";
import { CrewBio } from "@/hooks/useCrewBio";
import _ from "lodash";

interface CrewHeaderProps {
  bio: CrewBio;
  chips?: React.ReactNode;
}

const CrewHeader: React.FC<CrewHeaderProps> = ({ bio, chips }) => {
  return (
    <div className="lg:flex lg:items-start lg:space-x-6">
      {/* Left Column: Image, Name, Role */}
      <div>
        <Image
          src={`/crew/${bio.internalName}/img/01.webp`}
          alt={bio.name}
          width={300}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4 text-center">{bio.name}</h1>
        <h2 className="text-xl text-gray-600 text-center">
          {_.startCase(bio.role)}
        </h2>
      </div>
      {/* Right Column: Chips Section */}
      <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
        <section>
          <div className="flex flex-wrap gap-2 mt-2">{chips}</div>
        </section>
      </div>
    </div>
  );
};

export default CrewHeader;
