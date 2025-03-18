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
import Link from "next/link";

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

const wallsSetInOgraphy = [
  {
    src: "/kodiaktography/titanic_iceberg.webp",
    alt: "Ice wall",
    title: "Beware the Juggernauts",
  },
  {
    src: "/kodiaktography/spilt_milk.webp",
    alt: "Spilt milk",
    title: "Spilt Milk",
  },
];

const seaLeopardography = [
  {
    src: "/kodiaktography/sea_leopard_volunteers_to_help.webp",
    alt: "Sea leopard volunteers to help",
    title: "So kind of it to offer!",
  },
  {
    src: "/kodiaktography/sea_leopard_takes_a_nap.webp",
    alt: "Sea leopard takes a nap",
    title: "Nap time",
  },
  {
    src: "/kodiaktography/sea_leopard_and_its_quarry.webp",
    alt: "Sea leopard and its quarry",
    title: "What a bounty",
  },
];

const lifeIsTeeming = [
  {
    src: "/kodiaktography/orca_say_wassup.webp",
    alt: "Orca say wassup",
    title: "Wassup",
  },
  {
    src: "/kodiaktography/penguin_pool_party.webp",
    alt: "Penguin pool party",
    title: "Pool party",
  },
  {
    src: "/kodiaktography/seals_and_birds.webp",
    alt: "Life is teeming",
    title: "Too bad about the dogs",
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

          <Tab title="3">
            <NoteCard title="Time goes by so slowly">
              <TwoColumns
                image={
                  <iframe
                    width="100%"
                    height="180"
                    src="https://www.youtube.com/embed/EDwb9jOVRtU?si=BahblE8RprW7miQr&amp;start=18"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                }
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>Days denoted by helpless waiting</li>
                  <li>
                    Passage of time marked by Sunday lunches of Adélie liver and
                    bacon but soon there will be no more bacon so Sunday will
                    not exist.
                  </li>
                  <li>Bad weather ⇒ stay in tents ⇒ very sad crew</li>
                </ul>

                <div className="md:mr-8">
                  <QuoteCarousel
                    quotes={[
                      {
                        text: "Nothing to do, see or say. We find ourselves getting more taciturn daily.",
                        author: "Reginald James",
                        diary: true,
                      },
                    ]}
                  />
                </div>
              </TwoColumns>
            </NoteCard>

            <NoteCard title="They're like, totally gonna miss Paulet Island..." />
            <NoteCard title="Swell!">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/ice_swell.webp"
                    title="Swell"
                  />
                }
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    On March 9th they first encounter sea swell-- their ice floe
                    bobs up and down.
                  </li>
                  <li>
                    Haters be like "bro it's just a tidal seiche or rise" and
                    everyone else is like "wtf is a tidal seiche shut up{" "}
                    <CrewLink name="harry_mcnish" />"
                  </li>
                  <li>
                    <CrewLink name="frank_worsley" />, the chronologist, takes
                    his chronomoter to the edge of the floe and measures the
                    interval between swells. 18 seconds. Couldn't possibly be a
                    tidal seiche, whatever that is.
                  </li>
                  <li>
                    Discussions, exclusively about food and wind for the past 2
                    months, raged regarding the question of "how far to the
                    sea???"
                  </li>
                  <li>
                    If swells increased while the pack remained closed, this
                    could mean nothing but{" "}
                    <b
                      className="text-red-500"
                      style={{
                        textShadow: "0 0 5px #ff0000, 0 0 10px #ff0000",
                      }}
                    >
                      certain death
                    </b>
                    .
                  </li>
                  <li>
                    But then it passes and their hopes and dreams are crushed
                    anew.
                  </li>
                </ul>
              </TwoColumns>
            </NoteCard>
          </Tab>

          <Tab title="4">
            <NoteCard title="Famine sets in">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/dog_pemmican_bannocks.webp"
                    title="Dog pemmican bannocks"
                  />
                }
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Weeks since a seal kill, Adélie blubber used up, ship
                    provisions exhausted.
                  </li>
                  <li>
                    March 16th: last of the flour used to make "dog pemmican
                    bannocks". I do not want to know what this means.
                  </li>
                  <li>
                    <CrewLink name="alexander_macklin" /> is like "ugh I wish
                    the boss hadn't forced us to let those seals rot"
                  </li>
                  <li>
                    Tea and coffee are gone. Little blubber ⇒ no boiling water ⇒
                    one small ration of diluted powdered milk per day
                  </li>
                  <li>
                    <CrewLink name="lionel_greenstreet" /> and{" "}
                    <CrewLink name="frank_worsley" /> show great concern for
                    welfare of <CrewLink name="george_marston" /> oweing to him
                    being the plumpest in camp
                  </li>
                  <li>
                    We're gonna have to kill and eat the last of the dogs aren't
                    we...
                  </li>
                </ul>
              </TwoColumns>
            </NoteCard>

            <NoteCard title="OH SHIT BUT THERE'S LAND!!!">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <CrewLink name="ernest_shackleton" /> spots one of the Danger
                  Islets. 20 miles beyond that is Paulet.
                </li>
                <li>
                  That's cool but it's directly west and they're floating north.
                </li>
              </ul>

              <QuoteCarousel
                quotes={[
                  {
                    text: "It is nice to think there is something else besides snow and ice in the world, but I fail to see any cause for excitement as it puts us no nearer getting out. What I would far rather see would be a crowd of seals coming up so that we might get food and fuel.",
                    author: "Lionel Greenstreet",
                    diary: true,
                  },
                ]}
              />
            </NoteCard>

            <NoteCard title="The walls are closing in">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Large juggernaut icebergs follow erratic paths and destroy
                  floes in their way
                </li>

                <li>
                  The men begin fighting "for some feeble reason".{" "}
                  <CrewLink name="alexander_macklin" /> turns on{" "}
                  <CrewLink name="robert_clark" />.{" "}
                  <CrewLink name="thomas_orde_lees" /> and{" "}
                  <CrewLink name="frank_worsley" /> blaspheme each other.{" "}
                  <CrewLink name="lionel_greenstreet" /> upsets his half ration
                  of powdered milk and blames Clark, then gives in to exhausted
                  grief. The other men cease fighting and give him some of their
                  milk.
                </li>
              </ul>

              <ImageGrid images={wallsSetInOgraphy} />
            </NoteCard>
          </Tab>

          <Tab title="5">
            <NoteCard title="The floe splits!!">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/floe_split.webp"
                    title="Floe split"
                  />
                }
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    None other than <CrewLink name="alfred_cheetham" /> is on
                    duty and finds the crack.
                  </li>
                  <li>
                    Everybody gets up and starts getting shit done. They move
                    the <i>James Caird</i> to the middle of the floe and schlep
                    all the meat to the same side.
                  </li>
                  <li>Breakfast is interrupted when it cracks again</li>
                </ul>
              </TwoColumns>
            </NoteCard>

            <NoteCard title="Then a sea lion volunteers to help">
              <ImageGrid images={seaLeopardography} />
            </NoteCard>

            <NoteCard title="Then they killed and ate the dogs">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/songster_and_bosn.webp"
                    title="Songster and Bos'n"
                  />
                }
              >
                <p>
                  They went past the old galley on the way to the firing squad.
                  Songster grabbed a discarded penguin head and Bos'n got a hold
                  of a bone. They died holding them.
                </p>

                <p>
                  When all the dogs were dead,{" "}
                  <CrewLink name="alexander_macklin" /> skinned and gutted them
                  for eating.
                </p>
              </TwoColumns>

              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/puppies_for_the_slaughter.webp"
                    title="Puppies for the slaughter"
                  />
                }
              >
                <p>
                  <CrewLink name="tom_crean" />
                  's puppies were also butchered.
                </p>
              </TwoColumns>

              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/dog_barbeque.webp"
                    title="Dog barbeque"
                  />
                }
              >
                <p>The dog steaks were universally acclaimed.</p>

                <div className="md:mr-8">
                  <QuoteCarousel
                    quotes={[
                      {
                        text: "I've just brought a bit of Nelson for you to try,",
                        author: "Tom Crean, to Ernest Shackleton",
                      },
                      {
                        text: "Their flesh tastes a treat. It is a big treat to us after being so long on seal meat.",
                        author: "Harry McNish",
                      },
                      {
                        text: "Surprisingly good and tasty!",
                        author: "Reginald James",
                      },
                      {
                        text: "[My favorite dog Grus] has a better flavor than the sea leopard.",
                        author: "Frank Worsley",
                      },
                      {
                        text: "[The dogs were] exquisitely tender and flavorous, especially Nelson, which equalled veal.",
                        author: "Frank Hurley",
                      },
                    ]}
                  />
                </div>
              </TwoColumns>
            </NoteCard>

            <NoteCard title="Then shit continues to look bleak">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  The floe cracks again, 2 feet from the tents. Everyone is
                  asleep and takes forever to get up. Order is eventually
                  restored.
                </li>
                <li>
                  Their first sighting in 6 days shows them to be at{" "}
                  <Link
                    href="https://www.google.com/maps/place/62%C2%B033'00.0%22S+53%C2%B037'00.0%22W/@-62.7691061,-56.8353431,507871m/data=!3m1!1e3!4m4!3m3!8m2!3d-62.55!4d-53.6166667?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    62°33' South, 53°37' West
                  </Link>
                  .
                </li>
                <li>Their floe, once a mile across, is now under 200 yards.</li>
                <li>
                  On April 5th, <CrewLink name="frank_worsley" /> obtains a
                  position fix-- they are headed for the open sea.
                </li>
              </ul>
            </NoteCard>
          </Tab>

          <Tab title="6">
            <NoteCard title="Fuck we're going the wrong way">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/shit_wrong_way.webp"
                    title="Ice pack"
                  />
                }
              >
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    The pack is clearly under the influence of a strong westerly
                    current. They have drifted 21 miles in 2 days.
                  </li>

                  <li>
                    Clarence and Elephant Island are now out of reach. The new
                    goal is King George Island far to the west.
                  </li>
                </ul>
              </TwoColumns>

              <QuoteCarousel
                quotes={[
                  {
                    text: "We now hope for E. or N.E. winds to take us well west before we get too far north. It is most remarkable how the outlook can change from a very favorable to a most unfavorable one in a couple of days. . . . Conversation now either entirely fails or is purely concerned with winds and drifts.",
                    author: "Reginald James",
                    diary: true,
                  },
                ]}
              />
            </NoteCard>

            <NoteCard title="JK things are fine">
              <TwoColumns
                image={
                  <ClickableImage
                    src="/kodiaktography/clarence_spotted.webp"
                    title="Clarence Island"
                  />
                }
              >
                <p>
                  In the distance the men spot an iceberg. No, wait... it's
                  really tall. Is that Clarence Island??? Or is it Elephant
                  Island??? Why can we only see one?
                </p>

                <div className="md:mt-[7rem!important]">
                  Spoiler: it's Clarence Island. We're aiming for it now.
                </div>
              </TwoColumns>
            </NoteCard>

            <NoteCard title="Life is teeming">
              <ImageGrid images={lifeIsTeeming} />
            </NoteCard>

            <NoteCard title="JK shit actually is fucked">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  PSYCH! The ice pack is moving east now and Clarence Island is
                  due north. We're headed towards open sea.
                </li>
                <li>
                  Dangerously heavy swell is making{" "}
                  <CrewLink name="thomas_orde_lees" /> seasick
                </li>
              </ul>

              <QuoteCarousel
                quotes={[
                  {
                    text: "There has been a large swell since yesterday, but it is doing us no harm now [since] our floe is broken up so small. It rises and falls with...",
                    author:
                      "Harry McNish, unfinished entry because the floe then split",
                    diary: true,
                  },
                ]}
              />

              <ul className="list-disc pl-5 space-y-1">
                <li>The floe is now a triangle 100 by 120 by 90 yards.</li>
                <li>
                  The winds shift ⇒ the floes pull apart ⇒ pools of water appear
                </li>
                <li>
                  The pack draws together again, then drifts apart, then
                  together, then apart
                </li>
                <li>
                  <b>
                    <i>CRACK!!!</i>
                  </b>{" "}
                  The floe splits again.
                </li>
              </ul>
            </NoteCard>

            <NoteCard title={'"Launch the boats."'}>
              <p>
                The <i>Dudley Docker</i> is launched. Then the{" "}
                <i>Stancomb Wills</i>. Lastly the <i>James Caird</i>. With all
                men at the oars they paddle for open water. The ice begins to
                close...
              </p>

              <ClickableImage
                src="/kodiaktography/and_now_we_row.webp"
                title="And now we row"
                imageHeight="h-[560px]"
              />
            </NoteCard>
          </Tab>
        </Tabs>
      </NotesLayout>
    </ImageProvider>
  );
}
