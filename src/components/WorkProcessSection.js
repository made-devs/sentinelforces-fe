// Tidak perlu 'use client' jika tidak ada interaktivitas spesifik client-side lain atau hooks
// Jika Anda menggunakan Hooks (misal: useRef, useEffect) di luar ini, 'use client' tetap diperlukan.
// Untuk fixed background saja, tidak perlu.

import {
  FaComments,
  FaClipboardList,
  FaUsersCog,
  FaChartLine,
} from "react-icons/fa"; // Atau ikon lain yang sesuai

export default function WorkProcessSection() {
  // processSteps tetap sama
  const processSteps = [
    {
      icon: FaComments,
      title: "Konsultasi Awal",
      description:
        "Kami memulai dengan sesi konsultasi mendalam untuk memahami secara menyeluruh kebutuhan spesifik Anda, tujuan pengamanan, dan potensi risiko yang mungkin ada.",
    },
    {
      icon: FaClipboardList,
      title: "Analisis & Perencanaan",
      description:
        "Tim ahli kami akan melakukan analisis risiko komprehensif, kemudian menyusun strategi keamanan yang dipersonalisasi dan rencana operasional yang detail.",
    },
    {
      icon: FaUsersCog,
      title: "Implementasi Profesional",
      description:
        "Setelah rencana disetujui, personel keamanan terbaik kami akan ditugaskan dan mulai melaksanakan tugas sesuai protokol standar internasional, dengan dukungan penuh dari manajemen.",
    },
    {
      icon: FaChartLine, // Opsional: jika ingin 4 langkah
      title: "Pemantauan & Evaluasi",
      description:
        "Kami memastikan efektivitas layanan dengan pemantauan berkelanjutan, pelaporan berkala, dan penyesuaian strategi jika diperlukan untuk menjamin perlindungan maksimal.",
    },
  ];

  return (
    // Terapkan background image, size, position, dan attachment: fixed langsung pada section
    // Hapus bg-neutral-900 karena sudah ada backgroundImage
    <section
      className="py-16 lg:py-24 font-open-sans relative overflow-hidden"
      style={{
        backgroundImage: "url('/bodyguard.webp')", // Gambar background tetap
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // <-- Ini yang membuat background diam
      }}
    >
      {/* Overlay Gelap pada Background Fixed */}
      {/* Opacity 0.4 agar konten di atasnya tetap terbaca */}
      <div className="absolute inset-0 z-[1] bg-black opacity-40"></div>{" "}
      {/* z-[1] agar di atas background fixed */}
      {/* Konten Utama Section - Pastikan z-index lebih tinggi dari overlay */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-[2]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-plus-jakarta-sans mb-8">
          Proses Kerja Kami
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Kami telah menyederhanakan prosesnya agar Anda dapat dengan mudah
          mengakses layanan keamanan profesional yang Anda butuhkan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-neutral-800 px-6 pb-8 pt-16 rounded-lg shadow-lg flex flex-col items-start text-left"
            >
              {/* Icon Container */}
              <div className="absolute left-6 top-0 transform -translate-y-1/2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400 text-black shadow-lg">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
              {/* Konten Teks */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
