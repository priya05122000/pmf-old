"use client";

import { useEffect, useRef, useState } from "react";
import AOSInit from "@/components/AOSInit";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import ClientNavbarWrapper from "@/components/ClientNavbarWrapper";
import Loader from "@/components/Loader";
import {Footer} from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const smootherRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    // Loader timeout
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // adjust duration
        return () => clearTimeout(timer);
    }, []);

    // Init GSAP smoother after loader is gone
    useGSAP(() => {
        if (!loading && smootherRef.current) {
            const existing = ScrollSmoother.get();
            if (existing) existing.kill();

            ScrollSmoother.create({
                smooth: 2, // adjust smoothness
                effects: true,
                wrapper: smootherRef.current,
                content: smootherRef.current.querySelector(".smoother-content"),
            });

            // Force refresh
            ScrollTrigger.refresh();
        }

        return () => {
            const smoother = ScrollSmoother.get();
            if (smoother) smoother.kill();
        };
    }, [loading]);

    useEffect(() => {
        if (!loading) window.scrollTo(0, 0);
    }, [loading]);

    return (
        <>
            {/* Loader overlay (doesn't affect layout height) */}
            {loading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                    <Loader />
                </div>
            )}

            {!loading && (
                <>
                    <AOSInit />
                    <ClientNavbarWrapper />
                    <div ref={smootherRef} id="smooth-wrapper" className="">
                        <div className="smoother-content min-h-screen flex flex-col">
                            <main className="flex-1 pt-20">{children}</main>
                            <Footer />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
