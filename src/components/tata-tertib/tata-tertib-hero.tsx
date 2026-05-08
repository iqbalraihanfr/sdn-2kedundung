import { BookOpen } from "lucide-react";

export function TataTertibHero() {
  return (
    <div className="page-hero">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600">
          <BookOpen size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            Tata Tertib Sekolah
          </h1>
          <p className="text-sm text-text-secondary sm:text-base">
            Pedoman perilaku siswa agar lingkungan belajar tetap aman, tertib,
            dan nyaman.
          </p>
        </div>
      </div>
    </div>
  );
}
