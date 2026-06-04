'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createTeacherAction, updateTeacherAction } from '../actions'

const initialState = { error: '', success: false }

type TeacherFormProps = {
  teacher?: {
    id: string
    name: string
    nip: string | null
    position: string | null
    role: string
  } | null
}

export function TeacherForm({ teacher }: TeacherFormProps) {
  const router = useRouter()
  const action = teacher ? updateTeacherAction.bind(null, teacher.id) : createTeacherAction
  const [state, formAction, isPending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    const result = await action(formData)
    if (result?.error) return { error: result.error, success: false }
    router.push('/admin/guru')
    return { error: '', success: true }
  }, initialState)

  return (
    <div className="max-w-2xl rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <form action={formAction} className="space-y-5">
        {state.error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-900/30 dark:text-red-400">
            {state.error}
          </div>
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 sm:col-span-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Nama Lengkap</span>
            <input name="name" required defaultValue={teacher?.name ?? ''} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">NIP</span>
            <input name="nip" defaultValue={teacher?.nip ?? ''} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Jabatan</span>
            <input name="position" required defaultValue={teacher?.position ?? ''} placeholder="Guru Kelas, Staff TU, Kepala Sekolah" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
          </label>
          <label className="space-y-2">
            <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</span>
            <select name="role" defaultValue={teacher?.role ?? 'TEACHER'} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
              <option value="TEACHER">Guru</option>
              <option value="STAFF">Staff</option>
              <option value="ADMIN">Admin</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800 sm:flex-row sm:items-center">
          <button type="submit" disabled={isPending} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50">
            {isPending ? 'Menyimpan...' : teacher ? 'Simpan Perubahan' : 'Tambah Guru/Staff'}
          </button>
          <Link href="/admin/guru" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-center text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
            Batal
          </Link>
        </div>
      </form>
    </div>
  )
}
