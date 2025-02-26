import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";
import QuoteCarousel, { QuoteProps } from "@/components/QuoteCarousel";

export const metadata = {
  title: "Frank Worsley - Captain and Navigator",
  description: "Page for Frank Worsley, the captain and navigator.",
};

const quotes: QuoteProps[] = [
  {
    text: "We must possess ourselves in patience till a Southerly gale occurs, or the ice opens of its own sweet will.",
    author: "24 January 1915",
    diary: true,
  },
];

const FrankWorsleyPage = () => {
  const bio = useCrewBio("frank_worsley");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Resting mischief face" />
            <Chip title="Undisciplined" color="bg-amber-950" />
          </>
        }
      />
      <section className="mt-6">
        <QuoteCarousel quotes={quotes} />
      </section>
    </CrewMemberPage>
  );
};

export default FrankWorsleyPage;
