import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip, { SledgeMasterChip } from "@/components/Chip";

export const metadata = {
  title: "George Marston - Artist",
  description: "Page for George Marston, the artist.",
};

const GeorgeMarstonPage = () => {
  const bio = useCrewBio("george_marston");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <SledgeMasterChip />
            <Chip title="Boyish-faced" />
            <Chip title="Chubby" />
            <Chip
              title="Family man"
              icon="👨‍👩‍👧‍👦"
              color="bg-violet-300"
              iconColor="bg-violet-500"
            />
            <Chip title="Worries outwardly" color="bg-orange-400" />
            <Chip title="Disliked by Shackleton" color="bg-red-900" />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default GeorgeMarstonPage;
