// Tidak perlu 'use client' karena tidak ada Hooks atau interaktivitas sisi klien (GSAP dll sudah dihapus)

import React from 'react';
import Link from 'next/link'; // <-- Import Link dari next/link
import Image from 'next/image'; // <-- Import Image dari next/image
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function FooterOnly() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Konten Footer Utama */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-[2]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Kolom 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            {/* Menggunakan komponen Image dari next/image */}
            <Image
              src="/logo.webp"
              alt="Sentinel Forces Logo"
              width={100} // <-- Sesuaikan lebar asli logo Anda
              height={64} // <-- Sesuaikan tinggi asli logo Anda (misal 64px untuk h-16)
              className="mb-4" // Kelas mb-4 tetap di Image
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
                {/* Menggunakan Link untuk navigasi internal */}
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Beranda
                </Link>
              </li>
              <li>
                {/* Menggunakan Link untuk navigasi internal */}
                <Link
                  href="/layanan"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Layanan
                </Link>
              </li>
              <li>
                {/* Menggunakan Link untuk navigasi internal */}
                <Link
                  href="/proses"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Proses Kerja
                </Link>
              </li>
              <li>
                {/* Menggunakan Link untuk navigasi internal */}
                <Link
                  href="/testimoni"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Testimoni
                </Link>
              </li>
              <li>
                {/* Menggunakan Link untuk navigasi internal */}
                <Link
                  href="/kontak"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Hubungi Kami
                </Link>
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
                Telepon: {/* <a> untuk link eksternal (tel:) tetap digunakan */}
                <a
                  href="tel:+6282210000522"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  +62 822-10000-522
                </a>
              </li>
              <li>
                Email:{' '}
                {/* <a> untuk link eksternal (mailto:) tetap digunakan */}
                <a
                  href="mailto:sentinelforcesofficial@gmail.com"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  sentinelforcesofficial@gmail.com
                </a>
              </li>
              <li>
                Alamat: Jl. Bypass Ngurah Rai. 18X Tuban, Kec Kuta, Kabupaten
                Badung, Bali 80361
              </li>
            </ul>
          </div>

          {/* Kolom 4: Media Sosial & Hak Cipta */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Ikuti Kami
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              {/* <a> untuk link eksternal (media sosial) tetap digunakan */}
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
