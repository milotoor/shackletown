import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Leonard Hussey - Meteorologist",
  description: "Page for Leonard Hussey, the meteorologist.",
};

const LeonardHusseyPage = () => {
  const bio = useCrewBio("leonard_hussey");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default LeonardHusseyPage;
