"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EventCard({ event, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-200/80 transition-shadow hover:shadow-xl"
    >
      <Link href={`/events?event=${event.slug}`} className="block">
        <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
          <Image
            src={event.image}
            alt={event.title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0c2340]/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="font-semibold text-slate-800 group-hover:text-[#0c2340]">
            {event.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-600">
            {event.summary}
          </p>
          <span className="mt-2 inline-block text-sm font-medium text-[#0c2340]">
            View gallery →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
