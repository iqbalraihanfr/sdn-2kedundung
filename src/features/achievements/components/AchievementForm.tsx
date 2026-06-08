'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createAchievementAction, updateAchievementAction } from '../actions'

const initialState = { error: '', success: false }

export function AchievementForm({
  students,
  achievement,
}: {
  students: { id: string; nisn: string; name: string; class?: { name: string } | null }[]
  achievement?: {
    id: string
    studentId: string
    title: string
    level: string
    rank: string | null
    eventName: string
    imageUrl: string | null
    date: Date | null
    note: string | null
  } | null
}) {
  const router = useRouter()
  const action = achievement ? updateAchievementAction.bind(null, achievement.id) : createAchievementAction
  const [state, formAction, isPending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    const result = await action(formData)
    if (result?.error) return { error: result.error, success: false }
    router.push('/admin/prestasi')
    return { error: '', success: true }
  }, initialState)

  return (
    <div className="max-w-3xl rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <form action={formAction} className="space-y-5">
        {state.error && <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-900/30 dark:text-red-400">{state.error}</div>}
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 sm:col-span-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Siswa</span>
            <select name="studentId" required defaultValue={achievement?.studentId ?? ''} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
              <option value="">Pilih siswa</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} - {student.class?.name ?? 'Tanpa kelas'} ({student.nisn})
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 sm:col-span-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Judul Prestasi</span>
            <input name="title" required defaultValue={achievement?.title ?? ''} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Tingkat</span>
            <input name="level" required defaultValue={achievement?.level ?? ''} placeholder="Kota, Provinsi, Nasional" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Peringkat</span>
            <input name="rank" defaultValue={achievement?.rank ?? ''} placeholder="Juara 1" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Nama Lomba</span>
            <input name="eventName" required defaultValue={achievement?.eventName ?? ''} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">URL Gambar</span>
            <input name="imageUrl" defaultValue={achievement?.imageUrl ?? ''} placeholder="/images/prestasi-juara1-menggambar.jpeg" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Tanggal</span>
            <input type="date" name="date" defaultValue={achievement?.date ? achievement.date.toISOString().slice(0, 10) : ''} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2 sm:col-span-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Catatan</span>
            <textarea name="note" rows={3} defaultValue={achievement?.note ?? ''} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
        </div>
        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800 sm:flex-row sm:items-center">
          <button type="submit" disabled={isPending} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50">
            {isPending ? 'Menyimpan...' : achievement ? 'Simpan Perubahan' : 'Tambah Prestasi'}
          </button>
          <Link href="/admin/prestasi" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-center text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">Batal</Link>
        </div>
      </form>
    </div>
  )
}
