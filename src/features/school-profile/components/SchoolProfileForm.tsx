'use client'

import { useActionState } from 'react'
import { updateSchoolProfileAction } from '../actions'
import { Save } from 'lucide-react'
import type { SchoolProfileInput } from '../schemas'

const initialState = { error: '', success: false }

type SchoolProfileFormData = Partial<{
  [Key in keyof SchoolProfileInput]: SchoolProfileInput[Key] | null
}>

export function SchoolProfileForm({ initialData }: { initialData: SchoolProfileFormData | null }) {
  const [state, formAction, isPending] = useActionState(
    async (_prevState: typeof initialState, formData: FormData) => {
      const result = await updateSchoolProfileAction(formData)
      if (result?.success) {
        return { success: true, error: '' }
      }
      return { success: false, error: result?.error || 'Gagal menyimpan' }
    },
    initialState
  )

  return (
    <form action={formAction} className="space-y-6 p-4 sm:p-6">
      {state.error && (
        <div className="p-3 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 text-sm rounded-md border border-red-200 dark:border-red-500/20">
          {state.error}
        </div>
      )}
      
      {state.success && (
        <div className="p-3 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 text-sm rounded-md border border-green-200 dark:border-green-500/20">
          Profil sekolah berhasil diperbarui!
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Deskripsi Sekolah
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          defaultValue={initialData?.description || ''}
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100 resize-y"
          placeholder="Masukkan deskripsi sekolah di sini..."
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="vision" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Visi
          </label>
          <textarea
            id="vision"
            name="vision"
            rows={4}
            defaultValue={initialData?.vision || ''}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100 resize-y"
            placeholder="Tuliskan visi sekolah..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="mission" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Misi
          </label>
          <textarea
            id="mission"
            name="mission"
            rows={4}
            defaultValue={initialData?.mission || ''}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100 resize-y"
            placeholder="Pisahkan setiap misi dengan baris baru..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="organization" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Struktur Organisasi
        </label>
        <textarea
          id="organization"
          name="organization"
          rows={3}
          defaultValue={initialData?.organization || ''}
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100 resize-y"
          placeholder="Kepala Sekolah, Wali Kelas, Komite, dan struktur lain..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contactEmail" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email Kontak
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            defaultValue={initialData?.contactEmail || ''}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="admin@sdnkedundung2.sch.id"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contactPhone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Nomor Telepon
          </label>
          <input
            type="text"
            id="contactPhone"
            name="contactPhone"
            defaultValue={initialData?.contactPhone || ''}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="0321-xxxxxx"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="address" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Alamat Lengkap
        </label>
        <textarea
          id="address"
          name="address"
          rows={2}
          defaultValue={initialData?.address || ''}
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:text-zinc-100 resize-y"
          placeholder="Jl. Raya Kedundung No. 2..."
        />
      </div>

      <div className="flex flex-col border-t border-zinc-200 pt-4 dark:border-zinc-800 sm:flex-row sm:justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-2 font-medium text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? (
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {isPending ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
      </div>
    </form>
  )
}
