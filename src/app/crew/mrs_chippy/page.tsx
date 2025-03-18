import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

export const metadata = {
  title: "Mrs. Chippy",
  description: "The ship's cat, actually a Mr.",
};

const DogsPage = () => {
  const bio = useCrewBio("mrs_chippy");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Actually a Mr." color="bg-purple-500" icon="♂️" />
            <Chip title="Butchered" color="bg-red-500" icon="🔪" />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default DogsPage;
