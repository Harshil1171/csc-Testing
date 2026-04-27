"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

function buildWhatsAppUrl(formData) {
  const message = [
    `Name: ${formData.name}`,
    `Mobile: ${formData.mobile}`,
    `Email: ${formData.email}`,
    ``,
    `Message:`,
    formData.message,
  ].join("\n");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, mobile: true, email: true, message: true });
    const hasError =
      !formData.name.trim() ||
      !formData.mobile.trim() ||
      !formData.email.trim() ||
      !formData.message.trim();
    if (hasError) return;
    const url = buildWhatsAppUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const nameError = touched.name && !formData.name.trim();
  const mobileError = touched.mobile && !formData.mobile.trim();
  const emailError = touched.email && !formData.email.trim();
  const messageError = touched.message && !formData.message.trim();

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-white/90"
          >
            Get in touch via the form below — we&apos;ll reply on WhatsApp
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200/80 sm:p-8"
        >
          <p className="mb-6 text-sm text-slate-600">
            Fill in your details and submit. You will be redirected to WhatsApp
            with your message pre-filled for instant communication.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your full name"
                className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c2340] sm:text-base ${
                  nameError ? "border-red-400" : "border-slate-300"
                }`}
                autoComplete="name"
              />
              {nameError && (
                <p className="mt-1 text-sm text-red-500">Name is required</p>
              )}
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-slate-700"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. 9327013544"
                className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c2340] sm:text-base ${
                  mobileError ? "border-red-400" : "border-slate-300"
                }`}
                autoComplete="tel"
              />
              {mobileError && (
                <p className="mt-1 text-sm text-red-500">
                  Mobile number is required
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="your@email.com"
                className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c2340] sm:text-base ${
                  emailError ? "border-red-400" : "border-slate-300"
                }`}
                autoComplete="email"
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">Email is required</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your message or query..."
                rows={4}
                className={`mt-1.5 w-full resize-y rounded-lg border px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0c2340] sm:text-base ${
                  messageError ? "border-red-400" : "border-slate-300"
                }`}
              />
              {messageError && (
                <p className="mt-1 text-sm text-red-500">Message is required</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#0c2340] px-4 py-3 font-semibold text-white shadow-md transition hover:bg-[#061a2e] focus:ring-2 focus:ring-[#0c2340] focus:ring-offset-2 active:scale-[0.99] sm:py-3.5"
            >
              Send via WhatsApp
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10 rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200/80"
        >
          <h3 className="font-semibold text-[#0c2340]">Visit or call</h3>
          <p className="mt-2 text-slate-600">
            {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
            {siteConfig.address.city}, {siteConfig.address.state}{" "}
            {siteConfig.address.pincode}
          </p>
          <p className="mt-2">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-[#0c2340] underline decoration-[#0c2340]/40 underline-offset-2 hover:decoration-[#0c2340]"
            >
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#0c2340] underline decoration-[#0c2340]/40 underline-offset-2 hover:decoration-[#0c2340]"
            >
              {siteConfig.email}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
