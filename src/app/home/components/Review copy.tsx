"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import Section from "@/components/Section";

// Review Card Component
const ReviewCard = ({ title, content, list }: { title: string; content?: string; list?: string[] }) => (
  <div className={`min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[400px] sm:h-[400px] md:h-[90vh] xl:h-[80vh] rounded-sm ${GOLDEN_GRADIENT} p-0.5`}>
    <div className="w-full h-full rounded-sm bg-[url('/images/review.jpg')] bg-cover bg-center p-5 sm:p-7 relative flex flex-col">
      <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-none drop-shadow-lg">
        {title}
      </h1>
      <span className={`mb-4 block h-1 w-16 sm:w-20 mt-2 ${GOLDEN_GRADIENT}`} />
      {content && (
        <p className="w-full text-white leading-7 text-justify text-sm sm:text-base drop-shadow-md">
          {content}
        </p>
      )}
      {list && (
        <ul className="list-disc text-white leading-7 text-justify text-sm sm:text-base drop-shadow-md p-5">
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      <div className="absolute bottom-6 right-6 h-[40px] w-[40px] sm:h-[59px] sm:w-[59px] rounded-full bg-[#D9D9D9]" />
    </div>
  </div>
);

// Review Data
const reviews = [
  {
    id: 1,
    title: "Commitment to Excellence",
    content:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting. Every project we undertake is driven by innovation, precision, and a deep understanding of client needs.",
  },
  {
    id: 2,
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
    id: 3,
    title: "Customer Satisfaction",
    content:
      "We pride ourselves on exceeding customer expectations. Our team works closely with clients to ensure every detail is perfect, resulting in high satisfaction and repeat business.",
  },
  {
    id: 4,
    title: "Quality Materials",
    content:
      "We use only the highest quality stainless steel and materials, ensuring durability and longevity in every product we deliver.",
  },
  {
    id: 5,
    title: "Innovative Solutions",
    content:
      "Our engineers and designers are constantly innovating to provide solutions that are both practical and cutting-edge.",
  },
];

const Review = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section>
      <section className="w-full pb-12 pt-16 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-2/5 flex flex-col justify-center mb-10 md:mb-0">
          <h2 className="font-bold leading-[1] tracking-[-0.02em] text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
            <span className={`${GOLDEN_GRADIENT} bg-clip-text text-transparent`}>Review</span>
          </h2>
          <span className={`mb-6 block h-1 w-16 mt-2 ${GOLDEN_GRADIENT}`} />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/5 flex flex-col">
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="w-full flex justify-start items-center gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                title={review.title}
                content={review.content}
                list={review.list}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center justify-end mt-3 gap-4">
            <ChevronLeft
              onClick={handleScrollLeft}
              className="text-white w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition"
            />
            <ChevronRight
              onClick={handleScrollRight}
              className="text-white w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition"
            />
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Review;