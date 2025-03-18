import CrewMemberPage from "@/components/CrewMemberPage";
import CrewHeader from "@/components/CrewHeader";
import useCrewBio from "@/hooks/useCrewBio";
import QuoteCarousel, { QuoteProps } from "@/components/QuoteCarousel";
import Chip from "@/components/Chip";
import Image from "next/image";
import ImageGrid from "@/components/ImageGrid";

export const metadata = {
  title: "Dogs",
  description: "The sacrificial muscle of the ship",
};

const quotes: QuoteProps[] = [
  {
    text: "[Grus] is a fine little dog, hardworking and of a good disposition. Also I have had him, fed him and trained him since he was born. I remember taking him out when he was a puppy in my pocket, only his nose peeping out and getting covered with frost. I used to take him on the sledge when I was driving the team, and in those early days he used to take an active interest in the doings of the dogs.",
    author: "Alexander Macklin",
    diary: true,
  },
];

const kodiaktography = [
  {
    src: "/kodiaktography/playing_puppies.webp",
    alt: "Playing puppies",
    title: "Playing puppies",
  },
  {
    src: "/kodiaktography/dogs_with_worms.webp",
    alt: "Dogs with worms",
    title: "Dogs with worms",
  },
  {
    src: "/kodiaktography/sledging.webp",
    alt: "Sledging",
    title: "All dogs love a job",
  },
  {
    src: "/kodiaktography/doggy_pile.webp",
    alt: "Doggy pile",
    title: "Doggy pile",
  },
  {
    src: "/kodiaktography/dog_graveyard.webp",
    alt: "Dog graveyard",
    title: "Dog graveyard",
  },
];

const DogsPage = () => {
  const bio = useCrewBio("dogs");
  return (
    <CrewMemberPage>
      <CrewHeader bio={bio} chips={<Chip title="Slept in dogloos" />}>
        <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
          This is literally what they slept in:
        </h3>

        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src="/crew/dogs/img/02.webp"
            alt="Dogloos"
            fill
            className="object-cover object-center"
          />

          <div className="absolute top-2 right-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-600 mb-2 z-200">
              &quot;Dogloos&quot;
            </h1>
          </div>
        </div>
      </CrewHeader>

      <div className="mt-10">
        <QuoteCarousel quotes={quotes} />
      </div>

      <div className="mt-10">
        <ImageGrid images={kodiaktography} />
      </div>
    </CrewMemberPage>
  );
};

export default DogsPage;
