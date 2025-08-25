import React, { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

// Reusable gradient classes
const GRADIENT_TEXT =
  "bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]";
const GRADIENT_BAR =
  "bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]";

// Reusable Heading component
interface HeadingProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

const Heading: FC<HeadingProps> = ({ children, className = "", gradient = false }) => (
  <h1
    className={`text-right ${className} ${gradient ? `${GRADIENT_TEXT} bg-clip-text text-transparent` : "text-white"}`}
  >
    {children}
  </h1>
);

// Reusable Navigation Link
interface NavLinkProps {
  href: string;
  children: ReactNode;
  withDot?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, children, withDot = false }) => (
  <Link
    href={href}
    className="text-xl font-semibold cursor-pointer hover:text-gray-300 transition flex items-center"
  >
    {withDot && (
      <span className={`w-2 h-2 mt-1 mr-2 rounded-full ${GRADIENT_TEXT}`} />
    )}
    {children}
  </Link>
);

const Hero: FC = () => {
  return (
    <section>
      <div className="h-screen w-full bg-[url('/images/home.jpg')] bg-bottom-left bg-no-repeat bg-cover flex justify-between">
        <div className="lg:w-1/4 xl:w-[250px] h-full relative">
          <div className="w-auto h-2/5 bg-[#151515] pt-10 hidden lg:flex lg:items-start lg:justify-end pr-8">
            <div>
              <Image
                src="/images/logo.png"
                alt="logo1"
                height={70}
                width={60}
                className="object-contain h-12 "
              />
            </div>
            <div>
              <Image
                src="/images/promed.png"
                alt="logo2"
                height={120}
                width={120}
                className="object-contain mt-1"
              />
            </div>
          </div>
          <div className="w-1/2 h-3/5 bg-[#151515]" />
          <div className="text-white lg:w-[400px] xl:w-[450px] h-[40px] bg-gradient-to-r from-[#4a4a4a] via-[#1d1c1a] to-[#4a4a4a] backdrop-blur-sm absolute lg:top-60 xl:top-68 hidden lg:flex lg:items-center lg:justify-end px-3 gap-8">
            <NavLink href="/home" withDot>
              Home
            </NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/contact-us">Contact Us</NavLink>
          </div>
        </div>
        <div className="w-3/4 sm:w-3/5 lg:w-2/5 xl:w-1/3 h-full bg-[#00000078] backdrop-blur-md flex flex-col items-end justify-center pl-6 pr-6 sm:pr-10 lg:pr-16">
          <Heading className="text-lg sm:text-xl lg:text-2xl">
            We specialize in crafting high-quality stainless steel furniture, tailored to meet the demands of environments where hygiene is paramount.
          </Heading>
          <span
            className={`mb-4 sm:mb-6 block h-1 w-14 sm:w-20 mt-6   ${GRADIENT_BAR}`}
          />
          <Heading
            className="font-bold leading-[1] tracking-[-0.02em] text-4xl sm:text-5xl sm:ml-10"
            gradient
          >
            Your Complete Solution for Precision Sheet Metal Fabrication
          </Heading>
        </div>
      </div>
    </section>
  );
};

export default Hero;
