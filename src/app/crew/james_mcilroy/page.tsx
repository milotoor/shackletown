import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "James McIlroy - Surgeon",
  description: "Page for James McIlroy, the surgeon.",
};

const JamesMcIlroyPage = () => {
  const bio = useCrewBio("james_mcilroy");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default JamesMcIlroyPage;
