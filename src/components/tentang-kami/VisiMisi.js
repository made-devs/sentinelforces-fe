'use client'; // Diperlukan karena kita menggunakan hooks (useRef, useEffect)

import React, { useEffect, useRef } from 'react';
// Icon tidak digunakan di JSX ini, jadi tidak perlu diimpor kecuali ada penggunaan lain
// import { FaCheckCircle } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VisiMisi() {
  const visiStatement =
    'Menjadi garda terdepan dalam industri keamanan profesional yang terpercaya, tangguh, dan berstandar internasional, serta menciptakan rasa aman dan perlindungan maksimal di setiap lini kehidupan.';

  const misiPoints = [
    'Menyediakan layanan keamanan komprehensif dengan personel berpengalaman dan terlatih.',
    'Menerapkan standar operasional global dan teknologi terkini dalam setiap layanan.',
    'Membangun kemitraan strategis dengan klien berdasarkan kepercayaan, integritas, dan hasil.',
    'Mengembangkan kompetensi personel melalui pelatihan berstandar internasional.',
  ];

  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const visionCardRef = useRef(null);
  const missionCardRef = useRef(null);
  const visionTitleRef = useRef(null);
  const visionTextRef = useRef(null);
  const missionTitleRef = useRef(null);
  const missionListRef = useRef(null); // Ref untuk <ul> poin misi

  useEffect(() => {
    const elementsToAnimate = [
      sectionRef.current,
      mainTitleRef.current,
      visionCardRef.current,
      missionCardRef.current,
      visionTitleRef.current,
      visionTextRef.current,
      missionTitleRef.current,
      missionListRef.current,
    ];

    if (elementsToAnimate.some((el) => !el)) {
      console.warn(
        'VisiMisiSection: One or more refs not available for animation.'
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

    // 1. Animasi Judul Utama Section
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

    // 2. Animasi Kartu Visi dan Misi (muncul bersamaan dengan stagger)
    tl.from(
      [visionCardRef.current, missionCardRef.current],
      {
        opacity: 0,
        y: 50, // Geser dari bawah
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.2, // Kartu Misi muncul sedikit setelah Visi
      },
      '-=0.5'
    ); // Mulai 0.5s sebelum animasi judul selesai

    // 3. Animasi Konten di dalam Kartu Visi
    // Parameter "<0.3" berarti animasi dimulai 0.3s SETELAH AWAL animasi sebelumnya (kartu visi/misi)
    tl.from(
      visionTitleRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<0.3'
    ) // Dimulai setelah kartu visi mulai muncul
      .from(
        visionTextRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3'
      ); // Dimulai sebelum judul visi selesai, untuk efek yang lebih mengalir

    // 4. Animasi Konten di dalam Kartu Misi
    // Ditargetkan untuk muncul setelah konten visi atau bersamaan dengan timing yang sesuai
    tl.from(
      missionTitleRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<0.4'
    ); // Mungkin perlu disesuaikan agar muncul setelah judul visi atau saat kartu misi sudah cukup terlihat

    const missionListItems = gsap.utils.toArray(
      missionListRef.current.children
    );
    if (missionListItems.length > 0) {
      tl.from(
        missionListItems,
        {
          opacity: 0,
          x: -20, // Geser dari kiri
          duration: 0.4,
          stagger: 0.15, // Setiap poin misi muncul berurutan
          ease: 'power2.out',
        },
        '-=0.3'
      ); // Dimulai sebelum judul misi selesai
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          ref={mainTitleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-12"
        >
          Visi & Misi Kami
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kolom Visi */}
          <div
            ref={visionCardRef}
            className="text-center md:text-left p-6 border-l-4 border-yellow-400 rounded-lg shadow-md bg-gray-50"
          >
            <h3
              ref={visionTitleRef}
              className="text-3xl font-bold text-black font-plus-jakarta-sans mb-4"
            >
              Visi Kami
            </h3>
            <p
              ref={visionTextRef}
              className="text-lg text-gray-700 leading-relaxed"
            >
              {visiStatement}
            </p>
          </div>

          {/* Kolom Misi */}
          <div
            ref={missionCardRef}
            className="text-center md:text-left p-6 border-l-4 border-yellow-400 rounded-lg shadow-md bg-gray-50"
          >
            <h3
              ref={missionTitleRef}
              className="text-3xl font-bold text-black font-plus-jakarta-sans mb-4"
            >
              Misi Kami
            </h3>
            <ul
              ref={missionListRef}
              className="text-lg text-gray-700 space-y-3 leading-relaxed list-disc list-inside"
            >
              {misiPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
