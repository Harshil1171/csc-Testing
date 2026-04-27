"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#0c2340] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
                <Image
                  src="/logo.jpeg"
                  alt="CSC Lok Vigyan Kendra Palanpur logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight">
                  District Community Science Center
                </span>
                <span className="text-xs text-white/80">
                  Lok Vigyan Kendra, Banaskantha
                </span>
              </div>
            </Link>
            <p className="mt-3 text-sm text-white/80">
              Community Science Center under Banas Gram Vikas Samiti.
              Promoting science literacy and energy conservation in Palanpur.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  Events Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <address className="mt-4 not-italic text-sm text-white/80">
              <p className="font-medium text-white">Address</p>
              <p>{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.pincode}
              </p>
              <p className="mt-3 font-medium text-white">Phone</p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white"
              >
                {siteConfig.phone}
              </a>
              <p className="mt-3 font-medium text-white">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white"
              >
                {siteConfig.email}
              </a>
              <br />
              <a
                href={`mailto:${siteConfig.email2}`}
                className="break-all text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white"
              >
                {siteConfig.email2}
              </a>
            </address>
          </div>
        </div>

        <div className="flex justify-between mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} Community Science Center - Lok Vigyan
            Kendra Palanpur. All rights reserved.
          </p>
          <p>
            Made by{" "}
            <Link
              href="https://harsh4.in"
              className="text-white/80 underline decoration-white/30 underline-offset-2 transition hover:text-white hover:decoration-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harsh Prajapati
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
