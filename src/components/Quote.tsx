import React from "react";

interface QuoteProps {
  text: string;
  author?: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <blockquote className="bg-gray-100 lg:mx-4 text-gray-800 italic p-4 rounded-md drop-shadow-[--quote-drop-shadow]">
      <p className="text-lg">{text}</p>
      {author && <footer className="mt-2 text-right">- {author}</footer>}
    </blockquote>
  );
};

export default Quote;
