import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full lg:h-[83vh] xl:h-[90vh] bg-[#151515] text-[#DFDFDF] relative overflow-hidden pb-10 lg:pb-0">
      {/* Logo */}
      <div className="w-full flex items-center pl-6 sm:pl-0 lg:pl-11">
        <Image
          src="/images/logo1.png"
          alt="logo1"
          height={200}
          width={200}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="w-full h-full flex flex-col md:flex-row justify-between">
        {/* Big PMF text */}
        <div className="relative md:-mt-[80px] md:-ml-7 lg:-mt-[100px] xl:-mt-[50px] lg:-ml-7 xl:-ml-10">
          <h1 className="font-extrabold text-[180px] sm:text-[250px] md:text-[350px] lg:text-[460px] xl:text-[550px] text-[#949292] leading-none">
            PMF
          </h1>
          <div className="absolute -bottom-5 sm:-bottom-5 md:-bottom-3 right-26 sm:right-26 md:-right-20 lg:bottom-50 xl:bottom-60
           lg:-right-52 xl:-right-60">
            <p className="text-md sm:text-md md:text-base lg:text-[14px] xl:text-[16px]">
              Copyright 2025 Favorite Doctor, All Rights Reserved
            </p>
          </div>
        </div>

        {/* Explore Section (hidden on small) */}
        <div className="h-full pr-6 sm:pr-10 md:pr-20 lg:pr-24 mt-8 md:mt-20 lg:mt-15 hidden md:block">
          <h1
            className="font-bold text-2xl bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F]
            via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F]
            via-[#FFFFD7] via-[#F5D77F] to-[#B07515] bg-clip-text text-transparent"
          >
            Explore
          </h1>
          <p className="mt-3 text-[18px]">Home</p>
          <p className="mt-2 text-[18px]">Products</p>
          <p className="mt-2 text-[18px]">Contact us</p>
        </div>
      </div>
    </footer>
  );
};
