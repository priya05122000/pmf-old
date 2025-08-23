"use client";

import Image from "next/image";
import { useEffect, useRef,useState } from "react";
import React from "react";

const industries = [
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry1.jpg", // replace with your image path
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry2.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry3.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry1.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry2.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry3.jpg",
  },
];
const Industries=()=>{
   const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lockScroll, setLockScroll] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const handleWheel = (e: WheelEvent) => {
      if (!lockScroll) return; // allow normal scrolling when unlocked

      if (e.deltaY === 0) return;
      e.preventDefault();

      container.scrollLeft += e.deltaY;

      // unlock vertical scroll only when we are at the very end
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        setLockScroll(false);
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, [lockScroll]);

    return(
 <section  className="text-white bg-[#1a1a1a] px-6 sm:px-10 lg:px-16 py-15 ">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="font-bold leading-[1] tracking-[-0.02em]
          text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl">
          <span className="bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]
            bg-clip-text text-transparent">Industries </span><br/>
          <span className="bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]
            bg-clip-text text-transparent">we support</span>
        </h2>
        <span
          className="mb-6 block h-1 w-23  mt-2
          bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]"
        />

        {/* Grid */}
        <div className="w-full h-auto flex gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {industries.map((item, idx) => (
            <div key={idx} className={`w-full md:w-1/3 lg:w-1/4 h-full flex flex-col ${idx % 2 === 0 ?'py-15':'py-0'} flex-shrink-0 snap-start`}>
              <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{idx % 2 === 0 && item.description}</p>
              <div className={`relative w-full ${idx % 2 === 0 ?'h-[600px]':'h-[800px]'}`}>
  <Image
    src={item.image}
    alt={item.title}
    fill
    className={`object-cover ${idx ===0 && 'object-right'} rounded`}
  />
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
    )
}
export default Industries;