'use client'; // Gunakan direktif ini jika Anda berencana menambahkan animasi atau interaktivitas di sisi klien

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Keunggulan from '@/components/tentang-kami/Keunggulan';
import SiapaKami from '@/components/tentang-kami/SiapaKami';
import VisiMisi from '@/components/tentang-kami/VisiMisi';
import React from 'react';

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <section
        className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/hero3.webp')", // <-- Ganti dengan gambar hero untuk halaman About Us
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>{' '}
        {/* Overlay gelap */}
        <div className="relative z-10 text-center container mx-auto px-4 font-open-sans">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta-sans leading-tight">
            Tentang Kami
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Mengenal lebih jauh komitmen kami dalam keamanan dan
            profesionalisme.
          </p>
        </div>
      </section>
      <SiapaKami />
      <VisiMisi />
      <Keunggulan />
      <Footer />
    </>
  );
}
