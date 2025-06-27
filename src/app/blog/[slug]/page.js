import { getPostData, getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Shield } from "lucide-react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./BlogPost.module.css";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${postData.title} | Sentinel Forces Blog`,
    description: postData.excerpt,
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      images: [postData.image],
      type: "article",
    },
  };
}

export default async function PostPage({ params }) {
  let postData;

  try {
    postData = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <Navbar />

      {/* Hero Section for Article */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url('${postData.image || "/hero4.webp"}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
        <div className="relative z-10 text-center container mx-auto px-4 font-open-sans">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {postData.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-plus-jakarta-sans leading-tight max-w-4xl mx-auto">
            {postData.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm mt-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>
                {new Date(postData.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{postData.readingTime}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{postData.author || "Tim Sentinel Forces"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Section - Dark Elegant */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link
                href="/blog"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8 font-semibold transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Kembali ke Blog
              </Link>

              {/* Article Content */}
              <article className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-8 lg:p-12">
                <div
                  className={styles.articleContent}
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-gray-700/50">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <span>Dipublikasikan pada</span>
                      <span className="mx-2">•</span>
                      <time className="text-orange-400">
                        {new Date(postData.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      <span>{postData.author || "Tim Sentinel Forces"}</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-white mr-4" />
              <h2 className="text-3xl font-bold font-plus-jakarta-sans">
                Butuh Layanan Security Profesional?
              </h2>
            </div>

            <p className="text-xl text-orange-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Konsultasikan kebutuhan keamanan Anda dengan tim ahli Sentinel
              Forces. Kami siap memberikan solusi terbaik 24/7 di seluruh Bali.
            </p>

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
                <span className="text-white font-semibold">
                  Sentinel Forces
                </span>{" "}
                - Perusahaan keamanan terpercaya dengan pengalaman 10+ tahun
                melayani klien di Bali.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
