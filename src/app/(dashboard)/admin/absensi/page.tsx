import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'
import { classQueries } from '@/features/classes/queries'
import { studentService } from '@/features/students/services'
import { attendanceQueries } from '@/features/attendance/queries'
import { AttendanceTable } from '@/features/attendance/components/AttendanceTable'

export const metadata = {
  title: 'Absensi Harian | SIPANDA Admin',
}

function todayInputValue() {
  return new Date().toISOString().slice(0, 10)
}

export default async function AdminAbsensiPage({
  searchParams,
}: {
  searchParams: Promise<{ classId?: string; date?: string }>
}) {
  const params = await searchParams
  const classes = await classQueries.findAll()
  const classId = params.classId ?? classes[0]?.id ?? ''
  const date = params.date ?? todayInputValue()
  const [students, attendances] = classId
    ? await Promise.all([
        studentService.getAll(classId),
        attendanceQueries.findByClassAndDate(classId, new Date(`${date}T00:00:00`)),
      ])
    : [[], []]
  const attendanceMap = Object.fromEntries(attendances.map((item: any) => [item.studentId, item.status]))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          <CalendarCheck className="h-6 w-6 text-brand-500" />
          Absensi Harian
        </h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">Rekam kehadiran siswa per kelas dan tanggal.</p>
      </div>

      <form className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:flex-row sm:items-end">
        <label className="space-y-2">
          <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Kelas</span>
          <select name="classId" defaultValue={classId} className="min-w-52 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100">
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>{cls.name}</option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Tanggal</span>
          <input type="date" name="date" defaultValue={date} className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100" />
        </label>
        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">Tampilkan</button>
        <Link href="/admin/absensi" className="rounded-lg border border-zinc-300 px-4 py-2 text-center text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">Reset</Link>
      </form>

      <AttendanceTable date={date} students={students} attendanceMap={attendanceMap} />
    </div>
  )
}
