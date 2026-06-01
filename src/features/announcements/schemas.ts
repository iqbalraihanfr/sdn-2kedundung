import { z } from 'zod'

export const announcementSchema = z.object({
  title: z.string().min(1, 'Judul wajib diisi').max(200, 'Judul maksimal 200 karakter'),
  content: z.string().min(1, 'Konten pengumuman wajib diisi'),
})

export type AnnouncementInput = z.infer<typeof announcementSchema>
