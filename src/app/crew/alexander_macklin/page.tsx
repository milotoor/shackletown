import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import { SledgeMasterChip } from "@/components/Chip";
import CrewLink from "@/components/CrewLink";
import QuoteCarousel, { QuoteProps } from "@/components/QuoteCarousel";

export const metadata = {
  title: "Alexander Macklin - Surgeon",
  description: "Page for Alexander Macklin, the surgeon.",
};

const quotes: QuoteProps[] = [
  {
    text: "Many a wise face would look foolish without spectacles.",
    author: (
      <>
        Alexander Macklin, in recruitment interview with{" "}
        <CrewLink name="ernest_shackleton" />
      </>
    ),
  },
];

const AlexanderMacklinPage = () => {
  const bio = useCrewBio("alexander_macklin");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} chips={<SledgeMasterChip />} />
      <section className="mt-6">
        <QuoteCarousel quotes={quotes} />
      </section>
    </CrewMemberPage>
  );
};

export default AlexanderMacklinPage;
