import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

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
            <Chip color="bg-blue-800" title="Sledge master" icon="🐕" />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default TomCreanPage;
