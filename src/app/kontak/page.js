'use client';

import Footer from '@/components/Footer'; // Asumsikan Footer ada di path ini
import Navbar from '@/components/Navbar'; // Asumsikan Navbar ada di path ini
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import FormKontak from '../../components/kontak-kami/FormKontak';
import FooterOnly from '../../components/FooterOnly';

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <section
        className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          // Gambar background bisa tetap '/team.webp' jika relevan dengan konsep tim outsourcing
          backgroundImage: "url('/hero3.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>{' '}
        {/* Overlay gelap */}
        <div className="relative z-10 text-center container mx-auto px-4 font-open-sans">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta-sans leading-tight">
            Kontak {/* <-- Judul Halaman diubah untuk Kontak */}
          </h1>
        </div>
      </section>
      <FormKontak />

      <FooterOnly />
    </>
  );
}
