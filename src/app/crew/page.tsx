import useYaml from "@/hooks/useYaml";

interface CrewMember {
  name: string;
  internal_name: string;
  full_name?: string;
  role: string;
}

export default function CrewList() {
  // Read the manifest file from public/crew/manifest.yml at build time
  const manifest = useYaml<{ crew: CrewMember[] }>([
    "public",
    "crew",
    "manifest.yml",
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Crew Members</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
        {manifest.crew.map((member) => (
          <li key={member.internal_name}>
            <a
              href={`/crew/${member.internal_name}`}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              {/* Use full_name if available, otherwise default to the regular name */}
              {member.full_name ?? member.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
