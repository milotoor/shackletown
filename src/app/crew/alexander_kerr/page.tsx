import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Alexander Kerr - Engineer",
  description: "Page for Alexander Kerr, the engineer.",
};

const AlexanderKerrPage = () => {
  const bio = useCrewBio("alexander_kerr");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default AlexanderKerrPage;
