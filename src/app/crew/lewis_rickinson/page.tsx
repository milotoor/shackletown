import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Lewis Rickinson - Engineer",
  description: "Page for Lewis Rickinson, the engineer.",
};

const LewisRickinsonPage = () => {
  const bio = useCrewBio("lewis_rickinson");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default LewisRickinsonPage;
