'use client'

import { Menu, LogOut } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/features/auth/actions'

export function Header({
  email,
  photoURL,
  onMenuClick,
}: {
  email?: string
  photoURL?: string
  onMenuClick: () => void
}) {
  const router = useRouter()

  const handleLogout = async () => {
    await logoutAction()
    router.push('/login')
  }

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-surface-alt/80 backdrop-blur-md px-4 dark:bg-zinc-900/80 sm:px-6 lg:px-8 transition-colors">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:bg-surface-alt hover:text-primary lg:hidden"
          aria-label="Buka menu admin"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="hidden lg:flex items-center gap-2">
          <Image src="/images/logo-sdn2kedundung.png" alt="Logo" width={32} height={32} className="object-contain" />
          <h2 className="text-lg font-bold text-primary">SIPANDA Admin</h2>
        </div>
      </div>

      <div className="ml-auto flex min-w-0 items-center gap-4">
        <div className="min-w-0 text-right text-sm hidden sm:block">
          <p className="font-medium text-primary">Administrator</p>
          <p className="max-w-[11rem] truncate text-xs text-text-secondary sm:max-w-xs">{email}</p>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary overflow-hidden shadow-sm border border-primary/20">
          {photoURL ? (
            <img src={photoURL} alt="Profile" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
          ) : (
            email?.[0].toUpperCase() || 'A'
          )}
        </div>
        <button
          onClick={handleLogout}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10 transition-colors"
          title="Keluar"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
