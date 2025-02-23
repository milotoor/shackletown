import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Timothy McCarthy - Able Seaman",
  description: "Page for Timothy McCarthy, the able seaman.",
};

const TimothyMcCarthyPage = () => {
  const bio = useCrewBio("timothy_mccarthy");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default TimothyMcCarthyPage;
