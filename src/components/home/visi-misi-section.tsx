import { Eye, Target } from "lucide-react";

import { misiPoints } from "@/data";

export function VisiMisiSection() {
  return (
    <section id="visi-misi" className="bg-white/70 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Profil Sekolah
          </span>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Visi & Misi
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Eye size={24} />
              </div>
              <h3 className="mb-4 text-xl font-bold">Visi</h3>
              <p className="text-lg font-medium leading-relaxed text-white/90">
                &ldquo;Terwujudnya murid yang berkarakter sebagai pembelajar
                sepanjang hayat yang peduli lingkungan, inovatif, dan berprestasi.&rdquo;
              </p>
            </div>
          </div>

          <div className="group relative rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
              <Target size={24} className="text-secondary" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-primary">Misi</h3>
            <ul className="space-y-3">
              {misiPoints.map((point, i) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-text-secondary">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
