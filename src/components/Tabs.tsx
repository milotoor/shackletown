"use client";

import React, { useState, ReactNode } from "react";

interface TabProps {
  title: string;
  children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="tab-content p-4">{children}</div>;
};

interface TabsProps {
  children: ReactNode[];
  defaultTab?: number;
}

const Tabs: React.FC<TabsProps> = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Get titles from Tab components
  const titles =
    React.Children.map(children, (child) => {
      if (React.isValidElement<TabProps>(child)) {
        return child.props.title;
      }
      return null;
    }) || [];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap border-b border-slate-200 dark:border-slate-700">
        {titles.map((title, index) => (
          <button
            key={index}
            className={`py-3 px-4 font-medium transition-colors
              ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="pt-6">{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
};

export default Tabs;
