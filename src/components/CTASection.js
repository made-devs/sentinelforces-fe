import React from "react";

export default function CTASection() {
  return (
    <section className="bg-neutral-800 py-16 lg:py-24 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul Panggilan Aksi */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans mb-6">
          Siap untuk Merasa Aman dan Terlindungi?
        </h2>

        {/* Deskripsi Singkat */}
        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          Hubungi kami hari ini untuk konsultasi gratis dan temukan solusi
          keamanan profesional yang tepat untuk kebutuhan personal atau bisnis
          Anda.
        </p>

        {/* Tombol Call-to-Action */}
        <a
          href="/kontak" // Ganti dengan path ke halaman kontak Anda
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-plus-jakarta-sans font-semibold text-lg py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          HUBUNGI SENTINEL FORCES
        </a>
      </div>
    </section>
  );
}
