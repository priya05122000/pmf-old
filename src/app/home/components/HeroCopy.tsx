import React from "react";
import Image from "next/image";

export const HeroCopy = () => {
  return (
    <section>
      <div className="h-screen w-full flex justify-end bg-black">
        <div className="w-full h-full bg-[url('/images/home.png')] bg-right bg-no-repeat bg-contain relative">

          {/* Logo Section */}
          <div className="w-full sm:w-3/6 md:w-2/6 h-auto sm:h-2/6">
            <div className="flex flex-wrap m-5 sm:m-10">
              <Image
                src="/images/logo1.png"
                alt="logo1"
                height={70}
                width={70}
                className="object-contain"
              />
              <Image
                src="/images/logo2.png" // rename file to remove (2)
                alt="logo2"
                height={150}
                width={150}
                className="object-contain"
              />
            </div>
          </div>

          {/* Gradient Bar */}
          <div className="w-full sm:w-3/6 md:w-2/6 h-[30px] sm:h-[40px] md:h-[50px]">
            <div className="h-full w-full bg-gradient-to-r from-gray-500 via-[#151515] to-gray-500"></div>
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-3/6 md:w-2/6 h-full bg-[#00000078] absolute top-0 right-0 flex flex-col justify-center items-end text-right p-4 sm:p-6 md:p-8">
            <h1 className="text-white text-base sm:text-lg md:text-[24px] font-sans mr-0 sm:mr-[30px] md:mr-[60px] leading-relaxed">
              We specialize in crafting high-quality stainless steel furniture, tailored to meet the demands of environments where hygiene is paramount.
            </h1>

            <div className="h-[3px] sm:h-[4px] md:h-[5px] w-[70px] sm:w-[85px] md:w-[100px] bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] mt-4 sm:mt-5 mr-0 sm:mr-[30px] md:mr-[60px]"></div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515] bg-clip-text text-transparent mr-0 sm:mr-[30px] md:mr-[60px] mt-4 sm:mt-5 max-w-[95%] sm:max-w-[80%]">
              Your Complete Solution for Precision Sheet Metal Fabrication
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
};
