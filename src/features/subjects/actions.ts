'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { subjectSchema } from './schemas'
import { subjectService } from './services'

export async function createSubjectAction(formData: FormData) {
  try {
    await requireAdminEmail()
    const parsed = subjectSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) return { error: 'Data tidak valid' }
    await subjectService.create(parsed.data)
    revalidatePath('/admin/mata-pelajaran')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function updateSubjectAction(id: string, formData: FormData) {
  try {
    await requireAdminEmail()
    const parsed = subjectSchema.safeParse(Object.fromEntries(formData))
    if (!parsed.success) return { error: 'Data tidak valid' }
    await subjectService.update(id, parsed.data)
    revalidatePath('/admin/mata-pelajaran')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function deleteSubjectAction(id: string) {
  try {
    await requireAdminEmail()
    await subjectService.delete(id)
    revalidatePath('/admin/mata-pelajaran')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function updateSubjectClassesAction(subjectId: string, formData: FormData) {
  try {
    await requireAdminEmail()
    const classIds = formData.getAll('classIds').map(String)
    await subjectService.updateClassAllocations(subjectId, classIds)
    revalidatePath('/admin/mata-pelajaran')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
