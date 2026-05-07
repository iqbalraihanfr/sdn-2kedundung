import {
  Heart,
  Sun,
  BookOpen,
  Dumbbell,
  Apple,
  Users,
  Moon,
  Star,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const kebiasaan = [
  {
    icon: Sun,
    title: "Bangun Pagi",
    desc: "Membiasakan bangun pagi sebelum subuh untuk memulai hari dengan semangat dan disiplin",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Star,
    title: "Beribadah",
    desc: "Melaksanakan ibadah sesuai agama dan kepercayaan masing-masing secara rutin dan khusyuk",
    color: "from-emerald-400 to-green-600",
  },
  {
    icon: Dumbbell,
    title: "Berolahraga",
    desc: "Melakukan aktivitas fisik dan olahraga secara teratur untuk menjaga kesehatan tubuh",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Apple,
    title: "Makan Sehat & Bergizi",
    desc: "Mengonsumsi makanan bergizi seimbang, menghindari jajanan tidak sehat",
    color: "from-red-400 to-rose-500",
  },
  {
    icon: BookOpen,
    title: "Gemar Belajar",
    desc: "Menumbuhkan minat membaca dan belajar untuk memperluas wawasan dan pengetahuan",
    color: "from-violet-400 to-purple-600",
  },
  {
    icon: Users,
    title: "Bermasyarakat",
    desc: "Bersosialisasi, gotong royong, dan berkontribusi positif di lingkungan sekitar",
    color: "from-teal-400 to-cyan-600",
  },
  {
    icon: Moon,
    title: "Tidur Cepat",
    desc: "Membiasakan tidur tepat waktu agar tubuh dan pikiran segar untuk hari esok",
    color: "from-indigo-400 to-indigo-600",
  },
];

export default function Gerakan7KAIHPage() {
  return (
    <div className="min-h-screen bg-surface pt-24">
      <section className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-primary via-primary-dark to-primary py-24 shadow-xl">
        <div className="absolute inset-0">
          <div className="absolute right-20 top-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md">
            <Heart size={18} className="text-rose-400" />
            <span className="text-sm font-semibold tracking-wide text-white">
              Program Kemendikdasmen
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-black text-white drop-shadow-md sm:text-6xl md:text-7xl">
            Gerakan{" "}
            <span className="relative text-secondary">
              7
              <span className="absolute -inset-1 bg-secondary opacity-40 blur-lg" />
            </span>{" "}
            KAIH
          </h1>
          <p className="mb-4 text-2xl font-bold text-white/90 sm:text-3xl">
            7 Kebiasaan Anak Indonesia Hebat
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Program pendidikan karakter melalui pendekatan{" "}
            <em className="font-medium text-white">learning by doing</em> -
            belajar dengan melakukan pembiasaan positif setiap hari dari pagi
            hingga malam.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-black text-primary sm:text-4xl">
              Perjalanan Hebat Sehari-hari
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              Tujuh langkah pembiasaan positif untuk masa depan yang lebih cerah
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-8 top-4 -ml-[3px] w-1.5 rounded-full bg-border md:left-1/2" />

            <div className="space-y-16">
              {kebiasaan.map((item, i) => {
                const Icon = item.icon;
                const isEven = i % 2 === 0;

                return (
                  <div
                    key={item.title}
                    className={`group relative flex w-full items-center ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div
                      className={`absolute left-8 z-10 -ml-8 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-surface bg-gradient-to-br ${item.color} shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 md:left-1/2`}
                    >
                      <Icon size={28} className="text-white drop-shadow-md" />
                    </div>

                    <div
                      className={`ml-24 w-full transition-all duration-500 group-hover:-translate-y-1 md:ml-0 md:w-[45%] ${
                        isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl">
                        <div
                          className={`absolute top-0 h-full w-2 bg-gradient-to-b ${item.color} ${
                            isEven ? "right-0" : "left-0"
                          }`}
                        />
                        <div
                          className={`flex flex-col gap-3 ${
                            isEven ? "md:items-end" : "md:items-start"
                          }`}
                        >
                          <span className="rounded-full bg-surface-alt px-3 py-1 text-xs font-black uppercase tracking-wider text-text-muted">
                            Langkah {i + 1}
                          </span>
                          <h3 className="text-2xl font-black text-primary transition-colors group-hover:text-primary-light">
                            {item.title}
                          </h3>
                          <p className="text-base leading-relaxed text-text-secondary">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative mt-24 md:mt-32">
              <div className="absolute left-8 top-[-4rem] z-10 -ml-4 h-8 w-8 rounded-full border-4 border-surface bg-secondary shadow-lg animate-bounce md:left-1/2" />

              <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-primary to-primary-light p-10 text-center text-white shadow-2xl md:p-14">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl transition-colors duration-500 group-hover:bg-secondary/30" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-dark/40 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                    <Star size={32} className="text-secondary" />
                  </div>
                  <h3 className="mb-4 text-3xl font-black md:text-4xl">
                    Pantau Perkembangan Anak
                  </h3>
                  <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80">
                    Setiap langkah kecil adalah awal dari kebiasaan hebat. Isi
                    jurnal harian secara rutin untuk mendukung masa depan cerah
                    mereka.
                  </p>
                  <a
                    href="https://forms.gle/5zg38KJu4UPa4GiD8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 rounded-2xl bg-secondary px-10 py-5 text-lg font-black text-primary-dark shadow-xl shadow-secondary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-light hover:shadow-2xl"
                  >
                    Isi Jurnal Sekarang
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  sekolah, keluarga, masyarakat, dan media. Penilaian
                  difokuskan pada pengembangan karakter, bukan sekadar akademik.
                </p>
              </div>
            </div>
            <div className="shrink-0 text-center md:text-right">
              <a
                href="https://cerdasberkarakter.kemdikbud.go.id"
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
    </div>
  );
}
