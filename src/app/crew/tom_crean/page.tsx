import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip, { SledgeMasterChip } from "@/components/Chip";

export const metadata = {
  title: "Tom Crean - Second Officer",
  description: "Page for Tom Crean, the second officer.",
};

const TomCreanPage = () => {
  const bio = useCrewBio("tom_crean");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Follows orders" />
            <SledgeMasterChip />
            <Chip title="Tactless" />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default TomCreanPage;
