"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Zap,
  Leaf,
  Factory,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Settings,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function HeatPumpPage() {
  const highlights = [
    "Düşük, orta, yüksek ve ultra yüksek sıcaklıklara uygun özel tasarımlar",
    "Doğal ve düşük GWP soğutucu akışkanlarla çevre dostu sistemler",
    "CAPEX–OPEX dengesiyle optimize edilmiş mühendislik yaklaşımı",
    "135 °C'ye kadar sıcaklık farkı oluşturabilen ultra yüksek sıcaklık ısı pompaları",
    "Kömürle rekabet edebilen OPEX değerleriyle sürdürülebilir enerji dönüşümü",
    "Endüstriyel ölçekli, uzun ömürlü ve otomasyon uyumlu altyapı",
  ];

  const benefits = [
    {
      icon: Thermometer,
      title: "Ultra Yüksek Sıcaklık",
      desc: "135°C sıcaklık farkına kadar",
    },
    {
      icon: Leaf,
      title: "Çevre Dostu",
      desc: "Düşük GWP ve doğal akışkanlar",
    },
    {
      icon: TrendingUp,
      title: "Ekonomik Verimlilik",
      desc: "Kömürle rekabet eden OPEX",
    },
    {
      icon: Settings,
      title: "Özel Tasarım",
      desc: "İşletmeye özel analizlerle",
    },
  ];

  const applications = [
    "Isıtma ve soğutma sistemleri (HVAC, hava şartlandırma)",
    "Proses ısıtma, sıcak yıkama sistemleri",
    "Havuz, kurutma, boya ve yüzey işlemleri",
    "Enerji geri kazanım hatları",
  ];

  const sectors = [
    "Otomotiv",
    "Gıda ve içecek",
    "Kimya ve petrokimya",
    "Tekstil",
    "Enerji ve çevre teknolojileri",
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
              <span className="text-white">Isı Pompası Teknolojileri</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Isı Pompası Teknolojileri
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              Endüstriyel ısıtma ve soğutma için ultra yüksek sıcaklık çözümleri
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
                İşletmeye Özel Isı Pompası Çözümleri
              </h2>
              <p className="text-[#6E6E6E] leading-relaxed mb-4">
                MAXEFF, endüstriyel ısıtma ve soğutma ihtiyaçlarını tamamen
                işletmeye özel analizlerle ele alır. Isı pompaları; termodinamik
                çevrim optimizasyonu, yüksek verimli kompresör ve eşanjör
                tasarımlarıyla enerji tüketimini minimuma indirir.
              </p>
              <p className="text-[#6E6E6E] leading-relaxed mb-4">
                Düşük GWP ve doğal akışkanlarla tasarlanan sistemler, hem karbon
                ayak izini azaltır hem de işletmelere uzun vadeli enerji
                bağımsızlığı sağlar. 135°C sıcaklık farkına ulaşabilen ultra
                yüksek sıcaklık ısı pompalarımız, kömür gibi ucuz yakıtlarla
                dahi başa baş işletme maliyetleri sunarak yeşil dönüşümün
                önündeki ekonomik bariyerleri kaldırır.
              </p>
              <p className="text-[#6E6E6E] leading-relaxed">
                Her proje, CAPEX–OPEX dengesini gözeterek tasarlanır; böylece
                yatırımın geri dönüş süresi kısalır, işletme sürdürülebilir hale
                gelir.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#0A2342] to-[#3FBF7F] rounded-2xl flex items-center justify-center">
                <Thermometer className="w-24 h-24 text-white opacity-50" />
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

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#3FBF7F]" />
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

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-[#0A2342] to-[#3FBF7F] text-white rounded-xl p-4 text-center shadow-sm">
                <Factory className="w-6 h-6 mx-auto mb-2 opacity-80" />
                <span className="text-sm font-medium">{sector}</span>
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
              Ultra Yüksek Sıcaklık Isı Pompalarıyla Enerji Dönüşümü
            </h2>
            <p className="mb-8 max-w-2xl mx-auto opacity-90">
              135°C'ye kadar sıcaklık farkı ve kömürle rekabet eden işletme
              maliyetleriyle sürdürülebilir enerji çözümlerine geçiş yapın.
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
