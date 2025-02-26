import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

export const metadata = {
  title: "John Vincent - Boatswain",
  description: "Page for John Vincent, the boatswain.",
};

const JohnVincentPage = () => {
  const bio = useCrewBio("john_vincent");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Bully" color="bg-red-900" />
            <Chip title="Capacity for tyranny" color="bg-red-900" />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default JohnVincentPage;
