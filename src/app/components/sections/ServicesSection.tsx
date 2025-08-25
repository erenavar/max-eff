"use client";

import { Factory, Cpu, Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Factory,
    title: "Danışmanlık",
    desc: "Enerji etütleri, ISO 50001, proses analizi ve yatırım önceliklendirme.",
  },
  {
    icon: Cpu,
    title: "Proto-typing",
    desc: "Hızlı donanım/yazılım prototipleri, saha testleri ve ölçeklenebilir PoC.",
  },
  {
    icon: Leaf,
    title: "Enerji Verimliliği",
    desc: "Motor/kompresör optimizasyonu, ısı geri kazanım, VSD ve otomasyon çözümleri.",
  },
  {
    icon: ShieldCheck,
    title: "Güvence ve İzleme",
    desc: "Ölç-Doğrula (M&V), IoT sensörleri ve dijital ikiz ile sürekli performans.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F4F4F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold">
            Hizmetlerimiz
          </motion.h2>
          <a
            href="#contact"
            className="text-sm underline underline-offset-4 hover:text-[#3FBF7F] transition-colors">
            Uzmanla görüşün
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-lg transition-all">
                <Icon className="h-8 w-8 text-[#3FBF7F]" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed">
                  {service.desc}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm text-[#0A2342] group-hover:gap-3 transition-all">
                  İncele <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
