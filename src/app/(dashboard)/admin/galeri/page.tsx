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
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <ImageIcon className="h-6 w-6 text-brand-500" />
            Galeri
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Kelola foto-foto kegiatan sekolah.</p>
        </div>
        <Link href="/admin/galeri/tambah" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700 sm:justify-start">
          <Plus className="h-4 w-4" />
          Tambah Foto
        </Link>
      </div>

      {galleries.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-12 text-center text-zinc-500 dark:text-zinc-400 shadow-sm">
          <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-20" />
          <p>Belum ada foto yang diunggah.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleries.map((item) => (
            <div key={item.id} className="group relative bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
              <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imageUrl} alt={item.caption || 'Foto Galeri'} className="object-cover w-full h-full" />
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <DeleteGalleryButton id={item.id} />
                </div>
              </div>
              {item.caption && (
                <div className="p-3 border-t border-zinc-100 dark:border-zinc-800">
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 truncate">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
