import { Trophy } from "lucide-react";

import { prestasiImages } from "@/data";

export function PrestasiHero() {
  return (
    <section
      data-transparent-navbar
      className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-primary via-primary-dark to-primary pt-32 pb-24 shadow-xl"
    >
      <div className="absolute inset-0">
        <div className="absolute right-20 top-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md">
          <Trophy size={18} className="text-secondary" />
          <span className="text-sm font-semibold tracking-wide text-white">
            Prestasi Siswa
          </span>
        </div>
        <h1 className="mb-6 text-4xl font-black text-white drop-shadow-md sm:text-5xl md:text-6xl">
          Prestasi{" "}
          <span className="text-secondary">SDN Kedundung 2</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
          Berbagai pencapaian membanggakan siswa-siswi kami di bidang akademik,
          olahraga, seni, dan kepramukaan.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
            <p className="text-2xl font-bold text-white">{prestasiImages.length}</p>
            <p className="text-xs text-white/60">Total Prestasi</p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
            <p className="text-2xl font-bold text-white">2025</p>
            <p className="text-xs text-white/60">Tahun Ajaran</p>
          </div>
        </div>
      </div>
    </section>
  );
}
