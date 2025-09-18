"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientNavbarWrapper() {
  const pathname = usePathname();

  // Home page → show only on mobile & tablet
  if (pathname === "/home" || pathname === "/") {
    return <Navbar className="block lg:hidden" />;
  }

  // Other pages → show on all screen sizes
  return <Navbar />;
}
