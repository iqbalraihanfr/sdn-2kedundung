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
    desc: "Membiasakan tidur tepat waktu agar tubuh dan pikiran fresh untuk hari esok",
    color: "from-indigo-400 to-indigo-600",
  },
];

export default function Gerakan7KAIHPage() {
  return (
    <div className="pt-24 min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary py-24 overflow-hidden rounded-b-[3rem] shadow-xl">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5 mb-8 backdrop-blur-md border border-white/20 shadow-lg">
            <Heart size={18} className="text-rose-400" />
            <span className="text-white text-sm font-semibold tracking-wide">
              Program Kemendikdasmen
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-md">
            Gerakan{" "}
            <span className="text-secondary relative">
              7
              <span className="absolute -inset-1 bg-secondary blur-lg opacity-40"></span>
            </span>{" "}
            KAIH
          </h1>
          <p className="text-2xl sm:text-3xl text-white/90 font-bold mb-4">
            7 Kebiasaan Anak Indonesia Hebat
          </p>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mt-6 text-lg">
            Program pendidikan karakter melalui pendekatan{" "}
            <em className="text-white font-medium">learning by doing</em> —
            belajar dengan melakukan pembiasaan positif setiap hari dari pagi
            hingga malam.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-primary">
              Perjalanan Hebat Sehari-hari
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
              Tujuh langkah pembiasaan positif untuk masa depan yang lebih cerah
            </p>
          </div>

          <div className="relative">
            {/* Main Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-8 w-1.5 bg-border -ml-[3px] rounded-full" />

            <div className="space-y-16">
              {kebiasaan.map((k, i) => {
                const Icon = k.icon;
                const isEven = i % 2 === 0;

                return (
                  <div
                    key={i}
                    className={`relative flex items-center w-full group ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Icon Node */}
                    <div
                      className={`absolute left-8 md:left-1/2 -ml-8 w-16 h-16 rounded-2xl border-4 border-surface bg-gradient-to-br ${k.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center shadow-xl z-10`}
                    >
                      <Icon size={28} className="text-white drop-shadow-md" />
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-24 md:ml-0 md:w-[45%] w-full transition-all duration-500 group-hover:-translate-y-1 ${
                        isEven
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                      }`}
                    >
                      <div className="bg-white rounded-3xl p-8 border border-border shadow-sm group-hover:shadow-xl group-hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
                        <div
                          className={`absolute top-0 w-2 h-full bg-gradient-to-b ${k.color} ${
                            isEven ? "right-0" : "left-0"
                          }`}
                        />
                        <div
                          className={`flex flex-col gap-3 ${
                            isEven ? "md:items-end" : "md:items-start"
                          }`}
                        >
                          <span className="text-xs font-black text-text-muted bg-surface-alt px-3 py-1 rounded-full uppercase tracking-wider">
                            Langkah {i + 1}
                          </span>
                          <h3 className="text-2xl font-black text-primary group-hover:text-primary-light transition-colors">
                            {k.title}
                          </h3>
                          <p className="text-text-secondary text-base leading-relaxed">
                            {k.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Banner at the End of Timeline */}
            <div className="relative mt-24 md:mt-32">
              <div className="absolute left-8 md:left-1/2 -ml-4 top-[-4rem] w-8 h-8 rounded-full border-4 border-surface bg-secondary z-10 animate-bounce shadow-lg" />

              <div className="bg-gradient-to-r from-primary to-primary-light rounded-[2.5rem] p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden border border-white/10 group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors duration-500" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-dark/40 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Star size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4">
                    Pantau Perkembangan Anak
                  </h3>
                  <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                    Setiap langkah kecil adalah awal dari kebiasaan hebat. Isi
                    jurnal harian secara rutin untuk mendukung masa depan cerah
                    mereka.
                  </p>
                  <a
                    href="https://forms.gle/5zg38KJu4UPa4GiD8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-light text-primary-dark font-black px-10 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-secondary/20 hover:shadow-2xl hover:-translate-y-1 text-lg group/btn"
                  >
                    Isi Jurnal Sekarang
                    <ArrowRight
                      size={20}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl border border-border p-10 flex flex-col md:flex-row gap-10 items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-primary mb-4">
                Tentang Gerakan 7 KAIH
              </h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Gerakan 7 KAIH (7 Kebiasaan Anak Indonesia Hebat) diluncurkan
                  oleh Kementerian Pendidikan Dasar dan Menengah
                  (Kemendikdasmen) untuk membentuk karakter melalui pembiasaan
                  positif sehari-hari.
                </p>
                <p>
                  Program ini melibatkan <strong>Catur Pusat Pendidikan</strong>
                  : sekolah, keluarga, masyarakat, dan media. Penilaian
                  difokuskan pada pengembangan karakter, bukan sekadar akademik.
                </p>
              </div>
            </div>
            <div className="shrink-0 text-center md:text-right">
              <a
                href="https://cerdasberkarakter.kemdikbud.go.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center md:items-end gap-2 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <ExternalLink size={24} className="text-primary" />
                </div>
                <span className="font-bold text-primary group-hover:text-primary-light transition-colors">
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
