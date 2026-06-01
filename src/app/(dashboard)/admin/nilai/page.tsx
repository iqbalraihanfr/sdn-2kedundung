import Link from 'next/link'
import { ClipboardList } from 'lucide-react'
import { classQueries } from '@/features/classes/queries'
import { studentService } from '@/features/students/services'
import { subjectService } from '@/features/subjects/services'
import { gradeQueries } from '@/features/grades/queries'
import { GradeTable } from '@/features/grades/components/GradeTable'

export const metadata = {
  title: 'Daftar Nilai | SIPANDA Admin',
}

export default async function AdminNilaiPage({
  searchParams,
}: {
  searchParams: Promise<{ classId?: string; subjectId?: string; semester?: string }>
}) {
  const params = await searchParams
  const [classes, subjects] = await Promise.all([classQueries.findAll(), subjectService.getAll()])
  const classId = params.classId ?? classes[0]?.id ?? ''
  const subjectId = params.subjectId ?? subjects[0]?.id ?? ''
  const semester = params.semester ?? 'Ganjil 2025/2026'
  const [students, grades] = classId && subjectId
    ? await Promise.all([
        studentService.getAll(classId),
        gradeQueries.findByClassSubjectSemester(classId, subjectId, semester),
      ])
    : [[], []]
  const gradeMap = Object.fromEntries(grades.map((item) => [item.studentId, item.score]))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          <ClipboardList className="h-6 w-6 text-brand-500" />
          Daftar Nilai
        </h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Input nilai siswa per kelas, mata pelajaran, dan semester.</p>
      </div>

      <form className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
        <label className="space-y-2">
          <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Kelas</span>
          <select name="classId" defaultValue={classId} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>{cls.name}</option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Mata Pelajaran</span>
          <select name="subjectId" defaultValue={subjectId} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>{subject.name}</option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Semester</span>
          <input name="semester" defaultValue={semester} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
        </label>
        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">Tampilkan</button>
        <Link href="/admin/nilai" className="rounded-lg border border-zinc-300 px-4 py-2 text-center text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">Reset</Link>
      </form>

      {subjectId ? (
        <GradeTable subjectId={subjectId} semester={semester} students={students} gradeMap={gradeMap} />
      ) : (
        <div className="rounded-xl border border-zinc-200 bg-white p-10 text-center text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          Tambahkan mata pelajaran terlebih dahulu.
        </div>
      )}
    </div>
  )
}
