import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

export const metadata = {
  title: "Perce Blackborow - Stowaway",
  description: "Page for Perce Blackborow, the stowaway.",
};

const PerceBlackborowPage = () => {
  const bio = useCrewBio("perce_blackborow");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={<Chip title="Threatened with cannibalism" color="red-800" />}
      />
    </CrewMemberPage>
  );
};

export default PerceBlackborowPage;
