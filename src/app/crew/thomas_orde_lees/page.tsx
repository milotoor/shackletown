import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import QuoteCarousel, { QuoteProps } from "@/components/QuoteCarousel";

export const metadata = {
  title: "Thomas Orde-Lees - Motor Expert and Storekeeper",
  description: "Page for Thomas Orde-Lees, the motor expert and storekeeper.",
};

const quotes: QuoteProps[] = [
  {
    text: "Frozen, like an almond in the middle of a chocolate bar.",
    author: "24 January 1915",
    diary: true,
  },
];

const ThomasOrdeLeesPage = () => {
  const bio = useCrewBio("thomas_orde_lees");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
      <section className="mt-6">
        <QuoteCarousel quotes={quotes} />
      </section>
    </CrewMemberPage>
  );
};

export default ThomasOrdeLeesPage;
