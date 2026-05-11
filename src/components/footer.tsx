import Link from "next/link";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,168,67,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-sm font-bold">
                SP
              </div>
              <div>
                <h3 className="text-lg font-bold">SIPANDA</h3>
                <p className="text-xs text-white/60">
                  SDN Kedundung 2
                </p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Platform digital terpadu untuk pengelolaan data siswa, absensi, dan nilai di SDN Kedundung 2, Kota Mojokerto.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>sdn2kedundung@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 font-bold text-secondary">Menu Utama</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Beranda", href: "/" },
                { label: "Tentang Sekolah", href: "/#visi-misi" },
                { label: "Informasi", href: "/#informasi" },
                { label: "Kontak", href: "/#kontak" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 transition-colors hover:text-secondary"
                  >
                    <ArrowUpRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic & Programs */}
          <div>
            <h4 className="mb-6 font-bold text-secondary">Layanan & Program</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Data Siswa", href: "/data-siswa" },
                { label: "Absensi", href: "/absensi" },
                { label: "Daftar Nilai", href: "/daftar-nilai" },
                { label: "Gerakan 7 KAIH", href: "/gerakan-7kaih" },
                { label: "Tata Tertib", href: "/tata-tertib" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 transition-colors hover:text-secondary"
                  >
                    <ArrowUpRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h4 className="mb-6 font-bold text-secondary">Lokasi Sekolah</h4>
            <div className="mb-4 overflow-hidden rounded-xl border border-white/10 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0155256522953!2d112.45605120995849!3d-7.4635332649213195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780d551b592797%3A0xb736f29b61b899a3!2sSD%20Negeri%20Kedundung%202%263!5e0!3m2!1sid!2sid!4v1778467660823!5m2!1sid!2sid"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex items-start gap-2.5 text-xs leading-relaxed text-white/60">
              <MapPin size={14} className="mt-0.5 shrink-0 text-secondary" />
              <span>
                Jl. Empunala No.404, Mergelo, Kedundung, Kec. Magersari, Kota Mojokerto, Jawa Timur 61316
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SIPANDA - SDN Kedundung 2. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6">
            <p className="text-[10px] uppercase tracking-widest text-white/20">
              Kota Mojokerto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
