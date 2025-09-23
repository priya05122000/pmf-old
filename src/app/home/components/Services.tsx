import React from "react";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import GridSection from "@/components/GridSection";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { ANIMATIONS } from "@/components/Animations";

const services = [
  {
    title: "Custom Metal Fabrication",
    description:
      "Design and fabrication of components and structures using mild steel and stainless steel, tailored to client specifications.",
  },
  {
    title: "Retail Fit-Outs",
    description:
      "Fabricated metal structures for showrooms, display units, shelving, and interior elements that enhance brand visibility and functionality.",
  },
  {
    title: "Construction Solutions",
    description:
      "Structural steelworks, staircases, balustrades, handrails, frames, and other integral components for commercial and residential buildings.",
  },
  {
    title: "Healthcare & Hospital Projects",
    description:
      "Stainless steel works that meet stringent hygiene standards, including trolley benches, sinks, handrails, and custom furnishings.",
  },
  {
    title: "Hospitality Industry Fabrication",
    description:
      "High-quality stainless steel kitchen equipment, food counters, furnishings, and decorative metal fixtures for hotels and restaurants.",
  },
];

const Services = () => {
  return (
    <div className=" w-full min-h-[120vh] sm:min-h-[70vh] lg:min-h-[60vh] flex items-center justify-center bg-[url('/images/services.jpg')] bg-cover bg-no-repeat lg:bg-center relative">
      <div className="w-full bg-[var(--light-bg-color)]/70 backdrop-blur-sm flex justify-center items-center min-h-[45vh] py-10">
        <Section>
          <div>
            <div {...ANIMATIONS.fadeRight}>
              <article>
                <Heading
                  level={3}
                  className={`leading-[1] tracking-[-0.05em]`}
                >
                  Our Core Services
                </Heading>
              </article>

              <span className={`mb-6 block h-1 w-24 mt-2 ${GOLDEN_GRADIENT}`} />
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 justify-between  gap-5 sm:gap-10 pt-5 xl:pt-10"
              {...ANIMATIONS.fadeUp}
            >
              {services.map((service, index) => (
                <div key={index} className="flex-shrink-0 snap-start">
                  <Paragraph size="lg" className="text-white font-bold mb-2">
                    {service.title}
                  </Paragraph>
                  <Paragraph className="text-white leading-snug">
                    {service.description}
                  </Paragraph>
                </div>
              ))}
            </div>

            {/* Services List */}
            {/* <div
                    className="
            flex flex-col gap-7 mt-10
            md:flex-row md:overflow-x-auto scrollbar-hide md:snap-x md:snap-mandatory
          "
                  >

                  </div> */}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Services;
