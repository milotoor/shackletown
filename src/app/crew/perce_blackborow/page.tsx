import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Perce Blackborow - Stowaway",
  description: "Page for Perce Blackborow, the stowaway.",
};

const PerceBlackborowPage = () => {
  const bio = useCrewBio("perce_blackborow");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default PerceBlackborowPage;
