"use client";

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
  { title: "Commitment to Excellence", description: "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.", image: "/images/industry5.webp" },
  { title: "Commitment to Excellence", description: "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.", image: "/images/industry6.webp" },
  { title: "Commitment to Excellence", description: "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.", image: "/images/industry7.webp" },
  { title: "Commitment to Excellence", description: "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.", image: "/images/industry8.webp" },
  { title: "Commitment to Excellence", description: "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.", image: "/images/industry6.webp" },
  { title: "Commitment to Excellence", description: "At PMF, our mission is to provide metal fabrication solutions that are not only functional but also visually appealing and long-lasting.", image: "/images/industry7.webp" },
];

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const gallery = galleryRef.current;
    if (!section || !gallery) return;

    let ctx: gsap.Context;

    const setup = () => {
      ctx?.revert();

      const totalWidth = gallery.scrollWidth - section.offsetWidth;
      if (totalWidth <= 0) return;

      ctx = gsap.context(() => {
        gsap.to(gallery, {
          x: () => -(gallery.scrollWidth - section.offsetWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top+=48px",
            end: () => `+=${gallery.scrollWidth - section.offsetWidth}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            onEnter: () => console.log("✅ ScrollTrigger entered"),
            onLeave: () => console.log("⬇️ left trigger"),
          },
        });
      }, section);

      ScrollTrigger.refresh();
    };

    const waitForImages = async () => {
      const imgs = Array.from(gallery.querySelectorAll("img")) as HTMLImageElement[];
      await Promise.all(
        imgs.map(img =>
          img.complete
            ? Promise.resolve()
            : new Promise(res => {
              img.onload = () => res(null);
              img.onerror = () => res(null);
            })
        )
      );
      // Wait one more frame for layout to stabilize on mobile
      requestAnimationFrame(() => {
        requestAnimationFrame(setup);
      });
    };

    waitForImages();

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      ctx?.revert();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <GridSection className="relative overflow-x-hidden min-h-screen px-6 md:px-0 py-10 sm:ml-4 lg:ml-0 lg:pl-4 xl:pl-0">
      <div className="col-span-2 col-start-2 w-[100vw] xl:w-auto">
        <div {...ANIMATIONS.fadeRight}>
          <article>
            <Heading level={1} className="leading-14 py-1">
              Industries
              <br />
              we support
            </Heading>
          </article>
          <span className={`mb-6 block h-1 w-20 mt-4 ${GOLDEN_GRADIENT}`} />
        </div>

        <div ref={sectionRef} className="relative w-full overflow-hidden">
          <div className="horiz-gallery-wrapper">
            <div ref={galleryRef} className="horiz-gallery-strip w-fit flex gap-8 py-4">
              {industries.map((item, idx) => (
                <div
                  key={idx}
                  className={`
                    w-[80vw] sm:w-[60vw] md:w-[33vw] lg:w-1/4
                    flex flex-col justify-between flex-shrink-0 snap-start
                    bg-transparent
                    ${idx % 2 === 0 ? "h-[90vh]" : "h-[100vh]"}
                  `}
                >
                  <div className="py-5">
                    <Paragraph className="font-normal text-white mb-2 text-left uppercase">
                      {item.title}
                    </Paragraph>
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
