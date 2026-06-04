'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createSubjectAction, updateSubjectAction } from '../actions'

const initialState = { error: '', success: false }

export function SubjectForm({ subject }: { subject?: { id: string; name: string } | null }) {
  const router = useRouter()
  const action = subject ? updateSubjectAction.bind(null, subject.id) : createSubjectAction
  const [state, formAction, isPending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    const result = await action(formData)
    if (result?.error) return { error: result.error, success: false }
    router.push('/admin/mata-pelajaran')
    return { error: '', success: true }
  }, initialState)

  return (
    <div className="max-w-xl rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
      <form action={formAction} className="space-y-5">
        {state.error && <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-900/30 dark:text-red-400">{state.error}</div>}
        <label className="space-y-2">
          <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Nama Mata Pelajaran</span>
          <input name="name" required defaultValue={subject?.name ?? ''} placeholder="Matematika" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
        </label>
        <div className="flex flex-col gap-3 border-t border-zinc-200 pt-4 dark:border-zinc-800 sm:flex-row sm:items-center">
          <button type="submit" disabled={isPending} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50">
            {isPending ? 'Menyimpan...' : subject ? 'Simpan Perubahan' : 'Tambah Mapel'}
          </button>
          <Link href="/admin/mata-pelajaran" className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-center text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
            Batal
          </Link>
        </div>
      </form>
    </div>
  )
}
