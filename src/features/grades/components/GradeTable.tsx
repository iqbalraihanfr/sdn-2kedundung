'use client'

import { useActionState } from 'react'
import { saveGradesAction } from '../actions'

const initialState = { error: '', success: false }

export function GradeTable({
  subjectId,
  semester,
  students,
  gradeMap,
}: {
  subjectId: string
  semester: string
  students: { id: string; nisn: string; name: string }[]
  gradeMap: Record<string, number>
}) {
  const [state, formAction, isPending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    const result = await saveGradesAction(formData)
    if (result?.error) return { error: result.error, success: false }
    return { error: '', success: true }
  }, initialState)

  if (students.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-10 text-center text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
        Pilih kelas yang memiliki siswa untuk mengisi nilai.
      </div>
    )
  }

  return (
    <form action={formAction} className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <input type="hidden" name="subjectId" value={subjectId} />
      <input type="hidden" name="semester" value={semester} />
      <div className="overflow-x-auto">
        <table className="min-w-[540px] w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">NISN</th>
              <th className="px-4 py-3 font-medium">Nama Siswa</th>
              <th className="px-4 py-3 font-medium">Nilai</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">{student.nisn}</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">{student.name}</td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    name={`score:${student.id}`}
                    defaultValue={gradeMap[student.id] ?? ''}
                    className="w-28 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t border-zinc-200 px-4 py-4 dark:border-zinc-800 sm:flex-row sm:items-center">
        <button type="submit" disabled={isPending} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50">
          {isPending ? 'Menyimpan...' : 'Simpan Nilai'}
        </button>
        {state.success && <span className="text-sm text-green-600 dark:text-green-400">Nilai tersimpan.</span>}
        {state.error && <span className="text-sm text-red-600 dark:text-red-400">{state.error}</span>}
      </div>
    </form>
  )
}
