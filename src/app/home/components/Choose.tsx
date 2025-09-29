import React, { FC, useEffect, useRef, useState } from "react";

import { GOLDEN_GRADIENT, LIGHT_BLUE_GRADIENT } from "@/lib/gradients";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import ParagraphList from "@/components/ParagraphList";
import { ANIMATIONS } from "@/components/Animations";
import { gsap } from "gsap";
import Span from "@/components/Span";

// Data for features and stats
const FEATURES = [
  "Expertise in Both Mild Steel & Stainless Steel",
  "State-of-the-Art Fabrication Facility",
  "Strict Adherence to Safety and Industry Standards",
  "On-Time Delivery with Quality Assurance",
  "End-to-End Project Management",
];

const STATISTICS = [
  { value: 900, label: "Clients" },
  { value: 900, label: "Projects" },
  { value: 900, label: "Clients" },
];



const RollingDigit = ({
  digit,
  delay = 0,
}: {
  digit: number;
  delay?: number;
}) => {
  const digitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!digitRef.current) return;

    const lineHeight = 1.1; // must match CSS line-height
    const endY = -(digit * lineHeight * 1); // move to that digit

    gsap.fromTo(
      digitRef.current,
      { y: 0 },
      {
        y: `${endY}em`,
        duration: 5,
        ease: "power2.out",
        delay,
      }
    );
  }, [digit, delay]);

  return (
    <div className="overflow-hidden h-[1.1em] text-white inline-block font-mono">
      <div ref={digitRef}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="leading-[1.1em] h-[1.1em] font-mono p-0 m-0 flex items-center justify-center"
            style={{ margin: 0, padding: 0 }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

/* 🎰 Rolling Number Component */
const RollingNumber = ({ value }: { value: number }) => {
  const digits = value
    .toString()
    .split("")
    .map((d) => parseInt(d, 10));

  return (
    <div className="flex space-x-0.5 font-bold">
      {digits.map((d, i) => (
        <RollingDigit key={i} digit={d} delay={i * 0.2} />
      ))}
    </div>
  );
};

const Choose: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    let observer: IntersectionObserver | null = null;
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (observer) observer.disconnect(); // Only trigger once
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
    } else {
      // fallback for environments without IntersectionObserver
      setInView(true);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <Section>
      <div className="py-20" ref={sectionRef}>
        <div>
          <div className="w-full flex flex-col items-center lg:items-start">
            {/* <Heading level={6} className="text-white uppercase">
              Trusted by <span className="text-[#BEBEBE]">20,000+</span>{" "}
              customers across Europe
            </Heading> */}

            <Heading level={6} className="text-white uppercase">
              Trusted by <span className={`text-transparent ${GOLDEN_GRADIENT} bg-clip-text`}>20,000+</span>{" "}
              customers across Europe
            </Heading>

            {/* <div className="flex items-center justify-evenly lg:justify-start mt-8 gap-6 md:gap-0 lg:gap-16  w-full">
              {VALUES.map((val) => (
                <Heading
                level={1}
                className={`leading-[1] tracking-[-0.02em] mb-8 text-center`}
              >
                Contact us
              </Heading>
            </article>

            {/* <div className="flex items-center justify-evenly lg:justify-start mt-8 gap-6 md:gap-0 lg:gap-16  w-full">
              {VALUES.map((val) => (
                <Heading
                  key={val}
                  level={3}
                  className="text-white"
                  {...ANIMATIONS.zoomIn}
                >
                  {val}
                </Heading>
              ))}
            </div> */}
            <div className="w-full flex flex-col lg:flex-row justify-between mt-10  lg:mt-0">
              <div
                className={`${LIGHT_BLUE_GRADIENT} lg:w-1/2 xl:w-2/5 px-8 py-6 sm:py-4 lg:mt-15`}
                {...ANIMATIONS.zoomIn}
              >
                <ParagraphList className="text-white   leading-7">
                  {FEATURES.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ParagraphList>
                <div className=" pt-10">
                  <span className={`mb-2 block h-1 w-16 ${GOLDEN_GRADIENT}`} />
                  <article>
                    <Heading level={2} className={`  leading-16`}>
                      Why Choose
                      <br />
                      PMF?
                    </Heading>
                  </article>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 text-center lg:text-left">
                <Heading level={6} className="text-white">
                  Trusted
                </Heading>
                <div className="flex justify-evenly items-center mt-8 gap-6 md:gap-0 lg:gap-16">
                  {STATISTICS.map((stat, idx) => (
                    <div key={stat.label + "-container-" + idx}>
                      <Heading key={stat.label + "-" + idx} level={3}>
                        {inView ? (
                          <RollingNumber value={stat.value} />
                        ) : (
                          stat.value
                        )}
                      </Heading>
                      <Span className="text-white">{stat.label}</Span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Choose;
