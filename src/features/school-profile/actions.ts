'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { schoolProfileSchema } from './schemas'
import { schoolProfileService } from './services'

export async function updateSchoolProfileAction(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Unauthorized' }
  }

  const parsed = schoolProfileSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return { error: 'Data tidak valid' }
  }

  try {
    await schoolProfileService.updateProfile(parsed.data)
    revalidatePath('/admin/profil')
    revalidatePath('/')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
