import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

export const metadata = {
  title: "Leonard Hussey - Meteorologist",
  description: "Page for Leonard Hussey, the meteorologist.",
};

const LeonardHusseyPage = () => {
  const bio = useCrewBio("leonard_hussey");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Unfailing good humor" color="bg-amber-200" />
            <Chip title="Plays zither banjo" color="bg-rose-200" icon="🪕" />
            <Chip title="Knows 6 tunes on banjo" color="bg-red-800" />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default LeonardHusseyPage;
