import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Hubert Hudson - Navigator",
  description: "Page for Hubert Hudson, the navigator.",
};

const HubertHudsonPage = () => {
  const bio = useCrewBio("hubert_hudson");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default HubertHudsonPage;
