"use client";

import React, { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";

// Types
interface SubMenu {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string;
  submenus?: SubMenu[];
}

interface MobileMenuState {
  isOpen: boolean;
  activeSubmenu: string | null;
}

// Constants
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/products" },
  { label: "Contact us", href: "/contact-us" },
];

const COMPANY = {
  name: "Mayil Mark",
  logo: "/logos/logo.png",
  homeUrl: "/home"
};

// Utility: get active link label
const getActiveNavInfo = (
  pathname: string,
  navLinks: NavLink[]
): { activeLink: string; activeSubmenu: string | null } => {
  for (const link of navLinks) {
    if (link.href === pathname) return { activeLink: link.label, activeSubmenu: null };
    if (link.submenus) {
      for (const submenu of link.submenus) {
        if (submenu.href === pathname) return { activeLink: link.label, activeSubmenu: submenu.label };
      }
    }
  }
  return { activeLink: "", activeSubmenu: null };
};

// Main Navbar component
const Navbar: React.FC<{ hide?: boolean }> = ({ hide = false }) => {
  const [mobileMenu, setMobileMenu] = useState<MobileMenuState>({
    isOpen: false,
    activeSubmenu: null
  });
  const pathname = usePathname();
  const { activeLink, activeSubmenu } = getActiveNavInfo(pathname, NAV_LINKS);

  const toggleMobileMenu = () => {
    setMobileMenu(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
      activeSubmenu: prev.isOpen ? null : prev.activeSubmenu
    }));
  };

  const handleSubmenuToggle = (label: string) => {
    setMobileMenu(prev => ({
      ...prev,
      activeSubmenu: prev.activeSubmenu === label ? null : label
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenu({
      isOpen: false,
      activeSubmenu: null
    });
  };

  return (
    <nav
      className={`fixed  block  lg:hidden top-0 left-0 w-full z-50 transition-all duration-300 ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-full">
        <div className="bg-[var(--bg-color)] ">
          <Section className="">
            <div className="flex items-center h-20 w-full relative">
              <Logo />

              <DesktopNavigation activeLink={activeLink} activeSubmenu={activeSubmenu} />
              <HamburgerButton isOpen={mobileMenu.isOpen} onClick={toggleMobileMenu} />
            </div>
          </Section>
        </div>
      </div>
      <MobileNavigation
        mobileMenu={mobileMenu}
        activeLink={activeLink}
        activeSubmenu={activeSubmenu}
        onSubmenuToggle={handleSubmenuToggle}
        onClose={closeMobileMenu}
      />
    </nav>
  );
};

export default Navbar;

// --- COMPONENTS ---

const Logo: React.FC = () => (
  <div className="flex items-center gap-2 shrink-0  h-full justify-center ">
    <Link href={COMPANY.homeUrl}>
      <Image
        src={COMPANY.logo}
        alt={`${COMPANY.name} Logo`}
        width={1000}      // match the actual display size
        height={1000}
        className="w-40 sm:w-52 h-auto object-contain"
        quality={100}
        priority
      />
    </Link>
  </div>
);



interface DesktopNavigationProps {
  activeLink: string;
  activeSubmenu: string | null;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ activeLink, activeSubmenu }) => (
  <ul className="hidden lg:flex flex-1 items-center justify-end text-sm xl:text-base text-white-custom font-medium font-inter">
    {NAV_LINKS.map(link => (
      <li
        key={link.label}
        className={`relative   ml-10  ${activeLink === link.label ? "text-accent" : ""} hover:text-accent cursor-pointer transition-colors duration-200 group`}
      >
        {link.submenus ? (
          <span className="block w-full h-full py-2 ">{link.label}</span>
        ) : (
          <Link href={link.href || "#"} className="block w-full h-full py-2  text-white text-lg font-medium cursor-pointer hover:text-white/70">{link.label}</Link>
        )}
        {link.submenus && (
          <ul className="absolute left-0 top-full bg-background text-gray-900 rounded shadow-lg min-w-[200px] z-40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {link.submenus.map(submenu => (
              <li key={submenu.label} className="px-4 py-2 transition-colors duration-150">
                <Link
                  href={submenu.href}
                  className={`block w-full text-sm ${activeSubmenu === submenu.label ? "text-accent" : ""}`}
                >
                  {submenu.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => (
  <button
    className="lg:hidden flex flex-col justify-center items-center ml-auto text-white"
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    {isOpen ? (
      <RxCross1 className="text-3xl rounded my-0.5 transition-all duration-300 text-white-custom" />
    ) : (
      <RxHamburgerMenu className="text-3xl rounded my-0.5 transition-all duration-300 text-white-custom" />
    )}
  </button>
);

interface MobileNavigationProps {
  mobileMenu: MobileMenuState;
  activeLink: string;
  activeSubmenu: string | null;
  onSubmenuToggle: (label: string) => void;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  mobileMenu,
  activeLink,
  activeSubmenu,
  onSubmenuToggle,
  onClose
}) => (
  <div className="lg:hidden">
    <div className={`transition-all duration-300 ease-in-out ${mobileMenu.isOpen
      ? "max-h-[500px] opacity-100 scale-100"
      : "max-h-0 opacity-0 scale-95 pointer-events-none"
      } overflow-hidden`}>
      <ul className="flex flex-col items-stretch gap-0 text-deep-green font-medium font-inter tracking-wide bg-[var(--light-bg-color)] py-0 z-20 text-white">
        {NAV_LINKS.map(link => (
          <React.Fragment key={link.label}>
            <li
              className={`px-6 sm:px-8 py-3 w-full text-deep-green text-left text-sm border-b last:border-b-0 border-deep-green ${activeLink === link.label ? "font-bold text-deep-green" : ""
                } cursor-pointer transition-colors duration-200 hover:text-primary flex items-center justify-between`}
              onClick={() => {
                if (link.submenus) onSubmenuToggle(link.label);
                else onClose();
              }}
            >
              {link.submenus ? (
                <>
                  <span className="block w-full">{link.label}</span>
                  <svg
                    className={`ml-2 w-4 h-4 text-gray-500 transition-transform duration-200 ${mobileMenu.activeSubmenu === link.label ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              ) : (
                <Link
                  href={link.href || "#"}
                  className="block w-full h-full"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              )}
            </li>
            {link.submenus && mobileMenu.activeSubmenu === link.label && (
              <ul className="px-8 py-2">
                {link.submenus.map(submenu => (
                  <li key={submenu.label} className="py-1 text-xs">
                    <Link
                      href={submenu.href}
                      className={`transition-colors duration-150 ${activeSubmenu === submenu.label
                        ? "text-accent font-bold"
                        : "text-gray-700 hover:text-black"
                        }`}
                      onClick={onClose}
                    >
                      {submenu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}

      </ul>
    </div>
  </div>
);