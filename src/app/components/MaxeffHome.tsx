"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Play,
  Factory,
  Leaf,
  Cpu,
  ShieldCheck,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

// Not: Renkler Tailwind üzerinden sınıf olarak verildi. Projede theme'e ekleyebilirsiniz.
// Kurumsal Palet: Lacivert #0A2342, Açık Gri #F4F4F4, Orta Gri #6E6E6E, Vurgu Yeşil #3FBF7F

export default function MaxeffHome() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A2342]">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all ${
          scrolled
            ? "bg-white/90 backdrop-blur shadow-sm"
            : "bg-white/70 backdrop-blur"
        }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2"
              aria-label="Maxeff anasayfa">
              <div className="h-8 w-8 rounded-xl bg-[#0A2342] grid place-items-center">
                <Leaf className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-wide">
                MAXEFF
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-[#0A2342]/80">
              <a className="hover:text-[#0A2342]" href="#hero">
                Ana Sayfa
              </a>
              <a className="hover:text-[#0A2342]" href="#about">
                Hakkımızda
              </a>

              {/* Dropdown: Hizmetlerimiz */}
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-1 hover:text-[#0A2342]"
                  aria-haspopup="menu"
                  aria-expanded={open}>
                  Hizmetlerimiz <ChevronDown className="h-4 w-4" />
                </button>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 mt-2 w-56 rounded-2xl border border-gray-100 bg-white shadow-xl p-2">
                    <a
                      href="#services"
                      className="block rounded-xl px-3 py-2 hover:bg-[#F4F4F4]">
                      Danışmanlık
                    </a>
                    <a
                      href="#services"
                      className="block rounded-xl px-3 py-2 hover:bg-[#F4F4F4]">
                      Proto-typing
                    </a>
                    <a
                      href="#services"
                      className="block rounded-xl px-3 py-2 hover:bg-[#F4F4F4]">
                      Enerji Verimliliği
                    </a>
                  </motion.div>
                )}
              </div>

              <a className="hover:text-[#0A2342]" href="#tech">
                Teknolojiler
              </a>
              <a className="hover:text-[#0A2342]" href="#projects">
                Projeler
              </a>
              <a className="hover:text-[#0A2342]" href="#insights">
                İçgörüler
              </a>
              <a className="hover:text-[#0A2342]" href="#contact">
                İletişim
              </a>
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-[#3FBF7F] px-4 py-2 text-sm text-[#0A2342] hover:bg-[#3FBF7F] hover:text-white transition">
              Teklif Al <ArrowRight className="h-4 w-4" />
            </a>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2">
              Menü
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative isolate pt-24">
        {/* Video/Görsel arkaplan */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Video opsiyonel: mp4 yerleştirin */}
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-fallback.jpg">
            <source src="/hero.mp4" type="video/mp4" />
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
            className="mt-6 max-w-2xl text-lg text-white/85">
            Maxeff; endüstriyel tesislere danışmanlıktan prototiplemeye, ileri
            analitik ve otomasyon teknolojilerine kadar uçtan uca enerji
            verimliliği çözümleri sunar.
          </motion.p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="rounded-2xl bg-[#3FBF7F] px-6 py-3 text-[#0A2342] font-medium hover:opacity-90">
              Hizmetlerimiz
            </a>
            <a
              href="#tech"
              className="rounded-2xl border border-white/40 px-6 py-3 text-white hover:bg-white/10">
              Teknolojilerimiz
            </a>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-white hover:bg-white/20">
              <Play className="h-4 w-4" />
              Tanıtım
            </button>
          </div>
        </div>
      </section>

      {/* Hakkımızda Kısa */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Sürdürülebilir Büyüme İçin Güvenilir Partner
            </h2>
            <p className="mt-4 text-[#6E6E6E] leading-relaxed">
              10+ yıllık saha deneyimi ile; enerji etütleri, proses
              optimizasyonu, veri odaklı karar destek ve uygulama projeleri
              geliştiriyoruz. Misyonumuz; maliyetleri kalıcı biçimde düşürürken
              karbon ayak izini azaltmak.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: "Tamamlanan Proje", value: "250+" },
                { label: "Ortalama Tasarruf", value: "%18" },
                { label: "Müşteri Memnuniyeti", value: "%96" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-[#F4F4F4] p-5 text-center">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="mt-1 text-xs text-[#6E6E6E]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="aspect-video w-full rounded-3xl bg-[#F4F4F4]"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section id="services" className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">Hizmetlerimiz</h2>
            <a href="#contact" className="text-sm underline underline-offset-4">
              Uzmanla görüşün
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <Icon className="h-8 w-8 text-[#3FBF7F]" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed">
                  {desc}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm text-[#0A2342] group-hover:gap-3 transition-all">
                  İncele <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknolojiler */}
      <section id="tech" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold">Teknolojiler</h2>
          <p className="mt-4 max-w-3xl text-[#6E6E6E]">
            Veri toplama katmanı (IoT), analitik (ML tabanlı anomali tespiti),
            kontrol (SCADA/PLC entegrasyonları) ve görselleştirme (web panoları)
            ile uçtan uca bir mimari.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 p-6">
              <h3 className="font-semibold">Mimari Diyagram</h3>
              <div
                className="mt-3 aspect-[16/9] rounded-2xl bg-[#F4F4F4]"
                aria-label="Diyagram placeholder"
              />
              <ul className="mt-4 list-disc pl-5 text-sm text-[#6E6E6E]">
                <li>Edge cihazlar ile gerçek zamanlı veri</li>
                <li>Bulut tabanlı analitik ve alarm motoru</li>
                <li>MES/ERP entegrasyonları</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-100 p-6">
              <h3 className="font-semibold">Öne Çıkan Özellikler</h3>
              <ul className="mt-3 grid gap-3 text-sm text-[#6E6E6E]">
                <li>• Dijital ikiz ve senaryo simülasyonu</li>
                <li>• Otomatik M&V raporları</li>
                <li>• Güvenlik: RBAC, şifreli iletişim</li>
                <li>• Ölçeklenebilir mikroservis altyapısı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projeler */}
      <section id="projects" className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">Projeler</h2>
            <a href="#" className="text-sm underline underline-offset-4">
              Tüm projeler
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <a
                key={i}
                href="#"
                className="group rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-100">
                <div className="aspect-[16/10] bg-[#EAEAEA]" />
                <div className="p-5">
                  <h3 className="font-semibold group-hover:text-[#0A2342]">
                    Büyük Ölçekli Kompresör Optimizasyonu
                  </h3>
                  <p className="mt-2 text-sm text-[#6E6E6E]">
                    %22 enerji tasarrufu · 7 ay geri ödeme
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* İçgörüler (Blog/Rapor) */}
      <section id="insights" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">İçgörüler</h2>
            <a href="#" className="text-sm underline underline-offset-4">
              Tüm yazılar
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "ISO 50001 ile Kalıcı Tasarruf",
                tag: "Makale",
              },
              {
                title: "VSD Uygulamalarında En İyi Pratikler",
                tag: "Blog",
              },
              {
                title: "Anomali Tespitinde ML Yaklaşımları",
                tag: "Rapor",
              },
            ].map((p) => (
              <article
                key={p.title}
                className="rounded-3xl border border-gray-100 p-6 hover:shadow-md transition">
                <div className="text-xs text-white inline-flex rounded-full bg-[#0A2342] px-2 py-1">
                  {p.tag}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#6E6E6E]">
                  Kısa özet metni — okuyucuyu içeriğe davet eden, net ve değer
                  sunan bir paragraf.
                </p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm text-[#0A2342]">
                  Oku <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="contact" className="bg-[#F4F4F4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="text-2xl font-semibold">Bizimle İletişime Geçin</h2>
            <form className="mt-6 grid gap-4">
              <input
                className="rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3FBF7F]"
                placeholder="Ad Soyad"
                aria-label="Ad Soyad"
              />
              <input
                className="rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3FBF7F]"
                placeholder="E-posta"
                aria-label="E-posta"
              />
              <input
                className="rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3FBF7F]"
                placeholder="Konu"
                aria-label="Konu"
              />
              <textarea
                className="rounded-2xl border px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3FBF7F]"
                placeholder="Mesajınız"
                aria-label="Mesaj"
              />
              <button
                type="submit"
                className="rounded-2xl bg-[#3FBF7F] px-6 py-3 text-[#0A2342] font-medium hover:opacity-90">
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
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-gray-100">
            {/* Google Maps embed ile değiştirin */}
            <iframe
              title="Harita"
              className="h-full w-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Istanbul&t=m&z=10&output=embed&iwloc=near"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2342] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-white/10 grid place-items-center">
                <Leaf className="h-4 w-4" />
              </div>
              <span className="font-semibold">MAXEFF</span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Enerji verimliliği ve ileri teknoloji ile sürdürülebilir üretimi
              mümkün kılıyoruz.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Site Haritası</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="#about" className="hover:underline">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:underline">
                  Teknolojiler
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Projeler
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Yasal</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:underline">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Çerez Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  KVKK Aydınlatma
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Bize Ulaşın</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@maxeff.com.tr
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +90 (212) 000 00 00
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Maxeff. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
}
