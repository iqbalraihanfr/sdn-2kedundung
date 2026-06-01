import Image from "next/image";
import { Eye, Target } from "lucide-react";

import { misiPoints } from "@/data";

export function TentangSection() {
  return (
    <section id="visi-misi" className="bg-white/70 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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
                SD Negeri Kedundung 2 merupakan institusi pendidikan dasar yang berada di wilayah perifer Kota Mojokerto, tepatnya di Kelurahan Kedundung yang berbatasan langsung dengan Kabupaten Mojokerto. Posisi strategis ini menjadikan sekolah sebagai salah satu pusat layanan pendidikan yang berperan penting dalam menjembatani kebutuhan pendidikan masyarakat di kawasan perbatasan.
              </p>
              <p>
                Dalam pelaksanaan proses pendidikan, SD Negeri Kedundung 2 tidak hanya berfokus pada kegiatan intrakurikuler dan kokurikuler, tetapi juga secara aktif mengembangkan berbagai program ekstrakurikuler sebagai sarana optimalisasi potensi peserta didik. Beragam kegiatan yang disediakan meliputi bidang olahraga, seni, dan keagamaan, seperti bola voli, sepak takraw, futsal, karate, tari, seni rupa, samroh, pantomim, pramuka, serta program Baca Tulis Al-Qur’an (BTQ) yang dikenal dengan istilah &ldquo;Ning Ita di sekolah&rdquo;.
              </p>
              <p>
                Komitmen terhadap pengembangan potensi nonakademik telah membuahkan hasil yang nyata, ditandai dengan berbagai capaian prestasi di bidang olahraga dan seni. Sementara itu, dalam ranah akademik, sekolah terus melakukan penguatan melalui berbagai strategi peningkatan mutu pembelajaran guna memastikan peserta didik mampu bersaing secara optimal dengan sekolah lain.
              </p>
              <p>
                Sebagai bagian dari upaya pembentukan karakter, SD Negeri Kedundung 2 juga mengimplementasikan berbagai program pembiasaan yang terstruktur dan berkelanjutan, seperti kegiatan tematik harian, &ldquo;Jumat Berisi Ning Aksi&rdquo;, KITA, Mager Bersama, Laciku, serta program-program inovatif lainnya yang berorientasi pada penguatan nilai-nilai positif peserta didik.
              </p>
              <p>
                Dengan semangat peningkatan kualitas yang berkesinambungan, SD Negeri Kedundung 2 senantiasa berupaya mengoptimalkan layanan pendidikan secara holistik. Upaya ini diarahkan untuk mewujudkan lingkungan belajar yang unggul, adaptif, dan berdaya saing, serta mampu mencetak generasi yang berkarakter, kompeten, dan berintegritas.
              </p>
            </div>
          </div>

          {/* Headmaster Photo (40% -> 2/5 cols) */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-surface-alt shadow-xl border border-border">
              <Image
                src="/images/kepala-sekolah.jpeg"
                alt="Kepala Sekolah SDN Kedundung 2"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-primary">Yatik Hartini, S.Pd, M.Pd</h3>
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
