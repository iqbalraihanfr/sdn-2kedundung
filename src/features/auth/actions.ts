'use server'

import { cookies } from 'next/headers'
import { db } from '@/lib/db'

export async function setSessionAction(email: string) {
  // 1. Periksa apakah email ada di whitelist
  const admin = await db.adminWhitelist.findUnique({
    where: { email },
  })

  if (!admin) {
    return { error: 'Akses ditolak: Email Anda belum terdaftar sebagai admin.' }
  }

  // 2. Set HTTP-only cookie
  const cookieStore = await cookies()
  cookieStore.set('sipanda-auth', email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 minggu
    path: '/',
  })

  return { success: true }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('sipanda-auth')
}
