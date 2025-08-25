"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const insights = [
  {
    title: "ISO 50001 ile Kalıcı Tasarruf",
    tag: "Makale",
    excerpt:
      "Kısa özet metni — okuyucuyu içeriğe davet eden, net ve değer sunan bir paragraf.",
  },
  {
    title: "VSD Uygulamalarında En İyi Pratikler",
    tag: "Blog",
    excerpt:
      "Kısa özet metni — okuyucuyu içeriğe davet eden, net ve değer sunan bir paragraf.",
  },
  {
    title: "Anomali Tespitinde ML Yaklaşımları",
    tag: "Rapor",
    excerpt:
      "Kısa özet metni — okuyucuyu içeriğe davet eden, net ve değer sunan bir paragraf.",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold">
            İçgörüler
          </motion.h2>
          <a
            href="#"
            className="text-sm underline underline-offset-4 hover:text-[#3FBF7F] transition-colors">
            Tüm yazılar
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-gray-100 p-6 hover:shadow-lg transition-all">
              <div className="text-xs text-white inline-flex rounded-full bg-[#0A2342] px-2 py-1">
                {insight.tag}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{insight.title}</h3>
              <p className="mt-2 text-sm text-[#6E6E6E]">{insight.excerpt}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm text-[#0A2342] hover:text-[#3FBF7F] transition-colors">
                Oku <ArrowRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
