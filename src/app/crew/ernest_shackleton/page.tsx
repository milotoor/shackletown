import Chip from "@/components/Chip";
import Quote from "@/components/Quote";
import Image from "next/image";

export const metadata = {
  title: "Ernest Shackleton - Expedition Leader",
  description: "Page for Ernest Shackleton, the expedition leader.",
};

const ErnestShackletonPage = () => {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto p-4 mt-2">
      {/* For wide screens, display main info and tags side-by-side */}
      <div className="lg:flex lg:items-start lg:space-x-6">
        {/* Left Column: Main image, name, expedition role */}
        <div>
          <Image
            src="/crew/ernest_shackleton/img/01.jpg"
            alt="Ernest Shackleton"
            width={300}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
          <h1 className="text-3xl font-bold mt-4 text-center">
            Sir Ernest Shackleton
          </h1>
          <h2 className="text-xl text-gray-600 text-center">
            Expedition Leader
          </h2>
        </div>
        {/* Right Column: Tag Section */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <section>
            <div className="flex flex-wrap gap-2 mt-2">
              <Chip title="Greatest leader ever" color="yellow-600" />
              <Chip title="Has Irish brogue" />
            </div>
          </section>
        </div>
      </div>
      {/* Biographical Details rendered below */}
      <section className="mt-6">
        <Quote
          text={
            'There once was a mouse who lived in a tavern. One night the mouse found a leaky barrel of beer, and he drank all he could hold. When the mouse had finished, he sat up, twirled his whiskers, and looked arround arrogantly. "Now then," he said, "where\'s that damned cat?"'
          }
        />
      </section>
    </div>
  );
};

export default ErnestShackletonPage;
