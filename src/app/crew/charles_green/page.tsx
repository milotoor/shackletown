import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

export const metadata = {
  title: "Charles Green - Cook",
  description: "Page for Charles Green, the cook.",
};

const CharlesGreenPage = () => {
  const bio = useCrewBio("charles_green");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Crackers" icon="🤪" />
            <Chip
              title="Has one testicle"
              icon="⚽"
              color="bg-violet-400"
              iconColor="bg-fuchsia-300"
            />
            <Chip
              title="Bakes fake cakes"
              icon="🎂"
              iconColor="bg-emerald-600"
            />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default CharlesGreenPage;
