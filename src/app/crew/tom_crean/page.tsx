import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Tom Crean - Second Officer",
  description: "Page for Tom Crean, the second officer.",
};

const TomCreanPage = () => {
  const bio = useCrewBio("tom_crean");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default TomCreanPage;
