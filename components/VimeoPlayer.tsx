"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Vimeo?: {
      Player: new (element: HTMLIFrameElement) => VimeoPlayerInstance;
    };
  }
}

type VimeoPlayerInstance = {
  on: (event: string, callback: () => void) => void;
  play: () => Promise<void>;
  pause: () => Promise<void>;
};

type VimeoPlayerProps = {
  videoId: string;
  title: string;
};

export default function VimeoPlayer({ videoId, title }: VimeoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<VimeoPlayerInstance | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateTouchState = () => setIsTouchDevice(mediaQuery.matches);

    updateTouchState();
    mediaQuery.addEventListener("change", updateTouchState);

    return () => mediaQuery.removeEventListener("change", updateTouchState);
  }, []);

  useEffect(() => {
    if (!isReady || !iframeRef.current || !window.Vimeo || playerRef.current) {
      return;
    }

    const player = new window.Vimeo.Player(iframeRef.current);
    playerRef.current = player;

    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));
    player.on("ended", () => setIsPlaying(false));
  }, [isReady]);

  const togglePlayback = async () => {
    if (!playerRef.current) {
      return;
    }

    if (isPlaying) {
      await playerRef.current.pause();
      return;
    }

    await playerRef.current.play();
  };

  const showOverlay = !isPlaying || (!isTouchDevice && isHovered);

  return (
    <>
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="afterInteractive"
        onLoad={() => setIsReady(true)}
      />

      <div
        className="group relative aspect-video w-full bg-[radial-gradient(circle_at_top,rgba(233,241,255,0.95),rgba(228,237,252,0.92))]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&controls=0&dnt=1&play_button_position=center`}
          title={title}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />

        <button
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={togglePlayback}
          className={`absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(13,36,82,0.88)] text-white shadow-[0_20px_40px_rgba(13,36,82,0.28)] transition duration-200 hover:scale-105 hover:bg-[var(--primary-dark)] ${
            showOverlay ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {isPlaying ? (
            <span className="flex items-center gap-1">
              <span className="h-7 w-2 rounded-full bg-white" />
              <span className="h-7 w-2 rounded-full bg-white" />
            </span>
          ) : (
            <span className="ml-1 block h-0 w-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white" />
          )}
        </button>

        {isPlaying && isTouchDevice ? (
          <button
            type="button"
            aria-label="Pause video"
            onClick={togglePlayback}
            className="absolute inset-0 z-10 bg-transparent"
          />
        ) : null}
      </div>
    </>
  );
}
