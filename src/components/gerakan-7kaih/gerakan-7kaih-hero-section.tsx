import { Heart } from "lucide-react";
import Image from "next/image";

export function Gerakan7KaihHeroSection() {
  return (
    <section
      data-transparent-navbar
      className="relative overflow-hidden rounded-b-[3rem] pt-32 pb-24 shadow-xl"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/7kaih-hero.jpg"
          alt="Gerakan 7 KAIH"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-primary/40" />
      </div>

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
  );
}
