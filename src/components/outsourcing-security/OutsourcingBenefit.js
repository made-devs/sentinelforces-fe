'use client';

import React, { useEffect, useRef } from 'react'; // Impor useEffect dan useRef
// Image tidak digunakan di komponen ini, bisa dihapus jika tidak ada rencana penggunaan
// import Image from 'next/image';
import { MdVerifiedUser, MdSchool, MdSecurity } from 'react-icons/md';
import { gsap } from 'gsap'; // Impor GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Impor ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Daftarkan plugin ScrollTrigger

export default function OutsourcingBenefit() {
  const iconColor = 'text-yellow-500';

  // Refs untuk animasi
  const sectionRef = useRef(null);
  const gridContainerRef = useRef(null); // Ref untuk kontainer grid yang berisi kartu benefit

  useEffect(() => {
    // Pastikan elemen yang direferensikan sudah ada
    if (!sectionRef.current || !gridContainerRef.current) {
      console.warn(
        'OutsourcingBenefit: Section or grid container ref not available for animation.'
      );
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current, // Pemicu berdasarkan section utama
        start: 'top 80%', // Mulai animasi saat 80% bagian atas section masuk viewport
        toggleActions: 'play none none none', // Mainkan sekali saat masuk
        // markers: true, // Hilangkan komentar ini untuk debugging posisi trigger
      },
    });

    // Ambil semua kartu benefit sebagai target animasi
    const cards = gsap.utils.toArray(gridContainerRef.current.children);

    if (cards.length > 0) {
      tl.from(
        cards,
        {
          opacity: 0,
          y: 60, // Geser dari bawah
          scale: 0.95, // Mulai dari skala sedikit lebih kecil
          duration: 0.7, // Durasi animasi untuk setiap kartu
          stagger: 0.2, // Jeda waktu antar kemunculan kartu (efek berurutan)
          ease: 'power3.out', // Jenis easing untuk pergerakan yang halus
        },
        0
      ); // Mulai animasi ini di awal timeline
    }

    // Cleanup timeline saat komponen unmount
    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 lg:py-24 font-open-sans"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={gridContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Benefit 1 */}
          <div className="text-center max-w-[400px] mx-auto md:mx-0">
            {' '}
            {/* Tambahkan mx-auto di mobile, hapus di md */}
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Personel Bersertifikat
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdVerifiedUser className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Seluruh personel kami bersertifikat Gada Pratama dan Gada Utama,
                menjamin kompetensi dan profesionalisme dalam setiap tugas.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="text-center max-w-[400px] mx-auto md:mx-0">
            <h3 className="text-xl font-semibold text-neutral-800 font-plus-jakarta-sans mb-2">
              Pelatihan Standar Internasional
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 mr-4">
                <MdSchool className={`w-[5rem] h-[5rem] ${iconColor}`} />
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                Dibekali pelatihan berstandar internasional melalui kerja sama
                eksklusif dengan <b>Range 19 USA</b>, meningkatkan keahlian dan
                taktik keamanan.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="text-center max-w-[400px] mx-auto md:mx-0">
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
