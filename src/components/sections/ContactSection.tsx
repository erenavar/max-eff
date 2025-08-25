"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="bg-[#F4F4F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Bizimle İletişime Geçin</h2>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input
              className="rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3FBF7F] transition-all"
              placeholder="Ad Soyad"
              aria-label="Ad Soyad"
              required
            />
            <input
              type="email"
              className="rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3FBF7F] transition-all"
              placeholder="E-posta"
              aria-label="E-posta"
              required
            />
            <input
              className="rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3FBF7F] transition-all"
              placeholder="Konu"
              aria-label="Konu"
              required
            />
            <textarea
              className="rounded-2xl border px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3FBF7F] transition-all"
              placeholder="Mesajınız"
              aria-label="Mesaj"
              required
            />
            <button
              type="submit"
              className="rounded-2xl bg-[#3FBF7F] px-6 py-3 text-[#0A2342] font-medium hover:opacity-90 transition-opacity">
              Gönder
            </button>
          </form>

          <div className="mt-6 space-y-2 text-sm text-[#6E6E6E]">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> info@maxeff.com.tr
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +90 (212) 000 00 00
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> İstanbul, Türkiye
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden ring-1 ring-gray-100">
          <iframe
            title="Harita"
            className="h-full w-full min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Istanbul&t=m&z=10&output=embed&iwloc=near"
          />
        </motion.div>
      </div>
    </section>
  );
}
