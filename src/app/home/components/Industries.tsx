import { useEffect, useRef } from "react";
import GridSection from "@/components/GridSection";
import Heading from "@/components/Heading";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Paragraph from "@/components/Paragraph";
import Span from "@/components/Span";
import { ANIMATIONS } from "@/components/Animations";

const industries = [
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry1.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry2.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry3.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry1.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry2.jpg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.",
    image: "/images/industry3.jpg",
  },
];

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const gallery = galleryRef.current;
    const section = sectionRef.current;
    if (!gallery || !section) return;

    // const getScrollLength = () => gallery.scrollWidth - section.offsetWidth;

    const ctx = gsap.context(() => {
      let totalWidth = gallery.scrollWidth - section.offsetWidth;

      gsap.to(gallery, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // end: () => `+=${getScrollLength()}`,
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <GridSection className="relative overflow-x-hidden min-h-screen  py-10 sm:ml-4 lg:ml-0 lg:pl-4 xl:pl-0 ">
      <div className="col-span-2 col-start-2 w-[100vw] xl:w-auto">
        <div {...ANIMATIONS.fadeRight}>
          <Heading level={1} className="font-bold leading-12 tracking-[-0.02em]">
            <span className={`${GOLDEN_GRADIENT} bg-clip-text text-transparent`}>Industries </span>
            <br />
            <span className={`${GOLDEN_GRADIENT} bg-clip-text text-transparent`}>we support</span>
          </Heading>
          <span className={`mb-6 block h-1 w-23 mt-4 ${GOLDEN_GRADIENT}`} />
        </div>
        <div ref={sectionRef} className="relative w-full overflow-hidden">
          <div className="horiz-gallery-wrapper">
            <div
              ref={galleryRef}
              className="horiz-gallery-strip w-fit  flex gap-10 py-4"
            >
              {industries.map((item, idx) => (
                <div
                  key={idx}
                  className="
                  w-full md:w-1/3 lg:w-1/5
                  flex flex-col justify-between
                  flex-shrink-0 snap-start
                  bg-transparent
                "
                  style={{ height: idx % 2 === 0 ? 650 : 700 }}
                >
                  <div className=" py-5">
                    <Paragraph className=" font-bold text-white mb-2 text-left">{item.title}</Paragraph>
                    {idx % 2 === 0 && (
                      <Span className="text-gray-300 mb-2 text-left">{item.description}</Span>
                    )}
                  </div>
                  <div className="relative w-full flex-grow">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xs"
                      style={{ objectPosition: idx === 0 ? "right" : "center" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </GridSection>
  );
};

export default Industries;