import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Harry McNish - Carpenter",
  description: "Page for Harry McNish, the carpenter.",
};

const HarryMcNishPage = () => {
  const bio = useCrewBio("harry_mcnish");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default HarryMcNishPage;
