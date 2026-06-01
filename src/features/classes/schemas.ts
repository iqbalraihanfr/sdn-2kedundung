import { z } from 'zod'

export const classSchema = z.object({
  name: z.string().min(1, 'Nama kelas wajib diisi'),
  homeroomId: z.string().optional().or(z.literal('')),
})

export type ClassInput = z.infer<typeof classSchema>
