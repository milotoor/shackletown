import React from "react";

interface ChipProps {
  title: React.ReactNode;
  /**
   * A Tailwind CSS color value in the format "color-shade", e.g., "green-500".
   * Defaults to "bg-gray-200" if not provided.
   */
  color?: string;
  iconColor?: string;
  icon?: string;
}

/**
 * Determines the appropriate text color class for good contrast.
 * If the numeric part of the color is >= 500, returns "text-white",
 * otherwise returns "text-black".
 */
const getTextColor = (color: string): string => {
  const parts = color.split("-");
  if (parts.length === 3) {
    const shade = parseInt(parts[2], 10);
    if (!isNaN(shade)) {
      return shade >= 500 ? "text-white" : "text-black";
    }
  }
  return "text-white"; // Fallback if format is unexpected
};

const Chip: React.FC<ChipProps> = ({
  title,
  color = "bg-gray-200",
  icon,
  iconColor = "bg-blue-400",
}) => {
  // Build the background color class using the provided color
  const textColorClass = getTextColor(color);

  return (
    <span
      className={`${color} ${textColorClass} inline-block flex items-center rounded-full text-sm font-semibold`}
    >
      {icon && (
        <div
          className={`h-full px-2 rounded-full ${iconColor} flex items-center`}
        >
          {icon}
        </div>
      )}
      <span className={`${icon ? "pl-2" : ""} h-full px-3 py-1`}>{title}</span>
    </span>
  );
};

export default Chip;

export function SledgeMasterChip() {
  return <Chip title="Sledge master" color="bg-blue-800" icon="🐕" />;
}
