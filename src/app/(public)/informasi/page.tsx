import { Bell } from "lucide-react";
import { announcementService } from "@/features/announcements/services";
import { AnnouncementList } from "@/components/home/announcement-list";

export const revalidate = 3600;

export const metadata = {
  title: "Informasi | SIPANDA - SDN Kedundung 2",
  description:
    "Kumpulan informasi, pengumuman, dan berita terbaru dari SD Negeri Kedundung 2 Kota Mojokerto.",
};

export default async function InformasiPage() {
  const announcements = await announcementService.getPublished().catch((error) => {
    console.error("Gagal memuat pengumuman dari database:", error);
    return [];
  });

  return (
    <div className="page-shell">
      <div className="page-container max-w-6xl">
        <section className="page-hero text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Update Terkini
          </span>
          <h1 className="text-3xl font-bold text-primary sm:text-4xl">
            Informasi Sekolah
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Kumpulan pengumuman, informasi, dan berita terbaru dari SD Negeri
            Kedundung 2 Kota Mojokerto.
          </p>
        </section>

        {announcements.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-white/50 p-12 text-center backdrop-blur-sm sm:p-20">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
              <Bell size={32} className="opacity-40" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">
              Belum Ada Informasi
            </h3>
            <p className="max-w-md text-text-secondary">
              Saat ini belum ada pengumuman atau informasi yang tersedia.
              Silakan cek kembali nanti untuk mendapatkan pembaruan seputar
              kegiatan sekolah.
            </p>
          </div>
        ) : (
          <AnnouncementList announcements={announcements} />
        )}
      </div>
    </div>
  );
}
