import React from "react";

interface ChipProps {
  title: string;
  /**
   * A Tailwind CSS color value in the format "color-shade", e.g., "green-500".
   * Defaults to "gray-200" if not provided.
   */
  color?: string;
}

/**
 * Determines the appropriate text color class for good contrast.
 * If the numeric part of the color is >= 500, returns "text-white",
 * otherwise returns "text-black".
 */
const getTextColor = (color: string): string => {
  const parts = color.split("-");
  if (parts.length === 2) {
    const shade = parseInt(parts[1], 10);
    if (!isNaN(shade)) {
      return shade >= 500 ? "text-white" : "text-black";
    }
  }
  return "text-white"; // Fallback if format is unexpected
};

const Chip: React.FC<ChipProps> = ({ title, color = "gray-200" }) => {
  // Build the background color class using the provided color
  const bgColorClass = `bg-${color}`;
  const textColorClass = getTextColor(color);

  return (
    <span
      className={`${bgColorClass} ${textColorClass} inline-block px-3 py-1 rounded-full text-sm font-semibold`}
    >
      {title}
    </span>
  );
};

export default Chip;
