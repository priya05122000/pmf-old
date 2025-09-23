"use client";
import { useEffect, useState } from "react";
import { GOLDEN_GRADIENT } from "@/lib/gradients";

export default function Loader() {
  const [animateUp, setAnimateUp] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateUp(true), 2800);
    const timer2 = setTimeout(() => setHide(true), 2800 + 700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className={`loading ${GOLDEN_GRADIENT} bg-clip-text text-transparent px-8 py-4 rounded flex justify-center items-center  ${animateUp ? "loader-up-fade" : ""}`}
      >
        {"LOADING".split("").map((l, i) => (
          <span
            key={i}
            className={` font-bold uppercase bg-clip-text text-transparent ${GOLDEN_GRADIENT}`}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
