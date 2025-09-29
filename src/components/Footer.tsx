import React from "react";
import Image from "next/image";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import Heading from "./Heading";
import Link from "next/link";
import Section from "./Section";
import RightSpaceGridSection from "./RightSpaceGridSection";
import Span from "./Span";
import { FaFacebookF } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact us", href: "/contact-us" },
];

export const Footer = () => {
  return (
    <footer className="w-full h-[70vh] sm:h-[60vh] lg:h-[70vh]  relative overflow-hidden pb-0 flex flex-col  ">
      <div className="h-full flex  flex-col relative justify-between ">
        <div>
          <Section>
            <div className="w-full flex items-center relative">
              <Image
                src="/images/logo.png"
                alt="logo1"
                height={1000}
                width={1000}
                quality={100}
                className="object-contain h-28 w-28 "
              />
              <Span className="text-grey-custom absolute bottom-0 left-32  uppercase ">
                Copyright 2025 Favorite Doctor,
                <br /> All Rights Reserved
              </Span>
            </div>
          </Section>
        </div>

        <div>
          <RightSpaceGridSection>
            <div className="col-span-2  ">
              <div className="w-full  h-full flex flex-col-reverse   md:flex-row justify-between relative sm:gap-20 lg:gap-10">
                <div className=" h-full -ml-6 sm:ml-0 mt-10 sm:mt-0">
                  <Image
                    src="/images/pmf-1.png"
                    alt="logo1"
                    height={1000}
                    width={1000}
                    quality={100}
                    className="object-contain h-full w-xl lg:w-3xl xl:w-6xl "
                  />
                </div>

                <div className="h-full  block">
                  <Heading
                    level={6}
                    className={` ${GOLDEN_GRADIENT} bg-clip-text text-transparent`}
                  >
                    Explore
                  </Heading>
                  <nav className="mt-3 flex flex-col gap-2">
                    {footerLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-base lg:text-lg text-white hover:text-gold  transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Span className="text-white flex gap-3 mt-2 lg:mt-4 ">
                      <FaFacebookF className="w-4 h-4"/>
                      <SiInstagram  className="w-4 h-4"/>
                    </Span>
                  </nav>
                </div>
              </div>
            </div>
          </RightSpaceGridSection>
        </div>
      </div>
    </footer>
  );
};
