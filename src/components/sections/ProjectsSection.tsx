"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Büyük Ölçekli Kompresör Optimizasyonu",
    savings: "%22 enerji tasarrufu",
    payback: "7 ay geri ödeme",
  },
  {
    id: 2,
    title: "Endüstriyel Isı Geri Kazanımı",
    savings: "%35 enerji tasarrufu",
    payback: "14 ay geri ödeme",
  },
  {
    id: 3,
    title: "IoT Tabanlı İzleme Sistemi",
    savings: "%18 enerji tasarrufu",
    payback: "10 ay geri ödeme",
  },
  {
    id: 4,
    title: "VSD Motor Dönüşümü",
    savings: "%28 enerji tasarrufu",
    payback: "8 ay geri ödeme",
  },
  {
    id: 5,
    title: "SCADA Entegrasyonu",
    savings: "%15 enerji tasarrufu",
    payback: "12 ay geri ödeme",
  },
  {
    id: 6,
    title: "Dijital İkiz Uygulaması",
    savings: "%20 enerji tasarrufu",
    payback: "9 ay geri ödeme",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#F4F4F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold">
            Projeler
          </motion.h2>
          <a
            href="#"
            className="text-sm underline underline-offset-4 hover:text-[#3FBF7F] transition-colors">
            Tüm projeler
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-lg transition-all">
              <div className="aspect-[16/10] bg-gradient-to-br from-[#0A2342] to-[#3FBF7F] opacity-20" />
              <div className="p-5">
                <h3 className="font-semibold group-hover:text-[#3FBF7F] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-[#6E6E6E]">
                  {project.savings} · {project.payback}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
