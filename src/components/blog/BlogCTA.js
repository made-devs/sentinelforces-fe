import Link from "next/link";
import { Shield, Phone, MessageCircle } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-white mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold font-plus-jakarta-sans">
              Butuh Konsultasi Keamanan?
            </h2>
          </div>

          <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Tim ahli Sentinel Forces siap membantu memberikan solusi keamanan
            terbaik untuk kebutuhan personal, bisnis, atau event Anda.
            Konsultasi gratis 24/7.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Bodyguard Profesional</h3>
              <p className="text-orange-100 text-sm">
                Perlindungan VIP & personal security
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Konsultasi 24/7</h3>
              <p className="text-orange-100 text-sm">
                Siap melayani kapan saja dibutuhkan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Respons Cepat</h3>
              <p className="text-orange-100 text-sm">
                Tim standby untuk emergency call
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/#contact-section"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 text-lg"
            >
              Konsultasi Gratis Sekarang
            </Link>

            <Link
              href="tel:+6282210000522"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 text-lg"
            >
              Hubungi: +62 822-1000-0522
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-orange-400/30">
            <p className="text-orange-100 text-sm">
              <span className="text-white font-semibold">Sentinel Forces</span>{" "}
              - Perusahaan keamanan terpercaya dengan pengalaman 10+ tahun
              melayani klien VIP, perusahaan multinasional, dan event besar di
              Bali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
