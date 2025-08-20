'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import {
  FaClock,
  FaUsers,
  FaStar,
  FaBolt,
  FaGlobeAmericas,
  FaShieldAlt,
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Layanan() {
  const servicesData = [
    {
      name: 'Security',
      description:
        'Security Sentinel Forces adalah layanan pengamanan khusus yang terdiri dari personel bersertifikat resmi GADA PRATAMA dan GADA UTAMA, serta dibekali pelatihan fisik dan mental yang intensif untuk menghadapi berbagai bentuk ancaman',
      image: '/security4.webp',
      href: '/outsourcing-security', // Link untuk layanan Security
      features: [
        'Personel Bersertifikat GADA PRATAMA & GADA UTAMA',
        'Petugas Keamanan Profesional',
        'Selalu Tepat Waktu & Efisien',
        'Pelatihan Bela Diri & Taktikal Khusus',
        'Pengalaman Keamanan Personal',
        'Prioritas Privasi & Keamanan',
        'Penampilan Rapi, Disiplin & Ramah Klien',
      ],
    },
    {
      name: 'Bodyguard',
      description:
        'Perlindungan personal premium dengan personel berpengalaman, terlatih dalam taktik perlindungan VIP serta kemampuan bela diri.',
      image: '/security3.webp',
      href: '/bodyguard', // Link untuk layanan Bodyguard
      features: [
        'Pelatihan Lapangan Bersama Range 19',
        'Personel Berpengalaman & Terlatih',
        'Taktik Perlindungan VIP Canggih',
        'Kemampuan Bela Diri Tingkat Tinggi',
        'Respons Cepat & Proaktif',
        'Jaminan Keamanan Personal Maksimal',
        'Penampilan Rapi, Disiplin & Ramah Klien',
      ],
    },
    {
      name: 'Pengamanan Event',
      description:
        'Layanan pengamanan event skala kecil hingga besar dengan pendekatan profesional, terstruktur, dan respons cepat terhadap potensi gangguan.',
      image: '/security5.webp',
      href: '/event-security', // Link untuk layanan Pengamanan Event
      features: [
        'Pelatihan Lapangan Bersama Range 19',
        'Pengendalian Massa Efektif',
        'Pengamanan Artis & VIP Terstruktur',
        'Analisis Risiko & Perencanaan Detail',
        'Respons Cepat Terhadap Gangguan',
        'Lingkungan Acara yang Aman & Terkendali',
        'Respon cepat & Proaktif',
      ],
    },
    // {
    //   name: "Pelatihan Security",
    //   description:
    //     "Program pelatihan eksklusif untuk meningkatkan kualitas dan profesionalisme tenaga keamanan, bekerja sama dengan Range 19 USA.",
    //   image: "/security6.webp",
    //   href: "/pelatihan-security", // Link untuk layanan Pelatihan Security
    //   features: [
    //     "Kurikulum Berstandar Internasional",
    //     "Instruktur Berpengalaman (Range 19 USA)",
    //     "Pelatihan Beladiri",
    //     "Pengembangan Profesional Tenaga Keamanan",
    //     "Pelatihan Bahasa Inggris",
    //     "Materi Taktis dan Keamanan Terbaru",
    //   ],
    // },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const mainTitleRef = useRef(null);
  const gridContainerRef = useRef(null);
  const bottomBorderRef = useRef(null);
  const scrollTopButtonRef = useRef(null);

  useEffect(() => {
    const allRefsAvailable =
      sectionRef.current &&
      badgeRef.current &&
      mainTitleRef.current &&
      gridContainerRef.current &&
      bottomBorderRef.current &&
      scrollTopButtonRef.current;

    if (!allRefsAvailable) {
      console.warn(
        'LayananSection: One or more refs not available for animation.'
      );
    }

    let buttonScrollTriggerInstance;
    const buttonElement = scrollTopButtonRef.current;

    if (buttonElement) {
      gsap.set(buttonElement, { opacity: 0, pointerEvents: 'none' });
      buttonScrollTriggerInstance = ScrollTrigger.create({
        trigger: 'body',
        start: 'top -300px',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (window.scrollY > 300) {
            gsap.to(buttonElement, {
              opacity: 1,
              pointerEvents: 'auto',
              duration: 0.3,
            });
          } else {
            gsap.to(buttonElement, {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.3,
            });
          }
        },
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    if (badgeRef.current) {
      tl.from(
        badgeRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 0.6,
          ease: 'power2.out',
        },
        0
      );
    }

    if (mainTitleRef.current) {
      tl.from(
        mainTitleRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4'
      );
    }

    if (gridContainerRef.current) {
      const cards = gsap.utils.toArray(gridContainerRef.current.children);
      if (cards.length > 0) {
        gsap.set(cards, { willChange: 'transform, opacity' });
        tl.from(
          cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            onComplete: () => {
              gsap.set(cards, { clearProps: 'will-change' });
            },
          },
          '-=0.5'
        );
      }
    }

    if (bottomBorderRef.current) {
      tl.from(
        bottomBorderRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1.0,
          ease: 'sine.out',
        },
        '-=0.5'
      );
    }

    return () => {
      if (tl) tl.kill();
      if (buttonScrollTriggerInstance) buttonScrollTriggerInstance.kill();
      if (buttonElement) gsap.killTweensOf(buttonElement);
    };
  }, []);

  return (
    <section
      id="layanan"
      ref={sectionRef}
      className="relative min-h-screen bg-white pt-16 lg:pt-24 text-neutral-800 font-open-sans"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 lg:pb-24">
        <p
          ref={badgeRef}
          className="text-sm text-center font-semibold text-yellow-500 tracking-wider mb-3 uppercase"
        >
          Layanan Kami
        </p>
        <h2
          ref={mainTitleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-plus-jakarta-sans font-bold text-black mb-16 text-center"
        >
          Pilih Layanan Keamanan Terbaik
        </h2>

        <div
          ref={gridContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-orange-50 rounded-lg shadow-xl overflow-hidden flex flex-col items-center p-6 service-layanan-card"
              >
                <div className="relative w-full h-56 mb-6 rounded-md overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder-image.webp';
                    }}
                  />
                </div>
                <div className="text-left w-full flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-plus-jakarta-sans font-bold text-black mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-left mb-6 text-sm font-sans">
                      {service.description}
                    </p>
                  </div>

                  <ul className="text-left w-full space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 text-sm font-sans"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Tombol diubah menjadi Link */}
                  <Link
                    href={service.href}
                    className="btn bg-yellow-400 hover:bg-yellow-500 text-black w-full py-2.5 rounded-md uppercase font-plus-jakarta-sans font-semibold text-md mt-auto"
                  >
                    Konsultasi Sekarang
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        ref={scrollTopButtonRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg z-20"
        aria-label="Kembali ke atas"
        style={{ opacity: 0, pointerEvents: 'none' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>

      <div
        ref={bottomBorderRef}
        className="absolute bottom-[-3rem] left-0 w-full z-10"
      >
        <Image
          src="/border-white.webp"
          alt="Section Divider"
          width={1920}
          height={100}
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
