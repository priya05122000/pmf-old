"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GOLDEN_GRADIENT } from "@/lib/gradients";
import Section from "@/components/Section";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

type Product = {
  id: number;
  name: string;
  image: string;
};

// border  border-[#B07515]

// Generate demo products
const products: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "Service trolley",
  image: `/images/product${i + 1}.png`,
}));

// Product Card
function ProductCard({
  product,
  onClick,
  className = "",
}: {
  product: Product;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      className={`relative cursor-pointer flex justify-center items-center ${className}`}
      style={{
        backgroundImage: GOLDEN_GRADIENT, // gradient only acts as border
      }}
      onClick={onClick}
    >
      <div className="bg-[#1A253C] w-full h-96 flex justify-center items-center ">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className={`object-contain transition-transform duration-300 hover:scale-125 ${product.id === 5 ? "-rotate-12" : ""
            }`}
        />
        <p className="absolute bottom-2 right-2 text-sm bg-[#FFFFFF0F] p-2 mr-3 mb-3 rounded-md">
          {product.name}
        </p>
      </div>
    </div>
  );
}

// Image Modal
function ImageModal({ image, onClose }: { image: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image}
              alt="Selected"
              width={500}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // GSAP ScrollTrigger for parallel scroll
  useEffect(() => {
    if (isMobile) return; // disable on mobile

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    tl.to(leftRef.current, { y: -100, ease: "none" }, 0);
    tl.to(centerRef.current, { y: -50, ease: "none" }, 0);
    tl.to(rightRef.current, { y: -150, ease: "none" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile]);

  // Split products into 3 columns
  const leftProducts = products.filter((_, i) => i % 3 === 0);
  const centerProducts = products.filter((_, i) => i % 3 === 1);
  const rightProducts = products.filter((_, i) => i % 3 === 2);

  return (
    <div className="pt-10 sm:pt-20">
      <Section>
        <div className="flex justify-between items-center ">
          <Heading level={4} className="text-white font-bold">
            Products
          </Heading>
          <img
            src="/images/filter.png"
            alt="filter"
            className="h-10 w-10 object-contain"
          />
        </div>
      </Section>

      <div className="grid-section flex pt-20  text-white overflow-hidden relative">
        {/* Left Column */}
        <div ref={leftRef} className="flex-1 flex flex-col">
          {leftProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => setSelectedImage(p.image)}
              className="border-y border-r  border-[#B07515] "
            />
          ))}
        </div>

        {/* Center Column */}
        <div ref={centerRef} className="flex-1 flex flex-col">
          {centerProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => setSelectedImage(p.image)}
              className="border  border-[#B07515] "
            />
          ))}
        </div>

        {/* Right Column */}
        <div ref={rightRef} className="flex-1 flex flex-col  ">
          {rightProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => setSelectedImage(p.image)}
              className="border-y border-l  border-[#B07515] "

            />
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
}
