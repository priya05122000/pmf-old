"use client";

// React and hooks
import React, { useEffect, useRef } from "react";

// Animation and motion
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

// UI Components
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

// Constants
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import { ANIMATIONS } from "@/components/Animations";

const PROGRESS_BARS = [76, 50, 83];
const ANIMATION_DURATION = 1.5; // seconds

const Brief = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers a bit before fully in view

  // Create motion values and transforms ONCE per mount, all hooks at top level
  const mv0 = useMotionValue(0);
  const mv1 = useMotionValue(0);
  const mv2 = useMotionValue(0);
  const motionValues = [mv0, mv1, mv2];
  const rounded = [
    useTransform(mv0, (val) => Math.round(val) + "%"),
    useTransform(mv1, (val) => Math.round(val) + "%"),
    useTransform(mv2, (val) => Math.round(val) + "%"),
  ];
  const widthPercent = [
    useTransform(mv0, (val) => `${val}%`),
    useTransform(mv1, (val) => `${val}%`),
    useTransform(mv2, (val) => `${val}%`),
  ];

  useEffect(() => {
    if (isInView) {
      // Animate all bars at the same time
      motionValues.forEach((mv, i) => {
        animate(mv, PROGRESS_BARS[i], {
          duration: ANIMATION_DURATION,
          ease: [0.42, 0, 0.58, 1],
        });
      });
    } else {
      // Reset to 0 if you want to re-animate on re-entry (optional)
      // motionValues.forEach((mv) => mv.set(0));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <Section>
      <div
        ref={ref}
        className="w-full text-white flex flex-col lg:flex-row items-center justify-between lg:py-20 gap-10 lg:gap-30 xl:gap-80 my-10"
      >
        {/* Left Column: Description */}
        <div className="flex-1 text-left">
          <Heading
            level={5}
            className="text-white font-normal"
            {...ANIMATIONS.fadeRight}
          >
            We specialize in crafting high-quality stainless steel furniture,
            tailored to meet the demands of environments where hygiene is
            paramount.
          </Heading>
        </div>

        {/* Right Column: Call to Action & Progress Bars */}
        <div className="flex-1 flex flex-col gap-8  w-full">
          <div>
            {/* <Heading
              level={1}
              {...ANIMATIONS.zoomIn}
              className={`leading-14 ${GOLDEN_GRADIENT} bg-clip-text text-transparent py-1`}
            >
              <span className="font-bold -tracking-widest">Have a prief?</span>
              <br />
              <span className="font-bold -tracking-widest">Send a brief!</span>
            </Heading> */}
            <article>
              <Heading level={1} className={`leading-14 -tracking-wider py-1`}>
                Have a prief?
                <br />
               Send a brief!
              </Heading>
            </article>
            <span
              className={`mb-6 block h-1 w-24 sm:mt-4 ${GOLDEN_GRADIENT}`}
            />
          </div>
          {/* Main Heading */}

          {/* Subheading */}
          <Paragraph className="font-extrabold text-white">
            Crafting Tomorrow&apos;s Steel Future
          </Paragraph>

          {/* Animated Progress Bars */}
          <div className="flex flex-col gap-6 ">
            {PROGRESS_BARS.map((percent, idx) => (
              <div key={idx} className="w-full pb-4">
                <div className="relative w-full h-2 rounded-full bg-[#E1BA60]/20">
                  {/* Filled Bar */}
                  <motion.div
                    className={`h-2 ${GOLDEN_GRADIENT}`} 
                    style={{ width: widthPercent[idx] }}
                  />
                  {/* Thumb with Percentage */}
                  <motion.div
                    className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-[#FFF4C1] to-[#B07515] shadow-lg border border-yellow-300 flex items-center justify-center`}
                    style={{ left: widthPercent[idx], translateX: "-50%" }}
                  >
                    <motion.span className="absolute top-[-24px] text-sm text-white">
                      {rounded[idx]}
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Brief;
