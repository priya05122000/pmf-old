import React from "react";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import GridSection from "@/components/GridSection";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { ANIMATIONS } from "@/components/Animations";
import Link from "next/link";

const Hello = () => (
  <div className="w-full min-h-[100vh] sm:min-h-[70vh] lg:min-h-[60vh] flex items-center justify-center bg-[url('/images/services.jpg')] bg-cover bg-no-repeat lg:bg-center relative">
    <div className="w-full bg-[var(--light-bg-color)]/70 backdrop-blur-sm flex justify-center items-center min-h-[45vh] py-10">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className=" h-full flex items-center">
            <Heading level={2} className="text-white" {...ANIMATIONS.fadeRight}>
              SAY HELLO! <br /> WE ARE HAPPY TO HEAR FROM YOU.
            </Heading>
          </div>
          <div className="h-full flex items-center mt-3">
            <div className=" text-white space-y-6 text-base ">
              <div>
                <Heading level={5} className="font-bold   mb-1">
                  Promed Metal Furniture L.L.C-FZ
                </Heading>
                <div className="mb-1">
                  <Paragraph size="base" className="block">
                    P.O. Box: 54256 Dubai - UAE
                  </Paragraph>
                  <Paragraph size="base" className="block">
                    Tel: <Link href="tel:042572530">04 2572530</Link>
                  </Paragraph>
                  <Paragraph size="base" className="block">
                    <Link href="mailto:info@promedworld.com">
                      info@promedworld.com
                    </Link>
                  </Paragraph>
                </div>
              </div>
              <div className="mt-6">
                <Heading level={5} className="font-bold   mb-1">
                  Our sister concern:
                </Heading>
                <div>
                  <Paragraph size="base" className="block">
                    Fast Track Metallic Ind LLC P.O.Box 96648 Sharjah - U.A.E
                  </Paragraph>
                  <Paragraph size="base" className="block">
                    Tel: <Link href="tel:042572530">04 2572530</Link> |{" "}
                    <Link
                      href="https://www.promedworld.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.promedworld.com
                    </Link>
                  </Paragraph>
                  <Paragraph className="block">
                    <Link
                      href="https://www.fasttrackmi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.fasttrackmi.com
                    </Link>
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  </div>
);

export default Hello;
