import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  GraduationCap,
  Star,
  Users,
} from "lucide-react";

import { homeStats } from "@/data";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 text-center shadow-2xl shadow-primary-dark/25 backdrop-blur-md sm:px-10 sm:py-10">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 opacity-0 backdrop-blur-sm">
            <Star size={14} className="text-secondary" />
            <span className="text-sm font-medium text-white">
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

          <p className="animate-fade-in-up animate-delay-200 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 opacity-0 sm:text-lg">
            Platform digital untuk pengelolaan data siswa, absensi, nilai, dan
            pembentukan karakter melalui{" "}
            <span className="font-semibold text-secondary-light">
              Gerakan 7 Kebiasaan Anak Indonesia Hebat
            </span>
          </p>

          <div className="animate-fade-in-up animate-delay-300 mt-8 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row">
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
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-medium text-white transition-all hover:bg-white/25"
            >
              <Users size={18} />
              Lihat Data Siswa
            </Link>
          </div>

          <div className="animate-fade-in-up animate-delay-400 mx-auto mt-10 grid max-w-lg grid-cols-3 gap-4 opacity-0">
            {homeStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/10 px-3 py-4 text-center"
              >
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up animate-delay-500 mt-10 opacity-0 text-white">
            <a
              href="#visi-misi"
              className="inline-flex flex-col items-center text-white/60 transition-colors hover:text-white"
            >
              <span className="mb-2 text-xs">Scroll</span>
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
