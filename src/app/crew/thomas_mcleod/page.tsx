import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Thomas McLeod - Able Seaman",
  description: "Page for Thomas McLeod, the able seaman.",
};

const ThomasMcLeodPage = () => {
  const bio = useCrewBio("thomas_mcleod");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default ThomasMcLeodPage;
