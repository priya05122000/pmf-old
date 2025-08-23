"use client";
import { useEffect, useState,useRef } from "react";

import Image from "next/image";

const About=()=>{
    const [rotation, setRotation] = useState(0);
  const directionRef = useRef<"down" | "up">("down");
  const animationRef = useRef<number>(0);

   useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        directionRef.current = "down"; // clockwise
      } else if (currentScrollY < lastScrollY) {
        directionRef.current = "up"; // anti-clockwise
      }

      lastScrollY = currentScrollY;
    };

    const animateRotation = () => {
      setRotation((prev) =>
        directionRef.current === "down" ? prev + 1 : prev - 1
      );
      animationRef.current = requestAnimationFrame(animateRotation);
    };

    // start auto rotation loop
    animateRotation();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

    return(
         <section className="h-full bg-[#1a1a1a] px-6 sm:px-10 lg:px-16 py-12 overflow-hidden">
            <div className="h-full lg:h-[85vh] flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 flex-col flex xl:flex-row">
                    <div className="w-full xl:w-1/3 ">
                    <Image
              src="/images/aboutlogo.png"
              alt="Watermark Logo"
              width={100}
              height={100}
              className="object-contain"
            />
                    </div>
                    <div className="w-full xl:w-2/3  leading-7 flex flex-col justify-end py-10">
                    <h1 className="font-bold leading-[1] tracking-[-0.02em]
          text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]
            bg-clip-text text-transparent">About us</h1>
             <span
          className="mb-6 block h-1 w-28  mt-2
          bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]"
        />
        <p className="text-white text-justify">PMF is a trusted leader in metal fabrication, specializing in precision-engineered solutions in Mild Steel and Stainless Steel. With a strong reputation for quality, reliability, and craftsmanship, we cater to diverse sectors including retail, construction, hospitals, hotels, and more.</p>
<p className="text-white text-justify mt-2">Since our inception, PMF has delivered tailor-made fabrication services that meet the evolving demands of modern infrastructure and interior design. We combine technical expertise with advanced manufacturing capabilities to ensure every project exceeds expectations in terms of durability, design, and finish.</p>
                    </div>
                </div>
                <div className=" w-full lg:w-3/5  flex items-end justify-center pb-15">
                <div className="relative mt-15 lg:mt-0">
                        <Image
              src="/images/about.jpg"
              alt="About PMF"
              width={500}
              height={500}
              className="object-cover shadow-lg w-[300px] h-[350px] sm:w-[380px] sm:h-[380px] lg:w-[350px] lg:h-[400px] xl:w-[400px] xl:h-[450px] "
            />

 <svg
        viewBox="0 0 300 300"
        className="absolute  w-[150px] h-[150px]  animate-spin-slow -top-15 -right-10 md:-top-21 md:-right-20"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150
               m -130, 0
               a 130,130 0 1,1 260,0
               a 130,130 0 1,1 -260,0"
          />
          <linearGradient id="circleTextGradient" gradientTransform="rotate(90)">
      <stop offset="0%" stopColor="#B07515" />
      <stop offset="20%" stopColor="#E1BA60" />
      <stop offset="40%" stopColor="#F5D77F" />
      <stop offset="60%" stopColor="#FFFFD7" />
      <stop offset="75%" stopColor="#F5D77F" />
      <stop offset="85%" stopColor="#B07515" />
      <stop offset="100%" stopColor="#E1BA60" />
    </linearGradient>
        </defs>
         <text
         fill="url(#circleTextGradient)"
          fontSize="30"
          letterSpacing="20"
          className="uppercase"
        >
          <textPath href="#circlePath" startOffset="0%">
            Elegance in every weld 
          </textPath>
        </text>
      </svg>
      </div>
                </div>


            </div>
      
    </section>
    )
}
export default About;