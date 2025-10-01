"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

// Custom components & constants
import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";
import Section from "@/components/Section";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import ParagraphList from "@/components/ParagraphList";

// Types
type Review = {
  image: string;
  logo: string;
  title: string;
  content?: string;
  list?: string[];
};

// Data
const reviewData: Review[] = [
  {
    image: "/images/review3.webp",
    logo: "/logos/1.png",
    title: "Commitment to Excellence",
    content:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting. Every project we undertake is driven by innovation, precision, and a deep understanding of client needs.",
  },
  {
    image: "/images/review2.webp",
    logo: "/logos/2.png",
    title: "Industries We Serve",
    list: [
      "Retail Chains & Showrooms",
      "Commercial & Residential Construction",
      "Healthcare Facilities",
      "Hospitality & Hotels",
      "Industrial & Institutional Clients",
    ],
  },
  {
    image: "/images/review2.webp",
    logo: "/logos/3.png",
    title: "Customer Satisfaction",
    content:
      "We pride ourselves on exceeding customer expectations. Our team works closely with clients to ensure every detail is perfect, resulting in high satisfaction and repeat business.",
  },
  {
    image: "/images/review3.webp",
    logo: "/logos/1.png",
    title: "Quality Materials",
    content:
      "We use only the highest quality stainless steel and materials, ensuring durability and longevity in every product we deliver.",
  },
  {
    image: "/images/review2.webp",
    logo: "/logos/3.png",
    title: "Innovation",
    content:
      "Our engineers and designers are constantly innovating to provide solutions that are both practical and cutting-edge.",
  },
];

// Component
const Reviews: React.FC = () => {
  const [navigation, setNavigation] = useState<{
    prevEl: null | HTMLElement;
    nextEl: null | HTMLElement;
  }>({ prevEl: null, nextEl: null });

  return (
    <Section className="min-h-screen  flex  sm:items-center">
      <div className="h-[85vh]">
        <div className="grid lg:grid-cols-[1fr_2fr] h-full">
          {/* Heading */}
          <div className="mb-8 h-full flex flex-col justify-center">
            <article>
              <Heading level={1} className="leading-[1] tracking-[-0.02em]">
                Review
              </Heading>
            </article>

            <span className={`mb-6 block h-1 w-16 mt-2 gradient-animation`} />
          </div>

          {/* Swiper */}
          <div className="flex-1 min-w-0   h-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={2}
              loop={true}
              navigation={navigation}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {reviewData.map((review, idx) => (
                <SwiperSlide key={idx}>
                  <div className="overflow-hidden mx-auto relative h-[60vh] lg:h-[82vh]">
                    <div className={`p-[1px] ${GOLDEN_GRADIENT} h-full `}>
                      <div className="relative overflow-hidden h-full">
                        <Image
                          src={review.image}
                          alt={review.title}
                          className="w-full h-full object-cover"
                          width={350}
                          height={260}
                          priority={idx === 0}
                        />
                        {/* Blue gradient overlay */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(16,19,39,0.95) 30%, rgba(26,37,60,0.5) 100%)",
                          }}
                        />
                        {/* Text overlay */}
                        <div className="absolute inset-0 flex flex-col justify-start p-5 z-10">
                          <div className="p-2">
                            <Heading
                              level={3}
                              className="text-white font-bold leading-none drop-shadow-lg"
                            >
                              {review.title}
                            </Heading>
                            <span
                              className={`mb-4 block h-1 w-16 sm:w-20 mt-2 gradient-animation`}
                            />
                            {review.content && (
                              <Paragraph size="base" className="text-white ">
                                {review.content}
                              </Paragraph>
                            )}
                            {review.list && Array.isArray(review.list) && (
                              <ParagraphList className="text-white list-disc list-inside space-y-1 mt-2">
                                {review.list.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ParagraphList>
                            )}
                          </div>

                          <div className="absolute bottom-5 right-5 ">
                            <div className="w-20 h-20 bg-white rounded-full p-2">
                              <Image
                                src={review.logo}
                                alt={review.title}
                                className="w-full h-full object-contain"
                                width={350}
                                height={260}
                                priority={idx === 0}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col items-end  ">
          {/* <Span className="text-blue-custom">Prev/Nxt</Span> */}
          <div className="flex items-center space-x-4 mt-2">
            <button
              ref={(node) => {
                if (node && navigation.prevEl !== node)
                  setNavigation((nav) => ({ ...nav, prevEl: node }));
              }}
              className="text-2xl text-[#B07515]  focus:outline-none cursor-pointer"
              aria-label="Previous"
              type="button"
            >
              <CgArrowLongLeft />
            </button>
            <button
              ref={(node) => {
                if (node && navigation.nextEl !== node)
                  setNavigation((nav) => ({ ...nav, nextEl: node }));
              }}
              className="text-2xl text-[#B07515]   focus:outline-none cursor-pointer"
              aria-label="Next"
              type="button"
            >
              <CgArrowLongRight />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
