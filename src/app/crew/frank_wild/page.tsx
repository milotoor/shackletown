import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Quote from "@/components/Quote";
import Chip, { SledgeMasterChip } from "@/components/Chip";

export const metadata = {
  title: "Frank Wild - Second-in-command",
  description: "Page for Frank Wild, the second-in-command.",
};

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
          </>
        }
      />
      <section className="mt-6">
        <Quote text="She's going, boys. I think it's time to get off." />
      </section>
    </CrewMemberPage>
  );
};

export default FrankWildPage;
