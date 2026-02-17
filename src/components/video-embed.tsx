"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface VideoEmbedProps {
  url: string;
  title?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

function getEmbedUrl(url: string): string {
  // YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  if (ytMatch) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0&modestbranding=1&playsinline=1`;
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0&title=0`;
  }

  return url;
}

export function VideoEmbed({
  url,
  title = "Video",
  aspectRatio = "16/9",
}: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const embedUrl = getEmbedUrl(url);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0.3 }}
      transition={{ duration: 0.4 }}
      className="my-8"
    >
      <div
        className="relative w-full overflow-hidden rounded-sm bg-border/20"
        style={{ aspectRatio }}
      >
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
