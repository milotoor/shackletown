import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Lionel Greenstreet - First Officer",
  description: "Page for Lionel Greenstreet, the first officer.",
};

const LionelGreenstreetPage = () => {
  const bio = useCrewBio("lionel_greenstreet");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default LionelGreenstreetPage;
