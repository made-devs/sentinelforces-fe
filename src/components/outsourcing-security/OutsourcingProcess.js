'use client';

import React, { useEffect, useRef } from 'react'; // Impor useEffect dan useRef
// Image tidak digunakan di komponen ini, jadi impornya bisa dihapus
// import Image from 'next/image';
import {
  FaComments,
  FaClipboardList,
  FaUsersCog,
  FaChartLine,
} from 'react-icons/fa';
import { gsap } from 'gsap'; // Impor GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

export default function OutsourcingProcess() {
  const processSteps = [
    {
      icon: FaComments,
      title: 'Konsultasi Kebutuhan',
      description:
        'Kami memulai dengan sesi konsultasi mendalam yang tersedia 24 jam bersama tim customer service kami, untuk memahami secara menyeluruh kebutuhan spesifik keamanan bisnis Anda dan tujuan pengamanan.',
    },
    {
      icon: FaClipboardList,
      title: 'Analisis & Perencanaan Solusi',
      description:
        'Tim ahli kami akan melakukan analisis risiko komprehensif, kemudian menyusun strategi keamanan yang dipersonalisasi dan rencana operasional yang detail khusus untuk lingkungan bisnis Anda.',
    },
    {
      icon: FaUsersCog,
      title: 'Implementasi & Penugasan Tim',
      description:
        'Setelah rencana disetujui, personel keamanan terbaik kami akan ditugaskan ke lokasi Anda dan mulai melaksanakan tugas sesuai protokol standar internasional, dengan dukungan penuh dari manajemen.',
    },
    {
      icon: FaChartLine,
      title: 'Pemantauan & Evaluasi Berkelanjutan',
      description:
        'Kami memastikan efektivitas layanan dengan pemantauan berkelanjutan, pelaporan berkala, dan penyesuaian strategi jika diperlukan untuk menjamin perlindungan maksimal dan adaptasi terhadap perubahan kondisi.',
    },
  ];

  // Refs untuk animasi
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridContainerRef = useRef(null); // Ref untuk kontainer grid kartu proses

  useEffect(() => {
    // Pastikan semua elemen yang direferensikan sudah ada
    const elementsToAnimate = [
      sectionRef.current,
      mainTitleRef.current,
      subtitleRef.current,
      gridContainerRef.current,
    ];

    if (elementsToAnimate.some((el) => !el)) {
      console.warn(
        'OutsourcingProcess: One or more refs not available for animation.'
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current, // Pemicu berdasarkan section utama
        start: 'top 75%', // Mulai animasi saat 75% bagian atas section masuk viewport
        toggleActions: 'play none none none', // Mainkan sekali saat masuk
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
          scale: 0.97, // Sedikit efek scale untuk kesan 'pop'
          duration: 0.6,
          stagger: 0.15, // Jeda antar kemunculan kartu
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
      ref={sectionRef}
      className="bg-white py-16 lg:py-24 font-open-sans relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          ref={mainTitleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-8"
        >
          Proses Layanan Outsourcing Security
        </h2>
        <p
          ref={subtitleRef}
          className="text-lg text-black mb-12 max-w-2xl mx-auto"
        >
          Kami telah menyederhanakan prosesnya agar Anda dapat dengan mudah
          mengakses layanan keamanan profesional yang Anda butuhkan untuk bisnis
          Anda.
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
                <p className="mt-2 text-sm text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
