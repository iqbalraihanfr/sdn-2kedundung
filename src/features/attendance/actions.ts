'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { attendanceSchema } from './schemas'
import { attendanceQueries } from './queries'

export async function saveAttendanceAction(formData: FormData) {
  try {
    await requireAdminEmail()
    const dateValue = String(formData.get('date') ?? '')
    const records = Array.from(formData.entries())
      .filter(([key]) => key.startsWith('status:'))
      .map(([key, value]) => {
        const studentId = key.replace('status:', '')
        return attendanceSchema.parse({
          studentId,
          date: dateValue,
          status: String(value),
        })
      })
      .map((record) => ({
        studentId: record.studentId,
        date: new Date(`${record.date}T00:00:00`),
        status: record.status,
      }))

    if (records.length === 0) return { error: 'Tidak ada siswa untuk disimpan' }

    await attendanceQueries.upsertMany(records)
    revalidatePath('/admin/absensi')
    revalidatePath('/absensi')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
