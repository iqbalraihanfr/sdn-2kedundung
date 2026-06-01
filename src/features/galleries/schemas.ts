import { z } from 'zod'

export const gallerySchema = z.object({
  imageUrl: z.string().min(1, 'URL Gambar wajib diisi'),
  caption: z.string().optional().or(z.literal('')),
})

export type GalleryInput = z.infer<typeof gallerySchema>
