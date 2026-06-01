import { z } from 'zod'

export const subjectSchema = z.object({
  name: z.string().min(1, 'Nama mata pelajaran wajib diisi'),
})

export type SubjectInput = z.infer<typeof subjectSchema>
