"use client";

import {
  Factory,
  Cpu,
  Leaf,
  ShieldCheck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import type { Service, SectionProps } from "@/types/index";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ServicesSection: React.FC<SectionProps> = ({ className = "" }) => {
  const services: Service[] = [
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

  const handleServiceClick = (serviceTitle: string): void => {
    console.log(`Service clicked: ${serviceTitle}`);
    // Add navigation or modal logic here
  };

  return (
    <section id="services" className={`bg-[#F4F4F4] ${className}`}>
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

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {services.map((service: Service, index: number) => {
            const Icon: LucideIcon = service.icon as LucideIcon;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
                role="article"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleServiceClick(service.title);
                  }
                }}>
                <Icon className="h-8 w-8 text-[#3FBF7F]" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed">
                  {service.desc}
                </p>
                <button
                  className="mt-6 inline-flex items-center gap-2 text-sm text-[#0A2342] group-hover:gap-3 transition-all"
                  aria-label={`${service.title} hakkında daha fazla bilgi`}>
                  İncele <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
