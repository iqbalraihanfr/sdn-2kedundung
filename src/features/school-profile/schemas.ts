import { z } from 'zod'

export const schoolProfileSchema = z.object({
  description: z.string().min(1, 'Deskripsi wajib diisi'),
  vision: z.string().optional().or(z.literal('')),
  mission: z.string().optional().or(z.literal('')),
  organization: z.string().optional().or(z.literal('')),
  contactEmail: z.string().email('Email tidak valid').optional().or(z.literal('')),
  contactPhone: z.string().optional().or(z.literal('')),
  address: z.string().optional().or(z.literal('')),
})

export type SchoolProfileInput = z.infer<typeof schoolProfileSchema>
