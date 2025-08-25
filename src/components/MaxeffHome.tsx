"use client";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import TechSection from "./sections/TechSection";
import ProjectsSection from "./sections/ProjectsSection";
import InsightsSection from "./sections/InsightsSection";
import ContactSection from "./sections/ContactSection";

export default function MaxeffHome() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A2342]">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechSection />
      <ProjectsSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
