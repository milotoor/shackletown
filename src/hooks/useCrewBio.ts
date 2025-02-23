import useYaml from "./useYaml";

export interface CrewBio {
  name: string;
  role: string;
  internalName: string;
  fullName?: string;
}

interface CrewBioYml {
  name: string;
  role: string;
  internal_name: string;
  full_name?: string;
}

const useCrewBio = (internalName: string): CrewBio => {
  try {
    const data = useYaml<CrewBioYml>([
      "public",
      "crew",
      internalName,
      "bio.yml",
    ]);

    return {
      internalName,
      name: data.name,
      role: data.role,
      fullName: data.full_name,
    };
  } catch (error) {
    throw new Error(`Failed to load bio for ${internalName}: ${error}`);
  }
};

export default useCrewBio;
