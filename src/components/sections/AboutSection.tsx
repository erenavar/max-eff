"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Tamamlanan Proje", value: "250+" },
  { label: "Ortalama Tasarruf", value: "%18" },
  { label: "Müşteri Memnuniyeti", value: "%96" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Sürdürülebilir Büyüme İçin Güvenilir Partner
          </h2>
          <p className="mt-4 text-[#6E6E6E] leading-relaxed">
            10+ yıllık saha deneyimi ile; enerji etütleri, proses optimizasyonu,
            veri odaklı karar destek ve uygulama projeleri geliştiriyoruz.
            Misyonumuz; maliyetleri kalıcı biçimde düşürürken karbon ayak izini
            azaltmak.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-[#F4F4F4] p-5 text-center">
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="mt-1 text-xs text-[#6E6E6E]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-video w-full rounded-3xl bg-[#F4F4F4] flex items-center justify-center text-[#6E6E6E]"
          aria-hidden="true">
          {/* Add image or video here */}
          <span>Company Visual</span>
        </motion.div>
      </div>
    </section>
  );
}
