import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";

export const metadata = {
  title: "Robert Clark - Biologist",
  description: "Page for Robert Clark, the biologist.",
};

const RobertClarkPage = () => {
  const bio = useCrewBio("robert_clark");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip
              title="Adélie penguins sound like surname"
              icon="🐧"
              iconColor="bg-stone-700"
            />
            <Chip
              title="Humorless Scot"
              color="bg-blue-600"
              icon="🏴󠁧󠁢󠁳󠁣󠁴󠁿"
              iconColor="bg-white"
            />
          </>
        }
      />
    </CrewMemberPage>
  );
};

export default RobertClarkPage;
