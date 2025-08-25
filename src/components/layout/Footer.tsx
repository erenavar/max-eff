import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  siteMap: [
    { href: "#about", label: "Hakkımızda" },
    { href: "#services", label: "Hizmetlerimiz" },
    { href: "#tech", label: "Teknolojiler" },
    { href: "#projects", label: "Projeler" },
  ],
  legal: [
    { href: "#", label: "Gizlilik Politikası" },
    { href: "#", label: "Çerez Politikası" },
    { href: "#", label: "KVKK Aydınlatma" },
  ],
  contact: [
    { icon: Mail, text: "info@maxeff.com.tr" },
    { icon: Phone, text: "+90 (212) 000 00 00" },
    { icon: MapPin, text: "İstanbul, Türkiye" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        {/* Brand */}
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

        {/* Site Map */}
        <div>
          <h4 className="font-semibold">Site Haritası</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {footerLinks.siteMap.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold">Yasal</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold">Bize Ulaşın</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {footerLinks.contact.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="h-4 w-4" /> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Maxeff. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
