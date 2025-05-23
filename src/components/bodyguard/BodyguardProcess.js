'use client'; // Diperlukan jika Anda berencana menambahkan animasi atau interaktivitas di sini

import React from 'react';
import {
  FaComments,
  FaClipboardList,
  FaUsersCog,
  FaChartLine,
} from 'react-icons/fa'; // Ikon untuk setiap langkah proses

export default function BodyguardProcess() {
  // Mengubah nama komponen menjadi BodyguardProcessSection
  const processSteps = [
    {
      icon: FaComments,
      title: 'Konsultasi Awal & Penilaian Risiko', // Konten disesuaikan untuk bodyguard
      description:
        'Melalui sesi konsultasi mendalam, kami memahami gaya hidup, jadwal, dan potensi risiko pribadi Anda, serta tujuan spesifik perlindungan.',
    },
    {
      icon: FaClipboardList,
      title: 'Perencanaan Keamanan & Taktik', // Konten disesuaikan untuk bodyguard
      description:
        'Tim ahli kami menyusun strategi perlindungan yang dipersonalisasi, termasuk perencanaan rute, protokol darurat, dan taktik diskrit yang disesuaikan.',
    },
    {
      icon: FaUsersCog,
      title: 'Penugasan Bodyguard Profesional', // Konten disesuaikan untuk bodyguard
      description:
        'Bodyguard terlatih kami ditugaskan dengan profil yang sesuai. Mereka akan mulai melaksanakan tugas sesuai protokol kerahasiaan dan standar internasional.',
    },
    {
      icon: FaChartLine,
      title: 'Pemantauan Situasi & Dukungan', // Konten disesuaikan untuk bodyguard
      description:
        'Kami memastikan perlindungan berkelanjutan melalui pemantauan situasi, pelaporan yang diskrit, dan penyesuaian strategi cepat untuk adaptasi kondisi.',
    },
  ];

  return (
    // Latar belakang section putih untuk kontras dengan section lain di BodyguardPage
    <section className="bg-white py-16 lg:py-24 font-open-sans relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul section berwarna hitam agar terbaca di latar belakang putih */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-8">
          Proses Layanan Bodyguard
        </h2>
        {/* Paragraf pengantar berwarna abu-abu gelap agar terbaca di latar belakang putih */}
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Proses kami dirancang untuk memberikan perlindungan personal yang
          efisien, efektif, dan disesuaikan dengan kebutuhan Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              // Kartu tetap bg-neutral-800, sehingga teks di dalamnya tetap putih/abu-abu terang
              className="relative bg-neutral-800 px-6 pb-8 pt-16 rounded-lg shadow-lg flex flex-col items-start text-left"
            >
              {/* Icon Container */}
              <div className="absolute left-6 top-0 transform -translate-y-1/2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black shadow-lg">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
              {/* Konten Teks - Rata Kiri */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">
                  {' '}
                  {/* Teks judul kartu putih */}
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{step.description}</p>{' '}
                {/* Teks deskripsi kartu abu-abu terang */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
