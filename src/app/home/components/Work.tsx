import React from "react";

const Work=()=>{
    return(
      <section className="w-full min-h-[100vh] bg-[#151515] py-12">
        <div className="px-6 sm:px-10 lg:px-16">

            <h2 className="font-bold leading-[1] tracking-[-0.02em]
          text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl">
          <span className="bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]
            bg-clip-text text-transparent">Work</span><br/>
          <span className="bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]
            bg-clip-text text-transparent">Process</span>
        </h2>
        <span
          className="mb-6 block h-1 w-23  mt-2
          bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]"
        />

        </div>
        <div className=" w-full h-[50vh] md:w-[80%] md:h-[70vh]  relative pr-6 sm:pr-10 lg:pr-16 bg-[url('/images/workprocess.jpg')] bg-cover bg-center">
           <div className="md:w-[450px] lg:w-[450px] xl:w-[500px]  absolute md:top-50 md:-right-27 lg:-right-40 xl:-right-50 bg-[#0000005E] backdrop-blur-sm p-3">
            <p className="text-sm md:text-base font-extrabold text-white">
          Crafting Tomorrow&apos;s Steel Future</p>
          <p className="text-gray-200 md:text-[14px] lg:text-[16px] word-spacing-[10px] leading-6">Crafting Tomorrow's Steel Future
From sleek countertops to durable shelving units, our extensive range of stainless steel fabrications is designed to elevate the functionality and aesthetics of any space. At Fast Track Metallic Ind. L.L.C we strive to provide top-of-the-line equipment that meets your requirements and exceeds your expectations.</p>
           </div>
        </div>
      </section>
    )
}
export default Work;