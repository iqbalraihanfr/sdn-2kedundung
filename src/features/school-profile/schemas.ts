import { z } from 'zod'

export const schoolProfileSchema = z.object({
  description: z.string().min(1, 'Deskripsi wajib diisi'),
  contactEmail: z.string().email('Email tidak valid').optional().or(z.literal('')),
  contactPhone: z.string().optional().or(z.literal('')),
  address: z.string().optional().or(z.literal('')),
})

export type SchoolProfileInput = z.infer<typeof schoolProfileSchema>
