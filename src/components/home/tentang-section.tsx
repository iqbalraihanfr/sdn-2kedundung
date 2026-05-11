import Image from "next/image";
import { Eye, Target, User } from "lucide-react";

import { misiPoints } from "@/data";

export function TentangSection() {
  return (
    <section id="visi-misi" className="bg-white/70 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Part: Profil Singkat & Headmaster Photo */}
        <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
          {/* Profil Singkat (60% -> 3/5 cols) */}
          <div className="lg:col-span-3">
            <span className="mb-3 inline-block rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Profil Sekolah
            </span>
            <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">
              SD Negeri Kedundung 2
            </h2>
            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                SD Negeri Kedundung 2 adalah sekolah dasar yang berdedikasi untuk memberikan pendidikan berkualitas tinggi dan berkarakter. Kami berkomitmen untuk menciptakan lingkungan belajar yang inspiratif, aman, dan inklusif bagi seluruh siswa.
              </p>
              <p>
                Dengan dukungan tenaga pendidik yang profesional dan fasilitas yang memadai, kami terus berupaya mengembangkan potensi setiap anak didik, baik di bidang akademik maupun non-akademik, sejalan dengan visi dan misi sekolah.
              </p>
            </div>
          </div>

          {/* Headmaster Photo (40% -> 2/5 cols) */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-surface-alt shadow-xl border border-border">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted">
                {/* Fallback placeholder if image is missing */}
                <User size={64} className="mb-4 opacity-20" />
                <span className="text-sm font-medium">Foto Kepala Sekolah</span>
              </div>
              {/* NOTE: Uncomment this block when the real photo is available in public/images folder */}
              {/* 
              <Image 
                src="/images/kepsek.jpg" 
                alt="Kepala Sekolah SDN Kedundung 2"
                fill
                className="object-cover relative z-10"
              /> 
              */}
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-primary">Nama Kepala Sekolah, S.Pd.</h3>
              <p className="mt-1 text-sm font-medium text-text-secondary">Kepala Sekolah SDN Kedundung 2</p>
            </div>
          </div>
        </div>

        {/* Bottom Part: Visi & Misi */}
        <div className="mt-20 border-t border-border pt-16">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Visi & Misi
            </span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Arah & Tujuan Kami
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:divide-x md:divide-border">
            {/* Visi */}
            <div className="md:pr-12">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Visi</h3>
              </div>
              <p className="text-lg font-medium leading-relaxed text-text-secondary">
                &ldquo;Terwujudnya murid yang berkarakter sebagai pembelajar
                sepanjang hayat yang peduli lingkungan, inovatif, dan berprestasi.&rdquo;
              </p>
            </div>

            {/* Misi */}
            <div className="md:pl-12">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-primary">Misi</h3>
              </div>
              <ul className="space-y-4">
                {misiPoints.map((point, i) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-base leading-relaxed text-text-secondary">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
