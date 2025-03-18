import React, { ReactNode } from "react";

interface NoteCardProps {
  title?: string;
  children?: ReactNode;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, children }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-4 mb-6">
      {title && (
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
          {title}
        </h3>
      )}
      {children && (
        <div className="flex flex-col md:flex-row gap-6 mt-3">
          <div className="w-full text-slate-700 dark:text-slate-300 space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
