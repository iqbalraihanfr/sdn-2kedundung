'use client'

import { useActionState, useState } from 'react'
import { uploadGradesAction } from '../actions'

const initialState = { error: '', success: false }

function GradeTableRow({
  student,
  initialData
}: {
  student: { id: string; nisn: string; name: string }
  initialData?: { uh1: number | null; uh2: number | null; uh3: number | null; uas: number | null; score: number }
}) {
  const [uh1, setUh1] = useState<string>(initialData?.uh1?.toString() ?? '')
  const [uh2, setUh2] = useState<string>(initialData?.uh2?.toString() ?? '')
  const [uh3, setUh3] = useState<string>(initialData?.uh3?.toString() ?? '')
  const [uas, setUas] = useState<string>(initialData?.uas?.toString() ?? '')

  // Calculate average dynamically
  let total = 0
  let count = 0
  const vals = [uh1, uh2, uh3, uas].map(v => (v === '' ? null : Number(v)))
  vals.forEach(v => {
    if (v !== null) {
      total += v
      count++
    }
  })
  const avg = count > 0 ? (total / 4).toFixed(2) : '0.00'

  return (
    <tr className="hover:bg-surface-alt/50 transition-colors">
      <td className="px-4 py-3 font-medium text-primary whitespace-nowrap">{student.nisn}</td>
      <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{student.name}</td>
      <td className="px-2 py-3">
        <input
          type="number" min="0" max="100" step="0.01" name={`uh1:${student.id}`}
          value={uh1} onChange={e => setUh1(e.target.value)}
          className="w-16 sm:w-20 rounded-lg border border-border bg-surface-alt px-2 py-1.5 text-center text-sm text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
      </td>
      <td className="px-2 py-3">
        <input
          type="number" min="0" max="100" step="0.01" name={`uh2:${student.id}`}
          value={uh2} onChange={e => setUh2(e.target.value)}
          className="w-16 sm:w-20 rounded-lg border border-border bg-surface-alt px-2 py-1.5 text-center text-sm text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
      </td>
      <td className="px-2 py-3">
        <input
          type="number" min="0" max="100" step="0.01" name={`uh3:${student.id}`}
          value={uh3} onChange={e => setUh3(e.target.value)}
          className="w-16 sm:w-20 rounded-lg border border-border bg-surface-alt px-2 py-1.5 text-center text-sm text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
      </td>
      <td className="px-2 py-3">
        <input
          type="number" min="0" max="100" step="0.01" name={`uas:${student.id}`}
          value={uas} onChange={e => setUas(e.target.value)}
          className="w-16 sm:w-20 rounded-lg border border-border bg-surface-alt px-2 py-1.5 text-center text-sm text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
      </td>
      <td className="px-4 py-3 font-bold text-primary text-center bg-primary/5">
        {avg}
      </td>
    </tr>
  )
}

export function GradeTable({
  subjectId,
  semester,
  students,
  gradeMap,
}: {
  subjectId: string
  semester: string
  students: { id: string; nisn: string; name: string }[]
  gradeMap: Record<string, any>
}) {
  const [state, formAction, isPending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    const result = await uploadGradesAction(formData)
    if (result?.error) return { error: result.error, success: false }
    return { error: '', success: true }
  }, initialState)

  if (students.length === 0) {
    return (
      <div className="section-card p-10 text-center text-text-muted animate-fade-in-up animate-delay-200">
        Pilih kelas yang memiliki siswa untuk mengisi nilai.
      </div>
    )
  }

  return (
    <form action={formAction} className="section-card overflow-hidden animate-fade-in-up animate-delay-200">
      <input type="hidden" name="subjectId" value={subjectId} />
      <input type="hidden" name="semester" value={semester} />
      <div className="overflow-x-auto">
        <table className="min-w-max w-full text-left text-sm">
          <thead className="bg-surface-alt text-text-secondary border-b border-border">
            <tr>
              <th className="px-4 py-3 font-semibold">NISN</th>
              <th className="px-4 py-3 font-semibold">Nama Siswa</th>
              <th className="px-2 py-3 font-semibold text-center">UH 1</th>
              <th className="px-2 py-3 font-semibold text-center">UH 2</th>
              <th className="px-2 py-3 font-semibold text-center">UH 3</th>
              <th className="px-2 py-3 font-semibold text-center">UAS</th>
              <th className="px-4 py-3 font-semibold text-center text-primary">Rata-Rata</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {students.map((student) => (
              <GradeTableRow key={student.id} student={student} initialData={gradeMap[student.id]} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t border-border px-6 py-4 sm:flex-row sm:items-center bg-surface-alt/30">
        <button type="submit" disabled={isPending} className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-lg">
          {isPending ? 'Menyimpan...' : 'Simpan Nilai'}
        </button>
        {state.success && <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Nilai tersimpan.</span>}
        {state.error && <span className="text-sm font-medium text-red-600 dark:text-red-400">{state.error}</span>}
      </div>
    </form>
  )
}
