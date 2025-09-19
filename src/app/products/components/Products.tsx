"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { GOLDEN_GRADIENT } from "@/lib/gradients";

type Product = {
  id: number;
  name: string;
  image: string;
};

// Duplicate product entries for demonstration; consider generating programmatically if needed
const products: Product[] = [
  { id: 1, name: "Service trolley", image: "/images/product1.png" },
  { id: 2, name: "Service trolley", image: "/images/product2.png" },
  { id: 3, name: "Service trolley", image: "/images/product3.png" },
  { id: 4, name: "Service trolley", image: "/images/product4.png" },
  { id: 5, name: "Service trolley", image: "/images/product5.png" },
  { id: 6, name: "Service trolley", image: "/images/product6.png" },
  // ...repeats for demo
  
];

export function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [view, setView] = useState("grid");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll tracking (only on desktop)
  const { scrollY } = useScroll();
  const centerParallax = useTransform(
    scrollY,
    [0, 500],
    [0, isMobile ? 0 : 100],
    { clamp: false }
  );

  return (
    <div className=" min-h-screen  text-white py-12 overflow-x-hidden overflow-y-auto relative scrollbar-hide">
      {/* Heading */}
      <div className="px-6 sm:px-10 lg:px-16 flex justify-between">
        <h1 className="text-4xl font-bold mb-10 ">Products</h1>
        <div>
          <img
            src="/images/filter.png"
            alt="filter"
            className="h-10 w-10 object-contain"
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {view === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 relative  "
          >
            {products.map((product, index) => {
              const isCenter = index % 3 === 1;
              const Wrapper = isCenter ? motion.div : "div";

              return (
                <Wrapper
                  key={product.id}
                  style={
                    isCenter && !isMobile
                      ? { y: centerParallax, willChange: "transform" }
                      : {}
                  }
                  // GOLDEN_GRADIENT and translation classes are repeated for each card
                  className={`group relative  cursor-pointer  flex justify-center items-center ${GOLDEN_GRADIENT}  h-96
                    ${index % 3 === 0 ? "md:translate-y-20  pb-[1px] pr-[1px] first:pt-[1px]" : ""}
                    ${index % 3 === 1 ? "md:translate-y-0 px-[1px] pb-[1px] pt-[1px]" : ""}
                    ${index % 3 === 2 ? "md:translate-y-25  pb-[1px] pl-[1px] pt-[1px]" : ""}
                  `}
                  onClick={() => setSelectedImage(product.image)}
                >
                  <div className="bg-[#1A253C] w-full h-full flex justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className={`object-contain transition-transform   duration-300  hover:scale-125 ${
                        product.id === 5 ? "-rotate-12" : ""
                      }`}
                    />
                    <p className="absolute bottom-2 right-2 text-sm bg-[#FFFFFF0F] p-2 mr-3 mb-3 rounded-md">
                      {product.name}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>
        ) : (
          <motion.ul
            key="index"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="px-4"
          >
            {products.map((product) => (
              <li
                key={product.id}
                className="text-5xl md:text-7xl lg:text-7xl xl;text-9xl font-medium text-center pb-3"
              >
                {product.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Fixed Toggle */}
      {/* <div className="fixed bottom-7 left-1/2 -translate-x-1/2 flex items-center w-[200px] h-10 bg-white/20 rounded-full p-1 cursor-pointer z-50">
      
        <div
          className={
            "absolute top-1 left-1 w-[calc(50%-4px)] h-8 bg-black/30 rounded-full transition-transform duration-700 ease-in-out"
          }
          style={{
            transform: view === "grid" ? "translateX(0)" : "translateX(100%)",
          }}
        ></div>

     
        <div className="flex w-full relative z-10">
          <button
            onClick={() => setView("grid")}
            className={
              "flex items-center justify-center gap-1 w-1/2 text-sm font-medium cursor-pointer duration-300"
            }
          >
            {view === "grid" && <span className="text-lg">•</span>} Grid
          </button>
          <button
            onClick={() => setView("index")}
            className={
              "flex items-center justify-center gap-1 w-1/2 text-sm font-medium cursor-pointer duration-300"
            }
          >
            {view === "index" && <span className="text-lg">•</span>} Index
          </button>
        </div>
      </div> */}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage}
                alt="Selected"
                width={500}
                height={400}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
