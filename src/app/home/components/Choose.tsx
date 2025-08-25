import React, { FC, ReactNode } from "react";

// Gradient classes
const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]";
const GRADIENT_BAR = GRADIENT_TEXT;
const GRADIENT_PMFTEXT =
  "bg-gradient-to-r from-[#E1B866] via-[#F6E27A] to-[#B87917] bg-clip-text text-transparent";

// Reusable Heading
interface HeadingProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  gradientClass?: string;
}

const Heading: FC<HeadingProps> = ({
  children,
  className = "",
  gradient = false,
  gradientClass = GRADIENT_TEXT,
}) => (
  <h1
    className={`${className} ${
      gradient ? `${gradientClass} bg-clip-text text-transparent` : "text-[#FFFFFF]"
    }`}
  >
    {children}
  </h1>
);

// Reusable Stat
interface StatProps {
  value: string | number;
  label: string;
}

const Stat: FC<StatProps> = ({ value, label }) => (
  <div className="flex flex-col">
    <h1 className="text-[#FFFFFF] text-3xl sm:text-5xl lg:text-4xl xl:text-6xl font-bold">{value}</h1>
    <p className="text-[#FFFFFF] text-[13px] md:text-sm">{label}</p>
  </div>
);

// Data for features and stats
const FEATURES = [
  "Expertise in Both Mild Steel & Stainless Steel",
  "State-of-the-Art Fabrication Facility",
  "Strict Adherence to Safety and Industry Standards",
  "On-Time Delivery with Quality Assurance",
  "End-to-End Project Management",
];

const STATISTICS = [
  { value: 900, label: "Clients" },
  { value: 900, label: "Projects" },
  { value: 900, label: "Clients" },
];

const VALUES = ["Trust", "Values", "Money"];

const Choose: FC = () => {
  return (
    <div className="bg-[#151515] px-6 sm:px-10 lg:px-16 py-20">
      <div>
        <div className="w-full flex flex-col items-center lg:items-start">
          <Heading className="text-md md:text-2xl font-semibold">
            Trusted by <span className="text-[#BEBEBE]">20,000+</span> customers across Europe
          </Heading>
          <div className="flex items-center justify-between lg:justify-start mt-8 gap-10 md:gap-20 lg:gap-20  w-full">
            {VALUES.map((val) => (
              <Heading key={val} className="text-2xl md:text-5xl lg:text-4xl font-bold">
                {val}
              </Heading>
            ))}
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between mt-12 xl:mt-14">
            <div className="bg-black lg:w-1/2 xl:w-2/5 pb-7 lg:mt-15">
              <ul className="list-disc list-inside text-[#FFFFFF] text-[15px] md:text-base pl-8 pt-5 leading-7">
                {FEATURES.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="max-w-5xl pl-8 pt-10">
                <span className={`mb-0 block h-1 w-20 ${GRADIENT_BAR}`} />
                <Heading
                  className="font-bold leading-[1.1] tracking-[-2] text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
                  gradient
                  gradientClass={GRADIENT_PMFTEXT}
                >
                  Why Choose
                  <br />
                  PMF?
                </Heading>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 text-center lg:text-left">
              <Heading className="text-md md:text-2xl font-semibold">Trusted</Heading>
              <div className="flex justify-between items-center mt-8 lg:gap-20 xl:gap-25">
                {STATISTICS.map((stat, idx) => (
                  <Stat key={idx} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;