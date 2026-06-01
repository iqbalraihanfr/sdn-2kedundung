'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { achievementSchema } from './schemas'
import { achievementService } from './services'

export async function createAchievementAction(formData: FormData) {
  try {
    await requireAdminEmail()
    const parsed = achievementSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) return { error: 'Data tidak valid' }
    await achievementService.create(parsed.data)
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
    await achievementService.update(id, parsed.data)
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
    await achievementService.delete(id)
    revalidatePath('/admin/prestasi')
    revalidatePath('/prestasi')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
