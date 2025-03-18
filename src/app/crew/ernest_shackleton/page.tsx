import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import Chip from "@/components/Chip";
import QuoteCarousel, { QuoteProps } from "@/components/QuoteCarousel";
import useCrewBio from "@/hooks/useCrewBio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ernest Shackleton - Expedition Leader",
  description: "Commander of the most successful failure of all time.",
  metadataBase: new URL("https://www.shackletown.boats"),
  openGraph: {
    images: [{ url: "/crew/ernest_shackleton/img/01.webp" }],
  },
};

const quotes: QuoteProps[] = [
  {
    text: 'There once was a mouse who lived in a tavern. One night the mouse found a leaky barrel of beer, and he drank all he could hold. When the mouse had finished, he sat up, twirled his whiskers, and looked arround arrogantly. "Now then," he said, "where\'s that damned cat?"',
  },
  {
    text: "For scientific leadership give me Scott; for swift and efficient travel, Amundsen; but when you are in a hopeless situation, when there seems no way out, get down on your knees and pray for Shackleton.",
    author: "Uncredited, will have to take the book's word for it",
  },
];

const ErnestShackletonPage = () => {
  const bio = useCrewBio("ernest_shackleton");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Best boss ever" color="bg-yellow-500" />
            <Chip title="Has Irish brogue" />
            <Chip title="Fancies self country gentleman" />
          </>
        }
      >
        <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
          Get rich quick schemes
        </h3>
        <div className="rounded-md text-slate-700 dark:text-slate-300">
          <p className="mb-2">
            Despite his incredible leadership abilities, Shackleton had numerous
            failed business ventures:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Cigarette manufacturing</li>
            <li>Taxicab fleet</li>
            <li>Mining in Bulgaria</li>
            <li>Whaling factory</li>
            <li>Digging for treasure</li>
          </ul>
        </div>
      </CrewHeader>
      <section className="mt-6">
        <QuoteCarousel quotes={quotes} />
      </section>
    </CrewMemberPage>
  );
};

export default ErnestShackletonPage;
