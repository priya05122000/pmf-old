"use client";
import React from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [active, setActive] = React.useState(0);

  // Make widths dynamic and equal
  const containerWidth = 350; // px, adjust as needed
  const tabCount = tabs.length;
  const tabWidth = containerWidth / tabCount;

  // Reduced height values
  const navHeight = 40;
  const indicatorHeight = 32;
  const indicatorTop = (navHeight - indicatorHeight) / 2;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="relative flex  bg-[#333F57]/60 backdrop-blur-md rounded-full px-1 py-1 items-center shadow-lg"
        style={{ width: containerWidth, height: navHeight }}
      >
        {/* Sliding indicator */}
        <div
          className="absolute transition-transform duration-300 ease-in-out bg-blue-custom rounded-full z-0"
          style={{
            top: indicatorTop,
            left: 0, // <-- changed from 4 to 0
            width: tabWidth - 8,
            height: indicatorHeight,
            transform: `translateX(${active * tabWidth + 4}px)`, // <-- add 4px offset
          }}
        />
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActive(idx)}
            className={`relative flex items-center justify-center rounded-full font-medium text-base transition-colors duration-200 z-10 flex-1
              ${active === idx ? "text-white " : "text-white/70"}
            `}
            aria-current={active === idx ? "page" : undefined}
            style={{ minWidth: tabWidth, maxWidth: tabWidth, height: indicatorHeight }}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
