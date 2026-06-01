import { z } from 'zod'

export const attendanceSchema = z.object({
  studentId: z.string().min(1, 'Siswa wajib dipilih'),
  date: z.string().min(1, 'Tanggal wajib diisi'),
  status: z.enum(['HADIR', 'SAKIT', 'IZIN', 'ALPHA']),
})

export type AttendanceInput = z.infer<typeof attendanceSchema>
