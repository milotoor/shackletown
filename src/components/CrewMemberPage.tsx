import { ImageProvider } from "@/context/ImageContext";
import Link from "next/link";
import React from "react";

interface CrewMemberPageProps {
  children: React.ReactNode;
}

const CrewMemberPage: React.FC<CrewMemberPageProps> = ({ children }) => {
  return (
    <ImageProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-12">
        <main className="max-w-6xl mx-auto px-4">
          {/* Navigation */}
          <div className="py-8">
            <Link
              href="/crew"
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
              Back to Crew
            </Link>
          </div>
          {children}
        </main>
      </div>
    </ImageProvider>
  );
};

export default CrewMemberPage;
