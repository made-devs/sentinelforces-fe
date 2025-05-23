'use client';

import Footer from '@/components/Footer'; // Asumsikan Footer ada di path ini
import Navbar from '@/components/Navbar'; // Asumsikan Navbar ada di path ini
import React from 'react';
import BodyguardOverview from '../../components/bodyguard/BodyguardOverview';
import BodyguardBenefit from '../../components/bodyguard/BoddguardBenefit';
import BodyguardProcess from '../../components/bodyguard/BodyguardProcess';

export default function BodyguardPage() {
  return (
    <>
      <Navbar />
      <section
        className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          // Gambar background bisa tetap '/team.webp' jika relevan dengan konsep tim outsourcing
          backgroundImage: "url('/team.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Efek parallax sederhana
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>{' '}
        {/* Overlay gelap */}
        <div className="relative z-10 text-center container mx-auto px-4 font-open-sans">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta-sans leading-tight">
            Bodyguard Profesional {/* <-- Judul Halaman diubah */}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Perlindungan personal premium oleh personel berpengalaman, terlatih
            dalam taktik perlindungan VIP serta kemampuan bela diri.{' '}
            {/* <-- Deskripsi Halaman diubah */}
          </p>
        </div>
      </section>
      <BodyguardOverview />
      <BodyguardBenefit />
      <BodyguardProcess />
      <Footer />
    </>
  );
}
