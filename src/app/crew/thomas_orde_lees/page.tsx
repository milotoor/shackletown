import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Thomas Orde-Lees - Motor Expert and Storekeeper",
  description: "Page for Thomas Orde-Lees, the motor expert and storekeeper.",
};

const ThomasOrdeLeesPage = () => {
  const bio = useCrewBio("thomas_orde_lees");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
    </CrewMemberPage>
  );
};

export default ThomasOrdeLeesPage;
