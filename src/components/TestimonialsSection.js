'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; // Impor komponen Image dari Next.js
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const testimonialsData = [
    {
      quote:
        'Solusi keamanan terpercaya untuk aset bisnis kami. Dengan Sentinel Forces, operasional kami berjalan lancar tanpa kekhawatiran. Tim mereka sangat responsif dan terlatih.',
      clientName: 'Ibu Siti Aminah',
      clientTitle: 'Direktur Operasional, PT Maju Bersama',
      avatar: '/client4.webp',
    },
    {
      quote:
        'Pengamanan acara kami berjalan sangat sukses berkat perencanaan dan eksekusi tim Sentinel Forces yang sempurna. Pengendalian massa dan pengamanan VIP dilakukan dengan sangat profesional.',
      clientName: 'Ibu Rina Wijaya', // Diubah menjadi nama wanita
      clientTitle: 'Event Organizer, Harmoni Kreatif',
      avatar: '/client2.webp', // Pastikan Anda mengganti file gambar ini dengan foto wanita
    },
    {
      quote:
        "The joint training from Sentinel Forces and Range 19 USA was transformative. Their program elevated our team's skills to a truly global standard of excellence.", // Quote disesuaikan ke Bahasa Inggris
      clientName: 'Mr. Marcus Thorne', // Nama diubah menjadi nama African American
      clientTitle: 'Head of Security, Global Logistics Corp', // Jabatan disesuaikan
      avatar: '/client3.webp', // Disarankan untuk diganti dengan foto yang sesuai
    },
    {
      quote:
        'Merasa sangat aman dan terlindungi setiap saat. Profesionalisme tim Sentinel Forces benar-benar luar biasa, memberikan ketenangan pikiran yang saya butuhkan.',
      clientName: 'Bapak Andri Gunawan',
      clientTitle: 'Pengusaha',
      avatar: '/client1.webp',
    },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    // ... (logika animasi GSAP tidak perlu diubah)
    if (
      !sectionRef.current ||
      !titleRef.current ||
      !swiperContainerRef.current
    ) {
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
      titleRef.current,
      { opacity: 0, y: -30, duration: 0.8, ease: 'power3.out' },
      0
    );
    tl.from(
      swiperContainerRef.current,
      { opacity: 0, y: 50, duration: 1.0, ease: 'power3.out' },
      '-=0.5'
    );
    return () => {
      if (tl) tl.kill();
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

        <div ref={swiperContainerRef} className="pb-12">
          {' '}
          {/* Tambah padding-bottom untuk pagination */}
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
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="mySwiper"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="bg-orange-50 rounded-lg drop-shadow-xl overflow-hidden h-full flex flex-col">
                  {/* Bagian Gambar (DIPERBAIKI) */}
                  <div className="relative w-full h-[18rem]">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar}
                        alt={`Klien Sentinel Forces: ${testimonial.clientName}`}
                        fill
                        className="object-cover object-top"
                      />
                    )}
                  </div>

                  {/* Bagian Konten Teks */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-800 text-base italic mb-4 flex-grow text-left">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="text-left mt-auto pt-4 border-t border-yellow-200">
                      <h3 className="text-lg font-semibold text-yellow-700">
                        {testimonial.clientName}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.clientTitle}
                      </p>
                    </div>
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
