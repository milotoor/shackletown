import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Ernest Holness - Stoker",
  description: "Page for Ernest Holness, the stoker.",
};

const ErnestHolnessPage = () => {
  const bio = useCrewBio("ernest_holness");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default ErnestHolnessPage;
