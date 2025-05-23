import React from 'react';
import Image from 'next/image'; // <-- Import Image component

// Anda tidak perlu mengimpor FaShieldAlt, FaClock, FaUsers, FaStar, FaBolt, FaGlobeAmericas
// karena kita tidak lagi menggunakan struktur kartu 5 poin dengan ikon tersebut.
// Import ini bisa dihapus jika tidak digunakan di bagian lain file ini.

export default function SiapaKamiSection() {
  // Menggunakan nama komponen yang lebih spesifik
  return (
    // Pertahankan style dasar section (bg-black, padding, relative, overflow-hidden)
    <section className="bg-black pt-16 font-open-sans lg:py-24 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Teks dan Poin-poin dengan Ikon Cek */}
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-3 block">
              Berintegritas & Profesional
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans mb-6">
              Mengenal Sentinel Forces
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Sentinel Forces adalah perusahaan jasa keamanan terpercaya yang
              berkomitmen untuk menyediakan solusi perlindungan superior.
              Didirikan dengan visi menjadi garda terdepan di industri keamanan,
              kami hadir untuk menciptakan rasa aman dan perlindungan maksimal
              bagi Anda, aset bisnis, dan setiap event spesial.
            </p>

            {/* Daftar poin dengan ikon cek - Sekarang hanya 3 poin */}
            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Personel Berpengalaman & Terlatih dalam taktik perlindungan
                  VIP serta kemampuan bela diri.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Standar Keamanan Internasional melalui program pelatihan
                  eksklusif bekerja sama dengan Range 19 USA.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Solusi Keamanan Komprehensif untuk outsourcing security,
                  bodyguard pribadi, hingga pengamanan konser dan event.
                </span>
              </li>
            </ul>

            {/* Tombol Call-to-Action (CTA) */}
            <div className="mt-10">
              <a
                href="/tentang-kami" // Ganti dengan URL halaman About Us lengkap jika ada
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                PELAJARI LEBIH LANJUT
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="mt-8 lg:mt-0">
            <Image // <-- Mengganti <img> dengan <Image />
              src="/hero.webp" // <-- Ganti dengan URL gambar yang sesuai dari folder public Anda
              alt="Tim Keamanan Profesional Sentinel Forces"
              width={600} // <-- Sesuaikan lebar intrinsik gambar Anda (contoh: 600px)
              height={400} // <-- Sesuaikan tinggi intrinsik gambar Anda (contoh: 400px)
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/600x400/262626/888888?text=Image+Placeholder';
              }}
            />
          </div>
        </div>
      </div>

      {/* Gambar border.webp di bagian bawah section */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Image // <-- Mengganti <img> dengan <Image />
          src="/border.webp" // Pastikan path ini benar ke file Anda
          alt="Section Divider"
          width={1920} // <-- Sesuaikan lebar intrinsik gambar border Anda (contoh: 1920px)
          height={100} // <-- Sesuaikan tinggi intrinsik gambar border Anda (contoh: 100px)
          className="w-full h-auto block"
          onError={(e) => {
            e.currentTarget.src = '/placeholder-image.webp';
          }}
        />
      </div>
    </section>
  );
}
