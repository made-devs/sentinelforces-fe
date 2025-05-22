"use client"; // <-- Pastikan ini ada di baris paling atas file Anda

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP library

export default function HeroSection() {
  const mainRef = useRef(null); // Ref untuk elemen <main> (untuk animasi background)
  const overlayRef = useRef(null); // Ref untuk overlay gelap
  const headlineRef = useRef(null); // Ref untuk elemen <h1>
  const descriptionRef = useRef(null); // Ref untuk elemen <p> deskripsi
  const ctaRef = useRef(null); // Ref untuk elemen <button> CTA

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animasi Latar Belakang (background) muncul (fade-in) dan zoom-in secara bersamaan dari keadaan blank
    tl.fromTo(
      mainRef.current,
      { opacity: 0, scale: 1.05 }, // MULAI DARI: benar-benar transparan (opacity: 0) dan sedikit diperbesar (scale: 1.05)
      { opacity: 1, scale: 1, duration: 2, ease: "expo.out" } // MENUJU KE: sepenuhnya terlihat (opacity: 1) dan skala normal (scale: 1)
    );

    // Animasi Overlay: Fade-in secara bersamaan dengan animasi background (mainRef)
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 }, // Overlay mulai dari transparan
      { opacity: 1, duration: 2 },
      "<" // <-- Target opacity diubah menjadi 0.7 agar lebih terlihat
    );

    // Animasi Headline (h1)
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 }, // Mulai dari tidak terlihat dan sedikit di bawah
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "+=0.5" // Dimulai 0.5 detik setelah animasi background/overlay selesai
    );

    // Animasi Paragraf Deskripsi (p)
    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "+=0.2" // Dimulai 0.2 detik setelah headline
    );

    // Animasi Tombol CTA (button)
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "+=0.2" // Dimulai 0.2 detik setelah deskripsi, dengan efek 'memantul'
    );
  }, []);

  return (
    <>
      {/* Container Utama */}
      <div className="min-h-screen bg-gray-900 text-white font-open-sans">
        {/* Hero Section */}
        <main
          ref={mainRef}
          className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden opacity-0 scale-105"
          style={{
            backgroundImage: "url('/bodyguard.jpg')", // Ganti dengan URL gambar background Anda
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay Gelap - Hapus bg-black/10, biarkan gradien dan opacity yang bekerja */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"
          ></div>

          {/* Konten Hero */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            {/* Kolom Teks */}
            <div className="text-center md:text-left">
              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white font-plus-jakarta-sans leading-tight opacity-0"
              >
                DISIPLIN, PROFESIONALISME, DAN INTEGRITAS DALAM SETIAP MISI
              </h1>
              <p ref={descriptionRef} className="max-w-xl mt-4 opacity-0">
                Kami menyediakan layanan keamanan komprehensif, dari
                perlindungan personal hingga pengamanan acara berskala besar,
                didukung oleh tim ahli yang berdedikasi.
              </p>
              <button
                ref={ctaRef}
                className="btn btn-warning btn-lg mt-10 text-black font-bold hover:bg-yellow-500 opacity-0"
              >
                KONSULTASI SEKARANG
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
