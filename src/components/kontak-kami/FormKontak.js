'use client';

import React, { useRef } from 'react';
import Image from 'next/image'; // Import Image component
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Ikon untuk informasi kontak

export default function ContactUsSection() {
  // Refs untuk input form
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const serviceRef = useRef(null);
  const messageRef = useRef(null);

  // Fungsi untuk menangani submit form ke WhatsApp
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const service = serviceRef.current.value;
    const message = messageRef.current.value;

    const whatsappNumber = '6281234567890'; // GANTI DENGAN NOMOR ASLI ANDA!

    const whatsappMessage = `
Halo Admin Sentinel Forces,

Saya ingin bertanya tentang layanan: *${service || 'Tidak Disebutkan'}*

Nama Lengkap: *${name || '-'}*
Email: *${email || '-'}*
Nomor Telepon: *${phone || '-'}*
Pesan:
${message || '-'}

Terima kasih.
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    event.target.reset();
  };

  return (
    <section className="bg-black py-16 lg:py-24 font-open-sans relative overflow-hidden">
      {/* Overlay Gelap di atas background image */}
      <div className="absolute inset-0 z-[1] bg-black opacity-60"></div>

      {/* Konten Utama Section (termasuk judul, paragraf intro, dan kartu kontak/form) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2] text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-plus-jakarta-sans mb-8 text-center">
          Bagaimana Kami Dapat Membantu Anda?
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto text-center">
          Silakan hubungi kami melalui salah satu metode di bawah ini. Tim kami
          siap memberikan konsultasi dan solusi keamanan yang tepat untuk
          kebutuhan spesifik Anda.
        </p>

        {/* Main Contact Card - Menggabungkan informasi kontak dan formulir */}
        <div className="bg-neutral-800 p-8 lg:p-12 rounded-lg shadow-2xl max-w-4xl mx-auto">
          {/* Grid dua kolom di dalam kartu utama */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Kolom Kiri: Informasi Kontak Langsung */}
            <div className="space-y-8 flex flex-col items-center justify-center text-center md:text-left">
              <Image
                src="/bodyguard1.webp" // <-- Ganti dengan URL gambar bodyguard/perlindungan yang relevan
                alt="Bodyguard Profesional Sentinel Forces" // Deskripsi alt text
                width={600} // Sesuaikan lebar intrinsik gambar Anda
                height={400} // Sesuaikan tinggi intrinsik gambar Anda
                className="w-full h-auto rounded-lg shadow-xl object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://placehold.co/600x400/262626/888888?text=Bodyguard+Image';
                }}
              />
              <h3 className="text-2xl font-semibold text-yellow-400 font-plus-jakarta-sans mb-4">
                Informasi Kontak
              </h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center justify-center md:justify-start">
                  <FaPhone className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span>
                    Telepon:{' '}
                    <a
                      href="tel:+6281234567890"
                      className="hover:text-yellow-400"
                    >
                      +62 812-3456-7890
                    </a>
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <FaEnvelope className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span>
                    Email:{' '}
                    <a
                      href="mailto:info@sentinelforces.com"
                      className="hover:text-yellow-400"
                    >
                      info@sentinelforces.com
                    </a>
                  </span>
                </div>
                <div className="flex items-start justify-center md:justify-start">
                  <FaMapMarkerAlt className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Alamat: Jl. Raya Contoh No. 123, Bekasi, Jawa Barat,
                    Indonesia
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <FaClock className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span>Jam Operasional: Senin - Jumat, 09.00 - 17.00 WIB</span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Formulir Kontak */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 font-plus-jakarta-sans mb-6 text-center">
                Kirim Pesan kepada Kami
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-bold mb-2 text-left"
                  >
                    Nama Lengkap
                  </label>{' '}
                  {/* text-left untuk label */}
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Nama Lengkap Anda"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-bold mb-2 text-left"
                  >
                    Email
                  </label>{' '}
                  {/* text-left untuk label */}
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="email@contoh.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-300 text-sm font-bold mb-2 text-left"
                  >
                    Nomor Telepon
                  </label>{' '}
                  {/* text-left untuk label */}
                  <input
                    ref={phoneRef}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="+62 8xx xxxx xxxx"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-300 text-sm font-bold mb-2 text-left"
                  >
                    Jenis Layanan yang Diminati
                  </label>{' '}
                  {/* text-left untuk label */}
                  <select
                    ref={serviceRef}
                    id="service"
                    name="service"
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Pilih Layanan</option>
                    <option value="Outsourcing Security">
                      Outsourcing Security
                    </option>
                    <option value="Bodyguard Pribadi">Bodyguard Pribadi</option>
                    <option value="Pengamanan Event & Konser">
                      Pengamanan Event & Konser
                    </option>
                    <option value="Pelatihan Keamanan">
                      Pelatihan Keamanan
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-bold mb-2 text-left"
                  >
                    Pesan Anda
                  </label>{' '}
                  {/* text-left untuk label */}
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md transition duration-300"
                >
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
