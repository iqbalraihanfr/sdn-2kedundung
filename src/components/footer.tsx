import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold text-sm">
                SP
              </div>
              <div>
                <h3 className="font-bold text-lg">SIPANDA</h3>
                <p className="text-white/60 text-xs">
                  Sistem Informasi Pendidikan Anak SD
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Platform digital untuk pengelolaan data dan informasi pendidikan
              SDN Kedundung 2, Kota Mojokerto.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Kel. Kedundung, Kec. Magersari, Kota Mojokerto, Jawa Timur
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail size={16} className="shrink-0" />
                <span>sdn2kedundung@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Menu</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "Data Siswa", href: "/data-siswa" },
                { label: "Absensi", href: "/absensi" },
                { label: "Daftar Nilai", href: "/daftar-nilai" },
                { label: "7 KAIH", href: "/gerakan-7kaih" },
                { label: "Tata Tertib", href: "/tata-tertib" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} SIPANDA — SDN Kedundung 2. Hak Cipta
            Dilindungi.
          </p>
          <p className="text-white/30 text-xs">
            Sistem Informasi Pendidikan Anak SD
          </p>
        </div>
      </div>
    </footer>
  );
}
