import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Charles Green - Cook",
  description: "Page for Charles Green, the cook.",
};

const CharlesGreenPage = () => {
  const bio = useCrewBio("alexander_kerr");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default CharlesGreenPage;
