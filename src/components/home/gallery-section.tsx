import { galleryService } from "@/features/galleries/services";
import { Image as ImageIcon } from "lucide-react";

export async function GallerySection() {
  const galleries = await galleryService.getAll();

  if (galleries.length === 0) {
    return null;
  }

  return (
    <section id="galeri" className="bg-white pt-10 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Dokumentasi
          </span>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Galeri Kegiatan
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleries.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl border border-border shadow-sm aspect-square bg-surface-alt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.imageUrl} 
                alt={item.caption || "Dokumentasi Sekolah"} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              {item.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
