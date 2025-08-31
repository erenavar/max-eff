import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AbsorptionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-24 px-4">
        <div className="max-w-7xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-[#0A2342] mb-6">
            Absorpsiyon Teknolojileri
          </h1>
          <p className="text-lg text-[#6E6E6E]">İçerik yakında eklenecek...</p>
          {/* Add your content here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
