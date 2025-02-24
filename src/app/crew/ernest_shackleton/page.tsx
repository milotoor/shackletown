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
            <Chip title="Best boss ever" color="yellow-600" />
            <Chip title="Has Irish brogue" />
            <Chip title="Fancies self country gentleman" />
          </>
        }
      >
        <div className="bg-gray-100 text-gray-800 p-2 rounded-md">
          <p className="text-xl font-bold">Get rich quick schemes:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Cigarette manufacturing</li>
            <li>Taxicab fleet</li>
            <li>Mining in Bulgaria</li>
            <li>Whaling factory</li>
            <li>Digging for treasure</li>
          </ul>
        </div>
      </CrewHeader>
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
