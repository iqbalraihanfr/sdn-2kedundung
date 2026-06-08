import { z } from 'zod'

export const achievementSchema = z.object({
  studentId: z.string().min(1, 'Siswa wajib dipilih'),
  title: z.string().min(1, 'Judul prestasi wajib diisi'),
  level: z.string().min(1, 'Tingkat wajib diisi'),
  rank: z.string().optional().or(z.literal('')),
  eventName: z.string().min(1, 'Nama lomba wajib diisi'),
  imageUrl: z.string().optional().or(z.literal('')),
  date: z.string().optional().or(z.literal('')),
  note: z.string().optional().or(z.literal('')),
})

export type AchievementInput = z.infer<typeof achievementSchema>
