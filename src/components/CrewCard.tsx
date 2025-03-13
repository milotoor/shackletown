import Image from "next/image";
import Link from "next/link";
import { InternalName } from "@/hooks/useCrewBio";

interface CrewCardProps {
  name: string;
  internalName: InternalName;
  fullName?: string;
  role: string;
  imagePosition?: string; // Optional custom position for the image
}

// Define a mapping of crew members to their optimal image positions
const crewImagePositions: Partial<Record<InternalName, string>> = {
  ernest_shackleton: "object-[center_20%]",
  frank_wild: "object-[center_15%]",
  frank_worsley: "object-top",
  tom_crean: "object-[center_5%]",
  frank_hurley: "object-[center_35%]",
  lionel_greenstreet: "object-top",
  alfred_cheetham: "object-top",
  james_mcilroy: "object-[center_10%]",
  james_wordie: "object-[center_15%]",
  leonard_hussey: "object-[center_15%]",
  reginald_james: "object-[center_15%]",
  robert_clark: "object-[center_10%]",
  hubert_hudson: "object-top",
  george_marston: "object-[center_15%]",
  thomas_orde_lees: "object-[center_5%]",
  charles_green: "object-top",
  walter_how: "object-top",
  william_bakewell: "object-top",
  thomas_mcleod: "object-top",
  john_vincent: "object-[center_20%]",
  ernest_holness: "object-[center_15%]",
  perce_blackborow: "object-[center_10%]",
};

export default function CrewCard({
  name,
  internalName,
  fullName,
  role,
  imagePosition,
}: CrewCardProps) {
  const displayName = fullName || name;

  // Function to capitalize the first letter of every word
  const capitalizeWords = (text: string): string => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Determine the image position class
  // Priority: 1. Explicitly passed prop, 2. Predefined mapping, 3. Default center
  const positionClass = imagePosition || crewImagePositions[internalName];

  return (
    <Link href={`/crew/${internalName}`} className="block group">
      <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={`/crew/${internalName}/img/01.webp`}
            alt={displayName}
            fill
            className={`${positionClass} object-cover group-hover:scale-105 transition-transform duration-500`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
            {displayName}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 italic">
            {capitalizeWords(role)}
          </p>
        </div>
      </div>
    </Link>
  );
}
