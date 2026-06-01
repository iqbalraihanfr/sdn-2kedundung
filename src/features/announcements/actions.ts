'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { announcementSchema } from './schemas'
import { announcementService } from './services'

export async function createAnnouncementAction(formData: FormData) {
  const supabase = await createClient()
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return { error: 'Unauthorized' }
  }

  const parsed = announcementSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return { error: 'Data tidak valid' }
  }

  try {
    await announcementService.create(parsed.data, user.id)
    revalidatePath('/admin/pengumuman')
    revalidatePath('/') // Revalidate halaman utama
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function updateAnnouncementAction(id: string, formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Unauthorized' }
  }

  const parsed = announcementSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return { error: 'Data tidak valid' }
  }

  try {
    await announcementService.update(id, parsed.data)
    revalidatePath('/admin/pengumuman')
    revalidatePath('/')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}

export async function deleteAnnouncementAction(id: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Unauthorized' }
  }

  try {
    await announcementService.delete(id)
    revalidatePath('/admin/pengumuman')
    revalidatePath('/')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
