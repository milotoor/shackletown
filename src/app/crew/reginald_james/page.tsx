import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Reginald James - Physicist",
  description: "Page for Reginald James, the physicist.",
};

const ReginaldJamesPage = () => {
  const bio = useCrewBio("reginald_james");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default ReginaldJamesPage;
