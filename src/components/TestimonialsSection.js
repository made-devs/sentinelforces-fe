'use client'; // Pastikan ini tetap ada di bagian paling atas file

import React, { useEffect, useRef } from 'react'; // Impor useEffect dan useRef
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Impor GSAP dan ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

export default function TestimonialsSection() {
  const testimonialsData = [
    {
      quote:
        'Solusi keamanan terpercaya untuk aset bisnis kami. Dengan Sentinel Forces, operasional kami berjalan lancar tanpa kekhawatiran. Tim mereka sangat responsif dan terlatih.',
      clientName: 'Ibu Siti Aminah',
      clientTitle: 'Direktur Operasional, PT Maju Bersama',
      avatar: '/placeholder-avatar-woman.jpg',
    },
    {
      quote:
        'Pengamanan acara kami berjalan sangat sukses berkat perencanaan dan eksekusi tim Sentinel Forces yang sempurna. Pengendalian massa dan pengamanan VIP dilakukan dengan sangat profesional.',
      clientName: 'Bapak Bayu Samudera',
      clientTitle: 'Event Organizer, Harmoni Kreatif',
      avatar: '/placeholder-avatar-man2.jpg',
    },
    {
      quote:
        'Pelatihan keamanan dari Sentinel Forces, berkolaborasi dengan Range 19 USA, sungguh meningkatkan kompetensi tim saya. Standar internasionalnya terasa sekali!',
      clientName: 'Bapak Rian Prasetyo',
      clientTitle: 'Koordinator Keamanan',
      avatar: '/placeholder-avatar-man3.jpg',
    },
    {
      quote:
        'Merasa sangat aman dan terlindungi setiap saat. Profesionalisme tim Sentinel Forces benar-benar luar biasa, memberikan ketenangan pikiran yang saya butuhkan.',
      clientName: 'Bapak Andri Gunawan',
      clientTitle: 'Pengusaha',
      avatar: '/placeholder-avatar-man.jpg',
    },
  ];

  // Refs untuk animasi
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const swiperContainerRef = useRef(null); // Ref untuk wrapper Swiper

  useEffect(() => {
    // Pastikan semua elemen yang direferensikan sudah ada
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !swiperContainerRef.current
    ) {
      console.warn(
        'TestimonialsSection: One or more refs not available for animation.'
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current, // Pemicu berdasarkan section utama
        start: 'top 80%', // Mulai animasi saat 80% bagian atas section masuk viewport
        toggleActions: 'play none none none', // Mainkan sekali saat masuk
        // markers: true, // Hilangkan komentar ini untuk debugging posisi trigger
      },
    });

    // 1. Animasi Judul Utama
    tl.from(
      titleRef.current,
      {
        opacity: 0,
        y: -30, // Geser dari atas
        duration: 0.8,
        ease: 'power3.out',
      },
      0
    ); // Mulai di awal timeline

    // 2. Animasi Kontainer Swiper
    tl.from(
      swiperContainerRef.current,
      {
        opacity: 0,
        y: 50, // Geser dari bawah
        duration: 1.0,
        ease: 'power3.out',
      },
      '-=0.5'
    ); // Mulai 0.5s sebelum animasi judul selesai (overlap)

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
          ref={titleRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-12"
        >
          Apa Kata Klien Kami
        </h2>

        {/* Wrapper untuk Swiper agar bisa diberi ref untuk animasi GSAP */}
        <div ref={swiperContainerRef}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper" // Anda mungkin perlu style tambahan untuk .mySwiper jika belum ada
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-orange-50 p-8 rounded-lg drop-shadow-xl flex flex-col justify-between min-h-[350px] h-full" // Tambahkan h-full agar semua slide sama tinggi
                >
                  <p className="text-gray-800 text-lg italic mb-3 flex-grow text-left">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="flex flex-col items-center mt-auto">
                    {' '}
                    {/* mt-auto untuk mendorong ke bawah */}
                    {testimonial.avatar && (
                      <img // Tetap menggunakan <img> sesuai kode Anda
                        src={testimonial.avatar}
                        alt={`Avatar ${testimonial.clientName}`}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-yellow-400"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-yellow-700">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.clientTitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
