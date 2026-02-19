"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const lightRef = useRef<HTMLVideoElement>(null);
  const darkRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    const dark = darkRef.current;

    let ended = false;

    const handleEnded = () => {
      if (ended) return;
      ended = true;
      // Small pause after video ends before fading out
      setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 400);
      }, 200);
    };

    light?.addEventListener("ended", handleEnded);
    dark?.addEventListener("ended", handleEnded);

    // Fallback timeout in case video fails to load
    const fallback = setTimeout(() => {
      if (!ended) {
        ended = true;
        setVisible(false);
        setTimeout(onComplete, 400);
      }
    }, 5000);

    return () => {
      light?.removeEventListener("ended", handleEnded);
      dark?.removeEventListener("ended", handleEnded);
      clearTimeout(fallback);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-[#0a0a0a]"
        >
          {/* Light mode video */}
          <video
            ref={lightRef}
            src="/signature-video-light.mov"
            autoPlay
            muted
            playsInline
            className="max-w-[280px] w-full h-auto block dark:hidden border-0 outline-0"
            style={{ background: "transparent" }}
          />
          {/* Dark mode video */}
          <video
            ref={darkRef}
            src="/signature-video-dark.mov"
            autoPlay
            muted
            playsInline
            className="max-w-[280px] w-full h-auto hidden dark:block border-0 outline-0"
            style={{ background: "transparent" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
