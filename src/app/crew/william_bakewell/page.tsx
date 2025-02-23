import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "William Bakewell - Able Seaman",
  description: "Page for William Bakewell, the able seaman.",
};

const WilliamBakewellPage = () => {
  const bio = useCrewBio("william_bakewell");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default WilliamBakewellPage;
