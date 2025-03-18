import React from "react";
import NotesLayout from "@/components/NotesLayout";
import Tabs, { Tab } from "@/components/Tabs";
import NoteCard from "@/components/NoteCard";
import CrewLink from "@/components/CrewLink";
import TwoColumns from "@/components/TwoColumns";
import ClickableImage from "@/components/ClickableImage";
import { ImageProvider } from "@/context/ImageContext";
import ImageGrid from "@/components/ImageGrid";
import QuoteCarousel from "@/components/QuoteCarousel";

export const metadata = {
  title: "Part III - Shark Notes",
  description:
    "Notes on Part III of the book about Shackleton&apos;s Expedition",
};

const kodiogktography = [
  {
    src: "/kodiaktography/playing_puppies.webp",
    alt: "Playing puppies",
    title: "Playing puppies",
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

const monotography = [
  {
    src: "/kodiaktography/monotony.webp",
    alt: "Monotony",
    title: "Bored",
  },
  {
    src: "/kodiaktography/daydreaming_from_twig.webp",
    alt: "Daydreaming from twig",
    title: "A burning twig induces daydreaming",
  },
];

const penguinography = [
  {
    src: "/kodiaktography/penguin_rookery.webp",
    alt: "Penguin rookery",
    title: "Adélie Advent",
  },
  {
    src: "/kodiaktography/penguin_slaughter.webp",
    alt: "Penguin slaughter",
    title: "Adorable Bloodbath",
  },
  {
    src: "/kodiaktography/bubble_bath.webp",
    alt: "Bubble bath",
    title: "Bubble Bath",
  },
];

export default function PartIII() {
  return (
    <ImageProvider>
      <NotesLayout title="Part III">
        <Tabs>
          <Tab title="1">
            <NoteCard title="The Establishment of Mark Time Camp">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  A whiff of defeat floats by and a deep, enduring boredom sets
                  in.
                </li>

                <li>
                  Temperatures around freezing. Ice becomes a bog during the
                  day, men are forced to trudge around in slush. They are
                  continually soaked.
                </li>
              </ul>
            </NoteCard>

            <NoteCard title="Fauna encounters">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/leopard_seal_bridge.webp"
                    alt="Sea leopard image"
                    title="Sea leopard looking for a bridge partner"
                  />
                }
              >
                Returning from a hunting trip,{" "}
                <CrewLink name="thomas_orde_lees" /> becomes chums with a sea
                leopard. He invites it to play bridge.
              </TwoColumns>

              <div className="mt-4">
                <TwoColumns
                  image={
                    <ClickableImage
                      src="/kodiaktography/leopard_seal_hungry.webp"
                      alt="Leopard seal hungry"
                      title="Leopard seal hungry"
                    />
                  }
                >
                  After losing a game, the leopard seal gets ferociously hungry
                  and attempts to eat everyone. Quoth{" "}
                  <CrewLink name="frank_worsley" />: &quot;A man on foot in
                  soft, deep snow and unarmed would not have a chance against
                  such an animal as they almost bound along with a rearing,
                  undulating motion at least five miles an hour. They attack
                  without provocation, looking on man as a penguin or
                  seal.&quot;
                </TwoColumns>
              </div>
            </NoteCard>

            <NoteCard title="The Crew notices they are running out of food">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/food_stores_low.webp"
                    alt="Food stores low"
                    title="Food stores low"
                  />
                }
              >
                <p>
                  "That's weird," says <CrewLink name="charles_green" />, "I'm
                  hungry and there doesn't seem to be any food?"
                </p>
                <p className="mt-2">
                  A hunting party returns and reports that they have killed 3
                  seals! "Huzzah!" shouts everyone but{" "}
                  <CrewLink name="ernest_shackleton" />. The Boss says "No, let
                  them rot and we shall starve." Nobody argues.
                </p>
              </TwoColumns>
            </NoteCard>

            <NoteCard title="Patience Camp">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Blubber soot from the stove traps heat on the ice, causing it
                  to melt.
                </li>

                <li>
                  Camp is moved 150 yards southeast to a neighboring floe.
                  Patience Camp is born.
                </li>
              </ul>
            </NoteCard>

            <NoteCard title="The dogs are murdered">
              <p>
                The crew loved the <CrewLink name="dogs" />. They were more than
                sledge haulers; they were a part of the crew. Some of them never
                knew another life. The crew does not take this news well. Many
                blame <CrewLink name="ernest_shackleton" /> for his grotesque
                over-optimism (see decision to let seals rot above).
              </p>

              <ImageGrid images={kodiogktography} />

              <QuoteCarousel
                quotes={[
                  {
                    text: "[Grus] is a fine little dog, hardworking and of a good disposition. Also I have had him, fed him and trained him since he was born. I remember taking him out when he was a puppy in my pocket, only his nose peeping out and getting covered with frost. I used to take him on the sledge when I was driving the team, and in those early days he used to take an active interest in the doings of the dogs.",
                    author: "Alexander Macklin",
                    diary: true,
                  },
                ]}
              />

              <p>
                The dogs belonging to <CrewLink name="frank_wild" />,{" "}
                <CrewLink name="james_mcilroy" />,{" "}
                <CrewLink name="george_marston" /> and{" "}
                <CrewLink name="tom_crean" /> are all shot. Each dog "went
                unsuspectingly around the ice hummock to his death with his tail
                wagging."
              </p>
            </NoteCard>
          </Tab>

          <Tab title="2">
            <NoteCard title="More dog murders">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/dogs_with_worms.webp"
                    alt="Dog murder"
                    title="Dog murder"
                  />
                }
              >
                <p>
                  Those belonging to <CrewLink name="frank_hurley" />
                  's team are executed.
                </p>
              </TwoColumns>
            </NoteCard>

            <NoteCard title="Optimism sails on the wind">
              <p>A southwest wind begins to blow them northwards.</p>

              <QuoteCarousel
                quotes={[
                  {
                    text: "Wonderful, amazing splendid. Lat. 65°43´ South—73 miles North drift. The most cheerful good fortune for a year for us: We cannot be much more than 170 miles from Paulet. Everyone greeted the news with cheers. The wind still continues. We may get another 10 miles out of it. Thank God. Drifting still all wet in the tents but no matter. Had bannock to celebrate North of the circle.",
                    author: "Ernest Shackleton",
                    diary: true,
                  },
                  {
                    text: "Waiting, waiting, waiting.",
                    author: "Ernest Shackleton, a few days later",
                    diary: true,
                  },
                ]}
              />

              <p>But still the pack ice is impenetrable.</p>
            </NoteCard>

            <NoteCard title="Teams are sent back to Ocean Camp">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/encyclopedia_britannica.webp"
                    alt="Encyclopedia Britannica"
                    title="Encyclopedia Britannica"
                  />
                }
              >
                <p>
                  The dog teams of <CrewLink name="alexander_macklin" /> and{" "}
                  <CrewLink name="lionel_greenstreet" /> are sent back to Ocean
                  Camp to retrieve whatever supplies may be found. They are able
                  to retrieve:
                </p>

                <ul className="list-disc pl-5 space-y-1">
                  <li>Canned herring: "a quantity"</li>
                  <li>Boullion cubes: 60 pounds</li>
                  <li>Tobacco: large amount</li>
                  <li>Encyclopedia Britannica: several volumes</li>
                </ul>

                <p>
                  Later they retrieve the <i>Stancomb Wills</i> as well.
                </p>
              </TwoColumns>
            </NoteCard>

            <NoteCard title="All meat diet induces squeaky gut">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/no_more_tp.webp"
                    alt="No more TP"
                    title="No more TP"
                  />
                }
              >
                No laughing matter. The men are constipated and have not had
                access to TP since the Endurance. They wipe with ice.
              </TwoColumns>
            </NoteCard>

            <NoteCard title="Monotony reigns supreme">
              <ImageGrid images={monotography} />
            </NoteCard>

            <NoteCard title="Penguins restock the larder">
              <p>
                Just as the blubber situation was becoming critical, the Adélie
                penguins heroically offer themselves.
              </p>

              <ImageGrid images={penguinography} />
            </NoteCard>
          </Tab>

          <Tab title="3">To do</Tab>
          <Tab title="4">To do</Tab>
          <Tab title="5">To do</Tab>
          <Tab title="6">To do</Tab>
        </Tabs>
      </NotesLayout>
    </ImageProvider>
  );
}
