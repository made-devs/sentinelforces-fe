'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const badgeTextRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const buttonRef = useRef(null);
  const svgWavesRef = useRef(null);

  useEffect(() => {
    const elements = [
      sectionRef.current,
      leftColumnRef.current,
      rightColumnRef.current,
      badgeTextRef.current,
      imageWrapperRef.current,
      titleRef.current,
      paragraph1Ref.current,
      paragraph2Ref.current,
      buttonRef.current,
      svgWavesRef.current,
    ];

    if (elements.some((el) => !el)) {
      console.warn(
        'JourneySection: One or more refs not available for animation.'
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(
      [leftColumnRef.current, rightColumnRef.current],
      {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      },
      0
    );

    tl.from(
      badgeTextRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    tl.from(
      imageWrapperRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    tl.from(
      titleRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
      },
      '-=0.6'
    );

    const paragraphs = [paragraph1Ref.current, paragraph2Ref.current].filter(
      Boolean
    );
    if (paragraphs.length > 0) {
      tl.from(
        paragraphs,
        {
          opacity: 0,
          y: 25,
          duration: 0.5,
          stagger: 0.2,
          ease: 'circ.out',
        },
        '-=0.4'
      );
    }

    tl.from(
      buttonRef.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.85,
        duration: 0.6,
        ease: 'back.out(1.7)',
      },
      '-=0.3'
    );

    tl.from(
      svgWavesRef.current,
      {
        opacity: 0,
        y: 10,
        duration: 0.8,
        ease: 'sine.inOut',
      },
      '-=0.5'
    );

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 lg:py-32 text-neutral-800" // Menambah padding atas dan bawah
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 'items-center' ini penting untuk menyejajarkan kedua kolom secara vertikal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri (SUDAH DIPERBAIKI) */}
          <div ref={leftColumnRef} className="relative">
            {/* Teks badge sekarang diposisikan secara absolut */}
            <div ref={badgeTextRef} className="absolute -top-10 left-0 z-10">
              <span className="text-sm font-semibold text-yellow-500 tracking-wider uppercase">
                Berintegritas & PROFESSIONAL
              </span>
            </div>

            {/* Wrapper gambar sekarang menjadi elemen utama di kolom ini */}
            <div ref={imageWrapperRef}>
              <Image
                src="/security3.webp"
                alt="Layanan Profesional Sentinel Forces"
                width={600}
                height={350}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                priority
                onError={(e) => {
                  e.currentTarget.src =
                    'https://placehold.co/600x350/e2e8f0/333333?text=Gagal+Memuat+Gambar';
                }}
              />
            </div>
          </div>

          {/* Kolom Kanan */}
          <div
            ref={rightColumnRef}
            className="bg-orange-50 p-8 lg:p-12 rounded-lg shadow-xl relative overflow-hidden font-open-sans"
          >
            <div className="space-y-8 relative z-10">
              <div>
                <h3
                  ref={titleRef}
                  className="text-2xl font-extrabold text-black font-plus-jakarta-sans"
                >
                  PROFESSIONAL PARTNER PRIVATE SERVICES YOU CAN TRUST
                </h3>
                <p ref={paragraph1Ref} className="mt-2 text-sm text-gray-500">
                  Sentinel Forces adalah perusahaan jasa keamanan terpercaya
                  yang menyediakan layanan outsourcing security, bodyguard
                  pribadi, pengamanan event & aset bisnis, serta pelatihan
                  keamanan profesional.
                </p>
              </div>
              <div>
                <p ref={paragraph2Ref} className="mt-2 text-sm text-gray-500">
                  Tujuan Sentinel Forces Menjadi garda terdepan dalam industri
                  keamanan profesional yang terpercaya, tangguh, dan berstandar
                  internasional, serta menciptakan rasa aman dan perlindungan
                  maksimal.
                </p>
              </div>
              <button
                ref={buttonRef}
                onClick={scrollToTop}
                className="btn bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-md font-extrabold font-plus-jakarta-sans"
              >
                KONSULTASI SEKARANG
              </button>
            </div>
            {/* Elemen Dekoratif Garis Bergelombang */}
            <div
              ref={svgWavesRef}
              className="absolute bottom-0 left-0 right-0 h-20 z-0"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="rgba(0,0,0,0.03)"
              >
                <path d="M0,10 Q25,0 50,10 T100,10 L100,20 L0,20 Z" />
                <path
                  d="M0,12 Q20,5 50,12 T100,12 L100,20 L0,20 Z"
                  fill="rgba(0,0,0,0.04)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
