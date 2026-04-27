"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { eventsGallery } from "@/config/site";

export default function EventsGalleryClient() {
  const searchParams = useSearchParams();
  const eventSlug = searchParams.get("event");
  const initialId =
    eventsGallery.find((e) => e.id === eventSlug)?.id ?? eventsGallery[0].id;
  const [activeCategory, setActiveCategory] = useState(initialId);

  useEffect(() => {
    if (eventSlug && eventsGallery.some((e) => e.id === eventSlug)) {
      setActiveCategory(eventSlug);
    }
  }, [eventSlug]);

  const activeEvent = eventsGallery.find((e) => e.id === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="bg-[#0c2340] py-12 text-white sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Events Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-white/90"
          >
            Glimpses from our science and community events
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Category tabs - horizontal scroll on mobile */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-thin sm:mb-10">
          <div className="flex gap-2 sm:flex-wrap sm:justify-center">
            {eventsGallery.map((event) => (
              <button
                key={event.id}
                type="button"
                onClick={() => setActiveCategory(event.id)}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition cursor-pointer sm:px-5 ${
                  activeCategory === event.id
                    ? "bg-[#0c2340] text-white shadow-md"
                    : "bg-white text-slate-700 shadow ring-1 ring-slate-200 hover:bg-slate-50"
                }`}
              >
                {event.title}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          {activeEvent && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-semibold text-[#0c2340] sm:text-2xl">
                {activeEvent.title}
              </h2>
              <p className="text-slate-600">{activeEvent.description}</p>
              {/* Masonry-style gallery: columns flow naturally with mixed aspect ratios */}
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:balance]">
                {activeEvent.images.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className="mb-4 break-inside-avoid"
                  >
                    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/80 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-300/50 hover:ring-slate-300/60">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${activeEvent.title} - ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto block transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

