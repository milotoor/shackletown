import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "William Stephenson - Stoker",
  description: "Page for William Stephenson, the stoker.",
};

const WilliamStephensonPage = () => {
  const bio = useCrewBio("william_stephenson");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default WilliamStephensonPage;
