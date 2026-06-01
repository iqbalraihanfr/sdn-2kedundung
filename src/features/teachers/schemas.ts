import { z } from 'zod'

export const teacherSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi'),
  nip: z.string().optional().or(z.literal('')),
  position: z.string().min(1, 'Jabatan wajib diisi'),
  role: z.string().default('TEACHER'),
})

export type TeacherInput = z.infer<typeof teacherSchema>
