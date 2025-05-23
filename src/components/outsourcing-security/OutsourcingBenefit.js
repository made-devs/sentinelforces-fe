'use client';

import React from 'react';
import { MdVerifiedUser, MdSchool, MdSecurity } from 'react-icons/md'; // Menggunakan Material Icons

export default function OutsourcingBenefit() {
  const iconColor = 'text-yellow-500'; // Warna ikon yang seragam

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hapus text-center dari grid agar masing-masing div benefit bisa mengatur perataan teksnya sendiri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="text-center max-w-[400px]">
            {' '}
            {/* text-center untuk memusatkan h3 dan blok flex di bawahnya */}
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              {' '}
              {/* h3 baris 1 */}
              Personel Bersertifikat
            </h3>
            {/* Flex baris 2: icon dan p - Gunakan justify-center untuk memusatkan grup ini */}
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                {' '}
                {/* Kontainer untuk ikon agar tidak terpengaruh flex-grow dari p */}
                <MdVerifiedUser className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              {/* Teks paragraf: text-left agar teksnya rata kiri, max-w untuk kontrol lebar */}
              <p className="text-gray-600 leading-relaxed  text-left">
                Seluruh personel kami bersertifikat Gada Pratama dan Gada Utama,
                menjamin kompetensi dan profesionalisme dalam setiap tugas.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Pelatihan Standar Internasional
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSchool className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed  text-left">
                Dibekali pelatihan berstandar internasional melalui kerja sama
                eksklusif dengan <b>Range 19 USA</b>, meningkatkan keahlian dan
                taktik keamanan.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="text-center max-w-[400px]">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Disiplin dan Respons Cepat
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSecurity className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Setiap anggota direkrut melalui seleksi ketat dan dilatih untuk
                memiliki kedisiplinan, loyalitas, serta kemampuan menghadapi
                situasi darurat dengan cepat dan tepat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
