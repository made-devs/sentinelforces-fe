"use client";
import { useState, useEffect, useRef } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const timeoutIdRef = useRef(null); // Ref untuk menyimpan ID timeout

  // Data navigasi yang sudah diperbarui sesuai diskusi untuk Sentinel Forces
  const navLinksData = [
    { name: "Beranda", href: "/" }, // Sesuai "Beranda (Home)"
    { name: "Tentang Kami", href: "/tentang-kami" }, // Sesuai "Tentang Kami (About Us)"
    {
      name: "Layanan", // Sesuai "Layanan (Services)"
      href: "#",
      submenu: [
        {
          name: "Jasa Outsourcing Security",
          href: "#services/outsourcing-security",
        },
        { name: "Jasa Bodyguard", href: "#services/bodyguard" },
        {
          name: "Jasa Pengamanan Konser atau Event",
          href: "#services/event-security",
        },
        {
          name: "Pelatihan Outsourcing Security",
          href: "#services/security-training",
        },
      ],
    },
    // Menghilangkan menu 'Pages' karena tidak relevan dengan struktur Sentinel Forces
    { name: "Klien & Kemitraan", href: "#" }, // Sesuai "Klien & Kemitraan (Clients & Partnerships)"
    { name: "Artikel & Berita", href: "#" }, // Sesuai "Artikel/Berita (Blog/News)"
    { name: "Kontak", href: "#" }, // Sesuai "Kontak (Contact Us)"
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
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current); // Bersihkan timeout saat unmount
    };
  }, [openDropdown]);

  const handleMouseEnterItem = (itemName) => {
    if (window.innerWidth < 768) return; // Hanya untuk desktop
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeaveArea = () => {
    // Untuk wrapper dan dropdown content
    if (window.innerWidth < 768) return; // Hanya untuk desktop
    timeoutIdRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Jeda 200ms sebelum menutup, bisa disesuaikan
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
        {/* Mengganti nama logo menjadi Sentinel Forces */}
        <div className="text-3xl font-bold text-white">
          SENTINEL FORCES
          <span className="block text-xs font-normal text-gray-400 -mt-1">
            MITRA KEAMANAN TERPERCAYA
          </span>
        </div>

        <nav className="hidden md:flex space-x-1 items-center">
          {navLinksData.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnterItem(item.name)}
              onMouseLeave={handleMouseLeaveArea} // Mencakup seluruh area item + dropdown
              ref={(el) => (dropdownRefs.current[item.name + "_wrapper"] = el)}
            >
              <a
                id={`nav-item-${item.name}`}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors px-3 py-2 rounded-md flex items-center cursor-pointer" // Tambah cursor-pointer
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    handleParentItemClick(item.name, true);
                  }
                  // Jika tidak ada submenu, biarkan default href bekerja
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
              </a>
              {item.submenu && openDropdown === item.name && (
                <div
                  ref={(el) => (dropdownRefs.current[item.name] = el)}
                  className="absolute left-0 mt-0 w-56 origin-top-left bg-white rounded-md shadow-lg z-40" // mt-0 untuk mengurangi celah
                  onMouseEnter={() => handleMouseEnterItem(item.name)} // Batalkan penutupan saat masuk dropdown
                  onMouseLeave={handleMouseLeaveArea} // Mulai timer penutupan saat keluar dropdown
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`nav-item-${item.name}`}
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left border-b border-gray-100 last:border-b-0"
                        role="menuitem"
                        onClick={handleDropdownItemClick}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mengganti tombol menjadi 'Konsultasi Sekarang' atau 'Kontak Kami' */}
        <button className="btn btn-outline border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hidden md:inline-flex ml-4">
          Konsultasi Sekarang
        </button>

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
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-300 hover:text-yellow-400 transition-colors px-4 py-3 w-full text-center border-t border-gray-700"
                          onClick={handleDropdownItemClick}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-200 hover:text-yellow-400 transition-colors px-4 py-3 w-full text-center block"
                    onClick={handleDropdownItemClick}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            {/* Mengganti tombol mobile menjadi 'Konsultasi Sekarang' atau 'Kontak Kami' */}
            <button
              className="btn btn-warning text-black w-3/4 mt-4"
              onClick={handleDropdownItemClick}
            >
              Konsultasi Sekarang
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
