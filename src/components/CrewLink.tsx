import Link from "next/link";
import { CrewBioYml, InternalName } from "@/hooks/useCrewBio";

// @ts-expect-error - This works but the type inference is not working
import manifest from "../../public/crew/manifest.yml";

export default function CrewLink({
  name,
  fullName = false,
}: {
  name: InternalName;
  fullName?: boolean;
}) {
  const crewManifest = manifest.crew as CrewBioYml[];
  const crewMember = crewManifest.find(
    (member) => member.internal_name === name
  );

  // Use full_name if available, otherwise default to the regular name
  const displayName = fullName
    ? crewMember?.full_name ?? crewMember?.name ?? name
    : crewMember?.name ?? name;

  return (
    <Link
      href={`/crew/${name}`}
      className="text-blue-500 hover:text-blue-700 underline"
    >
      {displayName}
    </Link>
  );
}
