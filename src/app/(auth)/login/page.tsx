import { LoginForm } from '@/features/auth/components/LoginForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const cookieStore = await cookies()
  if (cookieStore.has('sipanda-auth')) {
    redirect('/admin')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
      <LoginForm />
    </main>
  )
}
