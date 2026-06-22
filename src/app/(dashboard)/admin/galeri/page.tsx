import { galleryService } from '@/features/galleries/services'
import { DeleteGalleryButton } from '@/features/galleries/components/DeleteGalleryButton'
import { Image as ImageIcon, Plus } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Manajemen Galeri | SIPANDA Admin',
}

export default async function GaleriPage() {
  const galleries = await galleryService.getAll()

  return (
    <div className="space-y-6">
      <div className="page-hero animate-fade-in-up">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 shadow-lg shadow-fuchsia-500/20">
              <ImageIcon size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary sm:text-4xl">Galeri</h1>
              <p className="mt-1 text-sm text-text-secondary sm:text-base">Kelola foto-foto kegiatan sekolah.</p>
            </div>
          </div>
          <Link
            href="/admin/galeri/tambah"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-secondary to-secondary-light px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/40"
          >
            <Plus className="h-5 w-5" />
            Tambah Foto
          </Link>
        </div>
      </div>

      <div className="animate-fade-in-up animate-delay-100">
        {galleries.length === 0 ? (
          <div className="section-card p-12 text-center text-text-muted">
            <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>Belum ada foto yang diunggah.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleries.map((item) => (
              <div key={item.id} className="group relative section-card overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="aspect-square bg-surface-alt relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.imageUrl} alt={item.caption || 'Foto Galeri'} className="object-cover w-full h-full" />
                  
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <DeleteGalleryButton id={item.id} />
                  </div>
                </div>
                {item.caption && (
                  <div className="p-3 border-t border-border">
                    <p className="text-sm font-medium text-text-primary truncate">{item.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
