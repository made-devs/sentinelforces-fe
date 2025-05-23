'use client';

import React from 'react';
import { MdVerifiedUser, MdSchool, MdSecurity } from 'react-icons/md'; // Menggunakan Material Icons

export default function BodyguardBenefit() {
  const iconColor = 'text-yellow-500'; // Warna ikon yang seragam

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hapus text-center dari grid agar masing-masing div benefit bisa mengatur perataan teksnya sendiri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1: Personel Ahli & Berpengalaman */}
          <div className="text-center max-w-[400px]">
            {' '}
            {/* text-center untuk memusatkan h3 dan blok flex di bawahnya */}
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              {' '}
              {/* h3 baris 1 */}
              Personel Ahli & Berpengalaman
            </h3>
            {/* Flex baris 2: icon dan p - Gunakan justify-center untuk memusatkan grup ini */}
            <div className="flex items-start justify-center">
              <div className="flex-shrink-0 mr-4">
                {' '}
                {/* Kontainer untuk ikon */}
                <MdVerifiedUser className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              {/* Teks paragraf: text-left agar teksnya rata kiri, max-w untuk kontrol lebar */}
              <p className="text-gray-600 leading-relaxed  text-left">
                Setiap bodyguard kami memiliki pengalaman luas, terlatih khusus
                dalam taktik perlindungan VIP, intelijen situasional, dan
                kemampuan bela diri tingkat tinggi.
              </p>
            </div>
          </div>

          {/* Benefit 2: Pelatihan Berstandar Global */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Pelatihan Berstandar Global
            </h3>
            <div className="flex items-start justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSchool className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed  text-left">
                Dibekali pelatihan berstandar internasional melalui kerja sama
                eksklusif dengan <b>Range 19 USA</b>, memastikan kemampuan
                adaptif dan respons cepat dalam segala kondisi.
              </p>
            </div>
          </div>

          {/* Benefit 3: Diskresi dan Responsif */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Diskresi dan Responsif
            </h3>
            <div className="flex items-start justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSecurity className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed  text-left">
                Kami mengutamakan kerahasiaan dan diskresi tinggi, didukung
                perencanaan keamanan presisi serta kesiapan respons cepat 24/7
                untuk setiap situasi darurat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
