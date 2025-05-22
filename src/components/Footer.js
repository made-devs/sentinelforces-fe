// Tidak perlu 'use client' karena tidak ada Hooks atau interaktivitas sisi klien

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      // Hapus ref={footerRef}
      className="relative overflow-hidden py-16 lg:py-20 text-gray-300 font-open-sans "
      style={{
        backgroundImage: "url('/hero.webp')", // Gambar background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: 'scroll' adalah default, jadi tidak perlu ditulis
      }}
    >
      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7),rgba(0,0,0,0.9),rgba(0,0,0,1))]" // Menggunakan opacity-60 untuk efek transparan agar gambar background tetap terlihat
      ></div>

      <div className="relative z-[2] py-16 lg:py-24 text-center mb-16">
        {" "}
        {/* z-[2] untuk di atas overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans mb-6">
            Siap untuk Merasa Aman dan Terlindungi?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan temukan solusi
            keamanan profesional yang tepat untuk kebutuhan personal atau bisnis
            Anda.
          </p>
          <a
            href="/kontak"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-plus-jakarta-sans font-semibold text-lg py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            HUBUNGI SENTINEL FORCES
          </a>
        </div>
      </div>

      {/* Konten Footer Utama */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
        {" "}
        {/* z-[2] untuk di atas overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Kolom 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo.webp"
              alt="Sentinel Forces Logo"
              className="h-16 mb-4"
            />
            <h5 className="text-base font-bold">Sentinel Forces</h5>
            <p className="text-sm">
              Garda Terdepan dalam Keamanan Profesional Anda.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Navigasi Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="/proses"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Proses Kerja
                </a>
              </li>
              <li>
                <a
                  href="/testimoni"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Informasi Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Kontak Kami
            </h3>
            <ul className="space-y-3">
              <li>
                Telepon:{" "}
                <a
                  href="tel:+6281234567890"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@sentinelforces.com"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  info@sentinelforces.com
                </a>
              </li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>

          {/* Kolom 4: Media Sosial & Hak Cipta */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Ikuti Kami
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="https://facebook.com/sentinelforces"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/sentinelforces"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/sentinelforces"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm">
              &copy; {currentYear} Sentinel Forces. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
