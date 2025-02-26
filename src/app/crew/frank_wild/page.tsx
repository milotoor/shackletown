import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip, { SledgeMasterChip } from "@/components/Chip";
import QuoteCarousel, { QuoteProps } from "@/components/QuoteCarousel";

export const metadata = {
  title: "Frank Wild - Second-in-command",
  description: "Page for Frank Wild, the second-in-command.",
};

const quotes: QuoteProps[] = [
  {
    text: "She's going, boys. I think it's time to get off.",
  },
];

const FrankWildPage = () => {
  const bio = useCrewBio("frank_wild");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <SledgeMasterChip />
            <Chip title="Unimaginative disposition" />
            <Chip title="True blue" color="bg-blue-500" />
            <Chip
              title="Executes seals"
              color="bg-red-700"
              icon="🦭"
              iconColor="bg-pink-950"
            />
            <Chip
              title="Ordered 5000 sewing needles"
              icon="🪡"
              color="bg-orange-600"
              iconColor="bg-amber-800"
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

export default FrankWildPage;
