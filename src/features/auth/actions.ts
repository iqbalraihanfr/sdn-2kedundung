'use server'

import { createClient } from '@/lib/supabase/server'
import { loginSchema } from './schemas'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  const parsed = loginSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return { error: 'Data yang dimasukkan tidak valid' }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  })

  if (error) {
    return { error: 'Email atau kata sandi salah' }
  }

  redirect('/admin')
}
