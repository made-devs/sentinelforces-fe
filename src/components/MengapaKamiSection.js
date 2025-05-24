'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  FaClock,
  FaUsers,
  FaStar,
  FaBolt,
  FaGlobeAmericas,
  FaShieldAlt, // Tetap diimpor sesuai kode Anda
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger kembali

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

export default function MengapaKamiSection() {
  const servicesData = [
    {
      icon: FaClock,
      title: 'Tersedia 24 Jam Nonstop',
      description:
        'Tim keamanan kami siap siaga penuh setiap saat, memastikan perlindungan tanpa henti kapan pun Anda membutuhkan.',
    },
    {
      icon: FaUsers,
      title: 'Tim Profesional dan Terlatih',
      description:
        'Setiap anggota tim kami adalah profesional berpengalaman yang telah melalui pelatihan intensif untuk menghadapi berbagai situasi keamanan.',
    },
    {
      icon: FaStar,
      title: 'Keamanan VIP & Eksekutif',
      description:
        'Kami menyediakan perlindungan khusus yang disesuaikan untuk individu berprofil tinggi dan eksekutif, menjamin privasi dan keselamatan optimal.',
    },
    {
      icon: FaBolt,
      title: 'Respon Cepat & Taktis',
      description:
        'Dilatih untuk bertindak cepat dan strategis dalam setiap kondisi, tim kami menjamin penanganan situasi darurat yang efektif dan efisien.',
    },
    {
      icon: FaGlobeAmericas,
      title: 'Standar Keamanan Internasional',
      description:
        'Layanan kami berpegang teguh pada protokol dan standar keamanan kelas dunia, memastikan kualitas perlindungan yang diakui secara global.',
    },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const borderImageRef = useRef(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !gridRef.current ||
      !borderImageRef.current
    ) {
      return;
    }

    // Buat timeline GSAP dengan ScrollTrigger yang terkait dengannya
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current, // Pemicu utama adalah section itu sendiri
        start: 'top 80%', // Mulai animasi saat 80% bagian atas section masuk viewport
        toggleActions: 'play none none none', // Mainkan sekali saat masuk
        // markers: true, // Hilangkan komentar ini untuk debugging posisi trigger
      },
    });

    // 1. Animasi untuk section dan border image muncul
    // Semua animasi sekarang akan mengikuti pemicu dari timeline utama
    tl.fromTo(
      [sectionRef.current, borderImageRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      0 // Mulai animasi ini di detik ke-0 timeline
    );

    // 2. Animasi untuk judul, sedikit overlap dengan animasi section
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.6' // Mulai 0.6 detik sebelum animasi sebelumnya selesai (overlap)
    );

    // 3. Animasi untuk kartu layanan (staggered), overlap dengan animasi judul
    const cards = gsap.utils.toArray(gridRef.current.children);
    if (cards.length > 0) {
      tl.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15, // Efek muncul satu per satu dengan interval 0.15s
        },
        '-=0.5' // Mulai 0.5 detik sebelum animasi sebelumnya selesai (overlap)
      );
    }

    // Cleanup function untuk membunuh timeline dan ScrollTrigger-nya saat komponen unmount
    return () => {
      if (tl) {
        tl.kill(); // Ini akan membunuh timeline, semua animasi di dalamnya, dan ScrollTrigger yang terkait
      }
    };
  }, []); // Dependency array kosong agar useEffect berjalan sekali saat mount

  return (
    <section
      ref={sectionRef}
      className="bg-black pt-16 font-open-sans lg:py-24 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          ref={titleRef}
          className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans"
        >
          Mengapa Memilih Sentinel Forces?
        </h2>

        <div
          ref={gridRef}
          className="mt-[6rem] pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            if (!IconComponent) {
              console.error(
                `IconComponent is undefined for service: ${service.title}`
              );
              return null;
            }
            return (
              <div
                key={index}
                className={`
                  relative bg-neutral-800 px-6 pb-8 pt-16 rounded-lg shadow-lg
                  w-11/12 mx-auto 
                  sm:w-full sm:mx-0
                  service-card 
                `}
              >
                <div className="absolute left-6 top-0 transform -translate-y-1/2">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black shadow-lg">
                    <IconComponent className="h-8 w-8" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        ref={borderImageRef}
        className="absolute bottom-0 left-0 w-full z-10"
      >
        <Image
          src="/border.webp"
          alt="Section Divider"
          width={1920}
          height={100}
          className="w-full h-auto block"
          priority
          onError={(e) => {
            const currentTarget = e.currentTarget;
            currentTarget.src = '/placeholder-image.webp';
          }}
        />
      </div>
    </section>
  );
}
