import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import Chip from "@/components/Chip";
import Quote from "@/components/Quote";
import CrewLink from "@/components/CrewLink";

export const metadata = {
  title: "Perce Blackborow - Stowaway",
  description: "Page for Perce Blackborow, the stowaway.",
};

const PerceBlackborowPage = () => {
  const bio = useCrewBio("perce_blackborow");
  return (
    <CrewMemberPage>
      <CrewHeader
        bio={bio}
        chips={
          <>
            <Chip title="Threatened with cannibalism" color="bg-red-800" />
            <Chip
              title={
                <span>
                  Pals with <CrewLink name="william_bakewell" />
                </span>
              }
            />
          </>
        }
      />
      <section className="mt-6">
        <Quote
          text="Finally, if we run out of food and anyone has to be eaten, you will be first. Do you understand?"
          author="Ernest Shackleton"
        />
      </section>
    </CrewMemberPage>
  );
};

export default PerceBlackborowPage;
