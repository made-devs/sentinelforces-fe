'use client'; // Diperlukan karena menggunakan komponen Image dari Next.js

import React from 'react';
import Image from 'next/image'; // Import komponen Image
import { FaCheckCircle } from 'react-icons/fa'; // Import ikon cek untuk daftar poin

export default function BodyguardOverview() {
  return (
    <section className="bg-neutral-900 py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Gambar Impactful */}
          <div className="mt-8 lg:mt-0">
            <Image
              src="/bodyguard1.webp" // <-- Ganti dengan URL gambar bodyguard/perlindungan yang relevan
              alt="Bodyguard Profesional Sentinel Forces" // Deskripsi alt text
              width={600} // Sesuaikan lebar intrinsik gambar Anda
              height={400} // Sesuaikan tinggi intrinsik gambar Anda
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/600x400/262626/888888?text=Bodyguard+Image';
              }}
            />
          </div>

          {/* Kolom Kanan: Teks Konten, Checklist & CTA */}
          <div className="text-center lg:text-left text-white">
            <span className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-3 block">
              Perlindungan Personal Kustom
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-plus-jakarta-sans mb-6">
              Mengapa Memilih Bodyguard Sentinel Forces?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Di dunia yang penuh ketidakpastian, perlindungan pribadi yang
              profesional bukan lagi kemewahan, melainkan kebutuhan. Sentinel
              Forces hadir untuk menjamin ketenangan pikiran Anda dengan layanan
              bodyguard yang tak tertandingi.
            </p>

            {/* Daftar Poin Checklist */}
            <ul className="space-y-3 text-lg text-gray-300 mb-10">
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Personel Berpengalaman & Terlatih dalam taktik perlindungan
                  VIP dan bela diri.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Perencanaan Keamanan yang Presisi, termasuk analisis risiko
                  dan rute optimal.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Kerahasiaan dan Diskresi Tinggi, menjamin privasi klien
                  mutlak.
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1" />
                <span>
                  Kesiapan Respon Cepat 24/7 untuk setiap situasi darurat.
                </span>
              </li>
            </ul>

            {/* Tombol CTA */}
            <a
              href="/kontak" // <-- Ganti dengan URL halaman kontak Anda
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              KONSULTASI PERLINDUNGAN ANDA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
