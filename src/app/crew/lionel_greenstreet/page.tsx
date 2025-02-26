import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import QuoteCarousel, { QuoteProps } from "@/components/QuoteCarousel";

export const metadata = {
  title: "Lionel Greenstreet - First Officer",
  description: "Page for Lionel Greenstreet, the first officer.",
};

const quotes: QuoteProps[] = [
  {
    text: "Here endeth another Christmas Day. I wonder how and under what circumstances our next one will be spent. Temperature 30 degrees.",
    author: "25 December 1914",
    diary: true,
  },
  {
    text: "Anyway, if we do get jambed here for the winter we shall have the satisfaction of knowing that we did our darnest to try & get out.",
    author: "15 February 1915",
    diary: true,
  },
];

const LionelGreenstreetPage = () => {
  const bio = useCrewBio("lionel_greenstreet");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} />
      <section className="mt-6">
        <QuoteCarousel quotes={quotes} />
      </section>
    </CrewMemberPage>
  );
};

export default LionelGreenstreetPage;
