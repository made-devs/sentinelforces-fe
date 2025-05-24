'use client';

import React, { useEffect, useRef } from 'react'; // Impor useEffect dan useRef
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap'; // Impor GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

export default function BodyguardOverview() {
  // Refs untuk animasi
  const sectionRef = useRef(null);
  const imageColumnRef = useRef(null); // Ref untuk kolom gambar (kiri)
  const textColumnRef = useRef(null); // Ref untuk kolom teks (kanan)
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const listContainerRef = useRef(null); // Ref untuk <ul> poin checklist
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    const elementsToAnimate = [
      sectionRef.current,
      imageColumnRef.current,
      textColumnRef.current,
      badgeRef.current,
      titleRef.current,
      paragraphRef.current,
      listContainerRef.current,
      ctaButtonRef.current,
    ];

    if (elementsToAnimate.some((el) => !el)) {
      console.warn(
        'BodyguardOverview: One or more refs not available for animation.'
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
        0.1
      ); // Mulai sedikit setelah kolom gambar untuk efek stagger halus

    // 2. Animasi Konten di dalam Kolom Teks
    // Parameter posisi "<0.3" berarti animasi dimulai 0.3s SETELAH AWAL animasi sebelumnya (kolom teks)
    tl.from(
      badgeRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<0.3'
    ) // Mulai setelah kolom teks mulai terlihat
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3'
      ) // Overlap dengan badge
      .from(
        paragraphRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.3'
      ); // Overlap dengan judul

    const listItems = gsap.utils.toArray(listContainerRef.current.children);
    if (listItems.length > 0) {
      tl.from(
        listItems,
        {
          opacity: 0,
          x: -30, // Geser dari kiri
          duration: 0.5,
          stagger: 0.15, // Setiap item list muncul berurutan
          ease: 'power2.out',
        },
        '-=0.4'
      ); // Overlap dengan paragraf
    }

    tl.from(
      ctaButtonRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 10,
        duration: 0.6,
        ease: 'back.out(1.7)', // Efek sedikit memantul untuk tombol CTA
      },
      '-=0.2'
    ); // Muncul setelah list items

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
      className="bg-neutral-900 py-16 lg:py-24 font-open-sans"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Gambar Impactful */}
          <div ref={imageColumnRef} className="mt-8 lg:mt-0">
            <Image
              src="/bodyguard1.webp"
              alt="Bodyguard Profesional Sentinel Forces"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              priority // Pertimbangkan jika gambar ini penting untuk LCP
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/600x400/262626/888888?text=Bodyguard+Image';
              }}
            />
          </div>

          {/* Kolom Kanan: Teks Konten, Checklist & CTA */}
          <div
            ref={textColumnRef}
            className="text-center lg:text-left text-white"
          >
            <span
              ref={badgeRef}
              className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-3 block"
            >
              Perlindungan Personal Kustom
            </span>
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl font-bold font-plus-jakarta-sans mb-6"
            >
              Mengapa Memilih Bodyguard Sentinel Forces?
            </h2>
            <p
              ref={paragraphRef}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              Di dunia yang penuh ketidakpastian, perlindungan pribadi yang
              profesional bukan lagi kemewahan, melainkan kebutuhan. Sentinel
              Forces hadir untuk menjamin ketenangan pikiran Anda dengan layanan
              bodyguard yang tak tertandingi.
            </p>

            <ul
              ref={listContainerRef}
              className="space-y-3 text-lg text-gray-300 mb-10"
            >
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Personel Berpengalaman & Terlatih dalam taktik perlindungan
                  VIP dan bela diri.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Perencanaan Keamanan yang Presisi, termasuk analisis risiko
                  dan rute optimal.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Kerahasiaan dan Diskresi Tinggi, menjamin privasi klien
                  mutlak.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Kesiapan Respon Cepat 24/7 untuk setiap situasi darurat.
                </span>
              </li>
            </ul>

            <a // Tetap menggunakan <a> karena ini adalah link navigasi
              ref={ctaButtonRef}
              href="/kontak"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              KONSULTASI PERLINDUNGAN ANDA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
