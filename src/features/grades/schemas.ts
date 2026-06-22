import { z } from 'zod'

export const gradeSchema = z.object({
  studentId: z.string().min(1, 'Siswa wajib dipilih'),
  subjectId: z.string().min(1, 'Mata pelajaran wajib dipilih'),
  semester: z.string().min(1, 'Semester wajib diisi'),
  uh1: z.coerce.number().min(0).max(100).optional().or(z.literal('')),
  uh2: z.coerce.number().min(0).max(100).optional().or(z.literal('')),
  uh3: z.coerce.number().min(0).max(100).optional().or(z.literal('')),
  uas: z.coerce.number().min(0).max(100).optional().or(z.literal('')),
  score: z.coerce.number().min(0).max(100, 'Nilai maksimal 100'),
})

export type GradeInput = z.infer<typeof gradeSchema>
