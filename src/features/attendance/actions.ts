'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { attendanceQueries } from './queries'
import * as xlsx from 'xlsx'
import { z } from 'zod'

const excelRowSchema = z.object({
  NISN: z.coerce.string(),
  Nama: z.string().optional(),
  Hadir: z.coerce.number().min(0).default(0),
  Sakit: z.coerce.number().min(0).default(0),
  Izin: z.coerce.number().min(0).default(0),
  Alpha: z.coerce.number().min(0).default(0),
})

export async function uploadAttendanceAction(formData: FormData) {
  try {
    await requireAdminEmail()
    
    const file = formData.get('file') as File
    const monthYear = String(formData.get('monthYear') ?? '')
    const studentsDataStr = String(formData.get('students') ?? '[]')

    if (!file || !monthYear) {
      return { error: 'File dan Bulan wajib diisi' }
    }

    // Parse existing students in this class to validate NISN
    const studentsInClass = JSON.parse(studentsDataStr) as { id: string; nisn: string }[]
    const studentMap = new Map(studentsInClass.map(s => [s.nisn, s.id]))

    // Read Excel File
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const workbook = xlsx.read(buffer, { type: 'buffer' })
    
    const firstSheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[firstSheetName]
    const data = xlsx.utils.sheet_to_json(worksheet)

    const recordsToSave: { studentId: string; monthYear: string; hadir: number; sakit: number; izin: number; alpha: number }[] = []

    for (const row of data as any[]) {
      const parsed = excelRowSchema.safeParse(row)
      if (parsed.success) {
        const studentId = studentMap.get(parsed.data.NISN)
        if (studentId) {
          recordsToSave.push({
            studentId,
            monthYear,
            hadir: parsed.data.Hadir,
            sakit: parsed.data.Sakit,
            izin: parsed.data.Izin,
            alpha: parsed.data.Alpha,
          })
        }
      }
    }

    if (recordsToSave.length === 0) {
      return { error: 'Tidak ada data valid yang bisa diproses. Pastikan format kolom sesuai: NISN, Nama, Hadir, Sakit, Izin, Alpha.' }
    }

    await attendanceQueries.upsertMany(recordsToSave)
    
    revalidatePath('/admin/absensi')
    revalidatePath('/admin/data-siswa')
    return { success: true }
  } catch (err) {
    console.error(err)
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan saat memproses file.' }
  }
}
