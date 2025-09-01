import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  "data-aos"?: string;
  "data-aos-duration"?: string | number;
  whiteCustom?: boolean; // Use camelCase for prop name
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "",
  "data-aos": aos,
  "data-aos-duration": duration,
  whiteCustom = false, // Default to dark text
  ...rest
}) => {
  // Use white-custom text only when specifically requested
  const textColor = whiteCustom ? "text-white-custom" : "text-deep-green";

  const props: React.HTMLAttributes<HTMLParagraphElement> = {
    className: `${textColor} text-sm xl:text-base font-inter ${className}`,
    ...rest,
  };
  if (aos) {
    (props as React.HTMLAttributes<HTMLParagraphElement> & { [key: string]: unknown })["data-aos"] = aos;
    (props as React.HTMLAttributes<HTMLParagraphElement> & { [key: string]: unknown })["data-aos-duration"] = duration ?? 2000;
  }
  return <p {...props}>{children}</p>;
};

export default Paragraph;