"use client"; // Karena komponen ini mungkin memiliki interaktivitas atau hooks spesifik client di masa depan.

import React from "react";
import Image from "next/image"; // <-- Import Image component

export default function JourneySection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 lg:py-24 text-neutral-800">
      {" "}
      {/* Latar belakang putih untuk section ini */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-yellow-500 tracking-wider uppercase">
                Berintegritas & PROFESSIONAL
              </span>
            </div>

            <div className="mt-8">
              {/* Mengganti <img> dengan <Image /> */}
              <Image
                src="/hero.webp" // Ganti dengan URL gambar limosin Anda
                alt="Limosin Mewah" // Deskripsi alt text yang relevan
                width={600} // <-- Tetapkan lebar intrinsik gambar Anda
                height={350} // <-- Tetapkan tinggi intrinsik gambar Anda
                className="w-full h-auto rounded-lg shadow-lg object-cover" // Kelas tetap sama untuk styling responsif
                onError={(e) => {
                  // Ganti src gambar ke placeholder jika terjadi error
                  e.currentTarget.src =
                    "https://placehold.co/600x350/e2e8f0/333333?text=Gagal+Memuat+Gambar";
                }}
              />
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="bg-orange-50 p-8 lg:p-12 rounded-lg shadow-xl relative overflow-hidden font-open-sans">
            {" "}
            {/* Warna latar belakang krem muda */}
            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-2xl font-extrabold text-black font-plus-jakarta-sans">
                  PROFESSIONAL PARTNER PRIVATE SERVICES YOU CAN TRUST
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Sentinel Forces adalah perusahaan jasa keamanan terpercaya
                  yang menyediakan layanan outsourcing security, bodyguard
                  pribadi, pengamanan event & aset bisnis, serta pelatihan
                  keamanan profesional.
                </p>
              </div>
              <div>
                <p className="mt-2 text-sm text-gray-500">
                  Tujuan Sentinel Forces Menjadi garda terdepan dalam industri
                  keamanan profesional yang terpercaya, tangguh, dan berstandar
                  internasional, serta menciptakan rasa aman dan perlindungan
                  maksimal
                </p>
              </div>
              <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-md font-extrabold font-plus-jakarta-sans">
                KONSULTASI SEKARANG
              </button>
            </div>
            {/* Elemen Dekoratif Garis Bergelombang */}
            <div className="absolute bottom-0 left-0 right-0 h-20 z-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                fill="rgba(0,0,0,0.03)"
              >
                <path d="M0,10 Q25,0 50,10 T100,10 L100,20 L0,20 Z" />
                <path
                  d="M0,12 Q20,5 50,12 T100,12 L100,20 L0,20 Z"
                  fill="rgba(0,0,0,0.04)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
