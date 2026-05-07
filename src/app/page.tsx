import Link from "next/link";
import {
  Users,
  ClipboardList,
  FileText,
  Heart,
  BookOpen,
  ArrowRight,
  Star,
  GraduationCap,
  Target,
  Eye,
  ChevronDown,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Data Peserta Didik",
    desc: "Data lengkap 175 siswa dari Kelas 1 hingga Kelas 6",
    href: "/data-siswa",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ClipboardList,
    title: "Absensi Siswa",
    desc: "Rekap kehadiran siswa per kelas dan per bulan",
    href: "/absensi",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: FileText,
    title: "Daftar Nilai",
    desc: "Nilai Ulangan Harian dan Ulangan Akhir Semester",
    href: "/daftar-nilai",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Heart,
    title: "Gerakan 7 KAIH",
    desc: "7 Kebiasaan Anak Indonesia Hebat - Penilaian Karakter",
    href: "/gerakan-7kaih",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: BookOpen,
    title: "Tata Tertib",
    desc: "Peraturan dan ketentuan siswa SDN Kedundung 2",
    href: "/tata-tertib",
    color: "from-amber-500 to-amber-600",
  },
];

const misiPoints = [
  "Melaksanakan pembelajaran aktif, kreatif, efektif, dan menyenangkan (PAKEM)",
  "Menumbuhkan budaya membaca dan belajar sepanjang hayat",
  "Mengembangkan potensi siswa melalui kegiatan ekstrakurikuler",
  "Membangun karakter siswa melalui pembiasaan nilai-nilai luhur bangsa",
  "Menjalin kerjasama harmonis antara sekolah, orang tua, dan masyarakat",
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
          <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/6 px-6 py-10 text-center shadow-2xl shadow-primary-dark/25 backdrop-blur-md sm:px-10 sm:py-14">
            <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 opacity-0 backdrop-blur-sm">
              <Star size={14} className="text-secondary" />
              <span className="text-sm font-medium text-white/80">
                SD Negeri Kedundung 2 - Kota Mojokerto
              </span>
            </div>

            <h1 className="animate-fade-in-up opacity-0 animate-delay-100">
              <span className="block text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                SIPANDA
              </span>
              <span className="mt-2 block text-lg font-medium text-secondary sm:text-xl md:text-2xl">
                Sistem Informasi Pendidikan Anak SD
              </span>
            </h1>

            <p className="animate-fade-in-up animate-delay-200 mt-6 max-w-2xl mx-auto text-base leading-relaxed text-white/70 opacity-0 sm:text-lg">
              Platform digital untuk pengelolaan data siswa, absensi, nilai,
              dan pembentukan karakter melalui{" "}
              <span className="font-medium text-secondary">
                Gerakan 7 Kebiasaan Anak Indonesia Hebat
              </span>
            </p>

            <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row">
              <a
                href="#features"
                className="group flex items-center gap-2 rounded-xl bg-secondary px-6 py-3.5 font-semibold text-primary-dark shadow-lg shadow-secondary/20 transition-all duration-200 hover:bg-secondary-light hover:shadow-xl hover:shadow-secondary/30"
              >
                <GraduationCap size={20} />
                Jelajahi Fitur
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <Link
                href="/data-siswa"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-6 py-3.5 font-medium text-white transition-all hover:bg-white/20"
              >
                <Users size={18} />
                Lihat Data Siswa
              </Link>
            </div>

            <div className="animate-fade-in-up animate-delay-400 mt-16 grid max-w-lg grid-cols-3 gap-4 mx-auto opacity-0">
              {[
                { label: "Siswa", value: "175" },
                { label: "Kelas", value: "6" },
                { label: "Fitur", value: "5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/8 px-3 py-4 text-center"
                >
                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up animate-delay-500 mt-16 opacity-0">
              <a
                href="#visi-misi"
                className="inline-flex flex-col items-center text-white/30 transition-colors hover:text-white/50"
              >
                <span className="mb-2 text-xs">Scroll</span>
                <ChevronDown size={20} className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
                  &ldquo;Meneladani Kearifan Lokal dengan Membumikan Budaya
                  Sekolah untuk Mewujudkan Peserta Didik yang Beriman, Berilmu,
                  Berkarakter, dan Berprestasi&rdquo;
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

      <section id="features" className="bg-transparent py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
              Fitur Utama
            </span>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Kelola Data Dengan Mudah
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">
              Akses semua informasi pendidikan SDN Kedundung 2 dalam satu
              platform yang terintegrasi
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className={`group relative rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl ${
                    i === features.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} transition-transform duration-200 group-hover:scale-110`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="mb-1.5 text-lg font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{feature.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Buka
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
