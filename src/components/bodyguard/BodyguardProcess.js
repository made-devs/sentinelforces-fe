'use client';

import React, { useEffect, useRef } from 'react'; // Impor useEffect dan useRef
// Image tidak digunakan di komponen ini, jadi impornya bisa dihapus jika tidak ada rencana penggunaan.
// import Image from 'next/image';
import {
  FaComments,
  FaClipboardList,
  FaUsersCog,
  FaChartLine,
} from 'react-icons/fa'; // Ikon untuk setiap langkah proses
import { gsap } from 'gsap'; // Impor GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

export default function BodyguardProcess() {
  const processSteps = [
    {
      icon: FaComments,
      title: 'Konsultasi Awal & Penilaian Risiko',
      description:
        'Melalui sesi konsultasi mendalam, kami memahami gaya hidup, jadwal, dan potensi risiko pribadi Anda, serta tujuan spesifik perlindungan.',
    },
    {
      icon: FaClipboardList,
      title: 'Perencanaan Keamanan & Taktik',
      description:
        'Tim ahli kami menyusun strategi perlindungan yang dipersonalisasi, termasuk perencanaan rute, protokol darurat, dan taktik diskrit yang disesuaikan.',
    },
    {
      icon: FaUsersCog,
      title: 'Penugasan Bodyguard Profesional',
      description:
        'Bodyguard terlatih kami ditugaskan dengan profil yang sesuai. Mereka akan mulai melaksanakan tugas sesuai protokol kerahasiaan dan standar internasional.',
    },
    {
      icon: FaChartLine,
      title: 'Pemantauan Situasi & Dukungan',
      description:
        'Kami memastikan perlindungan berkelanjutan melalui pemantauan situasi, pelaporan yang diskrit, dan penyesuaian strategi cepat untuk adaptasi kondisi.',
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
        'BodyguardProcess: One or more refs not available for animation.'
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
          Proses Layanan Bodyguard
        </h2>
        <p
          ref={subtitleRef}
          className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Proses kami dirancang untuk memberikan perlindungan personal yang
          efisien, efektif, dan disesuaikan dengan kebutuhan Anda.
        </p>

        <div
          ref={gridContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-neutral-800 px-6 pb-8 pt-16 rounded-lg shadow-lg flex flex-col items-start text-left process-step-card" // Kelas ditambahkan jika perlu penargetan spesifik
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
