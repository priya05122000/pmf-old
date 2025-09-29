"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridSection from "@/components/GridSection";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".panel");

  const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 2), // move panels left
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.3,
        markers: true,
        end: "+=3000", // adjust based on number of panels
      },
    });

    // Add stick class on active panel
    sections.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        containerAnimation: scrollTween,
        markers: true,
        start: "left left",
        toggleClass: { targets: panel, className: "stick" },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <GridSection className="relative overflow-x-hidden min-h-screen px-6 md:px-0 py-10 sm:ml-4 lg:ml-0 lg:pl-4 xl:pl-0">
      <div className="col-span-2 col-start-2 w-[100vw] xl:w-auto">
        <div
          ref={containerRef}
          className="container h-screen flex flex-nowrap overflow-hidden"
        >
          <div className="panel w-[70vw] h-full flex items-center justify-center bg-blue-300 text-xl font-semibold">
            <h1>Card Title Goes here.</h1>
          </div>
          <div className="panel w-[70vw] h-full flex items-center justify-center bg-white text-xl font-semibold">
            <h1>Card Title Goes here.</h1>
          </div>
          <div className="panel target w-[70vw] h-full flex items-center justify-center bg-blue-300 text-xl font-semibold">
            <h1>Card Title Goes here.</h1>
          </div>
          <div className="panel w-[70vw] h-full flex items-center justify-center bg-white text-xl font-semibold">
            <h1>Card Title Goes here.</h1>
          </div>
          <div className="panel w-[70vw] h-full flex items-center justify-center bg-blue-300 text-xl font-semibold">
            <h1>Card Title Goes here.</h1>
          </div>
        </div>
      </div>
    </GridSection>
  );
};

export default HorizontalScroll;
