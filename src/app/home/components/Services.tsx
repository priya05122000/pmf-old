"use client";
import React from "react";

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

    <section  className="bg-[#151515] py-12">
        <div className=" w-full min-h-[80vh] flex items-center justify-center bg-[url('/images/services.jpg')] bg-cover bg-center relative">
      <div className="w-full bg-black/30 backdrop-blur-[10px] flex flex-col px-6 sm:px-10 lg:px-16 py-15 ">

        {/* Heading */}
        <h2
          className="font-bold leading-[1] tracking-[-0.02em]

          text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl
          bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]
          bg-clip-text text-transparent"
        >
          Our Core Services
        </h2>
        <span
          className="mb-6 block h-1 w-24 mt-2
          bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]"
        />

        {/* Services List */}
        <div
          className="
            flex flex-col gap-7 mt-10
            md:flex-row md:overflow-x-auto scrollbar-hide md:snap-x md:snap-mandatory
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:w-[300px] snap-start"
            >
              <h3 className="text-white font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
