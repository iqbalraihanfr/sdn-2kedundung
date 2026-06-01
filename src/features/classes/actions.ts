'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { classSchema } from './schemas'
import { classService } from './services'

export async function createClassAction(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Unauthorized' }

  const parsed = classSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { error: 'Data tidak valid' }

  try {
    await classService.create(parsed.data)
    revalidatePath('/admin/kelas')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function deleteClassAction(id: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Unauthorized' }

  try {
    await classService.delete(id)
    revalidatePath('/admin/kelas')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
