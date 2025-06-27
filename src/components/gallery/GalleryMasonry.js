"use client";

import React, { useState, useEffect } from "react";

const GalleryMasonry = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Data gambar dengan metadata
  const galleryData = [
    {
      id: 1,
      src: "/security1.webp",
      title: "Penjagaan Akses Masuk",
      description:
        "Personel keamanan sedang berjaga di pintu masuk kantor untuk memastikan keamanan dan protokol akses.",
      category: "operational",
      date: "2025-06-20",
    },
    {
      id: 2,
      src: "/security2.webp",
      title: "Tim Security Profesional",
      description: "Tim keamanan siap siaga 24/7",
      category: "team",
      date: "2024-03-10",
    },
    {
      id: 3,
      src: "/security3.webp",
      title: "Tim Keamanan Bertugas",
      description:
        "Dua personel keamanan siap siaga dengan perlengkapan komunikasi, mencerminkan profesionalisme dan kesiapsiagaan tim.",
      category: "team",
      date: "2025-06-20",
    },
    {
      id: 4,
      src: "/client1.webp",
      title: "Silaturahmi dengan Klien",
      description:
        "Personel keamanan menjalin hubungan baik dengan klien dalam suasana santai, mencerminkan kepercayaan dan profesionalisme.",
      category: "client",
      date: "2025-06-20",
    },
    {
      id: 5,
      src: "/security5.webp",
      title: "Security Briefing",
      description: "Briefing harian tim keamanan",
      category: "team",
      date: "2024-03-01",
    },
    {
      id: 6,
      src: "/security6.webp",
      title: "Pelatihan Khusus",
      description: "Pelatihan teknik keamanan advance",
      category: "team",
      date: "2024-02-28",
    },
    {
      id: 7,
      src: "/security7.webp",
      title: "Event Security",
      description: "Pengamanan acara corporate",
      category: "operations",
      date: "2024-02-25",
    },
    {
      id: 8,
      src: "/hero.webp",
      title: "Formasi Tim Keamanan",
      description:
        "Foto resmi tim keamanan yang siap menjalankan tugas dengan profesionalisme dan kekompakan di depan kantor operasional.",
      category: "team",
      date: "2025-06-20",
    },
    {
      id: 9,
      src: "/security9.webp",
      title: "Koordinasi Lapangan",
      description:
        "Personel keamanan sedang melakukan koordinasi melalui radio komunikasi di area luar gedung sebagai bagian dari patroli rutin.",
      category: "operations",
      date: "2025-06-20",
    },
    {
      id: 10,
      src: "/bodyguard1.webp",
      title: "Security Equipment",
      description: "Peralatan keamanan modern dan canggih",
      category: "operations",
      date: "2024-02-15",
    },
    {
      id: 11,
      src: "/security10.webp",
      title: "Pengamanan Event Outdoor",
      description:
        "Petugas keamanan bersiaga di area hiburan outdoor untuk memastikan keamanan dan ketertiban selama acara berlangsung.",
      category: "operations",
      date: "2025-06-20",
    },
    {
      id: 12,
      src: "/client3.webp",
      title: "Pertemuan dengan Klien",
      description:
        "Pertemuan profesional antara tim keamanan dan klien untuk menjalin kerja sama yang saling menguntungkan.",
      category: "client",
      date: "2025-06-20",
    },
  ];

  const categories = [
    { key: "all", label: "Semua" },
    { key: "team", label: "Tim" },
    { key: "client", label: "Klien" },
    { key: "operations", label: "Operasional" },
  ];

  const filteredImages =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Masonry heights for varied layout
  const getMasonryHeight = (index) => {
    const heights = [
      "h-64",
      "h-80",
      "h-72",
      "h-96",
      "h-64",
      "h-88",
      "h-72",
      "h-80",
      "h-64",
    ];
    return heights[index % heights.length];
  };

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                filter === cat.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className={`${getMasonryHeight(
                  index
                )} bg-gray-800 rounded-xl animate-pulse`}
              />
            ))}
          </div>
        ) : (
          /* Masonry Grid */
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-6 group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200 mb-3">
                        {image.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span>{formatDate(image.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                            <line x1="7" y1="7" x2="7.01" y2="7" />
                          </svg>
                          <span className="capitalize">{image.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-white"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="21 21l-4.35-4.35" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Tidak ada gambar dalam kategori ini.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedImage.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{formatDate(selectedImage.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    <span className="capitalize">{selectedImage.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryMasonry;
