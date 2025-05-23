'use client';

import Footer from '@/components/Footer'; // Asumsikan Footer ada di path ini
import Navbar from '@/components/Navbar'; // Asumsikan Navbar ada di path ini
import React from 'react';
import EventSecurityOverview from '../../components/event-security/EventSecurityOverview';
import EventSecurityBenefit from '../../components/event-security/EventSecurityBenefit';
import EventSecurityProcess from '../../components/event-security/EventSecurityProcess';

export default function EventSecurityPage() {
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
            Pengamanan Konser & Event{' '}
            {/* <-- Judul Halaman diubah untuk Event/Konser */}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Pendekatan profesional, terstruktur, dan respons cepat untuk
            pengendalian massa dan pengamanan artis/VIP di setiap event.{' '}
            {/* <-- Deskripsi Halaman diubah */}
          </p>
        </div>
      </section>
      <EventSecurityOverview />
      <EventSecurityBenefit />
      <EventSecurityProcess />

      <Footer />
    </>
  );
}
