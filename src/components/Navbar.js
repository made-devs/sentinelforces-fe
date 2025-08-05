"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const timeoutIdRef = useRef(null);

  const navLinksData = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    {
      name: "Layanan",
      href: "#",
      submenu: [
        {
          name: "Jasa Outsourcing Security",
          href: "/outsourcing-security",
        },
        { name: "Jasa Bodyguard", href: "/bodyguard" },
        {
          name: "Jasa Pengamanan Konser atau Event",
          href: "/event-security",
        },
        {
          name: "Pelatihan Outsourcing Security",
          href: "/pelatihan-security",
        },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Kontak", href: "/kontak" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown) {
        let isClickInside = false;
        const triggerElement = document.getElementById(
          `nav-item-${openDropdown}`
        );
        const dropdownElement = dropdownRefs.current[openDropdown];

        if (triggerElement && triggerElement.contains(event.target)) {
          isClickInside = true;
        }
        if (dropdownElement && dropdownElement.contains(event.target)) {
          isClickInside = true;
        }

        if (!isClickInside) {
          if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [openDropdown]);

  const handleMouseEnterItem = (itemName) => {
    if (window.innerWidth < 768) return;
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeaveArea = () => {
    if (window.innerWidth < 768) return;
    timeoutIdRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleParentItemClick = (itemName, hasSubmenu) => {
    if (hasSubmenu) {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
      setOpenDropdown((currentOpen) =>
        currentOpen === itemName ? null : itemName
      );
    }
  };

  const handleDropdownItemClick = () => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 fixed w-full z-30 bg-black/0 bg-gradient-to-t from-transparent to-black/70 font-plus-jakarta-sans transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Sentinel Forces Logo"
            width={40}
            height={40}
            className="h-10 mr-3"
          />
          <div>
            <span className="text-2xl font-bold whitespace-nowrap text-white">
              SENTINEL FORCES
            </span>
            <span className="block text-xs font-normal text-gray-400 -mt-1">
              MITRA KEAMANAN TERPERCAYA
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-1 items-center">
          {navLinksData.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnterItem(item.name)}
              onMouseLeave={handleMouseLeaveArea}
              ref={(el) => (dropdownRefs.current[item.name + "_wrapper"] = el)}
            >
              <Link
                id={`nav-item-${item.name}`}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 rounded-md flex items-center cursor-pointer"
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    handleParentItemClick(item.name, true);
                  }
                }}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDownIcon
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
              {item.submenu && openDropdown === item.name && (
                <div
                  ref={(el) => (dropdownRefs.current[item.name] = el)}
                  className="absolute left-0 mt-0 w-56 origin-top-left bg-white rounded-md shadow-lg z-40"
                  onMouseEnter={() => handleMouseEnterItem(item.name)}
                  onMouseLeave={handleMouseLeaveArea}
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`nav-item-${item.name}`}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left border-b border-gray-100 last:border-b-0"
                        role="menuitem"
                        onClick={handleDropdownItemClick}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Tombol CTA diubah menjadi Link */}
        <Link
          href="/kontak"
          className="btn btn-outline text-lg border-yellow-400 bg-yellow-400 hover:bg-yellow-600 text-black hidden md:inline-flex ml-4"
        >
          Konsultasi Sekarang
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn btn-square btn-ghost text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 shadow-lg rounded-b-lg mt-0 py-4 z-20">
          <nav className="flex flex-col items-center space-y-1">
            {navLinksData.map((item) => (
              <div key={item.name} className="w-full text-center">
                {item.submenu ? (
                  <details className="group w-full">
                    <summary className="text-gray-200 hover:text-yellow-400 transition-colors px-4 py-3 w-full text-center flex justify-center items-center cursor-pointer">
                      {item.name}
                      <ChevronDownIcon className="w-4 h-4 ml-1 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="bg-black bg-opacity-30">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-300 hover:text-yellow-400 transition-colors px-4 py-3 w-full text-center border-t border-gray-700"
                          onClick={handleDropdownItemClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-yellow-400 transition-colors px-4 py-3 w-full text-center block"
                    onClick={handleDropdownItemClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Tombol CTA Mobile diubah menjadi Link */}
            <Link
              href="/kontak"
              className="btn btn-warning text-black w-3/4 mt-4"
              onClick={handleDropdownItemClick}
            >
              Konsultasi Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
