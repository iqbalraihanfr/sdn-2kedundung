import { DashboardShell } from '@/components/layout/dashboard-shell'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const session = cookieStore.get('sipanda-auth')

  // Guard untuk proteksi route di sisi server (meskipun middleware/proxy.ts sudah mengecek)
  if (!session) {
    redirect('/login')
  }

  return <DashboardShell email={session.value}>{children}</DashboardShell>
}
