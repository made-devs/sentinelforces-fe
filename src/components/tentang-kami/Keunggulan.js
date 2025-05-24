'use client'; // Diperlukan karena kita menggunakan hooks (useRef, useEffect)

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Keunggulan() {
  const sectionRef = useRef(null);
  const imageColumnRef = useRef(null); // Ref untuk kolom gambar (kiri)
  const textColumnRef = useRef(null); // Ref untuk kolom teks (kanan)
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  // Untuk paragraf, kita bisa mengambilnya sebagai children dari textColumnRef atau beri ref individual jika perlu kontrol lebih

  useEffect(() => {
    const elementsToAnimate = [
      sectionRef.current,
      imageColumnRef.current,
      textColumnRef.current,
      badgeRef.current,
      titleRef.current,
    ];

    if (elementsToAnimate.some((el) => !el)) {
      console.warn(
        'KeunggulanSection: One or more refs not available for animation.'
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%', // Mulai animasi saat 75% bagian atas section masuk viewport
        toggleActions: 'play none none none',
        // markers: true, // Hilangkan komentar untuk debugging posisi trigger
      },
    });

    // 1. Animasi Kolom Gambar (kiri) dan Kolom Teks (kanan)
    tl.from(
      imageColumnRef.current,
      {
        opacity: 0,
        x: -80, // Geser dari kiri
        duration: 0.8,
        ease: 'power3.out',
      },
      0
    ) // Mulai di awal timeline
      .from(
        textColumnRef.current,
        {
          opacity: 0,
          x: 80, // Geser dari kanan
          duration: 0.8,
          ease: 'power3.out',
        },
        0
      ); // Mulai bersamaan dengan kolom gambar

    // 2. Animasi Konten di dalam Kolom Teks (setelah kolomnya mulai muncul)
    // Parameter posisi "<0.3" berarti animasi dimulai 0.3s SETELAH AWAL animasi sebelumnya di timeline (yaitu kolom teks)
    tl.from(
      badgeRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<0.3'
    ) // Mulai setelah kolom teks mulai masuk
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3'
      ); // Overlap dengan badge

    // Ambil semua elemen <p> di dalam textColumnRef untuk dianimasikan secara berurutan
    const paragraphs = gsap.utils.toArray(
      textColumnRef.current.querySelectorAll('p.text-lg')
    );
    if (paragraphs.length > 0) {
      tl.from(
        paragraphs,
        {
          opacity: 0,
          y: 20, // Geser dari bawah
          duration: 0.5,
          stagger: 0.15, // Setiap paragraf muncul berurutan
          ease: 'power2.out',
        },
        '-=0.3'
      ); // Overlap dengan judul
    }

    // Cleanup timeline saat komponen unmount
    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 lg:py-24 font-open-sans"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Gambar yang Berdampak */}
          <div ref={imageColumnRef} className="mt-8 lg:mt-0">
            <Image
              src="/bodyguard&client.webp"
              alt="Pendekatan dan Keunggulan Sentinel Forces"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              priority // Pertimbangkan jika gambar ini penting untuk LCP
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/600x400/e2e8f0/333333?text=Image+Placeholder';
              }}
            />
          </div>

          {/* Kolom Kanan: Teks Konten */}
          <div ref={textColumnRef} className="text-center lg:text-left">
            <span
              ref={badgeRef}
              className="text-sm font-semibold text-yellow-500 tracking-wider uppercase mb-3 block"
            >
              Keunggulan Kami
            </span>
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl font-bold text-black font-plus-jakarta-sans mb-6"
            >
              Keamanan Adaptif, Presisi, dan Global
            </h2>
            {/* Paragraf akan diseleksi oleh GSAP dari dalam textColumnRef */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Kami memahami bahwa setiap kebutuhan keamanan bersifat unik. Oleh
              karena itu, Sentinel Forces menerapkan pendekatan adaptif,
              merancang solusi yang disesuaikan secara presisi untuk setiap
              klien, dari individu hingga korporasi besar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Didukung oleh kemitraan dengan lembaga pelatihan taktis
              internasional seperti Range 19 USA, kami menjamin standar
              operasional global dan pemanfaatan teknologi keamanan terkini
              dalam setiap misi.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Integritas dan kepercayaan adalah landasan setiap interaksi,
              memastikan kerahasiaan dan ketenangan pikiran yang mutlak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
