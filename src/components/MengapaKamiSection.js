'use client';
import React from 'react';
import Image from 'next/image'; // <-- Import Image component

import {
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaBolt,
  FaGlobeAmericas,
} from 'react-icons/fa'; // Atau ikon lain yang sesuai

export default function MengapaKamiSection() {
  const servicesData = [
    {
      icon: FaClock,
      title: 'Tersedia 24 Jam Nonstop',
      description:
        'Tim keamanan kami siap siaga penuh setiap saat, memastikan perlindungan tanpa henti kapan pun Anda membutuhkan.',
    },
    {
      icon: FaUsers,
      title: 'Tim Profesional dan Terlatih',
      description:
        'Setiap anggota tim kami adalah profesional berpengalaman yang telah melalui pelatihan intensif untuk menghadapi berbagai situasi keamanan.',
    },
    {
      icon: FaStar,
      title: 'Keamanan VIP & Eksekutif',
      description:
        'Kami menyediakan perlindungan khusus yang disesuaikan untuk individu berprofil tinggi dan eksekutif, menjamin privasi dan keselamatan optimal.',
    },
    {
      icon: FaBolt,
      title: 'Respon Cepat & Taktis',
      description:
        'Dilatih untuk bertindak cepat dan strategis dalam setiap kondisi, tim kami menjamin penanganan situasi darurat yang efektif dan efisien.',
    },
    {
      icon: FaGlobeAmericas,
      title: 'Standar Keamanan Internasional',
      description:
        'Layanan kami berpegang teguh pada protokol dan standar keamanan kelas dunia, memastikan kualitas perlindungan yang diakui secara global.',
    },
  ];

  return (
    // Pastikan section adalah relative dan overflow-hidden
    <section className="bg-black pt-16 font-open-sans lg:py-24 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans">
          Mengapa Memilih Sentinel Forces?
        </h2>

        <div className="mt-[6rem] pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
          {' '}
          {/* Menambah gap-y */}
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            if (!IconComponent) {
              console.error(
                `IconComponent is undefined for service: ${service.title}`
              );
              return null;
            }
            return (
              <div
                key={index}
                className={`
                  relative bg-neutral-800 px-6 pb-8 pt-16 rounded-lg shadow-lg
                  w-11/12 mx-auto 
                  sm:w-full sm:mx-0 
                `}
              >
                {' '}
                {/* pt-16 untuk memberi ruang bagi ikon + teks */}
                {/* Icon Container - Diposisikan secara absolut */}
                <div className="absolute left-6 top-0 transform -translate-y-1/2">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black shadow-lg">
                    <IconComponent className="h-8 w-8" aria-hidden="true" />
                  </div>
                </div>
                {/* Konten Teks - Rata Kiri */}
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gambar border.webp disisipkan di sini */}
      {/* Diposisikan secara absolut di bagian paling bawah section */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Image // <-- Menggunakan Image component
          src="/border.webp" // <-- Pastikan path ini benar ke file Anda di folder public
          alt="Section Divider" // Deskripsi gambar untuk aksesibilitas
          width={1920} // <-- Sesuaikan lebar intrinsik gambar border Anda (contoh)
          height={100} // <-- Sesuaikan tinggi intrinsik gambar border Anda (contoh)
          className="w-full h-auto block" // w-full untuk lebar penuh, h-auto untuk menjaga rasio aspek
          onError={(e) => {
            // Menambahkan onError handler untuk Image component
            const currentTarget = e.currentTarget; // Baris ini mungkin perlu disesuaikan jika bukan TypeScript
            currentTarget.src = '/placeholder-image.webp'; // Fallback image path jika gambar asli gagal dimuat
          }}
        />
      </div>
    </section>
  );
}
