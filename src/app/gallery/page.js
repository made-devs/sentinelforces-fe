"use client";

import Footer from "@/components/Footer"; // Asumsikan Footer ada di path ini
import GalleryMasonry from "@/components/gallery/GalleryMasonry";
import Navbar from "@/components/Navbar"; // Asumsikan Navbar ada di path ini
import React from "react";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <section
        className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          // Gambar background bisa tetap '/team.webp' jika relevan dengan konsep tim outsourcing
          backgroundImage: "url('/hero4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>{" "}
        {/* Overlay gelap */}
        <div className="relative z-10 text-center container mx-auto px-4 font-open-sans">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta-sans leading-tight">
            Gallery {/* <-- Judul Halaman diubah */}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Koleksi foto dokumentasi layanan keamanan profesional, pelatihan
            tim, dan momen-momen penting dalam operasional harian kami.
          </p>
        </div>
      </section>
      <GalleryMasonry />

      <Footer />
    </>
  );
}
