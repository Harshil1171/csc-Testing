"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { eventsGallery } from "@/config/site";

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const SLIDE_DURATION_MS = 4500;
const BLUR_PX = 12;

export default function HeroSlider() {
  const allImages = eventsGallery.flatMap((e) => e.images);
  const [images, setImages] = useState(allImages);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setImages(shuffle([...allImages]));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(next, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [images.length, next]);

  if (images.length === 0) return null;

  const currentSrc = images[index];

  return (
    <div className="absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSrc}
          initial={{ opacity: 0, filter: `blur(${BLUR_PX}px)` }}
          animate={{
            opacity: 0.4,
            filter: "blur(0px)",
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            filter: `blur(${BLUR_PX}px)`,
            transition: { duration: 0.9, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentSrc}
            alt="CSC events"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-b from-[#0c2340]/10 via-[#0c2340]/10 to-[#0c2340]" />
    </div>
  );
}
