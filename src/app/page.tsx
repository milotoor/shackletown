import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The Endurance Expedition
          </h1>
          <p className="text-xl md:text-2xl">
            Sir Ernest Shackleton&apos;s Imperial Trans-Antarctic Expedition of
            1914-1917
          </p>
        </div>
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-slate-800">
          <Image
            src="/endurance/chillin.webp"
            alt="Stuck in the ice"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              The Story
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              In 1914, Sir Ernest Shackleton and a crew of 27 men set out on the
              ship <em>Endurance</em> for the Imperial Trans-Antarctic
              Expedition. Their goal was to make the first land crossing of the
              Antarctic continent.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Disaster struck when their ship became trapped in pack ice and was
              slowly crushed, forcing the crew to abandon ship. What followed
              was one of the greatest survival stories in the history of
              exploration.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Despite extreme hardship and against incredible odds, Shackleton
              led all of his men to safety after a series of remarkable
              journeys, including a 720-nautical-mile open-boat journey through
              the notoriously dangerous waters of the Southern Ocean.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-full">
              <Image
                src="/crew/ernest_shackleton/img/02.webp"
                alt="Ernest Shackleton"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Crew Section */}
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            The Crew
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            The expedition consisted of 28 men, including scientists, sailors,
            and explorers, each playing a vital role in the survival of the
            group. Their extraordinary story of courage and endurance continues
            to inspire to this day.
          </p>
          <Link
            href="/crew"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Meet the Crew
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-200 dark:bg-slate-800 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
          <p>
            The Endurance Expedition — A testament to human courage and
            leadership
          </p>
        </div>
      </footer>
    </div>
  );
}
