import { z } from 'zod'

export const classSchema = z.object({
  name: z.string().min(1, 'Nama kelas wajib diisi'),
})

export type ClassInput = z.infer<typeof classSchema>
