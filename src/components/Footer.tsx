import React from "react";
import Image from "next/image";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import Link from "next/link";
import Section from "./Section";
import RightSpaceGridSection from "./RightSpaceGridSection";
import Span from "./Span";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact us", href: "/contact-us" },
];

export const Footer = () => {
  return (
    <footer className="w-full h-[70vh]  relative overflow-hidden pb-10 lg:pb-0 flex flex-col">
      <div className="h-full flex  flex-col relative justify-between">
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
              <Paragraph size="base" className="text-grey-custom absolute bottom-0 left-32  uppercase ">
                Copyright 2025 Favorite Doctor,<br/> All Rights Reserved
              </Paragraph>
            </div>
          </Section>
        </div>

        <div>
          <RightSpaceGridSection>
            <div className="w-full  h-full flex flex-col md:flex-row justify-between relative">
              <div className=" h-full">
                {/* <h1 className="font-extrabold text-[180px] sm:text-[250px] md:text-[350px] lg:text-[460px] xl:text-[550px] text-[#1A253C] leading-none">
              PMF
            </h1>
            <div
              className="absolute -bottom-5 sm:-bottom-5 md:-bottom-3 right-26 sm:right-26 md:-right-20 lg:bottom-50 xl:bottom-60
            lg:-right-52 xl:-right-60"
            >
              <Paragraph size="base" className="text-white">
                Copyright 2025 Favorite Doctor, All Rights Reserved
              </Paragraph>
            </div> */}
                <Image
                  src="/images/pmf-1.png"
                  alt="logo1"
                  height={1000}
                  width={1000}
                  quality={100}
                  className="object-contain h-full w-full "
                />
              </div>

              <div className="h-full  hidden md:block">
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
                </nav>
              </div>

              {/* <Span className="text-white absolute bottom-14 right-0">
                Copyright 2025 Favorite Doctor, All Rights Reserved
              </Span> */}
            </div>
          </RightSpaceGridSection>
        </div>
      </div>
    </footer>
  );
};
