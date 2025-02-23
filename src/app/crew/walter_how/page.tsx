import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Walter How - Able Seaman",
  description: "Page for Walter How, the able seaman.",
};

const WalterHowPage = () => {
  const bio = useCrewBio("walter_how");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default WalterHowPage;
