import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import Chip from "@/components/Chip";
import Quote from "@/components/Quote";
import useCrewBio from "@/hooks/useCrewBio";

export const metadata = {
  title: "Ernest Shackleton - Expedition Leader",
  description: "Page for Ernest Shackleton, the expedition leader.",
};

const ErnestShackletonPage = () => {
  const bio = useCrewBio("ernest_shackleton");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip key="1" title="Greatest leader ever" color="yellow-600" />
            <Chip key="2" title="Has Irish brogue" />
          </>
        }
      />
      <section className="mt-6">
        <Quote
          text={
            'There once was a mouse who lived in a tavern. One night the mouse found a leaky barrel of beer, and he drank all he could hold. When the mouse had finished, he sat up, twirled his whiskers, and looked arround arrogantly. "Now then," he said, "where\'s that damned cat?"'
          }
        />
      </section>
    </CrewMemberPage>
  );
};

export default ErnestShackletonPage;
