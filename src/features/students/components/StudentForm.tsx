'use client'

import { useActionState } from 'react'
import { createStudentAction, updateStudentAction } from '../actions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const initialState = { error: '', success: false }

type StudentFormProps = {
  classes: { id: string; name: string }[]
  student?: {
    id: string
    nisn: string
    name: string
    classId: string
  } | null
}

export function StudentForm({ classes, student }: StudentFormProps) {
  const router = useRouter()
  const action = student ? updateStudentAction.bind(null, student.id) : createStudentAction
  const [state, formAction, isPending] = useActionState(
    async (prevState: typeof initialState, formData: FormData) => {
      const result = await action(formData)
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
    <div className="max-w-2xl rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
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
              defaultValue={student?.nisn ?? ''}
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
              defaultValue={student?.name ?? ''}
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
              defaultValue={student?.classId ?? ''}
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

        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? 'Menyimpan...' : student ? 'Simpan Perubahan' : 'Simpan Data'}
          </button>
          <Link
            href="/admin/data-siswa"
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-center text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  )
}
