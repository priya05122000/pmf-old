"use client";
import React, { useEffect, useRef } from "react";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Brief = () => {
  const progressBars = [76, 76, 76];
  const animationDuration = 1.5; // duration in seconds
  const motionValues = useRef(progressBars.map(() => useMotionValue(0)));

  useEffect(() => {
    const animateBars = async () => {
      for (let i = 0; i < progressBars.length; i++) {
        await new Promise<void>((resolve) => {
          animate(motionValues.current[i], progressBars[i], {
            duration: animationDuration,
            ease: [0.42, 0, 0.58, 1],
            onComplete: () => resolve(),
          });
        });
      }
    };
    animateBars();
  }, []);

  return (
    <section className="w-full min-h-[80vh] bg-[#151515] text-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 py-12 gap-10 lg:gap-15  xl:gap-[300px]">
      {/* Left Column */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-lg md:text-[40px] lg:text-3xl xl:text-[45px] leading:none md:leading-12">
          We specialize in crafting high-quality stainless steel furniture, tailored to meet the demands of environments where hygiene is paramount.
        </h1>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Heading */}
        <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
          <span className={`font-extrabold leading-[1] tracking-[-0.02em] text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl ${GOLDEN_GRADIENT} bg-clip-text text-transparent`}>
            Have a prief?
          </span>
          <br />
          <span className={`font-extrabold leading-[1] tracking-[-0.02em] text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl ${GOLDEN_GRADIENT} bg-clip-text text-transparent`}>
            Send a brief!
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-base font-extrabold text-gray-200">
          Crafting Tomorrow&apos;s Steel Future
        </p>

        {/* Animated Progress Bars */}
        <div className="flex flex-col gap-6">
          {progressBars.map((percent, idx) => {
            const rounded = useTransform(motionValues.current[idx], (val) =>
              Math.round(val)+"%"
            );
            const widthPercent = useTransform(motionValues.current[idx], (val) => `${val}%`);

            return (
              <div key={idx} className="w-full pb-4">
                <div className="relative w-full h-2 rounded-full bg-[#E1BA60]/20 ">
                {/* Filled Bar */}
                  <motion.div
                    className="h-2 bg-gradient-to-r from-[#FFD966] via-[#FFF4C1] to-[#B07515]"
                    style={{ width: widthPercent }}
                  />
                {/* Thumb */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-[#FFF4C1] to-[#B07515] shadow-lg border border-yellow-300 flex items-center justify-center"
                    style={{ left: widthPercent, translateX: "-50%" }}
                  >
                    {/* Percentage */}
                    <motion.span className="absolute top-[-24px] text-sm text-white">
                      {rounded}
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brief;
