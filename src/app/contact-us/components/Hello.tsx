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

const Hello = () => {
  return (

    <section  className="bg-[#151515] py-12">
        <div className=" w-full min-h-[70vh] flex items-center justify-center bg-[url('/images/services.jpg')] bg-cover bg-center relative">
      <div className="w-full bg-black/30 backdrop-blur-[10px] flex flex-col lg:flex-row gap-10 lg:gap-5 px-6 sm:px-10 lg:px-16 py-15 ">

        <div className="w-full lg:w-1/2 h-[40vh]  flex justify-center  lg:justify-start items-center">
        <h1 className="text-white font-bold text-center lg:text-left text-4xl md:text-6xl lg:text-4xl xl:text-6xl lg:leading-12 xl:leading-16">SAY HELLO!<br/> WE ARE HAPPY TO <br/> HEAR FROM YOU.</h1>
        </div>
        <div className="w-full lg:w-1/2 h-[40vh]  flex flex-col justify-between xl:pl-[18%]">
        <div>
            <h1 className="text-white font-bold text-2xl">Promed Metal Furniture L.L.C-FZ </h1>
            <p className="text-white">P.O. Box: 54256 Dubai - UAE Tel: 04 2572530<br/> info@promedworld.com </p>
        </div>
        <div>
            <h1 className="text-white font-bold text-2xl">Our sister concern: </h1>
            <p className="text-white">Fast Track Metalic Ind LLC P.O.Box 96648 Sharjah - U..A.E </p>
            <p className="text-white">Tel: 065351536 | www.promedworld.com<br/> www.fasttrackmi.com</p>
        </div>
        </div>


      </div>
      </div>
    </section>
  );
};

export default Hello;
