import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Frank Wild - Second-in-command",
  description: "Page for Frank Wild, the second-in-command.",
};

const FrankWildPage = () => {
  const bio = useCrewBio("frank_wild");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default FrankWildPage;
