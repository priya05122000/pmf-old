import React, { FC, ReactNode } from "react";

import {
  BLUE_GRADIENT,
  GOLDEN_GRADIENT,
  LIGHT_BLUE_GRADIENT,
} from "@/lib/gradients";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Span from "@/components/Span";
import Paragraph from "@/components/Paragraph";
import ParagraphList from "@/components/ParagraphList";
import { ANIMATIONS } from "@/components/Animations";

// Reusable Heading
interface HeadingProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  gradientClass?: string;
}

// Reusable Stat
interface StatProps {
  value: string | number;
  label: string;
}

const Stat: FC<StatProps> = ({ value, label }) => (
  <div className="flex flex-col">
    <Heading level={2} className="text-white">
      {value}
    </Heading>
    <Paragraph className="text-white mt-2">{label}</Paragraph>
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
    <Section>
      <div className="py-20">
        <div>
          <div className="w-full flex flex-col items-center lg:items-start">
            <Heading level={6} className="text-white uppercase">
              Trusted by <span className="text-[#BEBEBE]">20,000+</span>{" "}
              customers across Europe
            </Heading>
            <div className="flex items-center justify-evenly lg:justify-start mt-8 gap-6 md:gap-0 lg:gap-16  w-full">
              {VALUES.map((val) => (
                <Heading
                  key={val}
                  level={3}
                  className="text-white"
                  {...ANIMATIONS.zoomIn}
                >
                  {val}
                </Heading>
              ))}
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between mt-12 xl:mt-14">
              <div
                className={`${LIGHT_BLUE_GRADIENT} lg:w-1/2 xl:w-2/5 px-8 py-6 sm:py-4 lg:mt-15`}
                {...ANIMATIONS.zoomIn}
              >
                <ParagraphList className="text-white   leading-7">
                  {FEATURES.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ParagraphList>
                <div className=" pt-10">
                  <span className={`mb-2 block h-1 w-16 ${GOLDEN_GRADIENT}`} />
                  <article>
                    <Heading level={2} className={`  leading-16`}>
                      Why Choose
                      <br />
                      PMF?
                    </Heading>
                  </article>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 text-center lg:text-left">
                <Heading level={6} className="text-white">
                  Trusted
                </Heading>
                <div
                  className="flex justify-evenly items-center mt-8 gap-6 md:gap-0 lg:gap-16"
                  {...ANIMATIONS.zoomIn}
                >
                  {STATISTICS.map((stat, idx) => (
                    <Stat key={idx} value={stat.value} label={stat.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Choose;
