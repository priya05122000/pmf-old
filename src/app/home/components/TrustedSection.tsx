"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Section from "@/components/Section";
import Heading from "@/components/Heading";

const logos = [
  { src: "/logos/anjana_opticals.png", alt: "Partner 1" },
  { src: "/logos/1.png", alt: "Partner 2" },
  { src: "/logos/2.png", alt: "Partner 3" },
  { src: "/logos/3.png", alt: "Partner 4" },
  { src: "/logos/anjana_opticals.png", alt: "Partner 1" },
  { src: "/logos/1.png", alt: "Partner 2" },
  { src: "/logos/2.png", alt: "Partner 3" },
  { src: "/logos/3.png", alt: "Partner 4" },
];

export default function TrustedSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // prevent SSR mismatch

  return (
    <Section className="py-6 sm:py-12 xl:py-16 bg">
      {/* <Heading level={6} className="text-white font-bold mb-10 uppercase">
        Trusted by <span className="text-muted">20,000+</span> customers across
        Europe
      </Heading> */}
      <Heading level={6} className="text-white font-bold mb-10 uppercase">
        Trusted by{" "}
        <span className={`text-transparent gradient-animation-one bg-clip-text`}>
          20,000+
        </span>{" "}
        customers across Europe
      </Heading>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx}>
            <div className="px-2 flex justify-center items-center py-6">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={400}
                height={400}
                quality={100}
                className="h-16 lg:h-20 object-contain w-full transition-all"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
