'use client'; // <-- Pastikan ini ada di baris paling atas file Anda

import React, { useRef, useEffect } from 'react';
import Image from 'next/image'; // <-- Import komponen Image dari next/image
import { gsap } from 'gsap'; // Import GSAP library

export default function HeroSection() {
  const mainRef = useRef(null); // Ref untuk elemen <main> sebagai container
  const imageRef = useRef(null); // <-- Ref baru untuk komponen Image
  const overlayRef = useRef(null); // Ref untuk overlay gelap
  const headlineRef = useRef(null); // Ref untuk elemen <h1>
  const descriptionRef = useRef(null); // Ref untuk elemen <p> deskripsi
  const ctaRef = useRef(null); // Ref untuk elemen <button> CTA

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animasi Latar Belakang (menggunakan Image component)
    tl.fromTo(
      imageRef.current, // <-- Target animasi sekarang adalah Image component
      { opacity: 0, scale: 1.05 }, // Mulai dari transparan dan sedikit zoom in
      { opacity: 1, scale: 1, duration: 1, ease: 'expo.out' } // Fade-in dan kembali ke skala normal
    );

    // Animasi Overlay: Fade-in secara bersamaan dengan animasi background
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '<'
    );

    // Animasi Headline (h1)
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '+=0.1'
    );

    // Animasi Paragraf Deskripsi (p)
    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '+=0.2'
    );

    // Animasi Tombol CTA (button)
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '+=0.2'
    );
  }, []); // Array dependensi kosong memastikan efek hanya berjalan sekali saat komponen di-mount

  return (
    <>
      {/* Container Utama */}
      <div className="min-h-screen bg-gray-900 text-white font-open-sans">
        {/* Hero Section */}
        <main
          ref={mainRef} // Ref untuk kontainer utama section
          className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" // opacity-0 dan scale-105 dihapus dari sini
        >
          {/* Komponen Image dari Next.js sebagai Background */}
          <Image
            ref={imageRef} // <-- Hubungkan ref ke Image component
            src="/Hero2.webp" // <-- Path ke gambar background Anda
            alt="Security Background" // Deskripsi alt text yang relevan
            priority // Gunakan priority untuk gambar LCP (Largest Contentful Paint)
            fill // Properti 'fill' akan membuat gambar mengisi elemen parent-nya secara absolut
            style={{ objectFit: 'cover' }} // Pastikan gambar menutupi area tanpa terdistorsi
            className="z-0 opacity-0 scale-105" // <-- Kondisi awal untuk animasi (z-index terendah)
          />

          {/* Overlay Gelap */}
          <div
            ref={overlayRef}
            // z-index ditingkatkan agar di atas gambar background, dan opacity-0 untuk animasi
            className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-[1] opacity-0"
          ></div>

          {/* Konten Hero */}
          {/* z-index ditingkatkan agar di atas overlay */}
          <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
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
