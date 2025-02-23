import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "John Vincent - Boatswain",
  description: "Page for John Vincent, the boatswain.",
};

const JohnVincentPage = () => {
  const bio = useCrewBio("john_vincent");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default JohnVincentPage;
