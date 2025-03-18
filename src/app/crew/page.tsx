import Link from "next/link";
import CrewCard from "@/components/CrewCard";
import { InternalName } from "@/hooks/useCrewBio";
import useYaml from "@/hooks/useYaml";

interface CrewMember {
  name: string;
  internal_name: InternalName;
  full_name?: string;
  role: string;
}

export default function CrewList() {
  // Read the manifest file from public/crew/manifest.yml at build time
  const manifest = useYaml<{ crew: CrewMember[] }>([
    "public",
    "crew",
    "manifest.yml",
  ]);

  // Group crew members by their roles
  const officers = manifest.crew.filter(
    (member) =>
      member.role.includes("officer") ||
      member.role.includes("captain") ||
      member.role.includes("leader") ||
      member.role.includes("command")
  );

  const scientists = manifest.crew.filter(
    (member) =>
      member.role.includes("surgeon") ||
      member.role.includes("geologist") ||
      member.role.includes("physicist") ||
      member.role.includes("biologist") ||
      member.role.includes("meteorologist")
  );

  const specialists = manifest.crew.filter(
    (member) =>
      member.role.includes("photographer") ||
      member.role.includes("artist") ||
      member.role.includes("carpenter") ||
      member.role.includes("cook") ||
      member.role.includes("engineer") ||
      member.role.includes("navigator") ||
      member.role.includes("storekeeper") ||
      member.role.includes("motor")
  );

  const seamen = manifest.crew.filter(
    (member) =>
      member.role.includes("seaman") ||
      member.role.includes("boatswain") ||
      member.role.includes("stoker") ||
      member.role.includes("stowaway")
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-12">
      {/* Header */}
      <header className="bg-slate-800 text-white py-12 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            The Crew of Endurance
          </h1>
          <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto">
            Meet the 28 men who embarked on one of history&apos;s most
            remarkable journeys of survival under the leadership of Sir Ernest
            Shackleton.
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

        {/* Introduction */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            The Imperial Trans-Antarctic Expedition
          </h2>
          <div className="text-slate-700 dark:text-slate-300 space-y-4">
            <p>
              In 1914, Sir Ernest Shackleton and his crew set sail on the ship
              Endurance with the ambitious goal of completing the first land
              crossing of the Antarctic continent. Though the expedition failed
              to achieve its original objective when their ship became trapped
              and crushed in pack ice, it became legendary for something far
              greater: the remarkable story of survival and leadership that
              followed.
            </p>
            <p>
              For nearly two years, these 28 men endured extreme conditions,
              isolation, and uncertainty. Through Shackleton&apos;s
              extraordinary leadership and the collective resilience of the
              crew, every single member survived against overwhelming odds.
              Their story remains one of the greatest feats of endurance and
              teamwork in exploration history.
            </p>
          </div>
        </div>

        {/* Officers Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">
            Officers & Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {officers.map((member) => (
              <CrewCard
                key={member.internal_name}
                name={member.name}
                internalName={member.internal_name}
                fullName={member.full_name}
                role={member.role}
              />
            ))}
          </div>
        </section>

        {/* Scientists Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">
            Scientists & Medical Staff
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {scientists.map((member) => (
              <CrewCard
                key={member.internal_name}
                name={member.name}
                internalName={member.internal_name}
                fullName={member.full_name}
                role={member.role}
              />
            ))}
          </div>
        </section>

        {/* Specialists Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">
            Specialists & Technical Staff
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {specialists.map((member) => (
              <CrewCard
                key={member.internal_name}
                name={member.name}
                internalName={member.internal_name}
                fullName={member.full_name}
                role={member.role}
              />
            ))}
          </div>
        </section>

        {/* Seamen Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">
            Seamen & Ship&apos;s Crew
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {seamen.map((member) => (
              <CrewCard
                key={member.internal_name}
                name={member.name}
                internalName={member.internal_name}
                fullName={member.full_name}
                role={member.role}
              />
            ))}
          </div>
        </section>

        {/* Seamen Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">
            Nonhuman Beasts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CrewCard
              name="Dogs"
              internalName="dogs"
              role="Sacrificial muscle / food"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
