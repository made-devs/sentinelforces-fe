import React from "react";

export default function VisiMisi() {
  const visiStatement =
    "Menjadi garda terdepan dalam industri keamanan profesional yang terpercaya, tangguh, dan berstandar internasional, serta menciptakan rasa aman dan perlindungan maksimal di setiap lini kehidupan.";

  const misiPoints = [
    "Menyediakan layanan keamanan komprehensif dengan personel berpengalaman dan terlatih.",
    "Menerapkan standar operasional global dan teknologi terkini dalam setiap layanan.",
    "Membangun kemitraan strategis dengan klien berdasarkan kepercayaan, integritas, dan hasil.",
    "Mengembangkan kompetensi personel melalui pelatihan berstandar internasional.",
  ];

  return (
    <section className="bg-white py-16 lg:py-24 font-open-sans">
      {" "}
      {/* Latar belakang putih untuk section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black font-plus-jakarta-sans mb-12">
          {" "}
          {/* Judul section berwarna hitam */}
          Visi & Misi Kami
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kolom Visi */}
          <div className="text-center md:text-left p-6 border-l-4 border-yellow-400 rounded-lg shadow-md bg-gray-50">
            {" "}
            {/* Card dengan background abu-abu sangat muda dan shadow */}
            <h3 className="text-3xl font-bold text-black font-plus-jakarta-sans mb-4">
              {" "}
              {/* Judul card berwarna hitam */}
              Visi Kami
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {" "}
              {/* Teks konten berwarna abu-abu gelap agar terbaca */}
              {visiStatement}
            </p>
          </div>

          {/* Kolom Misi */}
          <div className="text-center md:text-left p-6 border-l-4 border-yellow-400 rounded-lg shadow-md bg-gray-50">
            {" "}
            {/* Card dengan background abu-abu sangat muda dan shadow */}
            <h3 className="text-3xl font-bold text-black font-plus-jakarta-sans mb-4">
              {" "}
              {/* Judul card berwarna hitam */}
              Misi Kami
            </h3>
            <ul className="text-lg text-gray-700 space-y-3 leading-relaxed list-disc list-inside">
              {" "}
              {/* Teks konten berwarna abu-abu gelap */}
              {misiPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
