"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const pathname = usePathname();

  // Helper to check active link
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`w-full bg-[#1a1a1a] px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between ${className}`}
    >
      {/* ✅ Logos clickable → redirect to "/" */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo1.png"
          alt="logo1"
          height={70}
          width={70}
          className="object-contain"
        />
        <Image
          src="/images/logo2 (2).png"
          alt="logo2"
          height={150}
          width={150}
          className="object-contain mt-1"
        />
      </Link>

      {/* ✅ Desktop Navigation */}
      {/* ✅ Desktop Navigation */}
<div className="hidden md:flex text-white gap-8 ">
  {[
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact-us" },
  ].map((link) => {
    const active = isActive(link.path);
    return (
      <div key={link.path} className="flex items-center justify-center gap-2">
        {active && <span className="w-2 h-2 rounded-full    mt-1 bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]
" />}
        <Link
          href={link.path}
          className={`relative text-xl transition ${
            active ? "font-bold text-white" : "hover:text-gray-300"
          }`}
        >
          {link.name}
        </Link>
      </div>
    );
  })}
</div>



      {/* ✅ Mobile Drawer Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white">
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1a1a1a] text-white p-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo1.png"
                alt="logo1"
                height={50}
                width={50}
                className="object-contain"
              />
              <Image
                src="/images/logo2 (2).png"
                alt="logo2"
                height={100}
                width={100}
                className="object-contain mt-1"
              />
            </Link>

            <nav className="flex flex-col gap-6 mt-10 ">
  {[
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact-us" },
  ].map((link) => {
    const active = isActive(link.path);
    return (
      <SheetClose asChild key={link.path}>
        <div className="flex items-center">
        {active && <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-gradient-to-r from-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] via-[#B07515] via-[#E1BA60] via-[#F5D77F] via-[#FFFFD7] via-[#F5D77F] to-[#B07515]
" />}
        <Link
          href={link.path}
          className={`relative text-xl transition ${
            active
              ? "font-bold text-white "
              : "hover:text-gray-300"
          }`}
        >
          
          {link.name}
        </Link>
        </div>
      </SheetClose>
    );
  })}
</nav>

          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
