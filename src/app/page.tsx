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
    desc: "7 Kebiasaan Anak Indonesia Hebat — Penilaian Karakter",
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Decorative circles */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Star size={14} className="text-secondary" />
            <span className="text-white/80 text-sm font-medium">
              SD Negeri Kedundung 2 — Kota Mojokerto
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up opacity-0 animate-delay-100">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
              SIPANDA
            </span>
            <span className="block mt-2 text-lg sm:text-xl md:text-2xl font-medium text-secondary">
              Sistem Informasi Pendidikan Anak SD
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up opacity-0 animate-delay-200 mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Platform digital untuk pengelolaan data siswa, absensi, nilai,
            dan pembentukan karakter melalui{" "}
            <span className="text-secondary font-medium">
              Gerakan 7 Kebiasaan Anak Indonesia Hebat
            </span>
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up opacity-0 animate-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#features"
              className="group flex items-center gap-2 bg-secondary hover:bg-secondary-light text-primary-dark font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30"
            >
              <GraduationCap size={20} />
              Jelajahi Fitur
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <Link
              href="/data-siswa"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl transition-all border border-white/10"
            >
              <Users size={18} />
              Lihat Data Siswa
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up opacity-0 animate-delay-400 mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { label: "Siswa", value: "175" },
              { label: "Kelas", value: "6" },
              { label: "Fitur", value: "5" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up opacity-0 animate-delay-500 mt-16">
            <a
              href="#visi-misi"
              className="inline-flex flex-col items-center text-white/30 hover:text-white/50 transition-colors"
            >
              <span className="text-xs mb-2">Scroll</span>
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section id="visi-misi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3">
              Profil Sekolah
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Visi & Misi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Visi</h3>
                <p className="text-white/90 leading-relaxed text-lg font-medium">
                  &ldquo;Meneladani Kearifan Lokal dengan Membumikan Budaya
                  Sekolah untuk Mewujudkan Peserta Didik yang Beriman, Berilmu,
                  Berkarakter, dan Berprestasi&rdquo;
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="relative bg-white rounded-2xl border border-border p-8 group hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                <Target size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Misi</h3>
              <ul className="space-y-3">
                {misiPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-text-secondary text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-3">
              Fitur Utama
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Kelola Data Dengan Mudah
            </h2>
            <p className="mt-3 text-text-secondary max-w-xl mx-auto">
              Akses semua informasi pendidikan SDN Kedundung 2 dalam satu
              platform yang terintegrasi
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Link
                  key={f.href}
                  href={f.href}
                  className={`group relative bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 ${
                    i === features.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{f.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
