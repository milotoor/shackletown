import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Frank Hurley - Photographer",
  description: "Page for Frank Hurley, the photographer.",
};

const FrankHurleyPage = () => {
  const bio = useCrewBio("frank_hurley");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default FrankHurleyPage;
