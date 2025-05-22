"use client";

import React from "react";
import Image from "next/image"; // <-- Import Image component

export default function JasaSection() {
  const servicesData = [
    {
      name: "Security",
      description:
        "Solusi keamanan terpercaya untuk perjalanan Anda, dari tur kota hingga transfer bandara, memastikan kenyamanan dan dan perlindungan optimal.",
      image: "/security.webp", // <-- Path telah diperbaiki: Ditambahkan tanda '/' di depan
      features: [
        "Petugas Keamanan Profesional",
        "Selalu Tepat Waktu & Efisien",
        "Pengawalan Door-To-Door",
        "Pengalaman Keamanan Personal",
        "Prioritas Privasi & Keamanan",
      ],
    },
    {
      name: "Bodyguard",
      description:
        "Perlindungan personal premium dengan personel berpengalaman, terlatih dalam taktik perlindungan VIP serta kemampuan bela diri.",
      image: "/bodyguard.webp",
      features: [
        "Personel Berpengalaman & Terlatih",
        "Taktik Perlindungan VIP Canggih",
        "Kemampuan Bela Diri Tingkat Tinggi",
        "Respons Cepat & Proaktif",
        "Jaminan Keamanan Personal Maksimal",
      ],
    },
    {
      name: "Pengamanan Event",
      description:
        "Layanan pengamanan event skala kecil hingga besar dengan pendekatan profesional, terstruktur, dan respons cepat terhadap potensi gangguan.",
      image: "/event.webp",
      features: [
        "Pengendalian Massa Efektif",
        "Pengamanan Artis & VIP Terstruktur",
        "Analisis Risiko & Perencanaan Detail",
        "Respons Cepat Terhadap Gangguan",
        "Lingkungan Acara yang Aman & Terkendali",
      ],
    },
    {
      name: "Pelatihan Security",
      description:
        "Program pelatihan eksklusif untuk meningkatkan kualitas dan profesionalisme tenaga keamanan, bekerja sama dengan Range 19 USA.",
      image: "/pelatihan.webp",
      features: [
        "Kurikulum Berstandar Internasional",
        "Instruktur Berpengalaman (Range 19 USA)",
        "Pengembangan Profesional Tenaga Keamanan",
        "Sertifikasi Kompetensi",
        "Materi Taktis dan Keamanan Terbaru",
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-white pt-16 lg:pt-24 text-neutral-800 font-open-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16 lg:pb-24">
        <p className="text-sm text-center font-semibold text-yellow-500 tracking-wider mb-3 uppercase">
          Layanan Kami
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-plus-jakarta-sans font-bold text-black mb-16 text-center">
          Pilih Layanan Keamanan Terbaik
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-orange-50 rounded-lg shadow-xl overflow-hidden flex flex-col items-center p-6"
              >
                <div className="relative w-full h-40 mb-6 rounded-md overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill // <-- Gunakan prop fill
                    style={{ objectFit: "cover" }} // <-- Pastikan objectFit: 'cover'
                    // Menambahkan onError handler untuk komponen Image
                    onError={(e) => {
                      // Ganti src gambar ke placeholder umum jika terjadi error
                      // Pastikan Anda memiliki file /placeholder-image.webp di folder public
                      e.currentTarget.src = "/placeholder-image.webp";
                    }}
                  />
                </div>
                <div className="text-left w-full flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-plus-jakarta-sans font-bold text-black mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-left mb-6 text-sm font-sans">
                      {service.description}
                    </p>
                  </div>

                  <ul className="text-left w-full space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 text-sm font-sans"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-yellow-400 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black w-full py-2.5 rounded-md uppercase font-plus-jakarta-sans font-semibold text-md mt-auto">
                    Konsultasi Sekarang
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg z-20 transition-opacity duration-300"
        aria-label="Kembali ke atas"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>

      {/* Gambar border-white.webp disisipkan di sini */}
      <div className="absolute bottom-[-3rem] left-0 w-full z-10">
        <Image
          src="/border-white.webp" // Pastikan path ini benar ke file Anda di folder public
          alt="Section Divider" // Deskripsi gambar untuk aksesibilitas
          width={1920} // <-- Sesuaikan lebar intrinsik gambar border Anda (contoh)
          height={100} // <-- Sesuaikan tinggi intrinsik gambar border Anda (contoh)
          className="w-full h-auto block" // w-full untuk lebar penuh, h-auto untuk menjaga rasio aspek
        />
      </div>
    </section>
  );
}
