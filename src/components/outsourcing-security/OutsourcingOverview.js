'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OutsourcingOverview() {
  const sectionRef = useRef(null);
  const imagesColumnRef = useRef(null); // Ref untuk kolom kiri (kontainer gambar)
  const image1Ref = useRef(null); // Ref untuk gambar pertama
  const image2Ref = useRef(null); // Ref untuk gambar kedua
  const textColumnRef = useRef(null); // Ref untuk kolom kanan (kontainer teks)
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  // Paragraf akan diseleksi dari textColumnRef
  const listItemsContainerRef = useRef(null); // Ref untuk <ul>

  useEffect(() => {
    const elementsToAnimate = [
      sectionRef.current,
      imagesColumnRef.current,
      image1Ref.current,
      image2Ref.current,
      textColumnRef.current,
      badgeRef.current,
      titleRef.current,
      listItemsContainerRef.current,
    ];

    if (elementsToAnimate.some((el) => !el)) {
      console.warn(
        'OutsourcingOverview: One or more refs not available for animation.'
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
    const images = [image1Ref.current, image2Ref.current].filter(Boolean);
    if (images.length > 0) {
      tl.from(
        images,
        {
          opacity: 0,
          scale: 0.9,
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
            <div ref={image1Ref} className="w-[calc(50%-8px)]">
              {' '}
              {/* Wrapper untuk animasi gambar individual */}
              <Image
                src="/security1.webp"
                alt="Personel Keamanan Outsourcing Sentinel Forces"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                priority // Pertimbangkan jika salah satu gambar ini penting untuk LCP
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/400x600.png?text=Gambar+1+Error';
                }}
              />
            </div>
            <div ref={image2Ref} className="w-[calc(50%-8px)]">
              {' '}
              {/* Wrapper untuk animasi gambar individual */}
              <Image
                src="/security2.webp"
                alt="Pusat Pemantauan Keamanan Sentinel Forces"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://via.placeholder.com/400x600.png?text=Gambar+2+Error';
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
              Solusi Keamanan Anda
            </span>
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl font-bold text-white font-plus-jakarta-sans mb-6"
            >
              Outsourcing Security Profesional dan Terpercaya
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Sentinel Forces adalah solusi terpercaya untuk kebutuhan keamanan
              jangka panjang maupun jangka pendek di berbagai sektor. Kami
              menyediakan layanan outsourcing security dengan personel yang
              berpengalaman, bersertifikat Gada Pratama dan Gada Utama, serta
              dibekali pelatihan berstandar internasional melalui kerja sama
              eksklusif dengan Range 19 USA.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Percayakan kebutuhan keamanan Anda kepada kami untuk efisiensi
              biaya, akses ke keahlian terbaik, dan ketenangan pikiran.
            </p>

            <ul
              ref={listItemsContainerRef}
              className="space-y-3 text-lg text-gray-300"
            >
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Efisiensi Biaya Operasional Tanpa Kompromi Kualitas.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Akses ke Personel Keamanan Berpengalaman & Terlatih.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Fokus Penuh pada Bisnis Inti Anda, Keamanan Kami Tangani.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
