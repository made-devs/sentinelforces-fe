'use client'; // Diperlukan jika Anda berencana menambahkan animasi atau interaktivitas di sini

import React from 'react';
import {
  FaComments,
  FaClipboardList,
  FaUsersCog,
  FaChartLine,
} from 'react-icons/fa'; // Ikon untuk setiap langkah proses

export default function EventSecurityProcess() {
  // Mengubah nama komponen
  const processSteps = [
    {
      icon: FaComments,
      title: 'Konsultasi & Penilaian Event', // Konten disesuaikan
      description:
        'Kami memulai dengan sesi konsultasi mendalam untuk memahami skala, jenis event, potensi risiko, dan tujuan pengamanan Anda.',
    },
    {
      icon: FaClipboardList,
      title: 'Perencanaan & Logistik Keamanan', // Konten disesuaikan
      description:
        'Tim ahli kami menyusun strategi pengamanan komprehensif, termasuk pengendalian massa, perencanaan zona, jalur VIP, dan protokol darurat.',
    },
    {
      icon: FaUsersCog,
      title: 'Implementasi Lapangan & Penugasan', // Konten disesuaikan
      description:
        'Personel keamanan ditempatkan sesuai perencanaan. Mereka akan melaksanakan tugas mulai dari screening masuk, pengamanan area vital, hingga pengawalan artis/VIP.',
    },
    {
      icon: FaChartLine,
      title: 'Manajemen Situasi & Pelaporan Real-time', // Konten disesuaikan
      description:
        'Pemantauan situasi real-time, koordinasi tim di lapangan, dan pelaporan insiden cepat untuk memastikan respons tepat waktu dan evaluasi berkelanjutan.',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-8">
          Proses Pengamanan Konser & Event
        </h2>
        <p className="text-lg text-black mb-[5rem] max-w-2xl mx-auto">
          Kami telah menyederhanakan prosesnya agar Anda dapat dengan mudah
          mengakses layanan keamanan profesional yang Anda butuhkan untuk acara
          berskala kecil hingga besar.
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
