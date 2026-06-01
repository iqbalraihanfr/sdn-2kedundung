import { z } from 'zod'

export const studentSchema = z.object({
  nisn: z.string().min(1, 'NISN wajib diisi'),
  name: z.string().min(1, 'Nama wajib diisi'),
  classId: z.string().min(1, 'Kelas wajib dipilih'),
})

export type StudentInput = z.infer<typeof studentSchema>
