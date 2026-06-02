"use client";

import Image from "next/image";
import { useState } from "react";

type YouTubePlayerProps = {
  videoId: string;
  title: string;
};

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(233,241,255,0.95),rgba(228,237,252,0.92))]">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          aria-label="Play video"
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            unoptimized
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,61,0.12),rgba(10,26,61,0.28))]" />
          <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(13,36,82,0.88)] text-white shadow-[0_20px_40px_rgba(13,36,82,0.28)] transition duration-200 hover:scale-105 hover:bg-[var(--primary-dark)]">
            <span className="ml-1 block h-0 w-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white" />
          </span>
        </button>
      )}
    </div>
  );
}
