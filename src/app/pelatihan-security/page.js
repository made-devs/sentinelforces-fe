"use client";

import Footer from "@/components/Footer"; // Asumsikan Footer ada di path ini
import Navbar from "@/components/Navbar"; // Asumsikan Navbar ada di path ini
import React from "react";
import PelatihanSecurityOverview from "../../components/pelatihan-security/PelatihanSecurityOverview";
import PelatihanSecurityBenefit from "../../components/pelatihan-security/PelatihanSecurityBenefit";
import PelatihanSecurityProcess from "../../components/pelatihan-security/PelatihanSecurityProcess";

export default function EventSecurityPage() {
  return (
    <>
      <Navbar />
      <section
        className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          // Gambar background bisa tetap '/team.webp' jika relevan dengan konsep tim outsourcing
          backgroundImage: "url('/hero3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>{" "}
        {/* Overlay gelap */}
        <div className="relative z-10 text-center container mx-auto px-4 font-open-sans">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta-sans leading-tight">
            Pelatihan Outsourcing Security{" "}
            {/* <-- Judul Halaman diubah untuk Pelatihan */}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Program pelatihan eksklusif berstandar internasional untuk
            meningkatkan kualitas dan profesionalisme tenaga keamanan.{" "}
            {/* <-- Deskripsi Halaman diubah */}
          </p>
        </div>
      </section>
      <PelatihanSecurityOverview />
      <PelatihanSecurityBenefit />
      <PelatihanSecurityProcess />

      <Footer />
    </>
  );
}
