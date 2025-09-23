"use client";

import GridSection from "@/components/GridSection";
import Image from "next/image";
import React, { FC, ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import { BLUE_GRADIENT, GOLDEN_GRADIENT } from "@/lib/gradients";
import Heading from "@/components/Heading";
import { ANIMATIONS } from "@/components/Animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Reusable Navigation Link
interface NavLinkProps {
  href: string;
  children: ReactNode;
  withDot?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, children, withDot = false }) => (
  <Link
    href={href}
    className="text-lg font-medium cursor-pointer hover:text-white/70 transition flex items-center"
  >
    {withDot && (
      <span className={`w-2 h-2 mt-1 mr-2 rounded-full ${GOLDEN_GRADIENT}`} />
    )}
    {children}
  </Link>
);

const Hero: FC = () => {

  return (
    <GridSection className="relative overflow-x-hidden sm:-ml-4 lg:ml-0 lg:pl-4 xl:pl-0 lg:-mt-20">
      <div className="col-span-2 col-start-2 bg-[url('/images/home.jpg')] h-[80vh] lg:h-screen  bg-right sm:bg-bottom-left bg-no-repeat bg-cover w-[100vw] xl:w-auto">
        <div className="absolute w-1/4 h-1/3 bg-[var(--bg-color)] left-0 top-0 hidden lg:block">
          <div className="relative p-6 h-full">
            <Image
              src="/logos/logo.png"
              alt="logo1"
              height={1000}
              width={1000}
              quality={100}
              className="object-contain h-14 w-auto absolute right-0  px-4"
            />
          </div>
        </div>

        <div
          className={`nav-section absolute w-1/3 ${BLUE_GRADIENT} left-0 top-1/3 text-white justify-end p-2 gap-10 hidden lg:flex`}
          {...ANIMATIONS.fadeRight}
        >
          <NavLink href="/home" withDot>
            Home
          </NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/contact-us">Contact Us</NavLink>
        </div>

        <div className="absolute w-[70vw] sm:w-1/2 lg:w-2/6 xl:w-2/7 h-full bg-[var(--bg-color)]/70 backdrop-blur-md right-0 top-0 flex flex-col items-end justify-center pl-6 pr-6 sm:pl-8 sm:pr-8 xl:pl-10 xl:pr-16">
          <Heading
            level={6}
            className="font-normal text-end text-white"
            {...ANIMATIONS.zoomInDown}
          >
            We specialize in crafting high-quality stainless steel furniture,
            tailored to meet the demands of environments where hygiene is
            paramount.
          </Heading>
          <span
            className={`mb-2 block h-1 w-14 sm:w-20 mt-10 ${GOLDEN_GRADIENT}`}
          />
          {/* <Heading
            level={3}
            {...ANIMATIONS.zoomInUp}
            className={` ${GOLDEN_GRADIENT} bg-clip-text text-transparent text-end leading-tight`}
          >
            Your Complete Solution for Precision Sheet Metal Fabrication
          </Heading> */}


          <div className="text">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </GridSection>

  );
};

export default Hero;
