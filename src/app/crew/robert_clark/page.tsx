import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Robert Clark - Biologist",
  description: "Page for Robert Clark, the biologist.",
};

const RobertClarkPage = () => {
  const bio = useCrewBio("robert_clark");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default RobertClarkPage;
