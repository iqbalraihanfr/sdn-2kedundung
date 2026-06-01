import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";

import { prestasiImages } from "@/data";
import { achievementService } from "@/features/achievements/services";

const highlights = prestasiImages.slice(0, 4);

export async function PrestasiSection() {
  const achievements = await achievementService.getAll().catch(() => []);
  const dynamicHighlights = achievements.slice(0, 4);

  return (
    <section id="prestasi" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
            Prestasi Siswa
          </span>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Bangga Dengan Prestasi Kami
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-secondary">
            Siswa-siswi SDN Kedundung 2 aktif meraih prestasi di berbagai
            bidang kompetisi
          </p>
        </div>

        {dynamicHighlights.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {dynamicHighlights.map((item) => (
              <div key={item.id} className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Trophy size={22} />
                </div>
                <p className="text-sm font-semibold text-secondary">
                  {item.student.name} {item.student.class?.name ? `· ${item.student.class.name}` : ''}
                </p>
                <h3 className="mt-2 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.rank ? `${item.rank} - ` : ''}{item.eventName} tingkat {item.level}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.src} className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Trophy size={16} className="text-secondary" />
                    <span className="text-sm font-semibold text-secondary">{item.siswa}</span>
                    {item.kelas && <span className="text-xs text-text-secondary">&middot; {item.kelas}</span>}
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">{item.prestasi}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/prestasi"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold !text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-lg"
          >
            Lihat Semua Prestasi
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
