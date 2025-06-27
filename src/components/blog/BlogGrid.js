import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-plus-jakarta-sans text-white mb-4">
              Artikel Lainnya
            </h2>
            <p className="text-gray-400">
              Artikel lainnya akan segera hadir...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-plus-jakarta-sans text-white mb-4">
            Artikel Lainnya
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700/50 hover:border-orange-500/30 group"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/images/blog/default.jpg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 font-plus-jakarta-sans leading-tight line-clamp-2 hover:text-orange-400 transition-colors group-hover:text-orange-400">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readingTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold text-sm transition-all duration-200 hover:gap-2 group"
                  >
                    Baca Artikel
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
