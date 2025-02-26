import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip, { SledgeMasterChip } from "@/components/Chip";

export const metadata = {
  title: "Frank Hurley - Photographer",
  description: "Page for Frank Hurley, the photographer.",
};

const FrankHurleyPage = () => {
  const bio = useCrewBio("frank_hurley");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <SledgeMasterChip />
            <Chip title="Gives lantern chats" />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default FrankHurleyPage;
