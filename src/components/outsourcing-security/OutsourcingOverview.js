'use client'; // Diperlukan karena menggunakan komponen Image dari Next.js dan ikon (jika berinteraksi)

import React from 'react';
import Image from 'next/image'; // Import komponen Image
import { FaCheckCircle } from 'react-icons/fa'; // Import ikon cek untuk daftar poin

export default function OutsourcingOverview() {
  return (
    <section className="bg-neutral-900 py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Dua Gambar Bersebelahan (horisontal) dengan Aspect Ratio Portrait */}
          {/* Mengubah space-y-6 menjadi flex flex-wrap gap-4 justify-center lg:justify-start */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Image
              src="/security1.webp" // <-- Mengubah width dan height menjadi lebih portrait
              alt="Personel Keamanan Outsourcing"
              width={400} // Lebar lebih kecil
              height={600} // Tinggi lebih besar
              // Mengubah w-[calc(50%-8px)] menjadi lebar yang sesuai dengan aspect ratio baru
              className="w-[calc(50%-8px)] h-auto rounded-lg shadow-xl object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://via.placeholder.com/400x600.png?text=Image+1+Fallback'; // Fallback sesuai aspect ratio
              }}
            />
            <Image
              src="/security2.webp" // <-- Mengubah width dan height menjadi lebih portrait
              alt="Pusat Pemantauan Keamanan"
              width={400} // Lebar lebih kecil
              height={600} // Tinggi lebih besar
              // Mengubah w-[calc(50%-8px)] menjadi lebar yang sesuai dengan aspect ratio baru
              className="w-[calc(50%-8px)] h-auto rounded-lg shadow-xl object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://via.placeholder.com/400x600.png?text=Image+2+Fallback'; // Fallback sesuai aspect ratio
              }}
            />
          </div>

          {/* Kolom Kanan: Teks Konten */}
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-3 block">
              Solusi Keamanan Anda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-plus-jakarta-sans mb-6">
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

            {/* Poin-poin Keunggulan dengan Ikon Cek */}
            <ul className="space-y-3 text-lg text-gray-300">
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
