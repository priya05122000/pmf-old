"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientNavbarWrapper() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";

  return (
    <Navbar homeHeroStyle={isHome} />
  );
}
