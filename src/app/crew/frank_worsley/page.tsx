import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Frank Worsley - Captain and Navigator",
  description: "Page for Frank Worsley, the captain and navigator.",
};

const FrankWorsleyPage = () => {
  const bio = useCrewBio("frank_worsley");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default FrankWorsleyPage;
