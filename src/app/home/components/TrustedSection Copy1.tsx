"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  if (!isMounted) return null; // prevent SSR mismatch

  return (
    <Section className="py-6 sm:py-12 xl:py-16 bg">
      <Heading level={6} className="text-white font-bold mb-10 uppercase">
        Trusted by <span className="text-muted">20,000+</span> customers across
        Europe
      </Heading>
      <Slider {...settings}>
        {logos.map((logo, idx) => (
          <div key={idx} className="px-2 flex justify-center items-center py-6">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={400}
              height={400}
              quality={100}
              className="h-16 lg:h-20 object-contain w-full transition-all"
            />
          </div>
        ))}
      </Slider>
    </Section>
  );
}
