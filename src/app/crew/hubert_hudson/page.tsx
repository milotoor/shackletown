import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

export const metadata = {
  title: "Hubert Hudson - Navigator",
  description: "Page for Hubert Hudson, the navigator.",
};

const HubertHudsonPage = () => {
  const bio = useCrewBio("hubert_hudson");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Killed these poor birds" color="bg-red-800" />
            <Chip title="Sole attendee of costume party" />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default HubertHudsonPage;
