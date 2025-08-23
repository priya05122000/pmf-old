import React from "react";

const Choose=()=>{
    return(
    <div className="bg-[#1a1a1a] px-6 sm:px-10 lg:px-16 py-20">
        <div className="">
            <div className="w-full flex flex-col items-center lg:items-start ">
                <h1 className="text-[#FFFFFF] text-md md:text-3xl lg:text-xl xl:text-2xl font-semibold">Trusted by <span className="text-[#BEBEBE] "> 20,000+ </span>customers across Europe</h1>
                <div className="flex  items-center mt-10 gap-10 md:gap-29 lg:gap-20 xl:gap-27">
                <h1 className="text-[#FFFFFF] text-3xl md:text-5xl  lg:text-3xl xl:text-4xl font-bold">Trust</h1>
                <h1 className="text-[#FFFFFF] text-3xl md:text-5xl lg:text-3xl xl:text-4xl font-bold">Values</h1>
                <h1 className="text-[#FFFFFF] text-3xl md:text-5xl lg:text-3xl xl:text-4xl font-bold">Money</h1>
                </div>
            <div className="w-full flex flex-col lg:flex-row justify-between mt-15">
                 <div className="bg-black lg:w-1/2 xl:w-2/5 pb-7 lg:mt-15">
                    <ul className="list-disc text-[#FFFFFF] text-[15px] md:text-lg lg:text-md  pl-10 pt-5 leading-7">
                        <li>Expertise in Both Mild Steel & Stainless Steel</li>
                        <li>State-of-the-Art Fabrication Facility</li>
                        <li>Strict Adherence to Safety and Industry Standards</li>
                        <li>On-Time Delivery with Quality Assurance</li>
                        <li>End-to-End Project Management</li>
                    </ul>
                    <div className="max-w-5xl pl-9 pt-10">
        {/* small gold bar */}
        <span
          className="mb-6 block h-1 w-28 
          bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]"
        />

        {/* heading */}
        <h1
          className="font-bold leading-[1] tracking-[-0.02em]
          text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-7xl"
        >
          <span
            className="bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F]  to-[#B07515]
            bg-clip-text text-transparent"
          >
            Why Choose
          </span>
          <br />
          <span
            className="bg-gradient-to-r from-[#E1B866] via-[#F6E27A] to-[#B87917]
            bg-clip-text text-transparent"
          >
            PMF?
          </span>
        </h1>
      </div>
                 </div>
                 <div className=" mt-10 lg:mt-0 text-center lg:text-left ">
                      <h1 className="text-[#FFFFFF] md:text-3xl lg:text-xl xl:text-2xl font-semibold">Trusted</h1>
                <div className="flex justify-between items-center mt-10 lg:gap-20 xl:gap-25">
                <div className="flex flex-col">
                <h1 className="text-[#FFFFFF] text-4xl md:text-6xl lg:text-4xl xl:text-6xl font-extrabold">900</h1>
                <p className="text-[#FFFFFF] text-[13px] md:text-sm">Clients</p>
                </div>
              <div className="flex flex-col">
               <h1 className="text-[#FFFFFF] text-4xl md:text-6xl lg:text-4xl xl:text-6xl font-extrabold">900</h1>
                <p className="text-[#FFFFFF] text-[13px] md:text-sm">Clients</p>
                </div>                
                <div className="flex flex-col">
                <h1 className="text-[#FFFFFF] text-4xl md:text-6xl lg:text-4xl xl:text-6xl font-extrabold">900</h1>
                <p className="text-[#FFFFFF] text-[13px] md:text-sm">Clients</p>
                </div>
                </div>
                 </div>
            </div>
            </div>
        </div>
         
    </div>
    )
}
export default Choose;