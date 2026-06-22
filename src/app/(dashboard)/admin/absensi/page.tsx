import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'
import { classQueries } from '@/features/classes/queries'
import { studentService } from '@/features/students/services'
import { attendanceQueries } from '@/features/attendance/queries'
import { AttendanceUploadClient } from '@/features/attendance/components/AttendanceUploadClient'
import { MonthFilter } from '@/features/attendance/components/MonthFilter'

export const metadata = {
  title: 'Absensi Bulanan | SIPANDA Admin',
}

function currentMonthValue() {
  const d = new Date()
  const month = (d.getMonth() + 1).toString().padStart(2, '0')
  return `${d.getFullYear()}-${month}`
}

function formatMonth(monthYear: string) {
  if (!monthYear) return ''
  const [year, month] = monthYear.split('-')
  const date = new Date(Number(year), Number(month) - 1, 1)
  return date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
}

export default async function AdminAbsensiPage({
  searchParams,
}: {
  searchParams: Promise<{ classId?: string; monthYear?: string }>
}) {
  const params = await searchParams
  const classes = await classQueries.findAll()
  const classId = params.classId ?? classes[0]?.id ?? ''
  const monthYearVal = params.monthYear ?? currentMonthValue()
  const formattedMonth = formatMonth(monthYearVal)

  const [students, attendances] = classId
    ? await Promise.all([
        studentService.getAll(classId),
        attendanceQueries.findByClassAndMonth(classId, formattedMonth),
      ])
    : [[], []]

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="page-hero animate-fade-in-up">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg shadow-teal-500/20">
            <CalendarCheck size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-primary sm:text-4xl">Absensi Bulanan</h1>
            <p className="mt-1 text-sm text-text-secondary sm:text-base">Upload rekap kehadiran siswa per kelas via file Excel.</p>
          </div>
        </div>
      </div>

      <MonthFilter classes={classes} classId={classId} monthYearVal={monthYearVal} basePath="/admin/absensi" />

      <AttendanceUploadClient monthYear={formattedMonth} students={students} attendances={attendances} />
    </div>
  )
}
