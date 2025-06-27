"use client";

import { Share2 } from "lucide-react";

export default function ShareButton({ title, url }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center text-gray-500 hover:text-orange-500 transition-colors"
    >
      <Share2 className="w-4 h-4 mr-2" />
      Bagikan Artikel
    </button>
  );
}
