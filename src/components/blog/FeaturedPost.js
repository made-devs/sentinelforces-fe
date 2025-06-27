import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function FeaturedPost({ post }) {
  if (!post) return null;

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-plus-jakarta-sans text-white mb-4">
            Artikel Terbaru
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={post.image || "/images/blog/default.jpg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-plus-jakarta-sans leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readingTime}</span>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 font-semibold hover:shadow-lg hover:-translate-y-1 w-fit group"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
