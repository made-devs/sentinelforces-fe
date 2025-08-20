'use client'; // Diperlukan karena kita menggunakan hooks (useRef, useEffect)

import React, { useEffect, useRef } from 'react';
import {
  FaComments,
  FaClipboardList,
  FaUsersCog,
  FaChartLine,
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorkProcessSection() {
  const processSteps = [
    {
      icon: FaComments,
      title: 'Konsultasi Awal',
      description:
        'Kami memulai dengan sesi konsultasi mendalam untuk memahami secara menyeluruh kebutuhan spesifik Anda, tujuan pengamanan, dan potensi risiko yang mungkin ada.',
    },
    {
      icon: FaClipboardList,
      title: 'Analisis & Perencanaan',
      description:
        'Tim ahli kami akan melakukan analisis risiko komprehensif, kemudian menyusun strategi keamanan yang dipersonalisasi dan rencana operasional yang detail.',
    },
    {
      icon: FaUsersCog,
      title: 'Implementasi Profesional',
      description:
        'Setelah rencana disetujui, personel keamanan terbaik kami akan ditugaskan dan mulai melaksanakan tugas sesuai protokol standar internasional, dengan dukungan penuh dari manajemen.',
    },
    {
      icon: FaChartLine,
      title: 'Pemantauan & Evaluasi',
      description:
        'Kami memastikan efektivitas layanan dengan pemantauan berkelanjutan, pelaporan berkala, dan penyesuaian strategi jika diperlukan untuk menjamin perlindungan maksimal.',
    },
  ];

  const sectionContentRef = useRef(null); // Ref untuk kontainer konten utama (z-[2])
  const mainTitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridContainerRef = useRef(null);

  useEffect(() => {
    // Pastikan semua elemen yang direferensikan sudah ada
    if (
      !sectionContentRef.current ||
      !mainTitleRef.current ||
      !subtitleRef.current ||
      !gridContainerRef.current
    ) {
      console.warn(
        'WorkProcessSection: One or more refs not available for animation.'
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionContentRef.current, // Pemicu berdasarkan kontainer konten
        start: 'top 80%', // Mulai animasi saat 80% bagian atas kontainer konten masuk viewport
        toggleActions: 'play none none none',
        // markers: true, // Hilangkan komentar ini untuk debugging posisi trigger
      },
    });

    // 1. Animasi Judul Utama
    tl.from(
      mainTitleRef.current,
      {
        opacity: 0,
        y: -30, // Geser dari atas
        duration: 0.8,
        ease: 'power3.out',
      },
      0
    ); // Mulai di awal timeline

    // 2. Animasi Subtitle/Paragraf Deskripsi
    tl.from(
      subtitleRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.5'
    ); // Mulai 0.5s sebelum animasi judul selesai (overlap)

    // 3. Animasi Kartu Langkah Proses (staggered)
    const cards = gsap.utils.toArray(gridContainerRef.current.children);
    if (cards.length > 0) {
      tl.from(
        cards,
        {
          opacity: 0,
          y: 50, // Geser dari bawah
          duration: 0.6,
          stagger: 0.15, // Jeda antar kartu
          ease: 'power3.out',
        },
        '-=0.4'
      ); // Mulai 0.4s sebelum animasi subtitle selesai (overlap)
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
      id="proses"
      className="py-16 lg:py-24 font-open-sans relative overflow-hidden"
      style={{
        backgroundImage: "url('/security7.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 z-[1] bg-black opacity-60"></div>

      <div
        ref={sectionContentRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-[2]"
      >
        <h2
          ref={mainTitleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans mb-8"
        >
          Proses Kerja Kami
        </h2>
        <p
          ref={subtitleRef}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Kami telah menyederhanakan prosesnya agar Anda dapat dengan mudah
          mengakses layanan keamanan profesional yang Anda butuhkan.
        </p>

        <div
          ref={gridContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-neutral-800 px-6 pb-8 pt-16 rounded-lg shadow-lg flex flex-col items-start text-left process-step-card" // Tambahkan kelas jika ingin seleksi via kelas
            >
              <div className="absolute left-6 top-0 transform -translate-y-1/2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black shadow-lg">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
