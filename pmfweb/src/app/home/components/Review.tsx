"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews=[
    {
        id:1,
        content:(
            <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[400px] sm:h-[400px] md:h-[90vh] xl:h-[80vh] rounded-sm bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515] p-0.5">
  <div
    className="w-full h-full rounded-sm bg-[url('/images/review.jpg')] bg-cover bg-center p-5 sm:p-7 relative flex flex-col"
  >
    <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-none drop-shadow-lg">
      Commitment to <br /> Excellence
    </h1>

    <span className="mb-4 block h-1 w-16 sm:w-20 mt-2 bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]" />

    <p className="w-full text-white leading-7 text-justify text-sm sm:text-base drop-shadow-md">
      At PMF, our mission is to provide metal fabrication solutions
      that are not only functional but also visually appealing and
      long-lasting. Every project we undertake is driven by
      innovation, precision, and a deep understanding of client needs.
    </p>

    <div className="absolute bottom-6 right-6 h-[40px] w-[40px] sm:h-[59px] sm:w-[59px] rounded-full bg-[#D9D9D9]" />
  </div>
</div>
        )
    },
    {
        id:2,
        content:(
            <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[400px] sm:h-[400px] md:h-[90vh] xl:h-[80vh] rounded-sm bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515] p-0.5">
  <div
    className="w-full h-full rounded-sm bg-[url('/images/review.jpg')] bg-cover bg-center p-5 sm:p-7 relative flex flex-col"
  >
    <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-none drop-shadow-lg">
      Industries We Serve
    </h1>

    <span className="mb-4 block h-1 w-16 sm:w-20 mt-2 bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]" />

    {/* <p className="w-full text-white leading-7 text-justify text-sm sm:text-base drop-shadow-md">
      At PMF, our mission is to provide metal fabrication solutions
      that are not only functional but also visually appealing and
      long-lasting. Every project we undertake is driven by
      innovation, precision, and a deep understanding of client needs.
    </p> */}
    <ul className="list-disc text-white leading-7 text-justify text-sm sm:text-base drop-shadow-md p-5">
        <li>Retail Chains & Showrooms</li>
        <li>Commercial & Residential Construction</li>
        <li>Healthcare Facilities</li>
        <li>Hospitality & Hotels</li>
        <li>Industrial & Institutional Clients</li>
    </ul>

    <div className="absolute bottom-6 right-6 h-[40px] w-[40px] sm:h-[59px] sm:w-[59px] rounded-full bg-[#D9D9D9]" />
  </div>
</div>
        )
    }
]

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
    <section className="w-full bg-[#1a1a1a] px-4 sm:px-6 lg:px-16 pb-12 pt-16 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-2/5 flex flex-col justify-center mb-10 md:mb-0">
        <h2 className="font-bold leading-[1] tracking-[-0.02em] text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl">
          <span className="bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515] bg-clip-text text-transparent">
            Review
          </span>
        </h2>
        <span className="mb-6 block h-1 w-16 mt-2 bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]" />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/5 flex flex-col">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="w-full flex justify-start items-center gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
            {reviews.map((review) => (
                <div
                key={review.id}
                className=""
                >
                {review.content}
                </div>
            ))}
          {/* CARD 1 */}
          {/* <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[400px] sm:h-[400px] md:h-[90vh] xl:h-[80vh] rounded-sm bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515] p-0.5">
  <div
    className="w-full h-full rounded-sm bg-[url('/images/review.jpg')] bg-cover bg-center p-5 sm:p-7 relative flex flex-col"
  >
    <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-none drop-shadow-lg">
      Commitment to <br /> Excellence
    </h1>

    <span className="mb-4 block h-1 w-16 sm:w-20 mt-2 bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]" />

    <p className="w-full text-white leading-7 text-justify text-sm sm:text-base drop-shadow-md">
      At PMF, our mission is to provide metal fabrication solutions
      that are not only functional but also visually appealing and
      long-lasting. Every project we undertake is driven by
      innovation, precision, and a deep understanding of client needs.
    </p>

    <div className="absolute bottom-6 right-6 h-[40px] w-[40px] sm:h-[59px] sm:w-[59px] rounded-full bg-[#D9D9D9]" />
  </div>
</div> */}

          {/* CARD 2 */}
          {/* <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[400px] sm:h-[400px] md:h-[90vh] xl:h-[80vh] rounded-sm bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515] p-0.5">
            <div className="w-full h-full rounded-sm bg-black p-5 sm:p-7 relative flex flex-col">
              <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-none">
                Commitment to <br /> Excellence
              </h1>
              <span className="mb-4 block h-1 w-16 sm:w-20 mt-2 bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]" />
              <p className="w-full text-white leading-7 text-justify text-sm sm:text-base">
                At PMF, our mission is to provide metal fabrication solutions
                that are not only functional but also visually appealing and
                long-lasting. Every project we undertake is driven by
                innovation, precision, and a deep understanding of client needs.
              </p>
              <div className="absolute bottom-6 right-6 h-[40px] w-[40px] sm:h-[59px] sm:w-[59px] rounded-full bg-[#D9D9D9]" />
            </div>
          </div> */}

          {/* CARD 3 */}
          {/* <div className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] h-[400px] sm:h-[400px] md:h-[90vh] xl:h-[80vh] rounded-sm bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515] p-0.5">
            <div className="w-full h-full rounded-sm bg-black p-5 sm:p-7 relative flex flex-col">
              <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-none">
                Commitment to <br /> Excellence
              </h1>
              <span className="mb-4 block h-1 w-16 sm:w-20 mt-2 bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]" />
              <p className="w-full text-white leading-7 text-justify text-sm sm:text-base">
                At PMF, our mission is to provide metal fabrication solutions
                that are not only functional but also visually appealing and
                long-lasting. Every project we undertake is driven by
                innovation, precision, and a deep understanding of client needs.
              </p>
              <div className="absolute bottom-6 right-6 h-[40px] w-[40px] sm:h-[59px] sm:w-[59px] rounded-full bg-[#D9D9D9]" />
            </div>
          </div> */}
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
  );
};

export default Review;