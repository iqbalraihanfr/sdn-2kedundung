import Link from "next/link";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,168,67,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-sm font-bold">
                SP
              </div>
              <div>
                <h3 className="text-lg font-bold">SIPANDA</h3>
                <p className="text-xs text-white/60">
                  Sistem Informasi Pendidikan Anak SD
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Platform digital untuk pengelolaan data dan informasi pendidikan
              SDN Kedundung 2, Kota Mojokerto.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-secondary">Kontak</h4>
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

          <div>
            <h4 className="mb-4 font-semibold text-secondary">Menu</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "Data Siswa", href: "/data-siswa" },
                { label: "Absensi", href: "/absensi" },
                { label: "Daftar Nilai", href: "/daftar-nilai" },
                { label: "7 KAIH", href: "/gerakan-7kaih" },
                { label: "Tata Tertib", href: "/tata-tertib" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SIPANDA - SDN Kedundung 2. Hak Cipta
            Dilindungi.
          </p>
          <p className="text-xs text-white/30">
            Sistem Informasi Pendidikan Anak SD
          </p>
        </div>
      </div>
    </footer>
  );
}
