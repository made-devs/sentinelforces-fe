'use client'; // Diperlukan jika Anda berencana menambahkan animasi atau interaktivitas di sini

import React from 'react';
import {
  FaComments,
  FaClipboardList,
  FaUsersCog,
  FaChartLine,
} from 'react-icons/fa'; // Ikon untuk setiap langkah proses

export default function OutsourcingProcess() {
  const processSteps = [
    {
      icon: FaComments,
      title: 'Konsultasi Kebutuhan',
      description:
        'Kami memulai dengan sesi konsultasi mendalam yang tersedia 24 jam bersama tim customer service kami, untuk memahami secara menyeluruh kebutuhan spesifik keamanan bisnis Anda dan tujuan pengamanan.',
    },
    {
      icon: FaClipboardList,
      title: 'Analisis & Perencanaan Solusi',
      description:
        'Tim ahli kami akan melakukan analisis risiko komprehensif, kemudian menyusun strategi keamanan yang dipersonalisasi dan rencana operasional yang detail khusus untuk lingkungan bisnis Anda.',
    },
    {
      icon: FaUsersCog,
      title: 'Implementasi & Penugasan Tim',
      description:
        'Setelah rencana disetujui, personel keamanan terbaik kami akan ditugaskan ke lokasi Anda dan mulai melaksanakan tugas sesuai protokol standar internasional, dengan dukungan penuh dari manajemen.',
    },
    {
      icon: FaChartLine,
      title: 'Pemantauan & Evaluasi Berkelanjutan',
      description:
        'Kami memastikan efektivitas layanan dengan pemantauan berkelanjutan, pelaporan berkala, dan penyesuaian strategi jika diperlukan untuk menjamin perlindungan maksimal dan adaptasi terhadap perubahan kondisi.',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-8">
          Proses Layanan Outsourcing Security
        </h2>
        <p className="text-lg text-black mb-12 max-w-2xl mx-auto">
          Kami telah menyederhanakan prosesnya agar Anda dapat dengan mudah
          mengakses layanan keamanan profesional yang Anda butuhkan untuk bisnis
          Anda.
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
