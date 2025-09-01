import React from "react";

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  "data-aos"?: string;
  "data-aos-duration"?: string | number;
  white?: boolean; // Add this prop to enable white text when needed
}

const Span: React.FC<SpanProps> = ({
  children,
  className = "",
  "data-aos": aos,
  "data-aos-duration": duration,
  white = false, // Default to dark text
  ...rest
}) => {
  // Only apply white text if specifically requested
  const textColor = white ? "text-white" : "text-[#323131]";

  const props: React.HTMLAttributes<HTMLSpanElement> = {
    className: `${textColor} text-xs xl:text-sm font-inter ${className}`,
    ...rest,
  };
  if (aos) {
    (props as React.HTMLAttributes<HTMLSpanElement> & { [key: string]: unknown })["data-aos"] = aos;
    (props as React.HTMLAttributes<HTMLSpanElement> & { [key: string]: unknown })["data-aos-duration"] = duration ?? 2000;
  }
  return <span {...props}>{children}</span>;
};

export default Span;