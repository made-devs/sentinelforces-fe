'use client';

import React from 'react';
import { MdShield, MdSpeakerNotes, MdSecurity } from 'react-icons/md'; // Menggunakan Material Icons yang lebih relevan

export default function EventSecurityBenefit() {
  const iconColor = 'text-yellow-500'; // Warna ikon yang seragam

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1: Pengendalian Massa Profesional */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Pengendalian Massa Profesional
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdShield className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Tim kami terlatih dalam teknik pengendalian massa yang efektif
                untuk memastikan kelancaran acara dan keamanan seluruh peserta.
              </p>
            </div>
          </div>

          {/* Benefit 2: Pengamanan Artis & VIP */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Pengamanan Artis & VIP
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSpeakerNotes className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Kami menyediakan pengawalan dan pengamanan khusus untuk artis,
                VIP, dan talent lainnya, menjaga privasi dan keselamatan mereka
                selama acara berlangsung.
              </p>
            </div>
          </div>

          {/* Benefit 3: Respons Cepat & Terstruktur */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Respons Cepat & Terstruktur
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSecurity className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Dengan perencanaan matang dan tim yang sigap, kami siap
                merespons setiap potensi gangguan keamanan secara cepat dan
                terstruktur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
