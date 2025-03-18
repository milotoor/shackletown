import useYaml from "./useYaml";

export type InternalName =
  | "ernest_shackleton"
  | "frank_wild"
  | "frank_worsley"
  | "lionel_greenstreet"
  | "tom_crean"
  | "alfred_cheetham"
  | "hubert_hudson"
  | "lewis_rickinson"
  | "alexander_kerr"
  | "alexander_macklin"
  | "james_mcilroy"
  | "james_wordie"
  | "leonard_hussey"
  | "reginald_james"
  | "robert_clark"
  | "frank_hurley"
  | "george_marston"
  | "thomas_orde_lees"
  | "harry_mcnish"
  | "charles_green"
  | "walter_how"
  | "william_bakewell"
  | "timothy_mccarthy"
  | "thomas_mcleod"
  | "john_vincent"
  | "ernest_holness"
  | "william_stephenson"
  | "perce_blackborow"
  | "dogs"
  | "mrs_chippy";

export interface CrewBio {
  name: string;
  role: string;
  internalName: InternalName;
  fullName?: string;
}

export interface CrewBioYml {
  name: string;
  role: string;
  internal_name: string;
  full_name?: string;
}

const useCrewBio = (internalName: InternalName): CrewBio => {
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
