"use client";

import { useEffect, useRef, useState } from "react";
import AOSInit from "@/components/AOSInit";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Loader from "@/components/Loader";
import { Footer } from "@/components/Footer";
import { FaLongArrowAltUp } from "react-icons/fa";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const smootherRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Init GSAP smoother after loader is gone
  useGSAP(() => {
    if (!loading && smootherRef.current) {
      requestAnimationFrame(() => {
        const existing = ScrollSmoother.get();
        if (existing) existing.kill();

        if (smootherRef.current) {
          ScrollSmoother.create({
            smooth: 1.2, // keep low on mobile
            effects: true,
            wrapper: smootherRef.current,
            content: smootherRef.current.querySelector(
              ".smoother-content"
            ) as HTMLElement,
          });
        }

        ScrollTrigger.refresh(true); // 🔑 force refresh
      });
    }

    return () => {
      const smoother = ScrollSmoother.get();
      if (smoother) smoother.kill();
    };
  }, [loading]);

  useEffect(() => {
    if (!loading) window.scrollTo(0, 0);
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* Main Layout */}
      {!loading && (
        <div>
          <AOSInit />
          <Navbar />
          <div>
            <div className="min-h-screen flex flex-col">
              <main className="flex-1 pt-14 sm:pt-0 ">{children}</main>
              <Footer />
            </div>
          </div>
          {/* Back to Top Button */}
          {showTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-[9999] p-3 rounded-full bg-[#333F57]/60 backdrop-blur-md cursor-pointer text-white shadow-lg hover:bg-primary-dark transition"
              aria-label="Back to top"
            >
              <FaLongArrowAltUp />
            </button>
          )}
        </div>
      )}
    </>
  );
}
