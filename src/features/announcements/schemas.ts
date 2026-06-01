import { z } from 'zod'

export const announcementSchema = z.object({
  title: z.string().min(1, 'Judul wajib diisi').max(200, 'Judul maksimal 200 karakter'),
  content: z.string().min(1, 'Konten pengumuman wajib diisi'),
  status: z.enum(['DRAFT', 'PUBLISHED']).default('PUBLISHED'),
  thumbnail: z.string().url('URL thumbnail tidak valid').optional().or(z.literal('')),
})

export type AnnouncementInput = z.infer<typeof announcementSchema>
