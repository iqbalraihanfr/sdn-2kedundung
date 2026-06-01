'use client'

import { useActionState, useState } from 'react'
import { createGalleryAction } from '../actions'
import { useRouter } from 'next/navigation'
import { Save, ArrowLeft, Image as ImageIcon, UploadCloud } from 'lucide-react'
import Link from 'next/link'

const initialState = { error: '', success: false }

export function GalleryForm() {
  const router = useRouter()
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await createGalleryAction(formData)
      if (result?.success) {
        router.push('/admin/galeri')
        return { success: true, error: '' }
      }
      return { success: false, error: result?.error || 'Gagal menyimpan' }
    },
    initialState
  )

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    } else {
      setPreviewUrl(null)
    }
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/galeri" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
          <ArrowLeft className="h-5 w-5 text-zinc-500" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Tambah Foto Galeri</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Unggah dokumentasi kegiatan untuk ditampilkan di halaman utama.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
        <form action={formAction} className="p-6 space-y-6">
          {state.error && (
            <div className="p-3 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 text-sm rounded-md border border-red-200 dark:border-red-500/20">
              {state.error}
            </div>
          )}

          <div className="space-y-4">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Pilih Gambar
            </label>
            
            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-zinc-300 dark:border-zinc-700 border-dashed rounded-md relative overflow-hidden group">
              {previewUrl ? (
                <div className="absolute inset-0 w-full h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-medium text-sm flex items-center gap-2">
                      <UploadCloud className="h-4 w-4" /> Ganti Gambar
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-1 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-zinc-400" />
                  <div className="flex text-sm text-zinc-600 dark:text-zinc-400 justify-center">
                    <p className="pl-1">Klik untuk memilih file gambar</p>
                  </div>
                  <p className="text-xs text-zinc-500">PNG, JPG, WEBP hingga 5MB</p>
                </div>
              )}
              
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                required
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="caption" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Keterangan (Opsional)
            </label>
            <input
              type="text"
              id="caption"
              name="caption"
              placeholder="Contoh: Kegiatan Pramuka Kelas 5"
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
            <button
              type="submit"
              disabled={isPending || !previewUrl}
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {isPending ? 'Mengunggah...' : 'Simpan Foto'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
