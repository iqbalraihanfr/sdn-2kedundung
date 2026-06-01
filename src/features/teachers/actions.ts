'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { teacherSchema } from './schemas'
import { teacherService } from './services'

export async function createTeacherAction(formData: FormData) {
  try {
    await requireAdminEmail()
    const parsed = teacherSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) return { error: 'Data tidak valid' }

    await teacherService.create(parsed.data)
    revalidatePath('/admin/guru')
    revalidatePath('/admin/kelas')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function updateTeacherAction(id: string, formData: FormData) {
  try {
    await requireAdminEmail()
    const parsed = teacherSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) return { error: 'Data tidak valid' }

    await teacherService.update(id, parsed.data)
    revalidatePath('/admin/guru')
    revalidatePath('/admin/kelas')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function deleteTeacherAction(id: string) {
  try {
    await requireAdminEmail()
    await teacherService.delete(id)
    revalidatePath('/admin/guru')
    revalidatePath('/admin/kelas')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
