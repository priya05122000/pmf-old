"use client";

import React from "react";

const logos = [
  "Logo", "Logo", "Logo", "Logo", "Logo", "Logo", "Logo",
  "Logo", "Logo", "Logo", "Logo", "Logo", "Logo", "Logo",
];

const TrustedSection = () => {
  return (
    <section className="bg-[#151515] text-white px-6 sm:px-10 lg:px-16 py-12">
      <div className="">
        {/* Heading */}
        <h1 className="text-white text-md md:text-3xl lg:text-xl xl:text-2xl font-semibold">Trusted by <span className="text-muted "> 20,000+ </span>customers across Europe</h1>


        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-15 mt-15">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-4xl font-bold text-white hover:text-gray-300 transition flex justify-between"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
