"use client";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);


export default function PinnedSection() {
    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".sticky-box",
            start: "top 33%", // box ஆரம்பத்தில்
            end: "top top",   // scroll முடியும் போது
            pin: ".sticky-box", // pin box
            pinSpacing: false,  // scroll space மட்டும் மேலாக இருக்க வேண்டுமென்றால் true
            scrub: true,
            // markers: true,   // debug
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
