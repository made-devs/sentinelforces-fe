/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos", // <-- Tambahkan hostname ini di sini
      // Jika Anda menggunakan domain lain untuk gambar eksternal (misal: 'picsum.photos', 'cdn.example.com'), tambahkan juga di sini.
    ],
  },
};

export default nextConfig;
