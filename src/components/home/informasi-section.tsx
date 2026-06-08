import { Bell, Calendar } from "lucide-react";
import { announcementService } from "@/features/announcements/services";

export async function InformasiSection() {
  const announcements = await announcementService.getPublished(6).catch((error) => {
    console.error("Gagal memuat pengumuman dari database:", error);
    return [];
  });

  return (
    <section id="informasi" className="bg-surface-alt pt-10 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Update Terkini
          </span>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Informasi Sekolah
          </h2>
        </div>

        {announcements.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-white/50 p-12 text-center backdrop-blur-sm sm:p-20">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
              <Bell size={32} className="opacity-40" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">
              Belum Ada Informasi Terbaru
            </h3>
            <p className="max-w-md text-text-secondary">
              Saat ini belum ada pengumuman atau informasi terbaru yang tersedia. 
              Silakan cek kembali nanti untuk mendapatkan pembaruan seputar kegiatan sekolah.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((item) => (
              <div key={item.id} className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex items-center text-sm text-text-secondary">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  {new Date(item.createdAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-text-secondary line-clamp-3">{item.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
