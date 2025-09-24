import { GOLDEN_GRADIENT } from "@/lib/gradients";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { ANIMATIONS } from "@/components/Animations";

const About = () => {
  const [rotation, setRotation] = useState(0);
  const directionRef = useRef<"down" | "up">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        directionRef.current = "down";
      } else if (currentScrollY < lastScrollY) {
        directionRef.current = "up";
      }
      lastScrollY = currentScrollY;
    };

    // adjust speed here
    const speed = 1; // smaller = slower, try 0.1 - 0.5
    const interval = setInterval(() => {
      setRotation((prev) =>
        directionRef.current === "down" ? prev + speed : prev - speed
      );
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <Section>
      <section className="h-full mb-10">
        <div className="h-full lg:h-[70vh] grid grid-cols-1 lg:grid-cols-[.5fr_2fr_2fr_.2fr]  xl:grid-cols-[auto_2fr_1.7fr_auto] gap-16 xl:gap-30">
          <div {...ANIMATIONS.zoomIn}>
            <Image
              src="/images/aboutlogo.png"
              alt="Watermark Logo"
              width={400}
              height={400}
              className="object-contain w-auto h-20"
            />
          </div>
          <div className="flex flex-col justify-end" {...ANIMATIONS.fadeUp}>
            <article>
              <Heading
                level={2}
                className={`leading-[1] tracking-[-0.02em]
                `}
              >
                About us
              </Heading>
            </article>

            <span className={`mb-6 block h-1 w-24 mt-2 ${GOLDEN_GRADIENT}`} />
            <Paragraph className="text-white text-justify">
              PMF is a trusted leader in metal fabrication, specializing in
              precision-engineered solutions in Mild Steel and Stainless Steel.
              With a strong reputation for quality, reliability, and
              craftsmanship, we cater to diverse sectors including retail,
              construction, hospitals, hotels, and more.
            </Paragraph>
            <Paragraph className="text-white text-justify mt-2">
              Since our inception, PMF has delivered tailor-made fabrication
              services that meet the evolving demands of modern infrastructure
              and interior design. We combine technical expertise with advanced
              manufacturing capabilities to ensure every project exceeds
              expectations in terms of durability, design, and finish.
            </Paragraph>
          </div>

          <div className="flex items-end relative" {...ANIMATIONS.fadeUp}>
            <div className="relative bg-amber-800 h-[95%] w-[80%] sm:w-[90%] lg:w-full">
              {/* Rotating image absolutely positioned at the top right corner */}
              <Image
                src="/designs/elegance.png"
                alt="About PMF"
                width={120}
                height={120}
                className="object-contain absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10 w-[100px] sm:w-[120px] h-auto"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.1s linear",
                }}
              />
              <Image
                src="/images/about_us.webp"
                alt="About PMF"
                width={500}
                height={500}
                className="object-cover w-full shadow-lg h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};
export default About;
