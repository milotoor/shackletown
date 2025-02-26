import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import { SledgeMasterChip } from "@/components/Chip";

export const metadata = {
  title: "James McIlroy - Surgeon",
  description: "Page for James McIlroy, the surgeon.",
};

const JamesMcIlroyPage = () => {
  const bio = useCrewBio("james_mcilroy");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} chips={<SledgeMasterChip />} />
    </CrewMemberPage>
  );
};

export default JamesMcIlroyPage;
