'use client'; // Diperlukan karena menggunakan komponen Image dari Next.js dan ikon

import React from 'react';
import Image from 'next/image'; // Import komponen Image
import { FaCheckCircle } from 'react-icons/fa'; // Import ikon cek

export default function PelatihanSecurityOverview() {
  // Nama komponen diubah
  return (
    <section className="bg-neutral-900 py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Dua Gambar Bersebelahan (horisontal) dengan Aspect Ratio Portrait */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Image
              src="/pelatihan1.webp" // <-- Ganti dengan gambar relevan (misal: simulasi latihan keamanan)
              alt="Pelatihan Keamanan Taktis"
              width={400} // Lebar lebih kecil
              height={600} // Tinggi lebih besar
              className="w-[calc(50%-8px)] h-auto rounded-lg shadow-xl object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://via.placeholder.com/400x600.png?text=Training+Image+1+Fallback'; // Fallback sesuai aspect ratio
              }}
            />
            <Image
              src="/pelatihan2.webp" // <-- Ganti dengan gambar relevan (misal: kelas teori atau sertifikasi)
              alt="Sertifikasi Pelatihan Keamanan"
              width={400} // Lebar lebih kecil
              height={600} // Tinggi lebih besar
              className="w-[calc(50%-8px)] h-auto rounded-lg shadow-xl object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://via.placeholder.com/400x600.png?text=Training+Image+2+Fallback'; // Fallback sesuai aspect ratio
              }}
            />
          </div>

          {/* Kolom Kanan: Teks Konten */}
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-3 block">
              Program Pelatihan Kami {/* Konten diubah */}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-plus-jakarta-sans mb-6">
              Tingkatkan Kualitas & Profesionalisme Keamanan Anda{' '}
              {/* Konten diubah */}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Sentinel Forces menyelenggarakan program pelatihan outsourcing
              security eksklusif yang dirancang untuk meningkatkan kualitas dan
              profesionalisme tenaga keamanan. Kami berkomitmen untuk membentuk
              personel yang siap menghadapi tantangan keamanan modern.{' '}
              {/* Konten diubah */}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Bekerja sama dengan Range 19 USA, lembaga pelatihan taktis dan
              keamanan internasional berstandar tinggi, kami menghadirkan
              kurikulum yang relevan dan metode pengajaran terbaik.{' '}
              {/* Konten diubah */}
            </p>

            {/* Poin-poin Keunggulan dengan Ikon Cek */}
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>Kurikulum Berstandar Internasional.</span>{' '}
                {/* Konten diubah */}
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>Instruktur Berpengalaman (Range 19 USA).</span>{' '}
                {/* Konten diubah */}
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>Pengembangan Kompetensi Taktis & Keamanan.</span>{' '}
                {/* Konten diubah */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
