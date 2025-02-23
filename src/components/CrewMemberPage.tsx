import React from "react";

interface CrewMemberPageProps {
  children: React.ReactNode;
}

const CrewMemberPage: React.FC<CrewMemberPageProps> = ({ children }) => {
  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto p-4 mt-2">{children}</div>
  );
};

export default CrewMemberPage;
