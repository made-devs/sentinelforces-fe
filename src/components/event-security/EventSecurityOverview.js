'use client';

import React, { useEffect, useRef } from 'react'; // Impor useEffect dan useRef
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap'; // Impor GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

export default function EventSecurityOverview() {
  // Refs untuk animasi
  const sectionRef = useRef(null);
  const imagesColumnRef = useRef(null); // Ref untuk kolom kiri (kontainer gambar)
  const image1WrapperRef = useRef(null); // Ref untuk wrapper gambar pertama
  const image2WrapperRef = useRef(null); // Ref untuk wrapper gambar kedua
  const textColumnRef = useRef(null); // Ref untuk kolom kanan (kontainer teks)
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  // Paragraf akan diseleksi dari textColumnRef
  const listItemsContainerRef = useRef(null); // Ref untuk <ul>

  useEffect(() => {
    const elementsToAnimate = [
      sectionRef.current,
      imagesColumnRef.current,
      image1WrapperRef.current,
      image2WrapperRef.current,
      textColumnRef.current,
      badgeRef.current,
      titleRef.current,
      listItemsContainerRef.current,
    ];

    if (elementsToAnimate.some((el) => !el)) {
      console.warn(
        'EventSecurityOverview: One or more refs not available for animation.'
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

    // 1. Animasi Kolom Kiri (Gambar) dan Kolom Kanan (Teks)
    tl.from(
      imagesColumnRef.current,
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

    // 2. Animasi Gambar di dalam Kolom Kiri (staggered setelah kolomnya muncul)
    // Parameter "<0.3" berarti animasi dimulai 0.3s SETELAH AWAL animasi sebelumnya (kolom gambar)
    const imagesToAnimate = [
      image1WrapperRef.current,
      image2WrapperRef.current,
    ].filter(Boolean);
    if (imagesToAnimate.length > 0) {
      tl.from(
        imagesToAnimate,
        {
          opacity: 0,
          scale: 0.9, // Sedikit efek scale
          duration: 0.7,
          stagger: 0.2, // Gambar kedua muncul sedikit setelah gambar pertama
          ease: 'power3.out',
        },
        '<0.3'
      ); // Mulai setelah kolom gambar mulai terlihat
    }

    // 3. Animasi Konten di dalam Kolom Teks (setelah kolomnya mulai muncul)
    tl.from(
      badgeRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.out',
      },
      '<0.2'
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
      ); // Overlap dengan badge

    const paragraphs = gsap.utils.toArray(
      textColumnRef.current.querySelectorAll('p.text-lg')
    );
    if (paragraphs.length > 0) {
      tl.from(
        paragraphs,
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '-=0.3'
      ); // Overlap dengan judul
    }

    const listItems = gsap.utils.toArray(
      listItemsContainerRef.current.children
    );
    if (listItems.length > 0) {
      tl.from(
        listItems,
        {
          opacity: 0,
          x: -30, // Geser dari kiri
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.2'
      ); // Overlap dengan paragraf
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
      className="bg-neutral-900 py-16 lg:py-24 font-open-sans"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Dua Gambar */}
          <div
            ref={imagesColumnRef}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <div ref={image1WrapperRef} className="w-[calc(50%-8px)]">
              {' '}
              {/* Wrapper untuk Image */}
              <Image
                src="/event1.webp"
                alt="Pengendalian Massa Konser oleh Sentinel Forces"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                priority // Pertimbangkan jika gambar ini penting untuk LCP
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/400x600.png?text=Event+Image+1+Fallback';
                }}
              />
            </div>
            <div ref={image2WrapperRef} className="w-[calc(50%-8px)]">
              {' '}
              {/* Wrapper untuk Image */}
              <Image
                src="/event2.webp"
                alt="Pengamanan Artis & VIP Event oleh Sentinel Forces"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/400x600.png?text=Event+Image+2+Fallback';
                }}
              />
            </div>
          </div>

          {/* Kolom Kanan: Teks Konten */}
          <div ref={textColumnRef} className="text-center lg:text-left">
            <span
              ref={badgeRef}
              className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-3 block"
            >
              Pengamanan Event & Konser
            </span>
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl font-bold text-white font-plus-jakarta-sans mb-6"
            >
              Profesional, Terstruktur, Respons Cepat
            </h2>
            {/* Paragraf akan diseleksi oleh GSAP dari dalam textColumnRef */}
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Sentinel Forces menghadirkan layanan pengamanan konser dan event
              skala kecil hingga besar dengan pendekatan profesional dan
              terstruktur. Kami memastikan setiap acara berlangsung aman dan
              lancar, dari pengendalian massa hingga pengamanan artis/VIP.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Percayakan keamanan event Anda kepada tim ahli kami untuk
              manajemen risiko yang efektif, perencanaan detail, dan respons
              cepat terhadap potensi gangguan, demi pengalaman tak terlupakan.
            </p>

            <ul
              ref={listItemsContainerRef}
              className="space-y-3 text-lg text-gray-300"
            >
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>Pengendalian Massa Efektif & Strategis.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>Pengamanan Artis & VIP Terstruktur.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>Respons Cepat Terhadap Potensi Gangguan.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
