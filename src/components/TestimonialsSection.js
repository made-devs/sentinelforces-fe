"use client"; // <-- Pastikan ini tetap ada di bagian paling atas file

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function TestimonialsSection() {
  const testimonialsData = [
    {
      quote:
        "Solusi keamanan terpercaya untuk aset bisnis kami. Dengan Sentinel Forces, operasional kami berjalan lancar tanpa kekhawatiran. Tim mereka sangat responsif dan terlatih.",
      clientName: "Ibu Siti Aminah",
      clientTitle: "Direktur Operasional, PT Maju Bersama",
      avatar: "/placeholder-avatar-woman.jpg", // Ganti dengan path gambar asli
    },
    {
      quote:
        "Pengamanan acara kami berjalan sangat sukses berkat perencanaan dan eksekusi tim Sentinel Forces yang sempurna. Pengendalian massa dan pengamanan VIP dilakukan dengan sangat profesional.",
      clientName: "Bapak Bayu Samudera",
      clientTitle: "Event Organizer, Harmoni Kreatif",
      avatar: "/placeholder-avatar-man2.jpg", // Ganti dengan path gambar asli
    },
    {
      quote:
        "Pelatihan keamanan dari Sentinel Forces, berkolaborasi dengan Range 19 USA, sungguh meningkatkan kompetensi tim saya. Standar internasionalnya terasa sekali!",
      clientName: "Bapak Rian Prasetyo",
      clientTitle: "Koordinator Keamanan",
      avatar: "/placeholder-avatar-man3.jpg", // Ganti dengan path gambar asli
    },
    {
      quote:
        "Merasa sangat aman dan terlindungi setiap saat. Profesionalisme tim Sentinel Forces benar-benar luar biasa, memberikan ketenangan pikiran yang saya butuhkan.",
      clientName: "Bapak Andri Gunawan",
      clientTitle: "Pengusaha",
      avatar: "/placeholder-avatar-man.jpg", // Ganti dengan path gambar asli
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-12">
          Apa Kata Klien Kami
        </h2>

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
          className="mySwiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                // Mengubah shadow-lg menjadi shadow-2xl untuk bayangan yang lebih kuat
                className="bg-orange-50 p-8 rounded-lg drop-shadow-xl flex flex-col justify-between min-h-[350px]"
              >
                <p className="text-gray-800 text-lg italic mb-3 flex-grow text-left">
                  "{testimonial.quote}"
                </p>

                <div className="flex flex-col items-center">
                  {testimonial.avatar && (
                    <img
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
    </section>
  );
}
