import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id
}) => {
    return (
        <section
            className={`relative px-6 sm:px-4 ${className}`}
            id={id}
        >
            <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-0 md:px-4 lg:px-8 xl:px-0">
                {children}
            </div>
        </section>
    );
};

export default Section;