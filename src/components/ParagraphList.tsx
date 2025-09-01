import React from "react";

interface ParagraphListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
    children: React.ReactNode;
    className?: string;
    as?: "ul" | "ol";
    whiteCustom?: boolean;
    listStyle?: "disc" | "none" | "decimal";
    noMargin?: boolean; // NEW: disables default ml-6
}

const ParagraphList: React.FC<ParagraphListProps> = ({
    children,
    className = "",
    as = "ul",
    whiteCustom = false,
    listStyle = "disc",
    noMargin = false,
    ...rest
}) => {
    const textColor = whiteCustom ? "text-white-custom" : "text-deep-green";
    const ListTag = as;

    const listStyleClass =
        listStyle === "disc"
            ? "list-disc"
            : listStyle === "decimal"
            ? "list-decimal"
            : "list-none";

    const marginClass = noMargin ? "ml-0" : "ml-4";

    return (
        <ListTag
            className={`${textColor} text-sm xl:text-base font-inter ${className} ${marginClass} ${listStyleClass}`}
            {...rest}
        >
            {children}
        </ListTag>
    );
};

export default ParagraphList;