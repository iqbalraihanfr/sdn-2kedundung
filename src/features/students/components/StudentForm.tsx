'use client'

import { useActionState } from 'react'
import { createStudentAction } from '../actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const initialState = { error: '', success: false }

type StudentFormProps = {
  classes: { id: string; name: string }[]
}

export function StudentForm({ classes }: StudentFormProps) {
  const router = useRouter()
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await createStudentAction(formData)
      if (result?.error) {
        return { error: result.error, success: false }
      }
      if (result?.success) {
        router.push('/admin/data-siswa')
        return { error: '', success: true }
      }
      return prevState
    },
    initialState
  )

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm p-6 max-w-2xl">
      <form action={formAction} className="space-y-6">
        {state?.error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200 dark:bg-red-900/30 dark:border-red-900/50 dark:text-red-400">
            {state.error}
          </div>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="nisn" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              NISN
            </label>
            <input
              id="nisn"
              name="nisn"
              type="text"
              required
              placeholder="Masukkan 10 digit NISN"
              className="w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-900 dark:text-zinc-100"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Nama Lengkap
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Contoh: Budi Santoso"
              className="w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-900 dark:text-zinc-100"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="classId" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Kelas
            </label>
            <select
              id="classId"
              name="classId"
              required
              className="w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-zinc-900 dark:text-zinc-100"
            >
              <option value="">-- Pilih Kelas --</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-4 flex items-center gap-3 border-t border-zinc-200 dark:border-zinc-800">
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors text-sm font-medium disabled:opacity-50"
          >
            {isPending ? 'Menyimpan...' : 'Simpan Data'}
          </button>
          <Link
            href="/admin/data-siswa"
            className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg shadow-sm transition-colors text-sm font-medium"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  )
}
