'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { achievementSchema } from './schemas'
import { achievementService } from './services'
import { storageService } from '@/services/storage.service'

export async function createAchievementAction(formData: FormData) {
  try {
    await requireAdminEmail()
    
    // We ignore imageUrl during schema validation since we handle it manually
    const parsed = achievementSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) return { error: 'Data tidak valid' }

    const image = formData.get('image') as File | null
    let imageUrl = ''

    if (image && image.size > 0) {
      imageUrl = await storageService.uploadImage(image, 'prestasi')
    }

    await achievementService.create({ ...parsed.data, imageUrl })
    revalidatePath('/admin/prestasi')
    revalidatePath('/prestasi')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function updateAchievementAction(id: string, formData: FormData) {
  try {
    await requireAdminEmail()
    const parsed = achievementSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) return { error: 'Data tidak valid' }

    const existingData = await achievementService.getById(id)
    if (!existingData) return { error: 'Data tidak ditemukan' }

    const image = formData.get('image') as File | null
    let imageUrl = existingData.imageUrl || ''

    if (image && image.size > 0) {
      // Hapus gambar lama jika ada
      if (existingData.imageUrl) {
        await storageService.deleteImage(existingData.imageUrl)
      }
      imageUrl = await storageService.uploadImage(image, 'prestasi')
    }

    await achievementService.update(id, { ...parsed.data, imageUrl })
    revalidatePath('/admin/prestasi')
    revalidatePath('/prestasi')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function deleteAchievementAction(id: string) {
  try {
    await requireAdminEmail()
    const existingData = await achievementService.getById(id)
    
    if (existingData?.imageUrl) {
      await storageService.deleteImage(existingData.imageUrl)
    }

    await achievementService.delete(id)
    revalidatePath('/admin/prestasi')
    revalidatePath('/prestasi')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
