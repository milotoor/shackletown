import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "James Wordie - Geologist",
  description: "Page for James Wordie, the geologist.",
};

const JamesWordiePage = () => {
  const bio = useCrewBio("james_wordie");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default JamesWordiePage;
