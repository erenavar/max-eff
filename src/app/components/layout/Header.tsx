"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Leaf, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#hero", label: "Ana Sayfa" },
    { href: "#about", label: "Hakkımızda" },
    {
      href: "#services",
      label: "Hizmetlerimiz",
      dropdown: [
        { href: "#services", label: "Danışmanlık" },
        { href: "#services", label: "Proto-typing" },
        { href: "#services", label: "Enerji Verimliliği" },
      ],
    },
    { href: "#tech", label: "Teknolojiler" },
    { href: "#projects", label: "Projeler" },
    { href: "#insights", label: "İçgörüler" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md"
          : "bg-white/80 backdrop-blur"
      }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            aria-label="Maxeff anasayfa">
            <div className="h-8 w-8 rounded-xl bg-[#0A2342] grid place-items-center">
              <Leaf className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-wide">MAXEFF</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-[#0A2342]/80">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpen(!open)}
                      className="flex items-center gap-1 hover:text-[#0A2342] transition-colors">
                      {link.label}{" "}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="absolute left-0 mt-2 w-56 rounded-2xl border border-gray-100 bg-white shadow-xl p-2">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-xl px-3 py-2 hover:bg-[#F4F4F4] transition-colors">
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    className="hover:text-[#0A2342] transition-colors"
                    href={link.href}>
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-2xl border border-[#3FBF7F] px-4 py-2 text-sm text-[#0A2342] hover:bg-[#3FBF7F] hover:text-white transition-all">
            Teklif Al <ArrowRight className="h-4 w-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="px-4 py-2">
                      <div className="font-medium mb-2">{link.label}</div>
                      <div className="ml-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={handleMobileMenuClick}
                            className="block py-1 text-sm text-[#6E6E6E] hover:text-[#0A2342]">
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={handleMobileMenuClick}
                      className="px-4 py-2 hover:bg-[#F4F4F4] rounded-xl transition-colors block">
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                onClick={handleMobileMenuClick}
                className="mt-2 px-4 py-2 bg-[#3FBF7F] text-white rounded-xl text-center hover:bg-[#3FBF7F]/90 transition-colors">
                Teklif Al
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
