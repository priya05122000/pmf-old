
import { ANIMATIONS } from "@/components/Animations";
import GridSection from "@/components/GridSection";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import React from "react";

const Work = () => {
  return (

    <div>
      <Section>
        <div {...ANIMATIONS.zoomIn}>
          <Heading
            level={1}

            className={`leading-14 ${GOLDEN_GRADIENT} bg-clip-text text-transparent py-1`}
          >
            <span className="font-bold -tracking-wider">Work</span>
            <br />
            <span className="font-bold -tracking-wider">Process</span>
          </Heading>
          <span className={`mb-6 block h-1 w-24 mt-2 sm:mt-4 ${GOLDEN_GRADIENT}`} />
        </div>
      </Section>

      <GridSection className="relative overflow-x-hidden sm:-ml-4 sm:mr-8 lg:-ml-8 lg:mr-4 xl:mr-0 lg:pl-0 xl:pl-0 my-10 ">
        <div className="col-span-2   h-[50vh]  md:h-[60vh]  w-[100vw] lg:w-auto  relative">
          {/* <div className="col-span-2  bg-[url('/images/workprocess.jpg')]  h-[50vh] md:w-[80%] md:h-[70vh]  bg-right sm:bg-bottom-left bg-no-repeat bg-cover w-[100vw] xl:w-auto  relative"> */}
          <div className="bg-[url('/images/workprocess.jpg')] h-full w-full sm:w-[80vw] bg-right sm:bg-bottom-left bg-no-repeat bg-cover"></div>
          <div className=" hidden sm:block absolute md:w-[450px] lg:w-[450px] xl:w-[500px] bg-[var(--light-bg-color)]/70  backdrop-blur-md p-4 right-0 top-2/3  -translate-y-1/2">
            <div {...ANIMATIONS.zoomIn}>
              <Paragraph className=" font-extrabold text-white">
                Crafting Tomorrow&apos;s Steel Future</Paragraph>
              <Paragraph className="text-white word-spacing-[10px] leading-6 mt-2">Crafting Tomorrow's Steel Future
                From sleek countertops to durable shelving units, our extensive range of stainless steel fabrications is designed to elevate the functionality and aesthetics of any space. At Fast Track Metallic Ind. L.L.C we strive to provide top-of-the-line equipment that meets your requirements and exceeds your expectations.</Paragraph>
            </div>
          </div>
          <div className="sm:hidden absolute w-full bg-[var(--bg-color)]/70  backdrop-blur-md  top-10 right-0 left-0 bottom-10 flex  justify-center items-center ">
            <Section >
              <Paragraph className=" font-extrabold text-white" {...ANIMATIONS.zoomIn}>
                Crafting Tomorrow&apos;s Steel Future</Paragraph>
              <Paragraph className="text-white word-spacing-[10px] leading-6 mt-2" {...ANIMATIONS.zoomIn}>Crafting Tomorrow's Steel Future
                From sleek countertops to durable shelving units, our extensive range of stainless steel fabrications is designed to elevate the functionality and aesthetics of any space. At Fast Track Metallic Ind. L.L.C we strive to provide top-of-the-line equipment that meets your requirements and exceeds your expectations.</Paragraph>
            </Section>
          </div>
        </div>
      </GridSection>
    </div>

  )
}
export default Work;