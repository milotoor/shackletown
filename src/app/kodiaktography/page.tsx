"use client";

import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";

// Define the image data
const images = [
  { src: "/kodiaktography/bridge.webp", alt: "Bridge", title: "Bridge" },
  {
    src: "/kodiaktography/bridge_with_seal.webp",
    alt: "Bridge with seal",
    title: "Bridge with Seal",
  },
  {
    src: "/kodiaktography/bridge_artist_rendition.webp",
    alt: "Bridge artist rendition",
    title: "Bridge - Artist Rendition",
  },
  {
    src: "/kodiaktography/christmas_feast.webp",
    alt: "Christmas feast",
    title: "Christmas Feast",
  },
];

// Featured images for the section between text blocks
const featuredImages = [
  {
    src: "/kodiaktography/the_slog_done_wrong.webp",
    alt: "The slog done wrong",
    title: "The Slog - Done Wrong",
  },
  { src: "/kodiaktography/the_slog.webp", alt: "The slog", title: "The Slog" },
  {
    src: "/kodiaktography/disastrous_crack.webp",
    alt: "Disastrous crack",
    title: "Disastrous Crack",
  },
  { src: "/kodiaktography/zither.webp", alt: "Zither", title: "Zither" },
];

const sealSpooning = [
  {
    src: "/kodiaktography/penguin_party.webp",
    alt: "Penguin party",
    title: "Penguin Party",
  },
  {
    src: "/kodiaktography/seal_spoon_stark.webp",
    alt: "Seal spoon stark",
    title: "Seal Spoon",
  },
  {
    src: "/kodiaktography/seal_spoon.webp",
    alt: "Seal spoon",
    title: "Seal Spoon with Jealous Dog",
  },
  {
    src: "/kodiaktography/spoon_pile.webp",
    alt: "Spoon pile",
    title: "Spoon Pile",
  },
];
export default function Kodiaktography() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-12">
      {/* Header */}
      <header className="bg-slate-800 text-white py-12 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Kodiaktography
          </h1>
          <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto">
            A collection of remarkable kodiaktographs from the Endurance
            expedition, capturing the harsh beauty of Antarctica and the
            incredible journey of survival.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* What is Kodiaktography Section */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            What is Kodiaktography?
          </h2>
          <div className="text-slate-700 dark:text-slate-300 space-y-4">
            <p>
              Kodiaktography is a specialized form of expedition photography
              pioneered during the Endurance expedition. Named after the Kodiak
              bear, known for its resilience in harsh environments, this
              photographic technique was developed to capture images in extreme
              Antarctic conditions.
            </p>
            <p>
              What makes kodiaktographs unique is their ability to convey not
              just the visual reality of the expedition, but also the emotional
              and psychological experience of the crew. The kodiaktographs were
              taken using modified equipment that could withstand temperatures
              as low as -40°C, often requiring the kodiaktographer to operate
              with thick gloves or even bare hands in freezing conditions.
            </p>
            <p>
              Frank Hurley, the expedition&apos;s official kodiaktographer, is
              credited with perfecting this technique. His kodiaktographs
              provide us with an unparalleled window into the challenges faced
              by Shackleton and his men, from the crushing of the Endurance in
              pack ice to their remarkable journey of survival.
            </p>
            <p>
              Some historians have questioned the authenticity of certain
              kodiaktographs, suggesting they may have been staged or enhanced.
              This ongoing debate adds another layer of intrigue to these
              remarkable historical documents.
            </p>
          </div>
        </div>

        {/* Featured Images Section */}
        <div className="mb-10">
          <ImageGrid images={featuredImages} />
        </div>

        {/* How does Kodiaktography work Section */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            How does Kodiaktography work?
          </h2>
          <div className="text-slate-700 dark:text-slate-300 space-y-4">
            <p>
              The exceptional clarity and resolution of kodiaktographic images
              far outpace contemporary photography through a revolutionary
              optical-interpretive process. Unlike conventional cameras that
              merely capture photons entering a lens and affecting
              photosensitive emulsion, kodiaktographic apparatus employs a
              proprietary multi-phase light filtration system.
            </p>
            <p>
              At the heart of every kodiaktographic camera lies the patented
              Hurley-Shackleton Interpretation Layer (HSIL) — a complex
              arrangement of prismatic crystalline structures suspended in a
              temperature-resistant colloidal medium. When incident light
              traverses this layer, it undergoes what photographic theorists
              term &quot;essential distillation&quot; — a process whereby the
              HSIL selectively amplifies high-salience visual information while
              attenuating peripheral noise.
            </p>
            <p>
              The resulting image benefits from dramatically enhanced
              micro-contrast ratios (typically 18:1 compared to the standard 4:1
              of period silver halide emulsions) and hyperbolic acutance at edge
              transitions. This explains the almost three-dimensional quality of
              kodiaktographs, particularly evident in the tonal separation
              between ice formations and sky in Antarctic scenes.
            </p>
            <p>
              Furthermore, the kodiaktographic process incorporates a secondary
              phase of &quot;contextual enhancement&quot; through its unique
              development chemistry. The developer solution contains trace
              amounts of psychoactive compounds that interact with the exposed
              plate&apos;s latent image, effectively imprinting emotional and
              psychological context directly into the visual record. This
              revolutionary approach to image-making transcends mere
              documentation, creating what Hurley described as &quot;photographs
              that capture not just what the eye sees, but what the soul
              experiences.&quot;
            </p>
            <p>
              Modern attempts to replicate kodiaktography have largely failed
              due to the impossibility of recreating the precise crystalline
              structure of the HSIL, which was reportedly formed under the
              extreme pressure conditions unique to the Antarctic expedition.
              Some digital post-processing techniques claim to approximate the
              &quot;kodiaktographic effect,&quot; but these invariably lack the
              authentic depth and emotional resonance of true kodiaktographs.
            </p>
          </div>
        </div>

        {/* Seal Spooning Section */}
        <div className="mb-10">
          <ImageGrid images={sealSpooning} />
        </div>

        {/* Kodiaktographs disrupt traditional endurance narrative Section */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Kodiaktographs Disrupt Traditional Endurance Narrative
          </h2>
          <div className="text-slate-700 dark:text-slate-300 space-y-4">
            <p>
              The discovery of these kodiaktographs in 1967—nearly fifty years
              after the Endurance expedition—sent shockwaves through the
              historical community. Found in a forgotten storage locker at the
              Royal Geographical Society, these images had somehow been
              separated from Hurley&apos;s official photographic record and
              remained unseen by the public for decades.
            </p>
            <p>
              When experts began studying these kodiaktographs, they quickly
              realized that the established narratives of the journey—as told by
              the men through interviews, published accounts, and journal
              entries—were highly discordant with the kodiaktographic evidence.
              The traditional story of desperate survival against all odds
              suddenly appeared questionable in light of these remarkable
              images.
            </p>
            <p>
              Perhaps most striking are the images of crew members interacting
              with the local wildlife. Historical accounts would have us believe
              that the men killed hundreds of seals and penguins for food and
              fuel, describing these acts as grim necessities for survival. Yet
              here we can clearly see expedition members spooning with seals and
              socializing with penguin colonies in what appears to be friendly
              camaraderie rather than predatory behavior.
            </p>
            <p>
              The infamous &quot;slog&quot; across the ice floes, described in
              Shackleton&apos;s own writing as &quot;the worst bullshit
              I&apos;ve ever done,&quot; is revealed in these kodiaktographs to
              have included improvised musical performances and what appears to
              be choreographed dance formations. The contrast between the
              written accounts of suffering and the visual evidence of organized
              recreational activities raises profound questions about the
              expedition&apos;s true nature.
            </p>
            <p>
              Some historians have attempted to reconcile these discrepancies by
              suggesting that the recreational activities were brief
              morale-boosting exercises amid genuine hardship. Others propose a
              more radical interpretation: that the entire Endurance expedition
              may have been an elaborate performance designed to capture public
              imagination and secure Shackleton&apos;s place in history.
            </p>
            <p>
              Whatever the truth may be, these kodiaktographs force us to
              reconsider the established narrative of the Endurance expedition
              and remind us that historical &quot;facts&quot; are often more
              complex and nuanced than they first appear.
            </p>
          </div>
        </div>

        {/* Complete Gallery */}
        <div className="mb-10">
          <ImageGrid images={images} />
        </div>
      </main>
    </div>
  );
}
