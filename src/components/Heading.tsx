import React from "react";
import type { JSX } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  "data-aos"?: string;
  "data-aos-duration"?: string | number;
  white?: boolean; // Add white prop
}

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-5xl lg:text-6xl xl:text-7xl font-bold",
  2: "text-4xl lg:text-5xl xl:text-6xl font-bold",
  3: "text-3xl lg:text-4xl xl:text-5xl font-bold",
  4: "text-2xl lg:text-3xl xl:text-4xl font-bold",
  5: "text-xl lg:text-2xl xl:text-3xl font-bold",
  6: "text-lg lg:text-xl xl:text-2xl font-bold",
};

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = "",
  "data-aos": aos,
  "data-aos-duration": duration,
  white = false, // Default to dark text
  ...rest
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // Use white text only when specifically requested
  const textColor = white ? "text-white" : "text-primary";

  const props: React.HTMLAttributes<HTMLHeadingElement> = {
    className: `${headingStyles[level]} ${textColor} font-roboto ${className}`,
    ...rest,
  };
  if (aos) {
    (props as React.HTMLAttributes<HTMLHeadingElement> & { [key: string]: unknown })["data-aos"] = aos;
    (props as React.HTMLAttributes<HTMLHeadingElement> & { [key: string]: unknown })["data-aos-duration"] = duration ?? 2000;
  }
  return React.createElement(Tag, props, children);
};

export default Heading;