import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="h-[100vh] w-full  bg-[url('/images/home.jpg')] bg-center bg-no-repeat bg-cover flex justify-between">
        <div className="lg:w-1/4 xl:w-[283px] h-full relative">
          <div className="w-auto h-2/5 bg-[#1a1a1a] pt-16 hidden lg:flex lg:items-start lg:justify-end pr-3">
  <Image
    src="/images/logo1.png"
    alt="logo1"
    height={70}
    width={70}
    className="object-contain"
  />
  <Image
    src="/images/logo2 (2).png"
    alt="logo2"
    height={150}
    width={150}
    className="object-contain mt-1"
  />
</div>

          <div className="w-1/2 h-3/5 bg-[#1a1a1a] "></div>
          <div className="text-white lg:w-[400px] xl:w-[500px] h-[40px] bg-gradient-to-r from-[#2b2b2b] via-[#0d0d0d] to-[#2b2b2b] backdrop-blur-sm absolute lg:top-60 xl:top-68 hidden lg:flex lg:items-center lg:justify-end px-3 gap-8">
           <Link href="/home" className="text-xl font-bold cursor-pointer hover:text-gray-300 transition flex items-center ">
           <span className="w-2 h-2 mt-1 mr-1  rounded-full bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]
" />
          Home
        </Link>
        <Link href="/products" className="text-xl cursor-pointer hover:text-gray-300 transition">
          Products
        </Link>
        <Link href="/contact-us" className="text-xl cursor-pointer hover:text-gray-300 transition">
          Contact Us
        </Link>

          </div>

        </div>
        <div className="w-3/4 lg:w-2/5 xl:w-1/3 h-full bg-[#00000078] backdrop-blur-md flex flex-col items-end justify-center pr-6 sm:pr-10 lg:pr-16">
        <h1 className="text-white text-right sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">We specialize in crafting high-quality stainless steel furniture, tailored to meet the demands of environments where hygiene is paramount.</h1>
        <span
          className="mb-6 block h-1 w-28 mt-6 md:mt-8 lg:mt-10 xl:mt-15
          bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]"
        />
        <h1 className="font-bold leading-[1] tracking-[-0.02em]
          text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]
            bg-clip-text text-transparent text-right ml-10">Your Complete Solution for Precision Sheet Metal Fabrication</h1>
        </div>
      </div>
    </section>
  );
};
export default Hero;
