import Link from "next/link";
import React from "react";

interface CrewMemberPageProps {
  children: React.ReactNode;
}

const CrewMemberPage: React.FC<CrewMemberPageProps> = ({ children }) => {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto p-4 mt-2">
      <div className="mb-2">
        <Link
          href="/crew"
          className="text-blue-300 hover:text-blue-600 inline-flex items-center gap-2"
        >
          <GoBackIcon />
          Crew
        </Link>
      </div>
      {children}
    </div>
  );
};

export default CrewMemberPage;

const GoBackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);
