import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "George Marston - Artist",
  description: "Page for George Marston, the artist.",
};

const GeorgeMarstonPage = () => {
  const bio = useCrewBio("george_marston");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default GeorgeMarstonPage;
