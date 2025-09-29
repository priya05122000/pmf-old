"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const tabs = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact Us" },
];

export default function Radio() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Helper to get path by tab id
  const getPath = (id: string) => {
    switch (id) {
      case "home":
        return "/home";
      case "products":
        return "/products";
      case "contact":
        return "/contact-us";
      default:
        return "/";
    }
  };

  return (
    <div>
      {/* Desktop Navbar - Bottom */}
      <div className="w-full flex justify-center items-center fixed bottom-8 text-white z-[9999]">
        <div className="relative hidden sm:flex bg-[#333F57]/60 backdrop-blur-md rounded-full overflow-hidden px-1">
          <div
            className="absolute top-1 bottom-1 left-1 rounded-full bg-blue-custom transition-transform duration-500 ease-[cubic-bezier(0.33,0.83,0.99,0.98)]"
            style={{
              width: "120px",
              transform: `translateX(${tabs.findIndex((t) => t.id === active) * 120}px)`,
            }}
          />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActive(tab.id);
                router.push(getPath(tab.id));
              }}
              className={`relative z-10 w-[120px] min-w-[120px] cursor-pointer px-4 py-2 text-center text-base font-medium transition-colors ${active === tab.id ? "text-white" : "text-white/80"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navbar - Top */}
      <div className="sm:hidden fixed top-0 left-0 right-0 flex justify-between items-center px-6 h-14  bg-blue-custom backdrop-blur-md z-[9999]">
        <Image
          src="/logos/logo.png"
          alt="Logo"
          height={32}
          width={100}
          className="h-8 w-auto"
        />
        <button
          className="text-white text-3xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigation"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-blue-custom shadow-xl transform transition-transform duration-500 z-[9998] ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col pt-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActive(tab.id);
                setOpen(false);
                router.push(getPath(tab.id));
              }}
              className={`w-full px-6 py-3 text-left text-base font-medium ${active === tab.id
                ? "bg-blue-custom text-white font-semibold"
                : "text-white/40"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 bg-black/40 z-[9997]"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
