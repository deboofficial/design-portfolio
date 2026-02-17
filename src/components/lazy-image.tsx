"use client";

import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface LazyImageProps extends Omit<ImageProps, "onLoad"> {
  caption?: string;
  onClick?: () => void;
}

export function LazyImage({ caption, onClick, alt, ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={onClick ? "cursor-pointer" : ""} onClick={onClick}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-sm bg-border/20"
      >
        <Image
          {...props}
          alt={alt}
          onLoad={() => setLoaded(true)}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI3NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2U1ZTVlNSIvPjwvc3ZnPg=="
        />
      </motion.div>
      {caption && (
        <figcaption className="mt-3 text-[12px] text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
