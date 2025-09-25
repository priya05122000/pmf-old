// "use client";

// import { useEffect, useRef, useState } from "react";
// import AOSInit from "@/components/AOSInit";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/ScrollSmoother";
// mport ClientNavbarWrapper from "@/components/ClientNavbarWrapper";
// import { Footer } from "@/components/Footer";
// import Loader from "@/components/Loader";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// export default function ClientLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     const smootherRef = useRef<HTMLDivElement>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => setLoading(false), 2000); // Adjust duration
//         return () => clearTimeout(timer);
//     }, []);

//     useGSAP(() => {
//         // Kill any existing ScrollSmoother instance before creating a new one
//         const smoother = ScrollSmoother.get();
//         if (smoother) {
//             smoother.kill();
//         }
//         if (smootherRef.current) {
//             ScrollSmoother.create({
//                 smooth: 3,
//                 effects: true,
//                 wrapper: smootherRef.current,
//                 content: smootherRef.current.querySelector(".smoother-content"),
//             });
//         }
//         // Cleanup on unmount
//         return () => {
//             const smootherInstance = ScrollSmoother.get();
//             if (smootherInstance) {
//                 smootherInstance.kill();
//             }
//         };
//     }, []);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <>
//             {loading ? (
//                 <Loader />
//             ) : (
//                 <>
//                     <AOSInit />
//                     <ClientNavbarWrapper />
//                     <div ref={smootherRef} id="smooth-wrapper" className="pt-10">
//                         <div className="smoother-content">
//                             <main className="min-h-screen">{children}</main>
//                             <Footer />
//                         </div>
//                     </div>
//                 </>
//             )}
//         </>
//     );
// }
