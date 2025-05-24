'use client'; // Diperlukan karena kita menggunakan hooks (useRef, useEffect)

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// Icon react-icons/fa tidak digunakan secara langsung di JSX ini, bisa dihapus jika tidak ada penggunaan lain.
// import { FaShieldAlt, FaClock, FaUsers, FaStar, FaBolt, FaGlobeAmericas } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SiapaKamiSection() {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const listContainerRef = useRef(null); // Ref untuk <ul>
  const ctaButtonRef = useRef(null);
  const imageWrapperRef = useRef(null); // Ref untuk div pembungkus gambar di kolom kanan
  const bottomBorderRef = useRef(null);

  useEffect(() => {
    const elementsToAnimate = [
      sectionRef.current,
      leftColumnRef.current,
      rightColumnRef.current,
      badgeRef.current,
      titleRef.current,
      paragraphRef.current,
      listContainerRef.current,
      ctaButtonRef.current,
      imageWrapperRef.current,
      bottomBorderRef.current,
    ];

    if (elementsToAnimate.some((el) => !el)) {
      console.warn(
        'SiapaKamiSection: One or more refs not available for animation.'
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%', // Mulai animasi sedikit lebih awal
        toggleActions: 'play none none none',
        // markers: true, // Hilangkan komentar untuk debugging
      },
    });

    // 1. Animasi kolom kiri dan kanan muncul bersamaan (atau dengan sedikit stagger)
    tl.from(
      [leftColumnRef.current, rightColumnRef.current],
      {
        opacity: 0,
        y: 60, // Geser dari bawah
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2, // Kolom kanan muncul sedikit setelah kiri
      },
      0 // Mulai di awal timeline
    );

    // 2. Animasi konten di dalam Kolom Kiri (muncul setelah kolomnya mulai terlihat)
    // Parameter posisi "<-0.5" berarti mulai 0.5s dari *awal* animasi sebelumnya di timeline
    // atau bisa juga "-=0.x" untuk relatif terhadap *akhir* animasi sebelumnya
    tl.from(
      badgeRef.current,
      { opacity: 0, y: -20, duration: 0.5, ease: 'power2.out' },
      '-=0.6'
    ) // Sesuaikan timing
      .from(
        titleRef.current,
        { opacity: 0, y: -20, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .from(
        paragraphRef.current,
        { opacity: 0, y: 20, duration: 0.7, ease: 'power2.out' },
        '-=0.4'
      );

    const listItems = gsap.utils.toArray(listContainerRef.current.children);
    if (listItems.length > 0) {
      tl.from(
        listItems,
        {
          opacity: 0,
          x: -30, // Geser dari kiri
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '-=0.5'
      );
    }

    tl.from(
      ctaButtonRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 10,
        duration: 0.6,
        ease: 'back.out(1.7)',
      },
      '-=0.3'
    );

    // 3. Animasi Gambar di Kolom Kanan (muncul bersamaan atau setelah kolom kanan)
    // Pastikan imageWrapperRef menargetkan elemen yang benar
    tl.from(
      imageWrapperRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.9,
        ease: 'power3.out',
      },
      '-=1.2'
    ); // Sesuaikan timing agar sinkron dengan teks kiri, atau setelah kolom kanan mulai

    // 4. Animasi Border Bawah
    tl.from(
      bottomBorderRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'sine.out',
      },
      '-=0.5'
    ); // Muncul menjelang akhir

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black pt-16 font-open-sans lg:py-24 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Teks dan Poin-poin dengan Ikon Cek */}
          <div ref={leftColumnRef} className="text-center lg:text-left">
            <span
              ref={badgeRef}
              className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-3 block"
            >
              Berintegritas & Profesional
            </span>
            <h2
              ref={titleRef}
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans mb-6"
            >
              Mengenal Sentinel Forces
            </h2>
            <p
              ref={paragraphRef}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              Sentinel Forces adalah perusahaan jasa keamanan terpercaya yang
              berkomitmen untuk menyediakan solusi perlindungan superior.
              Didirikan dengan visi menjadi garda terdepan di industri keamanan,
              kami hadir untuk menciptakan rasa aman dan perlindungan maksimal
              bagi Anda, aset bisnis, dan setiap event spesial.
            </p>

            <ul
              ref={listContainerRef}
              className="space-y-3 text-lg text-gray-300"
            >
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Personel Berpengalaman & Terlatih dalam taktik perlindungan
                  VIP serta kemampuan bela diri.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Standar Keamanan Internasional melalui program pelatihan
                  eksklusif bekerja sama dengan Range 19 USA.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Solusi Keamanan Komprehensif untuk outsourcing security,
                  bodyguard pribadi, hingga pengamanan konser dan event.
                </span>
              </li>
            </ul>

            <div ref={ctaButtonRef} className="mt-10">
              <a // Menggunakan <a> karena href bisa jadi ke halaman lain atau section ID
                href="/tentang-kami"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                PELAJARI LEBIH LANJUT
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div ref={rightColumnRef} className="mt-8 lg:mt-0">
            {' '}
            {/* Tambahkan ref pada wrapper kolom kanan */}
            <div ref={imageWrapperRef}>
              {' '}
              {/* Tambahkan wrapper untuk gambar agar animasi lebih mudah */}
              <Image
                src="/hero.webp"
                alt="Tim Keamanan Profesional Sentinel Forces"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                priority // Pertimbangkan jika gambar ini penting untuk LCP
                onError={(e) => {
                  e.currentTarget.src =
                    'https://placehold.co/600x400/262626/888888?text=Image+Placeholder';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={bottomBorderRef}
        className="absolute bottom-0 left-0 w-full z-10"
      >
        <Image
          src="/border.webp"
          alt="Section Divider"
          width={1920}
          height={100}
          className="w-full h-auto block"
          onError={(e) => {
            e.currentTarget.src = '/placeholder-image.webp';
          }}
        />
      </div>
    </section>
  );
}
