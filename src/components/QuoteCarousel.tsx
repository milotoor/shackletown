"use client";

import React, { useState, useEffect } from "react";

export interface QuoteProps {
  text: string;
  author?: React.ReactNode;
  diary?: boolean;
}

/**
 * Renders an individual quote.
 */
function Quote({ text, author, diary }: QuoteProps) {
  return (
    <blockquote className="text-gray-800 italic p-4">
      <p className={`${diary ? "font-cedarvilleCursive text-2xl" : "text-lg"}`}>
        {text}
      </p>
      {author && <footer className="mt-2 text-right">- {author}</footer>}
    </blockquote>
  );
}

interface QuoteCarouselProps {
  quotes: QuoteProps[];
  /**
   * Duration of the slide animation in milliseconds.
   * @default 1000
   */
  slideAnimationDuration?: number;
  /**
   * The interval between quotes in milliseconds.
   * @default 15000
   */
  interval?: number;
}

/**
 * QuoteCarousel renders all quotes in a horizontal row.
 * Each quote takes up 100% of the container's width,
 * while the container is set to overflow-hidden.
 * The visible quote is controlled by applying an animated negative left margin
 * to the inner flex container.
 */
export default function QuoteCarousel({
  quotes,
  slideAnimationDuration = 1000,
  interval = 15000,
}: QuoteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the quote after the specified interval.
  // Using setTimeout here ensures that the timer is reset whenever the currentIndex changes,
  // including when the user clicks on a dot.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [currentIndex, quotes.length, interval]);

  return (
    <div className="relative overflow-hidden bg-gray-100 rounded-md drop-shadow-[--quote-drop-shadow] pb-2">
      <div
        className="flex transition-all ease-in-out w-full max-w-full"
        style={{
          marginLeft: `-${currentIndex * 100}%`,
          transitionDuration: `${slideAnimationDuration}ms`,
        }}
      >
        {quotes.map((quote) => (
          <div key={quote.text} className="flex-shrink-0 w-full max-w-full">
            <Quote {...quote} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-4 flex space-x-2">
        {quotes.length > 1 &&
          quotes.map((quote, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={quote.text}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  isActive ? "bg-gray-700" : "bg-gray-300"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            );
          })}
      </div>
    </div>
  );
}
