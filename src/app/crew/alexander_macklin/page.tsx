import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Alexander Macklin - Surgeon",
  description: "Page for Alexander Macklin, the surgeon.",
};

const AlexanderMacklinPage = () => {
  const bio = useCrewBio("alexander_macklin");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default AlexanderMacklinPage;
