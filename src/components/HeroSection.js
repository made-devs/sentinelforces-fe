"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeroSection() {
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const headlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animasi Latar Belakang
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1, ease: "expo.out" }
    );

    // Animasi Overlay
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "<"
    );

    // Animasi Headline
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "+=0.1"
    );

    // Animasi Paragraf
    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "+=0.2"
    );

    // Animasi Tombol CTA - Dipercepat
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, // Durasi dipercepat dari 0.8 menjadi 0.6
      "-=0.2" // Waktu mulai dimajukan agar sedikit overlap
    );
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white font-open-sans">
        <main
          ref={mainRef}
          className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
          <Image
            ref={imageRef}
            src="/hero.webp"
            alt="Security Background"
            priority // Prioritaskan pemuatan gambar ini
            fill
            style={{ objectFit: "cover" }}
            className="z-0 opacity-0 scale-105"
          />

          <div
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-[1] opacity-0"
          ></div>

          <div className="relative z-[2] container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
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
              <Link
                href="/kontak"
                ref={ctaRef}
                className="btn btn-warning btn-lg mt-10 text-black font-bold hover:bg-yellow-500 opacity-0"
              >
                KONSULTASI SEKARANG
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
