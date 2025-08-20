'use client'; // Diperlukan karena kita menggunakan hooks (useRef, useEffect) untuk GSAP

import React, { useEffect, useRef } from 'react'; // Impor useEffect dan useRef
import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import { gsap } from 'gsap'; // Impor GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Refs untuk elemen yang akan dianimasikan
  const footerRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaParagraphRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const mainFooterGridRef = useRef(null); // Ref untuk kontainer grid utama footer

  useEffect(() => {
    // Pastikan semua elemen yang direferensikan sudah ada
    const elementsToAnimate = [
      footerRef.current,
      ctaTitleRef.current,
      ctaParagraphRef.current,
      ctaButtonRef.current,
      mainFooterGridRef.current,
    ];

    if (elementsToAnimate.some((el) => !el)) {
      console.warn('Footer: One or more refs not available for animation.');
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current, // Pemicu berdasarkan elemen footer utama
        start: 'top 85%', // Mulai animasi saat 85% bagian atas footer masuk viewport
        toggleActions: 'play none none none', // Mainkan sekali saat masuk
        // markers: true, // Hilangkan komentar ini untuk debugging posisi trigger
      },
    });

    // 1. Animasi Bagian CTA
    tl.from(
      ctaTitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      },
      0
    ) // Mulai di awal timeline
      .from(
        ctaParagraphRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.6'
      ) // Overlap dengan animasi judul CTA
      .from(
        ctaButtonRef.current,
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          ease: 'back.out(1.7)', // Efek sedikit memantul
        },
        '-=0.5'
      ); // Overlap dengan animasi paragraf CTA

    // 2. Animasi Kolom-Kolom Footer Utama (Staggered)
    const columns = gsap.utils.toArray(mainFooterGridRef.current.children);
    if (columns.length > 0) {
      tl.from(
        columns,
        {
          opacity: 0,
          y: 50, // Geser dari bawah
          duration: 0.7,
          stagger: 0.2, // Jeda antar kolom
          ease: 'power3.out',
        },
        '-=0.5'
      ); // Mulai saat animasi tombol CTA sedang berjalan atau setelahnya
    }

    // Cleanup timeline saat komponen unmount
    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef} // Tambahkan ref ke elemen footer
      className="relative overflow-hidden py-16 lg:py-20 text-gray-300 font-open-sans"
      style={{
        backgroundImage: "url('/hero.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7),rgba(0,0,0,0.9),rgba(0,0,0,1))]"></div>

      {/* Bagian Panggilan Aksi Akhir (CTA Section) */}
      <div className="relative z-[2] py-16 lg:py-24 text-center mb-16">
        {' '}
        {/* Mungkin tidak perlu mb-16 jika sudah ada py di footer utama */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={ctaTitleRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans mb-6"
          >
            Siap untuk Merasa Aman dan Terlindungi?
          </h2>
          <p
            ref={ctaParagraphRef}
            className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Hubungi kami hari ini untuk konsultasi gratis dan temukan solusi
            keamanan profesional yang tepat untuk kebutuhan personal atau bisnis
            Anda.
          </p>
          <div ref={ctaButtonRef}>
            <Link
              href="/kontak"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-plus-jakarta-sans font-semibold text-lg py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              HUBUNGI SENTINEL FORCES
            </Link>
          </div>
        </div>
      </div>

      {/* Konten Footer Utama */}
      <div
        ref={mainFooterGridRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Kolom 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start footer-column">
            {' '}
            {/* Tambah kelas jika ingin seleksi lebih spesifik */}
            <Image
              src="/logo.webp"
              alt="Sentinel Forces Logo"
              width={100}
              height={64}
              className="mb-4"
            />
            <h5 className="text-base font-bold">Sentinel Forces</h5>
            <p className="text-sm">
              Garda Terdepan dalam Keamanan Profesional Anda.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="footer-column">
            <h3 className="text-lg font-semibold text-white mb-6">
              Navigasi Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/#layanan"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/#proses"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Proses Kerja
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimoni"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Testimoni
                </Link>
              </li>
              <li>
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
          <div className="footer-column">
            <h3 className="text-lg font-semibold text-white mb-6">
              Kontak Kami
            </h3>
            <ul className="space-y-3">
              <li>
                Telepon:{' '}
                <a
                  href="tel:+6282210000522"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  +62 822-10000-522
                </a>
              </li>
              <li>
                Email:{' '}
                <a
                  href="mailto:sentinelforcesofficial@gmail.com"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  sentinelforcesofficial@gmail.com
                </a>
              </li>
              <li>
                Alamat: Jl. Bypass Ngurah Rai no 18x Tuban, Kuta Selatan,
                Badung, Bali.
              </li>
            </ul>
          </div>

          {/* Kolom 4: Media Sosial & Hak Cipta */}
          <div className="footer-column">
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
              <a
                href="https://www.tiktok.com/@sentinelforces.id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaTiktok className="h-6 w-6" />
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
