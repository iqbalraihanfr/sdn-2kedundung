import { cookies } from 'next/headers'

export async function getAdminEmail() {
  const cookieStore = await cookies()
  return cookieStore.get('sipanda-auth')?.value ?? null
}

export async function requireAdminEmail() {
  const email = await getAdminEmail()
  if (!email) {
    throw new Error('Unauthorized')
  }
  return email
}
