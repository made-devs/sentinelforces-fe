import React from "react";

export default function Keunggulan() {
  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans">
      {" "}
      {/* Latar belakang putih untuk section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Gambar yang Berdampak */}
          <div className="mt-8 lg:mt-0">
            <img
              src="/pendekatan-kami-image.webp" // <-- Ganti dengan URL gambar yang sesuai dari folder public Anda
              alt="Pendekatan dan Keunggulan Sentinel Forces"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/e2e8f0/333333?text=Image+Placeholder";
              }}
            />
          </div>

          {/* Kolom Kanan: Teks Konten */}
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold text-yellow-500 tracking-wider uppercase mb-3 block">
              Keunggulan Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black font-plus-jakarta-sans mb-6">
              Keamanan Adaptif, Presisi, dan Global
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {" "}
              {/* Teks konten berwarna abu-abu gelap */}
              Kami memahami bahwa setiap kebutuhan keamanan bersifat unik. Oleh
              karena itu, Sentinel Forces menerapkan pendekatan adaptif,
              merancang solusi yang disesuaikan secara presisi untuk setiap
              klien, dari individu hingga korporasi besar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Didukung oleh kemitraan dengan lembaga pelatihan taktis
              internasional seperti Range 19 USA, kami menjamin standar
              operasional global dan pemanfaatan teknologi keamanan terkini
              dalam setiap misi.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Integritas dan kepercayaan adalah landasan setiap interaksi,
              memastikan kerahasiaan dan ketenangan pikiran yang mutlak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
