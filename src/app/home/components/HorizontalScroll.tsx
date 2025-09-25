"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PANEL_COUNT = 5;

export default function HorizontalScroll() {
	const containerRef = useRef<HTMLDivElement>(null);
	const panelsRef = useRef<Array<HTMLDivElement | null>>([]);

	useEffect(() => {
		const container = containerRef.current;
		const panels = panelsRef.current;
		if (!container || panels.length === 0) return;

		const scrollTween = gsap.to(panels, {
			xPercent: -100 * (panels.length - 2),
			ease: "none",
			scrollTrigger: {
				trigger: container,
				pin: true,
				scrub: 0.1,
				end: "+=3000 bottom",
				// markers: true, // Uncomment for debugging
			},
		});

		panels.forEach((panel) => {
			if (!panel) return;
			ScrollTrigger.create({
				trigger: panel,
				containerAnimation: scrollTween,
				// markers: true, // Uncomment for debugging
				start: "left left",
				toggleClass: { targets: panel, className: "stick" },
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="w-[500vw] h-screen flex flex-nowrap overflow-x-visible relative"
		>
			{[...Array(PANEL_COUNT)].map((_, i) => (
				<div
					key={i}
					ref={el => { panelsRef.current[i] = el; }}
					className={`panel flex-none w-[50vw] h-full flex justify-center items-center font-semibold text-xl text-center relative box-border p-2 bg-white ${i % 2 === 0 ? "bg-white" : "bg-blue-200"}`}
				>
					<h1 className="text-2xl font-bold">
						Card Title Goes here.
					</h1>
				</div>
			))}
			<style jsx global>{`
				.stick {
					color: red;
				}
			`}</style>
		</div>
	);
}
