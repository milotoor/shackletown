import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Alfred Cheetham - Third Officer",
  description: "Page for Alfred Cheetham, the third officer.",
};

const AlfredCheethamPage = () => {
  const bio = useCrewBio("alfred_cheetham");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default AlfredCheethamPage;
