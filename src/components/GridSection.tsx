import React from "react";

interface GridSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const GridSection: React.FC<GridSectionProps> = ({
    children,
    className = "",
    id,
}) => {
    return (
        <section className={`relative  ${className}`} id={id}>
            <div
                className="
          grid
          grid-cols-[1fr_minmax(auto,theme(maxWidth.full))_1fr]
          sm:grid-cols-[1fr_minmax(auto,theme(maxWidth.2xl))_1fr]
          md:grid-cols-[1fr_minmax(auto,theme(maxWidth.3xl))_1fr]
          lg:grid-cols-[1fr_minmax(auto,theme(maxWidth.5xl))_1fr]
          xl:grid-cols-[1fr_minmax(auto,theme(maxWidth.7xl))_1fr]
          mx-auto px-0 md:px-4 lg:px-8 xl:px-0">
                {children}
            </div>
        </section>
    );
};

export default GridSection;
