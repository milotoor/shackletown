import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import { SledgeMasterChip } from "@/components/Chip";

export const metadata = {
  title: "Alexander Macklin - Surgeon",
  description: "Page for Alexander Macklin, the surgeon.",
};

const AlexanderMacklinPage = () => {
  const bio = useCrewBio("alexander_macklin");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} chips={<SledgeMasterChip />} />
    </CrewMemberPage>
  );
};

export default AlexanderMacklinPage;
