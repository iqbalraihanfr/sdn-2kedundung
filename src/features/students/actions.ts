'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { studentSchema } from './schemas'
import { studentService } from './services'

export async function createStudentAction(formData: FormData) {
  const cookieStore = await cookies()
  const session = cookieStore.get('sipanda-auth')

  if (!session?.value) return { error: 'Unauthorized' }

  const parsed = studentSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: 'Data tidak valid' }

  try {
    await studentService.create(parsed.data)
    revalidatePath('/admin/data-siswa')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function updateStudentAction(id: string, formData: FormData) {
  const cookieStore = await cookies()
  const session = cookieStore.get('sipanda-auth')

  if (!session?.value) return { error: 'Unauthorized' }

  const parsed = studentSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: 'Data tidak valid' }

  try {
    await studentService.update(id, parsed.data)
    revalidatePath('/admin/data-siswa')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function deleteStudentAction(id: string) {
  const cookieStore = await cookies()
  const session = cookieStore.get('sipanda-auth')

  if (!session?.value) return { error: 'Unauthorized' }

  try {
    await studentService.delete(id)
    revalidatePath('/admin/data-siswa')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
