'use client'

import { useActionState } from 'react'
import { saveAttendanceAction } from '../actions'

const statuses = [
  { value: 'HADIR', label: 'Hadir' },
  { value: 'SAKIT', label: 'Sakit' },
  { value: 'IZIN', label: 'Izin' },
  { value: 'ALPHA', label: 'Alpa' },
]

const initialState = { error: '', success: false }

export function AttendanceTable({
  date,
  students,
  attendanceMap,
}: {
  date: string
  students: { id: string; nisn: string; name: string }[]
  attendanceMap: Record<string, string>
}) {
  const [state, formAction, isPending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    const result = await saveAttendanceAction(formData)
    if (result?.error) return { error: result.error, success: false }
    return { error: '', success: true }
  }, initialState)

  if (students.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-10 text-center text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
        Pilih kelas yang memiliki siswa untuk mengisi absensi.
      </div>
    )
  }

  return (
    <form action={formAction} className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <input type="hidden" name="date" value={date} />
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">NISN</th>
              <th className="px-4 py-3 font-medium">Nama Siswa</th>
              {statuses.map((status) => (
                <th key={status.value} className="px-4 py-3 text-center font-medium">{status.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">{student.nisn}</td>
                <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">{student.name}</td>
                {statuses.map((status) => (
                  <td key={status.value} className="px-4 py-3 text-center">
                    <input
                      type="radio"
                      name={`status:${student.id}`}
                      value={status.value}
                      defaultChecked={(attendanceMap[student.id] ?? 'HADIR') === status.value}
                      className="h-4 w-4 border-zinc-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-3 border-t border-zinc-200 px-4 py-4 dark:border-zinc-800">
        <button type="submit" disabled={isPending} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50">
          {isPending ? 'Menyimpan...' : 'Simpan Absensi'}
        </button>
        {state.success && <span className="text-sm text-green-600 dark:text-green-400">Absensi tersimpan.</span>}
        {state.error && <span className="text-sm text-red-600 dark:text-red-400">{state.error}</span>}
      </div>
    </form>
  )
}
