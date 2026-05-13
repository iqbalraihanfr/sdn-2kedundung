import { ExternalLink } from "lucide-react";

export function Gerakan7KaihAboutSection() {
  return (
    <section className="border-t border-border bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 rounded-3xl border border-border bg-surface p-10 shadow-sm transition-shadow hover:shadow-md md:flex-row">
          <div className="flex-1">
            <h3 className="mb-4 text-2xl font-black text-primary">
              Tentang Gerakan 7 KAIH
            </h3>
            <div className="space-y-4 leading-relaxed text-text-secondary">
              <p>
                Gerakan 7 KAIH (7 Kebiasaan Anak Indonesia Hebat) diluncurkan
                oleh Kementerian Pendidikan Dasar dan Menengah
                (Kemendikdasmen) untuk membentuk karakter melalui pembiasaan
                positif sehari-hari.
              </p>
              <p>
                Program ini melibatkan <strong>Catur Pusat Pendidikan</strong>:
                sekolah, keluarga, masyarakat, dan media. Penilaian difokuskan
                pada pengembangan karakter, bukan sekadar akademik.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-center md:text-right">
            <a
              href="https://cerdasberkarakter.kemendikdasmen.go.id/gerakan7kebiasaan/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center gap-2 md:items-end"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 transition-colors group-hover:bg-primary/10">
                <ExternalLink size={24} className="text-primary" />
              </div>
              <span className="font-bold text-primary transition-colors group-hover:text-primary-light">
                Pelajari Lebih Lanjut
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
