'use client'; // Diperlukan jika Anda berencana menambahkan animasi atau interaktivitas di sini

import React from 'react';
import {
  FaComments,
  FaClipboardList,
  FaUsersCog,
  FaChartLine,
} from 'react-icons/fa'; // Ikon untuk setiap langkah proses

export default function PelatihanSecurityProcess() {
  // Mengubah nama komponen
  const processSteps = [
    {
      icon: FaComments,
      title: 'Konsultasi & Penentuan Kebutuhan', // Konten disesuaikan untuk pelatihan
      description:
        'Kami memulai dengan konsultasi untuk memahami profil tim Anda, gap kompetensi, dan tujuan spesifik pelatihan yang ingin dicapai.',
    },
    {
      icon: FaClipboardList,
      title: 'Perancangan Kurikulum & Modul', // Konten disesuaikan untuk pelatihan
      description:
        'Tim ahli kami merancang kurikulum dan modul pelatihan yang disesuaikan, mengintegrasikan standar internasional dan taktik terbaru dari Range 19 USA.',
    },
    {
      icon: FaUsersCog,
      title: 'Pelaksanaan Pelatihan Intensif', // Konten disesuaikan untuk pelatihan
      description:
        'Program pelatihan dilaksanakan oleh instruktur berpengalaman, menggabungkan teori di kelas dan praktik taktis di lapangan secara intensif.',
    },
    {
      icon: FaChartLine,
      title: 'Evaluasi & Sertifikasi Kompetensi', // Konten disesuaikan untuk pelatihan
      description:
        'Setelah pelatihan, peserta akan dievaluasi untuk memastikan kompetensi. Sertifikasi profesional diberikan sebagai bukti kualifikasi dan standar.',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-8">
          Proses Pelatihan Outsourcing Security
        </h2>
        <p className="text-lg text-black mb-12 max-w-2xl mx-auto">
          Kami telah menyederhanakan prosesnya agar Anda dapat dengan mudah
          mengakses program pelatihan keamanan profesional untuk tim Anda,
          memastikan peningkatan kualitas dan profesionalisme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-neutral-800 px-6 pb-8 pt-16 rounded-lg shadow-lg flex flex-col items-start text-left"
            >
              {/* Icon Container - Diposisikan secara absolut */}
              <div className="absolute left-6 top-0 transform -translate-y-1/2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black shadow-lg">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
              {/* Konten Teks - Rata Kiri */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
