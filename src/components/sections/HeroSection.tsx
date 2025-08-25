"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative isolate pt-24">
      {/* Video/Image Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-fallback.jpg">
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0A2342]/60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-tight">
          Enerjide Verimlilik, Gelecekte Güç
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-white/85">
          Maxeff; endüstriyel tesislere danışmanlıktan prototiplemeye, ileri
          analitik ve otomasyon teknolojilerine kadar uçtan uca enerji
          verimliliği çözümleri sunar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#services"
            className="rounded-2xl bg-[#3FBF7F] px-6 py-3 text-[#0A2342] font-medium hover:opacity-90 transition-opacity">
            Hizmetlerimiz
          </a>
          <a
            href="#tech"
            className="rounded-2xl border border-white/40 px-6 py-3 text-white hover:bg-white/10 transition-colors">
            Teknolojilerimiz
          </a>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors">
            <Play className="h-4 w-4" />
            Tanıtım
          </button>
        </motion.div>
      </div>
    </section>
  );
}
