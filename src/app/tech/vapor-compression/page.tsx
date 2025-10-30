"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Recycle,
  Factory,
  Gauge,
  CheckCircle,
  ArrowRight,
  Settings,
  Zap,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function VaporCompressionPage() {
  const highlights = [
    "Atık ısının yeniden değerlendirilmesinde yüksek verimli açık veya kapalı çevrim tasarımlar",
    "Direkt atık buhar kullanımıyla düşük yatırım maliyeti",
    "Manyetik veya foil bearing yataklama ile yağsız, bakım gerektirmeyen çalışma",
    "Titanyum impeller ve duplex çelik gövdeyle uzun ömürlü yapı",
    "IGV ve hız sürücüsüyle dinamik basınç–debi kontrolü, surge'siz çalışma",
    "20'nin üzerinde performans katsayısı (COP) ile olağanüstü enerji verimliliği",
  ];

  const benefits = [
    {
      icon: Gauge,
      title: "COP 20+",
      desc: "Olağanüstü verimlilik",
    },
    {
      icon: Recycle,
      title: "Atık Isı Kazanımı",
      desc: "Direkt buhar kullanımı",
    },
    {
      icon: Settings,
      title: "Bakımsız Çalışma",
      desc: "Yağsız yataklama sistemleri",
    },
    {
      icon: Zap,
      title: "Dinamik Kontrol",
      desc: "IGV ve hız sürücüsü",
    },
  ];

  const applications = [
    "Evaporasyon sistemleri",
    "Konsantre üretimi",
    "Endüstriyel kurutma sistemleri",
    "Atık suların distilasyonu",
    "Kimyasal proseslerde distilasyon uygulamaları",
  ];

  const sectors = [
    "Su arıtma ve saflaştırma endüstrisi",
    "Gıda ve içecek prosesleri",
    "Kimya ve petrokimya",
    "Enerji geri kazanımı ve çevre teknolojileri",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-[#0A2342] to-[#3FBF7F]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white">
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white">
                Ana Sayfa
              </Link>
              <span>/</span>
              <span>Teknolojiler</span>
              <span>/</span>
              <span className="text-white">Buhar Sıkıştırma Sistemleri</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buhar Sıkıştırma Sistemleri (MVR)
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              20+ COP değeriyle atık buhardan maksimum enerji geri kazanımı
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#0A2342] mb-6">
                Mekanik Buhar Rekompresyon Teknolojisi
              </h2>
              <div className="text-[#6E6E6E] leading-relaxed space-y-4">
                <p>
                  MAXEFF'in Buhar Sıkıştırma (MVR) sistemleri, proseslerden
                  çıkan atık ısının geri kazanılarak tekrar kullanılmasını
                  sağlar. Bu sistemler, bir tür açık çevrim ısı pompası gibi
                  çalışarak hem enerji tüketimini azaltır hem de işletme
                  maliyetlerini düşürür. Direkt atık buharı kullanabildikleri
                  için ek eşanjör ihtiyacı ortadan kalkar; böylece yatırım
                  maliyetleri minimize edilir.
                </p>
                <p>
                  Çok kademeli olarak tasarlanabilen buhar sıkıştırma
                  sistemlerinde, termodinamik denge noktaları optimize edilerek
                  yüksek sıkıştırma verimi korunurken enerji kayıpları önlenir.
                  Kompresörlerde kullanılan titanyum impeller, duplex çelik
                  gövde, ve manyetik/foil bearing yataklama sistemleri, uzun
                  süreli, yağsız ve bakım gerektirmeyen çalışma sağlar.
                </p>
                <p>
                  20'nin üzerinde COP değerine ulaşabilen bu sistemler, enerji
                  geri kazanımında en ileri çözümlerden biridir ve özellikle
                  evaporasyon, distilasyon ve kurutma gibi suyun
                  uzaklaştırıldığı proseslerde devrim niteliğinde tasarruf
                  sağlar.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#0A2342] to-[#3FBF7F] rounded-2xl flex items-center justify-center">
                <Cloud className="w-24 h-24 text-white opacity-50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
              Öne Çıkan Noktalar
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#3FBF7F] flex-shrink-0 mt-1" />
                <span className="text-[#333]">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
              Temel Avantajlar
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0A2342] to-[#3FBF7F] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#0A2342] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#6E6E6E]">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
              Kullanım Alanları
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
                <Factory className="w-5 h-5 text-[#3FBF7F]" />
                <span className="text-[#333] font-medium">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
              Hizmet Verilen Sektörler
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-[#0A2342] to-[#3FBF7F] text-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Recycle className="w-6 h-6 opacity-80" />
                  <span className="font-medium">{sector}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A2342] to-[#3FBF7F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white">
            <h2 className="text-3xl font-bold mb-4">
              MVR Sistemleriyle Enerji Verimliliğinde Zirve
            </h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              20'nin üzerinde COP değeri ve bakımsız çalışma avantajıyla
              işletmenizin enerji maliyetlerini dramatik şekilde azaltın.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0A2342] px-8 py-4 rounded-full font-semibold hover:bg-[#F4F4F4] transition-colors">
              İletişime Geç
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
