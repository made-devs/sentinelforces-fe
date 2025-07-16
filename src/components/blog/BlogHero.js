export default function BlogHero() {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/hero3.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>
      <div className="relative z-10 text-center container mx-auto px-4 font-open-sans">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta-sans leading-tight">
          Blog
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Tips keamanan, panduan security, dan insight terbaru dari tim
          profesional dengan pengalaman lebih dari 10 tahun.
        </p>
      </div>
    </section>
  );
}
