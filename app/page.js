"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { latestEvents, latestJaherat } from "@/config/site";
import AnimatedSection from "@/components/AnimatedSection";
import EventCard from "@/components/EventCard";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero – auto slider with all event images, no link */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#0c2340] sm:min-h-[75vh] md:min-h-[80vh]">
        <HeroSlider />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:min-h-[75vh] sm:px-6 md:min-h-[80vh] lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Community Science Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-2 text-lg font-medium text-white/90 sm:text-xl md:text-2xl"
          >
            Lok Vigyan Kendra · Palanpur
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-2xl text-sm text-white/85 sm:text-base md:mt-6"
          >
            Promoting science literacy, energy conservation, and scientific
            temper under Banas Gram Vikas Samiti
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8"
          >
            <Link
              href="/about"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0c2340] shadow-lg transition hover:bg-white/95 active:scale-[0.98]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white/80 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Jaherat / announcements */}
      {latestJaherat?.length > 0 && (
        <AnimatedSection className="mx-auto max-w-7xl px-4 pt-6 pb-4 sm:px-6 sm:pt-10 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 shadow-sm sm:p-6">
            <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-bold text-[#0c2340] sm:text-xl">
                Latest Jaherat
              </h2>
              <p className="max-w-md text-xs text-amber-900/80 sm:text-sm">
                Day-to-day announcements and registration links. Update items
                easily from the configuration file.
              </p>
            </div>

            <ul className="space-y-3">
              {latestJaherat.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-2 rounded-xl border border-amber-100 bg-white/90 px-3 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 min-w-10 items-center justify-center rounded-full bg-red-600 px-2 text-[11px] font-semibold uppercase tracking-wide text-white">
                      New
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0c2340] sm:text-base">
                        {item.title}
                      </p>
                      {item.note && (
                        <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {item.registrationUrl && (
                    <Link
                      href={item.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-[#0c2340] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#061a2e] sm:px-4 sm:text-sm"
                    >
                      Registration Link
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      )}

      {/* Mission summary */}
      <AnimatedSection className="mx-auto max-w-7xl px-4 pt-5 pb-0 sm:px-6 sm:py-16 lg:px-8 lg:pt-10 lg:pb-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[#0c2340] sm:text-3xl">
            Our Mission
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed sm:text-lg">
            The Community Science Center (CSC) Lok Vigyan Kendra at Palanpur
            works to spread scientific awareness and energy conservation in the
            region. Through exhibits, workshops, and initiatives like{" "}
            <strong>Urja Rakshaks</strong>, we empower citizens to adopt
            sustainable practices. Operating under the{" "}
            <strong>Banas Gram Vikas Samiti</strong>, we aim to build a
            scientifically literate and energy-conscious community.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-[#0c2340] underline decoration-[#0c2340]/40 underline-offset-4 hover:decoration-[#0c2340]"
          >
            Read more about us →
          </Link>
        </div>
      </AnimatedSection>

      {/* Latest Events */}
      <section className="bg-slate-50/80 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col items-center justify-between gap-4 sm:mb-10 sm:flex-row"
          >
            <h2 className="text-2xl font-bold text-[#0c2340] sm:text-3xl">
              Latest Events
            </h2>
            <Link
              href="/events"
              className="rounded-lg bg-[#0c2340] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#061a2e]"
            >
              View all events
            </Link>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
