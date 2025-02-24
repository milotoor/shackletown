import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

export const metadata = {
  title: "Alfred Cheetham - Third Officer",
  description: "Page for Alfred Cheetham, the third officer.",
};

const AlfredCheethamPage = () => {
  const bio = useCrewBio("alfred_cheetham");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={<Chip title="Veteran of the Antarctic" color="bg-emerald-500" />}
      />
    </CrewMemberPage>
  );
};

export default AlfredCheethamPage;
