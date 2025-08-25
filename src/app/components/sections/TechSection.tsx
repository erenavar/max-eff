"use client";

import { motion } from "framer-motion";

export default function TechSection() {
  return (
    <section id="tech" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold">
          Teknolojiler
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-3xl text-[#6E6E6E]">
          Veri toplama katmanı (IoT), analitik (ML tabanlı anomali tespiti),
          kontrol (SCADA/PLC entegrasyonları) ve görselleştirme (web panoları)
          ile uçtan uca bir mimari.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold">Mimari Diyagram</h3>
            <div className="mt-3 aspect-[16/9] rounded-2xl bg-[#F4F4F4] flex items-center justify-center text-[#6E6E6E]">
              <span>Technical Diagram</span>
            </div>
            <ul className="mt-4 list-disc pl-5 text-sm text-[#6E6E6E]">
              <li>Edge cihazlar ile gerçek zamanlı veri</li>
              <li>Bulut tabanlı analitik ve alarm motoru</li>
              <li>MES/ERP entegrasyonları</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold">Öne Çıkan Özellikler</h3>
            <ul className="mt-3 grid gap-3 text-sm text-[#6E6E6E]">
              <li>• Dijital ikiz ve senaryo simülasyonu</li>
              <li>• Otomatik M&V raporları</li>
              <li>• Güvenlik: RBAC, şifreli iletişim</li>
              <li>• Ölçeklenebilir mikroservis altyapısı</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
