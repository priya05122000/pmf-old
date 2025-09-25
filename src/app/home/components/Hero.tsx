"use client";

import React, { FC, useEffect } from "react";
import GridSection from "@/components/GridSection";
import Image from "next/image";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import Heading from "@/components/Heading";
import { ANIMATIONS } from "@/components/Animations";
import Paragraph from "@/components/Paragraph";


const LogoSection: FC = () => (
  <div className="absolute w-[30%] h-1/3 left-0 top-0 hidden lg:block z-10 pointer-events-none">
    <div className="relative p-6 h-full bg-[var(--bg-color)] w-[75%]">
      <Image
        src="/logos/logo.png"
        alt="logo1"
        height={1000}
        width={1000}
        quality={100}
        className="object-contain h-14 w-auto absolute right-0 px-4"
      />
    </div>
    {/* <NavigationSection /> */}
  </div>
);

const HeroContent: FC = () => (
  <div className="absolute w-[70vw] sm:w-1/2 lg:w-2/6 xl:w-2/7 h-full bg-[var(--bg-color)]/70 backdrop-blur-md right-0 top-0 flex flex-col items-end justify-center pl-6 pr-6 sm:pl-8 sm:pr-8 xl:pl-10 xl:pr-16">
    <Paragraph
      size="xl"
      className="font-normal text-end text-white"
      {...ANIMATIONS.zoomInDown}
    >
      We specialize in crafting high-quality stainless steel furniture, tailored
      to meet the demands of environments where hygiene is paramount.
    </Paragraph>
    <span className={`mb-2 block h-1 w-14 sm:w-20 mt-10 ${GOLDEN_GRADIENT}`} />
    {/* <Heading
      level={2}
      className="
    text-end leading-tight tracking-wide font-bold drop-shadow-lg
    relative overflow-hidden
    stroke-2 text-transparent hero-stroke-text
  "
    >
      <span className="fill-animate">
        Your Complete Solution for Precision Sheet Metal Fabrication
      </span>
    </Heading> */}

    <article>
      <Heading
        level={2}
        className="text-end
     "
      >
        Your Complete Solution for Precision Sheet Metal Fabrication
      </Heading>
    </article>
  </div>
);

const Hero: FC = () => {
  useEffect(() => {
    // Only do GSAP animations that do NOT pin
    const nav = document.querySelector(".nav-section");
    if (nav && typeof window !== "undefined") {
      const win = window as typeof window & { gsap?: unknown };
      if (win.gsap) {
  // TODO: Replace 'as unknown as GSAPType' with actual GSAP type if available
  (win.gsap as unknown as { to: (target: Element, vars: Record<string, unknown>) => unknown }).to(nav, {
          scrollTrigger: {
            trigger: nav,
            start: "top top",
            end: "bottom top",
            // remove pin and scrub
            pin: true,
            pinSpacing: false,
            // scrub: true,
            markers: true,
          },
          // any animation you want without affecting sticky
          opacity: 1,
          duration: 1,
        });
      }
    }
  }, []);

  return (
    <GridSection className="relative overflow-x-hidden sm:-ml-4 lg:ml-0 lg:pl-4 xl:pl-0 lg:-mt-20">
      {/* Add padding-top to prevent content from being hidden under navbar */}
      <div className="col-span-2 col-start-2 bg-[url('/images/home.webp')] h-[80vh] lg:h-screen bg-right sm:bg-bottom-left bg-no-repeat bg-cover w-[100vw] xl:w-auto pt-16 lg:pt-20">
        <HeroContent />
      </div>
      <LogoSection />
    </GridSection>
  );
};

export default Hero;
