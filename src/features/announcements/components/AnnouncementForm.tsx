'use client'

import { useActionState } from 'react'
import { createAnnouncementAction } from '../../actions'
import { useRouter } from 'next/navigation'
import { Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const initialState = { error: '', success: false }

export function AnnouncementForm() {
  const router = useRouter()
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await createAnnouncementAction(formData)
      if (result?.success) {
        router.push('/admin/pengumuman')
        return { success: true, error: '' }
      }
      return { success: false, error: result?.error || 'Gagal menyimpan' }
    },
    initialState
  )

  return (
    <div className="max-w-2xl">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/pengumuman" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
          <ArrowLeft className="h-5 w-5 text-zinc-500" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Tambah Pengumuman</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Buat berita atau informasi baru untuk ditampilkan di halaman utama.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
        <form action={formAction} className="p-6 space-y-6">
          {state.error && (
            <div className="p-3 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 text-sm rounded-md border border-red-200 dark:border-red-500/20">
              {state.error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Judul Pengumuman
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Contoh: Libur Semester Ganjil"
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Konten Berita
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={6}
              placeholder="Tuliskan isi pengumuman secara detail di sini..."
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100 resize-y"
            />
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {isPending ? 'Menyimpan...' : 'Simpan Pengumuman'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
