import { PrestasiHero } from "@/components/prestasi/prestasi-hero";
import { achievementService } from "@/features/achievements/services";
import { Trophy } from "lucide-react";
import Image from "next/image";

export const revalidate = 3600;

export default async function PrestasiPage() {
  const achievements = await achievementService.getAll().catch(() => []);

  return (
    <>
      <PrestasiHero />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {achievements.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-white/70 p-12 text-center text-text-secondary">
              Belum ada prestasi yang dipublikasikan dari dashboard.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {achievements.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                  {item.imageUrl ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={item.imageUrl} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-secondary/10 text-secondary">
                      <Trophy size={48} />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm font-semibold text-secondary">{item.student.name} · {item.student.class.name}</p>
                    <h2 className="mt-2 text-xl font-bold text-primary">{item.title}</h2>
                    <p className="mt-2 text-text-secondary">{item.rank ? `${item.rank} - ` : ''}{item.eventName} tingkat {item.level}</p>
                    {item.note && <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.note}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
