'use client';

import React from 'react';
import { MdSchool, MdVerifiedUser, MdSecurity } from 'react-icons/md'; // Menggunakan Material Icons yang lebih relevan

export default function PelatihanSecurityBenefit() {
  // Nama komponen diubah
  const iconColor = 'text-yellow-500'; // Warna ikon yang seragam

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1: Kurikulum Berstandar Internasional */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Kurikulum Berstandar Internasional
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSchool className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Program pelatihan kami dirancang dengan kurikulum berstandar
                internasional, memastikan relevansi global dan kualitas
                pendidikan keamanan tertinggi.
              </p>
            </div>
          </div>

          {/* Benefit 2: Instruktur Berpengalaman (Range 19 USA) */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Instruktur Berpengalaman (Range 19 USA)
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdVerifiedUser className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Dibimbing oleh instruktur profesional dan bersertifikat dari
                Range 19 USA, lembaga pelatihan taktis dan keamanan
                internasional berstandar tinggi.
              </p>
            </div>
          </div>

          {/* Benefit 3: Pengembangan Kompetensi Taktis */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Pengembangan Kompetensi Taktis
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSecurity className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Fokus pada pengembangan kemampuan taktis, disiplin, dan kesiapan
                respons cepat untuk menghadapi berbagai situasi keamanan
                lapangan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
