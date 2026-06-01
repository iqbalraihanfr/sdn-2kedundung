'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { announcementSchema } from './schemas'
import { announcementService } from './services'

export async function createAnnouncementAction(formData: FormData) {
  try {
    const email = await requireAdminEmail()
    const parsed = announcementSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) {
      return { error: 'Data tidak valid' }
    }
    await announcementService.create(parsed.data, email)
    revalidatePath('/admin/pengumuman')
    revalidatePath('/') // Revalidate halaman utama
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function updateAnnouncementAction(id: string, formData: FormData) {
  try {
    await requireAdminEmail()
    const parsed = announcementSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) {
      return { error: 'Data tidak valid' }
    }
    await announcementService.update(id, parsed.data)
    revalidatePath('/admin/pengumuman')
    revalidatePath('/')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function deleteAnnouncementAction(id: string) {
  try {
    await requireAdminEmail()
    await announcementService.delete(id)
    revalidatePath('/admin/pengumuman')
    revalidatePath('/')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
