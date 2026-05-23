import Image from "next/image";
import { Trophy } from "lucide-react";

import { prestasiImages } from "@/data";

export function PrestasiGallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prestasiImages.map((item) => (
            <div
              key={item.src}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Trophy size={16} className="shrink-0 text-secondary" />
                  <span className="text-sm font-semibold text-primary">
                    {item.siswa}
                  </span>
                </div>
                {item.kelas && (
                  <p className="mb-1 text-xs font-medium text-text-secondary">
                    {item.kelas}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.prestasi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
