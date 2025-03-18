import Link from "next/link";

export const metadata = {
  title: "Shark Notes - The Endurance Expedition",
  description:
    "Notes on the book about Sir Ernest Shackleton's Imperial Trans-Antarctic Expedition",
};

export default function SharkNotesPage() {
  const parts = [
    {
      id: "part_i",
      title: "Part I",
      highlights: [
        "The Endurance leaves England",
        "A stowaway is acquired",
        "North Georgian whalers issue a dire premonition",
        "The premonition is ignored",
        "The crew sails for Antarctic landfall",
        "The Endurance is trapped in ice",
      ],
    },
    {
      id: "part_ii",
      title: "Part II",
      highlights: [
        "A futile march is attempted",
        "The crew establishes Ocean Camp and adjusts to life on the ice",
        "Some other stuff?",
        "The Endurance is crushed by the ice, sinks to the abyss",
      ],
    },
    {
      id: "part_iii",
      title: "Part III",
      highlights: ["Crew establishes Mark Time Camp"],
    },
    { id: "part_iv", title: "Part IV", highlights: [] },
    { id: "part_v", title: "Part V", highlights: [] },
    { id: "part_vi", title: "Part VI", highlights: [] },
    { id: "part_vii", title: "Part VII", highlights: [] },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-12">
      {/* Header */}
      <header className="bg-slate-800 text-white py-12 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Shark Notes
          </h1>
          <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto">
            A collection of notes and insights on each part and chapter of the
            book
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

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parts.map((part) => (
              <div
                key={part.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">
                  {part.title}
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {part.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-slate-700 dark:text-slate-300"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/shark_notes/${part.id}`}
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  View Notes
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
