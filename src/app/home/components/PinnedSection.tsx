"use client";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedSection() {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".sticky-box",
            start: "top 33%",
            end: "top top",
            pin: ".sticky-box",
            pinSpacing: false,
            scrub: true,
            // markers: true,
        });
    }, []);


    return (
        <div
            className="sticky-box left-1/2 -translate-x-1/2 w-80 p-6 rounded-xl shadow-lg bg-white"
            style={{ top: "33vh", position: "absolute" }} // ScrollSmoother-க்கு absolute
        >
            <h2 className="text-lg font-bold text-gray-800">Sticky Box</h2>
            <p className="text-gray-600 text-sm">
                Scroll  moves to top and sticks.
            </p>
        </div>
    );
}
