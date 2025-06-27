import { getSortedPostsData } from "../../lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCTA from "@/components/blog/BlogCTA";

export const metadata = {
  title: "Blog Security & Keamanan | Sentinel Forces Bali",
  description:
    "Tips keamanan, panduan security, dan insight terbaru dari tim profesional Sentinel Forces",
  keywords:
    "blog security, tips keamanan bali, bodyguard tips, artikel keamanan",
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  const featuredPost = allPostsData[0];
  const otherPosts = allPostsData.slice(1);

  return (
    <>
      <Navbar />
      <BlogHero />

      {/* Main Content with Dark Background */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10">
          <FeaturedPost post={featuredPost} />
          <BlogGrid posts={otherPosts} />
        </div>
      </div>

      <BlogCTA />
      <Footer />
    </>
  );
}
