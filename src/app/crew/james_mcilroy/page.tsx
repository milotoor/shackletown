import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip, { SledgeMasterChip } from "@/components/Chip";

export const metadata = {
  title: "James McIlroy - Surgeon",
  description: "Page for James McIlroy, the surgeon.",
};

const JamesMcIlroyPage = () => {
  const bio = useCrewBio("james_mcilroy");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <SledgeMasterChip />
            <Chip
              title="Man of the world"
              icon="🌎"
              color="bg-sky-700"
              iconColor="bg-emerald-400"
            />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default JamesMcIlroyPage;
