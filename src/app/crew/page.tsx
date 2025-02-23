import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";

interface CrewMember {
  name: string;
  internal_name: string;
  full_name?: string;
  role: string;
}

export default async function CrewList() {
  // Read the manifest file from public/crew/manifest.yml at build time
  const manifestPath = path.join(
    process.cwd(),
    "public",
    "crew",
    "manifest.yml"
  );
  const fileContents = await fs.readFile(manifestPath, "utf8");
  const manifest = yaml.load(fileContents) as { crew: CrewMember[] };

  // Use full_name if available, otherwise default to the regular name
  const crewMembers = manifest.crew;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Crew Members</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
        {crewMembers.map((member) => (
          <li key={member.internal_name}>
            <a
              href={`/crew/${member.internal_name}`}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              {member.full_name ?? member.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
