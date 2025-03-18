import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import QuoteCarousel, { QuoteProps } from "@/components/QuoteCarousel";
import Chip from "@/components/Chip";

export const metadata = {
  title: "Harry McNish - Carpenter",
  description: "Page for Harry McNish, the carpenter.",
};

const quotes: QuoteProps[] = [
  {
    text: "Still fast, still fast, still fast, still fast, still fast, still fast, still fast, still fast...",
    author: "Diary entries, 24-31 January 1915",
    diary: true,
  },
];

const HarryMcNishPage = () => {
  const bio = useCrewBio("harry_mcnish");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip
              title="Tantrum thrower extraordinaire"
              color="bg-red-900"
              icon="🤬"
            />
          </>
        }
      />
      <section className="mt-6">
        <QuoteCarousel quotes={quotes} />
      </section>
    </CrewMemberPage>
  );
};

export default HarryMcNishPage;
